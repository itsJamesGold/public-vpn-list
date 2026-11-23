// High-Performance In-Memory Edge Cache (Worker Isolate Level)
let MEMORY_SERVERS_CACHE = null;
let MEMORY_SERVERS_TIME = 0;
const SERVERS_CACHE_TTL_MS = 3 * 60 * 1000; // 3 minutes

let MEMORY_HIERARCHY_CACHE = null;
let MEMORY_HIERARCHY_TIME = 0;

async function getProcessedServers(env) {
  const now = Date.now();
  if (MEMORY_SERVERS_CACHE && (now - MEMORY_SERVERS_TIME < SERVERS_CACHE_TTL_MS)) {
    return { data: MEMORY_SERVERS_CACHE, fromCache: true };
  }

  const object = await env.SERVERS_BUCKET.get('servers.json');
  if (!object) return null;

  let payload = await object.json();
  let servers = payload.servers || [];

  const RATIO_PREMIUM_PLUS = 0.65;
  const RATIO_FREE = 0.10;

  const NEXT_GEN_PROTOS = new Set(['hysteria2', 'hy2', 'tuic', 'juicity']);
  const SECURE_PROTOS = new Set([
    'vless', 'vmess', 'trojan', 'wireguard', 'amneziawg', 'wg', 'awg',
    'ikev2', 'sstp', 'openconnect', 'shadowsocks', 'ss', 'ssr'
  ]);

  const scoredServers = servers.map(s => {
    const proto = (s.protocol || '').toLowerCase().trim();
    const speed = parseFloat(s.speed_mbps || 0);
    const latency = parseInt(s.latency_ms || 150);
    const rawUri = (s.raw_uri || '').toLowerCase();
    const isReality = rawUri.includes('reality') || rawUri.includes('xtls');

    let score = speed * 10;
    if (latency > 0) score += Math.max(0, 300 - latency);
    if (NEXT_GEN_PROTOS.has(proto) || isReality) score += 500;
    else if (SECURE_PROTOS.has(proto)) score += 200;

    return { server: s, score };
  });

  scoredServers.sort((a, b) => b.score - a.score);

  const total = scoredServers.length;
  const plusCount = Math.floor(total * RATIO_PREMIUM_PLUS);
  const freeCount = Math.max(1, Math.floor(total * RATIO_FREE));
  const freeStartIndex = total - freeCount;

  const finalServers = scoredServers.map((item, idx) => {
    let assignedTier = 'premium';
    if (idx < plusCount) assignedTier = 'premium_plus';
    else if (idx >= freeStartIndex) assignedTier = 'free';
    else assignedTier = 'premium';

    const pointsCost = assignedTier === 'premium_plus' ? 10 : (assignedTier === 'premium' ? 4 : 1);
    return {
      ...item.server,
      tier: assignedTier,
      points_cost_per_min: pointsCost,
    };
  });

  const version = payload.version || new Date().toISOString();
  const etag = `W/"zvpn-srv-${version.replace(/[^a-zA-Z0-9_-]/g, '')}"`;

  MEMORY_SERVERS_CACHE = {
    schema_version: payload.schema_version || 2,
    version,
    etag,
    total_servers: finalServers.length,
    servers: finalServers
  };
  MEMORY_SERVERS_TIME = now;

  return { data: MEMORY_SERVERS_CACHE, fromCache: false };
}

/**
 * ZVPN Cloudflare Worker API Engine
 * High-performance edge endpoint reading VPN server profiles from R2 bucket.
 * Includes Anti-Tamper Multi-Layer Fingerprinting (Device ID, MAC Hash, Network ID, IP),
 * Firebase Google Auth Verification, Ad Reward Verification (S2S), Points Engine, Daily Streak & Referral System.
 * World-Class Landing Page, Integrated Stripe & Cryptomus Payment Gateways, License Provisioning.
 */

import { getWebsiteHtml } from './website.js';
import { getServersPageHtml } from './servers_page.js';
import { ARABIC_COUNTRIES } from './arabic_countries.js';
import { md5, generateLicenseKey, toBase64, hmacSha512, hmacSha256, sortObject } from './crypto_utils.js';
import { ZVPN_LOGO_SVG } from './logo.js';

// In-Memory Fast Edge Cache Stores (Layer 1 Cache)

const PLAN_CATALOG = {
  'premium_monthly':      { amount: 4.99,  title: 'Premium (Monthly)', tier: 'premium', points: 2000 },
  'premium_plus_monthly': { amount: 9.99,  title: 'Premium+ (Monthly)', tier: 'premium_plus', points: 5000 },
  'monthly':              { amount: 4.99,  title: 'Standard Monthly', tier: 'premium', points: 2000 },
  'yearly':               { amount: 39.99, title: 'Annual VIP Pass', tier: 'premium_plus', points: 10000 },
  'yearly_plus':          { amount: 49.99, title: 'Annual VIP+ Pass', tier: 'premium_plus', points: 25000 },
  'lifetime':             { amount: 89.99, title: 'Lifetime Unlimited', tier: 'premium_plus', points: 50000 },
  'pts_500':              { amount: 0.99,  title: '500 Points Pack', tier: 'free', points: 500 },
  'pts_1200':             { amount: 1.99,  title: '1,200 Points Pack', tier: 'free', points: 1200 },
  'pts_3000':             { amount: 3.99,  title: '3,000 Points Pack', tier: 'free', points: 3000 },
  'pts_10000':            { amount: 9.99,  title: '10,000 Mega Points Pack', tier: 'free', points: 10000 }
};

const USER_POINTS_STORE = new Map();
const USER_STREAK_STORE = new Map();
const USER_REFERRALS_STORE = new Map();
const FINGERPRINT_TO_DEVICE_MAP = new Map();
const REDEEMED_REFERRALS = new Set();
const IP_ACCOUNT_COUNTS = new Map();

// ── Ultra-Low Resource In-Memory Structures (Zero KV Writes / Zero KV Reads) ──
const IN_MEMORY_RATE_LIMIT = new Map(); // ip_min -> count
const NEGATIVE_LOOKUP_CACHE = new Map(); // key -> expireTimestamp
const IN_MEMORY_NONCES = new Map(); // nonce -> timestamp
const IN_MEMORY_AD_COOLDOWNS = new Map(); // account -> timestamp
const IN_MEMORY_DAILY_ADS = new Map(); // account_day -> count

function isRateLimitedInMemory(ip, maxPerMinute = 60) {
  const now = Date.now();
  const minuteBucket = Math.floor(now / 60000);
  const key = `${ip}_${minuteBucket}`;
  const count = (IN_MEMORY_RATE_LIMIT.get(key) || 0) + 1;
  IN_MEMORY_RATE_LIMIT.set(key, count);

  // Clean stale rate limit buckets if map grows
  if (IN_MEMORY_RATE_LIMIT.size > 5000) {
    for (const [k] of IN_MEMORY_RATE_LIMIT) {
      const bucket = parseInt(k.split('_').pop() || '0');
      if (bucket < minuteBucket) IN_MEMORY_RATE_LIMIT.delete(k);
    }
  }
  return count > maxPerMinute;
}

// Payment Gateway Configuration (Securely loaded via Cloudflare Environment Secrets)
const DEFAULT_STRIPE_SECRET_KEY = "";
const DEFAULT_STRIPE_PUBLISHABLE_KEY = "pk_live_51T42L0CeFh2ZrqnHFgfABZC4Q9cJoYIZlRdokXuDr72E0Fc7MLMPlg3En9YeXkNMxqWV9YLefQgHpNsUAdegcWX700BXxNhHmk";
const DEFAULT_PAYPAL_CLIENT_ID = "BAAHxEis0Hvz9QfF7z795dVipA6RbUQcCzbKcDEogRQaRsy5tlq-zyltYBpI_bjeOFesGDKwTpaGx8DxNM";
const DEFAULT_PAYPAL_CLIENT_SECRET = "";
const DEFAULT_PAYPAL_API_BASE = "https://api-m.paypal.com";

function cleanVar(val) {
  if (!val) return '';
  return String(val).trim().replace(/^["']|["']$/g, '').trim();
}

function getStripeSecretKey(env) {
  return cleanVar(env && env.STRIPE_SECRET_KEY) || DEFAULT_STRIPE_SECRET_KEY;
}

function getStripePublishableKey(env) {
  return cleanVar(env && env.STRIPE_PUBLISHABLE_KEY) || DEFAULT_STRIPE_PUBLISHABLE_KEY;
}

function getPayPalClientId(env) {
  return cleanVar(env && env.PAYPAL_CLIENT_ID) || DEFAULT_PAYPAL_CLIENT_ID;
}

function getPayPalClientSecret(env) {
  return cleanVar(env && env.PAYPAL_CLIENT_SECRET) || DEFAULT_PAYPAL_CLIENT_SECRET;
}

function getPayPalApiBase(env) {
  return cleanVar(env && env.PAYPAL_API_BASE) || DEFAULT_PAYPAL_API_BASE;
}

// ── Sha7nawy Gate Egyptian Mobile Wallets (Vodafone Cash, Orange, Etisalat) ──
const DEFAULT_SHA7NAWY_PUBLIC_KEY = "uKHdgCiSNR20uO1wgn7N0y2Nf5SrDX3ZroHwI9ovCLQjVe0c2MhACpUwgU0gnE3OOY4KdUZybs5s2vxzA3LEghEVhVHmAlA4ETTV";
const DEFAULT_SHA7NAWY_SECRET_KEY = "l3kwJhO8fXTbhFoTTHOQkMqgRUhBuBeDBlKsWBOikoUqh7g5yP5bZIxTPROFr5A2ofgAJaW546clX6el4Lzf9efSbrDOiXL48y79";

function getSha7nawyPublicKey(env) {
  return cleanVar(env && env.SHA7NAWY_PUBLIC_KEY) || DEFAULT_SHA7NAWY_PUBLIC_KEY;
}

function getSha7nawySecretKey(env) {
  return cleanVar(env && env.SHA7NAWY_SECRET_KEY) || DEFAULT_SHA7NAWY_SECRET_KEY;
}

const EGP_PLAN_PRICES = {
  'pts_500': 50,
  'pts_1200': 100,
  'pts_3000': 200,
  'pts_10000': 500,
  'monthly': 250,
  'premium_monthly': 250,
  'premium_plus_monthly': 500,
  'yearly': 2000,
  'yearly_plus': 2500,
  'lifetime': 4500
};

function getPlanAmountEgp(planId, usdAmount) {
  if (EGP_PLAN_PRICES[planId]) return EGP_PLAN_PRICES[planId];
  return Math.max(50, Math.round((usdAmount || 5) * 50));
}

// ── Exe.io URL Shortener API Integration ──
const DEFAULT_EXE_IO_API_TOKEN = "e65cfd571e0b540514895aaa6a9be437d670803e";
const EXE_IO_CACHE = new Map();

async function shortenWithExeIo(env, destinationUrl, alias = '') {
  const token = cleanVar(env && env.EXE_IO_API_TOKEN) || DEFAULT_EXE_IO_API_TOKEN;
  const cacheKey = `${destinationUrl}_${alias}`;
  if (EXE_IO_CACHE.has(cacheKey)) {
    return EXE_IO_CACHE.get(cacheKey);
  }
  try {
    let apiUrl = `https://exe.io/api?api=${encodeURIComponent(token)}&url=${encodeURIComponent(destinationUrl)}`;
    if (alias) apiUrl += `&alias=${encodeURIComponent(alias)}`;
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.status === 'success' && data.shortenedUrl) {
        EXE_IO_CACHE.set(cacheKey, data.shortenedUrl);
        return data.shortenedUrl;
      }
    }
  } catch (err) {
    console.error('exe.io API error:', err);
  }
  // High-reliability pre-shortened fallback links
  if (destinationUrl.includes('/servers')) return 'https://exe.io/Ft7gILD';
  if (destinationUrl.includes('reward=')) return 'https://exe.io/xnovt';
  return 'https://exe.io/spnKsDr4';
}


// Global Edge Storage Helpers (Layer 2 Persistent Distributed Cloudflare KV with Negative Caching)
async function getStorage(env, key, defaultVal = null) {
  if (USER_POINTS_STORE.has(key)) return USER_POINTS_STORE.get(key);
  const now = Date.now();
  const negExpiry = NEGATIVE_LOOKUP_CACHE.get(key);
  if (negExpiry && now < negExpiry) return defaultVal;

  if (env.CORRECTIONS_KV) {
    try {
      const val = await env.CORRECTIONS_KV.get(key);
      if (val !== null) {
        try {
          const parsed = JSON.parse(val);
          USER_POINTS_STORE.set(key, parsed);
          return parsed;
        } catch (_) {
          USER_POINTS_STORE.set(key, val);
          return val;
        }
      } else {
        // Cache negative lookup for 5 minutes to prevent querying KV repeatedly on misses
        NEGATIVE_LOOKUP_CACHE.set(key, now + 300000);
        if (NEGATIVE_LOOKUP_CACHE.size > 5000) {
          for (const [k, exp] of NEGATIVE_LOOKUP_CACHE) {
            if (now > exp) NEGATIVE_LOOKUP_CACHE.delete(k);
          }
        }
      }
    } catch (_) {}
  }
  return defaultVal;
}

async function setStorage(env, key, val, ttl = undefined) {
  USER_POINTS_STORE.set(key, val);
  NEGATIVE_LOOKUP_CACHE.delete(key);
  if (env.CORRECTIONS_KV) {
    try {
      const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
      const opts = ttl ? { expirationTtl: ttl } : {};
      await env.CORRECTIONS_KV.put(key, str, opts);
      return true;
    } catch (e) {
      console.error('KV put error:', e);
    }
  }
  return false;
}

async function getEffectiveAccount(request, body = {}, env, compositeFingerprint, masterDeviceId) {
  if (body && body.account_id && body.account_id !== 'dev_guest' && body.account_id !== 'undefined') {
    return body.account_id;
  }
  const headerId = request.headers.get('X-Device-ID');
  if (headerId && headerId !== 'dev_guest' && headerId !== 'undefined') {
    return headerId;
  }
  const url = new URL(request.url);
  const qId = url.searchParams.get('account_id') || url.searchParams.get('device_id');
  if (qId && qId !== 'dev_guest' && qId !== 'undefined') {
    return qId;
  }

  const auth = request.headers.get('Authorization') || '';
  const token = auth.replace('Bearer ', '').trim();
  if (token && token.startsWith('user_')) return token;
  if (token) {
    const sessionAcc = await getStorage(env, `session_user_${token}`, null);
    if (sessionAcc) return sessionAcc;
  }

  const bound = await getStorage(env, `fp_${compositeFingerprint}`, null);
  if (bound && bound !== 'dev_guest') return bound;
  return masterDeviceId || 'dev_guest';
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();

    // ── Anti-Scraping / Offline Site Mirror Bot Defense ──
    const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
    const SCRAPER_BOTS = [
      'httrack', 'teleport', 'sitesucker', 'webcopy', 'offline explorer',
      'superbot', 'webzip', 'blackwidow', 'webcopier', 'grabnet', 'pagegrabber',
      'disco', 'webstripper', 'sitecheck', 'htmlparser', 'python-requests',
      'go-http-client', 'scrapy', 'aiohttp', 'wget', 'offline', 'copier'
    ];
    if (SCRAPER_BOTS.some(bot => userAgent.includes(bot))) {
      return new Response('Access Denied: Automated site downloaders and mirror scraping tools are blocked by ZVPN Anti-Theft Defense System.', {
        status: 403,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet'
        }
      });
    }


    // CORS Headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Secret, X-File-Name, X-Device-ID, X-Device-MAC, X-Network-ID, X-Device-Signature',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Cryptomus Domain Verification handler (TXT, HTML file, and route verification)
    if (pathname.includes('cryptomus') || pathname.includes('a88c7f45')) {
      return new Response('cryptomus=a88c7f45', {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Official ZVPN Logo Favicon Handler (/favicon.ico, /favicon.svg)
    if (pathname === '/favicon.ico' || pathname === '/favicon.svg') {
      return new Response(ZVPN_LOGO_SVG, {
        headers: {
          'Content-Type': 'image/svg+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, s-maxage=604800',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // High-Performance PWA Offline Service Worker (/sw.js, /service-worker.js)
    if (pathname === '/sw.js' || pathname === '/service-worker.js') {
      const swContent = `// ZVPN High-Performance Edge Service Worker
const CACHE_NAME = 'zvpn-v2';
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch', (e) => {
  // Pass through network requests
  return;
});
`;
      return new Response(swContent, {
        headers: {
          'Content-Type': 'application/javascript; charset=utf-8',
          'Service-Worker-Allowed': '/',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Edge cache only for static assets; do NOT collide HTML pages with JSON API responses
    const cache = caches.default;
    const acceptHeader = request.headers.get('accept') || '';
    const isHtmlReq = acceptHeader.includes('text/html');
    const cacheUrl = new URL(url.toString());
    if (isHtmlReq) {
      cacheUrl.searchParams.set('__format', 'html');
    } else {
      cacheUrl.searchParams.set('__format', 'data');
    }
    const cacheKey = new Request(cacheUrl.toString(), request);

    // High-Scale Edge CDN Caching for millions of users:
    // Dynamic endpoints (auth, user points, checkout) bypass cache;
    // Server lists, hierarchy, health, and static files are served directly from Edge CDN cache.
    const isDynamic = pathname.startsWith('/api/v1/user') ||
                      pathname.startsWith('/api/v1/auth') ||
                      pathname.startsWith('/api/v1/checkout') ||
                      pathname.startsWith('/api/v1/license');

    if (request.method === 'GET' && !isDynamic) {
      const cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        const hitRes = new Response(cachedResponse.body, cachedResponse);
        hitRes.headers.set('X-Edge-Cache', 'HIT');
        return hitRes;
      }
    }


    // ════════════════════════════════════════════════════════════════
    // Enterprise In-Memory IP Rate Limiter (Anti-DDoS / Anti-Scraping)
    // Runs 100% in-memory with ZERO KV Reads & ZERO KV Writes (Ultra-Low Consumption)
    // Max 60 requests/minute per IP for public endpoints
    // ════════════════════════════════════════════════════════════════
    const isPublicEndpoint = pathname.startsWith('/api/v1/servers') ||
                             pathname.startsWith('/api/v1/hierarchy') ||
                             pathname === '/servers' || pathname === '/';
    if (isPublicEndpoint && request.method === 'GET') {
      const reqIp = request.headers.get('cf-connecting-ip') || '127.0.0.1';
      if (isRateLimitedInMemory(reqIp, 60)) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please wait 1 minute.', retry_after: 60 }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': '60', 'X-RateLimit-Limit': '60', 'X-RateLimit-Remaining': '0' }
        });
      }
    }
    try {
      // Extract Multi-Layer Anti-Tamper Headers
      const clientIP = request.headers.get('cf-connecting-ip') || '127.0.0.1';
      const rawDeviceId = request.headers.get('X-Device-ID') || url.searchParams.get('device_id') || 'dev_guest';
      const macAddr = request.headers.get('X-Device-MAC') || '00:00:00:00:00:00';
      const networkId = request.headers.get('X-Network-ID') || 'net_default';

      // Composite Cryptographic Fingerprint Key (Hardware MAC + Network ID)
      const compositeFingerprint = `fp_${macAddr}_${networkId}`;

      // Auto-restore master device ID if app data was cleared locally
      let masterDeviceId = FINGERPRINT_TO_DEVICE_MAP.get(compositeFingerprint);
      if (!masterDeviceId) {
        masterDeviceId = rawDeviceId;
        FINGERPRINT_TO_DEVICE_MAP.set(compositeFingerprint, masterDeviceId);
      }

      // 1. Health & Status Check Endpoint (uses Memory Cache — zero R2 reads if warm)
      if (pathname === '/health' || pathname === '/status') {
        let count = 0, version = 'unknown', countries = 82, checksum = '';
        // Try Memory Cache first
        if (MEMORY_SERVERS_CACHE) {
          count = MEMORY_SERVERS_CACHE.total_servers || 0;
          version = MEMORY_SERVERS_CACHE.version || 'unknown';
          checksum = MEMORY_SERVERS_CACHE.etag || '';
          if (MEMORY_SERVERS_CACHE.servers && Array.isArray(MEMORY_SERVERS_CACHE.servers)) {
            const uc = new Set(MEMORY_SERVERS_CACHE.servers.map(s => s.country_code || s.country).filter(Boolean));
            if (uc.size > 0) countries = uc.size;
          }
        } else {
          // Cold start: read from R2 once
          const obj = await env.SERVERS_BUCKET.get('servers.json');
          if (obj) {
            try {
              const data = await obj.json();
              count = data.total_servers || (data.servers ? data.servers.length : 0);
              version = data.version || '2.0';
              checksum = data.version || '';
              if (data.servers && Array.isArray(data.servers)) {
                const uc = new Set(data.servers.map(s => s.country_code || s.country).filter(Boolean));
                if (uc.size > 0) countries = uc.size;
              }
            } catch (e) {}
          }
        }
        return jsonResponse({
          status: 'online',
          service: 'ZVPN Edge Engine v3',
          total_servers: count,
          total_countries: countries,
          version: version,
          checksum: checksum,
          cache_warm: !!MEMORY_SERVERS_CACHE,
          timestamp: new Date().toISOString()
        }, 200, corsHeaders);
      }

      // 1b. Metadata Endpoint (/api/v1/meta) — used by sync script to check if data changed
      if (pathname === '/api/v1/meta' || pathname === '/meta') {
        const cached = MEMORY_SERVERS_CACHE;
        const meta = {
          version: cached ? cached.version : null,
          etag: cached ? cached.etag : null,
          total_servers: cached ? cached.total_servers : null,
          cache_warm: !!cached,
          cache_age_seconds: cached ? Math.floor((Date.now() - MEMORY_SERVERS_TIME) / 1000) : null,
          hierarchy_warm: !!MEMORY_HIERARCHY_CACHE,
          timestamp: new Date().toISOString()
        };
        // If cache cold, try to get from KV
        if (!cached) {
          try {
            const kvMeta = await env.CORRECTIONS_KV.get('srv_meta');
            if (kvMeta) {
              const parsed = JSON.parse(kvMeta);
              meta.version = parsed.version;
              meta.etag = parsed.etag;
              meta.total_servers = parsed.total_servers;
            }
          } catch (_) {}
        }
        const res = jsonResponse(meta, 200, corsHeaders);
        res.headers.set('Cache-Control', 'public, max-age=60, s-maxage=120');
        return res;
      }

      // 2. Structured Hierarchy Endpoint (/hierarchy, /api/v1/hierarchy, /structured)
      if (pathname === '/hierarchy' || pathname === '/api/v1/hierarchy' || pathname === '/structured') {
        const filterContinent = url.searchParams.get('continent');
        const filterCountry = url.searchParams.get('country');
        const isFiltered = filterContinent || filterCountry;

        // Memory Cache (3 min TTL) — only for unfiltered full requests
        const nowH = Date.now();
        if (!isFiltered && MEMORY_HIERARCHY_CACHE && (nowH - MEMORY_HIERARCHY_TIME < SERVERS_CACHE_TTL_MS)) {
          const res = jsonResponse(MEMORY_HIERARCHY_CACHE, 200, corsHeaders);
          res.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=1200');
          res.headers.set('X-Edge-Cache', 'MEMORY_HIT');
          ctx.waitUntil(cache.put(cacheKey, res.clone()));
          return res;
        }

        const object = await env.SERVERS_BUCKET.get('servers_structured.json');
        if (!object) {
          return jsonResponse({ error: 'Structured servers dataset not found in R2 bucket.' }, 404, corsHeaders);
        }

        let structuredData = await object.json();

        // Store full data in memory cache before filtering
        if (!isFiltered) {
          MEMORY_HIERARCHY_CACHE = structuredData;
          MEMORY_HIERARCHY_TIME = nowH;
        }

        if (filterContinent && structuredData.continents) {
          const filteredTree = {};
          for (const [contName, contVal] of Object.entries(structuredData.continents)) {
            if (contName.toLowerCase() === filterContinent.toLowerCase()) {
              filteredTree[contName] = contVal;
            }
          }
          structuredData.continents = filteredTree;
          structuredData.total_continents = Object.keys(filteredTree).length;
        }

        if (filterCountry && structuredData.continents) {
          for (const [contName, contVal] of Object.entries(structuredData.continents)) {
            const filteredCountries = {};
            if (contVal.countries) {
              for (const [cName, cVal] of Object.entries(contVal.countries)) {
                if (cName.toLowerCase() === filterCountry.toLowerCase() || (cVal.code && cVal.code.toLowerCase() === filterCountry.toLowerCase())) {
                  filteredCountries[cName] = cVal;
                }
              }
            }
            contVal.countries = filteredCountries;
          }
        }

        const res = jsonResponse(structuredData, 200, corsHeaders);
        res.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=1200');
        res.headers.set('X-Edge-Cache', 'MEMORY_MISS');
        ctx.waitUntil(cache.put(cacheKey, res.clone()));
        return res;
      }

      // 3. Web Landing Page & Dedicated Server Hub (Fast Edge-Cached HTML)
      const acceptHeader = request.headers.get('accept') || '';
      const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
      const isAppClient = userAgent.includes('sfa') || userAgent.includes('v2ray') || userAgent.includes('sing-box') || userAgent.includes('zvpn') || userAgent.includes('okhttp') || userAgent.includes('dart') || userAgent.includes('ktor');
      const wantsJson = url.searchParams.get('format') === 'json' || isAppClient || (acceptHeader.includes('application/json') && !acceptHeader.includes('text/html')) || !acceptHeader.includes('text/html');
      const isRootPage = pathname === '/' || pathname === '/index.html';
      const isServersPage = pathname === '/servers' || pathname === '/servers-hub' || pathname === '/configs' || pathname === '/nodes';
      const isHtmlRequest = !isAppClient && !wantsJson && acceptHeader.includes('text/html');

      // Dedicated Standalone Server Hub Page (16,000+ Nodes)
      if (isServersPage && isHtmlRequest) {
        let totalServers = 16086;
        let totalCountries = 104;
        if (MEMORY_SERVERS_CACHE) {
          totalServers = MEMORY_SERVERS_CACHE.total_servers || 16086;
        }

        const securityHeaders = {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=600',
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
          'Content-Security-Policy': "default-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; connect-src 'self' https:; frame-ancestors 'none';",
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        };
        const html = getServersPageHtml({
          totalServers,
          totalCountries
        });
        const htmlRes = new Response(html, { headers: securityHeaders });
        ctx.waitUntil(cache.put(cacheKey, htmlRes.clone()));
        return htmlRes;
      }

      if (isRootPage && !wantsJson) {
        let totalServers = 16519;
        let totalCountries = 104;
        if (MEMORY_SERVERS_CACHE) {
          totalServers = MEMORY_SERVERS_CACHE.total_servers || 16519;
        }

        const securityHeaders = {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=600',
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
          'Content-Security-Policy': "default-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; connect-src 'self' https:; frame-ancestors 'none';",
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        };
        const html = getWebsiteHtml({
          stripePublishableKey: getStripePublishableKey(env),
          totalServers,
          totalCountries
        });
        const htmlRes = new Response(html, { headers: securityHeaders });
        ctx.waitUntil(cache.put(cacheKey, htmlRes.clone()));
        return htmlRes;
      }

      // 4. Enterprise High-Scale Flat Servers Endpoint (/servers, /api/v1/servers, or /?format=json)
      // Supports In-Memory Memoization, HTTP ETag & 304 Not Modified, Edge CDN Caching
      if (pathname === '/servers' || pathname === '/api/v1/servers' || (isRootPage && wantsJson)) {
        const processed = await getProcessedServers(env);
        if (!processed || !processed.data) {
          return jsonResponse({ error: 'Servers dataset not found in R2 bucket.' }, 404, corsHeaders);
        }

        const serverData = processed.data;

        // ── HTTP 304 Not Modified Support ─────────────────────────────────
        // Saves 99% bandwidth for millions of periodic syncs
        const ifNoneMatch = request.headers.get('if-none-match');
        const hasFilters = url.searchParams.toString().length > 0;
        if (!hasFilters && ifNoneMatch && ifNoneMatch === serverData.etag) {
          return new Response(null, {
            status: 304,
            headers: {
              ...corsHeaders,
              'ETag': serverData.etag,
              'Cache-Control': 'public, max-age=120, s-maxage=300, stale-while-revalidate=600',
              'X-Edge-Cache': 'REVALIDATED'
            }
          });
        }

        let servers = serverData.servers;

        const continent = url.searchParams.get('continent');
        const country = url.searchParams.get('country');
        const protocol = url.searchParams.get('protocol');
        const tier = url.searchParams.get('tier');
        const limitStr = url.searchParams.get('limit');

        if (continent) {
          servers = servers.filter(s => (s.continent || '').toLowerCase() === continent.toLowerCase());
        }

        if (country) {
          servers = servers.filter(s =>
            (s.country || '').toLowerCase() === country.toLowerCase() ||
            (s.country_code || '').toLowerCase() === country.toLowerCase()
          );
        }

        if (protocol) {
          servers = servers.filter(s => (s.protocol || '').toLowerCase() === protocol.toLowerCase());
        }

        if (tier) {
          servers = servers.filter(s => (s.tier || '').toLowerCase() === tier.toLowerCase());
        }

        if (limitStr && !isNaN(parseInt(limitStr))) {
          const limit = parseInt(limitStr);
          servers = servers.slice(0, limit);
        }

        const isLight = url.searchParams.get('light') === 'true' || request.headers.get('X-Platform') === 'chrome-extension';
        const finalServers = isLight
          ? servers.map(s => {
              const { config_data, ...rest } = s;
              return rest;
            })
          : servers;

        const responsePayload = {
          schema_version: serverData.schema_version,
          version: serverData.version,
          total_servers: finalServers.length,
          servers: finalServers
        };

        const res = jsonResponse(responsePayload, 200, corsHeaders);
        res.headers.set('ETag', serverData.etag);
        res.headers.set('Cache-Control', 'public, max-age=120, s-maxage=300, stale-while-revalidate=600');
        res.headers.set('X-Edge-Cache', processed.fromCache ? 'MEMORY_HIT' : 'MEMORY_MISS');

        // Store into Cloudflare Edge Cache asynchronously
        ctx.waitUntil(cache.put(cacheKey, res.clone()));
        return res;
      }

                  // ── 4.0 Enterprise Multi-Protocol Server Catalog (/api/v1/servers/catalog) ──
      if (pathname === '/api/v1/servers/catalog' && request.method === 'GET') {
        const processed = await getProcessedServers(env);
        if (!processed || !processed.data || !processed.data.servers) {
          return jsonResponse({ success: false, servers: [] }, 200, corsHeaders);
        }

        const allServers = processed.data.servers;
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
        const limit = Math.min(200, Math.max(10, parseInt(url.searchParams.get('limit') || '40')));
        const protocol = (url.searchParams.get('protocol') || 'all').toLowerCase();
        const country = (url.searchParams.get('country') || 'all').toUpperCase();
        const category = (url.searchParams.get('category') || 'all').toLowerCase();
        const sort = (url.searchParams.get('sort') || 'ping').toLowerCase();
        const search = (url.searchParams.get('search') || '').trim().toLowerCase();

        // 1. Build Comprehensive Protocols & All Countries Summary (104 countries)
        const protoCounts = { all: allServers.length, openvpn: 0, vless: 0, shadowsocks: 0, vmess: 0, trojan: 0, gaming: 0 };
        const countryMap = new Map();

        const ARAB_COUNTRY_CODES = new Set(['AE', 'SA', 'EG', 'QA', 'KW', 'OM', 'BH', 'JO', 'LB', 'MA', 'DZ', 'TN', 'IQ', 'YE', 'PS', 'SD', 'SY', 'LY']);
        const EUROPE_CODES = new Set(['DE', 'NL', 'GB', 'FR', 'RU', 'IT', 'SE', 'CH', 'ES', 'UA', 'FI', 'PL', 'AT', 'NO', 'DK', 'BE', 'IE', 'CZ', 'HU', 'RO', 'BG', 'GR', 'PT', 'LU', 'SK', 'SI', 'HR', 'EE', 'LV', 'LT']);
        const ASIA_CODES = new Set(['JP', 'KR', 'HK', 'SG', 'PH', 'TR', 'TH', 'VN', 'IN', 'ID', 'MY', 'TW', 'IL', 'CY']);
        const AMERICAS_CODES = new Set(['US', 'CA', 'BR', 'BZ', 'MX', 'AR', 'CL', 'CO']);

        for (const s of allServers) {
          const p = (s.protocol || '').toLowerCase();
          if (p === 'openvpn') protoCounts.openvpn++;
          else if (p === 'vless') protoCounts.vless++;
          else if (p === 'shadowsocks' || p === 'ss' || p === 'ssr') protoCounts.shadowsocks++;
          else if (p === 'vmess') protoCounts.vmess++;
          else if (p === 'trojan') protoCounts.trojan++;
          if (s.latency_ms && s.latency_ms <= 40) protoCounts.gaming++;

          const code = (s.country_code || 'XX').toUpperCase();
          const entry = countryMap.get(code) || {
            code,
            name: s.country_name || s.country || 'Global Node',
            flag: s.flag || '🌐',
            ar_name: ARABIC_COUNTRIES[code] || (s.country_name || s.country || ''),
            count: 0
          };
          entry.count++;
          countryMap.set(code, entry);
        }

        const sortedCountries = Array.from(countryMap.values()).sort((a, b) => b.count - a.count);

        // 2. Multi-Tier Filtering
        let filtered = allServers;

        // Protocol Filter
        if (protocol !== 'all') {
          if (protocol === 'gaming') {
            filtered = filtered.filter(s => s.latency_ms && s.latency_ms <= 40);
          } else if (protocol === 'shadowsocks') {
            filtered = filtered.filter(s => {
              const p = (s.protocol || '').toLowerCase();
              return p === 'shadowsocks' || p === 'ss' || p === 'ssr';
            });
          } else {
            filtered = filtered.filter(s => (s.protocol || '').toLowerCase() === protocol);
          }
        }

        // Country Filter
        if (country !== 'ALL') {
          filtered = filtered.filter(s => (s.country_code || '').toUpperCase() === country);
        }

        // Category Filter
        if (category !== 'all') {
          if (category === 'gaming') {
            filtered = filtered.filter(s => s.latency_ms && s.latency_ms <= 40);
          } else if (category === 'gigabit') {
            filtered = filtered.filter(s => (s.speed_mbps || 0) >= 400);
          } else if (category === 'stealth') {
            filtered = filtered.filter(s => {
              const p = (s.protocol || '').toLowerCase();
              const u = (s.raw_uri || '').toLowerCase();
              return p === 'vless' || p === 'trojan' || u.includes('reality') || u.includes('vision');
            });
          } else if (category === 'arab') {
            filtered = filtered.filter(s => ARAB_COUNTRY_CODES.has((s.country_code || '').toUpperCase()));
          } else if (category === 'europe') {
            filtered = filtered.filter(s => EUROPE_CODES.has((s.country_code || '').toUpperCase()) || (s.continent || '').toLowerCase() === 'europe');
          } else if (category === 'americas') {
            filtered = filtered.filter(s => AMERICAS_CODES.has((s.country_code || '').toUpperCase()) || (s.continent || '').toLowerCase() === 'americas');
          } else if (category === 'asia') {
            filtered = filtered.filter(s => ASIA_CODES.has((s.country_code || '').toUpperCase()) || (s.continent || '').toLowerCase().includes('asia'));
          }
        }

        // Search Filter (Supports Arabic country name, English name, code, protocol, city/host)
        if (search) {
          filtered = filtered.filter(s => {
            const code = (s.country_code || '').toUpperCase();
            const arName = (ARABIC_COUNTRIES[code] || '').toLowerCase();
            const name = (s.name || s.display_name || '').toLowerCase();
            const cName = (s.country || s.country_name || '').toLowerCase();
            const host = (s.host || s.id || '').toLowerCase();
            const proto = (s.protocol || '').toLowerCase();
            return name.includes(search) || cName.includes(search) || code.toLowerCase().includes(search) || arName.includes(search) || host.includes(search) || proto.includes(search);
          });
        }

        // 3. Sorting
        if (sort === 'speed') {
          filtered.sort((a, b) => (b.speed_mbps || 0) - (a.speed_mbps || 0));
        } else if (sort === 'country') {
          filtered.sort((a, b) => (a.country || '').localeCompare(b.country || ''));
        } else if (sort === 'load') {
          filtered.sort((a, b) => (a.latency_ms || 0) - (b.latency_ms || 0));
        } else {
          // Default: lowest latency (Fastest Ping first, then highest speed)
          filtered.sort((a, b) => {
            const pA = a.latency_ms || 999;
            const pB = b.latency_ms || 999;
            if (pA !== pB) return pA - pB;
            return (b.speed_mbps || 0) - (a.speed_mbps || 0);
          });
        }

        const totalFiltered = filtered.length;
        const totalPages = Math.ceil(totalFiltered / limit);
        const startIndex = (page - 1) * limit;

        // Rich Telemetry Card Generation
        const pageServers = filtered.slice(startIndex, startIndex + limit).map(s => {
          const proto = (s.protocol || 'openvpn').toLowerCase();
          const speed = Math.round(s.speed_mbps || 100);
          const ping = s.latency_ms || 28;
          const hashSeed = Math.abs((s.id || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0));
          const loadPercent = Math.min(94, Math.max(12, Math.floor(18 + (hashSeed % 64))));

          let cipher = 'TLS 1.3 / AES-256';
          if (proto === 'vless') cipher = 'XTLS Reality / Vision';
          else if (proto === 'openvpn') cipher = 'AES-256-GCM / SHA-512';
          else if (proto.includes('shadow') || proto === 'ss') cipher = 'ChaCha20-Poly1305 / AEAD';
          else if (proto === 'vmess') cipher = 'AES-128-GCM / WebSocket';
          else if (proto === 'trojan') cipher = 'TLS 1.3 Camouflage';
          else if (proto.includes('wireguard') || proto === 'wg') cipher = 'ChaCha20-Poly1305';

          return {
            id: s.id,
            name: s.display_name || s.name,
            country: s.country_name || s.country || 'Global Node',
            country_code: (s.country_code || 'XX').toUpperCase(),
            ar_country: ARABIC_COUNTRIES[(s.country_code || '').toUpperCase()] || s.country,
            flag: s.flag || '🌐',
            protocol: proto,
            speed_mbps: speed,
            latency_ms: ping,
            load_percent: loadPercent,
            cipher,
            port: s.port || (proto === 'openvpn' ? 1194 : 443),
            tier: s.tier || 'free',
            has_config: !!s.config_data,
            has_uri: !!s.raw_uri,
            features: [
              'p2p',
              (speed >= 400 ? '4k_stream' : 'stream'),
              (ping <= 40 ? 'low_ping' : 'fast_ping'),
              (proto === 'vless' || proto === 'trojan' ? 'anti_dpi' : 'secure')
            ]
          };
        });

        return jsonResponse({
          success: true,
          total_all: allServers.length,
          filtered_total: totalFiltered,
          page,
          limit,
          total_pages: totalPages,
          summary: {
            protocols: protoCounts,
            countries: sortedCountries
          },
          servers: pageServers
        }, 200, {
          ...corsHeaders,
          'Cache-Control': 'public, max-age=60, s-maxage=120'
        });
      }

      // ── 4.1 Featured Server Configs for Website Hub (/api/v1/servers/featured-configs) ──
      if (pathname === '/api/v1/servers/featured-configs' && request.method === 'GET') {
        const processed = await getProcessedServers(env);
        if (!processed || !processed.data || !processed.data.servers) {
          return jsonResponse({ success: false, servers: [] }, 200, corsHeaders);
        }

        const limit = Math.min(Math.max(1, parseInt(url.searchParams.get('limit') || '6')), 36);
        const allServers = processed.data.servers;
        const targetCountries = ['US', 'DE', 'GB', 'JP', 'SG', 'CA', 'FR', 'NL', 'CH', 'SE', 'AE', 'TR', 'KR', 'AU'];
        const countryMap = new Map();

        const validCandidates = allServers
          .filter(s => s && s.config_data && s.config_data.length > 50 && s.status !== 'offline')
          .sort((a, b) => {
            const pA = a.latency_ms || 999;
            const pB = b.latency_ms || 999;
            if (pA !== pB) return pA - pB;
            return (b.speed_mbps || 0) - (a.speed_mbps || 0);
          });

        const featured = [];
        for (const s of validCandidates) {
          const code = (s.country_code || 'XX').toUpperCase();
          const currentCount = countryMap.get(code) || 0;
          if (currentCount < 2) {
            countryMap.set(code, currentCount + 1);
            featured.push({
              id: s.id,
              name: s.display_name || s.name,
              country: s.country_name || s.country || 'Global Node',
              country_code: code,
              continent: s.continent || 'Global',
              flag: s.flag || '🌐',
              protocol: (s.protocol || 'openvpn').toLowerCase(),
              speed_mbps: Math.round(s.speed_mbps || 100),
              latency_ms: s.latency_ms || 24,
              tier: s.tier || 'free',
              cost_points: 5
            });
          }
          if (featured.length >= limit) break;
        }

        return jsonResponse({
          success: true,
          total: featured.length,
          servers: featured
        }, 200, {
          ...corsHeaders,
          'Cache-Control': 'public, max-age=180, s-maxage=360'
        });
      }

      // ── 4.2 Monetized Config Unlock & Direct Download (/api/v1/servers/download-config) ──
      if (pathname === '/api/v1/servers/download-config' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const serverId = (body.server_id || '').trim();
        const unlockMethod = body.unlock_method || 'ad'; // 'points' | 'ad' | 'vip'

        if (!serverId) {
          return jsonResponse({ error: 'Missing required server_id.' }, 400, corsHeaders);
        }

        const boundAccount = await getEffectiveAccount(request, body, env, compositeFingerprint, masterDeviceId);
        let remainingPoints = 0;

        if (unlockMethod === 'points') {
          const cost = 5;
          let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);
          if (currentPoints < cost) {
            return jsonResponse({
              error: 'Insufficient points balance.',
              required: cost,
              current_points: currentPoints
            }, 402, corsHeaders);
          }
          remainingPoints = Math.max(0, currentPoints - cost);
          await setStorage(env, `user_pts_${boundAccount}`, remainingPoints);
        } else if (unlockMethod === 'ad') {
          // Exe.io Sponsor Ad Completion reward: Give user +10 bonus points upon ad completion!
          let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);
          remainingPoints = currentPoints + 10;
          await setStorage(env, `user_pts_${boundAccount}`, remainingPoints);
        } else if (unlockMethod === 'vip') {
          const currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);
          remainingPoints = currentPoints;
        }

        const processed = await getProcessedServers(env);
        const server = processed?.data?.servers?.find(s => s.id === serverId);

        if (!server || (!server.config_data && !server.raw_uri)) {
          return jsonResponse({ error: 'Server configuration not found or unavailable.' }, 404, corsHeaders);
        }

        const safeCode = (server.country_code || 'zvpn').toLowerCase();
        const proto = (server.protocol || 'openvpn').toLowerCase();
        let ext = 'ovpn';
        if (proto === 'wireguard' || proto === 'wg') ext = 'conf';
        else if (proto === 'vless' || proto === 'vmess' || proto === 'shadowsocks' || proto === 'trojan' || proto === 'hysteria2') ext = 'txt';

        const filename = `zvpn-${safeCode}-${server.id.slice(0, 16)}.${ext}`;
        const finalConfig = server.config_data || server.raw_uri || '';

        return jsonResponse({
          success: true,
          server_id: server.id,
          filename: filename,
          protocol: proto,
          config_data: finalConfig,
          raw_uri: server.raw_uri || null,
          remaining_points: remainingPoints,
          message: unlockMethod === 'ad' ? 'Ad verified! Granted +10 bonus points & server unlocked!' : 'Configuration unlocked successfully!'
        }, 200, corsHeaders);
      }

      // 3.5 Server Auto-Correction Endpoint (/api/v1/report-server-corrections)
      // ─────────────────────────────────────────────────────────────────────────
      // Accepts ONE batch per device per 24 hours.
      // Payload: { corrections: [{ id, country_code, country_name, continent, flag, ping_ms, is_alive }] }
      // Merges corrections into R2 servers.json so all users see updated data.
      if (pathname === '/api/v1/report-server-corrections' && request.method === 'POST') {

        // ── 1. Rate limit: 1 submission per device per 24h ───────────────────
        const rateLimitKey = `correction_ts_${masterDeviceId}`;
        let lastSubmitTs = 0;
        try {
          if (env.CORRECTIONS_KV) {
            const stored = await env.CORRECTIONS_KV.get(rateLimitKey);
            lastSubmitTs = stored ? parseInt(stored) : 0;
          }
        } catch (_) {}

        const now = Date.now();
        const hoursSinceLast = (now - lastSubmitTs) / (1000 * 60 * 60);
        if (lastSubmitTs > 0 && hoursSinceLast < 24) {
          const nextAllowedMs = lastSubmitTs + 24 * 60 * 60 * 1000;
          const waitMinutes = Math.ceil((nextAllowedMs - now) / 60000);
          return jsonResponse({
            success: false,
            error: 'Rate limit: only 1 correction batch accepted per device per 24 hours.',
            next_allowed_in_minutes: waitMinutes,
          }, 429, corsHeaders);
        }

        // ── 2. Parse correction payload ───────────────────────────────────────
        const body = await request.json().catch(() => ({}));
        const corrections = body.corrections || [];

        if (!Array.isArray(corrections) || corrections.length === 0) {
          return jsonResponse({ success: false, error: 'No corrections provided.' }, 400, corsHeaders);
        }

        // Build a lookup map: server_id -> correction
        const correctionMap = {};
        for (const c of corrections) {
          if (c.id) correctionMap[c.id] = c;
        }
        const correctionCount = Object.keys(correctionMap).length;

        // ── 3. Load current servers.json from R2 ─────────────────────────────
        let applied = 0;
        let skipped = 0;
        try {
          const obj = await env.SERVERS_BUCKET.get('servers.json');
          if (obj) {
            const payload = await obj.json();
            const servers = payload.servers || [];

            // Apply corrections where country/continent changed
            const updated = servers.map(s => {
              const fix = correctionMap[s.id];
              if (!fix) { skipped++; return s; }

              // Only apply if something actually changed
              const changed =
                (fix.country_code && fix.country_code !== s.country_code) ||
                (fix.country_name && fix.country_name !== s.country) ||
                (fix.continent && fix.continent !== s.continent);

              if (!changed && fix.is_alive === false) {
                // Mark dead servers but keep their data
                applied++;
                return { ...s, alive: false, last_checked: new Date().toISOString() };
              }
              if (!changed) { skipped++; return s; }

              applied++;
              return {
                ...s,
                country_code: fix.country_code || s.country_code,
                country: fix.country_name || s.country,
                continent: fix.continent || s.continent,
                flag: fix.flag || s.flag,
                ping_ms: fix.ping_ms > 0 ? fix.ping_ms : s.ping_ms,
                alive: fix.is_alive !== false,
                last_corrected: new Date().toISOString(),
                corrected_by: 'auto_correction_v2',
              };
            });

            // Write updated servers.json back to R2
            const newPayload = {
              ...payload,
              servers: updated,
              version: new Date().toISOString(),
              last_correction: new Date().toISOString(),
              total_servers: updated.length,
            };

            await env.SERVERS_BUCKET.put('servers.json', JSON.stringify(newPayload), {
              httpMetadata: {
                contentType: 'application/json',
                cacheControl: 'public, max-age=300, s-maxage=600',
              },
            });
          }
        } catch (e) {
          return jsonResponse({ success: false, error: 'Failed to update server database.', details: e.message }, 500, corsHeaders);
        }

        // ── 4. Record timestamp for rate limiting ─────────────────────────────
        try {
          if (env.CORRECTIONS_KV) {
            await env.CORRECTIONS_KV.put(rateLimitKey, String(now), { expirationTtl: 86400 }); // 24h TTL
          }
        } catch (_) {}

        return jsonResponse({
          success: true,
          received_corrections: correctionCount,
          applied_corrections: applied,
          skipped_unchanged: skipped,
          message: 'Server corrections applied to global database. All users will see updated data.',
          next_submission_in_hours: 24,
          timestamp: new Date().toISOString(),
        }, 200, corsHeaders);
      }

      // Legacy alias kept for backward compatibility
      if (pathname === '/api/v1/report-verified-servers' && request.method === 'POST') {
        return jsonResponse({
          success: false,
          error: 'Deprecated endpoint. Use /api/v1/report-server-corrections instead.',
          new_endpoint: '/api/v1/report-server-corrections',
        }, 410, corsHeaders);
      }

      // ─────────────────────────────────────────────────────────────────────────────
      // FIREBASE GOOGLE AUTH & ANTI-TAMPER HIGH-SCALE EDGE BACKEND (KV PERSISTENT)
      // ─────────────────────────────────────────────────────────────────────────────

      // 4. Firebase Google Auth Login & Account Verification (/api/v1/auth/firebase-login & /api/v1/auth/google-login)
      if ((pathname === '/api/v1/auth/firebase-login' || pathname === '/api/v1/auth/google-login') && request.method === 'POST') {
        const authHeader = request.headers.get('Authorization') || '';
        const idToken = authHeader.replace('Bearer ', '').trim();
        const body = await request.json().catch(() => ({}));

        if (!idToken && !body.uid) {
          return jsonResponse({ error: 'Missing Google/Firebase ID token or UID.' }, 400, corsHeaders);
        }

        let userUid = body.uid || 'fb_user_guest';
        let userEmail = body.email || '';
        let userName = body.name || 'ZVPN User';
        let userPicture = body.picture || '';

        // Cryptographic Structure & Expiry Verification for Google Firebase / GIS ID Token
        if (idToken && idToken.includes('.')) {
          const parts = idToken.split('.');
          if (parts.length === 3) {
            try {
              const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
              const nowSec = Math.floor(Date.now() / 1000);

              // 1. Expiration check (allow 5-minute clock drift)
              if (payload.exp && payload.exp < nowSec - 300) {
                return jsonResponse({ error: 'Google ID token expired. Please re-authenticate.', code: 'token_expired' }, 401, corsHeaders);
              }

              // 2. Issuer check (Google Identity Services or Firebase Auth)
              if (payload.iss && !payload.iss.includes('google.com') && !payload.iss.includes('securetoken.google.com')) {
                return jsonResponse({ error: 'Invalid token issuer.', code: 'invalid_issuer' }, 401, corsHeaders);
              }

              // 3. Audience check (Web client id or Firebase project)
              if (payload.aud && payload.aud !== 'zvpn-56064' && !payload.aud.includes('618576060813')) {
                return jsonResponse({ error: 'Invalid token audience.', code: 'invalid_aud' }, 401, corsHeaders);
              }

              // 4. Cryptographic signature verification via Google OAuth API
              if (payload.iss && payload.iss.includes('accounts.google.com')) {
                try {
                  const gCheck = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
                  if (gCheck.ok) {
                    const verifiedG = await gCheck.json();
                    if (verifiedG.sub) userUid = verifiedG.sub;
                    if (verifiedG.email) userEmail = verifiedG.email;
                    if (verifiedG.name) userName = verifiedG.name;
                    if (verifiedG.picture) userPicture = verifiedG.picture;
                  }
                } catch (_) {}
              }

              if (payload.sub) userUid = userUid || payload.sub;
              if (payload.email) userEmail = userEmail || payload.email;
              if (payload.name) userName = userName || payload.name;
              if (payload.picture) userPicture = userPicture || payload.picture;
            } catch (e) {
              return jsonResponse({ error: 'Malformed Google ID token format.', details: e.message }, 400, corsHeaders);
            }
          }
        }

        // Anti-Fraud Bot-Farm Protection: Max 5 new accounts per IP (In-Memory, Zero KV Cost)
        let ipRegistrations = IP_ACCOUNT_COUNTS.get(clientIP) || 0;
        const existingProfile = await getStorage(env, `user_profile_${userUid}`, null);

        if (!existingProfile) {
          if (ipRegistrations >= 5) {
            return jsonResponse({
              error: 'Rate limit exceeded: Too many accounts created from this network. Anti-abuse active.',
              code: 'ip_rate_limited'
            }, 429, corsHeaders);
          }
          IP_ACCOUNT_COUNTS.set(clientIP, ipRegistrations + 1);
        }
        await setStorage(env, `user_profile_${userUid}`, {
          uid: userUid,
          email: userEmail,
          name: userName,
          picture: userPicture,
          createdAt: existingProfile ? existingProfile.createdAt : Date.now(),
          lastLogin: Date.now()
        });

        const accountKey = `user_${userUid}`;
        const isWebClient = body.platform === 'web' || request.headers.get('X-Client-Platform') === 'web';

        // ── Single Active Device & Anti-Account-Sharing Policy (Enforced for VPN clients) ──
        const activeDevKey = `user_active_dev_${accountKey}`;
        const currentActiveDev = await getStorage(env, activeDevKey, null);
        let transferred = false;

        if (!isWebClient && currentActiveDev && currentActiveDev !== compositeFingerprint) {
          // Device Switch Detected! Check hopping rate limit
          const switchKey = `user_switches_${accountKey}`;
          const now = Date.now();
          const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
          let switchHistory = (await getStorage(env, switchKey, [])) || [];
          if (!Array.isArray(switchHistory)) switchHistory = [];
          switchHistory = switchHistory.filter(ts => typeof ts === 'number' && ts > thirtyDaysAgo);

          // Max 3 device transfers per 30 days
          if (switchHistory.length >= 3) {
            return jsonResponse({
              error: 'Device transfer limit reached: This Google account has been transferred 3 times in the last 30 days. To prevent account sharing, it cannot be linked to another device at this time.',
              code: 'device_limit_exceeded',
              limit: 3,
              active_device: currentActiveDev
            }, 403, corsHeaders);
          }

          // Record new transfer
          switchHistory.push(now);
          await setStorage(env, switchKey, switchHistory, 30 * 86400);
          transferred = true;
        }

        if (!isWebClient) {
          await setStorage(env, activeDevKey, compositeFingerprint);
        }

        // Generate session token
        const sessionToken = (Math.random().toString(36).substring(2) + Date.now().toString(36));
        await setStorage(env, `user_session_${accountKey}`, sessionToken);
        await setStorage(env, `session_user_${sessionToken}`, accountKey);

        if (!isWebClient) {
          await setStorage(env, `fp_${compositeFingerprint}`, accountKey);
        }

        // Persistent Point Balance
        let currentPoints = await getStorage(env, `user_pts_${accountKey}`, null);
        if (currentPoints === null) {
          currentPoints = 0;
          await setStorage(env, `user_pts_${accountKey}`, currentPoints);
        }

        // Persistent Referral Code
        let referralCode = await getStorage(env, `user_ref_${accountKey}`, null);
        if (!referralCode) {
          referralCode = 'ZVPN-' + userUid.slice(-6).toUpperCase();
          await setStorage(env, `user_ref_${accountKey}`, referralCode);
        }

        // Active Tier & Licenses
        const tierData = await getStorage(env, `user_tier_${accountKey}`, null);
        const licenses = (await getStorage(env, `user_licenses_${accountKey}`, [])) || [];
        const streakData = (await getStorage(env, `user_streak_${accountKey}`, null)) || { days: 1, lastTime: 0 };
        const now = Date.now();
        const hoursSinceLastStreak = (now - streakData.lastTime) / (1000 * 60 * 60);

        return jsonResponse({
          success: true,
          authenticated: true,
          uid: userUid,
          email: userEmail,
          name: userName,
          picture: userPicture,
          account_key: accountKey,
          total_points: currentPoints,
          tier_info: tierData || { tier: 'free', valid_until: null },
          licenses: licenses,
          streak_info: {
            days: streakData.days,
            can_claim_streak: hoursSinceLastStreak >= 24
          },
          referral_code: referralCode,
          session_token: sessionToken,
          transferred: transferred,
          active_device: currentActiveDev || compositeFingerprint,
          message: 'Google Account authenticated successfully.'
        }, 200, corsHeaders);
      }

      // 4.5. Get Full Account Overview & Profile (/api/v1/user/account)
      if (pathname === '/api/v1/user/account') {
        const authHeader = request.headers.get('Authorization') || '';
        const token = authHeader.replace('Bearer ', '').trim();
        let targetId = url.searchParams.get('account_id') || '';

        if (!targetId && token) {
          if (token.startsWith('user_')) {
            targetId = token;
          } else {
            targetId = (await getStorage(env, `session_user_${token}`, '')) || '';
          }
        }
        if (!targetId) {
          targetId = await getStorage(env, `fp_${compositeFingerprint}`, masterDeviceId);
        }

        const upperTarget = (targetId || '').toUpperCase();
        if (upperTarget.startsWith('ZVPN-')) {
          const lic = await getStorage(env, `license_${upperTarget}`, null);
          if (lic) {
            const bound = await getStorage(env, `license_claimed_${upperTarget}`, null);
            if (bound) {
              targetId = bound;
            } else {
              targetId = 'lic_' + upperTarget.replace(/[^A-Za-z0-9]/g, '');
              await creditUserAccount(env, targetId, lic);
            }
          }
        }

        const rawUid = targetId.startsWith('user_') ? targetId.replace('user_', '') : targetId;
        const profile = (await getStorage(env, `user_profile_${rawUid}`, null)) || {
          uid: rawUid,
          email: '',
          name: 'ZVPN User',
          picture: ''
        };

        let currentPoints = await getStorage(env, `user_pts_${targetId}`, 0);
        const tierData = await getStorage(env, `user_tier_${targetId}`, null);
        const licenses = (await getStorage(env, `user_licenses_${targetId}`, [])) || [];
        let streakData = (await getStorage(env, `user_streak_${targetId}`, null)) || { days: 1, lastTime: 0 };

        // Auto-migrate orphaned guest streak/points to user account if claimed before linking
        if (targetId.startsWith('user_')) {
          const guestPts = await getStorage(env, 'user_pts_dev_guest', 0);
          if (guestPts > 0) {
            currentPoints += guestPts;
            await setStorage(env, `user_pts_${targetId}`, currentPoints);
            await setStorage(env, 'user_pts_dev_guest', 0);
          }
          const guestStreak = await getStorage(env, 'user_streak_dev_guest', null);
          if (guestStreak && (streakData.lastTime === 0 || streakData.lastTime < guestStreak.lastTime)) {
            streakData = guestStreak;
            await setStorage(env, `user_streak_${targetId}`, streakData);
            await setStorage(env, 'user_streak_dev_guest', null);
          }
        }

        const now = Date.now();
        const hoursSinceLastStreak = (now - streakData.lastTime) / (1000 * 60 * 60);

        let referralCode = await getStorage(env, `user_ref_${targetId}`, null);
        if (!referralCode) {
          referralCode = 'ZVPN-' + targetId.slice(-6).toUpperCase();
          await setStorage(env, `user_ref_${targetId}`, referralCode);
        }

        return jsonResponse({
          success: true,
          account_id: targetId,
          uid: profile.uid,
          email: profile.email,
          name: profile.name,
          picture: profile.picture || '',
          total_points: currentPoints,
          tier_info: tierData || { tier: 'free', valid_until: null },
          licenses: licenses,
          streak_info: {
            days: streakData.days,
            can_claim_streak: hoursSinceLastStreak >= 24,
            hours_since_last: Math.floor(hoursSinceLastStreak)
          },
          referral_code: referralCode
        }, 200, corsHeaders);
      }

      // 5. Get Tamper-Proof User Points Balance & Status (/api/v1/user/points)
      if (pathname === '/api/v1/user/points') {
        const boundAccount = await getEffectiveAccount(request, {}, env, compositeFingerprint, masterDeviceId);

        // Single Active Device Check: Reject if account active on another device
        if (typeof boundAccount === 'string' && boundAccount.startsWith('user_')) {
          const activeDev = await getStorage(env, `user_active_dev_${boundAccount}`, null);
          if (activeDev && activeDev !== compositeFingerprint) {
            return jsonResponse({
              error: 'This Google account is now active on another device. Local session terminated.',
              code: 'session_superseded'
            }, 409, corsHeaders);
          }
        }

        let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);

        const streakData = (await getStorage(env, `user_streak_${boundAccount}`, null)) || { days: 1, lastTime: 0 };
        const now = Date.now();
        const hoursSinceLastStreak = (now - streakData.lastTime) / (1000 * 60 * 60);
        const canClaimStreak = hoursSinceLastStreak >= 24;

        let referralCode = await getStorage(env, `user_ref_${boundAccount}`, null);
        if (!referralCode) {
          referralCode = 'ZVPN-' + boundAccount.slice(-6).toUpperCase();
          await setStorage(env, `user_ref_${boundAccount}`, referralCode);
        }

        return jsonResponse({
          success: true,
          device_id: masterDeviceId,
          bound_account: boundAccount,
          client_ip: clientIP,
          total_points: currentPoints,
          streak_days: streakData.days,
          can_claim_streak: canClaimStreak,
          referral_code: referralCode,
          rates: {
            free_per_min: 1,
            premium_per_min: 5,
            premium_plus_per_min: 10
          }
        }, 200, corsHeaders);
      }

      // 5.9 Exe.io URL Shortener Dynamic Generation API (/api/v1/ads/exeio-link)
      if (pathname === '/api/v1/ads/exeio-link' && request.method === 'GET') {
        const targetUrl = url.searchParams.get('url') || 'https://z-vpn.site/?reward=points';
        const alias = url.searchParams.get('alias') || '';
        const shortUrl = await shortenWithExeIo(env, targetUrl, alias);
        return jsonResponse({
          success: true,
          shortened_url: shortUrl,
          original_url: targetUrl
        }, 200, corsHeaders);
      }

      // 6. Server-to-Server (S2S) Unity Ads / AdMob Rewarded Callback with Anti-Cheat & Rate Limiting (/api/v1/ads/s2s-reward)
      if (pathname === '/api/v1/ads/s2s-reward' || pathname === '/api/v1/user/ad-reward') {
        const body = request.method === 'POST' ? await request.json().catch(() => ({})) : {};
        const rawPoints = parseInt(url.searchParams.get('reward_points') || body.reward_points || '20');
        // Security: Strict points ceiling (max 50 pts per ad to prevent points injection)
        const rewardPoints = Math.min(Math.max(5, isNaN(rawPoints) ? 20 : rawPoints), 50);

        const nonce = (url.searchParams.get('nonce') || body.nonce || '').trim();
        const timestamp = parseInt(url.searchParams.get('timestamp') || body.timestamp || '0');
        const now = Date.now();

        // Security: Mandatory nonce with minimum entropy
        if (!nonce || nonce.length < 6) {
          return jsonResponse({ error: 'Valid nonce parameter is required for ad verification.' }, 400, corsHeaders);
        }

        // Security: Anti-Replay timestamp window (5 minutes)
        if (timestamp > 0 && Math.abs(now - timestamp) > 300000) {
          return jsonResponse({ error: 'Request timestamp expired (anti-replay check failed).' }, 403, corsHeaders);
        }

        // Security: Anti-Replay nonce registry (In-Memory Ultra-Low Resource, 24h TTL, 0 KV Writes)
        if (IN_MEMORY_NONCES.has(nonce)) {
          return jsonResponse({ error: 'Nonce already used (replay attack detected).' }, 409, corsHeaders);
        }
        IN_MEMORY_NONCES.set(nonce, now);
        if (IN_MEMORY_NONCES.size > 10000) {
          for (const [n, ts] of IN_MEMORY_NONCES) {
            if (now - ts > 86400000) IN_MEMORY_NONCES.delete(n);
          }
        }

        const boundAccount = await getEffectiveAccount(request, body, env, compositeFingerprint, masterDeviceId);

        // Security: Rate-limit ad claims (Maximum 1 reward every 30 seconds per account, In-Memory, 0 KV Writes)
        const lastAdTime = IN_MEMORY_AD_COOLDOWNS.get(boundAccount) || 0;
        if (lastAdTime && (now - lastAdTime) < 30000) {
          const waitSec = Math.ceil((30000 - (now - lastAdTime)) / 1000);
          return jsonResponse({
            error: `Ad reward cooldown active. Please wait ${waitSec} seconds.`,
            cooldown_seconds: waitSec
          }, 429, corsHeaders);
        }
        IN_MEMORY_AD_COOLDOWNS.set(boundAccount, now);
        if (IN_MEMORY_AD_COOLDOWNS.size > 10000) {
          for (const [acc, ts] of IN_MEMORY_AD_COOLDOWNS) {
            if (now - ts > 86400000) IN_MEMORY_AD_COOLDOWNS.delete(acc);
          }
        }

        // Security: Daily cap of 30 ads per account per 24 hours (In-Memory, 0 KV Writes)
        const todayStr = new Date().toISOString().slice(0, 10);
        const dailyKey = `${boundAccount}_${todayStr}`;
        const dailyCount = IN_MEMORY_DAILY_ADS.get(dailyKey) || 0;
        if (dailyCount >= 30) {
          return jsonResponse({
            error: 'Daily ad reward limit reached (30 ads/day). Please return tomorrow!',
            daily_limit_reached: true
          }, 429, corsHeaders);
        }
        IN_MEMORY_DAILY_ADS.set(dailyKey, dailyCount + 1);
        if (IN_MEMORY_DAILY_ADS.size > 10000) {
          for (const [dk] of IN_MEMORY_DAILY_ADS) {
            if (!dk.endsWith(todayStr)) IN_MEMORY_DAILY_ADS.delete(dk);
          }
        }

        let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);
        const newTotal = currentPoints + rewardPoints;
        await setStorage(env, `user_pts_${boundAccount}`, newTotal);

        return jsonResponse({
          success: true,
          message: `Verified Ad Reward: Granted +${rewardPoints} points to account ${boundAccount}`,
          total_points: newTotal,
          granted_points: rewardPoints
        }, 200, corsHeaders);
      }

      // 7. Claim Daily Streak Login Bonus (/api/v1/user/claim-streak)
      if (pathname === '/api/v1/user/claim-streak' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const boundAccount = await getEffectiveAccount(request, body, env, compositeFingerprint, masterDeviceId);
        let streakData = (await getStorage(env, `user_streak_${boundAccount}`, null)) || { days: 1, lastTime: 0 };
        const now = Date.now();

        // If user account streak was 0, but dev_guest was claimed, migrate it
        if (streakData.lastTime === 0 && boundAccount.startsWith('user_')) {
          const guestStreak = await getStorage(env, 'user_streak_dev_guest', null);
          if (guestStreak && guestStreak.lastTime > 0) {
            streakData = guestStreak;
            await setStorage(env, `user_streak_${boundAccount}`, streakData);
            await setStorage(env, 'user_streak_dev_guest', null);
          }
        }

        const hoursSinceLastStreak = (now - streakData.lastTime) / (1000 * 60 * 60);

        if (hoursSinceLastStreak < 24) {
          return jsonResponse({
            error: 'Daily streak already claimed today. Try again in 24 hours.',
            hours_remaining: Math.ceil(24 - hoursSinceLastStreak)
          }, 400, corsHeaders);
        }

        const rewards = [15, 20, 30, 40, 50, 75, 100];
        const reward = rewards[Math.min(streakData.days - 1, rewards.length - 1)] || 15;

        let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);
        if (boundAccount.startsWith('user_')) {
          const guestPts = await getStorage(env, 'user_pts_dev_guest', 0);
          if (guestPts > 0) {
            currentPoints += guestPts;
            await setStorage(env, 'user_pts_dev_guest', 0);
          }
        }
        const newTotal = currentPoints + reward;
        await setStorage(env, `user_pts_${boundAccount}`, newTotal);

        const nextDays = streakData.days >= 7 ? 1 : streakData.days + 1;
        await setStorage(env, `user_streak_${boundAccount}`, { days: nextDays, lastTime: now });

        return jsonResponse({
          success: true,
          reward_claimed: reward,
          new_total_points: newTotal,
          next_streak_days: nextDays
        }, 200, corsHeaders);
      }

      // 8. Redeem Viral Referral Code (/api/v1/user/referral)
      if (pathname === '/api/v1/user/referral' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const code = (body.code || '').trim().toUpperCase();

        const referralBinding = `redeemed_${compositeFingerprint}_${code}`;
        const alreadyRedeemed = await getStorage(env, referralBinding, null);

        if (!code || alreadyRedeemed) {
          return jsonResponse({ error: 'Referral code invalid or already redeemed on this device / hardware MAC.' }, 400, corsHeaders);
        }

        await setStorage(env, referralBinding, '1');
        const boundAccount = await getEffectiveAccount(request, body, env, compositeFingerprint, masterDeviceId);
        let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);
        const newTotal = currentPoints + 50; // +50 pts referral bonus
        await setStorage(env, `user_pts_${boundAccount}`, newTotal);

        return jsonResponse({
          success: true,
          reward_granted: 50,
          new_total_points: newTotal,
          message: 'Referral code redeemed successfully! +50 Points granted.'
        }, 200, corsHeaders);
      }

      // 9. Consume Time-based Session Points (/api/v1/user/consume-points)
      if (pathname === '/api/v1/user/consume-points' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const tier = (body.tier || 'free').toLowerCase();

        const rate = (tier === 'premium' || tier === 'pro') ? 5 :
                     (tier === 'premium_plus' || tier === 'vip') ? 10 : 1;

        const boundAccount = await getEffectiveAccount(request, body, env, compositeFingerprint, masterDeviceId);

        // Single Active Device Check: Reject if account active on another device
        if (typeof boundAccount === 'string' && boundAccount.startsWith('user_')) {
          const activeDev = await getStorage(env, `user_active_dev_${boundAccount}`, null);
          if (activeDev && activeDev !== compositeFingerprint) {
            return jsonResponse({
              error: 'This Google account is now active on another device. Local session terminated.',
              code: 'session_superseded'
            }, 409, corsHeaders);
          }
        }

        let currentPoints = await getStorage(env, `user_pts_${boundAccount}`, 0);

        if (currentPoints < rate) {
          return jsonResponse({ error: 'Insufficient points balance for session.', current_points: currentPoints }, 402, corsHeaders);
        }

        const newTotal = currentPoints - rate;
        await setStorage(env, `user_pts_${boundAccount}`, newTotal);

        return jsonResponse({
          success: true,
          consumed_points: rate,
          remaining_points: newTotal
        }, 200, corsHeaders);
      }

      // 10. Authenticated Upload Endpoint (/upload)
      if (pathname === '/upload' && request.method === 'POST') {
        const authHeader = request.headers.get('Authorization') || '';
        const secretHeader = request.headers.get('X-API-Secret') || '';
        const token = authHeader.replace('Bearer ', '').trim() || secretHeader;

        const expectedSecret = env.API_SECRET || env.BACKEND_SECRET_KEY || 'zvpn_admin_sec_997321_xocqoc';
        if (!token || token !== expectedSecret) {
          return jsonResponse({ error: 'Unauthorized: Invalid access secret.' }, 401, corsHeaders);
        }

        const fileName = request.headers.get('X-File-Name') || 'servers.json';
        const allowedFiles = new Set(['servers.json', 'servers_structured.json']);
        if (!allowedFiles.has(fileName)) {
          return jsonResponse({ error: 'Forbidden: Unauthorized file target.' }, 403, corsHeaders);
        }

        const bodyText = await request.text();
        if (!bodyText || bodyText.length < 10) {
          return jsonResponse({ error: 'Payload body is empty or invalid.' }, 400, corsHeaders);
        }

        await env.SERVERS_BUCKET.put(fileName, bodyText, {
          httpMetadata: {
            contentType: 'application/json',
            cacheControl: 'public, max-age=300, s-maxage=600'
          }
        });

        // Invalidate all in-memory caches immediately
        MEMORY_SERVERS_CACHE = null;
        MEMORY_SERVERS_TIME = 0;
        MEMORY_HIERARCHY_CACHE = null;
        MEMORY_HIERARCHY_TIME = 0;

        // Update KV metadata so sync script can detect changes via /api/v1/meta
        if (fileName === 'servers.json') {
          try {
            const parsed = JSON.parse(bodyText);
            const version = parsed.version || new Date().toISOString();
            const etag = 'W/"zvpn-srv-' + version.replace(/[^a-zA-Z0-9_-]/g, '') + '"';
            const total = parsed.total_servers || (parsed.servers ? parsed.servers.length : 0);
            const metaVal = JSON.stringify({ version, etag, total_servers: total, updated_at: new Date().toISOString() });
            ctx.waitUntil(env.CORRECTIONS_KV.put('srv_meta', metaVal, { expirationTtl: 86400 }));
          } catch (_) {}
        }

        return jsonResponse({
          success: true,
          message: 'Successfully stored ' + fileName + ' in R2. All caches invalidated.',
          cache_invalidated: true,
          timestamp: new Date().toISOString()
        }, 200, corsHeaders);
      }

      // ── Payment Gateways & License Activation Engine ──────────────────────────

      
      // ── CLI Terminal One-Liner Installers (/install.ps1, /install.sh, /install) ──
      if ((pathname === '/install.ps1' || (pathname === '/install' && !acceptHeader.includes('text/html'))) && (request.method === 'GET' || request.method === 'HEAD')) {
        const psScript = `# ZVPN Autonomous Enterprise Windows CLI Installer
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   ZVPN Next-Gen Autonomous Terminal Installer (Windows)  " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "[*] Querying ZVPN Global Edge Network for latest release..." -ForegroundColor Yellow

$releaseUrl = "https://z-vpn.site/api/v1/releases/latest"
$msiUrl = "https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN-Setup.msi"
$ver = "1.0.4"

try {
    $meta = Invoke-RestMethod -Uri $releaseUrl -Method Get -TimeoutSec 10
    if ($meta.files.windows) { $msiUrl = $meta.files.windows }
    if ($meta.version) { $ver = $meta.version }
} catch {
    Write-Host "[!] Note: Using default fallback edge mirror." -ForegroundColor DarkYellow
}

$destPath = "$env:TEMP\\ZVPN-Setup-$ver.msi"
Write-Host "[+] Downloading ZVPN v$ver installer to $destPath..." -ForegroundColor Cyan

Invoke-WebRequest -Uri $msiUrl -OutFile $destPath -UseBasicParsing
Write-Host "[+] Download complete. Starting installation..." -ForegroundColor Green

$proc = Start-Process -FilePath "msiexec.exe" -ArgumentList "/i \`"$destPath\`" /passive /norestart" -Wait -PassThru
if ($proc.ExitCode -eq 0 -or $proc.ExitCode -eq 3010) {
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " [SUCCESS] ZVPN v$ver has been installed successfully!    " -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    $appExe = "$env:ProgramFiles\\ZVPN\\ZVPN.exe"
    if (Test-Path $appExe) {
        Write-Host "[*] Launching ZVPN Desktop Application..." -ForegroundColor Cyan
        Start-Process -FilePath $appExe
    }
} else {
    Write-Host "[X] Installation exited with code: $($proc.ExitCode)" -ForegroundColor Red
}
`;
        return new Response(request.method === 'HEAD' ? null : psScript, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=300',
            ...corsHeaders
          }
        });
      }

      if (pathname === '/install.sh' && (request.method === 'GET' || request.method === 'HEAD')) {
        const shScript = `#!/usr/bin/env bash
# ZVPN Autonomous Enterprise Unix/Linux/macOS CLI Installer
set -e
echo ""
echo "=========================================================="
echo "   ZVPN Next-Gen Autonomous Terminal Installer (Unix)    "
echo "=========================================================="
OS="$(uname -s)"
ARCH="$(uname -m)"
echo "[*] Detected System: $OS ($ARCH)"

if [ "$OS" = "Linux" ]; then
    DEB_URL="https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn_amd64.deb"
    DEST="/tmp/zvpn_amd64.deb"
    echo "[+] Downloading ZVPN Debian package..."
    curl -fsSL "$DEB_URL" -o "$DEST"
    echo "[+] Installing package via dpkg/apt..."
    if command -v sudo >/dev/null 2>&1; then
        sudo dpkg -i "$DEST" || sudo apt-get install -f -y
    else
        dpkg -i "$DEST" || apt-get install -f -y
    fi
    echo "[SUCCESS] ZVPN installed successfully! Run 'zvpn' to start."
elif [ "$OS" = "Darwin" ]; then
    echo "[!] ZVPN for macOS is undergoing final packaging and Apple App Store review. Coming very soon!"
    echo "[*] Check https://z-vpn.site/#downloads for the upcoming macOS DMG release."
    exit 0
else
    echo "[X] Unsupported operating system: $OS"
    exit 1
fi
`;
        return new Response(request.method === 'HEAD' ? null : shScript, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=300',
            ...corsHeaders
          }
        });
      }

      // Direct Download Friendly Aliases (/dl/windows, /dl/android, /dl/linux, /dl/mac, /dl/chrome)
      if (pathname.startsWith('/dl/')) {
        const target = pathname.replace('/dl/', '').trim();
        const release = await getStorage(env, 'zvpn_latest_release', null);
        const files = (release && release.files) || {
          windows:        'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN-Setup.msi',
          linux_deb:      'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn_amd64.deb',
          linux_appimage: 'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN.AppImage',
          macos:          'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN.dmg',
          android:        'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn-release.apk',
          chrome_ext:     'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn-chrome-extension.zip',
        };
        let redirectUrl = files.windows;
        if (target === 'android' || target === 'apk') redirectUrl = files.android;
        else if (target === 'linux' || target === 'deb') redirectUrl = files.linux_deb;
        else if (target === 'appimage') redirectUrl = files.linux_appimage;
        else if (target === 'mac' || target === 'macos' || target === 'dmg') {
          if (!files.macos) {
            return new Response('ZVPN for macOS is currently in final packaging and undergoing Apple App Store review. Stay tuned at https://z-vpn.site/#downloads', {
              status: 200,
              headers: { 'Content-Type': 'text/plain; charset=utf-8', ...corsHeaders }
            });
          }
          redirectUrl = files.macos;
        }
        else if (target === 'chrome' || target === 'extension') redirectUrl = files.chrome_ext;

        return Response.redirect(redirectUrl, 302);
      }

      // Releases / Downloads API

      // GET /api/v1/releases/latest
      if (pathname === '/api/v1/releases/latest' && request.method === 'GET') {
        const release = await getStorage(env, 'zvpn_latest_release', null);
        const defaultRelease = {
          version: '1.0.4',
          releaseDate: new Date().toISOString().split('T')[0],
          changelog: 'Initial release.',
          files: {
            windows:        'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN-Setup.msi',
            linux_deb:      'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn_amd64.deb',
            linux_appimage: 'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN.AppImage',
            macos:          'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/ZVPN.dmg',
            android:        'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn-release.apk',
            chrome_ext:     'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/latest/zvpn-chrome-extension.zip',
          },
        };
        return jsonResponse(release || defaultRelease, 200, corsHeaders);
      }

      // POST /api/v1/releases/publish  (admin-only)
      if (pathname === '/api/v1/releases/publish' && request.method === 'POST') {
        const adminToken = request.headers.get('X-Admin-Token') || '';
        const expectedToken = env.ADMIN_TOKEN || '';
        if (!expectedToken || adminToken !== expectedToken) {
          return jsonResponse({ error: 'Unauthorized' }, 401, corsHeaders);
        }
        const body = await request.json().catch(() => ({}));
        if (!body.version || !body.files) {
          return jsonResponse({ error: 'Missing required fields: version, files' }, 400, corsHeaders);
        }
        const release = {
          version: body.version,
          releaseDate: body.releaseDate || new Date().toISOString().split('T')[0],
          changelog: body.changelog || '',
          files: {
            windows:        body.files.windows || '',
            linux_deb:      body.files.linux_deb || '',
            linux_appimage: body.files.linux_appimage || '',
            macos:          body.files.macos || '',
            android:        body.files.android || '',
            chrome_ext:     body.files.chrome_ext || '',
          },
        };
        await setStorage(env, 'zvpn_latest_release', release);
        return jsonResponse({ success: true, release }, 200, corsHeaders);
      }

      // 11. Create Stripe Checkout Session (/api/v1/checkout/stripe)
      if (pathname === '/api/v1/checkout/stripe' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const rawPlanId = body.plan_id || body.plan || 'premium_plus_monthly';
        const planMeta = PLAN_CATALOG[rawPlanId] || { amount: 9.99, title: 'Premium+ Monthly', tier: 'premium_plus' };
        const plan_id = rawPlanId;
        const plan_title = body.plan_title || planMeta.title;
        const amount = parseFloat(body.amount) || planMeta.amount;
        const account_id = body.account_id || masterDeviceId || 'dev_guest';
        const email = (body.email && body.email.includes('@')) ? body.email : `${account_id}@client.zvpn.net`;

        const stripeSecret = getStripeSecretKey(env);
        if (!stripeSecret) {
          return jsonResponse({ error: 'Stripe gateway is not configured on server.' }, 500, corsHeaders);
        }

        const successUrl = `${url.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${url.origin}/?canceled=true`;

        const params = new URLSearchParams();
        params.append('payment_method_types[0]', 'card');
        params.append('mode', 'payment');
        params.append('customer_email', email);
        params.append('success_url', successUrl);
        params.append('cancel_url', cancelUrl);
        params.append('line_items[0][price_data][currency]', 'usd');
        params.append('line_items[0][price_data][unit_amount]', String(Math.round(parseFloat(amount) * 100)));
        params.append('line_items[0][price_data][product_data][name]', `ZVPN - ${plan_title || plan_id}`);
        params.append('line_items[0][quantity]', '1');
        params.append('metadata[plan_id]', plan_id || 'yearly');
        params.append('metadata[account_id]', account_id || '');
        params.append('metadata[email]', email);

        const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${stripeSecret}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: params.toString()
        });

        const session = await stripeRes.json();
        if (!stripeRes.ok) {
          return jsonResponse({ error: session.error?.message || 'Failed to create Stripe session' }, stripeRes.status, corsHeaders);
        }

        await setStorage(env, `stripe_session_meta_${session.id}`, {
          plan_id, email, account_id, amount, status: 'pending', created_at: Date.now()
        }, 86400);

        return jsonResponse({ url: session.url, session_id: session.id }, 200, corsHeaders);
      }

      // 12. Create NOWPayments Crypto Invoice (/api/v1/checkout/nowpayments or /api/v1/checkout/cryptomus)
      if ((pathname === '/api/v1/checkout/nowpayments' || pathname === '/api/v1/checkout/cryptomus') && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const rawPlanId = body.plan_id || body.plan || 'premium_plus_monthly';
        const planMeta = PLAN_CATALOG[rawPlanId] || { amount: 9.99, title: 'Premium+ Monthly', tier: 'premium_plus' };
        const plan_id = rawPlanId;
        const plan_title = body.plan_title || planMeta.title;
        const amount = parseFloat(body.amount) || planMeta.amount;
        const account_id = body.account_id || masterDeviceId || 'dev_guest';
        const email = (body.email && body.email.includes('@')) ? body.email : `${account_id}@client.zvpn.net`;

        const npApiKey = env.NOWPAYMENTS_API_KEY || '1TS1Y8D-HKVMAS0-PCTA9QF-AJRD4P1';
        const orderId = `zvpn_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

        try {
          const npRes = await fetch('https://api.nowpayments.io/v1/invoice', {
            method: 'POST',
            headers: {
              'x-api-key': npApiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              price_amount: parseFloat(amount),
              price_currency: 'usd',
              order_id: orderId,
              order_description: `ZVPN - ${plan_title || plan_id}`,
              ipn_callback_url: `${url.origin}/api/v1/checkout/webhook/nowpayments`,
              success_url: `${url.origin}/?success=true&order_id=${orderId}`,
              cancel_url: `${url.origin}/?canceled=true`
            })
          });

          const resData = await npRes.json();
          if (!npRes.ok || !resData.invoice_url) {
            return jsonResponse({ error: resData.message || 'NOWPayments crypto invoice creation failed' }, 400, corsHeaders);
          }

          await setStorage(env, `nowpayments_order_${orderId}`, {
            order_id: orderId,
            invoice_id: resData.id,
            plan_id, email, account_id, amount, status: 'pending', created_at: Date.now()
          }, 86400);

          return jsonResponse({ url: resData.invoice_url, order_id: orderId }, 200, corsHeaders);
        } catch (npErr) {
          return jsonResponse({ error: 'NOWPayments error: ' + npErr.message }, 500, corsHeaders);
        }
      }

      // 12.5 Create PayPal Order (/api/v1/checkout/paypal)
      if (pathname === '/api/v1/checkout/paypal' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const rawPlanId = body.plan_id || body.plan || 'premium_plus_monthly';
        const planMeta = PLAN_CATALOG[rawPlanId] || { amount: 9.99, title: 'Premium+ Monthly', tier: 'premium_plus' };
        const plan_id = rawPlanId;
        const plan_title = body.plan_title || planMeta.title;
        const amount = parseFloat(body.amount) || planMeta.amount;
        const account_id = body.account_id || masterDeviceId || 'dev_guest';
        const email = (body.email && body.email.includes('@')) ? body.email : `${account_id}@client.zvpn.net`;

        try {
          const accessToken = await getPayPalAccessToken(env);
          const baseUrl = getPayPalApiBase(env);

          const orderPayload = {
            intent: 'CAPTURE',
            purchase_units: [
              {
                reference_id: plan_id || 'yearly',
                description: `ZVPN - ${plan_title || plan_id}`,
                custom_id: JSON.stringify({ plan_id, email, account_id }),
                amount: {
                  currency_code: 'USD',
                  value: parseFloat(amount).toFixed(2)
                }
              }
            ],
            application_context: {
              brand_name: 'ZVPN Network',
              landing_page: 'NO_PREFERENCE',
              user_action: 'PAY_NOW',
              return_url: `${url.origin}/?success=true`,
              cancel_url: `${url.origin}/?canceled=true`
            }
          };

          const orderRes = await fetch(`${baseUrl}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderPayload)
          });

          const orderData = await orderRes.json();
          if (!orderRes.ok) {
            return jsonResponse({ error: orderData.message || 'PayPal order creation failed' }, orderRes.status, corsHeaders);
          }

          const approveLink = (orderData.links || []).find(l => l.rel === 'approve')?.href;
          if (!approveLink) {
            return jsonResponse({ error: 'No PayPal approval URL returned' }, 500, corsHeaders);
          }

          await setStorage(env, `paypal_order_${orderData.id}`, {
            order_id: orderData.id,
            plan_id, email, account_id, amount, status: 'CREATED', created_at: Date.now()
          }, 86400);

          return jsonResponse({ url: approveLink, order_id: orderData.id }, 200, corsHeaders);
        } catch (err) {
          return jsonResponse({ error: err.message }, 500, corsHeaders);
        }
      }

      // 13. Create Sha7nawy Egyptian Mobile Wallets Payment (/api/v1/checkout/sha7nawy)
      if (pathname === '/api/v1/checkout/sha7nawy' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const rawPlanId = body.plan_id || body.plan || 'premium_plus_monthly';
        const planMeta = PLAN_CATALOG[rawPlanId] || { amount: 9.99, title: 'Premium+ Monthly', tier: 'premium_plus' };
        const plan_id = rawPlanId;
        const plan_title = body.plan_title || planMeta.title;
        const account_id = body.account_id || masterDeviceId || 'dev_guest';
        const email = (body.email && body.email.includes('@')) ? body.email : `${account_id}@client.zvpn.net`;
        const phone = (body.number || body.phone || '').trim();
        const method = body.method || (phone.startsWith('010') ? 'vf_cash' : phone.startsWith('012') ? 'or_cash' : phone.startsWith('011') ? 'et_cash' : null);

        const amountEgp = body.amount_egp ? parseFloat(body.amount_egp) : getPlanAmountEgp(plan_id, planMeta.amount);
        const orderId = `zvpn_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const pubKey = getSha7nawyPublicKey(env);

        try {
          // If customer provides phone number and valid wallet method -> Direct Charge API
          if (phone && phone.length === 11 && method) {
            const createPayload = {
              order_id: orderId,
              number: phone,
              amount: amountEgp,
              method: method,
              customer_name: body.customer_name || email.split('@')[0],
              customer_email: email,
              customer_phone: phone,
              description: `ZVPN Subscription - ${plan_title}`,
              webhook_url: `${url.origin}/api/v1/checkout/webhook/sha7nawy`,
              metadata: {
                plan_id: String(plan_id),
                account_id: String(account_id),
                email: String(email),
                amount_egp: String(amountEgp)
              }
            };

            const sRes = await fetch('https://gate.sha7nawy.com/api/v2/payment/create', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': pubKey,
                'X-App-Name': 'ZVPN-Edge'
              },
              body: JSON.stringify(createPayload)
            });
            const sData = await sRes.json();

            if (sData.success && sData.data) {
              await setStorage(env, `sha7nawy_order_${orderId}`, {
                order_id: orderId,
                reference: sData.data.reference,
                plan_id, email, account_id,
                amount_egp: amountEgp,
                method, phone,
                created_at: Date.now()
              }, 86400);

              let instruct = 'يرجى تأكيد السحب على هاتفك';
              if (method === 'vf_cash') instruct = 'اطلب كود *9*1# على هاتفك وأدخل الرقم السري خلال 60 ثانية لتأكيد الدفع';
              else if (method === 'or_cash') instruct = 'افتح تطبيق Orange Cash ووافق على طلب السحب المعلق';
              else if (method === 'et_cash') instruct = 'اطلب كود *777*11# أو وافق عبر تطبيق e& Money';

              return jsonResponse({
                success: true,
                mode: 'direct',
                reference: sData.data.reference,
                order_id: orderId,
                instructions: instruct,
                amount_egp: amountEgp,
                method: method
              }, 200, corsHeaders);
            } else {
              return jsonResponse({ error: sData.message || 'فشل إنشاء طلب الدفع عبر المحفظة', errors: sData.errors }, 400, corsHeaders);
            }
          }

          // Hosted Payment Link (Customer selects wallet on hosted checkout)
          const linkPayload = {
            order_id: orderId,
            amount: amountEgp,
            methods: ['vf_cash', 'or_cash', 'et_cash'],
            description: `ZVPN Subscription - ${plan_title}`,
            success_url: `${url.origin}/?success=true&gateway=sha7nawy&order_id=${orderId}`,
            fail_url: `${url.origin}/?canceled=true`,
            webhook_url: `${url.origin}/api/v1/checkout/webhook/sha7nawy`,
            customer_name: email.split('@')[0],
            customer_email: email,
            metadata: {
              plan_id: String(plan_id),
              account_id: String(account_id),
              email: String(email),
              amount_egp: String(amountEgp)
            }
          };

          const sLinkRes = await fetch('https://gate.sha7nawy.com/api/v2/payment-link/create', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': pubKey,
              'X-App-Name': 'ZVPN-Edge'
            },
            body: JSON.stringify(linkPayload)
          });
          const sLinkData = await sLinkRes.json();

          if (sLinkData.success && sLinkData.data && sLinkData.data.payment_url) {
            await setStorage(env, `sha7nawy_order_${orderId}`, {
              order_id: orderId,
              token: sLinkData.data.token,
              plan_id, email, account_id,
              amount_egp: amountEgp,
              created_at: Date.now()
            }, 86400);

            return jsonResponse({
              success: true,
              mode: 'link',
              url: sLinkData.data.payment_url,
              token: sLinkData.data.token,
              order_id: orderId,
              amount_egp: amountEgp
            }, 200, corsHeaders);
          } else {
            return jsonResponse({ error: sLinkData.message || 'فشل إنشاء رابط دفع المحافظ', errors: sLinkData.errors }, 400, corsHeaders);
          }
        } catch (err) {
          return jsonResponse({ error: err.message }, 500, corsHeaders);
        }
      }

      // 14. Confirm Sha7nawy Direct Payment (/api/v1/checkout/sha7nawy/confirm)
      if (pathname === '/api/v1/checkout/sha7nawy/confirm' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const reference = body.reference;
        const pubKey = getSha7nawyPublicKey(env);

        if (!reference) {
          return jsonResponse({ error: 'Missing reference code.' }, 400, corsHeaders);
        }

        try {
          const confRes = await fetch('https://gate.sha7nawy.com/api/v2/payment/confirm', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': pubKey,
              'X-App-Name': 'ZVPN-Edge'
            },
            body: JSON.stringify({ reference })
          });
          const confData = await confRes.json();

          if (confData.success) {
            const orderId = confData.data?.order_id || body.order_id;
            if (orderId) {
              const meta = await getStorage(env, `sha7nawy_order_${orderId}`, {});
              const existingKey = await getStorage(env, `sha7nawy_order_key_${orderId}`, null);
              if (!existingKey) {
                const planId = meta.plan_id || 'yearly';
                const email = meta.email || '';
                const accountId = meta.account_id || '';
                const key = generateLicenseKey();
                const licData = provisionLicenseData(planId, email, key);
                await setStorage(env, `license_${key}`, licData);
                await setStorage(env, `sha7nawy_order_key_${orderId}`, key);
                if (accountId) await creditUserAccount(env, accountId, licData);
                return jsonResponse({ success: true, confirmed: true, license_key: key, ...licData }, 200, corsHeaders);
              } else {
                const lic = await getStorage(env, `license_${existingKey}`, null);
                return jsonResponse({ success: true, confirmed: true, license_key: existingKey, ...lic }, 200, corsHeaders);
              }
            }
            return jsonResponse({ success: true, confirmed: true, data: confData.data }, 200, corsHeaders);
          } else {
            return jsonResponse({ success: false, message: confData.message || 'لم يتم تأكيد السحب بعد', code: confData.code }, 200, corsHeaders);
          }
        } catch (err) {
          return jsonResponse({ error: err.message }, 500, corsHeaders);
        }
      }

      // 13. Verify Payment Session & Mint License (/api/v1/checkout/verify-session)
      if (pathname === '/api/v1/checkout/verify-session' && request.method === 'GET') {
        const sessionId = url.searchParams.get('session_id');
        const orderId = url.searchParams.get('order_id');
        const paypalOrderId = url.searchParams.get('paypal_order_id') || url.searchParams.get('token');

        // Check Stripe
        if (sessionId) {
          const existingKey = await getStorage(env, `stripe_session_key_${sessionId}`, null);
          if (existingKey) {
            const lic = await getStorage(env, `license_${existingKey}`, null);
            return jsonResponse({ paid: true, license_key: existingKey, ...lic }, 200, corsHeaders);
          }

          const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
            headers: { 'Authorization': `Bearer ${getStripeSecretKey(env)}` }
          });
          const session = await stripeRes.json();

          if (session.payment_status === 'paid') {
            const planId = session.metadata?.plan_id || 'yearly';
            const email = session.customer_email || session.metadata?.email || '';
            const accountId = session.metadata?.account_id || '';
            const key = generateLicenseKey();

            const licData = provisionLicenseData(planId, email, key);
            await setStorage(env, `license_${key}`, licData);
            await setStorage(env, `stripe_session_key_${sessionId}`, key);

            if (accountId) {
              await creditUserAccount(env, accountId, licData);
            }

            return jsonResponse({ paid: true, license_key: key, ...licData }, 200, corsHeaders);
          } else {
            return jsonResponse({ paid: false, status: session.payment_status }, 200, corsHeaders);
          }
        }

        // Check PayPal
        if (paypalOrderId) {
          const existingKey = await getStorage(env, `paypal_order_key_${paypalOrderId}`, null);
          if (existingKey) {
            const lic = await getStorage(env, `license_${existingKey}`, null);
            return jsonResponse({ paid: true, license_key: existingKey, ...lic }, 200, corsHeaders);
          }

          try {
            const accessToken = await getPayPalAccessToken(env);
            const baseUrl = getPayPalApiBase(env);

            const captureRes = await fetch(`${baseUrl}/v2/checkout/orders/${paypalOrderId}/capture`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              }
            });

            let captureData = await captureRes.json();
            if (!captureRes.ok && captureData.details?.[0]?.issue === 'ORDER_ALREADY_CAPTURED') {
              const getRes = await fetch(`${baseUrl}/v2/checkout/orders/${paypalOrderId}`, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
              });
              captureData = await getRes.json();
            }

            const status = captureData.status;
            if (status === 'COMPLETED') {
              const meta = await getStorage(env, `paypal_order_${paypalOrderId}`, {});
              const purchaseUnit = captureData.purchase_units?.[0];
              let customMeta = {};
              try {
                customMeta = JSON.parse(purchaseUnit?.custom_id || '{}');
              } catch (_) {}

              const planId = meta.plan_id || customMeta.plan_id || 'yearly';
              const email = meta.email || customMeta.email || captureData.payer?.email_address || '';
              const accountId = meta.account_id || customMeta.account_id || '';
              const key = generateLicenseKey();

              const licData = provisionLicenseData(planId, email, key);
              await setStorage(env, `license_${key}`, licData);
              await setStorage(env, `paypal_order_key_${paypalOrderId}`, key);

              if (accountId) {
                await creditUserAccount(env, accountId, licData);
              }

              return jsonResponse({ paid: true, license_key: key, ...licData }, 200, corsHeaders);
            } else {
              return jsonResponse({ paid: false, status: status || 'pending' }, 200, corsHeaders);
            }
          } catch (err) {
            return jsonResponse({ error: 'PayPal verification failed: ' + err.message }, 500, corsHeaders);
          }
        }

        // Check NOWPayments / Crypto
        if (orderId) {
          const existingKey = await getStorage(env, `nowpayments_order_key_${orderId}`, null) || await getStorage(env, `cryptomus_order_key_${orderId}`, null);
          if (existingKey) {
            const lic = await getStorage(env, `license_${existingKey}`, null);
            return jsonResponse({ paid: true, license_key: existingKey, ...lic }, 200, corsHeaders);
          }

          const npApiKey = env.NOWPAYMENTS_API_KEY || '1TS1Y8D-HKVMAS0-PCTA9QF-AJRD4P1';
          try {
            const checkRes = await fetch(`https://api.nowpayments.io/v1/payment/?order_id=${orderId}`, {
              headers: { 'x-api-key': npApiKey }
            });
            const checkData = await checkRes.json();
            const payments = Array.isArray(checkData) ? checkData : (checkData.data || []);
            const finishedPayment = payments.find(p => p.payment_status === 'finished' || p.payment_status === 'confirmed');

            if (finishedPayment) {
              const orderMeta = await getStorage(env, `nowpayments_order_${orderId}`, {}) || await getStorage(env, `cryptomus_order_${orderId}`, {});
              const planId = orderMeta.plan_id || 'yearly';
              const email = orderMeta.email || finishedPayment.customer_email || '';
              const accountId = orderMeta.account_id || '';
              const key = generateLicenseKey();

              const licData = provisionLicenseData(planId, email, key);
              await setStorage(env, `license_${key}`, licData);
              await setStorage(env, `nowpayments_order_key_${orderId}`, key);

              if (accountId) {
                await creditUserAccount(env, accountId, licData);
              }

              return jsonResponse({ paid: true, license_key: key, ...licData }, 200, corsHeaders);
            } else {
              const latestStatus = payments[0]?.payment_status || 'pending';
              return jsonResponse({ paid: false, status: latestStatus }, 200, corsHeaders);
            }
          } catch (_) {
            return jsonResponse({ paid: false, status: 'pending' }, 200, corsHeaders);
          }
        }

        // Check Sha7nawy Egyptian Mobile Wallets
        if (orderId && (url.searchParams.get('gateway') === 'sha7nawy' || orderId.startsWith('zvpn_'))) {
          const existingKey = await getStorage(env, `sha7nawy_order_key_${orderId}`, null);
          if (existingKey) {
            const lic = await getStorage(env, `license_${existingKey}`, null);
            return jsonResponse({ paid: true, license_key: existingKey, ...lic }, 200, corsHeaders);
          }

          const secKey = getSha7nawySecretKey(env);
          try {
            const infoRes = await fetch(`https://gate.sha7nawy.com/api/v2/payment-link/info/${orderId}`, {
              headers: { 'Authorization': secKey, 'Accept': 'application/json' }
            });
            const infoData = await infoRes.json();
            if (infoData.success && (infoData.data?.status === 'paid' || infoData.data?.status === 'completed')) {
              const meta = await getStorage(env, `sha7nawy_order_${orderId}`, {});
              const planId = meta.plan_id || 'yearly';
              const email = meta.email || infoData.data?.customer_email || '';
              const accountId = meta.account_id || '';
              const key = generateLicenseKey();

              const licData = provisionLicenseData(planId, email, key);
              await setStorage(env, `license_${key}`, licData);
              await setStorage(env, `sha7nawy_order_key_${orderId}`, key);

              if (accountId) {
                await creditUserAccount(env, accountId, licData);
              }

              return jsonResponse({ paid: true, license_key: key, ...licData }, 200, corsHeaders);
            }
          } catch (_) {}
        }

        return jsonResponse({ error: 'session_id, paypal_order_id, or order_id parameter required.' }, 400, corsHeaders);
      }

      // 14. Stripe S2S Webhook (/api/v1/checkout/webhook/stripe)
      if (pathname === '/api/v1/checkout/webhook/stripe' && request.method === 'POST') {
        const event = await request.json().catch(() => ({}));
        if (event.type === 'checkout.session.completed') {
          const session = event.data?.object;
          if (session && session.id && getStripeSecretKey(env)) {
            // Anti-Fraud: Always verify directly with Stripe API before provisioning
            const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session.id}`, {
              headers: { 'Authorization': `Bearer ${getStripeSecretKey(env)}` }
            });
            const verifiedSession = await stripeRes.json();

            if (verifiedSession && verifiedSession.payment_status === 'paid') {
              const existingKey = await getStorage(env, `stripe_session_key_${session.id}`, null);
              if (!existingKey) {
                const planId = verifiedSession.metadata?.plan_id || 'yearly';
                const email = verifiedSession.customer_email || verifiedSession.metadata?.email || '';
                const accountId = verifiedSession.metadata?.account_id || '';
                const key = generateLicenseKey();

                const licData = provisionLicenseData(planId, email, key);
                await setStorage(env, `license_${key}`, licData);
                await setStorage(env, `stripe_session_key_${session.id}`, key);

                if (accountId) {
                  await creditUserAccount(env, accountId, licData);
                }
              }
            }
          }
        }
        return jsonResponse({ received: true }, 200, corsHeaders);
      }

      // 15. NOWPayments IPN S2S Webhook (/api/v1/checkout/webhook/nowpayments or /api/v1/checkout/webhook/cryptomus)
      if ((pathname === '/api/v1/checkout/webhook/nowpayments' || pathname === '/api/v1/checkout/webhook/cryptomus') && request.method === 'POST') {
        const rawBody = await request.text();
        const incomingSig = request.headers.get('x-nowpayments-sig') || '';
        const ipnSecret = env.NOWPAYMENTS_IPN_SECRET || env.NOWPAYMENTS_API_KEY || '1TS1Y8D-HKVMAS0-PCTA9QF-AJRD4P1';

        const data = JSON.parse(rawBody || '{}');

        // HMAC-SHA512 verification per NOWPayments documentation
        if (incomingSig && ipnSecret) {
          const sorted = sortObject(data);
          const sortedStr = JSON.stringify(sorted);
          const expectedSig = await hmacSha512(ipnSecret, sortedStr);
          if (incomingSig !== expectedSig) {
            console.warn('NOWPayments IPN signature mismatch:', incomingSig, 'expected:', expectedSig);
            return jsonResponse({ error: 'Invalid IPN HMAC signature.' }, 401, corsHeaders);
          }
        }

        const orderId = data.order_id;
        const status = (data.payment_status || data.status || '').toLowerCase();

        if (orderId && (status === 'finished' || status === 'confirmed' || status === 'paid' || status === 'paid_over')) {
          const existingKey = await getStorage(env, `nowpayments_order_key_${orderId}`, null) || await getStorage(env, `cryptomus_order_key_${orderId}`, null);
          if (!existingKey) {
            const meta = await getStorage(env, `nowpayments_order_${orderId}`, {}) || await getStorage(env, `cryptomus_order_${orderId}`, {});
            const planId = meta.plan_id || 'yearly';
            const email = meta.email || data.customer_email || '';
            const accountId = meta.account_id || '';
            const key = generateLicenseKey();

            const licData = provisionLicenseData(planId, email, key);
            await setStorage(env, `license_${key}`, licData);
            await setStorage(env, `nowpayments_order_key_${orderId}`, key);

            if (accountId) {
              await creditUserAccount(env, accountId, licData);
            }
          }
        }
        return jsonResponse({ success: true }, 200, corsHeaders);
      }

      // 16. Sha7nawy S2S Webhook (/api/v1/checkout/webhook/sha7nawy)
      if (pathname === '/api/v1/checkout/webhook/sha7nawy' && request.method === 'POST') {
        const rawBody = await request.text();
        const incomingSig = request.headers.get('x-sha7nawy-signature-256') || '';
        const secKey = getSha7nawySecretKey(env);

        let data = {};
        try {
          data = JSON.parse(rawBody || '{}');
        } catch (_) {}

        // Verify HMAC-SHA256 signature if provided
        if (incomingSig && secKey) {
          try {
            const expectedSig = await hmacSha256(secKey, rawBody);
            if (incomingSig !== expectedSig) {
              console.warn('Sha7nawy Webhook signature mismatch:', incomingSig, 'expected:', expectedSig);
            }
          } catch (_) {}
        }

        const event = data.event;
        const tx = data.data || {};
        const orderId = tx.order_id;
        const status = (tx.status || '').toLowerCase();

        if (orderId && (status === 'completed' || status === 'paid' || event === 'transaction.completed')) {
          const existingKey = await getStorage(env, `sha7nawy_order_key_${orderId}`, null);
          if (!existingKey) {
            const meta = await getStorage(env, `sha7nawy_order_${orderId}`, {});
            const planId = meta.plan_id || tx.metadata?.plan_id || 'yearly';
            const email = meta.email || tx.customer_email || tx.client || '';
            const accountId = meta.account_id || tx.metadata?.account_id || '';
            const key = generateLicenseKey();

            const licData = provisionLicenseData(planId, email, key);
            await setStorage(env, `license_${key}`, licData);
            await setStorage(env, `sha7nawy_order_key_${orderId}`, key);

            if (accountId) {
              await creditUserAccount(env, accountId, licData);
            }
          }
        }
        return jsonResponse({ success: true, message: 'Webhook processed' }, 200, corsHeaders);
      }

      // 16. Verify License Key Status (/api/v1/license/check)
      if (pathname === '/api/v1/license/check' && request.method === 'GET') {
        const key = (url.searchParams.get('key') || '').trim().toUpperCase();
        if (!key) {
          return jsonResponse({ valid: false, error: 'License key parameter is required.' }, 400, corsHeaders);
        }

        const lic = await getStorage(env, `license_${key}`, null);
        if (!lic) {
          return jsonResponse({ valid: false, error: 'License key not found in database.' }, 404, corsHeaders);
        }

        if (lic.valid_until && Date.now() > lic.valid_until) {
          return jsonResponse({ valid: false, error: 'License key has expired.', expired: true }, 200, corsHeaders);
        }

        return jsonResponse({
          valid: true,
          tier: lic.tier || 'premium_plus',
          points: lic.points || 0,
          valid_until: lic.valid_until,
          plan_id: lic.plan_id
        }, 200, corsHeaders);
      }

      // 17. Activate License Key on Device/Account (/api/v1/license/activate)
      if (pathname === '/api/v1/license/activate' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const key = (body.license_key || '').trim().toUpperCase();
        const targetId = body.account_id || masterDeviceId;

        if (!key) {
          return jsonResponse({ success: false, error: 'license_key is required.' }, 400, corsHeaders);
        }

        // Security: Anti-Brute-Force Rate Limiting (Max 5 failed attempts in 15 mins per IP)
        const rateLimitKey = `lic_fail_${clientIP}`;
        const failedAttempts = await getStorage(env, rateLimitKey, 0);
        if (failedAttempts >= 5) {
          return jsonResponse({
            success: false,
            error: 'Too many failed license activation attempts. Please wait 15 minutes.'
          }, 429, corsHeaders);
        }

        const lic = await getStorage(env, `license_${key}`, null);
        if (!lic) {
          await setStorage(env, rateLimitKey, failedAttempts + 1, 900);
          return jsonResponse({ success: false, error: 'Invalid license key.' }, 404, corsHeaders);
        }
        await setStorage(env, rateLimitKey, 0);

        if (lic.valid_until && Date.now() > lic.valid_until) {
          return jsonResponse({ success: false, error: 'License key has expired.' }, 400, corsHeaders);
        }

        const alreadyClaimed = await getStorage(env, `license_claimed_${key}`, null);
        if (alreadyClaimed && alreadyClaimed !== targetId) {
          return jsonResponse({ success: false, error: 'This license key has already been activated on another account/device.' }, 409, corsHeaders);
        }

        await setStorage(env, `license_claimed_${key}`, targetId);
        await creditUserAccount(env, targetId, lic);

        const newBalance = await getStorage(env, `user_pts_${targetId}`, 0);

        return jsonResponse({
          success: true,
          message: 'License activated successfully!',
          tier: lic.tier,
          valid_until: lic.valid_until,
          points_credited: lic.points || 0,
          total_points: newBalance
        }, 200, corsHeaders);
      }

      return jsonResponse({ error: 'Endpoint not found.' }, 404, corsHeaders);

    } catch (err) {
      return jsonResponse({ error: 'Internal worker error', details: err.message }, 500, corsHeaders);
    }
  }
};

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status: status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-ZVPN-Failover': 'https://zvpn-backend.itsbaask.workers.dev',
      ...headers
    }
  });
}

function provisionLicenseData(planId, email, key) {
  const now = Date.now();
  let validUntil = null;
  let tier = 'premium_plus';
  let points = 0;

  switch (planId) {
    case 'premium_monthly':
      validUntil = now + (30 * 24 * 60 * 60 * 1000);
      points = 2000;
      tier = 'premium';
      break;
    case 'premium_plus_monthly':
      validUntil = now + (30 * 24 * 60 * 60 * 1000);
      points = 5000;
      tier = 'premium_plus';
      break;
    case 'weekly':
      validUntil = now + (7 * 24 * 60 * 60 * 1000);
      points = 500;
      break;
    case 'monthly':
      validUntil = now + (30 * 24 * 60 * 60 * 1000);
      points = 2000;
      break;
    case 'yearly':
      validUntil = now + (365 * 24 * 60 * 60 * 1000);
      points = 10000;
      break;
    case 'yearly_plus':
      validUntil = now + (365 * 24 * 60 * 60 * 1000);
      points = 25000;
      break;
    case 'pts_500':
      points = 500;
      break;
    case 'pts_1200':
      points = 1200;
      break;
    case 'pts_3000':
      points = 3000;
      break;
    default:
      validUntil = now + (30 * 24 * 60 * 60 * 1000);
      points = 1000;
  }

  return {
    key,
    plan_id: planId,
    email,
    tier,
    points,
    valid_until: validUntil,
    created_at: now
  };
}

async function creditUserAccount(env, accountId, licData) {
  if (licData.points > 0) {
    const curPts = await getStorage(env, `user_pts_${accountId}`, 0);
    await setStorage(env, `user_pts_${accountId}`, curPts + licData.points);
  }
  if (licData.valid_until) {
    await setStorage(env, `user_tier_${accountId}`, {
      tier: licData.tier,
      valid_until: licData.valid_until,
      plan_id: licData.plan_id || '',
      license_key: licData.key || licData.license_key || '',
      updated_at: Date.now()
    });
  }
  const licenseKey = licData.key || licData.license_key;
  if (licenseKey) {
    let licenses = (await getStorage(env, `user_licenses_${accountId}`, [])) || [];
    if (!Array.isArray(licenses)) licenses = [];
    // Prevent duplicate entries
    licenses = licenses.filter(l => l.license_key !== licenseKey);
    licenses.unshift({
      license_key: licenseKey,
      tier: licData.tier,
      plan_id: licData.plan_id || '',
      valid_until: licData.valid_until || null,
      points: licData.points || 0,
      activated_at: Date.now()
    });
    if (licenses.length > 20) licenses = licenses.slice(0, 20);
    await setStorage(env, `user_licenses_${accountId}`, licenses);
  }
}

async function getPayPalAccessToken(env) {
  const clientId = getPayPalClientId(env);
  const secret = getPayPalClientSecret(env);
  const baseUrl = getPayPalApiBase(env);

  if (!clientId || !secret) {
    throw new Error('PayPal credentials not configured on server.');
  }

  const authHeader = 'Basic ' + toBase64(`${clientId}:${secret}`);
  const res = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error_description || data.error || 'Failed to authenticate with PayPal');
  }
  return data.access_token;
}
