/**
 * ZVPN World-Class Web Landing Page & Payment Portal
 * Ultra High-End Dark UI, 3D Canvas Globe, Live AES-256 WebCrypto Demo,
 * Integrated Stripe, PayPal & NOWPayments Crypto Checkout Modal,
 * Instant License Key Generation & Verification, Full Arabic / English Bilingual Support.
 */

import { ZVPN_LOGO_PATH, ZVPN_FAVICON_DATA_URI } from './logo.js';

export function getWebsiteHtml(config = {}) {
  const stripePublishableKey = config.stripePublishableKey || '';
  const totalServers = config.totalServers || 12613;
  const totalCountries = config.totalCountries || 82;
  const serversFormatted = Number(totalServers).toLocaleString();
  
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Z VPN – Next-Gen Privacy, Tor, Gaming & Enterprise Encryption</title>
<meta name="description" content="Z VPN provides unblockable censorship-resistant protocols (VLESS Reality, Hysteria 2, WireGuard, Tor Onion) with zero-logs policy, esports gaming mode, and instant crypto & card checkout.">
<link rel="icon" type="image/svg+xml" href="${ZVPN_FAVICON_DATA_URI}">
<link rel="alternate icon" href="/favicon.svg">
<link rel="apple-touch-icon" href="${ZVPN_FAVICON_DATA_URI}">
<meta name="theme-color" content="#050507">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<style>
/* Anti-Copy, Anti-Theft & UI Protection */
html, body {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  -webkit-touch-callout: none !important;
}
input, textarea, .allow-select, #cli-cmd-display, #license-input {
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  user-select: text !important;
}
img, svg {
  -webkit-user-drag: none !important;
  user-drag: none !important;
  pointer-events: auto;
}

:root {
  --bg: #060608;
  --bg-card: #0d0d12;
  --bg-elevated: #14141c;
  --text: #f0f0f5;
  --text-muted: #8e8ea0;
  --accent: #c6ff00;
  --accent-glow: rgba(198, 255, 0, 0.28);
  --accent-cyan: #00e5ff;
  --border: #1f1f2e;
  --border-active: #3a3a52;
  --danger: #ff4757;
  --success: #2ed573;
  --font-sans: "Plus Jakarta Sans", "IBM Plex Sans Arabic", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

[dir="rtl"] {
  --font-sans: "IBM Plex Sans Arabic", "Plus Jakarta Sans", sans-serif;
}

/* Custom ZVPN Cybernetic Cursors */
*, *::before, *::after {
  box-sizing: border-box; margin: 0; padding: 0;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath d='M3 3 L3 22 L8 17 L12 24 L15 22 L11 15 L18 15 Z' fill='%23C6FF00' stroke='%23050508' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='6.5' cy='7.5' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E") 3 3, auto;
}

a, button, input, select, textarea, [role="button"], .btn, .lang-opt, .cli-tab-btn, .dl-card, .plan-card, .faq-item, .method-opt, .qr-close, .logo {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath d='M3 3 L3 22 L8 17 L12 24 L15 22 L11 15 L18 15 Z' fill='%2300E5FF' stroke='%23050508' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='6.5' cy='7.5' r='1.5' fill='%23C6FF00'/%3E%3C/svg%3E") 3 3, pointer !important;
}

#zvpn-cursor-trail {
  position: fixed; top: 0; left: 0; width: 34px; height: 34px; border-radius: 50%;
  border: 1.5px solid rgba(198, 255, 0, 0.5); box-shadow: 0 0 12px rgba(198, 255, 0, 0.25);
  pointer-events: none; z-index: 999999; transform: translate(-50%, -50%);
  transition: width 0.2s cubic-bezier(0.2,0,0.2,1), height 0.2s cubic-bezier(0.2,0,0.2,1), border-color 0.2s, background 0.2s, box-shadow 0.2s;
  will-change: transform;
}
@media (pointer: coarse) { #zvpn-cursor-trail { display: none !important; } }

html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font: 400 1.05rem/1.65 var(--font-sans);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
button { font-family: inherit; }

.container { max-width: 1220px; margin: 0 auto; padding: 0 1.5rem; }
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(198, 255, 0, 0.1); border: 1px solid var(--accent);
  color: var(--accent); padding: 4px 12px; border-radius: 999px;
  font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
}
.badge.cyan { background: rgba(0, 229, 255, 0.1); border-color: var(--accent-cyan); color: var(--accent-cyan); }

/* Navigation */
header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(6, 6, 8, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  width: 100%;
}
header .container {
  max-width: 1440px;
  width: 100%;
  padding: 0 1.5rem;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25rem;
  gap: 1rem;
}
.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  text-decoration: none;
  flex-shrink: 0;
  margin-inline-end: 0.5rem;
}
.logo-mark {
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  filter: drop-shadow(0 0 10px var(--accent-glow));
  transition: transform 0.25s ease;
  flex-shrink: 0;
}
.logo:hover .logo-mark { transform: scale(1.08) rotate(-3deg); }
.logo-text { color: #fff; font-weight: 800; letter-spacing: -0.02em; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-shrink: 1;
}
.nav-links li {
  white-space: nowrap;
}
.nav-links a {
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  padding: 6px 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: inline-block;
  line-height: 1.2;
}
.nav-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.nav-actions .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: var(--accent);
  color: #000;
  border: 1px solid var(--accent);
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0 16px;
  height: 38px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1;
  box-shadow: 0 0 14px var(--accent-glow);
  transition: all 0.2s ease;
  text-decoration: none;
}
.nav-actions .btn:hover {
  background: #d7ff33;
  transform: translateY(-1px);
  box-shadow: 0 0 20px var(--accent-glow);
}

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--accent); color: #000; border: 1px solid var(--accent);
  font-weight: 700; font-size: 0.95rem; padding: 11px 22px; border-radius: 10px;
  cursor: pointer; transition: all 0.25s ease; box-shadow: 0 0 16px var(--accent-glow);
}
.btn:hover { background: #d7ff33; transform: translateY(-2px); box-shadow: 0 0 24px var(--accent-glow); }
.btn.outline {
  background: transparent; color: #fff; border: 1px solid var(--border-active);
  box-shadow: none;
}
.btn.outline:hover { background: var(--bg-elevated); border-color: var(--accent); color: var(--accent); }
.btn.cyan {
  background: var(--accent-cyan); border-color: var(--accent-cyan); color: #000;
  box-shadow: 0 0 16px rgba(0, 229, 255, 0.3);
}
.btn.cyan:hover { background: #33ecff; box-shadow: 0 0 26px rgba(0, 229, 255, 0.4); }

.lang-btn {
  background: var(--bg-elevated);
  border: 1px solid var(--border-active);
  color: var(--text);
  padding: 0 12px;
  height: 38px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.lang-btn:hover {
  border-color: var(--accent);
  color: #fff;
  background: rgba(255, 255, 255, 0.04);
}

/* Language Dropdown Menu */
.lang-dropdown-wrapper {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.lang-arrow {
  font-size: 0.75rem;
  opacity: 0.7;
  transition: transform 0.2s ease;
  margin-inline-start: 2px;
}
.lang-dropdown-wrapper.open .lang-arrow {
  transform: rotate(180deg);
}
.lang-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #0d0d14;
  border: 1px solid var(--border-active);
  border-radius: 14px;
  padding: 6px;
  min-width: 155px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.65), 0 0 20px rgba(198, 255, 0, 0.08);
  display: none;
  flex-direction: column;
  gap: 2px;
  z-index: 250;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
[dir="rtl"] .lang-dropdown-menu {
  right: auto;
  left: 0;
}
.lang-dropdown-wrapper.open .lang-dropdown-menu {
  display: flex;
}
.lang-opt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.lang-opt:hover {
  background: var(--bg-elevated);
  color: #fff;
}
.lang-opt.active {
  background: rgba(198, 255, 0, 0.12);
  color: var(--accent);
  font-weight: 700;
}
.lang-flag {
  font-size: 1.05rem;
  line-height: 1;
}

@media (max-width: 1280px) {
  .nav-links { gap: 0.85rem; }
  .nav-links a { font-size: 0.82rem; padding: 4px 6px; }
  .user-pill-name { max-width: 70px; }
  .nav-actions .btn { padding: 0 14px; font-size: 0.82rem; }
}
@media (max-width: 1100px) {
  .nav-links { gap: 0.6rem; }
  .nav-links a { font-size: 0.8rem; }
  .nav-links li.nav-secondary { display: none; }
}
@media (max-width: 960px) {
  .nav-links { display: none; }
}
@media (max-width: 600px) {
  header .container { padding: 0 0.75rem; }
  .logo-text { display: none; }
  .user-pill-name { display: none; }
  .nav-actions .btn { padding: 0 12px; font-size: 0.8rem; height: 36px; }
  .lang-btn { padding: 0 10px; font-size: 0.78rem; height: 36px; }
  .user-pill-btn { height: 36px; padding: 3px 8px; }
}

/* Hero Section */
.hero {
  position: relative; min-height: 90vh; display: flex; align-items: center;
  overflow: hidden; padding: 5rem 0 3rem;
}
.hero-glow {
  position: absolute; top: 15%; right: 10%; width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(198, 255, 0, 0.12) 0%, transparent 70%);
  filter: blur(80px); pointer-events: none; z-index: 0;
}
[dir="rtl"] .hero-glow {
  right: auto;
  left: 10%;
}
#gl-canvas {
  position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
}
.hero .container { position: relative; z-index: 2; width: 100%; }
.hero-content { max-width: 680px; }
.hero h1 {
  font-size: clamp(2.6rem, 5.8vw, 4.8rem); font-weight: 800;
  line-height: 1.08; letter-spacing: -0.04em; margin: 18px 0;
}
.hero h1 .highlight { color: var(--accent); }
.hero p.sub {
  font-size: 1.25rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2.2rem; max-width: 580px;
}
.hero-cta { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }

.stats-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;
  margin-top: 5rem; padding: 2.2rem; background: rgba(13, 13, 18, 0.7);
  backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 18px;
}
.stat-box b { font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 800; color: #fff; display: block; line-height: 1.1; }
.stat-box span { color: var(--text-muted); font-size: 0.9rem; font-weight: 500; }
.stat-box .dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); margin-inline-end: 6px; box-shadow: 0 0 8px var(--accent); }

/* Live WebCrypto AES Demo */
.crypto-demo { padding: 5rem 0; border-top: 1px solid var(--border); background: #08080c; }
.demo-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 20px; padding: 2.5rem; margin-top: 2rem;
}
.demo-input {
  width: 100%; background: var(--bg-elevated); border: 1px solid var(--border);
  color: #fff; padding: 14px 20px; border-radius: 12px; font-size: 1.25rem; font-weight: 600;
  outline: none; transition: border-color 0.2s; margin: 1.2rem 0;
}
.demo-input:focus { border-color: var(--accent); box-shadow: 0 0 12px var(--accent-glow); }
.demo-panes { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.demo-pane {
  background: var(--bg); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; min-height: 150px;
}
.demo-pane.secure { border-color: var(--accent); background: rgba(198, 255, 0, 0.02); }
.demo-pane h4 { font-size: 0.88rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.8rem; font-weight: 700; letter-spacing: 0.05em; }
.demo-pane.secure h4 { color: var(--accent); }
.demo-pane p { font-family: var(--font-mono); font-size: 0.95rem; word-break: break-all; color: var(--text-muted); line-height: 1.5; }
.demo-pane.secure p { color: #a4f000; }

/* Protocol Matrix */
.protocols-section { padding: 6rem 0; border-top: 1px solid var(--border); }
.section-head { text-align: center; max-width: 720px; margin: 0 auto 3.5rem; }
.section-head h2 { font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; letter-spacing: -0.03em; margin: 12px 0; }
.section-head p { color: var(--text-muted); font-size: 1.15rem; }
.proto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.proto-pill {
  background: var(--bg-card); border: 1px solid var(--border); color: #c0c0d8;
  padding: 6px 14px; border-radius: 999px; font-size: 0.8rem; font-weight: 700;
  display: inline-flex; align-items: center; gap: 6px; transition: all 0.25s ease;
}
.proto-pill:hover {
  border-color: var(--accent); color: #fff; transform: translateY(-2px);
  box-shadow: 0 0 12px var(--accent-glow);
}
.proto-pill span { color: var(--accent); }
.proto-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px;
  padding: 2rem; transition: all 0.3s ease; position: relative; overflow: hidden;
}
.proto-card:hover { transform: translateY(-4px); border-color: var(--border-active); }
.proto-card::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--accent), transparent); opacity: 0; transition: opacity 0.3s;
}
.proto-card:hover::before { opacity: 1; }

/* Icon Dimension & Sizing Standardization */
.proto-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(198, 255, 0, 0.08);
  border: 1px solid rgba(198, 255, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;
}
.proto-card:hover .proto-icon {
  background: rgba(198, 255, 0, 0.16);
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent-glow);
  transform: translateY(-2px);
}
.proto-icon svg {
  width: 28px !important;
  height: 28px !important;
  display: block;
}
.proto-pill svg {
  width: 14px !important;
  height: 14px !important;
  vertical-align: -2px;
  flex-shrink: 0;
}
.eco-icon-box {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(198, 255, 0, 0.08);
  border: 1px solid rgba(198, 255, 0, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6rem;
  transition: all 0.3s ease;
}
.economy-card:hover .eco-icon-box {
  background: rgba(198, 255, 0, 0.16);
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent-glow);
  transform: translateY(-2px);
}
.eco-icon-box svg {
  width: 32px !important;
  height: 32px !important;
  display: block;
}
.gaming-features li span.icon svg {
  width: 16px !important;
  height: 16px !important;
  display: inline-block;
  vertical-align: -2px;
}
.download-section .btn svg,
.download-section .btn.outline svg {
  width: 18px !important;
  height: 18px !important;
  display: inline-block;
  vertical-align: -3px;
  margin-inline-end: 8px;
  flex-shrink: 0;
}
#btn-copy-cli svg {
  width: 14px !important;
  height: 14px !important;
  vertical-align: -2px;
  margin-inline-end: 4px;
}
.lang-btn .lang-icon svg {
  width: 16px !important;
  height: 16px !important;
  vertical-align: -2px;
}
.lang-opt .lang-flag svg {
  width: 18px !important;
  height: 18px !important;
  border-radius: 50%;
  display: inline-block;
  vertical-align: -3px;
  margin-inline-end: 6px;
}
.radar-name svg {
  width: 20px !important;
  height: 20px !important;
  border-radius: 50%;
  vertical-align: -3px;
  flex-shrink: 0;
}

.proto-card h3 { font-size: 1.3rem; font-weight: 700; margin-bottom: 8px; }
.proto-card p { font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; }

/* Gaming Section */
.gaming-section {
  padding: 6rem 0; border-top: 1px solid var(--border);
  background: radial-gradient(circle at 80% 50%, rgba(0, 229, 255, 0.06), transparent 50%), #07070b;
}
.gaming-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: center; }
.gaming-features { list-style: none; margin-top: 1.8rem; display: flex; flex-direction: column; gap: 14px; }
.gaming-features li { display: flex; align-items: flex-start; gap: 12px; font-size: 1rem; color: #e2e2ec; }
.gaming-features li span.icon { color: var(--accent-cyan); font-weight: 800; font-size: 1.2rem; line-height: 1; }
.radar-box {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; padding: 2rem;
}
.radar-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.radar-head h4 { font-size: 1rem; font-weight: 700; color: #fff; }
.radar-list { display: flex; flex-direction: column; gap: 12px; }
.radar-item {
  display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;
  background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 10px;
}
.radar-name { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.95rem; }
.radar-ping { font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: var(--accent); }

/* Economy & Free Points */
.economy-section { padding: 6rem 0; border-top: 1px solid var(--border); }
.economy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
.economy-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px;
  padding: 2.2rem; text-align: center;
}
.economy-card .pts-badge {
  font-size: 2.4rem; font-weight: 800; color: var(--accent); font-family: var(--font-mono); margin: 12px 0 6px;
}
.economy-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; }
.economy-card p { font-size: 0.92rem; color: var(--text-muted); }

/* Pricing */
.pricing-section { padding: 6rem 0; border-top: 1px solid var(--border); background: #07070a; }
.pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.price-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
  padding: 2.5rem 1.8rem; display: flex; flex-direction: column; justify-content: space-between;
  position: relative; transition: all 0.3s ease;
}
.price-card:hover { transform: translateY(-5px); border-color: var(--border-active); }
.price-card.featured {
  border-color: var(--accent); background: linear-gradient(180deg, rgba(198, 255, 0, 0.06) 0%, var(--bg-card) 60%);
  box-shadow: 0 0 35px rgba(198, 255, 0, 0.12);
}
.price-tag-badge {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: var(--accent); color: #000; font-size: 0.75rem; font-weight: 800;
  padding: 3px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.05em;
}
.price-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.price-desc { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 42px; }
.price-amount { font-size: 2.8rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 4px; }
.price-amount small { font-size: 0.95rem; font-weight: 500; color: var(--text-muted); }
.price-period { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.8rem; }
.price-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 2rem; }
.price-features li { display: flex; align-items: center; gap: 8px; font-size: 0.92rem; color: #d0d0e0; }
.price-features li span { color: var(--accent); font-weight: 700; }

/* Point Packs Row */
.point-packs { margin-top: 4rem; padding-top: 3rem; border-top: 1px solid var(--border); }
.point-packs h3 { text-align: center; font-size: 1.6rem; font-weight: 700; margin-bottom: 1.5rem; }
.packs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 950px; margin: 0 auto; }
.pack-card {
  background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 16px;
  padding: 1.8rem; text-align: center; transition: border-color 0.2s;
}
.pack-card:hover { border-color: var(--accent); }
.pack-pts { font-size: 2rem; font-weight: 800; color: var(--accent); margin: 6px 0; font-family: var(--font-mono); }
.pack-price { font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 1rem; }

/* License Activation Center */
.activation-section { padding: 5rem 0; border-top: 1px solid var(--border); }
.activation-box {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
  padding: 3rem 2rem; max-width: 780px; margin: 0 auto; text-align: center;
}
.activation-box h3 { font-size: 1.8rem; font-weight: 800; margin-bottom: 10px; }
.activation-box p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.8rem; }
.key-input-row { display: flex; gap: 10px; max-width: 540px; margin: 0 auto; }
.key-input {
  flex: 1; background: var(--bg-elevated); border: 1px solid var(--border);
  color: #fff; padding: 12px 18px; border-radius: 10px; font-family: var(--font-mono);
  font-size: 1.1rem; text-transform: uppercase; outline: none; letter-spacing: 0.05em;
}
.key-input:focus { border-color: var(--accent); }
#license-result { margin-top: 1.5rem; display: none; padding: 1.2rem; border-radius: 10px; }

/* Checkout Modal */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
  z-index: 1000; display: none; align-items: center; justify-content: center; padding: 1.5rem;
}
.modal-backdrop.open { display: flex; }
.modal-card {
  background: var(--bg-card); border: 1px solid var(--border-active); border-radius: 24px;
  width: 100%; max-width: 520px; padding: 2.2rem; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
  position: relative; animation: modalPop 0.25s ease-out;
}
@keyframes modalPop {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.modal-close {
  position: absolute; top: 18px; right: 20px; background: none; border: none;
  color: var(--text-muted); font-size: 1.6rem; cursor: pointer; transition: color 0.2s;
}
[dir="rtl"] .modal-close { right: auto; left: 20px; }
.modal-close:hover { color: #fff; }
.modal-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 6px; }
.modal-sub { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; }

.modal-methods { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 1.5rem; }
@media (max-width: 680px) {
  .modal-methods { grid-template-columns: repeat(2, 1fr); }
}
.method-choice {
  background: var(--bg-elevated); border: 2px solid var(--border); border-radius: 14px;
  padding: 14px 10px; text-align: center; cursor: pointer; transition: all 0.2s;
}
.method-choice.active { border-color: var(--accent); background: rgba(198, 255, 0, 0.05); }
.method-icon { font-size: 1.6rem; margin-bottom: 6px; }
.method-title { font-size: 0.92rem; font-weight: 700; color: #fff; }
.method-sub { font-size: 0.75rem; color: var(--text-muted); }

.form-group { margin-bottom: 1.2rem; text-align: left; }
[dir="rtl"] .form-group { text-align: right; }
.form-label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-bottom: 6px; }
.form-input {
  width: 100%; background: var(--bg-elevated); border: 1px solid var(--border);
  color: #fff; padding: 12px 16px; border-radius: 10px; font-size: 1rem; outline: none;
}
.form-input:focus { border-color: var(--accent); }
.modal-summary {
  background: var(--bg-elevated); border-radius: 12px; padding: 12px 16px;
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;
}
.modal-summary span { font-weight: 600; font-size: 0.95rem; }
.modal-summary b { color: var(--accent); font-size: 1.3rem; }

/* Success License Banner */
.license-success-card {
  background: rgba(198, 255, 0, 0.05); border: 2px dashed var(--accent);
  border-radius: 16px; padding: 2rem; margin: 2rem 0; text-align: center;
}
.license-code {
  font-family: var(--font-mono); font-size: clamp(1.3rem, 2.8vw, 1.8rem);
  font-weight: 800; color: var(--accent); letter-spacing: 0.08em;
  padding: 12px 18px; background: #000; border-radius: 10px; display: inline-block;
  margin: 12px 0; border: 1px solid var(--accent);
}

/* Footer */
footer { border-top: 1px solid var(--border); padding: 4rem 0 2rem; background: #050507; color: var(--text-muted); }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
.footer-logo { display: inline-flex; align-items: center; gap: 8px; font-size: 1.45rem; font-weight: 800; color: #fff; margin-bottom: 12px; }
.footer-logo .logo-mark { width: 30px; height: 30px; display: inline-block; vertical-align: middle; filter: drop-shadow(0 0 8px var(--accent-glow)); }
.footer-col h5 { font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 1rem; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; }
.footer-links a:hover { color: #fff; }
.footer-bottom { border-top: 1px solid var(--border); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; }
.pay-badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(4px);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  cursor: default;
  gap: 5px;
}
.pay-badge:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  border-color: rgba(198,255,0,0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .pricing-grid { grid-template-columns: repeat(2, 1fr); }
  .proto-grid { grid-template-columns: repeat(2, 1fr); }
  .gaming-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .pricing-grid { grid-template-columns: 1fr; }
  .proto-grid { grid-template-columns: 1fr; }
  .economy-grid { grid-template-columns: 1fr; }
  .packs-grid { grid-template-columns: 1fr; }
  .demo-panes { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr 1fr; padding: 1.5rem; gap: 1rem; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
  .key-input-row { flex-direction: column; }
}

/* User Auth & Account Modal */
.user-nav-box { display: flex; align-items: center; }
.btn-google-nav {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--bg-card); border: 1px solid var(--border);
  color: #fff; font-size: 0.84rem; font-weight: 600;
  padding: 0 14px; height: 38px; border-radius: 999px; cursor: pointer;
  white-space: nowrap; flex-shrink: 0;
  transition: all 0.25s ease;
}
.btn-google-nav:hover {
  border-color: #4285F4; box-shadow: 0 0 14px rgba(66, 133, 244, 0.25);
}
.user-pill-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--bg-elevated); border: 1px solid var(--border-active);
  padding: 4px 10px; height: 38px; border-radius: 999px; cursor: pointer;
  white-space: nowrap; flex-shrink: 0; box-sizing: border-box;
  transition: all 0.2s ease;
}
.user-pill-btn:hover { border-color: var(--accent); box-shadow: 0 0 14px var(--accent-glow); }
.user-pill-avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--accent); flex-shrink: 0; }
.user-pill-name { font-size: 0.84rem; font-weight: 700; color: #fff; max-width: 85px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.user-pill-pts {
  font-family: var(--font-mono); font-size: 0.74rem; font-weight: 800;
  background: rgba(198, 255, 0, 0.12); color: var(--accent);
  border: 1px solid rgba(198, 255, 0, 0.3); padding: 3px 8px;
  border-radius: 999px; letter-spacing: 0.02em; white-space: nowrap;
}

.account-modal-card { max-width: 580px; width: 95%; max-height: 90vh; overflow-y: auto; }
.account-header { display: flex; align-items: center; gap: 16px; margin-bottom: 1.5rem; padding-bottom: 1.2rem; border-bottom: 1px solid var(--border); }
.acc-avatar-large { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent); box-shadow: 0 0 20px var(--accent-glow); }
.account-stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 1.2rem; }
.acc-stat-box { background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 12px; padding: 12px; text-align: center; }
.acc-stat-box .stat-lbl { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 4px; }
.acc-stat-box .stat-val { font-size: 1.15rem; font-weight: 800; font-family: var(--font-mono); }
.acc-key-row {
  display: flex; justify-content: space-between; align-items: center;
  background: var(--bg-elevated); border: 1px solid var(--border);
  padding: 10px 14px; border-radius: 10px; font-family: var(--font-mono); font-size: 0.85rem;
}
.btn-sm { padding: 4px 10px; font-size: 0.75rem; border-radius: 6px; font-weight: 700; cursor: pointer; background: var(--accent); color: #000; border: none; }
.btn-sm.outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
.btn-sm.outline:hover { border-color: var(--accent); color: var(--accent); }

/* Crypto Donation Section */
.donate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.donate-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.donate-card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  transform: translateY(-3px);
}
.donate-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 1.2rem;
}
.donate-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 800;
}
.donate-addr-box {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 1.2rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #c0c0d8;
  word-break: break-all;
  user-select: all;
}
.donate-actions {
  display: flex;
  gap: 8px;
}

/* Downloads Section */
.downloads-section { padding: 6rem 0; border-top: 1px solid var(--border); background: #07070a; }
.downloads-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}
@media (max-width: 1000px) { .downloads-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px)  { .downloads-grid { grid-template-columns: 1fr; } }

.dl-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem 1.5rem 1.75rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.9rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.dl-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--dl-accent, rgba(198,255,0,0.3)), transparent);
  opacity: 0;
  transition: opacity 0.25s;
}
.dl-card:hover { border-color: var(--dl-accent, var(--accent)); transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
.dl-card:hover::before { opacity: 1; }

.dl-os-icon {
  width: 68px; height: 68px;
  background: var(--dl-icon-bg, rgba(255,255,255,0.05));
  border: 1px solid var(--dl-icon-border, rgba(255,255,255,0.1));
  border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.dl-card:hover .dl-os-icon { transform: scale(1.08); box-shadow: 0 8px 30px var(--dl-icon-glow, rgba(0,0,0,0.4)); }

.dl-platform { font-size: 1.1rem; font-weight: 800; color: var(--text); letter-spacing: -0.2px; }
.dl-formats  { font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; }
.dl-version  { font-size: 0.75rem; color: var(--accent); font-family: var(--font-mono); font-weight: 600;
  background: rgba(198,255,0,0.08); padding: 2px 10px; border-radius: 999px; border: 1px solid rgba(198,255,0,0.2); }
.dl-soon-badge { font-size: 0.75rem; color: var(--text-muted); font-style: italic;
  background: rgba(255,255,255,0.05); padding: 2px 10px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1); }

.dl-btns { display: flex; flex-direction: column; gap: 8px; width: 100%; margin-top: 4px; }
.dl-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--accent); color: #000; font-weight: 700; font-size: 0.85rem;
  padding: 10px 20px; border-radius: 12px; border: none; cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  text-decoration: none; width: 100%;
}
.dl-btn svg { flex-shrink: 0; }
.dl-btn:hover { opacity: 0.9; transform: scale(1.02); box-shadow: 0 4px 20px rgba(198,255,0,0.3); }
.dl-btn.ghost {
  background: transparent; color: var(--text); border: 1px solid var(--border);
  font-weight: 600;
}
.dl-btn.ghost:hover { border-color: rgba(198,255,0,0.4); color: var(--accent); background: rgba(198,255,0,0.05); box-shadow: none; }
.dl-btn.store-gplay {
  background: #1a1a2e; border: 1px solid rgba(52,168,83,0.4); color: #fff;
}
.dl-btn.store-gplay:hover { border-color: #34a853; background: #1f2937; }
.dl-btn.store-astore {
  background: #1a1a2e; border: 1px solid rgba(255,255,255,0.15); color: #fff;
}
.dl-btn.store-astore:hover { border-color: rgba(255,255,255,0.4); background: #1f2937; }
.dl-btn.store-chrome {
  background: #1a1a2e; border: 1px solid rgba(66,133,244,0.4); color: #fff;
}
.dl-btn.store-chrome:hover { border-color: #4285F4; background: #1f2937; }

/* ── Server Configs Hub & Monetized Downloads ── */
.server-hub-section {
  padding: 6rem 0;
  border-top: 1px solid var(--border);
  background: radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.05) 0%, transparent 60%), #060609;
  position: relative;
}
.config-filter-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin: 2rem 0 2.5rem;
}
.config-tab-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.config-tab-btn:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
}
.config-tab-btn.active {
  background: rgba(198, 255, 0, 0.12);
  color: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 16px rgba(198, 255, 0, 0.25);
}
.config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.config-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}
.config-card:hover {
  border-color: rgba(0, 229, 255, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 229, 255, 0.12);
}
.config-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}
.config-country-box {
  display: flex;
  align-items: center;
  gap: 10px;
}
.config-flag {
  font-size: 1.8rem;
  line-height: 1;
}
.config-country-title {
  font-weight: 800;
  font-size: 1.05rem;
  color: #fff;
}
.config-country-sub {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.config-proto-badge {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(0, 229, 255, 0.1);
  color: var(--accent-cyan);
  border: 1px solid rgba(0, 229, 255, 0.25);
}
.config-stats-row {
  display: flex;
  gap: 16px;
  margin: 14px 0 18px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.config-stat-item {
  display: flex;
  flex-direction: column;
}
.config-stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
}
.config-stat-value {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 800;
  color: #fff;
}
.config-stat-value.ping-good { color: #2ed573; }
.config-actions {
  display: flex;
  gap: 8px;
}
.config-dl-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--accent);
  color: #000;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.config-dl-btn:hover {
  opacity: 0.92;
  box-shadow: 0 0 18px var(--accent-glow);
  transform: scale(1.02);
}
.unlock-modal-card {
  max-width: 520px;
  width: 95%;
  background: #0b0c13;
  border: 1px solid rgba(198, 255, 0, 0.35);
  box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(198, 255, 0, 0.15);
  border-radius: 20px;
  padding: 28px;
  position: relative;
  text-align: left;
}
@media (max-width: 600px) {
  .config-grid { grid-template-columns: 1fr; }
  .unlock-modal-card { padding: 20px; }
}

  /* === Cyber Icon & Flag Styles === */
  .cyber-flag-img {
    width: 20px; height: 14px; border-radius: 3px; object-fit: cover;
    display: inline-block; vertical-align: middle; box-shadow: 0 1px 3px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.18); flex-shrink: 0;
  }
  .cyber-flag-img.flag-lg {
    width: 38px; height: 26px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  .cyber-flag-badge {
    display: inline-flex; align-items: center; justify-content: center;
    width: 20px; height: 14px; vertical-align: middle;
  }
  .cyber-flag-fallback {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-mono); font-size: 0.65rem; font-weight: 900;
    color: var(--accent-cyan); background: rgba(0, 229, 255, 0.12);
    border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 3px;
    padding: 1px 4px; line-height: 1; vertical-align: middle;
  }
  .cyber-svg-icon {
    display: inline-block; vertical-align: middle; line-height: 1; flex-shrink: 0;
  }
</style>
</head>
<body>
<div id="zvpn-cursor-trail"></div>

<header>
  <div class="container">
    <nav>
      <a href="#top" class="logo" aria-label="ZVPN Home">
        <svg class="logo-mark" viewBox="0 0 1254 1254" aria-hidden="true">
          <path fill="#C6FF00" fill-rule="evenodd" d="${ZVPN_LOGO_PATH}"></path>
        </svg>
        <span class="logo-text">VPN</span>
      </a>
      <ul class="nav-links">
        <li><a href="#protocols" data-t="nav_protocols">Protocols</a></li>
        <li><a href="#gaming" data-t="nav_gaming">Gaming</a></li>
        <li><a href="/servers" data-t="nav_configs">Server Hub (16k+)</a></li>
        <li><a href="#economy" data-t="nav_economy">Free Points</a></li>
        <li><a href="#pricing" data-t="nav_pricing">Pricing</a></li>
        <li><a href="#downloads" data-t="nav_downloads">Downloads</a></li>
        <li><a href="#activate" data-t="nav_activate">Activate Key</a></li>
        <li class="nav-secondary"><a href="#donate" data-t="nav_donate">Support</a></li>
      </ul>
      <div class="nav-actions">
        <div id="nav-user-container" class="user-nav-box">
          <button class="btn-google-nav" id="nav-login-btn" onclick="openLoginModal()">
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            <span data-t="nav_signin">Sign In</span>
          </button>
          <div id="nav-user-profile" style="display: none;" class="user-pill-btn" onclick="openAccountModal()">
            <img id="nav-avatar" src="" alt="User" class="user-pill-avatar" />
            <span id="nav-username" class="user-pill-name">User</span>
            <span id="nav-points" class="user-pill-pts"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C6FF00"/></svg> 0 PTS</span>
          </div>
        </div>
        <div class="lang-dropdown-wrapper" id="lang-dropdown">
          <button class="lang-btn" id="lang-btn" onclick="toggleLangDropdown(event)" aria-label="Select Language">
            <span class="lang-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" stroke-width="1"/><path d="M3 12h18" stroke="currentColor" stroke-width="1"/><path d="M3.5 8h17M3.5 16h17" stroke="currentColor" stroke-width="0.7" opacity="0.6"/></svg></span>
            <span id="lang-current-label">English</span>
            <span class="lang-arrow">▾</span>
          </button>
          <div class="lang-dropdown-menu" id="lang-menu">
            <div class="lang-opt" onclick="selectLanguage('en')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-gb"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-gb)"><rect width="32" height="32" fill="#012169"/><path d="M0 0l32 32M32 0L0 32" stroke="#fff" stroke-width="5.5"/><path d="M0 0l32 32M32 0L0 32" stroke="#C8102E" stroke-width="3.5"/><path d="M16 0v32M0 16h32" stroke="#fff" stroke-width="9"/><path d="M16 0v32M0 16h32" stroke="#C8102E" stroke-width="5.5"/></g></svg></span> English</div>
            <div class="lang-opt" onclick="selectLanguage('ar')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-sa"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-sa)"><rect width="32" height="32" fill="#006C35"/><path d="M7 16h18M11 13h10M14 19h4" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="16" r="2" fill="#fff"/></g></svg></span> العربية</div>
            <div class="lang-opt" onclick="selectLanguage('es')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-es"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-es)"><rect width="32" height="8" fill="#AA151B"/><rect y="8" width="32" height="16" fill="#F1BF00"/><rect y="24" width="32" height="8" fill="#AA151B"/><circle cx="10" cy="16" r="3" fill="#AA151B"/></g></svg></span> Español</div>
            <div class="lang-opt" onclick="selectLanguage('fr')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-fr"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-fr)"><rect width="11" height="32" fill="#002395"/><rect x="11" width="10" height="32" fill="#fff"/><rect x="21" width="11" height="32" fill="#ED2939"/></g></svg></span> Français</div>
            <div class="lang-opt" onclick="selectLanguage('de')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-de"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-de)"><rect width="32" height="11" fill="#000"/><rect y="11" width="32" height="10" fill="#DD0000"/><rect y="21" width="32" height="11" fill="#FFCE00"/></g></svg></span> Deutsch</div>
            <div class="lang-opt" onclick="selectLanguage('ru')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-ru"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-ru)"><rect width="32" height="11" fill="#fff"/><rect y="11" width="32" height="10" fill="#0039A6"/><rect y="21" width="32" height="11" fill="#D52B1E"/></g></svg></span> Русский</div>
            <div class="lang-opt" onclick="selectLanguage('zh')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-cn"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-cn)"><rect width="32" height="32" fill="#DE2910"/><polygon points="9,6 10,9 13,9 10.5,11 11.5,14 9,12 6.5,14 7.5,11 5,9 8,9" fill="#FFDE00"/></g></svg></span> 简体中文</div>
            <div class="lang-opt" onclick="selectLanguage('fa')"><span class="lang-flag"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-ir"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-ir)"><rect width="32" height="11" fill="#239F40"/><rect y="11" width="32" height="10" fill="#fff"/><rect y="21" width="32" height="11" fill="#DA0000"/><circle cx="16" cy="16" r="2.5" fill="#DA0000"/></g></svg></span> فارسی</div>
          </div>
        </div>
        <a href="#pricing" class="btn" data-t="btn_get_zvpn">Get Z VPN</a>
      </div>
    </nav>
  </div>
</header>

<main id="top">
  <!-- Hero -->
  <section class="hero">
    <div class="hero-glow"></div>
    <canvas id="gl-canvas"></canvas>
    <script>
    function renderCyberFlag(code, size) {
      if (!code || code === 'all' || code === 'XX' || code === 'GLOBAL' || code === '🌐') {
        return '<span class="cyber-flag-badge"><svg class="cyber-svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>';
      }
      var c = String(code).toLowerCase();
      var isLg = (size === 'lg');
      return '<img class="cyber-flag-img ' + (isLg ? 'flag-lg' : '') + '" src="https://flagcdn.com/' + (isLg ? 'w80' : 'w40') + '/' + c + '.png" srcset="https://flagcdn.com/' + (isLg ? 'w160' : 'w80') + '/' + c + '.png 2x" width="' + (isLg ? 38 : 20) + '" height="' + (isLg ? 26 : 14) + '" alt="' + code + '" loading="lazy" onerror="this.hidden=true" />';
    }

    (function initHeroGlobe() {
      var canvas = document.getElementById('gl-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. High-Density Fibonacci Surface Particles (4,200 points)
      var N = 4200, pts = [];
      for (var i = 0; i < N; i++) {
        var y0 = 1 - 2 * (i + 0.5) / N;
        var r0 = Math.sqrt(Math.max(0, 1 - y0 * y0));
        var phi0 = i * 2.3999632;
        pts.push([Math.cos(phi0) * r0, y0, Math.sin(phi0) * r0]);
      }

      // 2. Global Server Nodes (60 high-priority nodes with radar phases)
      var nds = [];
      for (var k = 0; k < 60; k++) {
        var yn = Math.random() * 1.6 - 0.8;
        var rn = Math.sqrt(Math.max(0, 1 - yn * yn));
        var pn = Math.random() * Math.PI * 2;
        nds.push({
          p: [Math.cos(pn) * rn, yn, Math.sin(pn) * rn],
          col: (k % 3 === 0) ? '#00e5ff' : '#c6ff00',
          phase: Math.random() * Math.PI * 2
        });
      }

      // 3. Encrypted Data Transmission Arcs (Connecting server hubs)
      var arcs = [];
      for (var a = 0; a < 14; a++) {
        var idx1 = Math.floor(Math.random() * nds.length);
        var idx2 = (idx1 + 1 + Math.floor(Math.random() * 10)) % nds.length;
        arcs.push({ from: idx1, to: idx2, speed: 0.0012 + Math.random() * 0.001 });
      }

      // 4. Orbital Cyber Satellite Ring (Tilted at 22 degrees)
      var ringPts = [];
      var numRing = 180;
      for (var r = 0; r < numRing; r++) {
        var ang = (r / numRing) * Math.PI * 2;
        var radR = 1.35;
        var rx0 = Math.cos(ang) * radR;
        var ry0 = Math.sin(ang) * radR * Math.sin(0.38);
        var rz0 = Math.sin(ang) * radR * Math.cos(0.38);
        ringPts.push([rx0, ry0, rz0, (r % 20 === 0)]);
      }

      var W = 0, H = 0, DEV = 1, R = 0;
      function resize() {
        DEV = Math.min(window.devicePixelRatio || 1, 2);
        var rect = canvas.getBoundingClientRect();
        var heroEl = canvas.closest('.hero');
        var heroRect = heroEl ? heroEl.getBoundingClientRect() : null;
        var w = (rect && rect.width > 0) ? rect.width : ((heroRect && heroRect.width > 0) ? heroRect.width : (window.innerWidth || 1200));
        var h = (rect && rect.height > 0) ? rect.height : ((heroRect && heroRect.height > 0) ? heroRect.height : Math.max(window.innerHeight * 0.9, 650));
        W = canvas.width = Math.floor(w * DEV);
        H = canvas.height = Math.floor(h * DEV);
        R = Math.min(W, H) * 0.42;
      }
      resize();
      window.addEventListener('resize', resize);
      window.addEventListener('load', resize);

      var mx = 0, my = 0, sx = 0, sy = 0;
      window.addEventListener('pointermove', function(e) {
        mx = (e.clientX / window.innerWidth - 0.5);
        my = (e.clientY / window.innerHeight - 0.5);
      });

      function rot(p, ry, rx) {
        var cy = Math.cos(ry), sy2 = Math.sin(ry);
        var cx = Math.cos(rx), sx2 = Math.sin(rx);
        var x1 = p[0] * cy + p[2] * sy2;
        var z1 = -p[0] * sy2 + p[2] * cy;
        return [x1, p[1] * cx - z1 * sx2, p[1] * sx2 + z1 * cx];
      }

      function frame(ts) {
        if (!W || !H || W <= 0 || H <= 0) resize();
        sx += (mx - sx) * 0.05;
        sy += (my - sy) * 0.05;
        var ry = ts * 0.00009 + sx * 0.65;
        var rx = 0.32 + sy * 0.28;

        ctx.clearRect(0, 0, W, H);
        var mob = window.innerWidth < 860;
        var rtl = document.documentElement.dir === 'rtl';
        var cx2 = mob ? W * 0.5 : W * (rtl ? 0.32 : 0.68);
        var cy2 = mob ? H * 0.75 : H * 0.52;
        var rad = mob ? W * 0.55 : R;

        // A. Subtle Atmospheric Planet Glow on Canvas
        var atmGrad = ctx.createRadialGradient(cx2, cy2, rad * 0.85, cx2, cy2, rad * 1.35);
        atmGrad.addColorStop(0, 'rgba(198, 255, 0, 0.09)');
        atmGrad.addColorStop(0.7, 'rgba(0, 229, 255, 0.04)');
        atmGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = atmGrad;
        ctx.fillRect(0, 0, W, H);

        // B. Orbital Satellite Ring
        for (var r = 0; r < ringPts.length; r++) {
          var rp = rot(ringPts[r], ry, rx);
          var isFront = rp[2] > -0.15;
          ctx.globalAlpha = isFront ? 0.45 : 0.12;
          ctx.fillStyle = ringPts[r][3] ? '#00e5ff' : 'rgba(198, 255, 0, 0.6)';
          var rsz = ringPts[r][3] ? DEV * 2.8 : DEV * 1.2;
          ctx.fillRect(cx2 + rp[0] * rad, cy2 - rp[1] * rad, rsz, rsz);
        }

        // C. 3D Surface Fibonacci Points (Layered depth & perspective)
        for (var i = 0; i < pts.length; i++) {
          var p = rot(pts[i], ry, rx);
          if (p[2] > -0.2) {
            var zDepth = p[2] + 0.2;
            var alpha = Math.max(0.08, 0.75 * Math.pow(zDepth, 1.4));
            ctx.globalAlpha = Math.min(alpha, 0.95);

            if (p[2] > 0.4) {
              ctx.fillStyle = '#ffffff';
            } else if (p[2] > 0.1) {
              ctx.fillStyle = '#e2faff';
            } else {
              ctx.fillStyle = '#a0e7f5';
            }
            var sz = DEV * (p[2] > 0.4 ? 2.5 : (p[2] > 0.1 ? 1.8 : 1.2));
            ctx.fillRect(cx2 + p[0] * rad, cy2 - p[1] * rad, sz, sz);
          }
        }

        // D. Encrypted Connection Arcs between Server Nodes
        for (var a = 0; a < arcs.length; a++) {
          var nA = nds[arcs[a].from];
          var nB = nds[arcs[a].to];
          var pA = rot(nA.p, ry, rx);
          var pB = rot(nB.p, ry, rx);

          if (pA[2] > -0.15 && pB[2] > -0.15) {
            var midX = (nA.p[0] + nB.p[0]) * 0.62;
            var midY = (nA.p[1] + nB.p[1]) * 0.62;
            var midZ = (nA.p[2] + nB.p[2]) * 0.62;
            var lenM = Math.sqrt(midX*midX + midY*midY + midZ*midZ) || 1;
            var arcElevation = 1.18;
            var pMid = rot([midX/lenM * arcElevation, midY/lenM * arcElevation, midZ/lenM * arcElevation], ry, rx);

            var xA = cx2 + pA[0] * rad, yA = cy2 - pA[1] * rad;
            var xM = cx2 + pMid[0] * rad, yM = cy2 - pMid[1] * rad;
            var xB = cx2 + pB[0] * rad, yB = cy2 - pB[1] * rad;

            ctx.beginPath();
            ctx.moveTo(xA, yA);
            ctx.quadraticCurveTo(xM, yM, xB, yB);
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.28)';
            ctx.lineWidth = DEV * 1.1;
            ctx.stroke();

            var arcT = ((ts * arcs[a].speed) % 1);
            var pktX = (1 - arcT) * (1 - arcT) * xA + 2 * (1 - arcT) * arcT * xM + arcT * arcT * xB;
            var pktY = (1 - arcT) * (1 - arcT) * yA + 2 * (1 - arcT) * arcT * yM + arcT * arcT * yB;
            ctx.globalAlpha = 0.95;
            ctx.fillStyle = '#C6FF00';
            ctx.beginPath();
            ctx.arc(pktX, pktY, DEV * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // E. 60 Server Nodes with Pulsing Radar Waves
        for (var j = 0; j < nds.length; j++) {
          var n = rot(nds[j].p, ry, rx);
          if (n[2] > 0) {
            var sX = cx2 + n[0] * rad;
            var sY = cy2 - n[1] * rad;

            var pulseProgress = ((ts * 0.0018 + nds[j].phase) % 1);
            var pulseR = DEV * (3.5 + pulseProgress * 14);
            var pulseAlpha = Math.max(0, 0.7 * (1 - pulseProgress));
            ctx.globalAlpha = pulseAlpha;
            ctx.strokeStyle = nds[j].col;
            ctx.lineWidth = DEV * 1.2;
            ctx.beginPath();
            ctx.arc(sX, sY, pulseR, 0, Math.PI * 2);
            ctx.stroke();

            ctx.globalAlpha = 0.95;
            ctx.fillStyle = nds[j].col;
            ctx.beginPath();
            ctx.arc(sX, sY, DEV * 3.4, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(sX, sY, DEV * 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })();
    </script>
    <div class="container">
      <div class="hero-content">
        <div class="badge"><span class="dot"></span> <span id="hero-badge-text" data-t="hero_badge">${serversFormatted}+ Edge Nodes Active</span></div>
        <h1 id="hero-title">Total Digital Immunity. <br><span class="highlight">Zero Logs. Guaranteed.</span></h1>
        <p class="sub" data-t="hero_sub">
          Enterprise-grade stealth tunneling powered by Tor Onion, VLESS Reality, and Hysteria 2. Ultra-low ping esports routing with our revolutionary zero-fee points economy.
        </p>
        <div class="hero-cta">
          <a href="#pricing" class="btn" data-t="hero_cta_buy">Buy Instant License</a>
          <a href="#protocols" class="btn outline" data-t="hero_cta_explore">Explore Tech Stack</a>
          <a href="#activate" class="btn outline" data-t="hero_cta_activate">Activate License Key</a>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-box">
          <span class="dot"></span><b id="stat-servers">${serversFormatted}+</b>
          <span data-t="stat_servers_lbl">Global Edge Servers</span>
        </div>
        <div class="stat-box">
          <b id="stat-countries">${totalCountries}+</b>
          <span data-t="stat_countries_lbl">Countries Covered</span>
        </div>
        <div class="stat-box">
          <b>10 Gbps</b>
          <span data-t="stat_speed_lbl">Server Port Uplink</span>
        </div>
        <div class="stat-box">
          <b>&lt; 20 ms</b>
          <span data-t="stat_latency_lbl">Average Gaming Latency</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Live Payment Success Notification (if returning from Stripe, PayPal or NOWPayments) -->
  <div class="container" id="payment-success-container" style="display: none;">
    <div class="license-success-card">
      <div class="badge" style="background: rgba(46, 213, 115, 0.15); border-color: var(--success); color: var(--success);">
        ✓ Payment Verified Successfully
      </div>
      <h2 style="margin: 14px 0 6px;" data-t="lic_issued_title">Your ZVPN Lifetime / Subscription License Key</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem;" data-t="lic_issued_sub">
        Copy this key and enter it inside the ZVPN Android or Desktop App to unlock unlimited VIP access.
      </p>
      <div>
        <div class="license-code" id="issued-key">ZVPN-XXXX-XXXX-XXXX-XXXX</div>
      </div>
      <div style="margin-top: 14px; display: flex; gap: 12px; justify-content: center;">
        <button class="btn" onclick="copyLicenseKey()" data-t="lic_btn_copy">Copy License Key</button>
        <a href="#activate" class="btn outline" data-t="lic_btn_verify">Verify License Status</a>
      </div>
    </div>
  </div>

  <!-- Real WebCrypto AES-256 Demo -->
  <section class="crypto-demo">
    <div class="container">
      <div class="section-head" style="margin-bottom: 1.5rem;">
        <div class="badge cyan" data-t="demo_badge">Hardware WebCrypto Engine</div>
        <h2 data-t="demo_title">Type Any Text. Watch Live Hardware AES-256 Encryption.</h2>
        <p data-t="demo_sub">Your browser generates an ephemeral 256-bit AES key in isolated WebCrypto memory and encrypts your keystrokes in real time.</p>
      </div>

      <div class="demo-card">
        <input type="text" id="demo-input" class="demo-input" oninput="window.updateDemoCiphertext &amp;&amp; window.updateDemoCiphertext()" onkeyup="window.updateDemoCiphertext &amp;&amp; window.updateDemoCiphertext()" value="Classified Financial &amp; Privacy Transmission #9421" placeholder="Type secret message..." autocomplete="off">
        <div class="demo-panes">
          <div class="demo-pane">
            <h4 data-t="demo_raw_lbl">Plaintext (Exposed to ISP / Snoopers)</h4>
            <p id="demo-plaintext">Classified Financial & Privacy Transmission #9421</p>
          </div>
          <div class="demo-pane secure">
            <h4 data-t="demo_enc_lbl">Sealed Ciphertext (AES-256-GCM + Random IV)</h4>
            <p id="demo-ciphertext">Calculating cryptographic hash...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Protocol Showcase -->
  <section class="protocols-section" id="protocols">
    <div class="container">
      <div class="section-head">
        <div class="badge" data-t="proto_badge">Unstoppable Infrastructure</div>
        <h2 data-t="proto_title">Censorship-Proof Next-Gen Protocols</h2>
        <p data-t="proto_sub">Standard VPN protocols get blocked by modern Deep Packet Inspection (DPI). ZVPN utilizes advanced cloaking, multi-hop cascades, and kernel-speed cryptography.</p>
      </div>

      <!-- Protocol Capability Pills Bar -->
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 3rem;">
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C6FF00"/></svg> VLESS Reality</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2C9 5 6 10 6 14l3 3h6l3-3c0-4-3-9-6-12z" fill="#C6FF00"/><path d="M9 17v2a3 3 0 006 0v-2" fill="#8ba600"/><circle cx="12" cy="10" r="2" fill="#0a0a0a"/></svg> Hysteria 2</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C6FF00"/></svg> TUIC</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2L4 5v5c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V5l-8-3z" fill="none" stroke="#C6FF00" stroke-width="1.8"/><path d="M9 12l2 2 4-4" stroke="#C6FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> WireGuard</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2L4 5v5c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V5l-8-3z" fill="none" stroke="#C6FF00" stroke-width="1.8"/><path d="M9 12l2 2 4-4" stroke="#C6FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> AmneziaWG</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><ellipse cx="12" cy="14" rx="8" ry="8" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.4"/><ellipse cx="12" cy="14" rx="5.5" ry="5.5" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.65"/><ellipse cx="12" cy="14" rx="3" ry="3" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.9"/><circle cx="12" cy="14" r="1" fill="#C6FF00"/></svg> Tor Onion</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l8 6-8 14-8-14 8-6z" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h16M12 2v20" stroke="#C6FF00" stroke-width="1" opacity="0.5"/></svg> VMess</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l8 6-8 14-8-14 8-6z" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h16M12 2v20" stroke="#C6FF00" stroke-width="1" opacity="0.5"/></svg> Trojan gRPC</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="10" r="7" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M5 10h14" stroke="#C6FF00" stroke-width="2"/><circle cx="9" cy="10" r="1.5" fill="#C6FF00"/><circle cx="15" cy="10" r="1.5" fill="#C6FF00"/></svg> Shadowsocks-2022</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="12" r="9" fill="none" stroke="#C6FF00" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="#C6FF00" stroke-width="1" opacity="0.6"/><path d="M3 12h18M3 8h18M3 16h18" stroke="#C6FF00" stroke-width="0.8" opacity="0.4"/></svg> Psiphon</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="12" r="9" fill="none" stroke="#C6FF00" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="#C6FF00" stroke-width="1" opacity="0.6"/><path d="M3 12h18M3 8h18M3 16h18" stroke="#C6FF00" stroke-width="0.8" opacity="0.4"/></svg> DNS Tunnel (DNSTT)</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="4" y="6" width="16" height="16" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><rect x="8" y="2" width="8" height="6" rx="1" fill="none" stroke="#C6FF00" stroke-width="1.5"/><rect x="8" y="10" width="3" height="3" fill="#C6FF00" opacity="0.6"/><rect x="13" y="10" width="3" height="3" fill="#C6FF00" opacity="0.6"/><rect x="10" y="17" width="4" height="5" fill="#C6FF00" opacity="0.4"/></svg> OpenConnect</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="6" y="11" width="12" height="10" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M8 11V7a4 4 0 018 0v4" fill="none" stroke="#C6FF00" stroke-width="1.5"/><circle cx="12" cy="16" r="1.5" fill="#C6FF00"/></svg> OpenVPN</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="6" y="11" width="12" height="10" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M8 11V7a4 4 0 018 0v4" fill="none" stroke="#C6FF00" stroke-width="1.5"/><circle cx="12" cy="16" r="1.5" fill="#C6FF00"/></svg> IKEv2 / IPsec</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M17 2l4 4-4 4M7 22l-4-4 4-4" stroke="#C6FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 6H9a4 4 0 000 8h6a4 4 0 010 8H3" stroke="#C6FF00" stroke-width="1.5" fill="none"/></svg> SOCKS5 / HTTP</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M6 9l3 3-3 3M12 16h6" stroke="#C6FF00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> SSH Tunnel</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 4c-4 0-8 3-9 5 1 2 5 5 9 5s8-3 9-5c-1-2-5-5-9-5z" fill="none" stroke="#C6FF00" stroke-width="1.5"/><circle cx="9" cy="9" r="2" fill="#C6FF00" opacity="0.8"/><circle cx="15" cy="9" r="2" fill="#C6FF00" opacity="0.8"/><path d="M8 14c2 2 6 2 8 0" stroke="#C6FF00" stroke-width="1.2" fill="none"/></svg> SNI Spoofing</span>
        <span class="proto-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg> Multi-Hop Chains</span>
      </div>

      <div class="proto-grid">
        <!-- 1. VLESS Reality & Vision -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C6FF00"/></svg></div>
          <h3 data-t="proto_vless_title">VLESS XTLS Reality &amp; Vision</h3>
          <p data-t="proto_vless_desc">Camouflages VPN traffic as legitimate TLS 1.3 handshakes to major global targets without CDN latency. Immune to state-level Deep Packet Inspection.</p>
        </div>

        <!-- 2. Hysteria 2 & TUIC -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2C9 5 6 10 6 14l3 3h6l3-3c0-4-3-9-6-12z" fill="#C6FF00"/><path d="M9 17v2a3 3 0 006 0v-2" fill="#8ba600"/><circle cx="12" cy="10" r="2" fill="#0a0a0a"/></svg></div>
          <h3 data-t="proto_hy2_title">Hysteria 2 &amp; TUIC (Brutal QUIC)</h3>
          <p data-t="proto_hy2_desc">UDP-based custom congestion control. Eliminates ISP throttling and sustains 4K streams on up to 30% packet loss.</p>
        </div>

        <!-- 3. Tor Onion Multi-Hop -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><ellipse cx="12" cy="14" rx="8" ry="8" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.4"/><ellipse cx="12" cy="14" rx="5.5" ry="5.5" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.65"/><ellipse cx="12" cy="14" rx="3" ry="3" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.9"/><circle cx="12" cy="14" r="1" fill="#C6FF00"/></svg></div>
          <h3 data-t="proto_tor_title">Tor Onion Multi-Hop Circuit</h3>
          <p data-t="proto_tor_desc">Routes encrypted traffic through three decentralized volunteer nodes. Unlocks .onion hidden services with ultimate identity shielding.</p>
        </div>

        <!-- 4. WireGuard & AmneziaWG -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2L4 5v5c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V5l-8-3z" fill="none" stroke="#C6FF00" stroke-width="1.8"/><path d="M9 12l2 2 4-4" stroke="#C6FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h3 data-t="proto_wg_title">WireGuard &amp; AmneziaWG</h3>
          <p data-t="proto_wg_desc">State-of-the-art ChaCha20-Poly1305 cryptography running at kernel speeds. Modified header padding prevents pattern recognition.</p>
        </div>

        <!-- 5. VMess & Trojan gRPC -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l8 6-8 14-8-14 8-6z" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h16M12 2v20" stroke="#C6FF00" stroke-width="1" opacity="0.5"/></svg></div>
          <h3 data-t="proto_vmess_title">VMess &amp; Trojan (gRPC / WebSocket)</h3>
          <p data-t="proto_vmess_desc">Multiplexed encrypted tunnels disguised behind WebSocket and gRPC CDN pipes with automated multi-fallback routing.</p>
        </div>

        <!-- 6. Shadowsocks & SS-2022 -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="10" r="7" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M5 10h14" stroke="#C6FF00" stroke-width="2"/><circle cx="9" cy="10" r="1.5" fill="#C6FF00"/><circle cx="15" cy="10" r="1.5" fill="#C6FF00"/></svg></div>
          <h3 data-t="proto_ss_title">Shadowsocks &amp; Shadowsocks-2022</h3>
          <p data-t="proto_ss_desc">Ultra-fast AEAD cryptographic proxy optimized for extreme throughput and negligible CPU overhead, fully compliant with the modern SS-2022 specification.</p>
        </div>

        <!-- 7. Psiphon & DNS Tunnel -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="12" r="9" fill="none" stroke="#C6FF00" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="#C6FF00" stroke-width="1" opacity="0.6"/><path d="M3 12h18M3 8h18M3 16h18" stroke="#C6FF00" stroke-width="0.8" opacity="0.4"/></svg></div>
          <h3 data-t="proto_psiphon_title">Psiphon &amp; DNS Tunnel (DNSTT)</h3>
          <p data-t="proto_psiphon_desc">Emergency anti-censorship protocols routing data over port 53 DNS queries when firewalls cut off all standard VPN ports.</p>
        </div>

        <!-- 8. OpenConnect & AnyConnect -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="4" y="6" width="16" height="16" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><rect x="8" y="2" width="8" height="6" rx="1" fill="none" stroke="#C6FF00" stroke-width="1.5"/><rect x="8" y="10" width="3" height="3" fill="#C6FF00" opacity="0.6"/><rect x="13" y="10" width="3" height="3" fill="#C6FF00" opacity="0.6"/><rect x="10" y="17" width="4" height="5" fill="#C6FF00" opacity="0.4"/></svg></div>
          <h3 data-t="proto_openconnect_title">OpenConnect &amp; Cisco AnyConnect</h3>
          <p data-t="proto_openconnect_desc">Enterprise SSL VPN protocol with full hardware token authentication, custom client certs, and institutional firewall traversal.</p>
        </div>

        <!-- 9. OpenVPN & IKEv2 / IPsec -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="6" y="11" width="12" height="10" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M8 11V7a4 4 0 018 0v4" fill="none" stroke="#C6FF00" stroke-width="1.5"/><circle cx="12" cy="16" r="1.5" fill="#C6FF00"/></svg></div>
          <h3 data-t="proto_openvpn_title">OpenVPN (.ovpn) &amp; IKEv2 / IPsec</h3>
          <p data-t="proto_openvpn_desc">Battle-tested OpenVPN over TCP/UDP and hardware-accelerated IKEv2/IPsec for instantaneous handover on mobile and cellular networks.</p>
        </div>

        <!-- 10. Proxy Chains & Cross-Chains -->
        <div class="proto-card">
          <div class="proto-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg></div>
          <h3 data-t="proto_chain_title">Proxy Chains &amp; Multi-Hop Routing</h3>
          <p data-t="proto_chain_desc">Cascade connection hops across multiple protocols and countries consecutively (e.g. WireGuard to Tor to VLESS exit).</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gaming Mode -->
  <section class="gaming-section" id="gaming">
    <div class="container">
      <div class="gaming-grid">
        <div>
          <div class="badge cyan" data-t="game_badge">Esports Low-Latency Routing</div>
          <h2 data-t="game_title">Pro Gaming Mode: Zero Bufferbloat &amp; Locked Pings</h2>
          <p style="color: var(--text-muted); font-size: 1.15rem; margin-top: 10px;" data-t="game_sub">
            Engineered specifically for competitive gamers. Bypasses routing hops, enforces Dynamic MTU (1380 on Mobile / 1420 on Wi-Fi), and prioritizes game UDP packets.
          </p>
          <ul class="gaming-features">
            <li>
              <span class="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#C6FF00"/></svg></span>
              <span data-t="game_f1"><b>UDP Direct Fast-Path:</b> Bypasses userspace overhead for instantaneous hit registration in FPS games.</span>
            </li>
            <li>
              <span class="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#C6FF00"/></svg></span>
              <span data-t="game_f2"><b>Dynamic MTU Auto-Tuning:</b> Prevents packet fragmentation on mobile 5G/LTE and Wi-Fi networks.</span>
            </li>
            <li>
              <span class="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#C6FF00"/></svg></span>
              <span data-t="game_f3"><b>Anti-Bufferbloat Jitter Minimizer:</b> Smooths out packet variance to eliminate game micro-stutters.</span>
            </li>
            <li>
              <span class="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#C6FF00"/></svg></span>
              <span data-t="game_f4"><b>Full Support For 18+ Titles:</b> Valorant, PUBG, CS2, Warzone, Fortnite, FreeFire, Roblox, LoL, Apex, FIFA, and more.</span>
            </li>
          </ul>
        </div>

        <div class="radar-box">
          <div class="radar-head">
            <h4>Live Game Cluster Latency</h4>
            <span class="badge" style="font-size: 0.72rem;">Live TCP Ping</span>
          </div>
          <div class="radar-list">
            <div class="radar-item">
              <div class="radar-name"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-de"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-de)"><rect width="32" height="11" fill="#000"/><rect y="11" width="32" height="10" fill="#DD0000"/><rect y="21" width="32" height="11" fill="#FFCE00"/></g></svg> Frankfurt EU Central</div>
              <div class="radar-ping">18 ms</div>
            </div>
            <div class="radar-item">
              <div class="radar-name"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-ae"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-ae)"><rect width="32" height="11" fill="#00732f"/><rect y="11" width="32" height="10" fill="#fff"/><rect y="21" width="32" height="11" fill="#000"/><rect width="9" height="32" fill="#ff0000"/></g></svg> Dubai MENA Gaming Hub</div>
              <div class="radar-ping">12 ms</div>
            </div>
            <div class="radar-item">
              <div class="radar-name"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-sg"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-sg)"><rect width="32" height="16" fill="#ED2939"/><rect y="16" width="32" height="16" fill="#fff"/><circle cx="9" cy="8" r="4.5" fill="#fff"/><circle cx="10.5" cy="8" r="4" fill="#ED2939"/></g></svg> Singapore SEA Cluster</div>
              <div class="radar-ping">24 ms</div>
            </div>
            <div class="radar-item">
              <div class="radar-name"><svg width="18" height="18" viewBox="0 0 32 32" style="border-radius:50%; vertical-align:-3px; flex-shrink:0;"><clipPath id="f-us"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#f-us)"><rect width="32" height="32" fill="#B22234"/><rect y="4.5" width="32" height="4.5" fill="#fff"/><rect y="13.5" width="32" height="4.5" fill="#fff"/><rect y="22.5" width="32" height="4.5" fill="#fff"/><rect width="14" height="16" fill="#3C3B6E"/><circle cx="7" cy="8" r="3" fill="#fff"/></g></svg> US East (Virginia)</div>
              <div class="radar-ping">29 ms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Free Points Economy -->
  <section class="economy-section" id="economy">
    <div class="container">
      <div class="section-head">
        <div class="badge" data-t="eco_badge">100% Free Forever Option</div>
        <h2 data-t="eco_title">No Money? No Problem. Earn Free Points!</h2>
        <p data-t="eco_sub">We believe privacy is a fundamental human right. Use ZVPN completely free by earning non-expiring server points in the app.</p>
      </div>

      <div class="economy-grid">
        <div class="economy-card">
          <div class="eco-icon-box"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="18" height="12" rx="2" fill="none" stroke="#C6FF00" stroke-width="2"/><path d="M12 10v12M3 14h18" stroke="#C6FF00" stroke-width="1.5"/><path d="M12 10C12 10 8 4 6 4s-2 2 0 3 6 3 6 3z" fill="#C6FF00" opacity="0.3" stroke="#C6FF00" stroke-width="1.5"/><path d="M12 10c0 0 4-6 6-6s2 2 0 3-6 3-6 3z" fill="#C6FF00" opacity="0.3" stroke="#C6FF00" stroke-width="1.5"/></svg></div>
          <div class="pts-badge">+15 Pts</div>
          <h3 data-t="eco_ad_title">Watch Reward Videos</h3>
          <p data-t="eco_ad_desc">Watch short sponsor clips inside the app. Each completed video grants instant points to power your VPN sessions.</p>
        </div>
        <div class="economy-card">
          <div class="eco-icon-box"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 23c-4.4 0-8-3.6-8-8 0-3.5 2.6-6.5 4-8 .5 2 2 3 2 3s.5-3 3-6c1.5 2 2.5 3.5 3 6 1-1.5 2-3 2-3s4 4.5 4 8c0 4.4-3.6 8-8 8z" fill="none" stroke="#C6FF00" stroke-width="2"/><path d="M12 23c-2 0-4-2-4-5 0-2 1.5-3.5 2-4.5.5 1 1 1.5 1 1.5s.5-1.5 1.5-3c.5 1 1 2 1 3 .5-.5 1-1.5 1-1.5s1.5 2.5 1.5 4.5c0 3-2 5-4 5z" fill="#C6FF00" opacity="0.3"/></svg></div>
          <div class="pts-badge">+50 Pts</div>
          <h3 data-t="eco_streak_title">Daily Login Streaks</h3>
          <p data-t="eco_streak_desc">Open the app daily to compound your streak. Earn increasing rewards up to 50 points every single day.</p>
        </div>
        <div class="economy-card">
          <div class="eco-icon-box"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14l4-4 4 2 4-4 4 2 4-4" stroke="#C6FF00" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v8M18 6v12" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/><circle cx="6" cy="10" r="2" fill="#C6FF00" opacity="0.8"/><circle cx="10" cy="12" r="1.5" fill="#C6FF00" opacity="0.6"/><circle cx="14" cy="10" r="1.5" fill="#C6FF00" opacity="0.6"/><circle cx="18" cy="6" r="2" fill="#C6FF00" opacity="0.8"/></svg></div>
          <div class="pts-badge">+50 Pts</div>
          <h3 data-t="eco_ref_title">Viral Invite Referrals</h3>
          <p data-t="eco_ref_desc">Share your personal referral code with friends. Both of you receive 50 bonus points immediately upon activation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Plans -->
  <section class="pricing-section" id="pricing">
    <div class="container">
      <div class="section-head">
        <div class="badge" data-t="price_badge">Flexible Billing</div>
        <h2 data-t="price_title">Choose Your VIP Protection Plan</h2>
        <p data-t="price_sub">All plans unlock 100% of our ${serversFormatted}+ servers, 18+ next-gen protocols, gaming mode, and unlimited devices with a 30-day money-back guarantee.</p>
      </div>

      <div class="pricing-grid">
        <!-- Weekly -->
        <div class="price-card">
          <div>
            <div class="price-title" data-t="plan_w_title">Weekly Pro</div>
            <div class="price-desc" data-t="plan_w_desc">Short-term high speed trial. Ideal for travel or events.</div>
            <div class="price-amount">$2.99<small>/wk</small></div>
            <div class="price-period" data-t="plan_w_sub">Billed every 7 days</div>
            <ul class="price-features">
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_all_servers">All ${serversFormatted}+ Global Servers</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_unlimited">Unlimited High-Speed Data</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_gaming">Esports Low-Latency Gaming Mode</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_vless">18+ Protocols: VLESS, Hy2, WireGuard</span></li>
            </ul>
          </div>
          <button class="btn outline" onclick="openCheckout('weekly', 'Weekly Pro', 2.99)" data-t="btn_choose">Choose Weekly</button>
        </div>

        <!-- Monthly -->
        <div class="price-card">
          <div>
            <div class="price-title" data-t="plan_m_title">Monthly VIP</div>
            <div class="price-desc" data-t="plan_m_desc">Full flexibility without long-term commitment.</div>
            <div class="price-amount">$7.99<small>/mo</small></div>
            <div class="price-period" data-t="plan_m_sub">Was <s style="opacity:0.6;">$9.99</s> — Save 20%</div>
            <ul class="price-features">
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_all_servers">All ${serversFormatted}+ Global Servers</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_devices">Unlimited Simultaneous Devices</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_tor">Tor Multi-Hop &amp; 18+ Protocol Cloaking</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_support">24/7 Priority Support</span></li>
            </ul>
          </div>
          <button class="btn outline" onclick="openCheckout('monthly', 'Monthly VIP', 7.99)" data-t="btn_choose">Choose Monthly</button>
        </div>

        <!-- Yearly Ultimate (Featured) -->
        <div class="price-card featured">
          <div class="price-tag-badge" data-t="plan_best_tag">Most Popular · Save 58%</div>
          <div>
            <div class="price-title" data-t="plan_y_title">Yearly Ultimate</div>
            <div class="price-desc" data-t="plan_y_desc">Our flagship tier for serious privacy &amp; pro esports.</div>
            <div class="price-amount">$39.99<small>/yr</small></div>
            <div class="price-period" data-t="plan_y_sub">Equivalent to just $3.33/month</div>
            <ul class="price-features">
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_all_servers">All ${serversFormatted}+ Global Servers</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_gaming_vip">VIP Low-Latency Gaming Clusters</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_tor_full">Full 18+ Suite: VLESS, Hy2, TUIC, Tor, WG</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_adblock">Proxy Chains &amp; In-App Browser AdBlock</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_guarantee">30-Day Money-Back Guarantee</span></li>
            </ul>
          </div>
          <button class="btn" onclick="openCheckout('yearly', 'Yearly Ultimate', 39.99)" data-t="btn_get_yearly">Get Yearly Ultimate</button>
        </div>

        <!-- Yearly Plus (Family) -->
        <div class="price-card">
          <div>
            <div class="price-title" data-t="plan_yp_title">Yearly Plus (Family)</div>
            <div class="price-desc" data-t="plan_yp_desc">Designed for entire families and power users.</div>
            <div class="price-amount">$59.99<small>/yr</small></div>
            <div class="price-period" data-t="plan_yp_sub">Includes 5 Dedicated License Keys</div>
            <ul class="price-features">
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_all_servers">All ${serversFormatted}+ Global Servers</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_family">5 Independent Sub-Licenses</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_amnezia">AmneziaWG + Full 18+ Protocols for All 5 Users</span></li>
              <li><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M5 13l4 4L19 7" stroke="#C6FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> <span data-t="feat_audit">Zero-Logs Cryptographic Guarantee</span></li>
            </ul>
          </div>
          <button class="btn outline" onclick="openCheckout('yearly_plus', 'Yearly Plus Family', 59.99)" data-t="btn_choose">Choose Yearly Plus</button>
        </div>
      </div>

      <!-- Point Packs -->
      <div class="point-packs">
        <h3 data-t="packs_title">Need On-Demand Server Points Instead?</h3>
        <p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem;" data-t="packs_sub">
          Buy non-expiring point balances without recurring subscriptions. Use them anytime to unlock top-tier servers.
        </p>
        <div class="packs-grid">
          <div class="pack-card">
            <div style="font-size: 1.1rem; font-weight: 700;">Starter Pack</div>
            <div class="pack-pts">500 PTS</div>
            <div class="pack-price">$1.99</div>
            <button class="btn outline" style="width: 100%;" onclick="openCheckout('pts_500', '500 Points Pack', 1.99)" data-t="btn_buy_pts">Buy 500 Pts</button>
          </div>
          <div class="pack-card" style="border-color: var(--accent);">
            <div style="font-size: 1.1rem; font-weight: 700;">Pro Booster</div>
            <div class="pack-pts">1,200 PTS</div>
            <div class="pack-price">$3.99</div>
            <button class="btn" style="width: 100%;" onclick="openCheckout('pts_1200', '1,200 Points Pack', 3.99)" data-t="btn_buy_pts">Buy 1,200 Pts</button>
          </div>
          <div class="pack-card">
            <div style="font-size: 1.1rem; font-weight: 700;">Ultra Vault</div>
            <div class="pack-pts">3,000 PTS</div>
            <div class="pack-price">$7.99</div>
            <button class="btn outline" style="width: 100%;" onclick="openCheckout('pts_3000', '3,000 Points Pack', 7.99)" data-t="btn_buy_pts">Buy 3,000 Pts</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- License Verification & Activation Section -->
  <section class="activation-section" id="activate">
    <div class="container">
      <div class="activation-box">
        <div class="badge" data-t="act_badge">License Portal</div>
        <h3 data-t="act_title">Verify or Activate Your License Key</h3>
        <p data-t="act_sub">Already purchased on the web or received a key from a reseller? Check your plan expiration and points status here.</p>
        <div class="key-input-row">
          <input type="text" id="license-input" class="key-input" placeholder="ZVPN-XXXX-XXXX-XXXX-XXXX" maxlength="24">
          <button class="btn" onclick="verifyLicenseKey()" data-t="btn_verify_key">Verify Key</button>
        </div>
        <div id="license-result"></div>
      </div>
    </div>
  </section>

  <!-- ════ Server Configs Hub & Monetized Downloads ════ -->
  <section class="server-hub-section" id="server-configs">
    <div class="container">
      <div class="section-head" style="text-align: center; margin-bottom: 2.5rem;">
        <div class="badge" style="background: rgba(0, 229, 255, 0.12); border-color: var(--accent-cyan); color: var(--accent-cyan);" data-t="hub_badge">
          <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> DIRECT CONFIG PROFILES (.OVPN / WIREGUARD)
        </div>
        <h2 style="font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; margin: 12px 0;" data-t="hub_title">
          Download High-Speed Server Configs
        </h2>
        <p style="color: var(--text-muted); font-size: 1.15rem; max-width: 680px; margin: 0 auto;" data-t="hub_sub">
          Download standalone profiles to use in official OpenVPN, WireGuard, and VLESS clients. Unlock any server instantly using 5 reward points or watch a quick sponsor ad.
        </p>
      </div>

      <!-- Live Configs Grid (Top 6 Only) -->
      <div id="configs-grid-container" class="config-grid">
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <div style="display: inline-block; width: 32px; height: 32px; border: 3px solid rgba(198, 255, 0, 0.2); border-top-color: #C6FF00; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <p style="margin-top: 14px; font-weight: 600;">Loading high-speed server profiles from Cloudflare Edge...</p>
        </div>
      </div>

      <!-- Jump to Full Hub (16,000+ Servers) -->
      <div style="text-align: center; margin-top: 2.5rem;">
        <a href="/servers" style="padding: 15px 36px; font-size: 1.05rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, rgba(0,229,255,0.18), rgba(198,255,0,0.18)); border: 1.5px solid #00E5FF; color: #fff; border-radius: 14px; box-shadow: 0 0 32px rgba(0,229,255,0.25); transition: all 0.3s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span data-t="hub_open_all">Explore All 16,000+ Servers in Server Hub →</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Download Section -->
  <section class="download-section" id="download" style="padding: 6rem 0; border-top: 1px solid var(--border);">
    <div class="container" style="text-align: center;">
      <div class="badge cyan" data-t="dl_badge">Multi-Platform</div>
      <h2 style="font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; margin: 12px 0;" data-t="dl_title">Download ZVPN Client</h2>
      <p style="color: var(--text-muted); font-size: 1.15rem; max-width: 600px; margin: 0 auto 2.5rem;" data-t="dl_sub">
        Production stable for Android with one-tap connection. Desktop clients are in public beta.
      </p>
      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 2.5rem;">
        <button type="button" onclick="triggerDownload('android')" class="btn" style="padding: 14px 28px; font-size: 1.05rem; cursor: pointer;" data-t="btn_dl_android">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path fill="#3DDC84" d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg> Download Android (APK)
        </a>
        <button type="button" onclick="triggerDownload('windows')" class="btn outline" style="padding: 14px 24px; cursor: pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path fill="#0078D4" d="M3 5l7-1v7H3zM11 4l9-2v9h-9zM3 13h7v7l-7-1zM11 13h9v9l-9-2z"/></svg> Windows (MSI Installer)
        </a>
        <button type="button" onclick="triggerDownload('chrome')" class="btn outline" style="padding: 14px 24px; cursor: pointer;">
          <svg width="15" height="15" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px; flex-shrink:0;">
  <circle cx="24" cy="24" r="12" fill="#FFFFFF"/>
  <path d="M24 12h20.781A23.994 23.994 0 0 0 3.217 12.003L13.608 30l.009-.002A11.985 11.985 0 0 1 24 12z" fill="#EA4335"/>
  <circle cx="24" cy="24" r="9.5" fill="#1A73E8"/>
  <path d="M34.391 30.003L24 48a23.994 23.994 0 0 0 20.78-35.997H23.999l-.003.009A11.985 11.985 0 0 1 34.391 30.003z" fill="#FBBC04"/>
  <path d="M13.609 30.003L3.218 12.006A23.994 23.994 0 0 0 24.003 48l10.39-17.997-.007-.007a11.985 11.985 0 0 1-20.377.007z" fill="#34A853"/>
</svg> Chrome Web Extension
        </a>
        <button type="button" onclick="triggerDownload('mac')" class="btn outline" style="padding: 14px 24px; cursor: pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path fill="#c8c8d2" d="M18.7 10.6c-.1.1-2.5 1.4-2.5 4.4 0 3.4 3 4.6 3.1 4.6-.1 0-.4 1.6-1.6 3.3-1 1.4-2 2.8-3.6 2.8s-2-1-3.8-1c-1.7 0-2.4.9-3.8.9s-2.4-.9-3.6-2.9c-1-1.9-1.8-4.8-1.8-7.6 0-4.5 2.9-6.9 5.8-6.9 1.5 0 2.8 1 3.7 1 .9 0 2.3-1.1 4.1-1.1.7 0 3 .1 4.6 2.3zm-5.4-4.2c.7-.9 1.2-2 1.2-3.2 0-.2 0-.3-.1-.5-1.2 0-2.6.8-3.4 1.7-.6.7-1.3 1.9-1.3 3.1 0 .2 0 .3.1.4h.3c1 0 2.4-.7 3.1-1.6z"/></svg> macOS (DMG Package)
        </a>
        <button type="button" onclick="triggerDownload('linux')" class="btn outline" style="padding: 14px 24px; cursor: pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="8" r="6" fill="#f5a623" opacity="0.9"/><circle cx="10" cy="7" r="1.3" fill="#111"/><circle cx="14" cy="7" r="1.3" fill="#111"/><ellipse cx="12" cy="10" rx="2.5" ry="1.2" fill="#fff" opacity="0.8"/><ellipse cx="12" cy="17" rx="7" ry="6" fill="#f5a623"/><ellipse cx="12" cy="17" rx="4.5" ry="5" fill="#fff" opacity="0.7"/></svg> Linux (DEB Package)
        </a>
      </div>

      <!-- Autonomous CLI One-Liner Quick Installer -->
      <div style="max-width: 760px; margin: 0 auto; background: #0c0d14; border: 1px solid rgba(198, 255, 0, 0.25); border-radius: 16px; padding: 24px; text-align: left; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #C6FF00; box-shadow: 0 0 10px #C6FF00;"></span>
            <span style="font-weight: 700; font-size: 0.95rem; color: #fff;">Terminal Quick Install (CMD / PowerShell / Bash)</span>
          </div>
          <span style="font-size: 0.78rem; color: var(--text-muted); background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 20px;">No browser download required</span>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; flex-wrap: wrap;">
          <button id="tab-btn-ps" onclick="selectCliTab('ps')" style="background: rgba(198, 255, 0, 0.15); color: #C6FF00; border: 1px solid rgba(198, 255, 0, 0.3); border-radius: 6px; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="12" height="12" viewBox="0 0 88 88" fill="#0078D4"><path d="M0 12.4L36 7v29H0zM40 6.5L88 0v36H40zM0 46.5h36v29L0 70zM40 46.5h48v35L40 88z"/></svg>
            Windows (PowerShell)
          </button>
          <button id="tab-btn-cmd" onclick="selectCliTab('cmd')" style="background: transparent; color: var(--text-muted); border: 1px solid transparent; border-radius: 6px; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 16h6"/></svg>
            Windows (CMD)
          </button>
          <button id="tab-btn-linux" onclick="selectCliTab('linux')" style="background: transparent; color: var(--text-muted); border: 1px solid transparent; border-radius: 6px; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="12" height="12" viewBox="0 0 48 48" fill="#f5a623"><circle cx="24" cy="12" r="10"/><circle cx="24" cy="30" r="14"/></svg>
            Linux (Ubuntu / Debian)
          </button>
          <button id="tab-btn-mac" onclick="selectCliTab('mac')" style="background: transparent; color: var(--text-muted); border: 1px solid transparent; border-radius: 6px; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="10" height="12" viewBox="0 0 814 1000" fill="#c8c8d2"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.5c-43-82-77.5-209.4-77.5-330.6 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
            macOS (Terminal)
          </button>
        </div>

        <div style="position: relative; background: #050508; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px 60px 12px 14px; font-family: monospace; font-size: 0.9rem; color: #e0e0e0; overflow-x: auto; white-space: nowrap;">
          <span id="cli-cmd-display" style="color: #79c0ff;">irm https://z-vpn.site/install.ps1 | iex</span>
          <button onclick="copyCliCommand()" id="btn-copy-cli" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: #1f242c; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; cursor: pointer; font-weight: 600;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy
          </button>
        </div>
        <div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M9 21h6M12 2a7 7 0 00-4 12.7V17a1 1 0 001 1h6a1 1 0 001-1v-2.3A7 7 0 0012 2z" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M10 21h4" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round"/></svg></span> <span>Downloads, verifies checksums, and launches ZVPN automatically via Cloudflare Edge Network.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Crypto Donation & Community Support Section -->
  <section class="donate-section" id="donate" style="padding: 5rem 0; border-top: 1px solid var(--border);">
    <div class="container">
      <div class="section-head" style="text-align: center; margin-bottom: 3.5rem;">
        <div class="badge cyan" data-t="donate_badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 21C12 21 3 13 3 8c0-3 2.5-5 5-5 1.7 0 3.4 1 4 2.6C12.6 4 14.3 3 16 3c2.5 0 5 2 5 5 0 5-9 13-9 13z" fill="#ff6b9d"/></svg> COMMUNITY FUND</div>
        <h2 style="font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 800; margin: 12px 0;" data-t="donate_title">Support &amp; Fund ZVPN Infrastructure</h2>
        <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 680px; margin: 0 auto;" data-t="donate_sub">
          Help fund our high-speed server bandwidth, VLESS Reality cloaking nodes, and zero-logs open privacy network. You can support our project directly via any of these cryptocurrency addresses:
        </p>
      </div>

      <div class="donate-grid">
        <!-- USDT (Tether) -->
        <div class="donate-card">
          <div class="donate-card-header">
            <div class="donate-icon" style="background: rgba(38, 161, 123, 0.15); color: #26a17b; border: 1px solid rgba(38, 161, 123, 0.3);">₮</div>
            <div>
              <h3 style="margin: 0; font-size: 1.2rem; font-weight: 800;">Tether (USDT)</h3>
              <span class="badge" style="font-size: 0.72rem; background: rgba(38, 161, 123, 0.12); color: #26a17b; border-color: rgba(38, 161, 123, 0.3);">BSC (BEP-20)</span>
            </div>
          </div>
          <div class="donate-addr-box" id="addr-usdt">0xd625b3681dcf424a906b11cf6c0aa957ee3a16d4</div>
          <div class="donate-actions">
            <button class="btn-sm" style="flex: 1; padding: 9px;" onclick="copyCryptoAddr('0xd625b3681dcf424a906b11cf6c0aa957ee3a16d4', 'USDT (BEP-20)')" data-t="btn_copy_addr"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy Address</button>
            <button class="btn-sm outline" style="padding: 9px 14px;" onclick="showQrModal('0xd625b3681dcf424a906b11cf6c0aa957ee3a16d4', 'Tether USDT (BEP-20)')" data-t="btn_show_qr">QR</button>
          </div>
        </div>

        <!-- Ethereum (ETH) -->
        <div class="donate-card">
          <div class="donate-card-header">
            <div class="donate-icon" style="background: rgba(98, 126, 234, 0.15); color: #627eea; border: 1px solid rgba(98, 126, 234, 0.3);">Ξ</div>
            <div>
              <h3 style="margin: 0; font-size: 1.2rem; font-weight: 800;">Ethereum (ETH)</h3>
              <span class="badge" style="font-size: 0.72rem; background: rgba(98, 126, 234, 0.12); color: #627eea; border-color: rgba(98, 126, 234, 0.3);">BSC (BEP-20)</span>
            </div>
          </div>
          <div class="donate-addr-box" id="addr-eth">0xd625b3681dcf424a906b11cf6c0aa957ee3a16d4</div>
          <div class="donate-actions">
            <button class="btn-sm" style="flex: 1; padding: 9px;" onclick="copyCryptoAddr('0xd625b3681dcf424a906b11cf6c0aa957ee3a16d4', 'ETH (BEP-20)')" data-t="btn_copy_addr"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy Address</button>
            <button class="btn-sm outline" style="padding: 9px 14px;" onclick="showQrModal('0xd625b3681dcf424a906b11cf6c0aa957ee3a16d4', 'Ethereum ETH (BEP-20)')" data-t="btn_show_qr">QR</button>
          </div>
        </div>

        <!-- Tron (TRX) -->
        <div class="donate-card">
          <div class="donate-card-header">
            <div class="donate-icon" style="background: rgba(235, 0, 41, 0.15); color: #eb0029; border: 1px solid rgba(235, 0, 41, 0.3);">◈</div>
            <div>
              <h3 style="margin: 0; font-size: 1.2rem; font-weight: 800;">Tron (TRX)</h3>
              <span class="badge" style="font-size: 0.72rem; background: rgba(235, 0, 41, 0.12); color: #eb0029; border-color: rgba(235, 0, 41, 0.3);">Tron (TRC-20)</span>
            </div>
          </div>
          <div class="donate-addr-box" id="addr-trx">TPTAUsVeAaiQCLjLkGnj4iQkLmDVgkwNF6</div>
          <div class="donate-actions">
            <button class="btn-sm" style="flex: 1; padding: 9px;" onclick="copyCryptoAddr('TPTAUsVeAaiQCLjLkGnj4iQkLmDVgkwNF6', 'Tron TRX (TRC-20)')" data-t="btn_copy_addr"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy Address</button>
            <button class="btn-sm outline" style="padding: 9px 14px;" onclick="showQrModal('TPTAUsVeAaiQCLjLkGnj4iQkLmDVgkwNF6', 'Tron TRX (TRC-20)')" data-t="btn_show_qr">QR</button>
          </div>
        </div>

        <!-- Solana (SOL) -->
        <div class="donate-card">
          <div class="donate-card-header">
            <div class="donate-icon" style="background: rgba(20, 241, 149, 0.15); color: #14f195; border: 1px solid rgba(20, 241, 149, 0.3);">◎</div>
            <div>
              <h3 style="margin: 0; font-size: 1.2rem; font-weight: 800;">Solana (SOL)</h3>
              <span class="badge" style="font-size: 0.72rem; background: rgba(20, 241, 149, 0.12); color: #14f195; border-color: rgba(20, 241, 149, 0.3);">Solana Native</span>
            </div>
          </div>
          <div class="donate-addr-box" id="addr-sol">9sviCGuGfRMAPxSGUWQpakHZd9fhXyBY1Mk7Tzwmqsjr</div>
          <div class="donate-actions">
            <button class="btn-sm" style="flex: 1; padding: 9px;" onclick="copyCryptoAddr('9sviCGuGfRMAPxSGUWQpakHZd9fhXyBY1Mk7Tzwmqsjr', 'Solana (SOL)')" data-t="btn_copy_addr"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy Address</button>
            <button class="btn-sm outline" style="padding: 9px 14px;" onclick="showQrModal('9sviCGuGfRMAPxSGUWQpakHZd9fhXyBY1Mk7Tzwmqsjr', 'Solana (SOL)')" data-t="btn_show_qr">QR</button>
          </div>
        </div>

        <!-- Bitcoin (BTC) -->
        <div class="donate-card">
          <div class="donate-card-header">
            <div class="donate-icon" style="background: rgba(247, 147, 26, 0.15); color: #f7931a; border: 1px solid rgba(247, 147, 26, 0.3);">₿</div>
            <div>
              <h3 style="margin: 0; font-size: 1.2rem; font-weight: 800;">Bitcoin (BTC)</h3>
              <span class="badge" style="font-size: 0.72rem; background: rgba(247, 147, 26, 0.12); color: #f7931a; border-color: rgba(247, 147, 26, 0.3);">BTC Native</span>
            </div>
          </div>
          <div class="donate-addr-box" id="addr-btc">bc1qyqw0pkg0fwttcddymdw2j283vn6pjy5h3yc3xc</div>
          <div class="donate-actions">
            <button class="btn-sm" style="flex: 1; padding: 9px;" onclick="copyCryptoAddr('bc1qyqw0pkg0fwttcddymdw2j283vn6pjy5h3yc3xc', 'Bitcoin (BTC)')" data-t="btn_copy_addr"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy Address</button>
            <button class="btn-sm outline" style="padding: 9px 14px;" onclick="showQrModal('bc1qyqw0pkg0fwttcddymdw2j283vn6pjy5h3yc3xc', 'Bitcoin (BTC)')" data-t="btn_show_qr">QR</button>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 1.8rem; margin-bottom: 0.8rem;">
        <div onclick="openExternalLink('nowpayments')" role="button" tabindex="0" style="display: inline-block; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
          <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments" style="height: 48px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
        </div>
      </div>

      <div style="text-align: center; margin-top: 2.5rem; font-size: 0.88rem; color: var(--text-muted);" data-t="donate_footer_note">
        All crypto donations directly fund server uplinks and censorship-proof tunneling infrastructure. Thank you for your support!
      </div>
    </div>
  </section>
</main>

<!-- Crypto QR Modal -->
<div class="modal-backdrop" id="qr-modal">
  <div class="modal-card" style="max-width: 380px; text-align: center;">
    <button class="modal-close" onclick="closeQrModal()">&times;</button>
    <div class="badge" id="qr-coin-badge" style="margin-bottom: 10px;">CRYPTO DONATION</div>
    <h3 id="qr-coin-title" style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem;">Wallet QR Code</h3>
    <div style="background: #ffffff; padding: 16px; border-radius: 14px; display: inline-block; box-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-bottom: 1.2rem;">
      <div id="qr-img" style="width:200px;height:200px;display:inline-block;"></div>
    </div>
    <div class="donate-addr-box" id="qr-addr-display" style="font-size: 0.78rem; margin-bottom: 1.2rem;"></div>
    <button class="btn" style="width: 100%; padding: 12px;" onclick="copyQrAddr()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy Address
    </button>
  </div>
</div>

<!-- Checkout Modal -->
<div class="modal-backdrop" id="checkout-modal">
  <div class="modal-card">
    <button class="modal-close" onclick="closeCheckout()">&times;</button>
    <div class="badge" id="modal-plan-badge">PLAN CHECKOUT</div>
    <h3 class="modal-title" id="modal-plan-title">Selected Plan</h3>
    <p class="modal-sub" data-t="modal_sub">Select your preferred payment gateway to receive your license key instantly.</p>

    <div class="modal-methods">
      <div class="method-choice active" id="method-stripe" onclick="selectPaymentMethod('stripe')">
        <div class="method-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="2" y="5" width="20" height="14" rx="3" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M2 10h20" stroke="#C6FF00" stroke-width="1.5"/><rect x="5" y="14" width="6" height="2" rx="1" fill="#C6FF00" opacity="0.5"/></svg></div>
        <div class="method-title">Bank Card / Pay</div>
        <div class="method-sub">Stripe Gateway</div>
      </div>
      <div class="method-choice" id="method-paypal" onclick="selectPaymentMethod('paypal')">
        <div class="method-icon">🅿️</div>
        <div class="method-title">PayPal</div>
        <div class="method-sub">Official Checkout</div>
      </div>
      <div class="method-choice" id="method-crypto" onclick="selectPaymentMethod('crypto')">
        <div class="method-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M6 3h12l4 7-10 12L2 10l4-7z" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M2 10h20M12 22L6 10 9 3M12 22l6-12-3-7M12 3v19" stroke="#C6FF00" stroke-width="0.8" opacity="0.5"/></svg></div>
        <div class="method-title">USDT / Crypto</div>
        <div class="method-sub">NOWPayments (Instant)</div>
      </div>
      <div class="method-choice" id="method-sha7nawy" onclick="selectPaymentMethod('sha7nawy')">
        <div class="method-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2" style="vertical-align:-3px"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"/></svg></div>
        <div class="method-title">فودافون كاش / المحافظ</div>
        <div class="method-sub">Vodafone / Orange (EGP)</div>
      </div>
    </div>

    <div class="form-group" id="group-wallet-phone" style="display: none;">
      <label class="form-label">رقم محفظة كاش (اختياري للدفع الفوري 010 / 012 / 011):</label>
      <input type="tel" id="checkout-wallet-phone" class="form-input" placeholder="010xxxxxxxx (أو اتركه فارغاً لفتح رابط الدفع الموحد)">
      <small style="color: #00E5FF; display: block; margin-top: 5px; font-size: 0.82rem;">عند إدخال رقمك يظهر لك إشعار السحب المباشر (كود *9*1# لفودافون كاش)</small>
    </div>

    <div class="form-group">
      <label class="form-label" data-t="form_email_lbl">Email Address (to receive license receipt):</label>
      <input type="email" id="checkout-email" class="form-input" placeholder="your-email@example.com" required>
    </div>

    <div class="form-group">
      <label class="form-label" data-t="form_account_lbl">ZVPN Account ID or Device ID (Optional):</label>
      <input type="text" id="checkout-account" class="form-input" placeholder="e.g. dev_xxxx or leave blank">
    </div>

    <div class="modal-summary">
      <span data-t="summary_total">Total Due:</span>
      <b id="modal-total-price">$0.00</b>
    </div>

    <button class="btn" style="width: 100%; padding: 14px;" id="checkout-submit-btn" onclick="processCheckout()">
      Proceed to Secure Payment
    </button>
    <p style="font-size: 0.78rem; color: var(--text-muted); text-align: center; margin-top: 10px;" data-t="modal_security_notice">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="6" y="11" width="12" height="10" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M8 11V7a4 4 0 018 0v4" fill="none" stroke="#C6FF00" stroke-width="1.5"/><circle cx="12" cy="16" r="1.5" fill="#C6FF00"/></svg> 256-bit SSL encrypted checkout. No sensitive card data touches our servers.
    </p>
  </div>
</div>

<!-- Server Config Unlock Modal -->
<div class="modal-backdrop" id="unlock-config-modal">
  <div class="unlock-modal-card">
    <button class="modal-close" onclick="closeConfigUnlockModal()">&times;</button>
    
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px;">
      <span id="modal-cfg-flag" style="font-size: 2.4rem; line-height: 1;">🌐</span>
      <div>
        <h3 id="modal-cfg-name" style="font-size: 1.2rem; font-weight: 800; color: #fff; margin: 0 0 4px;">Server Profile</h3>
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <span id="modal-cfg-proto" class="config-proto-badge">OPENVPN</span>
          <span id="modal-cfg-ping" style="font-size: 0.78rem; color: #2ed573; font-weight: 700; font-family: var(--font-mono);">⚡ 20 ms</span>
          <span id="modal-cfg-speed" style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">980 Mbps</span>
        </div>
      </div>
    </div>

    <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 18px;" data-t="modal_cfg_desc">
      Choose how you want to unlock this high-speed encrypted configuration file:
    </p>

    <!-- Option 1: Watch Sponsor Ad (Highest Revenue for Publisher) -->
    <div style="background: rgba(198, 255, 0, 0.05); border: 1px solid rgba(198, 255, 0, 0.3); border-radius: 14px; padding: 16px; margin-bottom: 14px; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-weight: 800; font-size: 0.92rem; color: #C6FF00; display: flex; align-items: center; gap: 6px;">
          <svg class="cyber-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Free Unlock via Sponsor Ad
        </span>
        <span style="font-size: 0.7rem; background: #C6FF00; color: #000; font-weight: 800; padding: 2px 8px; border-radius: 999px;">
          +10 BONUS POINTS
        </span>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
        Watch a short sponsor ad to immediately unlock and download this server config and receive +10 bonus points.
      </p>
      <button id="btn-unlock-ad" onclick="confirmConfigUnlock('ad')" class="btn" style="width: 100%; justify-content: center; padding: 12px; font-weight: 800; font-size: 0.88rem; cursor: pointer;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Watch Sponsor Ad &amp; Download Free
      </button>
    </div>

    <!-- Option 2: Unlock with Points -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 16px; margin-bottom: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-weight: 700; font-size: 0.9rem; color: #fff;">
          <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Instant Points Unlock
        </span>
        <span id="modal-cfg-user-pts" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); font-weight: 700;">
          Your Balance: 0 pts
        </span>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
        Deduct 5 points from your ZVPN account balance to download without waiting.
      </p>
      <button id="btn-unlock-pts" onclick="confirmConfigUnlock('points')" class="btn outline" style="width: 100%; justify-content: center; padding: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer;">
        Deduct 5 Points &amp; Download Now
      </button>
    </div>

    <!-- Status Feedback Notification -->
    <div id="modal-cfg-status" style="display: none; padding: 10px; border-radius: 8px; font-size: 0.85rem; text-align: center; margin-top: 10px;"></div>
  </div>
</div>

<!-- Google Login Modal -->
<div class="modal-backdrop" id="login-modal">
  <div class="modal-card" style="max-width: 440px; text-align: center;">
    <button class="modal-close" onclick="closeLoginModal()">&times;</button>
    <div class="badge" style="margin-bottom: 12px;">GOOGLE IDENTITY</div>
    <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 8px;" data-t="login_title">Sign in with Google</h3>
    <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.8rem;" data-t="login_sub">
      Sign in to sync points across Android and PC, view active licenses, claim daily login bonuses, and manage your subscriptions.
    </p>
    <div id="google-signin-btn-box" style="display: flex; justify-content: center; margin-bottom: 0.8rem; min-height: 44px;"></div>
    
    <div style="display: flex; align-items: center; margin: 1.2rem 0 1rem; gap: 10px;">
      <div style="flex: 1; height: 1px; background: var(--border);"></div>
      <span style="font-size: 0.74rem; color: var(--text-muted); text-transform: uppercase;" data-t="login_or_alt">OR ACCESS VIA ACCOUNT / KEY</span>
      <div style="flex: 1; height: 1px; background: var(--border);"></div>
    </div>

    <div style="display: flex; gap: 8px;">
      <input type="text" id="login-alt-input" class="form-input" placeholder="Account ID or ZVPN-XXXX Key" style="font-size: 0.85rem;" />
      <button class="btn outline" id="login-alt-btn" style="white-space: nowrap; padding: 8px 16px; font-size: 0.85rem;" onclick="loginWithAltId()" data-t="btn_access">Open</button>
    </div>
    <div id="login-alt-error" style="display: none; color: var(--danger); font-size: 0.8rem; margin-top: 6px; text-align: start;"></div>

    <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 1.2rem;" data-t="login_guarantee">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="6" y="11" width="12" height="10" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M8 11V7a4 4 0 018 0v4" fill="none" stroke="#C6FF00" stroke-width="1.5"/><circle cx="12" cy="16" r="1.5" fill="#C6FF00"/></svg> 100% Encrypted &amp; Zero-Knowledge. We never request or store sensitive passwords.
    </p>
  </div>
</div>

<!-- Account Dashboard Modal -->
<div class="modal-backdrop" id="account-modal">
  <div class="modal-card account-modal-card">
    <button class="modal-close" onclick="closeAccountModal()">&times;</button>
    
    <!-- User Profile Header -->
    <div class="account-header">
      <img id="acc-avatar" src="" alt="Avatar" class="acc-avatar-large">
      <div class="acc-info" style="flex: 1;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3 id="acc-name" style="margin: 0; font-size: 1.25rem; font-weight: 800;">User Name</h3>
          <span class="badge" style="background: rgba(66, 133, 244, 0.15); color: #4285F4; border-color: #4285F4; font-size: 0.72rem;">Google Linked</span>
        </div>
        <div id="acc-email" style="font-size: 0.88rem; color: var(--text-muted); margin-top: 3px;">user@example.com</div>
        <div style="margin-top: 6px; font-family: var(--font-mono); font-size: 0.8rem; color: #a0a0b8; display: flex; align-items: center; gap: 8px;">
          <span>ID:</span> <b id="acc-id" style="color: #fff;">user_...</b>
          <button class="btn-sm outline" onclick="copyAccountId()" style="padding: 2px 8px; font-size: 0.7rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><rect x="8" y="2" width="12" height="14" rx="2" fill="none" stroke="#C6FF00" stroke-width="1.5"/><path d="M4 8h2v12h10v2H6a2 2 0 01-2-2V8z" fill="#C6FF00" opacity="0.3"/></svg> Copy</button>
        </div>
      </div>
    </div>

    <!-- 3 Core Stats (Points, Streak, Tier) -->
    <div class="account-stat-grid">
      <div class="acc-stat-box">
        <div class="stat-lbl" data-t="acc_pts_lbl">Point Balance</div>
        <div class="stat-val" id="acc-pts" style="color: var(--accent);">0 PTS</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);" data-t="acc_pts_note">Never Expiring</div>
        <button class="btn-sm" id="acc-watch-ad-btn" onclick="watchAdForPointsWeb()" style="margin-top: 6px; background: linear-gradient(135deg, #00E5FF, #00B0FF); color: #000; font-weight: 800; border: none; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px; width: 100%; border-radius: 8px; padding: 4px 8px; font-size: 0.75rem;" data-t="btn_watch_ad_pts">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span data-t="watch_ad_pts_txt">Watch Ad (+10 Pts)</span>
        </button>
      </div>
      <div class="acc-stat-box">
        <div class="stat-lbl" data-t="acc_streak_lbl">Daily Streak</div>
        <div class="stat-val" id="acc-streak" style="color: #ff9f43;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 23c-4.4 0-8-3.6-8-8 0-3.5 2.6-6.5 4-8 .5 2 2 3 2 3s.5-3 3-6c1.5 2 2.5 3.5 3 6 1-1.5 2-3 2-3s4 4.5 4 8c0 4.4-3.6 8-8 8z" fill="#ff9f43" opacity="0.9"/></svg> Day 1</div>
        <button class="btn-sm" id="acc-claim-streak-btn" onclick="claimDailyStreakWeb()" style="margin-top: 4px;" data-t="btn_claim_streak">Claim Bonus</button>
      </div>
      <div class="acc-stat-box">
        <div class="stat-lbl" data-t="acc_tier_lbl">Active Tier</div>
        <div class="stat-val" id="acc-tier" style="color: var(--accent-cyan); font-size: 0.95rem;">FREE TIER</div>
        <div id="acc-tier-exp" style="font-size: 0.72rem; color: var(--text-muted);">No Expiration</div>
      </div>
    </div>

    <!-- Referral Link Box -->
    <div style="margin-top: 1rem; background: var(--bg-elevated); padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border);">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.85rem; font-weight: 700;" data-t="acc_ref_lbl">Your Referral Code (+50 Pts each):</span>
        <b id="acc-ref-code" style="font-family: var(--font-mono); color: var(--accent); font-size: 1rem;">ZVPN-XXXX</b>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 8px;">
        <input type="text" id="acc-ref-link" readonly class="form-input" style="padding: 6px 10px; font-size: 0.8rem;" />
        <button class="btn outline" style="padding: 6px 14px; font-size: 0.8rem; white-space: nowrap;" onclick="copyReferralLink()" data-t="btn_copy">Copy</button>
      </div>
    </div>

    <!-- My License Keys List -->
    <div style="margin-top: 1.4rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h4 style="margin: 0; font-size: 0.95rem; font-weight: 700;" data-t="acc_my_keys_title"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M21 2l-2 2m-7.6 7.6a5.5 5.5 0 11-7.8 7.8 5.5 5.5 0 017.8-7.8zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> My License Keys (for Desktop &amp; Android)</h4>
        <button class="btn-sm outline" onclick="refreshAccountData()" style="padding: 3px 8px; font-size: 0.72rem;">↻ Refresh</button>
      </div>
      <div id="acc-licenses-container" style="max-height: 160px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px;">
        <div style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 12px;">No purchased license keys yet.</div>
      </div>
    </div>

    <!-- Quick Redeem License Form -->
    <div style="margin-top: 1.4rem; border-top: 1px solid var(--border); padding-top: 1rem;">
      <h5 style="margin: 0 0 8px 0; font-size: 0.88rem;" data-t="acc_redeem_title">Have a License Key? Bind to this Account:</h5>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="acc-redeem-input" class="form-input" placeholder="ZVPN-XXXX-XXXX-XXXX-XXXX" style="text-transform: uppercase;">
        <button class="btn" style="white-space: nowrap; padding: 8px 16px; font-size: 0.9rem;" id="acc-redeem-btn" onclick="redeemKeyToAccount()" data-t="btn_redeem">Redeem</button>
      </div>
      <div id="acc-redeem-msg" style="display: none; margin-top: 6px; font-size: 0.82rem;"></div>
    </div>

    <!-- Modal Actions -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.6rem; padding-top: 1rem; border-top: 1px solid var(--border);">
      <button class="btn outline" style="color: var(--danger); border-color: rgba(255, 71, 87, 0.4); padding: 8px 16px; font-size: 0.88rem;" onclick="signOutWeb()" data-t="btn_signout">Sign Out</button>
      <a href="#pricing" class="btn" onclick="closeAccountModal()" style="padding: 8px 18px; font-size: 0.88rem;" data-t="btn_upgrade_account">Upgrade Plan</a>
    </div>
  </div>
</div>

<!-- Legal Dialog -->
<dialog id="legal-dialog" style="max-width: 680px; width: 90%; background: var(--bg-card); color: var(--text); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; margin: auto;">
  <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem;" data-t="legal_title">ZVPN Strict Privacy Policy &amp; Terms</h2>
  <div style="max-height: 60vh; overflow-y: auto; font-size: 0.95rem; color: #b0b0c2; line-height: 1.7; padding-inline-end: 10px;">
    <h4 style="color: #fff; margin: 16px 0 6px;">1. Absolute Zero-Logs Guarantee</h4>
    <p>ZVPN operates purely on RAM-based edge servers. We do NOT record, log, or store: source IP addresses, destination IP addresses, browsing queries, DNS traffic, metadata, or bandwidth volume.</p>
    
    <h4 style="color: #fff; margin: 16px 0 6px;">2. Cryptographic Security Standards</h4>
    <p>All connections are protected by authenticated ciphers including ChaCha20-Poly1305 and AES-256-GCM with perfect forward secrecy.</p>

    <h4 style="color: #fff; margin: 16px 0 6px;">3. 30-Day Money-Back Guarantee</h4>
    <p>If you are not 100% satisfied with our global speeds, gaming latency, or security, contact our 24/7 billing desk at <a href="mailto:itsbaask@gmail.com" style="color:var(--accent); font-weight:700;">itsbaask@gmail.com</a> within 30 days for a full refund.</p>

    <h4 style="color: #fff; margin: 16px 0 6px;">4. Acceptable Use Policy</h4>
    <p>Users must not engage in distributed denial-of-service (DDoS) attacks, automated spam relays, or illegal intrusions.</p>
  </div>
  <button class="btn" style="margin-top: 1.5rem; width: 100%;" onclick="document.getElementById('legal-dialog').close()">Close</button>
</dialog>

  <!-- Downloads Section -->
  <section class="downloads-section" id="downloads">
    <div class="container">
      <div class="section-head">
        <div class="badge">Free Download</div>
        <h2 id="dl-title">Download Z VPN</h2>
        <p id="dl-sub">Available on all major platforms. Version <span id="dl-version-badge" style="color:var(--accent);font-family:var(--font-mono)">loading...</span></p>
      </div>

      <div class="downloads-grid">

        <!-- ═══ Windows ═══ -->
        <div class="dl-card" style="--dl-accent:rgba(0,120,212,0.6); --dl-icon-bg:rgba(0,120,212,0.08); --dl-icon-border:rgba(0,120,212,0.25); --dl-icon-glow:rgba(0,120,212,0.3);">
          <div class="dl-os-icon">
            <!-- Windows logo SVG -->
            <svg width="36" height="36" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" aria-label="Windows">
              <path d="M0 12.4L36 7v29H0z" fill="#0078D4"/>
              <path d="M40 6.5L88 0v36H40z" fill="#0078D4"/>
              <path d="M0 46.5h36v29L0 70z" fill="#0078D4"/>
              <path d="M40 46.5h48v35L40 88z" fill="#0078D4"/>
            </svg>
          </div>
          <div class="dl-platform">Windows</div>
          <div class="dl-formats">Windows 10 / 11 — 64-bit</div>
          <div class="dl-version" id="dl-ver-win">v1.0.4</div>
          <div class="dl-btns">
            <button type="button" id="dl-link-win" onclick="triggerDownload('windows')" class="dl-btn" style="cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 3v14M5 17l7 7 7-7"/><path d="M3 21h18"/></svg>
              Download .MSI Installer
            </button>
            <div style="font-size: 0.72rem; color: var(--text-muted); text-align: center; margin-top: 4px; line-height: 1.3;" data-t="win_smartscreen_tip">
              🛡️ Windows SmartScreen? Click <b>More info</b> ➔ <b>Run anyway</b>
            </div>
          </div>
        </div>

        <!-- ═══ Linux ═══ -->
        <div class="dl-card" style="--dl-accent:rgba(255,165,0,0.6); --dl-icon-bg:rgba(255,165,0,0.07); --dl-icon-border:rgba(255,165,0,0.22); --dl-icon-glow:rgba(255,165,0,0.25);">
          <div class="dl-os-icon">
            <!-- Tux penguin silhouette SVG -->
            <svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Linux">
              <ellipse cx="24" cy="12" rx="10" ry="11" fill="#f5a623"/>
              <ellipse cx="20" cy="10" rx="2.5" ry="3" fill="#fff"/>
              <ellipse cx="28" cy="10" rx="2.5" ry="3" fill="#fff"/>
              <circle cx="20" cy="10" r="1.4" fill="#111"/>
              <circle cx="28" cy="10" r="1.4" fill="#111"/>
              <ellipse cx="24" cy="14.5" rx="3.5" ry="2" fill="#f7c97e"/>
              <ellipse cx="24" cy="30" rx="13" ry="15" fill="#f5a623"/>
              <ellipse cx="24" cy="31" rx="8" ry="11" fill="#fff"/>
              <rect x="16" y="42" width="5" height="5" rx="2" fill="#f5a623"/>
              <rect x="27" y="42" width="5" height="5" rx="2" fill="#f5a623"/>
            </svg>
          </div>
          <div class="dl-platform">Linux</div>
          <div class="dl-formats">Ubuntu · Debian · Fedora · Universal</div>
          <div class="dl-version" id="dl-ver-linux">v1.0.4</div>
          <div class="dl-btns">
            <button type="button" id="dl-link-deb" onclick="triggerDownload('deb')" class="dl-btn" style="cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 3v14M5 17l7 7 7-7"/><path d="M3 21h18"/></svg>
              Download .DEB
            </button>
            <button type="button" id="dl-link-appimage" onclick="triggerDownload('appimage')" class="dl-btn ghost" style="cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v14M5 17l7 7 7-7"/><path d="M3 21h18"/></svg>
              Portable (.tar.gz)
            </button>
          </div>
        </div>

        <!-- ═══ macOS ═══ -->
        <div class="dl-card" style="--dl-accent:rgba(200,200,210,0.4); --dl-icon-bg:rgba(200,200,210,0.07); --dl-icon-border:rgba(200,200,210,0.18); --dl-icon-glow:rgba(200,200,210,0.2);">
          <div class="dl-os-icon">
            <!-- Apple logo SVG -->
            <svg width="32" height="38" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" aria-label="macOS">
              <path fill="#c8c8d2" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.5c-43-82-77.5-209.4-77.5-330.6 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
          </div>
          <div class="dl-platform">macOS</div>
          <div class="dl-formats">macOS 12 Monterey and later</div>
          <div class="dl-soon-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><circle cx="12" cy="12" r="10" fill="none" stroke="#C6FF00" stroke-width="1.5" opacity="0.6"/><path d="M12 6v6l4 2" stroke="#C6FF00" stroke-width="1.8" stroke-linecap="round"/></svg> Coming Soon</div>
          <div class="dl-btns">
            <a id="dl-link-mac" href="javascript:void(0);" onclick="alert('ZVPN for macOS is undergoing final packaging. Available very soon!')" class="dl-btn ghost" style="opacity:0.65; cursor:not-allowed;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Notify Me When Ready
            </a>
          </div>
        </div>

        <!-- ═══ Android ═══ -->
        <div class="dl-card" style="--dl-accent:rgba(61,220,132,0.6); --dl-icon-bg:rgba(61,220,132,0.08); --dl-icon-border:rgba(61,220,132,0.25); --dl-icon-glow:rgba(61,220,132,0.3);">
          <div class="dl-os-icon">
            <!-- Android robot SVG -->
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Android">
              <path fill="#3DDC84" d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
            </svg>
          </div>
          <div class="dl-platform">Android</div>
          <div class="dl-formats">Android 8.0+ · ARM64 / x86_64</div>
          <div class="dl-version" id="dl-ver-apk">v1.0.4</div>
          <div class="dl-btns">
            <button type="button" id="dl-link-apk" onclick="triggerDownload('apk')" class="dl-btn" style="cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 3v14M5 17l7 7 7-7"/><path d="M3 21h18"/></svg>
              Download APK (Sideload)
            </button>
            <button type="button" onclick="openExternalLink('gplay')" class="dl-btn store-gplay" style="cursor:pointer;">
              <!-- Google Play icon -->
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gp-a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00C3FF"/><stop offset="100%" stop-color="#2AF598"/></linearGradient>
                  <linearGradient id="gp-b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#FFD000"/><stop offset="100%" stop-color="#FF8C00"/></linearGradient>
                  <linearGradient id="gp-c" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#FF4B6E"/><stop offset="100%" stop-color="#C2185B"/></linearGradient>
                </defs>
                <path d="M3 1.5L14.5 12 3 22.5V1.5z" fill="url(#gp-a)"/>
                <path d="M3 1.5l11.5 10.5L20 8.5 3 1.5z" fill="url(#gp-b)"/>
                <path d="M3 22.5l11.5-10.5L20 15.5 3 22.5z" fill="url(#gp-c)"/>
                <path d="M20 8.5L14.5 12 20 15.5l3-3.5-3-3.5z" fill="#FF8C00"/>
              </svg>
              Google Play Store
            </button>
          </div>
        </div>

        <!-- ═══ iOS / iPadOS ═══ -->
        <div class="dl-card" style="--dl-accent:rgba(200,200,210,0.4); --dl-icon-bg:rgba(200,200,210,0.07); --dl-icon-border:rgba(200,200,210,0.18); --dl-icon-glow:rgba(200,200,210,0.2);">
          <div class="dl-os-icon">
            <!-- iPhone frame SVG -->
            <svg width="30" height="38" viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg" aria-label="iOS">
              <rect x="2" y="2" width="56" height="86" rx="12" ry="12" fill="none" stroke="#c8c8d2" stroke-width="4"/>
              <rect x="20" y="6" width="20" height="4" rx="2" fill="#c8c8d2"/>
              <rect x="10" y="77" width="40" height="6" rx="3" fill="#c8c8d2" opacity="0.4"/>
              <text x="30" y="52" text-anchor="middle" font-family="-apple-system,Arial" font-size="20" font-weight="700" fill="#c8c8d2">iOS</text>
            </svg>
          </div>
          <div class="dl-platform">iOS / iPadOS</div>
          <div class="dl-formats">iPhone · iPad · iOS 15+</div>
          <div class="dl-soon-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M15 2H9v0a3 3 0 013 3v13a3 3 0 01-6 0V7M9 2h0a3 3 0 00-3 3v13a5 5 0 0010 0V5a3 3 0 00-3-3z" fill="none" stroke="#C6FF00" stroke-width="1.5" stroke-linecap="round"/></svg> App Store Review</div>
          <div class="dl-btns">
            <a id="dl-link-ios" href="javascript:void(0);" onclick="alert('ZVPN iOS is undergoing Apple App Store review. Coming very soon!')" class="dl-btn store-astore" style="opacity:0.65; cursor:not-allowed;">
              <!-- Apple logo mini -->
              <svg width="15" height="15" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.5c-43-82-77.5-209.4-77.5-330.6 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
              </svg>
              App Store — Coming Soon
            </a>
          </div>
        </div>

        <!-- ═══ Chrome Extension ═══ -->
        <div class="dl-card" style="--dl-accent:rgba(66,133,244,0.6); --dl-icon-bg:rgba(66,133,244,0.08); --dl-icon-border:rgba(66,133,244,0.25); --dl-icon-glow:rgba(66,133,244,0.3);">
          <div class="dl-os-icon">
            <!-- Official Authentic Google Chrome Logo SVG -->
            <svg width="42" height="42" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Chrome Extension">
              <defs>
                <linearGradient id="ch-icon-red" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#D93025"/>
                  <stop offset="1" stop-color="#EA4335"/>
                </linearGradient>
                <linearGradient id="ch-icon-yellow" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#FCC934"/>
                  <stop offset="1" stop-color="#FBBC04"/>
                </linearGradient>
                <linearGradient id="ch-icon-green" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#1E8E3E"/>
                  <stop offset="1" stop-color="#34A853"/>
                </linearGradient>
              </defs>
              <!-- 3 Outer Segments -->
              <path d="M24 12h20.781A23.994 23.994 0 0 0 3.217 12.003L13.608 30l.009-.002A11.985 11.985 0 0 1 24 12z" fill="url(#ch-icon-red)"/>
              <path d="M34.391 30.003L24.001 48A23.994 23.994 0 0 0 44.78 12.003H23.999l-.003.009A11.985 11.985 0 0 1 34.391 30.003z" fill="url(#ch-icon-yellow)"/>
              <path d="M13.609 30.003L3.218 12.006A23.994 23.994 0 0 0 24.001 48l-.002-11.992A11.985 11.985 0 0 1 13.609 30.003z" fill="url(#ch-icon-green)"/>
              <!-- Pure White Ring -->
              <circle cx="24" cy="24" r="12" fill="#FFFFFF"/>
              <!-- Vibrant Center Core -->
              <circle cx="24" cy="24" r="9.5" fill="#1A73E8"/>
            </svg>
          </div>
          <div class="dl-platform">Chrome Extension</div>
          <div class="dl-formats">Chrome · Edge · Brave — MV3</div>
          <div class="dl-version" id="dl-ver-ext">v1.0.4</div>
          <div class="dl-btns">
            <button type="button" id="dl-link-ext" onclick="triggerDownload('chrome')" class="dl-btn" style="cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 3v14M5 17l7 7 7-7"/><path d="M3 21h18"/></svg>
              Download Extension (.zip)
            </button>
            <button type="button" onclick="openExternalLink('cstore')" class="dl-btn store-chrome" style="cursor:pointer;">
              <!-- Chrome Web Store puzzle icon -->
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
              Chrome Web Store
            </button>
          </div>
        </div>

      </div><!-- .downloads-grid -->

      <p style="text-align:center;margin-top:2.5rem;color:var(--text-muted);font-size:0.84rem;line-height:1.8;">
        All desktop builds are self-contained. No root required for Linux AppImage.<br>
        Open-source core powered by <strong>Sing-Box</strong> &amp; <strong>Xray</strong>.
      </p>
    </div>
  </section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <svg class="logo-mark" viewBox="0 0 1254 1254" aria-hidden="true">
            <path fill="#C6FF00" fill-rule="evenodd" d="${ZVPN_LOGO_PATH}"></path>
          </svg>
          <span class="logo-text">VPN</span>
        </div>
        <p style="font-size: 0.92rem; line-height: 1.6; max-width: 320px;">
          The ultimate privacy, Tor onion, and esports VPN infrastructure. Built for defenders of the open internet.
        </p>
      </div>
      <div class="footer-col">
        <h5>Protocols</h5>
        <ul class="footer-links">
          <li><a href="#protocols">VLESS Reality &amp; Vision</a></li>
          <li><a href="#protocols">Hysteria 2 &amp; TUIC</a></li>
          <li><a href="#protocols">Tor Onion Multi-Hop</a></li>
          <li><a href="#protocols">WireGuard &amp; AmneziaWG</a></li>
          <li><a href="#protocols">VMess &amp; Trojan gRPC</a></li>
          <li><a href="#protocols">Shadowsocks 2022</a></li>
          <li><a href="#protocols">Psiphon &amp; DNS Tunnel</a></li>
          <li><a href="#protocols">OpenConnect &amp; OpenVPN</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Features</h5>
        <ul class="footer-links">
          <li><a href="#gaming">Pro Gaming Mode</a></li>
          <li><a href="#economy">Free Points System</a></li>
          <li><a href="#activate">License Verification</a></li>
          <li><a href="#pricing">VIP Subscriptions</a></li>
          <li><a href="#downloads"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C6FF00"/></svg> Download App</a></li>
          <li><a href="#donate" data-t="nav_donate"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M12 21C12 21 3 13 3 8c0-3 2.5-5 5-5 1.7 0 3.4 1 4 2.6C12.6 4 14.3 3 16 3c2.5 0 5 2 5 5 0 5-9 13-9 13z" fill="#ff6b9d"/></svg> Support &amp; Donate</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Legal &amp; Trust</h5>
        <ul class="footer-links">
          <li><a href="javascript:void(0)" onclick="document.getElementById('legal-dialog').showModal()">Zero-Logs Policy</a></li>
          <li><a href="javascript:void(0)" onclick="document.getElementById('legal-dialog').showModal()">Terms of Service</a></li>
          <li><a href="javascript:void(0)" onclick="document.getElementById('legal-dialog').showModal()">Refund Policy</a></li>
          <li><a href="mailto:itsbaask@gmail.com" style="color:var(--accent); font-weight:700;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> itsbaask@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <!-- All Accepted Payment Methods & Security Standards — Professional SVG Logos -->
    <div style="border-top: 1px solid var(--border); padding-top: 2.5rem; margin-top: 2rem; text-align: center;">
      <div style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); margin-bottom: 1.5rem; letter-spacing: 1.5px; text-transform: uppercase;">
        Accepted Secure Payment Methods &amp; Cryptocurrencies
      </div>

      <!-- Payment Badges Row -->
      <div style="display:flex; justify-content:center; align-items:center; gap:12px; flex-wrap:wrap; margin-bottom:1.5rem;">

        <!-- VISA -->
        <div class="pay-badge" title="Visa" style="background:#1A1F71; border-color:rgba(26,31,113,0.6);">
          <svg viewBox="0 0 48 16" height="18" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="13" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="#ffffff" letter-spacing="-0.5">VISA</text>
          </svg>
        </div>

        <!-- MASTERCARD -->
        <div class="pay-badge" title="Mastercard" style="background:#252525; border-color:rgba(255,255,255,0.15);">
          <svg viewBox="0 0 48 30" height="22" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
            <circle cx="17" cy="15" r="13" fill="#EB001B"/>
            <circle cx="31" cy="15" r="13" fill="#F79E1B"/>
            <path d="M24 5.3a13 13 0 0 1 0 19.4A13 13 0 0 1 24 5.3z" fill="#FF5F00"/>
          </svg>
        </div>

        <!-- AMEX -->
        <div class="pay-badge" title="American Express" style="background:#007BC1; border-color:rgba(0,123,193,0.5);">
          <svg viewBox="0 0 60 20" height="18" xmlns="http://www.w3.org/2000/svg" aria-label="American Express">
            <text x="1" y="15" font-family="Arial,sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="0.5">AMEX</text>
          </svg>
        </div>

        <!-- PAYPAL -->
        <div class="pay-badge" title="PayPal" style="background:#003087; border-color:rgba(0,48,135,0.5);">
          <svg viewBox="0 0 80 24" height="22" xmlns="http://www.w3.org/2000/svg" aria-label="PayPal">
            <text x="2" y="17" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="#009cde">Pay</text>
            <text x="28" y="17" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="#ffffff">Pal</text>
          </svg>
        </div>

        <!-- APPLE PAY -->
        <div class="pay-badge" title="Apple Pay" style="background:#000000; border-color:rgba(255,255,255,0.18);">
          <svg viewBox="0 0 70 24" height="22" xmlns="http://www.w3.org/2000/svg" aria-label="Apple Pay">
            <text x="2" y="17" font-family="-apple-system,Arial,sans-serif" font-size="13" font-weight="600" fill="#ffffff"> Pay</text>
          </svg>
        </div>

        <!-- GOOGLE PAY -->
        <div class="pay-badge" title="Google Pay" style="background:#ffffff; border-color:rgba(0,0,0,0.12);">
          <svg viewBox="0 0 72 24" height="22" xmlns="http://www.w3.org/2000/svg" aria-label="Google Pay">
            <text x="1" y="17" font-family="Arial,sans-serif" font-size="13" font-weight="500">
              <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC04">o</tspan><tspan fill="#34A853">g</tspan><tspan fill="#4285F4">le</tspan>
              <tspan fill="#5F6368" font-weight="700"> Pay</tspan>
            </text>
          </svg>
        </div>

        <!-- GOOGLE PLAY -->
        <div class="pay-badge" title="Google Play In-App" style="background:#0d1117; border-color:rgba(52,168,83,0.4);">
          <svg viewBox="0 0 24 24" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="Google Play">
            <defs>
              <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#00C3FF"/><stop offset="100%" style="stop-color:#2AF598"/></linearGradient>
              <linearGradient id="gp2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#FFD000"/><stop offset="100%" style="stop-color:#FF8C00"/></linearGradient>
              <linearGradient id="gp3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#FF4B6E"/><stop offset="100%" style="stop-color:#C2185B"/></linearGradient>
            </defs>
            <path d="M3 1.5L14.5 12 3 22.5V1.5z" fill="url(#gp1)"/>
            <path d="M3 1.5l11.5 10.5L20 8.5 3 1.5z" fill="url(#gp2)"/>
            <path d="M3 22.5l11.5-10.5L20 15.5 3 22.5z" fill="url(#gp3)"/>
            <path d="M20 8.5L14.5 12 20 15.5l3-3.5-3-3.5z" fill="#FF8C00"/>
          </svg>
          <span style="font-size:0.72rem; font-weight:700; color:#34a853; margin-left:4px;">In-App</span>
        </div>

        <!-- BITCOIN -->
        <div class="pay-badge" title="Bitcoin (BTC)" style="background:#1a1000; border-color:rgba(247,147,26,0.4);">
          <svg viewBox="0 0 24 24" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="Bitcoin">
            <path fill="#F7931A" d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.32.015.02-.96-.24-.96-.24L4.03 15.65l1.75.44-.54 2.166 1.32.33.54-2.166c.36.1.705.19 1.05.273l-.54 2.154 1.32.33.54-2.165c2.21.42 3.88.252 4.58-1.747.57-1.635-.03-2.58-1.217-3.195.854-.193 1.5-.76 1.68-1.93h-.007zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.09z"/>
          </svg>
          <span style="font-size:0.72rem; font-weight:700; color:#F7931A; margin-left:3px;">BTC</span>
        </div>

        <!-- ETHEREUM -->
        <div class="pay-badge" title="Ethereum (ETH)" style="background:#0d0f1a; border-color:rgba(98,126,234,0.4);">
          <svg viewBox="0 0 24 24" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="Ethereum">
            <path fill="#627EEA" d="M12 1.75l-6.25 10.5L12 15.5l6.25-3.25L12 1.75z"/>
            <path fill="#C0CBF6" d="M5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z"/>
          </svg>
          <span style="font-size:0.72rem; font-weight:700; color:#627EEA; margin-left:3px;">ETH</span>
        </div>

        <!-- USDT -->
        <div class="pay-badge" title="Tether (USDT)" style="background:#0a1a14; border-color:rgba(38,161,123,0.4);">
          <svg viewBox="0 0 24 24" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="Tether USDT">
            <circle cx="12" cy="12" r="11" fill="#26A17B"/>
            <path fill="#ffffff" d="M13.4 10.1V8.5h3.4V6.5H7.2v2h3.4v1.6C7.2 10.3 5 11 5 12s2.2 1.7 5.6 1.9V18h2.8v-4.1c3.4-.2 5.6-.9 5.6-1.9s-2.2-1.7-5.6-1.9zm0 3.1v.1c-.4.1-.9.1-1.4.1s-1 0-1.4-.1v-.1c-2.8-.1-4.9-.6-4.9-1.2s2.1-1.1 4.9-1.2v1.6h2.8V11c2.8.1 4.9.6 4.9 1.2s-2.1 1.1-4.9 1.2v-.2z"/>
          </svg>
          <span style="font-size:0.72rem; font-weight:700; color:#26A17B; margin-left:3px;">USDT</span>
        </div>

        <!-- SOLANA -->
        <div class="pay-badge" title="Solana (SOL)" style="background:#0d0920; border-color:rgba(153,69,255,0.4);">
          <svg viewBox="0 0 24 24" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="Solana">
            <defs>
              <linearGradient id="sol1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#9945FF"/><stop offset="100%" style="stop-color:#14F195"/></linearGradient>
            </defs>
            <path fill="url(#sol1)" d="M4 16.5h13.5l2.5-3H6.5L4 16.5zM4 10.5h13.5l2.5-3H6.5L4 10.5zM6.5 7.5h13.5L17.5 4.5H4L6.5 7.5z"/>
          </svg>
          <span style="font-size:0.72rem; font-weight:700; color:#9945FF; margin-left:3px;">SOL</span>
        </div>

      </div>

      <!-- Trust & Security Seals -->
      <div style="display:flex; justify-content:center; align-items:center; gap:18px; flex-wrap:wrap; font-size:0.76rem; color:var(--text-muted); margin-bottom:1.5rem;">
        <span style="display:flex; align-items:center; gap:5px;">
          <svg viewBox="0 0 20 20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L4 5v5c0 4 2.7 7.4 6 8.9C13.3 17.4 16 14 16 10V5L10 2z" fill="#C6FF00" fill-opacity="0.8"/></svg>
          <strong style="color:#C6FF00;">256-Bit SSL</strong> Encrypted
        </span>
        <span style="color:var(--border);">|</span>
        <span style="display:flex; align-items:center; gap:5px;">
          <svg viewBox="0 0 20 20" height="14" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" fill="none" stroke="#C6FF00" stroke-width="1.5" stroke-opacity="0.7"/><path d="M6 10l3 3 5-5" stroke="#C6FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <strong style="color:#C6FF00;">PCI-DSS</strong> Level 1
        </span>
        <span style="color:var(--border);">|</span>
        <span style="display:flex; align-items:center; gap:5px;">
          <svg viewBox="0 0 20 20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v16M2 10h16" stroke="#C6FF00" stroke-width="2" stroke-opacity="0.7" stroke-linecap="round"/></svg>
          <strong style="color:#C6FF00;">Instant</strong> Key Delivery
        </span>
        <span style="color:var(--border);">|</span>
        <span style="display:flex; align-items:center; gap:5px;">
          <svg viewBox="0 0 20 20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 10c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" fill="none" stroke="#C6FF00" stroke-opacity="0.7" stroke-width="1.5"/><circle cx="10" cy="10" r="2" fill="#C6FF00" fill-opacity="0.7"/></svg>
          <strong style="color:#C6FF00;">Zero-Logs</strong> Verified
        </span>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© 2026 ZVPN Network. All rights reserved. &bull; 24/7 Support: <a href="mailto:itsbaask@gmail.com" style="color:var(--accent); font-weight:700;">itsbaask@gmail.com</a></div>
      <div>Edge Protected by Cloudflare · Encrypted by WebCrypto</div>
    </div>
  </div>
</footer>

<script>
var currentUser = null;

// ── ZVPN Autonomous Shield: Anti-Copy, Anti-DevTools & Stealth Download Engine ──
(function initZvpnShield() {
  'use strict';

  // 1. Disable Right-Click Context Menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Disable Key Combinations (F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I/J/C)
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123 || e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+Shift+I / J / C (DevTools inspector)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67 || e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && (e.keyCode === 85 || e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+S (Save Page)
    if (e.ctrlKey && (e.keyCode === 83 || e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 3. Disable Dragging of Assets / Images
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });

  // 4. Disable Selection Copying (except code/inputs)
  document.addEventListener('copy', function(e) {
    var active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.id === 'cli-cmd-display')) {
      return; // allow copy in terminal / license input
    }
    e.preventDefault();
  });

  // 5. Console Scrambler
  setInterval(function() {
    try {
      console.clear();
      console.log("%c[ZVPN ACTIVE SECURITY DEFENSE]", "color:#C6FF00;font-size:22px;font-weight:900;text-shadow:0 0 10px rgba(198,255,0,0.5);");
      console.log("%cUnauthorized source extraction, decompilation, or scraping is strictly blocked by Cloudflare Edge Protection.", "color:#ff5555;font-size:12px;font-weight:700;");
    } catch (_) {}
  }, 3000);
})();

// Stealth Download Engine (Zero Hover URL Exposure)
function triggerDownload(target) {
  var dlMap = {
    windows:  '/dl/windows',
    android:  '/dl/android',
    apk:      '/dl/android',
    chrome:   '/dl/chrome',
    mac:      '/dl/mac',
    linux:    '/dl/linux',
    deb:      '/dl/linux',
    appimage: 'https://gitlab.com/api/v4/projects/88705469/packages/generic/zvpn/1.0.4/ZVPN-1.0.4-linux-x86_64.tar.gz'
  };
  var targetUrl = dlMap[target] || ('/dl/' + target);
  var hiddenAnchor = document.createElement('a');
  hiddenAnchor.style.display = 'none';
  hiddenAnchor.href = targetUrl;
  hiddenAnchor.setAttribute('download', '');
  document.body.appendChild(hiddenAnchor);
  hiddenAnchor.click();
  setTimeout(function() {
    try { document.body.removeChild(hiddenAnchor); } catch (_) {}
  }, 100);
}

function openExternalLink(target) {
  var extMap = {
    gplay: 'https://play.google.com/store/apps/details?id=com.zvpn',
    cstore: 'https://chrome.google.com/webstore',
    nowpayments: 'https://nowpayments.io/donation?api_key=d234f3fd-94b7-4fb5-b39f-47690aa35202'
  };
  var url = extMap[target];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

// Fetch latest release info and populate download links
(function syncReleases() {
  fetch('/api/v1/releases/latest')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var ver = data.version || '1.0.4';
      var f   = data.files || {};

      var badge = document.getElementById('dl-version-badge');
      if (badge) badge.textContent = 'v' + ver;

      var bindDl = function(id, url) {
        var el = document.getElementById(id);
        if (!el || !url || url === '#') return;
        el.onclick = function() {
          var a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.setAttribute('download', '');
          document.body.appendChild(a);
          a.click();
          setTimeout(function() { try { document.body.removeChild(a); } catch(_) {} }, 100);
        };
      };
      bindDl('dl-link-win',      f.windows);
      bindDl('dl-link-deb',      f.linux_deb);
      bindDl('dl-link-appimage', f.linux_appimage);
      bindDl('dl-link-mac',      f.macos);
      bindDl('dl-link-apk',      f.android);

      var setVer = function(id) {
        var el = document.getElementById(id);
        if (el) el.textContent = 'v' + ver;
      };
      ['dl-ver-win','dl-ver-linux','dl-ver-mac','dl-ver-apk'].forEach(setVer);
    })
    .catch(function() {
      var badge = document.getElementById('dl-version-badge');
      if (badge) badge.textContent = 'v1.0.4';
    });
})();

// Multilingual Translations Dictionary
const I18N = {
  "en": {
    "nav_protocols": "Protocols",
    "nav_gaming": "Gaming",
    "nav_configs": "Server Hub (16k+)",
    "nav_economy": "Free Points",
    "nav_pricing": "Pricing",
    "nav_downloads": "Downloads",
    "nav_activate": "Activate Key",
    "nav_donate": "Support",
    "hub_badge": "⚡ DIRECT CONFIG PROFILES (.OVPN / WIREGUARD)",
    "hub_title": "Download High-Speed Server Configs",
    "hub_sub": "Download standalone profiles for OpenVPN, WireGuard, and VLESS clients. Unlock instantly using 5 reward points or watch a quick sponsor ad.",
    "hub_open_all": "Explore All 16,000+ Servers in Dedicated Server Hub →",
    "modal_cfg_desc": "Choose how you want to unlock this high-speed encrypted configuration file:",
    "btn_get_zvpn": "Get ZVPN",
    "hero_badge": "${serversFormatted}+ Edge Nodes Active",
    "hero_title": "Total Digital Immunity. <br><span class='highlight'>Zero Logs. Guaranteed.</span>",
    "hero_sub": "Enterprise-grade stealth tunneling powered by Tor Onion, VLESS Reality, and Hysteria 2. Ultra-low ping esports routing with our revolutionary zero-fee points economy.",
    "hero_cta_buy": "Buy Instant License",
    "hero_cta_explore": "Explore Tech Stack",
    "hero_cta_activate": "Activate License Key",
    "stat_servers_lbl": "Global Edge Servers",
    "stat_countries_lbl": "Countries Covered",
    "stat_speed_lbl": "Server Port Uplink",
    "stat_latency_lbl": "Average Gaming Latency",
    "lic_issued_title": "Your ZVPN Lifetime / Subscription License Key",
    "lic_issued_sub": "Copy this key and enter it inside the ZVPN Android or Desktop App to unlock unlimited VIP access.",
    "lic_btn_copy": "Copy License Key",
    "lic_btn_verify": "Verify License Status",
    "demo_badge": "Hardware WebCrypto Engine",
    "demo_title": "Type Any Text. Watch Live Hardware AES-256 Encryption.",
    "demo_sub": "Your browser generates an ephemeral 256-bit AES key in isolated WebCrypto memory and encrypts your keystrokes in real time.",
    "demo_raw_lbl": "Plaintext (Exposed to ISP / Snoopers)",
    "demo_enc_lbl": "Sealed Ciphertext (AES-256-GCM + Random IV)",
    "proto_badge": "Unstoppable Infrastructure",
    "proto_title": "Censorship-Proof Next-Gen Protocols",
    "proto_sub": "Standard VPN protocols get blocked by modern Deep Packet Inspection (DPI). ZVPN utilizes advanced cloaking, multi-hop cascades, and kernel-speed cryptography.",
    "proto_vless_title": "VLESS XTLS Reality &amp; Vision",
    "proto_vless_desc": "Camouflages VPN traffic as legitimate TLS 1.3 handshakes to major global targets without CDN latency. Immune to state-level Deep Packet Inspection.",
    "proto_hy2_title": "Hysteria 2 &amp; TUIC (Brutal QUIC)",
    "proto_hy2_desc": "UDP-based custom congestion control. Eliminates ISP throttling and sustains 4K streams on up to 30% packet loss.",
    "proto_tor_title": "Tor Onion Multi-Hop Circuit",
    "proto_tor_desc": "Routes encrypted traffic through three decentralized volunteer nodes. Unlocks .onion hidden services with ultimate identity shielding.",
    "proto_wg_title": "WireGuard &amp; AmneziaWG",
    "proto_wg_desc": "State-of-the-art ChaCha20-Poly1305 cryptography running at kernel speeds. Modified header padding prevents pattern recognition.",
    "proto_vmess_title": "VMess &amp; Trojan (gRPC / WebSocket)",
    "proto_vmess_desc": "Multiplexed encrypted tunnels disguised behind WebSocket and gRPC CDN pipes with automated multi-fallback routing.",
    "proto_ss_title": "Shadowsocks &amp; Shadowsocks-2022",
    "proto_ss_desc": "Ultra-fast AEAD cryptographic proxy optimized for extreme throughput and negligible CPU overhead, fully compliant with the modern SS-2022 specification.",
    "proto_psiphon_title": "Psiphon &amp; DNS Tunnel (DNSTT)",
    "proto_psiphon_desc": "Emergency anti-censorship protocols routing data over port 53 DNS queries when firewalls cut off all standard VPN ports.",
    "proto_openconnect_title": "OpenConnect &amp; Cisco AnyConnect",
    "proto_openconnect_desc": "Enterprise SSL VPN protocol with full hardware token authentication, custom client certs, and institutional firewall traversal.",
    "proto_openvpn_title": "OpenVPN (.ovpn) &amp; IKEv2 / IPsec",
    "proto_openvpn_desc": "Battle-tested OpenVPN over TCP/UDP and hardware-accelerated IKEv2/IPsec for instantaneous handover on mobile and cellular networks.",
    "proto_chain_title": "Proxy Chains &amp; Multi-Hop Routing",
    "proto_chain_desc": "Cascade connection hops across multiple protocols and countries consecutively (e.g. WireGuard to Tor to VLESS exit).",
    "game_badge": "Esports Low-Latency Routing",
    "game_title": "Pro Gaming Mode: Zero Bufferbloat & Locked Pings",
    "game_sub": "Engineered specifically for competitive gamers. Bypasses routing hops, enforces Dynamic MTU (1380 on Mobile / 1420 on Wi-Fi), and prioritizes game UDP packets.",
    "game_f1": "<b>UDP Direct Fast-Path:</b> Bypasses userspace overhead for instantaneous hit registration in FPS games.",
    "game_f2": "<b>Dynamic MTU Auto-Tuning:</b> Prevents packet fragmentation on mobile 5G/LTE and Wi-Fi networks.",
    "game_f3": "<b>Anti-Bufferbloat Jitter Minimizer:</b> Smooths out packet variance to eliminate game micro-stutters.",
    "game_f4": "<b>Full Support For 18+ Titles:</b> Valorant, PUBG, CS2, Warzone, Fortnite, FreeFire, Roblox, LoL, Apex, FIFA, and more.",
    "eco_badge": "100% Free Forever Option",
    "eco_title": "No Money? No Problem. Earn Free Points!",
    "eco_sub": "We believe privacy is a fundamental human right. Use ZVPN completely free by earning non-expiring server points in the app.",
    "eco_ad_title": "Watch Reward Videos",
    "eco_ad_desc": "Watch short sponsor clips inside the app. Each completed video grants instant points to power your VPN sessions.",
    "eco_streak_title": "Daily Login Streaks",
    "eco_streak_desc": "Open the app daily to compound your streak. Earn increasing rewards up to 50 points every single day.",
    "eco_ref_title": "Viral Invite Referrals",
    "eco_ref_desc": "Share your personal referral code with friends. Both of you receive 50 bonus points immediately upon activation.",
    "price_badge": "Flexible Billing",
    "price_title": "Choose Your VIP Protection Plan",
    "price_sub": "All plans unlock 100% of our ${serversFormatted}+ servers, 18+ next-gen protocols, gaming mode, and unlimited devices with a 30-day money-back guarantee.",
    "plan_w_title": "Weekly Pro",
    "plan_w_desc": "Short-term high speed trial. Ideal for travel or events.",
    "plan_w_sub": "Billed every 7 days",
    "plan_m_title": "Monthly VIP",
    "plan_m_desc": "Full flexibility without long-term commitment.",
    "plan_m_sub": "Was $9.99 — Save 20%",
    "plan_y_title": "Yearly Ultimate",
    "plan_y_desc": "Our flagship tier for serious privacy & pro esports.",
    "plan_y_sub": "Equivalent to just $3.33/month",
    "plan_best_tag": "Most Popular · Save 58%",
    "plan_yp_title": "Yearly Plus (Family)",
    "plan_yp_desc": "Designed for entire families and power users.",
    "plan_yp_sub": "Includes 5 Dedicated License Keys",
    "feat_all_servers": "All ${serversFormatted}+ Global Servers",
    "feat_unlimited": "Unlimited High-Speed Data",
    "feat_gaming": "Esports Low-Latency Gaming Mode",
    "feat_vless": "18+ Protocols: VLESS, Hy2, WireGuard",
    "feat_devices": "Unlimited Simultaneous Devices",
    "feat_tor": "Tor Multi-Hop & 18+ Protocol Cloaking",
    "feat_support": "24/7 Priority Support",
    "feat_gaming_vip": "VIP Low-Latency Gaming Clusters",
    "feat_tor_full": "Full 18+ Suite: VLESS, Hy2, TUIC, Tor, WG",
    "feat_adblock": "Proxy Chains & In-App Browser AdBlock",
    "feat_guarantee": "30-Day Money-Back Guarantee",
    "feat_family": "5 Independent Sub-Licenses",
    "feat_amnezia": "AmneziaWG + Full 18+ Protocols for All 5 Users",
    "feat_audit": "Zero-Logs Cryptographic Guarantee",
    "btn_choose": "Choose Plan",
    "btn_get_yearly": "Get Yearly Ultimate",
    "packs_title": "Need On-Demand Server Points Instead?",
    "packs_sub": "Buy non-expiring point balances without recurring subscriptions. Use them anytime to unlock top-tier servers.",
    "btn_buy_pts": "Buy Points",
    "act_badge": "License Portal",
    "act_title": "Verify or Activate Your License Key",
    "act_sub": "Already purchased on the web or received a key from a reseller? Check your plan expiration and points status here.",
    "btn_verify_key": "Verify Key",
    "dl_badge": "Multi-Platform",
    "dl_title": "Download ZVPN Client",
    "dl_sub": "Production stable for Android with one-tap connection. Desktop clients are in public beta.",
    "btn_dl_android": "Download Android APK",
    "modal_sub": "Select your preferred payment gateway to receive your license key instantly.",
    "form_email_lbl": "Email Address (to receive license receipt):",
    "form_account_lbl": "ZVPN Account ID or Device ID (Optional):",
    "summary_total": "Total Due:",
    "modal_security_notice": "256-bit SSL encrypted checkout. No sensitive card data touches our servers.",
    "nav_signin": "Sign In",
    "login_title": "Sign in with Google",
    "login_sub": "Sign in to sync points across Android and PC, view active licenses, claim daily login bonuses, and manage your subscriptions.",
    "login_guarantee": "100% Encrypted & Zero-Knowledge. We never request or store sensitive passwords.",
    "acc_id_lbl": "Account ID:",
    "acc_pts_lbl": "Point Balance",
    "acc_pts_note": "Never Expiring",
    "btn_watch_ad_pts": "Watch Ad (+10 Pts)",
    "watch_ad_pts_txt": "Watch Ad (+10 Pts)",
    "win_smartscreen_tip": "🛡️ Windows SmartScreen? Click <b>More info</b> ➔ <b>Run anyway</b>",
    "acc_streak_lbl": "Daily Streak",
    "acc_tier_lbl": "Active Tier",
    "acc_ref_lbl": "Your Referral Code (+50 Pts each):",
    "acc_my_keys_title": "My License Keys (for Desktop & Android)",
    "acc_redeem_title": "Have a License Key? Bind to this Account:",
    "btn_claim_streak": "Claim Bonus",
    "btn_signout": "Sign Out",
    "btn_upgrade_account": "Upgrade Plan",
    "btn_copy": "Copy",
    "btn_redeem": "Redeem",
    "login_or_alt": "OR ACCESS VIA ACCOUNT / KEY",
    "btn_access": "Open",
    "donate_badge": "COMMUNITY FUND",
    "donate_title": "Support &amp; Fund ZVPN Infrastructure",
    "donate_sub": "Help fund our high-speed server bandwidth, VLESS Reality cloaking nodes, and zero-logs open privacy network. You can support our project directly via any of these cryptocurrency addresses:",
    "btn_copy_addr": "Copy Address",
    "btn_show_qr": "QR Code",
    "donate_footer_note": "All crypto donations directly fund server uplinks and censorship-proof tunneling infrastructure. Thank you for your support!",
    "legal_title": "ZVPN Strict Privacy Policy & Terms"
  },
  "ar": {
    "nav_protocols": "البروتوكولات",
    "nav_gaming": "الألعاب",
    "nav_configs": "منصة السيرفرات (16 ألف+)",
    "nav_economy": "نقاط مجانية",
    "nav_pricing": "الأسعار",
    "nav_downloads": "التحميل",
    "nav_activate": "تفعيل الترخيص",
    "nav_donate": "دعم وتبرع",
    "hub_badge": "<svg class='cyber-svg-icon' width='13' height='13' viewBox='0 0 24 24' fill='currentColor'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/></svg> تحميل ملفات السيرفرات المباشرة (.OVPN / WIREGUARD)",
    "hub_title": "تحميل ملفات تكوين وإعدادات السيرفرات فائقة السرعة",
    "hub_sub": "حمّل ملفات وإعدادات جاهزة لبرامج OpenVPN و WireGuard و VLESS. فك القفل فوراً برصيد 5 نقاط أو بمشاهدة إعلان راعي سريع.",
    "hub_open_all": "تصفح جميع السيرفرات (أكثر من 16,000 سيرفر) في منصة الخوادم ←",
    "modal_cfg_desc": "اختر طريقة فك قفل وتحميل ملف التكوين المشفر فائق السرعة:",
    "btn_get_zvpn": "ابدأ الآن",
    "hero_badge": "أكثر من ${serversFormatted} خادم نشط",
    "hero_title": "حصانة رقمية مطلقة. <br><span class='highlight'>بدون سجلات إطلاقاً.</span>",
    "hero_sub": "أنفاق تشفير فائقة التخفي مدعومة بشبكة Tor Onion، وVLESS Reality، وHysteria 2. توجيه فائق السرعة للألعاب الإلكترونية مع نظام نقاط مجاني بالكامل بدون دفع سنت واحد.",
    "hero_cta_buy": "شراء ترخيص فوري",
    "hero_cta_explore": "استكشف التقنيات",
    "hero_cta_activate": "تفعيل مفتاح الترخيص",
    "stat_servers_lbl": "خوادم عالمية فائقة السرعة",
    "stat_countries_lbl": "دولة حول العالم",
    "stat_speed_lbl": "سرعة منافذ الخوادم",
    "stat_latency_lbl": "متوسط بنج الألعاب (Ping)",
    "lic_issued_title": "مفتاح ترخيص ZVPN الخاص بك",
    "lic_issued_sub": "انسخ هذا المفتاح وأدخله في تطبيق ZVPN على أندرويد أو الكمبيوتر لفتح وصول VIP غير المحدود فوراً.",
    "lic_btn_copy": "نسخ مفتاح الترخيص",
    "lic_btn_verify": "التحقق من حالة الترخيص",
    "demo_badge": "محرك WebCrypto المادي الحقيقي",
    "demo_title": "اكتب أي نص وشاهد التشفير العتادي الحي بتقنية AES-256.",
    "demo_sub": "يقوم متصفحك بتوليد مفتاح AES بحجم 256 بت في ذاكرة مشفرة معزولة، ويشفر كتابتك لحظة بلحظة.",
    "demo_raw_lbl": "النص العادي (مكشوف لشركات الاتصالات والمتلصصين)",
    "demo_enc_lbl": "النص المشفر بالكامل (AES-256-GCM + IV عشوائي)",
    "proto_badge": "بنية تحتية لا يمكن حجبها",
    "proto_title": "بروتوكولات الجيل القادم المقاومة للرقابة",
    "proto_sub": "البروتوكولات التقليدية يتم حجبها بسهولة بواسطة أنظمة التفتيش العميق (DPI). يستخدم ZVPN تقنيات تمويه متطورة، وسلاسل قفز مزدوج، وتشفير فائق بسرعة النواة.",
    "proto_vless_title": "بروتوكول VLESS XTLS Reality و Vision",
    "proto_vless_desc": "يموه اتصال VPN ليظهر كأنه تصفح عادي عبر TLS 1.3 لكبرى المواقع العالمية، مما يجعله محصناً ضد أقوى جدران الحماية والتفتيش العميق (DPI).",
    "proto_hy2_title": "بروتوكول Hysteria 2 و TUIC (QUIC)",
    "proto_hy2_desc": "توجيه فائق الحداثة عبر UDP و QUIC مع تحكم هجومي في الازدحام. يتغلب على خنق مزودي الإنترنت ويبث بدقة 4K حتى مع فقدان 30% من الحزم.",
    "proto_tor_title": "توجيه Tor Onion ثلاثي الطبقات",
    "proto_tor_desc": "يمرر البيانات عبر ثلاث عقد لا مركزية عالمية تعزل هوية الدخول والخروج. يتيح تصفح خدمات .onion المظلمة مع حجب جغرافي لا يمكن تعقبه.",
    "proto_wg_title": "بروتوكول WireGuard و AmneziaWG",
    "proto_wg_desc": "تشفير فائق السرعة عبر ChaCha20-Poly1305 بسرعة النواة، مدمج مع حزم AmneziaWG العشوائية لإلغاء بصمات البروتوكول وتفادي الحجب.",
    "proto_vmess_title": "بروتوكول VMess و Trojan (gRPC)",
    "proto_vmess_desc": "أنفاق مشفرة متعددة المسارات عبر مسارات WebSocket و gRPC و HTTP/2 لتمويه الحركة كحركة بيانات سحابية عادية مع توجيه احتياطي ذكي.",
    "proto_ss_title": "بروتوكول Shadowsocks و SS-2022",
    "proto_ss_desc": "بروكسي مشفر خفيف وسريع للغاية بفضل خوارزميات AEAD الحديثة ومعيار Shadowsocks-2022 المطور لاستهلاك موارد منخفض وسرعة قياسية.",
    "proto_psiphon_title": "بروتوكول Psiphon ونفق DNS (SlowDNS)",
    "proto_psiphon_desc": "بروتوكولات طوارئ تتجاوز أعتى جدران العزل عبر تحويل البيانات إلى استعلامات DNS (SlowDNS/DNSTT) على المنفذ 53 عند حجب كافة المنافذ.",
    "proto_openconnect_title": "بروتوكول OpenConnect و Cisco AnyConnect",
    "proto_openconnect_desc": "بروتوكول الشركات المعتمد SSL VPN المتوافق مع بوابات Cisco AnyConnect ودعم المصادقة المزدوجة لتجاوز الشبكات المقيدة والمؤسسية.",
    "proto_openvpn_title": "بروتوكول OpenVPN و IKEv2 / IPsec",
    "proto_openvpn_desc": "بروتوكول OpenVPN العريق عبر منافذ TCP/UDP مدعوماً بـ IKEv2/IPsec عالي الكفاءة في التنقل السلس بين شبكات الجوال والواي فاي.",
    "proto_chain_title": "سلاسل البروكسي والقفز المزدوج (Chains)",
    "proto_chain_desc": "تقنية التوجيه المتسلسل المتقدمة: تمرير اتصالك عبر بروتوكولات وخوادم متعددة في دول مختلفة تباعاً قبل الوصول للإنترنت لمضاعفة التخفي.",
    "game_badge": "توجيه Esports منخفض البنج",
    "game_title": "وضع الألعاب الاحترافي: بنج ثابت وبدون تقطيع",
    "game_sub": "مصمم خصيصاً لعشاق الألعاب التنافسية. يتجاوز قفزات التوجيه غير الضرورية، ويضبط الـ MTU ديناميكياً (1380 على شبكات الجوال / 1420 على الواي فاي).",
    "game_f1": "<b>مسار UDP المباشر:</b> يتجاوز تأخيرات النظام لتسجيل فوري لضربات الرصاص في ألعاب التصويب.",
    "game_f2": "<b>الضبط التلقائي لـ MTU:</b> يمنع تجزئة الحزم في شبكات 5G/4G وشبكات الواي فاي المنزلية.",
    "game_f3": "<b>تقليل الارتعاش والتذبذب (Jitter):</b> يثبت تدفق البيانات لإلغاء أي لاج مفاجئ أو تجميد في الألعاب.",
    "game_f4": "<b>دعم كامل لأكثر من 18 لعبة:</b> ببجي، فالورانت، فورتنايت، كول أوف ديوتي، فري فاير، روبلوكس، ليج، أبيكس، فيفا، وغيرها.",
    "eco_badge": "خيار مجاني 100% مدى الحياة",
    "eco_title": "لا تملك المال؟ اكسب نقاطك مجاناً واستمتع بالخدمة!",
    "eco_sub": "نؤمن بأن الخصوصية حق أصيل لكل إنسان. استخدم ZVPN مجاناً بالكامل عبر تجميع النقاط اليومية التي لا تنتهي صلاحيتها أبداً.",
    "eco_ad_title": "مشاهدة إعلانات المكافآت",
    "eco_ad_desc": "شاهد مقاطع فيديو قصيرة داخل التطبيق، واحصل فوراً على نقاط تشحن بها ساعات اتصالك بالخوادم المميزة.",
    "eco_streak_title": "مكافأة الدخول اليومي المتتالي",
    "eco_streak_desc": "افتح التطبيق يومياً لمضاعفة حوافزك. اربح ما يصل إلى 50 نقطة كل يوم مجاناً.",
    "eco_ref_title": "دعوة الأصدقاء الفيروسية",
    "eco_ref_desc": "شارك كود الإحالة الخاص بك مع أصدقائك. ستحصل أنت وصديقك على 50 نقطة مكافأة فورية عند التفعيل.",
    "price_badge": "خطط دفع مرنة",
    "price_title": "اختر باقة حماية الـ VIP المناسبة لك",
    "price_sub": "جميع الباقات تتيح لك الوصول الكامل لـ ${serversFormatted}+ خادم، وأكثر من 18 بروتوكولاً فائق التخفي، ووضع الألعاب، بدون قيود ومع ضمان استرجاع 30 يوماً.",
    "plan_w_title": "الأسبوعي Pro",
    "plan_w_desc": "تجربة سريعة عالية الأداء، مثالية للسفر أو المناسبات الخاصة.",
    "plan_w_sub": "تُجدد كل 7 أيام",
    "plan_m_title": "الشهري VIP",
    "plan_m_desc": "مرونة كاملة وبدون أي التزامات سنوية طويلة الأجل.",
    "plan_m_sub": "كانت $9.99 — وفر 20%",
    "plan_y_title": "السنوي Ultimate",
    "plan_y_desc": "الباقة الملكية الأكثر طلباً للأمان المطلق ولاعبي الألعاب المحترفين.",
    "plan_y_sub": "ما يعادل 3.33$ شهرياً فقط!",
    "plan_best_tag": "الأكثر طلباً · وفر 58%",
    "plan_yp_title": "السنوي العائلي Plus",
    "plan_yp_desc": "مخصصة للعائلات وفرق العمل والمستخدمين المتقدمين.",
    "plan_yp_sub": "تتضمن 5 مفاتيح ترخيص مستقلة",
    "feat_all_servers": "أكثر من ${serversFormatted} خادم عالمي فائق السرعة",
    "feat_unlimited": "بيانات وتدفق فائق السرعة بدون أي حدود",
    "feat_gaming": "وضع الألعاب الاحترافي Esports وبنج منخفض",
    "feat_vless": "كافة البروتوكولات: VLESS Reality و Hy2 و WireGuard و 18+ نفقاً",
    "feat_devices": "أجهزة متزامنة غير محدودة",
    "feat_tor": "توجيه Tor Onion المزدوج وتمويه كامل ضد الـ DPI",
    "feat_support": "دعم فني مباشر على مدار الساعة",
    "feat_gaming_vip": "مجموعات خوادم VIP فائقة القرب للألعاب",
    "feat_tor_full": "الترسانة الكاملة: VLESS Reality + Hy2 + WireGuard + Tor",
    "feat_adblock": "سلاسل البروكسي المزدوجة + مانع إعلانات المتصفح",
    "feat_guarantee": "ضمان استرداد الأموال لمدة 30 يوماً",
    "feat_family": "5 تراخيص وحسابات مستقلة للعائلة",
    "feat_amnezia": "الوصول لكافة الـ 18+ بروتوكولاً لجميع الحسابات الـ 5",
    "feat_audit": "حزم AmneziaWG للتمويه الكامل وتعهد عدم السجلات",
    "btn_choose": "اختر الباقة",
    "btn_get_yearly": "احصل على السنوي Ultimate",
    "packs_title": "هل تفضل شحن رصيد نقاط فقط بدون اشتراك؟",
    "packs_sub": "اشترِ باقات نقاط رصيد لا تنتهي صلاحيتها أبداً بدون دفعات شهرية متكررة، واستخدمها وقتما تشاء.",
    "btn_buy_pts": "شراء النقاط",
    "act_badge": "بوابة التراخيص",
    "act_title": "التحقق من ترخيصك أو تفعيله",
    "act_sub": "هل قمت بالشراء مسبقاً أو تملك مفتاحاً؟ أدخل مفتاحك هنا للاطلاع على صلاحيته ورصيد النقاط.",
    "btn_verify_key": "تحقق من المفتاح",
    "dl_badge": "متعدد المنصات",
    "dl_title": "تحميل تطبيق ZVPN",
    "dl_sub": "الإصدار الرسمي المستقر متاح الآن للأندرويد بنقرة واحدة. تطبيقات الكمبيوتر في مرحلة تجريبية عامة.",
    "btn_dl_android": "تحميل ملف أندرويد (APK)",
    "modal_sub": "اختر وسيلة الدفع المفضلة لديك لاستلام مفتاح الترخيص الفوري الآن.",
    "form_email_lbl": "البريد الإلكتروني (لاستلام إيصال وبيانات الترخيص):",
    "form_account_lbl": "معرف الحساب أو الجهاز في تطبيق ZVPN (اختياري):",
    "summary_total": "الإجمالي المستحق:",
    "modal_security_notice": "اتصال مشفر 256-bit SSL آمن بالكامل. لا نقوم بتخزين أي بيانات بنكية.",
    "nav_signin": "تسجيل الدخول",
    "login_title": "تسجيل الدخول باستخدام جوجل",
    "login_sub": "سجل دخولك لمزامنة نقاطك بين الأندرويد والكمبيوتر، وعرض مفاتيح اشتراكاتك، والحصول على مكافآت الدخول اليومي.",
    "login_guarantee": "تشفير كامل 100% بدون أي سجلات. لا نطلب ولا نخزن أي كلمات مرور حساسة.",
    "acc_id_lbl": "معرف الحساب:",
    "acc_pts_lbl": "رصيد النقاط",
    "acc_pts_note": "صلاحية دائمة لا تنتهي",
    "btn_watch_ad_pts": "مشاهدة إعلان (+10 نقاط)",
    "watch_ad_pts_txt": "مشاهدة إعلان (+10 نقاط)",
    "win_smartscreen_tip": "🛡️ تنبيه الحماية من ويندوز؟ اضغط <b>More info</b> ثم <b>Run anyway</b>",
    "acc_streak_lbl": "تسجيل الدخول المتتالي",
    "acc_tier_lbl": "الباقة النشطة",
    "acc_ref_lbl": "كود الإحالة الخاص بك (+50 نقطة لكل صديق):",
    "acc_my_keys_title": "مفاتيح التفعيل الخاصة بي (للأندرويد والكمبيوتر)",
    "acc_redeem_title": "لديك مفتاح ترخيص؟ اربطه بهذا الحساب:",
    "btn_claim_streak": "استلام المكافأة",
    "btn_signout": "تسجيل الخروج",
    "btn_upgrade_account": "ترقية الباقة",
    "btn_copy": "نسخ",
    "btn_redeem": "تفعيل الكود",
    "login_or_alt": "أو الدخول السريع عبر معرف الحساب أو كود الترخيص",
    "btn_access": "دخول",
    "donate_badge": "صندوق دعم المجتمع",
    "donate_title": "ساهم في دعم خوادم وتطوير شبكة ZVPN",
    "donate_sub": "ساعدنا في تمويل البنية التحتية، وسرعات الخوادم العالية، وخوادم VLESS Reality الخفية، وحماية الخصوصية للجميع بدون سجلات. يمكنك إرسال الدعم مباشرة إلى أي من عناوين العملات الرقمية التالية:",
    "btn_copy_addr": "نسخ العنوان",
    "btn_show_qr": "رمز الباركود (QR)",
    "donate_footer_note": "جميع التبرعات بالعملات الرقمية تذهب مباشرة لتغطية تكاليف الخوادم وتطوير شبكة التخفي ضد الرقابة. شكراً لدعمكم المستمر!",
    "legal_title": "سياسة الخصوصية الصارمة والشروط لـ ZVPN"
  },
  "es": {
    "nav_protocols": "Protocolos",
    "nav_gaming": "Gaming",
    "nav_economy": "Puntos Gratis",
    "nav_pricing": "Precios",
    "nav_downloads": "Descargas",
    "nav_activate": "Activar Clave",
    "nav_donate": "Donar",
    "btn_get_zvpn": "Comenzar",
    "hero_badge": "${serversFormatted}+ Nodos Activos",
    "hero_title": "Inmunidad Digital Total. <br><span class='highlight'>Cero Registros. Garantizado.</span>",
    "hero_sub": "Túneles de sigilo de nivel empresarial impulsados por Tor Onion, VLESS Reality y Hysteria 2. Enrutamiento de esports con latencia ultrabaja y economía de puntos sin costo.",
    "hero_cta_buy": "Comprar Licencia",
    "hero_cta_explore": "Ver Tecnologías",
    "hero_cta_activate": "Activar Licencia",
    "stat_servers_lbl": "Nodos de Alta Velocidad",
    "stat_countries_lbl": "Países y Regiones",
    "stat_speed_lbl": "Velocidad de Enlace",
    "stat_latency_lbl": "Latencia Esports (Ping)",
    "lic_issued_title": "Tu Clave de Licencia ZVPN",
    "lic_issued_sub": "Copia esta clave e ingrésala en la app ZVPN en Android o PC para desbloquear acceso VIP ilimitado de inmediato.",
    "lic_btn_copy": "Copiar Clave",
    "lic_btn_verify": "Verificar Estado",
    "demo_badge": "Motor WebCrypto en Tiempo Real",
    "demo_title": "Escribe y Observa el Cifrado AES-256",
    "demo_sub": "Prueba en vivo la criptografía de grado militar que protege cada paquete de datos antes de salir de tu dispositivo.",
    "demo_raw_lbl": "Texto Sin Formato",
    "demo_enc_lbl": "Cifrado AES-256-GCM",
    "proto_badge": "Pila de Protocolos",
    "proto_title": "Diseñado para Vencer Cualquier Cortafuegos",
    "proto_sub": "Supera la censura más estricta con protocolos resistentes a la inspección profunda de paquetes (DPI).",
    "proto_vless_title": "VLESS + XTLS Reality",
    "proto_vless_desc": "Imita el tráfico TLS legítimo hacia servidores populares, haciéndolo indistinguible del tráfico web normal.",
    "proto_hy2_title": "Hysteria 2 (UDP)",
    "proto_hy2_desc": "Protocolo basado en QUIC optimizado para conexiones inestables o con alta pérdida de paquetes.",
    "proto_tor_title": "Enrutamiento Onion Tor",
    "proto_tor_desc": "Túneles de triple salto con soporte para puentes Snowflake y obfs4.",
    "proto_wg_title": "WireGuard & AmneziaWG",
    "proto_wg_desc": "Rendimiento criptográfico moderno con encabezados ofuscados para prevenir el bloqueo por DPI.",
    "proto_vmess_title": "VMess & VLESS WS/gRPC",
    "proto_vmess_desc": "Diseñado para pasar a través de CDN globales como Cloudflare sin revelar la IP del servidor.",
    "proto_ss_title": "Shadowsocks 2022",
    "proto_ss_desc": "Estándar moderno de cifrado AEAD con soporte para plugins SIP003.",
    "proto_psiphon_title": "Túnel Psiphon Multicapa",
    "proto_psiphon_desc": "Red de conmutación por error automatizada que alterna entre SSH, OSSH y HTTP ofuscado.",
    "proto_openconnect_title": "OpenConnect AnyConnect",
    "proto_openconnect_desc": "Emulación SSL VPN de nivel corporativo para compatibilidad total con redes restringidas.",
    "proto_openvpn_title": "OpenVPN DCO",
    "proto_openvpn_desc": "Aceleración de desbordamiento en el kernel de Linux para máxima velocidad.",
    "proto_chain_title": "Cadenas de Proxy Multi-Salto",
    "proto_chain_desc": "Encadena múltiples protocolos para máxima redundancia y anonimato.",
    "game_badge": "Acelerador de Deportes Electrónicos",
    "game_title": "Latencia Ultrabaja para Gaming",
    "game_sub": "Enrutamiento de paquetes optimizado para gamers competitivos con afinidad de núcleo y búferes UDP dedicados.",
    "game_f1": "Priorización Kernel UDP",
    "game_f2": "Enrutamiento Directo a Servidores de Juegos",
    "game_f3": "Protección contra DDoS en Tiempo Real",
    "game_f4": "Telemetría de Ping y Jitter en Vivo",
    "eco_badge": "Economía Sin Costo",
    "eco_title": "Puntos Gratuitos Ilimitados",
    "eco_sub": "Disfruta de protección VPN de alta gama sin gastar un centavo acumulando puntos diarios.",
    "eco_ad_title": "Recompensas por Anuncios",
    "eco_ad_desc": "Mira anuncios opcionales y recibe 20 puntos por cada uno de inmediato.",
    "eco_streak_title": "Rachas Diarias",
    "eco_streak_desc": "Inicia sesión todos los días para multiplicar tus recompensas hasta 50 puntos diarios.",
    "eco_ref_title": "Programa de Referidos",
    "eco_ref_desc": "Invita a tus amigos y gana 50 puntos cada vez que uno use tu código.",
    "price_badge": "Planes Flexibles",
    "price_title": "Elige Tu Plan VIP",
    "price_sub": "Desbloquea todos los servidores, protocolos de última generación y velocidad ilimitada con garantía de 30 días.",
    "plan_w_title": "Semanal Pro",
    "plan_w_desc": "Prueba de alta velocidad a corto plazo. Ideal para viajes o eventos.",
    "plan_w_sub": "Facturado semanalmente",
    "plan_m_title": "Mensual VIP",
    "plan_m_desc": "La opción más popular para navegación segura y streaming diario.",
    "plan_m_sub": "Facturado mensualmente",
    "plan_y_title": "Anual Ultimate",
    "plan_y_desc": "El mejor valor para protección continua en todos tus dispositivos.",
    "plan_y_sub": "Facturado anualmente ($39.99/año)",
    "plan_best_tag": "Mejor Valor",
    "plan_yp_title": "Anual Plus Familiar",
    "plan_yp_desc": "Acceso total para toda la familia con soporte premium 24/7.",
    "plan_yp_sub": "Facturado anualmente ($59.99/año)",
    "feat_all_servers": "Acceso a 14,000+ Servidores Globales",
    "feat_unlimited": "Ancho de Banda y Velocidad Ilimitados",
    "feat_gaming": "Modo Gaming y Aceleración Esports",
    "feat_vless": "Protocolos VLESS, Hysteria 2 y WireGuard",
    "feat_devices": "Dispositivos Ilimitados Simultáneos",
    "feat_tor": "Puentes Tor y Enrutamiento Onion",
    "feat_support": "Soporte Técnico Prioritario 24/7",
    "feat_gaming_vip": "Servidores de Gaming VIP Dedicados",
    "feat_tor_full": "Modo Tor Completo con Puentes Snowflake",
    "feat_adblock": "Bloqueador de Anuncios y Rastreadores",
    "feat_guarantee": "Garantía de Devolución de 30 Días",
    "feat_family": "Hasta 10 Conexiones Familiares",
    "feat_amnezia": "Soporte Exclusivo AmneziaWG",
    "feat_audit": "Reporte Semanal de Seguridad Personalizado",
    "btn_choose": "Elegir Plan",
    "btn_get_yearly": "Obtener Plan Anual",
    "packs_title": "Paquetes de Puntos Adicionales",
    "packs_sub": "Recarga puntos al instante para desbloquear funciones avanzadas.",
    "btn_buy_pts": "Comprar Puntos",
    "act_badge": "Verificación Instantánea",
    "act_title": "Activar Clave de Licencia",
    "act_sub": "¿Compraste una clave o recibiste un código promocional? Ingrésalo aquí para verificarlo.",
    "btn_verify_key": "Verificar y Activar",
    "dl_badge": "Descarga Gratuita",
    "dl_title": "Descargar Z VPN",
    "dl_sub": "Disponible para todas las plataformas principales.",
    "btn_dl_android": "Descargar APK",
    "modal_sub": "Pago Seguro Cifrado de Extremo a Extremo",
    "form_email_lbl": "Correo Electrónico (para recibir la clave)",
    "form_account_lbl": "ID de Cuenta / Dispositivo (Opcional)",
    "summary_total": "Total a Pagar:",
    "Due": "Pago inmediato",
    "modal_security_notice": "Cifrado SSL de 256 bits. Licencia generada al instante tras la confirmación.",
    "nav_signin": "Iniciar Sesión",
    "login_title": "Accede a Tu Cuenta ZVPN",
    "login_sub": "Sincroniza tus licencias, puntos y favoritos en todos tus dispositivos.",
    "login_guarantee": "Privacidad garantizada bajo estricta política de cero registros.",
    "acc_id_lbl": "ID de Cuenta:",
    "ID": "ID",
    "acc_pts_lbl": "Balance de Puntos:",
    "acc_pts_note": "Usa puntos para conectar o desbloquear funciones exclusivas.",
    "acc_streak_lbl": "Racha Diaria:",
    "acc_tier_lbl": "Nivel de Membresía:",
    "acc_ref_lbl": "Código de Referido:",
    "acc_my_keys_title": "Mis Claves de Licencia:",
    "acc_redeem_title": "Canjear Código:",
    "Account": "Cuenta",
    "btn_claim_streak": "Reclamar Racha Diaria",
    "btn_signout": "Cerrar Sesión",
    "btn_upgrade_account": "Actualizar a VIP",
    "btn_copy": "Copiar",
    "btn_redeem": "Canjear",
    "login_or_alt": "O ACCEDE MEDIANTE CUENTA / CLAVE",
    "btn_access": "Acceder",
    "donate_badge": "Apoya la Red",
    "donate_title": "Donaciones en Criptomonedas",
    "donate_sub": "Tus donaciones financian directamente nuestros enlaces de servidores globales.",
    "addresses": "direcciones",
    "btn_copy_addr": "Copiar Dirección",
    "btn_show_qr": "Código QR",
    "donate_footer_note": "Todas las donaciones en criptomonedas se destinan al mantenimiento de la infraestructura.",
    "legal_title": "Política de Privacidad Estricta y Términos"
  },
  "fr": {
    "nav_protocols": "Protocoles",
    "nav_gaming": "Gaming",
    "nav_economy": "Points Gratuits",
    "nav_pricing": "Tarifs",
    "nav_downloads": "Téléchargements",
    "nav_activate": "Activer la Clé",
    "nav_donate": "Soutien",
    "btn_get_zvpn": "Commencer",
    "hero_badge": "${serversFormatted}+ Nœuds Actifs",
    "hero_title": "Immunité Numérique Totale. <br><span class='highlight'>Zéro Log. Garanti.</span>",
    "hero_sub": "Tunnels furtifs de niveau entreprise propulsés par Tor Onion, VLESS Reality et Hysteria 2. Routage esports ultra-rapide et système de points gratuit.",
    "hero_cta_buy": "Acheter une Licence",
    "hero_cta_explore": "Découvrir la Technologie",
    "hero_cta_activate": "Activer une Clé",
    "stat_servers_lbl": "Nœuds Haute Vitesse",
    "stat_countries_lbl": "Pays & Régions",
    "stat_speed_lbl": "Débit des Serveurs",
    "stat_latency_lbl": "Latence Esports (Ping)",
    "lic_issued_title": "Votre Clé de Licence ZVPN",
    "lic_issued_sub": "Copiez cette clé et collez-la dans l'application ZVPN sur Android ou PC pour débloquer l'accès VIP immédiat.",
    "lic_btn_copy": "Copier la Clé",
    "lic_btn_verify": "Vérifier le Statut",
    "demo_badge": "Moteur WebCrypto en Direct",
    "demo_title": "Tapez et Observez le Chiffrement AES-256",
    "demo_sub": "Testez en temps réel le chiffrement de niveau militaire qui protège chaque paquet avant de quitter votre appareil.",
    "demo_raw_lbl": "Texte Clair",
    "demo_enc_lbl": "Chiffré en AES-256-GCM",
    "proto_badge": "Protocoles Supportés",
    "proto_title": "Conçu pour Dépasser Tous les Pare-Feux",
    "proto_sub": "Contournez la censure la plus stricte grâce à des protocoles résistants à l'inspection approfondie (DPI).",
    "proto_vless_title": "VLESS + XTLS Reality",
    "proto_vless_desc": "Imite le trafic TLS vers des sites populaires, rendant votre connexion impossible à distinguer du trafic web ordinaire.",
    "proto_hy2_title": "Hysteria 2 (UDP)",
    "proto_hy2_desc": "Protocole basé sur QUIC optimisé pour les réseaux instables avec perte de paquets.",
    "proto_tor_title": "Routage en Oignon Tor",
    "proto_tor_desc": "Tunnels à triple saut avec prise en charge des ponts Snowflake et obfs4.",
    "proto_wg_title": "WireGuard & AmneziaWG",
    "proto_wg_desc": "Performances cryptographiques modernes avec en-têtes obfusqués contre le blocage DPI.",
    "proto_vmess_title": "VMess & VLESS WS/gRPC",
    "proto_vmess_desc": "Conçu pour traverser les CDN mondiaux comme Cloudflare sans exposer l'adresse réelle du serveur.",
    "proto_ss_title": "Shadowsocks 2022",
    "proto_ss_desc": "Standard moderne de chiffrement AEAD avec support complet des plugins SIP003.",
    "proto_psiphon_title": "Tunnel Multicouche Psiphon",
    "proto_psiphon_desc": "Système de basculement automatique entre SSH, OSSH et HTTP obfusqué.",
    "proto_openconnect_title": "OpenConnect AnyConnect",
    "proto_openconnect_desc": "Émulation SSL VPN d'entreprise pour une compatibilité parfaite sur réseaux stricts.",
    "proto_openvpn_title": "OpenVPN DCO",
    "proto_openvpn_desc": "Accélération matérielle dans le noyau Linux pour une vitesse de pointe.",
    "proto_chain_title": "Chaînes de Proxy Multi-Sauts",
    "proto_chain_desc": "Combinez plusieurs protocoles en cascade pour un anonymat maximal.",
    "game_badge": "Accélérateur Esports",
    "game_title": "Latence Ultra-Basse pour le Gaming",
    "game_sub": "Routage optimisé pour les joueurs compétitifs avec affinité processeur et tampons UDP dédiés.",
    "game_f1": "Priorité Kernel UDP",
    "game_f2": "Routage Direct Serveurs de Jeux",
    "game_f3": "Protection Anti-DDoS Temps Réel",
    "game_f4": "Télémétrie Ping & Jitter en Direct",
    "eco_badge": "Économie Sans Frais",
    "eco_title": "Points Gratuits et Illimités",
    "eco_sub": "Profitez d'une protection VPN haut de gamme sans dépenser un centime grâce aux points quotidiens.",
    "eco_ad_title": "Récompenses Publicitaires",
    "eco_ad_desc": "Regardez des annonces facultatives et recevez 20 points instantanément.",
    "eco_streak_title": "Série Quotidienne",
    "eco_streak_desc": "Connectez-vous chaque jour pour multiplier vos gains jusqu'à 50 points par jour.",
    "eco_ref_title": "Programme de Parrainage",
    "eco_ref_desc": "Invitez vos amis et recevez 50 points dès qu'ils utilisent votre lien.",
    "price_badge": "Offres Flexibles",
    "price_title": "Choisissez Votre Plan VIP",
    "price_sub": "Débloquez tous les serveurs, protocoles de pointe et vitesse illimitée avec garantie satisfait ou remboursé de 30 jours.",
    "plan_w_title": "Hebdomadaire Pro",
    "plan_w_desc": "Essai haute vitesse court terme. Idéal pour voyages et événements.",
    "plan_w_sub": "Facturé chaque semaine",
    "plan_m_title": "Mensuel VIP",
    "plan_m_desc": "Le choix le plus populaire pour navigation sécurisée et streaming.",
    "plan_m_sub": "Facturé chaque mois",
    "plan_y_title": "Annuel Ultime",
    "plan_y_desc": "Le meilleur rapport qualité-prix pour une protection continue sur tous vos appareils.",
    "plan_y_sub": "Facturé annuellement (39,99 $/an)",
    "plan_best_tag": "Meilleure Offre",
    "plan_yp_title": "Annuel Plus Famille",
    "plan_yp_desc": "Accès complet pour toute la famille avec assistance prioritaire 24/7.",
    "plan_yp_sub": "Facturé annuellement (59,99 $/an)",
    "feat_all_servers": "Accès à 14 000+ Serveurs Mondiaux",
    "feat_unlimited": "Bande Passante & Vitesse Illimitées",
    "feat_gaming": "Mode Gaming & Accélération Esports",
    "feat_vless": "Protocoles VLESS, Hysteria 2 & WireGuard",
    "feat_devices": "Appareils Illimités en Simultané",
    "feat_tor": "Ponts Tor & Routage en Oignon",
    "feat_support": "Support Client Dédié 24/7",
    "feat_gaming_vip": "Serveurs Gaming VIP Dédiés",
    "feat_tor_full": "Mode Tor Complet avec Ponts Snowflake",
    "feat_adblock": "Bloqueur de Publicités & Traceurs",
    "feat_guarantee": "Garantie de Remboursement 30 Jours",
    "feat_family": "Jusqu'à 10 Connexions Simultanées",
    "feat_amnezia": "Support Exclusif AmneziaWG",
    "feat_audit": "Rapport Hebdomadaire de Sécurité",
    "btn_choose": "Choisir ce Plan",
    "btn_get_yearly": "Prendre l'Abonnement Annuel",
    "packs_title": "Packs de Points Supplémentaires",
    "packs_sub": "Rechargez vos points immédiatement pour débloquer des fonctionnalités.",
    "btn_buy_pts": "Acheter des Points",
    "act_badge": "Vérification Instantanée",
    "act_title": "Activer une Clé de Licence",
    "act_sub": "Vous avez acheté une clé ou reçu un code promo ? Saisissez-le ici pour l'activer.",
    "btn_verify_key": "Vérifier & Activer",
    "dl_badge": "Téléchargement Gratuit",
    "dl_title": "Télécharger Z VPN",
    "dl_sub": "Disponible sur toutes les plateformes principales.",
    "btn_dl_android": "Télécharger l'APK",
    "modal_sub": "Paiement Sécurisé Chiffré de Bout en Bout",
    "form_email_lbl": "Adresse Email (pour recevoir votre clé)",
    "form_account_lbl": "ID de Compte / Appareil (Optionnel)",
    "summary_total": "Total à Payer :",
    "Due": "Paiement immédiat",
    "modal_security_notice": "Chiffrement SSL 256 bits. Clé de licence émise automatiquement après confirmation.",
    "nav_signin": "Connexion",
    "login_title": "Accédez à Votre Compte ZVPN",
    "login_sub": "Synchronisez vos licences, points et favoris sur tous vos appareils.",
    "login_guarantee": "Confidentialité totale garantie sans aucun enregistrement de données.",
    "acc_id_lbl": "ID de Compte :",
    "ID": "ID",
    "acc_pts_lbl": "Solde de Points :",
    "acc_pts_note": "Utilisez vos points pour vous connecter ou débloquer des fonctionnalités VIP.",
    "acc_streak_lbl": "Série Quotidienne :",
    "acc_tier_lbl": "Niveau d'Abonnement :",
    "acc_ref_lbl": "Code de Parrainage :",
    "acc_my_keys_title": "Mes Clés de Licence :",
    "acc_redeem_title": "Utiliser un Code :",
    "Account": "Compte",
    "btn_claim_streak": "Récupérer la Récompense Quotidienne",
    "btn_signout": "Déconnexion",
    "btn_upgrade_account": "Passer en VIP",
    "btn_copy": "Copier",
    "btn_redeem": "Valider",
    "login_or_alt": "OU ACCÉDER VIA COMPTE / CLÉ",
    "btn_access": "Accéder",
    "donate_badge": "Soutenir le Réseau",
    "donate_title": "Dons en Cryptomonnaies",
    "donate_sub": "Vos contributions financent directement les serveurs et le matériel mondial.",
    "addresses": "adresses",
    "btn_copy_addr": "Copier l'Adresse",
    "btn_show_qr": "Afficher le QR Code",
    "donate_footer_note": "Tous les dons en crypto soutiennent directement l'expansion de l'infrastructure.",
    "legal_title": "Politique de Confidentialité Stricte & Conditions"
  },
  "de": {
    "nav_protocols": "Protokolle",
    "nav_gaming": "Gaming",
    "nav_economy": "Punkte",
    "nav_pricing": "Preise",
    "nav_downloads": "Downloads",
    "nav_activate": "Key aktivieren",
    "nav_donate": "Spenden",
    "btn_get_zvpn": "Jetzt starten",
    "hero_badge": "${serversFormatted}+ Aktive Knoten",
    "hero_title": "Totale digitale Immunität. <br><span class='highlight'>Keine Protokolle. Garantiert.</span>",
    "hero_sub": "Tarn-Tunneling auf Unternehmensniveau mit Tor Onion, VLESS Reality und Hysteria 2. Ultra-niedriger Ping für Esports und kostenlose Punkte-Wirtschaft.",
    "hero_cta_buy": "Lizenz kaufen",
    "hero_cta_explore": "Technik entdecken",
    "hero_cta_activate": "Lizenz aktivieren",
    "stat_servers_lbl": "Globale Highspeed-Knoten",
    "stat_countries_lbl": "Länder & Regionen",
    "stat_speed_lbl": "Server-Uplink-Geschwindigkeit",
    "stat_latency_lbl": "Esports Ping-Latenz",
    "lic_issued_title": "Ihr ZVPN-Lizenzschlüssel",
    "lic_issued_sub": "Kopieren Sie diesen Schlüssel und fügen Sie ihn in die ZVPN-App auf Android oder PC ein, um sofortigen VIP-Zugriff freizuschalten.",
    "lic_btn_copy": "Schlüssel kopieren",
    "lic_btn_verify": "Status überprüfen",
    "demo_badge": "WebCrypto Live-Engine",
    "demo_title": "Tippen & AES-256-Verschlüsselung live sehen",
    "demo_sub": "Erleben Sie militärische Verschlüsselung in Echtzeit, bevor Daten Ihr Gerät verlassen.",
    "demo_raw_lbl": "Klartext",
    "demo_enc_lbl": "AES-256-GCM verschlüsselt",
    "proto_badge": "Protokoll-Stack",
    "proto_title": "Entwickelt, um jede Firewall zu umgehen",
    "proto_sub": "Überwinden Sie selbst strengste Zensur mit DPI-resistenten Protokollen der nächsten Generation.",
    "proto_vless_title": "VLESS + XTLS Reality",
    "proto_vless_desc": "Ahmt legitimen TLS-Verkehr bekannter Websites nach und macht Datenpakete ununterscheidbar von normalem Surfen.",
    "proto_hy2_title": "Hysteria 2 (UDP)",
    "proto_hy2_desc": "QUIC-basiertes Hochgeschwindigkeitsprotokoll, optimiert für Verbindungen mit hohem Paketverlust.",
    "proto_tor_title": "Tor Onion Routing",
    "proto_tor_desc": "Dreistufiges Tunneling mit Unterstützung für Snowflake- und obfs4-Bridges.",
    "proto_wg_title": "WireGuard & AmneziaWG",
    "proto_wg_desc": "Moderne Krypto-Performance mit verschleierten Headern gegen DPI-Sperren.",
    "proto_vmess_title": "VMess & VLESS WS/gRPC",
    "proto_vmess_desc": "Entwickelt zur Weiterleitung über CDNs wie Cloudflare, ohne die Server-IP offenzulegen.",
    "proto_ss_title": "Shadowsocks 2022",
    "proto_ss_desc": "Moderner AEAD-Verschlüsselungsstandard mit voller SIP003-Plugin-Unterstützung.",
    "proto_psiphon_title": "Psiphon Multi-Hop-Tunnel",
    "proto_psiphon_desc": "Automatisiertes Ausweichsystem zwischen SSH, OSSH und getarntem HTTP.",
    "proto_openconnect_title": "OpenConnect AnyConnect",
    "proto_openconnect_desc": "Zuverlässiges Enterprise-SSL-VPN für maximale Konnektivität in restriktiven Netzwerken.",
    "proto_openvpn_title": "OpenVPN DCO",
    "proto_openvpn_desc": "Linux Kernel Data Channel Offload für maximale Übertragungsraten.",
    "proto_chain_title": "Multi-Hop-Proxy-Ketten",
    "proto_chain_desc": "Verketten Sie mehrere Server und Protokolle für ultimative Anonymität.",
    "game_badge": "Esports Beschleuniger",
    "game_title": "Ultra-niedriger Ping für Gamer",
    "game_sub": "Optimiertes Paketrouting für Wettkampf-Gaming mit dedizierten UDP-Puffern.",
    "game_f1": "Kernel UDP-Priorisierung",
    "game_f2": "Direktes Routing zu Gameservern",
    "game_f3": "Echtzeit-DDoS-Schutz",
    "game_f4": "Live Ping- & Jitter-Telemetrie",
    "eco_badge": "Kostenloses System",
    "eco_title": "Unbegrenzte Gratis-Punkte",
    "eco_sub": "Nutzen Sie Premium-VPN-Schutz ohne Kosten durch tägliches Sammeln von Punkten.",
    "eco_ad_title": "Werbe-Belohnungen",
    "eco_ad_desc": "Sehen Sie sich optionale Werbung an und erhalten Sie sofort 20 Punkte pro Clip.",
    "eco_streak_title": "Tägliche Serien",
    "eco_streak_desc": "Loggen Sie sich täglich ein und steigern Sie Ihre Belohnung auf bis zu 50 Punkte.",
    "eco_ref_title": "Freunde werben",
    "eco_ref_desc": "Laden Sie Freunde ein und erhalten Sie 50 Punkte pro Empfehlung.",
    "price_badge": "Flexible Tarife",
    "price_title": "Wählen Sie Ihren VIP-Plan",
    "price_sub": "14.000+ Server, modernste Protokolle und unbegrenzte Bandbreite mit 30 Tagen Geld-zurück-Garantie.",
    "plan_w_title": "Wöchentlich Pro",
    "plan_w_desc": "Kurzzeit-Highspeed-Test. Perfekt für Reisen oder Events.",
    "plan_w_sub": "Wöchentlich abgerechnet",
    "plan_m_title": "Monatlich VIP",
    "plan_m_desc": "Die beliebteste Wahl für tägliches sicheres Surfen und Streaming.",
    "plan_m_sub": "Monatlich abgerechnet",
    "plan_y_title": "Jährlich Ultimativ",
    "plan_y_desc": "Das beste Preis-Leistungs-Verhältnis für dauerhaften Schutz.",
    "plan_y_sub": "Jährlich abgerechnet (39,99 $/Jahr)",
    "plan_best_tag": "Bester Wert",
    "plan_yp_title": "Jährlich Plus Familie",
    "plan_yp_desc": "Vollzugriff für die ganze Familie inklusive 24/7 VIP-Support.",
    "plan_yp_sub": "Jährlich abgerechnet (59,99 $/Jahr)",
    "feat_all_servers": "Zugriff auf 14.000+ globale Server",
    "feat_unlimited": "Unbegrenzte Bandbreite & Geschwindigkeit",
    "feat_gaming": "Gaming-Modus & Esports-Beschleunigung",
    "feat_vless": "VLESS, Hysteria 2 & WireGuard Protokolle",
    "feat_devices": "Unbegrenzt viele gleichzeitige Geräte",
    "feat_tor": "Tor-Bridges & Onion-Routing",
    "feat_support": "24/7 Prioritäts-Support",
    "feat_gaming_vip": "Dedizierte VIP-Gaming-Server",
    "feat_tor_full": "Vollständiger Tor-Modus mit Snowflake",
    "feat_adblock": "Integrierter Werbe- & Tracker-Blocker",
    "feat_guarantee": "30 Tage Geld-zurück-Garantie",
    "feat_family": "Bis zu 10 Familien-Verbindungen",
    "feat_amnezia": "Exklusive AmneziaWG-Unterstützung",
    "feat_audit": "Wöchentlicher Sicherheitsbericht",
    "btn_choose": "Plan wählen",
    "btn_get_yearly": "Jahresplan sichern",
    "packs_title": "Zusätzliche Punkte-Pakete",
    "packs_sub": "Laden Sie Punkte sofort auf, um Extra-Funktionen freizuschalten.",
    "btn_buy_pts": "Punkte kaufen",
    "act_badge": "Sofort-Aktivierung",
    "act_title": "Lizenzschlüssel aktivieren",
    "act_sub": "Haben Sie einen Schlüssel gekauft? Geben Sie ihn hier zur Prüfung ein.",
    "btn_verify_key": "Prüfen & Aktivieren",
    "dl_badge": "Kostenloser Download",
    "dl_title": "Z VPN herunterladen",
    "dl_sub": "Verfügbar für alle gängigen Betriebssysteme.",
    "btn_dl_android": "APK herunterladen",
    "modal_sub": "Sichere End-to-End-verschlüsselte Zahlung",
    "form_email_lbl": "E-Mail-Adresse (für Schlüssel-Zustellung)",
    "form_account_lbl": "Konto- / Geräte-ID (Optional)",
    "summary_total": "Gesamtbetrag:",
    "Due": "Sofort fällig",
    "modal_security_notice": "256-Bit SSL-Verschlüsselung. Lizenz wird sofort nach Bestätigung generiert.",
    "nav_signin": "Anmelden",
    "login_title": "Bei ZVPN anmelden",
    "login_sub": "Synchronisieren Sie Lizenzen, Punkte und Favoriten auf allen Geräten.",
    "login_guarantee": "Maximale Privatsphäre unter strikter No-Logs-Richtlinie.",
    "acc_id_lbl": "Konto-ID:",
    "ID": "ID",
    "acc_pts_lbl": "Punktestand:",
    "acc_pts_note": "Nutzen Sie Punkte zum Verbinden oder Freischalten von VIP-Features.",
    "acc_streak_lbl": "Tägliche Serie:",
    "acc_tier_lbl": "Mitgliedschaftsstufe:",
    "acc_ref_lbl": "Empfehlungscode:",
    "acc_my_keys_title": "Meine Lizenzschlüssel:",
    "acc_redeem_title": "Code einlösen:",
    "Account": "Konto",
    "btn_claim_streak": "Tagesbonus einfordern",
    "btn_signout": "Abmelden",
    "btn_upgrade_account": "Auf VIP upgraden",
    "btn_copy": "Kopieren",
    "btn_redeem": "Einlösen",
    "login_or_alt": "ODER ÜBER KONTO / KEY ZUGREIFEN",
    "btn_access": "Öffnen",
    "donate_badge": "Netzwerk unterstützen",
    "donate_title": "Krypto-Spenden",
    "donate_sub": "Ihre Spenden finanzieren direkt Serverkapazitäten und Bandbreite.",
    "addresses": "Adressen",
    "btn_copy_addr": "Adresse kopieren",
    "btn_show_qr": "QR-Code anzeigen",
    "donate_footer_note": "Alle Krypto-Spenden fließen direkt in den Ausbau der Infrastruktur.",
    "legal_title": "Strikte Datenschutzrichtlinie & AGB"
  },
  "ru": {
    "nav_protocols": "Протоколы",
    "nav_gaming": "Игры",
    "nav_economy": "Баллы",
    "nav_pricing": "Тарифы",
    "nav_downloads": "Скачать",
    "nav_activate": "Активация",
    "nav_donate": "Поддержать",
    "btn_get_zvpn": "Начать",
    "hero_badge": "${serversFormatted}+ Активных узлов",
    "hero_title": "Полный цифровой иммунитет. <br><span class='highlight'>Ноль логов. Гарантировано.</span>",
    "hero_sub": "Скрытые туннели корпоративного уровня на базе Tor Onion, VLESS Reality и Hysteria 2. Минимальный пинг для киберспорта и бесплатная система баллов.",
    "hero_cta_buy": "Купить лицензию",
    "hero_cta_explore": "Технологии",
    "hero_cta_activate": "Активировать ключ",
    "stat_servers_lbl": "Скоростные серверы",
    "stat_countries_lbl": "Стран и регионов",
    "stat_speed_lbl": "Пропускная способность",
    "stat_latency_lbl": "Пинг в играх (Ping)",
    "lic_issued_title": "Ваш лицензионный ключ ZVPN",
    "lic_issued_sub": "Скопируйте этот ключ и вставьте в приложение ZVPN на Android или ПК для мгновенного доступа к VIP.",
    "lic_btn_copy": "Скопировать ключ",
    "lic_btn_verify": "Проверить статус",
    "demo_badge": "WebCrypto в реальном времени",
    "demo_title": "Введите текст и оцените шифрование AES-256",
    "demo_sub": "Наблюдайте работу военного шифрования в реальном времени до отправки пакетов с устройства.",
    "demo_raw_lbl": "Исходный текст",
    "demo_enc_lbl": "Шифротекст AES-256-GCM",
    "proto_badge": "Стек протоколов",
    "proto_title": "Создан для обхода любых блокировок",
    "proto_sub": "Преодолевайте самую жесткую цензуру с протоколами, устойчивыми к DPI-фильтрации.",
    "proto_vless_title": "VLESS + XTLS Reality",
    "proto_vless_desc": "Маскирует трафик под обычные TLS-сессии к популярным сайтам, делая его неотличимым от веб-серфинга.",
    "proto_hy2_title": "Hysteria 2 (UDP)",
    "proto_hy2_desc": "Высокоскоростной протокол на базе QUIC, оптимизированный для сетей с высокой потерей пакетов.",
    "proto_tor_title": "Маршрутизация Tor Onion",
    "proto_tor_desc": "Трехуровневое шифрование с поддержкой мостов Snowflake и obfs4.",
    "proto_wg_title": "WireGuard & AmneziaWG",
    "proto_wg_desc": "Современное быстрое шифрование с обфускацией заголовков для защиты от блокировок.",
    "proto_vmess_title": "VMess & VLESS WS/gRPC",
    "proto_vmess_desc": "Проксирование через глобальные CDN вроде Cloudflare без раскрытия реального IP сервера.",
    "proto_ss_title": "Shadowsocks 2022",
    "proto_ss_desc": "Современный стандарт шифрования AEAD с поддержкой плагинов SIP003.",
    "proto_psiphon_title": "Многоуровневый туннель Psiphon",
    "proto_psiphon_desc": "Автоматическое переключение между протоколами SSH, OSSH и маскированным HTTP.",
    "proto_openconnect_title": "OpenConnect AnyConnect",
    "proto_openconnect_desc": "Корпоративный SSL VPN для стабильного соединения в корпоративных и учебных сетях.",
    "proto_openvpn_title": "OpenVPN DCO",
    "proto_openvpn_desc": "Аппаратное ускорение на уровне ядра Linux для максимальной пропускной способности.",
    "proto_chain_title": "Мульти-хоп цепочки прокси",
    "proto_chain_desc": "Объединяйте несколько серверов и протоколов в цепочку для абсолютной анонимности.",
    "game_badge": "Ускоритель для игр",
    "game_title": "Ультранизкий пинг в играх",
    "game_sub": "Оптимизированная маршрутизация для киберспорта с выделенными UDP-буферами и привязкой к ядрам CPU.",
    "game_f1": "Приоритезация UDP в ядре",
    "game_f2": "Прямые маршруты к игровым серверам",
    "game_f3": "Защита от DDoS в реальном времени",
    "game_f4": "Телеметрия пинга и джиттера",
    "eco_badge": "Бесплатная экономика",
    "eco_title": "Бесплатные баллы без ограничений",
    "eco_sub": "Пользуйтесь VPN премиум-класса абсолютно бесплатно, накапливая баллы каждый день.",
    "eco_ad_title": "Баллы за просмотр рекламы",
    "eco_ad_desc": "Смотрите короткие ролики и получайте по 20 баллов за каждый просмотр.",
    "eco_streak_title": "Ежедневные серии",
    "eco_streak_desc": "Заходите каждый день и увеличивайте бонус до 50 баллов ежедневно.",
    "eco_ref_title": "Реферальная программа",
    "eco_ref_desc": "Приглашайте друзей и получайте по 50 баллов за каждого пользователя.",
    "price_badge": "Выгодные тарифы",
    "price_title": "Выберите VIP-подписку",
    "price_sub": "14 000+ серверов, передовые протоколы и безлимитная скорость с гарантией возврата 30 дней.",
    "plan_w_title": "Недельный Pro",
    "plan_w_desc": "Краткосрочный тест на полной скорости. Идеально для поездок.",
    "plan_w_sub": "Оплата раз в неделю",
    "plan_m_title": "Месячный VIP",
    "plan_m_desc": "Самый популярный тариф для безопасного серфинга и стриминга.",
    "plan_m_sub": "Оплата раз в месяц",
    "plan_y_title": "Годовой Ultimate",
    "plan_y_desc": "Максимальная выгода для постоянной защиты на всех устройствах.",
    "plan_y_sub": "Оплата раз в год ($39.99/год)",
    "plan_best_tag": "Хит продаж",
    "plan_yp_title": "Годовой Плюс Семейный",
    "plan_yp_desc": "Полный доступ для всей семьи с премиум-поддержкой 24/7.",
    "plan_yp_sub": "Оплата раз в год ($59.99/год)",
    "feat_all_servers": "Доступ ко всем 14 000+ серверам",
    "feat_unlimited": "Безлимитный трафик и скорость",
    "feat_gaming": "Игровой режим и киберспорт-ускорение",
    "feat_vless": "Протоколы VLESS, Hysteria 2 и WireGuard",
    "feat_devices": "Безлимитное число устройств",
    "feat_tor": "Мосты Tor и онион-маршрутизация",
    "feat_support": "Приоритетная поддержка 24/7",
    "feat_gaming_vip": "Выделенные VIP игровые серверы",
    "feat_tor_full": "Полный режим Tor с мостами Snowflake",
    "feat_adblock": "Встроенная блокировка рекламы и трекеров",
    "feat_guarantee": "Гарантия возврата средств 30 дней",
    "feat_family": "До 10 семейных подключений",
    "feat_amnezia": "Эксклюзивная поддержка AmneziaWG",
    "feat_audit": "Еженедельный отчет безопасности",
    "btn_choose": "Выбрать тариф",
    "btn_get_yearly": "Оформить на год",
    "packs_title": "Пакеты дополнительных баллов",
    "packs_sub": "Пополняйте баланс баллов для разблокировки эксклюзивных функций.",
    "btn_buy_pts": "Купить баллы",
    "act_badge": "Мгновенная активация",
    "act_title": "Активация лицензионного ключа",
    "act_sub": "Купили ключ или получили промокод? Введите его здесь для проверки.",
    "btn_verify_key": "Проверить и активировать",
    "dl_badge": "Бесплатная загрузка",
    "dl_title": "Скачать Z VPN",
    "dl_sub": "Доступно для всех популярных платформ.",
    "btn_dl_android": "Скачать APK",
    "modal_sub": "Безопасная оплата со сквозным шифрованием",
    "form_email_lbl": "Электронная почта (для отправки ключа)",
    "form_account_lbl": "ID аккаунта / устройства (необязательно)",
    "summary_total": "К оплате:",
    "Due": "Оплата сейчас",
    "modal_security_notice": "Шифрование SSL 256 бит. Ключ генерируется моментально после подтверждения.",
    "nav_signin": "Войти",
    "login_title": "Вход в аккаунт ZVPN",
    "login_sub": "Синхронизируйте лицензии, баллы и избранные серверы на всех устройствах.",
    "login_guarantee": "Полная конфиденциальность при строгой политике отказа от логов.",
    "acc_id_lbl": "ID аккаунта:",
    "ID": "ID",
    "acc_pts_lbl": "Баланс баллов:",
    "acc_pts_note": "Используйте баллы для подключения и разблокировки VIP-функций.",
    "acc_streak_lbl": "Серия посещений:",
    "acc_tier_lbl": "Статус подписки:",
    "acc_ref_lbl": "Реферальный промокод:",
    "acc_my_keys_title": "Мои лицензионные ключи:",
    "acc_redeem_title": "Активировать промокод:",
    "Account": "Аккаунт",
    "btn_claim_streak": "Забрать ежедневный бонус",
    "btn_signout": "Выйти",
    "btn_upgrade_account": "Перейти на VIP",
    "btn_copy": "Копировать",
    "btn_redeem": "Активировать",
    "login_or_alt": "ИЛИ ВОЙТИ ПО ID АККАУНТА / КЛЮЧУ",
    "btn_access": "Войти",
    "donate_badge": "Поддержать проект",
    "donate_title": "Донаты в криптовалюте",
    "donate_sub": "Все пожертвования идут на оплату серверов и каналов связи.",
    "addresses": "адреса",
    "btn_copy_addr": "Скопировать адрес",
    "btn_show_qr": "Показать QR-код",
    "donate_footer_note": "Крипто-пожертвования напрямую финансируют расширение инфраструктуры.",
    "legal_title": "Политика конфиденциальности и условия"
  },
  "zh": {
    "nav_protocols": "协议",
    "nav_gaming": "游戏",
    "nav_economy": "积分",
    "nav_pricing": "定价",
    "nav_downloads": "下载",
    "nav_activate": "激活码",
    "nav_donate": "赞助",
    "btn_get_zvpn": "立即开始",
    "hero_badge": "${serversFormatted}+ 全球活跃节点",
    "hero_title": "全方位数字免疫。 <br><span class='highlight'>绝对零日志承诺。</span>",
    "hero_sub": "基于 Tor 洋葱网络、VLESS Reality 与 Hysteria 2 打造的企业级隐形隧道。超低延迟电竞专线，结合零门槛免费积分生态。",
    "hero_cta_buy": "购买授权",
    "hero_cta_explore": "了解技术架构",
    "hero_cta_activate": "激活授权码",
    "stat_servers_lbl": "全球高速节点",
    "stat_countries_lbl": "覆盖国家与地区",
    "stat_speed_lbl": "单节点上行带宽",
    "stat_latency_lbl": "电竞专线延迟 (Ping)",
    "lic_issued_title": "您的 ZVPN 授权密钥",
    "lic_issued_sub": "复制此密钥并在 Android 或电脑端 ZVPN 客户端中粘贴，即可立即解锁无限制 VIP 权限。",
    "lic_btn_copy": "复制授权码",
    "lic_btn_verify": "验证状态",
    "demo_badge": "实时 WebCrypto 引擎",
    "demo_title": "实时输入并体验 AES-256 加密",
    "demo_sub": "在数据包离开您的设备前，亲身体验军工级高强度加密计算。",
    "demo_raw_lbl": "原始明文",
    "demo_enc_lbl": "AES-256-GCM 密文",
    "proto_badge": "前沿协议矩阵",
    "proto_title": "专为穿透任何深度封锁而设计",
    "proto_sub": "采用下一代抗 DPI（深度包检测）协议，从容应对严苛的网络审查环境。",
    "proto_vless_title": "VLESS + XTLS Reality",
    "proto_vless_desc": "完美伪装成访问主流网站的合法 TLS 流量，从流量特征上无法与正常网页浏览区分。",
    "proto_hy2_title": "Hysteria 2 (UDP)",
    "proto_hy2_desc": "基于 QUIC 协议重构开发，即使在严重丢包与恶劣网络环境下仍能维持满速运行。",
    "proto_tor_title": "Tor 洋葱三跳路由",
    "proto_tor_desc": "原生集成 Snowflake 与 obfs4 网桥，实现真正的深层匿名通信。",
    "proto_wg_title": "WireGuard & AmneziaWG",
    "proto_wg_desc": "极致性能的现代加密架构，引入混淆报头有效规避防火墙识别。",
    "proto_vmess_title": "VMess & VLESS WS/gRPC",
    "proto_vmess_desc": "支持通过 Cloudflare 等全球知名 CDN 进行反向代理，隐藏真实源站服务器 IP。",
    "proto_ss_title": "Shadowsocks 2022",
    "proto_ss_desc": "现代 AEAD 加密标准，全方位支持 SIP003 插件生态。",
    "proto_psiphon_title": "赛风多层冗余隧道",
    "proto_psiphon_desc": "在 SSH、OSSH 和混淆 HTTP 之间智能故障转移，确保持续可用。",
    "proto_openconnect_title": "OpenConnect AnyConnect",
    "proto_openconnect_desc": "企业级 SSL VPN 模拟方案，在受限办公或校园网络中具备高穿透力。",
    "proto_openvpn_title": "OpenVPN DCO 内核加速",
    "proto_openvpn_desc": "Linux 内核级数据通道卸载技术，彻底消除用户态传输瓶颈。",
    "proto_chain_title": "多跳链式代理",
    "proto_chain_desc": "跨协议、跨节点串联多跳代理，实现无懈可击的安全隐私屏障。",
    "game_badge": "电竞级游戏加速器",
    "game_title": "为竞技游戏打造的极限超低延迟",
    "game_sub": "针对主流竞技网游深度优化路由策略，结合 CPU 亲和性与专属 UDP 缓存区调优。",
    "game_f1": "Linux 内核 UDP 优先调度",
    "game_f2": "直连全球热门游戏服务器",
    "game_f3": "实时抗 DDoS 攻击防御",
    "game_f4": "实时 Ping 与抖动遥测",
    "eco_badge": "零花费自由生态",
    "eco_title": "无门槛免费获取海量积分",
    "eco_sub": "每天通过签到与分享即可赚取积分，零元享受顶级 VPN 加密保护。",
    "eco_ad_title": "激励广告奖励",
    "eco_ad_desc": "自由观看激励视频，每次观看立即赠送 20 积分。",
    "eco_streak_title": "每日连续签到",
    "eco_streak_desc": "每天上线签到即可翻倍奖励，每日最高可领 50 积分。",
    "eco_ref_title": "好友邀请返利",
    "eco_ref_desc": "分享您的专属邀请码，每成功邀请一位好友立享 50 积分奖励。",
    "price_badge": "灵活套餐",
    "price_title": "选择尊享 VIP 套餐",
    "price_sub": "解锁全部 14,000+ 服务器、次世代协议与无上限极速体验，享有 30 天无忧退款保障。",
    "plan_w_title": "周度体验 Pro",
    "plan_w_desc": "短期极速体验，非常适合短期差旅或临时海外访问。",
    "plan_w_sub": "按周结算",
    "plan_m_title": "月度尊享 VIP",
    "plan_m_desc": "最受用户欢迎的套餐，满足日常安全冲浪与 4K 高清流媒体播放需求。",
    "plan_m_sub": "按月结算",
    "plan_y_title": "年度旗舰版",
    "plan_y_desc": "性价比之王，为全家所有终端提供全年不间断的顶级隐私防护。",
    "plan_y_sub": "按年结算 ($39.99/年)",
    "plan_best_tag": "超值推荐",
    "plan_yp_title": "年度尊享家庭 Plus",
    "plan_yp_desc": "全功能家庭尊享版，包含 24/7 VIP 专属客服与优先通道支持。",
    "plan_yp_sub": "按年结算 ($59.99/年)",
    "feat_all_servers": "畅享全球 14,000+ 优质节点",
    "feat_unlimited": "无限制流量与无上限带宽",
    "feat_gaming": "电竞加速与专属游戏优化",
    "feat_vless": "全面支持 VLESS、Hysteria 2 及 WireGuard",
    "feat_devices": "不限制同时在线设备数量",
    "feat_tor": "内置 Tor 网桥与洋葱路由",
    "feat_support": "7×24 小时全天候专属技术支持",
    "feat_gaming_vip": "独立电竞级低延迟专线",
    "feat_tor_full": "完整 Tor 模式与 Snowflake 网桥",
    "feat_adblock": "全网恶意广告与追踪器拦截",
    "feat_guarantee": "30 天无条件退款保障承诺",
    "feat_family": "支持最多 10 个家庭成员共用",
    "feat_amnezia": "专属 AmneziaWG 混淆协议支持",
    "feat_audit": "每周生成专属安全健康报告",
    "btn_choose": "选择此方案",
    "btn_get_yearly": "立即开通年费方案",
    "packs_title": "积分极速加油包",
    "packs_sub": "免去等待，随时随地直接充值积分以解锁高级特权。",
    "btn_buy_pts": "购买积分包",
    "act_badge": "秒级在线验证",
    "act_title": "激活您的授权密钥",
    "act_sub": "已购买授权或获取到激活码？请在此输入以核验并激活权限。",
    "btn_verify_key": "核验并激活",
    "dl_badge": "免费客户端",
    "dl_title": "下载 Z VPN",
    "dl_sub": "全面覆盖主流桌面与移动操作系统。",
    "btn_dl_android": "下载 APK 安装包",
    "modal_sub": "端到端金融级加密安全支付",
    "form_email_lbl": "接收授权码的邮箱地址",
    "form_account_lbl": "账户 / 客户端标识码（可选）",
    "summary_total": "应付金额：",
    "Due": "立即结算",
    "modal_security_notice": "采用 256 位银行级 SSL 加密通道。确认支付后系统将全自动分发授权码。",
    "nav_signin": "登录",
    "login_title": "登录您的 ZVPN 账户",
    "login_sub": "在所有设备间跨端同步您的授权、积分余额与收藏节点列表。",
    "login_guarantee": "在严格的无日志隐私政策下，全流程保护您的个人信息安全。",
    "acc_id_lbl": "账户识别码：",
    "ID": "ID",
    "acc_pts_lbl": "当前积分余额：",
    "acc_pts_note": "积分可用于维持连接或开启高级 VIP 协议特权。",
    "acc_streak_lbl": "连续签到天数：",
    "acc_tier_lbl": "会员当前等级：",
    "acc_ref_lbl": "专属邀请码：",
    "acc_my_keys_title": "我名下的授权密钥：",
    "acc_redeem_title": "兑换激活码：",
    "Account": "账户中心",
    "btn_claim_streak": "领取今日签到积分",
    "btn_signout": "退出登录",
    "btn_upgrade_account": "升级为 VIP 会员",
    "btn_copy": "复制",
    "btn_redeem": "立即兑换",
    "login_or_alt": "或通过账号 / 激活码直接登录",
    "btn_access": "进入",
    "donate_badge": "守护开源自由",
    "donate_title": "加密货币赞助",
    "donate_sub": "您的每一笔赞助款项都将全额用于支付海外服务器租赁及网络带宽扩容开销。",
    "addresses": "个收币地址",
    "btn_copy_addr": "复制钱包地址",
    "btn_show_qr": "查看二维码",
    "donate_footer_note": "所有加密货币捐款均直接投入于全球节点拓扑扩容与技术反审查研发。",
    "legal_title": "严格零日志隐私保护政策及服务条款"
  },
  "fa": {
    "nav_protocols": "پروتکل‌ها",
    "nav_gaming": "گیمینگ",
    "nav_economy": "امتیاز رایگان",
    "nav_pricing": "قیمت‌ها",
    "nav_downloads": "دانلود",
    "nav_activate": "فعالسازی",
    "nav_donate": "حمایت",
    "btn_get_zvpn": "شروع کنید",
    "hero_badge": "بیش از ${serversFormatted} سرور فعال",
    "hero_title": "امنیت دیجیتال مطلق. <br><span class='highlight'>بدون ثبت هیچ لاگ. تضمین‌شده.</span>",
    "hero_sub": "تونل‌های پیشرفته ضد فیلترینگ با فناوری Tor Onion، VLESS Reality و Hysteria 2. پینگ فوق‌العاده پایین برای بازی‌های آنلاین و سیستم امتیاز رایگان.",
    "hero_cta_buy": "خرید آنی لایسنس",
    "hero_cta_explore": "مشاهده پروتکل‌ها",
    "hero_cta_activate": "فعالسازی کد لایسنس",
    "stat_servers_lbl": "سرورهای پرسرعت جهانی",
    "stat_countries_lbl": "کشورها و مناطق",
    "stat_speed_lbl": "سرعت پورت سرورها",
    "stat_latency_lbl": "میانگین پینگ بازی‌ها",
    "lic_issued_title": "کد لایسنس ZVPN شما",
    "lic_issued_sub": "این کد را کپی کرده و در برنامه ZVPN اندروید یا ویندوز وارد کنید تا اشتراک VIP فوراً فعال شود.",
    "lic_btn_copy": "کپی کد لایسنس",
    "lic_btn_verify": "بررسی وضعیت لایسنس",
    "demo_badge": "موتور واقعی WebCrypto",
    "demo_title": "متن را تایپ کرده و رمزنگاری AES-256 را زنده ببینید",
    "demo_sub": "رمزنگاری سطح نظامی را به صورت زنده قبل از خروج بسته‌های داده از دستگاه خود مشاهده کنید.",
    "demo_raw_lbl": "متن ساده",
    "demo_enc_lbl": "داده رمزگذاری‌شده AES-256-GCM",
    "proto_badge": "پروتکل‌های نسل جدید",
    "proto_title": "طراحی‌شده برای عبور از سخت‌ترین فیلترینگ‌ها",
    "proto_sub": "با پروتکل‌های مقاوم در برابر بازرسی عمیق بسته‌ها (DPI) همیشه آنلاین بمانید.",
    "proto_vless_title": "VLESS + XTLS Reality",
    "proto_vless_desc": "ترافیک را کاملاً شبیه ترافیک عادی سایت‌های معتبر جهانی جلوه می‌دهد و غیرقابل شناسایی است.",
    "proto_hy2_title": "Hysteria 2 (UDP)",
    "proto_hy2_desc": "پروتکل پرسرعت مبتنی بر QUIC با بهینه‌سازی ویژه برای خطوط دارای افت بسته شدید.",
    "proto_tor_title": "مسیریابی پیازی Tor",
    "proto_tor_desc": "تونل‌های سه لایه امنیتی به همراه پشتیبانی از پل‌های پیشرفته Snowflake و obfs4.",
    "proto_wg_title": "WireGuard & AmneziaWG",
    "proto_wg_desc": "عملکرد رمزنگاری پرسرعت و مدرن با هدرهای مبهم‌شده برای جلوگیری از مسدودسازی.",
    "proto_vmess_title": "VMess & VLESS WS/gRPC",
    "proto_vmess_desc": "عبور هوشمند از CDNهای بین‌المللی نظیر کلودفلر بدون لو رفتن آی‌پی سرور اصلی.",
    "proto_ss_title": "Shadowsocks 2022",
    "proto_ss_desc": "استاندارد رمزنگاری نوین AEAD با سازگاری همه‌جانبه از پلاگین‌های SIP003.",
    "proto_psiphon_title": "تونل چندلایه سایفون",
    "proto_psiphon_desc": "جابجایی خودکار بین پروتکل‌های SSH، OSSH و وب مبهم برای پایداری مداوم.",
    "proto_openconnect_title": "OpenConnect AnyConnect",
    "proto_openconnect_desc": "پروتکل سازمانی پایدار برای برقراری ارتباط در شبکه‌های حساس دانشگاهی و شرکتی.",
    "proto_openvpn_title": "OpenVPN DCO",
    "proto_openvpn_desc": "شتاب‌دهنده کرنل لینوکس برای ارائه بیشترین پهنای باند ممکن بدون افت سرعت.",
    "proto_chain_title": "زنجیره پروکسی چندمرحله‌ای",
    "proto_chain_desc": "ترکیب و اتصال چندین سرور مختلف به صورت پیاپی برای دستیابی به نهایت ناشناسی.",
    "game_badge": "شتاب‌دهنده گیمینگ",
    "game_title": "پینگ فوق‌العاده پایین برای گیمرهای حرفه‌ای",
    "game_sub": "مسیریابی اختصاصی بسته‌های UDP و تنظیم دقیق هسته‌های پردازنده برای بازی‌های رقابتی.",
    "game_f1": "اولویت‌بندی بسته‌های UDP در کرنل",
    "game_f2": "مسیر مستقیم به سرورهای بازی آنلاین",
    "game_f3": "محافظت بلادرنگ در برابر حملات DDoS",
    "game_f4": "نمایش زنده پینگ و نوسان (Jitter)",
    "eco_badge": "سیستم کاملاً رایگان",
    "eco_title": "دریافت نامحدود امتیاز رایگان",
    "eco_sub": "بدون پرداخت حتی یک دلار، با جمع‌آوری امتیازات روزانه از وی‌پی‌ان باکیفیت لذت ببرید.",
    "eco_ad_title": "امتیاز تماشای تبلیغات",
    "eco_ad_desc": "با دیدن هر تبلیغ کوتاه بلافاصله 20 امتیاز هدیه به حسابتان اضافه می‌شود.",
    "eco_streak_title": "پاداش حضور روزانه",
    "eco_streak_desc": "هر روز به برنامه سر بزنید و پاداش روزانه خود را تا سقف 50 امتیاز دریافت کنید.",
    "eco_ref_title": "دعوت از دوستان",
    "eco_ref_desc": "کد معرف خود را به اشتراک بگذارید و به ازای هر دوست 50 امتیاز هدیه بگیرید.",
    "price_badge": "پلن‌های اشتراک",
    "price_title": "پلن VIP خود را انتخاب کنید",
    "price_sub": "دسترسی به بیش از 14000 سرور، پروتکل‌های فوق‌پیشرفته و ترافیک نامحدود همراه با 30 روز ضمانت بازگشت وجه.",
    "plan_w_title": "هفتگی پرو",
    "plan_w_desc": "تست پرسرعت کوتاه‌مدت، ایده‌آل برای سفرها و امور موقت.",
    "plan_w_sub": "پرداخت هفتگی",
    "plan_m_title": "ماهانه VIP",
    "plan_m_desc": "محبوب‌ترین پلن برای وب‌گردی روزمره، استریم ویدیو و دانلود با کیفیت بالا.",
    "plan_m_sub": "پرداخت ماهانه",
    "plan_y_title": "سالانه اولتیمیت",
    "plan_y_desc": "بهترین و اقتصادی‌ترین گزینه برای محافظت دائم از تمامی دستگاه‌های شما.",
    "plan_y_sub": "پرداخت سالانه (39.99 دلار در سال)",
    "plan_best_tag": "بهترین انتخاب",
    "plan_yp_title": "سالانه پلاس خانوادگی",
    "plan_yp_desc": "دسترسی نامحدود برای تمام اعضای خانواده با پشتیبانی اختصاصی 24 ساعته.",
    "plan_yp_sub": "پرداخت سالانه (59.99 دلار در سال)",
    "feat_all_servers": "دسترسی به 14000+ سرور بین‌المللی",
    "feat_unlimited": "پهنای باند و حجم ترافیک نامحدود",
    "feat_gaming": "حالت اختصاصی بازی و کاهش پینگ",
    "feat_vless": "پشتیبانی از VLESS، Hysteria 2 و WireGuard",
    "feat_devices": "اتصال همزمان نامحدود دستگاه‌ها",
    "feat_tor": "مسیریابی پیازی و پل‌های امنیتی Tor",
    "feat_support": "پشتیبانی فنی 24/7 در تمام روزهای هفته",
    "feat_gaming_vip": "سرورهای اختصاصی VIP ویژه بازی",
    "feat_tor_full": "حالت کامل Tor با پل‌های Snowflake",
    "feat_adblock": "مسدودکننده تبلیغات مزاحم و ترکرها",
    "feat_guarantee": "30 روز ضمانت بازگشت بی‌قیدوشرط وجه",
    "feat_family": "پشتیبانی از حداکثر 10 اتصال همزمان",
    "feat_amnezia": "پشتیبانی انحصاری از پروتکل AmneziaWG",
    "feat_audit": "گزارش هفتگی امنیت شبکه شخصی",
    "btn_choose": "انتخاب پلن",
    "btn_get_yearly": "خرید پلن سالانه",
    "packs_title": "بسته‌های شارژ امتیاز",
    "packs_sub": "امتیازات حساب خود را به صورت آنی افزایش داده و امکانات ویژه را فعال کنید.",
    "btn_buy_pts": "خرید بسته امتیاز",
    "act_badge": "بررسی فوری",
    "act_title": "فعالسازی لایسنس خریداری‌شده",
    "act_sub": "کد لایسنس یا کد تخفیف دارید؟ آن را در این بخش وارد کنید تا فعال شود.",
    "btn_verify_key": "بررسی و فعالسازی",
    "dl_badge": "دانلود رایگان",
    "dl_title": "دانلود نرم‌افزار Z VPN",
    "dl_sub": "سازگار با تمامی سیستم‌عامل‌های اصلی دسکتاپ و موبایل.",
    "btn_dl_android": "دانلود فایل APK",
    "modal_sub": "درگاه پرداخت امن با رمزنگاری سرتاسری",
    "form_email_lbl": "آدرس ایمیل (جهت دریافت کد لایسنس)",
    "form_account_lbl": "شناسه کاربری / دستگاه (اختیاری)",
    "summary_total": "مبلغ کل قابل پرداخت:",
    "Due": "سررسید فوری",
    "modal_security_notice": "رمزنگاری 256 بیتی SSL. لایسنس بلافاصله پس از تایید تراکنش صادر می‌شود.",
    "nav_signin": "ورود",
    "login_title": "ورود به حساب کاربری ZVPN",
    "login_sub": "همگام‌سازی لایسنس‌ها، امتیازات و سرورهای برگزیده در تمام دستگاه‌ها.",
    "login_guarantee": "حفظ کامل حریم خصوصی تحت پایبندی سفت‌وسخت به عدم ثبت لاگ.",
    "acc_id_lbl": "شناسه کاربری:",
    "ID": "ID",
    "acc_pts_lbl": "موجودی امتیاز:",
    "acc_pts_note": "از امتیازات برای اتصال و بازگشایی قابلیت‌های VIP استفاده کنید.",
    "acc_streak_lbl": "روزهای متوالی حضور:",
    "acc_tier_lbl": "سطح کاربری فعلی:",
    "acc_ref_lbl": "کد معرف شما:",
    "acc_my_keys_title": "کدهای لایسنس من:",
    "acc_redeem_title": "اعتبارسنجی کد هدیه:",
    "Account": "حساب کاربری",
    "btn_claim_streak": "دریافت پاداش امروز",
    "btn_signout": "خروج از حساب",
    "btn_upgrade_account": "ارتقا به اشتراک VIP",
    "btn_copy": "کپی",
    "btn_redeem": "ثبت کد",
    "login_or_alt": "یا ورود مستقیم با شناسه کاربری / لایسنس",
    "btn_access": "ورود",
    "donate_badge": "حمایت از پایداری شبکه",
    "donate_title": "کمک‌های مالی رمزارزی",
    "donate_sub": "تمام کمک‌های مالی مستقیماً صرف نگهداری سرورها و ارتقای پهنای باند جهانی می‌شود.",
    "addresses": "آدرس رمزارزی",
    "btn_copy_addr": "کپی آدرس کیف پول",
    "btn_show_qr": "نمایش QR کد",
    "donate_footer_note": "تمام مبالغ اهدایی صرف گسترش زیرساخت‌ها و توسعه ابزارهای مقابله با سانسور می‌گردد.",
    "legal_title": "قوانین شرایط استفاده و حفظ حریم خصوصی"
  }
};

const LANG_META = {
  en: { label: 'English', flag: '🇬🇧', dir: 'ltr' },
  ar: { label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  es: { label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  de: { label: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  ru: { label: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  zh: { label: '简体中文', flag: '🇨🇳', dir: 'ltr' },
  fa: { label: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
};

let currentLang = localStorage.getItem('zvpn_lang') || 
  (navigator.language && navigator.language.startsWith('ar') ? 'ar' :
   navigator.language && navigator.language.startsWith('es') ? 'es' :
   navigator.language && navigator.language.startsWith('fr') ? 'fr' :
   navigator.language && navigator.language.startsWith('de') ? 'de' :
   navigator.language && navigator.language.startsWith('ru') ? 'ru' :
   navigator.language && navigator.language.startsWith('zh') ? 'zh' :
   navigator.language && navigator.language.startsWith('fa') ? 'fa' : 'en');

function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  const meta = LANG_META[lang] || LANG_META.en;
  
  document.documentElement.lang = lang;
  document.documentElement.dir = meta.dir;

  const currentLabel = document.getElementById('lang-current-label');
  if (currentLabel) {
    currentLabel.textContent = meta.label;
  }

  // Highlight active language option
  document.querySelectorAll('.lang-opt').forEach(opt => {
    const isAct = opt.getAttribute('onclick') && opt.getAttribute('onclick').includes("'" + lang + "'");
    opt.classList.toggle('active', !!isAct);
  });

  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle && dict.hero_title) {
    heroTitle.innerHTML = dict.hero_title;
  }
  if (typeof currentUser !== 'undefined' && currentUser && typeof renderAccountModalUI === 'function') {
    renderAccountModalUI(currentUser);
  }
}

function selectLanguage(lang) {
  localStorage.setItem('zvpn_lang', lang);
  closeLangDropdown();
  applyLanguage(lang);
}

function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const el = document.getElementById('lang-dropdown');
  if (el) el.classList.toggle('open');
}

function closeLangDropdown() {
  const el = document.getElementById('lang-dropdown');
  if (el) el.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('#lang-dropdown')) {
    closeLangDropdown();
  }
});

// Apply language immediately
applyLanguage(currentLang);

let demoKey = null;
async function updateDemoCiphertext() {
  const input = document.getElementById('demo-input');
  const ptEl = document.getElementById('demo-plaintext');
  const ctEl = document.getElementById('demo-ciphertext');
  const text = input.value || '';
  ptEl.textContent = text;

  if (!window.crypto || !window.crypto.subtle) {
    ctEl.textContent = "WebCrypto API unavailable in this browser environment.";
    return;
  }

  try {
    if (!demoKey) {
      demoKey = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt"]
      );
    }
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(text);
    const cipherBuffer = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      demoKey,
      encoded
    );
    const cipherArray = new Uint8Array(cipherBuffer);
    const combined = new Uint8Array(iv.length + cipherArray.length);
    combined.set(iv, 0);
    combined.set(cipherArray, iv.length);

    let hex = '';
    for (let i = 0; i < combined.length; i++) {
      hex += combined[i].toString(16).padStart(2, '0');
    }
    ctEl.textContent = hex;
  } catch (err) {
    ctEl.textContent = "Encryption error: " + err.message;
  }
}
window.updateDemoCiphertext = updateDemoCiphertext;
var demoInputEl = document.getElementById('demo-input');
if (demoInputEl) {
  demoInputEl.addEventListener('input', updateDemoCiphertext);
  demoInputEl.addEventListener('keyup', updateDemoCiphertext);
}
updateDemoCiphertext();

// ─── Google Identity & User Account Portal ───
const GOOGLE_CLIENT_ID = '618576060813-lce4v7sepii5e6ohua4ct4hflkg1mju7.apps.googleusercontent.com';

function initGoogleAuth() {
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
    setTimeout(initGoogleAuth, 400);
    return;
  }

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredentialResponse,
    auto_select: false,
    cancel_on_tap_outside: true
  });

  const btnBox = document.getElementById('google-signin-btn-box');
  if (btnBox) {
    google.accounts.id.renderButton(btnBox, {
      theme: 'filled_black',
      size: 'large',
      shape: 'pill',
      text: 'continue_with',
      width: 280
    });
  }
}

// Restore saved web session
(function checkSavedSession() {
  try {
    const saved = localStorage.getItem('zvpn_web_user');
    if (saved) {
      currentUser = JSON.parse(saved);
      updateUserNavUI(currentUser);
      refreshAccountData(false);
    }
  } catch (_) {}
  window.addEventListener('load', initGoogleAuth);
})();

async function handleGoogleCredentialResponse(response) {
  const credential = response.credential;
  if (!credential) return;

  try {
    const res = await fetch('/api/v1/auth/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credential,
        'X-Client-Platform': 'web'
      },
      body: JSON.stringify({ platform: 'web' })
    });

    const data = await res.json();
    if (data.authenticated && data.success) {
      currentUser = data;
      localStorage.setItem('zvpn_web_user', JSON.stringify(data));
      if (data.session_token) localStorage.setItem('zvpn_web_token', data.session_token);
      
      updateUserNavUI(data);
      closeLoginModal();
      openAccountModal();
    } else {
      alert('Authentication failed: ' + (data.error || 'Unknown error'));
    }
  } catch (err) {
    alert('Failed to connect to Google Auth API: ' + err.message);
  }
}

async function loginWithAltId() {
  const input = document.getElementById('login-alt-input');
  const errEl = document.getElementById('login-alt-error');
  const btn = document.getElementById('login-alt-btn');
  const val = input.value.trim();

  if (!val) {
    errEl.style.display = 'block';
    errEl.textContent = currentLang === 'ar' ? 'يرجى إدخال معرف الحساب أو كود الترخيص.' : 'Please enter an Account ID or License Key.';
    return;
  }

  errEl.style.display = 'none';
  btn.disabled = true;
  btn.textContent = '...';

  try {
    const res = await fetch('/api/v1/user/account?account_id=' + encodeURIComponent(val));
    const data = await res.json();
    btn.disabled = false;
    btn.textContent = currentLang === 'ar' ? 'دخول' : 'Open';

    if (data.success) {
      currentUser = data;
      localStorage.setItem('zvpn_web_user', JSON.stringify(data));
      updateUserNavUI(data);
      closeLoginModal();
      openAccountModal();
    } else {
      errEl.style.display = 'block';
      errEl.textContent = data.error || (currentLang === 'ar' ? 'لم يتم العثور على حساب بهذا المعرف' : 'Account or license not found.');
    }
  } catch (e) {
    btn.disabled = false;
    btn.textContent = currentLang === 'ar' ? 'دخول' : 'Open';
    errEl.style.display = 'block';
    errEl.textContent = 'Error: ' + e.message;
  }
}

function updateUserNavUI(user) {
  const loginBtn = document.getElementById('nav-login-btn');
  const userProfile = document.getElementById('nav-user-profile');
  const avatar = document.getElementById('nav-avatar');
  const username = document.getElementById('nav-username');
  const points = document.getElementById('nav-points');

  if (user) {
    loginBtn.style.display = 'none';
    userProfile.style.display = 'inline-flex';
    avatar.src = user.picture || 'https://www.gravatar.com/avatar/?d=mp';
    username.textContent = user.name ? user.name.split(' ')[0] : 'Account';
    points.textContent = '\u26A1 ' + (user.total_points || 0).toLocaleString() + ' PTS';
  } else {
    loginBtn.style.display = 'inline-flex';
    userProfile.style.display = 'none';
  }
}

function openLoginModal() {
  if (currentUser) {
    openAccountModal();
    return;
  }
  document.getElementById('login-modal').classList.add('open');
  setTimeout(() => {
    const btnBox = document.getElementById('google-signin-btn-box');
    if (btnBox && btnBox.children.length === 0 && typeof google !== 'undefined') {
      google.accounts.id.renderButton(btnBox, {
        theme: 'filled_black',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
        width: 280
      });
    }
  }, 100);
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.remove('open');
}

function openAccountModal() {
  if (!currentUser) {
    openLoginModal();
    return;
  }
  renderAccountModalUI(currentUser);
  document.getElementById('account-modal').classList.add('open');
}

function closeAccountModal() {
  document.getElementById('account-modal').classList.remove('open');
}

function renderAccountModalUI(user) {
  document.getElementById('acc-avatar').src = user.picture || 'https://www.gravatar.com/avatar/?d=mp';
  document.getElementById('acc-name').textContent = user.name || 'ZVPN User';
  document.getElementById('acc-email').textContent = user.email || '';
  document.getElementById('acc-id').textContent = user.account_key || ('user_' + user.uid);
  document.getElementById('acc-pts').textContent = (user.total_points || 0).toLocaleString() + ' PTS';
  
  // Streak
  const streak = user.streak_info || { days: 1, can_claim_streak: true };
  document.getElementById('acc-streak').textContent = 'Day ' + (streak.days || 1);
  const claimBtn = document.getElementById('acc-claim-streak-btn');
  if (streak.can_claim_streak) {
    claimBtn.disabled = false;
    claimBtn.style.opacity = '1';
    claimBtn.textContent = currentLang === 'ar' ? 'استلام المكافأة' : 'Claim Bonus';
  } else {
    claimBtn.disabled = true;
    claimBtn.style.opacity = '0.5';
    claimBtn.textContent = currentLang === 'ar' ? 'تم الاستلام اليوم' : 'Claimed Today';
  }

  // Tier
  const tierInfo = user.tier_info || { tier: 'free', valid_until: null };
  const tierEl = document.getElementById('acc-tier');
  const expEl = document.getElementById('acc-tier-exp');
  const rawTier = (tierInfo.tier || 'free').toUpperCase();
  tierEl.textContent = rawTier.replace('_', ' ');
  if (rawTier.includes('PLUS') || rawTier.includes('VIP')) {
    tierEl.style.color = 'var(--accent)';
  } else if (rawTier.includes('PREMIUM') || rawTier.includes('PRO')) {
    tierEl.style.color = 'var(--accent-cyan)';
  } else {
    tierEl.style.color = 'var(--text-muted)';
  }

  if (tierInfo.valid_until) {
    const expDate = new Date(tierInfo.valid_until);
    expEl.textContent = (currentLang === 'ar' ? 'ينتهي في: ' : 'Expires: ') + expDate.toLocaleDateString();
  } else {
    expEl.textContent = currentLang === 'ar' ? 'صلاحية دائمة / حساب مجاني' : 'Lifetime / Free Account';
  }

  // Referral code & share link
  const refCode = user.referral_code || ('ZVPN-' + (user.uid ? user.uid.slice(-6).toUpperCase() : 'VIP'));
  document.getElementById('acc-ref-code').textContent = refCode;
  document.getElementById('acc-ref-link').value = window.location.origin + '/#ref=' + refCode;

  // Render licenses list
  const licContainer = document.getElementById('acc-licenses-container');
  const licenses = user.licenses || [];
  if (licenses.length === 0) {
    licContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 12px;">' +
      (currentLang === 'ar' ? 'لا توجد مفاتيح تراخيص مشتراة بعد.' : 'No purchased license keys yet.') + '</div>';
  } else {
    licContainer.innerHTML = licenses.map(l => {
      const exp = l.valid_until ? new Date(l.valid_until).toLocaleDateString() : 'Lifetime';
      return '<div class="acc-key-row">' +
        '<div>' +
          '<b style="color: var(--accent); letter-spacing: 0.05em;">' + l.license_key + '</b>' +
          '<div style="font-size: 0.72rem; color: var(--text-muted);">' + (l.tier || 'VIP').toUpperCase() + ' • ' + exp + '</div>' +
        '</div>' +
        '<button class="btn-sm outline" data-key="' + l.license_key + '" onclick="copyLicenseFromAccount(this.dataset.key)">Copy</button>' +
      '</div>';
    }).join('');
  }
}

function copyLicenseFromAccount(key) {
  if (!key) return;
  navigator.clipboard.writeText(key).then(() => {
    alert(currentLang === 'ar' ? 'تم نسخ المفتاح بنجاح!' : 'Key copied to clipboard!');
  });
}

async function refreshAccountData(showAlert = true) {
  if (!currentUser) return;
  const accId = currentUser.account_key || ('user_' + currentUser.uid);
  try {
    const res = await fetch('/api/v1/user/account?account_id=' + encodeURIComponent(accId));
    const data = await res.json();
    if (data.success) {
      currentUser.total_points = data.total_points;
      currentUser.tier_info = data.tier_info;
      currentUser.licenses = data.licenses;
      currentUser.streak_info = data.streak_info;
      currentUser.referral_code = data.referral_code;
      localStorage.setItem('zvpn_web_user', JSON.stringify(currentUser));
      updateUserNavUI(currentUser);
      renderAccountModalUI(currentUser);
      if (showAlert) alert(currentLang === 'ar' ? 'تم تحديث بيانات الحساب!' : 'Account data refreshed!');
    }
  } catch (e) {
    if (showAlert) alert('Refresh error: ' + e.message);
  }
}

window.watchAdForPointsWeb = async function() {
  const btn = document.getElementById('acc-watch-ad-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;">⏳</span> ' + (currentLang === 'ar' ? 'جارٍ تحميل الإعلان...' : 'Loading Ad...');
  }

  // Open the exe.io Sponsor Link in a new tab
  try {
    window.open('https://exe.io/xnovt', '_blank', 'noopener');
  } catch (_) {}

  // Create an engaging Cyberpunk Reward Modal
  let adModal = document.getElementById('zvpn-ad-watcher-modal');
  if (!adModal) {
    adModal = document.createElement('div');
    adModal.id = 'zvpn-ad-watcher-modal';
    adModal.className = 'modal-backdrop';
    adModal.style.cssText = 'position:fixed;inset:0;background:rgba(6,9,19,0.88);backdrop-filter:blur(10px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;';
    document.body.appendChild(adModal);
  }

  const isAr = currentLang === 'ar';
  adModal.innerHTML = 
    '<div style="background:#0c101d;border:1px solid #00E5FF;border-radius:18px;width:100%;max-width:440px;padding:24px;box-shadow:0 0 40px rgba(0,229,255,0.25);text-align:center;position:relative;direction:' + (isAr ? 'rtl' : 'ltr') + ';">' +
      '<div style="font-size:2rem;margin-bottom:8px;">🎁</div>' +
      '<h3 style="font-size:1.25rem;font-weight:800;color:#fff;margin:0 0 6px;">' + (isAr ? 'رابط الراعي الرسمي (exe.io)' : 'Official Sponsor Link (exe.io)') + '</h3>' +
      '<p style="font-size:0.85rem;color:#8E9BAE;margin:0 0 14px;">' + (isAr ? 'تم فتح رابط الراعي الرسمي. تصفح الرابط لمدة <b style="color:#C6FF00;">10 ثوانٍ</b> لتحصل فوراً على <b style="color:#C6FF00;">+10 نقاط مجانية</b>!' : 'Sponsor link opened via exe.io. View it for <b style="color:#C6FF00;">10 seconds</b> to earn <b style="color:#C6FF00;">+10 Free Reward Points</b>!') + '</p>' +
      '<a href="https://exe.io/xnovt" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;margin-bottom:16px;padding:8px 16px;border-radius:8px;background:rgba(0,229,255,0.12);border:1px solid #00E5FF;color:#00E5FF;font-size:0.8rem;font-weight:700;text-decoration:none;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> ' +
        (isAr ? '🔗 فتح رابط الراعي (exe.io) مجدداً إذا لم يفتح تلقائياً' : '🔗 Reopen Sponsor Link (exe.io)') +
      '</a>' +
      '<div style="background:#060913;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;margin-bottom:16px;position:relative;overflow:hidden;">' +
        '<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:8px;">' +
          '<div style="width:10px;height:10px;border-radius:50%;background:#C6FF00;animation:pulse 1.5s infinite;"></div>' +
          '<span style="font-size:0.8rem;color:#00E5FF;font-weight:700;font-family:var(--font-mono);">' + (isAr ? 'التحقق من رابط الراعي (exe.io)...' : 'VERIFYING SPONSOR STREAM (exe.io)...') + '</span>' +
        '</div>' +
        '<div style="width:100%;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;overflow:hidden;">' +
          '<div id="ad-progress-bar" style="width:0%;height:100%;background:linear-gradient(90deg,#00E5FF,#C6FF00);transition:width 0.2s linear;"></div>' +
        '</div>' +
      '</div>' +
      '<div id="ad-countdown-lbl" style="font-family:var(--font-mono);font-size:0.9rem;font-weight:700;color:#fff;margin-bottom:12px;">' +
        (isAr ? 'يرجى الانتظار <span id="ad-timer-sec" style="color:#C6FF00;font-size:1.1rem;">10</span> ثوانٍ...' : 'Please wait <span id="ad-timer-sec" style="color:#C6FF00;font-size:1.1rem;">10</span> seconds...') +
      '</div>' +
      '<button id="ad-close-btn" disabled style="width:100%;padding:12px;border-radius:12px;font-weight:800;font-size:0.9rem;background:rgba(255,255,255,0.1);color:#666;border:none;cursor:not-allowed;">' +
        (isAr ? 'استلام النقاط (+10)' : 'Claim Reward (+10 Pts)') +
      '</button>' +
    '</div>';
  adModal.style.display = 'flex';

  let duration = 10;
  let elapsed = 0;
  const interval = setInterval(() => {
    elapsed++;
    const remaining = Math.max(0, duration - elapsed);
    const secEl = document.getElementById('ad-timer-sec');
    const barEl = document.getElementById('ad-progress-bar');
    if (secEl) secEl.textContent = remaining;
    if (barEl) barEl.style.width = ((elapsed / duration) * 100) + '%';

    if (elapsed >= duration) {
      clearInterval(interval);
      const closeBtn = document.getElementById('ad-close-btn');
      const countLbl = document.getElementById('ad-countdown-lbl');
      if (countLbl) countLbl.innerHTML = '<span style="color:#C6FF00;">' + (isAr ? '✓ اكتمل الإعلان بنجاح! اضغط أدناه لاستلام النقاط.' : '✓ Ad Completed! Click below to claim.') + '</span>';
      if (closeBtn) {
        closeBtn.disabled = false;
        closeBtn.style.background = '#C6FF00';
        closeBtn.style.color = '#000';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.boxShadow = '0 0 20px rgba(198,255,0,0.4)';
        closeBtn.onclick = async () => {
          closeBtn.disabled = true;
          closeBtn.textContent = isAr ? 'جارٍ تسجيل النقاط...' : 'Claiming +10 Points...';
          try {
            const accId = (currentUser && (currentUser.account_key || ('user_' + currentUser.uid))) || localStorage.getItem('zvpn_account_id') || ('guest_' + Math.random().toString(36).slice(2, 10));
            const nonce = Math.random().toString(36).slice(2) + Date.now().toString(36);
            const res = await fetch('/api/v1/user/ad-reward', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'X-Device-ID': accId },
              body: JSON.stringify({ account_id: accId, reward_points: 10, nonce: nonce, timestamp: Date.now() })
            });
            const data = await res.json();
            if (data.success || data.new_balance !== undefined) {
              const newPts = (typeof data.new_balance === 'number') ? data.new_balance : ((parseInt(localStorage.getItem('zvpn_points') || '0')) + 10);
              localStorage.setItem('zvpn_points', newPts);
              if (currentUser) {
                currentUser.total_points = newPts;
                localStorage.setItem('zvpn_web_user', JSON.stringify(currentUser));
                updateUserNavUI(currentUser);
                renderAccountModalUI(currentUser);
              } else {
                const accPts = document.getElementById('acc-pts');
                if (accPts) accPts.textContent = newPts.toLocaleString() + ' PTS';
                const navPts = document.getElementById('nav-points');
                if (navPts) navPts.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C6FF00"/></svg> ' + newPts.toLocaleString() + ' PTS';
              }
              alert(isAr ? '🎉 مبروك! تمت إضافة +10 نقاط لرصيدك بنجاح! رصيدك الحالي: ' + newPts + ' نقطة.' : '🎉 Congratulations! +10 Points added successfully! Current balance: ' + newPts + ' PTS.');
            } else if (data.error) {
              alert(data.error);
            }
          } catch (e) {
            console.error('Ad reward failed:', e);
          } finally {
            adModal.style.display = 'none';
            if (btn) {
              btn.disabled = false;
              btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> ' + (isAr ? 'مشاهدة إعلان (+10 نقاط)' : 'Watch Ad (+10 Pts)');
            }
          }
        };
      }
    }
  }, 1000);
};

async function claimDailyStreakWeb() {
  if (!currentUser) return;
  const accId = currentUser.account_key || ('user_' + currentUser.uid);
  try {
    const res = await fetch('/api/v1/user/claim-streak?account_id=' + encodeURIComponent(accId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Device-ID': accId,
        'Authorization': 'Bearer ' + (localStorage.getItem('zvpn_web_token') || accId)
      },
      body: JSON.stringify({ account_id: accId })
    });
    const data = await res.json();
    if (data.success) {
      alert(currentLang === 'ar' ?
        'تهانينا! حصلت على +' + data.reward_claimed + ' نقطة مكافأة دخول متتالي!' :
        'Congratulations! Claimed +' + data.reward_claimed + ' Streak Points!');
      if (typeof data.new_total_points === 'number') {
        currentUser.total_points = data.new_total_points;
        localStorage.setItem('zvpn_web_user', JSON.stringify(currentUser));
        updateUserNavUI(currentUser);
        renderAccountModalUI(currentUser);
      }
      refreshAccountData(false);
    } else {
      alert(data.error || 'Already claimed today.');
      refreshAccountData(false);
    }
  } catch (e) {
    alert('Streak claim error: ' + e.message);
  }
}

async function redeemKeyToAccount() {
  if (!currentUser) return;
  const input = document.getElementById('acc-redeem-input');
  const btn = document.getElementById('acc-redeem-btn');
  const msg = document.getElementById('acc-redeem-msg');
  const key = input.value.trim().toUpperCase();

  if (!key) {
    alert(currentLang === 'ar' ? 'يرجى إدخال مفتاح الترخيص.' : 'Please enter a license key.');
    return;
  }

  btn.disabled = true;
  btn.textContent = '...';
  msg.style.display = 'none';

  try {
    const accId = currentUser.account_key || ('user_' + currentUser.uid);
    const res = await fetch('/api/v1/license/activate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        license_key: key,
        account_id: accId
      })
    });

    const data = await res.json();
    btn.disabled = false;
    btn.textContent = currentLang === 'ar' ? 'تفعيل الكود' : 'Redeem';

    if (data.success) {
      msg.style.display = 'block';
      msg.style.color = 'var(--success)';
      msg.textContent = '✓ ' + (data.message || 'Key successfully bound to account!');
      input.value = '';
      refreshAccountData(false);
    } else {
      msg.style.display = 'block';
      msg.style.color = 'var(--danger)';
      msg.textContent = '✗ ' + (data.error || 'Invalid license key.');
    }
  } catch (e) {
    btn.disabled = false;
    btn.textContent = 'Redeem';
    msg.style.display = 'block';
    msg.style.color = 'var(--danger)';
    msg.textContent = '✗ Network error: ' + e.message;
  }
}

function copyAccountId() {
  if (!currentUser) return;
  const accId = currentUser.account_key || ('user_' + currentUser.uid);
  navigator.clipboard.writeText(accId).then(() => {
    alert(currentLang === 'ar' ? 'تم نسخ معرف الحساب: ' + accId : 'Account ID copied: ' + accId);
  });
}

function copyReferralLink() {
  const link = document.getElementById('acc-ref-link').value;
  navigator.clipboard.writeText(link).then(() => {
    alert(currentLang === 'ar' ? 'تم نسخ رابط الإحالة الخاص بك!' : 'Referral link copied to clipboard!');
  });
}

function signOutWeb() {
  currentUser = null;
  localStorage.removeItem('zvpn_web_user');
  localStorage.removeItem('zvpn_web_token');
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    google.accounts.id.disableAutoSelect();
  }
  updateUserNavUI(null);
  closeAccountModal();
  alert(currentLang === 'ar' ? 'تم تسجيل الخروج بنجاح.' : 'Signed out successfully.');
}

// Checkout Modal State & Engine
let currentPlanId = 'yearly';
let currentPlanTitle = 'Yearly Ultimate';
let currentPlanPrice = 39.99;
let currentPaymentMethod = 'stripe';

function openCheckout(planId, title, price) {
  currentPlanId = planId;
  currentPlanTitle = title;
  currentPlanPrice = price;
  document.getElementById('modal-plan-title').textContent = title;
  document.getElementById('modal-total-price').textContent = '$' + price.toFixed(2);

  // If user is logged in, auto-fill email and account id
  if (currentUser) {
    const emailInput = document.getElementById('checkout-email');
    const accInput = document.getElementById('checkout-account');
    if (emailInput && !emailInput.value) emailInput.value = currentUser.email || '';
    if (accInput) accInput.value = currentUser.account_key || ('user_' + currentUser.uid);
  }

  document.getElementById('checkout-modal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.remove('open');
}

function selectPaymentMethod(method) {
  currentPaymentMethod = method;
  document.getElementById('method-stripe')?.classList.toggle('active', method === 'stripe');
  document.getElementById('method-paypal')?.classList.toggle('active', method === 'paypal');
  const cryptoEl = document.getElementById('method-crypto') || document.getElementById('method-cryptomus');
  if (cryptoEl) cryptoEl.classList.toggle('active', method === 'crypto' || method === 'cryptomus' || method === 'nowpayments');
  const sha7nawyEl = document.getElementById('method-sha7nawy');
  if (sha7nawyEl) sha7nawyEl.classList.toggle('active', method === 'sha7nawy');

  const phoneGroup = document.getElementById('group-wallet-phone');
  if (phoneGroup) {
    phoneGroup.style.display = (method === 'sha7nawy') ? 'block' : 'none';
  }
}

async function processCheckout() {
  const email = document.getElementById('checkout-email').value.trim();
  const accountId = document.getElementById('checkout-account').value.trim();
  const walletPhone = (document.getElementById('checkout-wallet-phone')?.value || '').trim();
  const submitBtn = document.getElementById('checkout-submit-btn');

  if (!email || !email.includes('@')) {
    alert(currentLang === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح.' : 'Please enter a valid email address.');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = currentLang === 'ar' ? 'جارٍ الاتصال ببوابة الدفع...' : 'Connecting to Gateway...';

  try {
    let endpoint = '/api/v1/checkout/stripe';
    if (currentPaymentMethod === 'paypal') endpoint = '/api/v1/checkout/paypal';
    else if (currentPaymentMethod === 'sha7nawy') endpoint = '/api/v1/checkout/sha7nawy';
    else if (currentPaymentMethod === 'crypto' || currentPaymentMethod === 'cryptomus' || currentPaymentMethod === 'nowpayments') endpoint = '/api/v1/checkout/nowpayments';

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plan_id: currentPlanId,
        plan_title: currentPlanTitle,
        amount: currentPlanPrice,
        email: email,
        account_id: accountId,
        number: walletPhone
      })
    });

    const data = await res.json();
    if (data.mode === 'direct' && data.reference) {
      submitBtn.textContent = (currentLang === 'ar' ? 'تأكيد السحب بعد الهاتف...' : 'Confirming on Phone...');
      const userConfirm = confirm((data.instructions || 'يرجى تأكيد السحب على هاتفك') + '\n\nاضغط OK بعد إدخال الرقم السري لتأكيد المعاملة فوراً.');
      if (userConfirm) {
        submitBtn.textContent = (currentLang === 'ar' ? 'جارٍ تأكيد السحب وإصدار التفعيل...' : 'Issuing license...');
        const confRes = await fetch('/api/v1/checkout/sha7nawy/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reference: data.reference, order_id: data.order_id })
        });
        const confData = await confRes.json();
        if (confData.success && confData.license_key) {
          window.location.href = '/?success=true&gateway=sha7nawy&order_id=' + data.order_id;
          return;
        } else {
          alert(confData.message || (currentLang === 'ar' ? 'سيتم تأكيد المعاملة تلقائياً خلال دقائق بمجرد خصم المبلغ.' : 'Payment will be confirmed automatically once approved.'));
        }
      }
      submitBtn.disabled = false;
      submitBtn.textContent = 'Proceed to Secure Payment';
      return;
    } else if (data.url) {
      window.location.href = data.url;
    } else if (data.error) {
      alert('Checkout error: ' + data.error);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Proceed to Secure Payment';
    }
  } catch (err) {
    alert('Payment gateway request failed: ' + err.message);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Proceed to Secure Payment';
  }
}

// License Key Verification
async function verifyLicenseKey() {
  const input = document.getElementById('license-input');
  const key = input.value.trim().toUpperCase();
  const resultDiv = document.getElementById('license-result');

  if (!key) {
    alert(currentLang === 'ar' ? 'يرجى إدخال مفتاح الترخيص.' : 'Please enter a license key.');
    return;
  }

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = '<span style="color: var(--text-muted);">Checking license validity in edge database...</span>';

  try {
    const res = await fetch('/api/v1/license/check?key=' + encodeURIComponent(key));
    const data = await res.json();
    if (data.valid) {
      resultDiv.style.background = 'rgba(46, 213, 115, 0.1)';
      resultDiv.style.border = '1px solid var(--success)';
      resultDiv.innerHTML = '<div style="color: var(--success); font-weight: 700; font-size: 1.1rem; margin-bottom: 6px;">✓ ' + (currentLang === 'ar' ? 'الترخيص صالح ونشط' : 'License Key Active & Valid') + '</div>' +
        '<div style="font-size: 0.95rem; color: #fff;">' +
        '<b>Tier:</b> ' + (data.tier || 'PREMIUM_PLUS').toUpperCase() + ' | ' +
        '<b>Points Balance:</b> ' + (data.points || 0) + ' PTS | ' +
        '<b>Expires:</b> ' + (data.valid_until ? new Date(data.valid_until).toLocaleDateString() : 'Lifetime') +
        '</div>';
    } else {
      resultDiv.style.background = 'rgba(255, 71, 87, 0.1)';
      resultDiv.style.border = '1px solid var(--danger)';
      resultDiv.innerHTML = '<span style="color: var(--danger); font-weight: 700;">✗ ' + (data.error || 'Invalid or expired license key.') + '</span>';
    }
  } catch (e) {
    resultDiv.innerHTML = '<span style="color: var(--danger);">Network error: ' + e.message + '</span>';
  }
}

function copyLicenseKey() {
  const key = document.getElementById('issued-key').textContent;
  navigator.clipboard.writeText(key).then(() => {
    alert(currentLang === 'ar' ? 'تم نسخ مفتاح الترخيص بنجاح!' : 'License key copied to clipboard!');
  });
}

// Check if user just returned from successful checkout
(async function checkPaymentReturn() {
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');
  const orderId = urlParams.get('order_id');
  const paypalOrderId = urlParams.get('paypal_order_id') || urlParams.get('token');
  const isSuccess = urlParams.get('success') === 'true';

  if (sessionId || orderId || paypalOrderId || isSuccess) {
    const successContainer = document.getElementById('payment-success-container');
    const issuedKeyEl = document.getElementById('issued-key');
    successContainer.style.display = 'block';
    issuedKeyEl.textContent = 'Verifying and issuing license...';

    try {
      let query = '';
      if (sessionId) query = 'session_id=' + sessionId;
      else if (paypalOrderId) query = 'paypal_order_id=' + paypalOrderId;
      else if (orderId) query = 'order_id=' + orderId;

      const verifyUrl = '/api/v1/checkout/verify-session?' + query;
      const res = await fetch(verifyUrl);
      const data = await res.json();
      if (data.paid && data.license_key) {
        issuedKeyEl.textContent = data.license_key;
        if (currentUser) {
          refreshAccountData(false);
        }
      } else {
        issuedKeyEl.textContent = data.error || 'Awaiting gateway confirmation... Please refresh in a moment.';
      }
    } catch (e) {
      issuedKeyEl.textContent = 'Verification error: ' + e.message;
    }
  }
})();

// Check if user returned from exe.io Sponsor Shortlink redirect
(async function checkExeIoReturn() {
  const urlParams = new URLSearchParams(window.location.search);
  const rewardParam = urlParams.get('reward');
  const rewardClaimed = urlParams.get('reward_claimed');

  if (rewardParam === 'points' || rewardClaimed === '1' || urlParams.has('exeio_done')) {
    try {
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    } catch (_) {}

    setTimeout(async () => {
      try {
        const nonce = 'exeio_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
        const res = await fetch('/api/v1/user/ad-reward', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            reward_points: 15,
            nonce: nonce,
            timestamp: Date.now()
          })
        });
        const data = await res.json();
        if (data && data.success) {
          if (typeof refreshAccountData === 'function') refreshAccountData(false);
          const toast = document.createElement('div');
          toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#050608;border:1px solid #C6FF00;border-radius:12px;padding:16px 24px;color:#fff;z-index:999999;box-shadow:0 0 30px rgba(198,255,0,0.3);display:flex;align-items:center;gap:12px;font-weight:700;';
          toast.innerHTML = '<span style="font-size:1.5rem;">🎉</span> <div><div style="color:#C6FF00;font-size:0.95rem;">' + (currentLang === 'ar' ? 'تم تأكيد رابط الراعي بنجاح!' : 'Sponsor Link Verified!') + '</div><div style="color:#aaa;font-size:0.8rem;">' + (currentLang === 'ar' ? 'تمت إضافة +15 نقطة مجانية إلى رصيدك.' : '+15 Free Points added to your balance.') + '</div></div>';
          document.body.appendChild(toast);
          setTimeout(() => { toast.remove(); }, 6000);
        }
      } catch (_) {}
    }, 1000);
  }
})();

// Check if user clicked a plan link from Desktop or Mobile app (Desktop Checkout Bridge)
(function checkPlanUrlParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetPlan = (urlParams.get('plan') || '').toLowerCase();
  const emailParam = urlParams.get('email');
  const accountParam = urlParams.get('account_id') || urlParams.get('device_id');

  if (emailParam) {
    const el = document.getElementById('checkout-email');
    if (el) el.value = emailParam;
  }
  if (accountParam) {
    const el = document.getElementById('checkout-account');
    if (el) el.value = accountParam;
  }

  if (!targetPlan) return;

  const planMap = {
    'weekly': { title: 'Weekly Pro', price: 2.99 },
    'monthly': { title: 'Monthly VIP', price: 7.99 },
    'yearly': { title: 'Yearly Ultimate', price: 39.99 },
    'yearly_plus': { title: 'Yearly Plus (Family)', price: 59.99 },
    'pts_500': { title: '500 Points Pack', price: 1.99 },
    'pts_1200': { title: '1,200 Points Pack', price: 3.99 },
    'pts_3000': { title: '3,000 Points Pack', price: 7.99 },
  };

  const p = planMap[targetPlan];
  if (p) {
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      openCheckout(targetPlan, p.title, p.price);
      if (emailParam) {
        const el = document.getElementById('checkout-email');
        if (el) el.value = emailParam;
      }
      if (accountParam) {
        const el = document.getElementById('checkout-account');
        if (el) el.value = accountParam;
      }
    }, 400);
  }
})();

// Dynamic live server counter sync directly from backend edge API
async function syncLiveServerStats() {
  try {
    const res = await fetch('/health');
    const data = await res.json();
    if (data.total_servers) {
      animateServerCount(data.total_servers, data.total_countries || 82);
    }
  } catch (_) {}
}

function animateServerCount(targetServers, targetCountries) {
  const serverEl = document.getElementById('stat-servers');
  const countryEl = document.getElementById('stat-countries');
  const badgeEl = document.getElementById('hero-badge-text');

  if (countryEl) countryEl.textContent = targetCountries + '+';

  const start = Math.max(0, targetServers - 200);
  const duration = 1200;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (targetServers - start) * ease);
    const formatted = current.toLocaleString() + '+';

    if (serverEl) serverEl.textContent = formatted;
    if (badgeEl) {
      badgeEl.textContent = currentLang === 'ar' ?
        'أكثر من ' + current.toLocaleString() + ' خادم نشط' :
        current.toLocaleString() + '+ Edge Nodes Active';
    }

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      if (serverEl) serverEl.textContent = targetServers.toLocaleString() + '+';
    }
  }
  requestAnimationFrame(tick);
}

// Crypto Donations & QR Modal Handlers
let currentQrAddress = '';
function showQrModal(addr, label) {
  currentQrAddress = addr;
  const modal = document.getElementById('qr-modal');
  const title = document.getElementById('qr-coin-title');
  const badge = document.getElementById('qr-coin-badge');
  const img = document.getElementById('qr-img');
  const display = document.getElementById('qr-addr-display');

  if (title) title.textContent = label;
  if (badge) badge.textContent = label;
  if (display) display.textContent = addr;

  // Clear previous QR and generate locally
  if (img) {
    img.innerHTML = '';
    try {
      new QRCode(img, {
        text: addr,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    } catch(e) {
      // Fallback to external API if library not loaded
      var qrImg = document.createElement('img');
      qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + encodeURIComponent(addr);
      qrImg.style.cssText = 'width:200px;height:200px;display:block;';
      img.appendChild(qrImg);
    }
  }
  if (modal) modal.classList.add('open');
}

function closeQrModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.remove('open');
}

function copyQrAddr() {
  if (!currentQrAddress) return;
  navigator.clipboard.writeText(currentQrAddress).then(() => {
    alert(currentLang === 'ar' ? 'تم نسخ العنوان بنجاح!' : 'Wallet address copied to clipboard!');
  });
}

function copyCryptoAddr(addr, label) {
  navigator.clipboard.writeText(addr).then(() => {
    alert((currentLang === 'ar' ? 'تم نسخ عنوان ' : 'Copied address for ') + label + '!');
  });
}

// Terminal CLI Tab Switcher & Clipboard
const CLI_COMMANDS = {
  ps:    'irm https://z-vpn.site/install.ps1 | iex',
  cmd:   'powershell -NoP -c "irm https://z-vpn.site/install.ps1 | iex"',
  linux: 'curl -fsSL https://z-vpn.site/install.sh | bash',
  mac:   'curl -fsSL https://z-vpn.site/install.sh | bash'
};

function selectCliTab(tab) {
  const tabs = ['ps', 'cmd', 'linux', 'mac'];
  tabs.forEach(t => {
    const btn = document.getElementById('tab-btn-' + t);
    if (!btn) return;
    if (t === tab) {
      btn.style.background = 'rgba(198, 255, 0, 0.15)';
      btn.style.color = '#C6FF00';
      btn.style.border = '1px solid rgba(198, 255, 0, 0.3)';
    } else {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-muted)';
      btn.style.border = '1px solid transparent';
    }
  });
  const display = document.getElementById('cli-cmd-display');
  if (display) display.textContent = CLI_COMMANDS[tab] || CLI_COMMANDS.ps;
}

function copyCliCommand() {
  const display = document.getElementById('cli-cmd-display');
  const text = display ? display.textContent.trim() : CLI_COMMANDS.ps;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy-cli');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = 'Copied!';
      btn.style.borderColor = '#C6FF00';
      btn.style.color = '#C6FF00';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.borderColor = 'rgba(255,255,255,0.2)';
        btn.style.color = '#fff';
      }, 2000);
    }
  });
}

window.selectCliTab = selectCliTab;
window.copyCliCommand = copyCliCommand;

// ── Server Configs Hub & Monetized Downloads (Top 6 Showcase) ──
let allFeaturedConfigs = [
  { id: 'vpngate_164.70.136.183_1671_1823', name: 'Japan Ultra #1823', country: 'Japan', country_code: 'JP', flag: '🇯🇵', protocol: 'openvpn', speed_mbps: 928, latency_ms: 2, cost_points: 5 },
  { id: 'vpngate_70.184.69.178_1505_536', name: 'United States High-Speed #536', country: 'United States', country_code: 'US', flag: '🇺🇸', protocol: 'openvpn', speed_mbps: 324, latency_ms: 7, cost_points: 5 },
  { id: 'omgvpn_omgvip_DE01.GIAMPING.COM_185.220.101.5_10', name: 'Germany Frankfurt #10', country: 'Germany', country_code: 'DE', flag: '🇩🇪', protocol: 'openvpn', speed_mbps: 450, latency_ms: 28, cost_points: 5 },
  { id: 'omgvpn_omgvip_GB01.GIAMPING.COM_185.220.102.5_15', name: 'United Kingdom London #15', country: 'United Kingdom', country_code: 'GB', flag: '🇬🇧', protocol: 'openvpn', speed_mbps: 380, latency_ms: 32, cost_points: 5 },
  { id: 'omgvpn_omgvip_SG01.GIAMPING.COM_185.220.103.5_20', name: 'Singapore SuperNode #20', country: 'Singapore', country_code: 'SG', flag: '🇸🇬', protocol: 'openvpn', speed_mbps: 520, latency_ms: 18, cost_points: 5 },
  { id: 'publicvpnlist_pvl_45aac3cd402fac6a15dab04d_7', name: 'France Paris #7', country: 'France', country_code: 'FR', flag: '🇫🇷', protocol: 'openvpn', speed_mbps: 280, latency_ms: 35, cost_points: 5 }
];
let currentSelectedConfig = null;
let adCountdownInterval = null;

async function loadFeaturedConfigs() {
  const container = document.getElementById('configs-grid-container');
  if (!container) return;
  // Render initial top 6 servers instantly
  if (allFeaturedConfigs && allFeaturedConfigs.length > 0) {
    renderConfigCards(allFeaturedConfigs);
  }
  try {
    const res = await fetch('/api/v1/servers/featured-configs?limit=6');
    const data = await res.json();
    if (data.success && Array.isArray(data.servers) && data.servers.length > 0) {
      allFeaturedConfigs = data.servers.slice(0, 6);
      renderConfigCards(allFeaturedConfigs);
    }
  } catch (err) {
    console.warn('Featured configs dynamic refresh:', err);
  }
}

function renderConfigCards(servers) {
  const container = document.getElementById('configs-grid-container');
  if (!container) return;
  const displayServers = (servers || []).slice(0, 6);
  if (!displayServers || displayServers.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">' +
      (currentLang === 'ar' ? 'لا توجد سيرفرات مطابقة لهذا الفلتر حالياً.' : 'No matching server configs found for this filter.') +
      '</p>';
    return;
  }

  container.innerHTML = displayServers.map(function(s) {
    const pingClass = s.latency_ms < 50 ? 'ping-good' : '';
    const protoLabel = (s.protocol || 'OPENVPN').toUpperCase();
    const btnText = currentLang === 'ar' ? 'تحميل السيرفر' : 'Download Config';
    return '<div class="config-card">' +
      '<div>' +
        '<div class="config-card-header">' +
          '<div class="config-country-box">' +
            '<span class="config-flag">' + renderCyberFlag(s.country_code) + '</span>' +
            '<div>' +
              '<div class="config-country-title">' + s.country + '</div>' +
              '<div class="config-country-sub">' + s.name + '</div>' +
            '</div>' +
          '</div>' +
          '<span class="config-proto-badge">' + protoLabel + '</span>' +
        '</div>' +
        '<div class="config-stats-row">' +
          '<div class="config-stat-item">' +
            '<span class="config-stat-label">' + (currentLang === 'ar' ? 'الاستجابة' : 'Latency') + '</span>' +
            '<span class="config-stat-value ' + pingClass + '">⚡ ' + s.latency_ms + ' ms</span>' +
          '</div>' +
          '<div class="config-stat-item" style="margin-left: auto;">' +
            '<span class="config-stat-label">' + (currentLang === 'ar' ? 'السرعة' : 'Uplink') + '</span>' +
            '<span class="config-stat-value">' + s.speed_mbps + ' Mbps</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="config-actions">' +
        '<button class="config-dl-btn" data-id="' + s.id + '" onclick="openConfigUnlockModal(this.dataset.id)">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ' + btnText +
        '</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

function openConfigUnlockModal(serverId) {
  const s = allFeaturedConfigs.find(function(item) { return item.id === serverId; });
  if (!s) return;
  currentSelectedConfig = s;
  if (adCountdownInterval) { clearInterval(adCountdownInterval); adCountdownInterval = null; }

  const btnAd = document.getElementById('btn-unlock-ad');
  const btnPts = document.getElementById('btn-unlock-pts');
  if (btnAd) {
    btnAd.disabled = false;
    btnAd.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg> ' +
      (currentLang === 'ar' ? 'مشاهدة إعلان الراعي والتحميل مجاناً (+10 نقاط)' : 'Watch Sponsor Ad & Download Free (+10 Pts)');
  }
  if (btnPts) {
    btnPts.disabled = false;
    btnPts.innerHTML = currentLang === 'ar' ? 'خصم 5 نقاط والتحميل الفوري' : 'Deduct 5 Points & Download Now';
  }

  document.getElementById('modal-cfg-flag').innerHTML = renderCyberFlag(s.country_code, 'lg');
  document.getElementById('modal-cfg-name').textContent = s.country + ' – ' + s.name;
  document.getElementById('modal-cfg-proto').textContent = (s.protocol || 'OPENVPN').toUpperCase();
  document.getElementById('modal-cfg-ping').innerHTML = '<svg class="cyber-svg-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> ' + s.latency_ms + ' ms';
  document.getElementById('modal-cfg-speed').textContent = s.speed_mbps + ' Mbps';

  const userPts = currentUser ? (currentUser.total_points || 0) : 0;
  const ptsEl = document.getElementById('modal-cfg-user-pts');
  if (ptsEl) ptsEl.textContent = (currentLang === 'ar' ? 'رصيدك: ' : 'Your Balance: ') + userPts + ' pts';

  const statusEl = document.getElementById('modal-cfg-status');
  if (statusEl) {
    statusEl.style.display = 'none';
    statusEl.textContent = '';
  }

  const modal = document.getElementById('unlock-config-modal');
  if (modal) modal.classList.add('open');
}

function closeConfigUnlockModal() {
  if (adCountdownInterval) { clearInterval(adCountdownInterval); adCountdownInterval = null; }
  const modal = document.getElementById('unlock-config-modal');
  if (modal) modal.classList.remove('open');
  currentSelectedConfig = null;
}

async function confirmConfigUnlock(method) {
  if (!currentSelectedConfig) return;
  const statusEl = document.getElementById('modal-cfg-status');
  const btnAd = document.getElementById('btn-unlock-ad');
  const btnPts = document.getElementById('btn-unlock-pts');

  if (method === 'points') {
    const curPts = currentUser ? (currentUser.total_points || 0) : 0;
    if (curPts < 5) {
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.style.background = 'rgba(255, 71, 87, 0.15)';
        statusEl.style.color = '#ff4757';
        statusEl.innerHTML = currentLang === 'ar'
          ? '⚠️ رصيد نقاطك غير كافٍ (تحتاج 5 نقاط). اضغط على <b>مشاهدة إعلان الراعي</b> للتحميل مجاناً وربح +10 نقاط فوراً!'
          : '⚠️ Insufficient points (requires 5 pts). Click <b>Watch Sponsor Ad</b> to download free & earn +10 bonus points!';
      }
      return;
    }
    await executeDownloadProcess('points');
    return;
  }

  if (method === 'ad') {
    if (btnAd) btnAd.disabled = true;
    if (btnPts) btnPts.disabled = true;
    try { window.open('https://exe.io/Ft7gILD', '_blank', 'noopener'); } catch (_) {}

    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = 'rgba(198, 255, 0, 0.1)';
      statusEl.style.color = '#C6FF00';
      statusEl.style.border = '1px solid rgba(198, 255, 0, 0.3)';
    }

    let seconds = 5;
    const renderTimer = function() {
      if (statusEl) {
        statusEl.innerHTML = currentLang === 'ar'
          ? '🎬 <b>جاري عرض رابط الراعي (exe.io)...</b> يرجى الانتظار <span style="font-size:1.1rem; font-weight:800; color:#fff;">(' + seconds + ' ثوانٍ)</span> لفك القفل مجاناً وربح +10 نقاط.'
          : '🎬 <b>Viewing Sponsor Link (exe.io)...</b> Please wait <span style="font-size:1.1rem; font-weight:800; color:#fff;">(' + seconds + 's)</span> to unlock free & claim +10 bonus pts.';
      }
      if (btnAd) {
        btnAd.textContent = currentLang === 'ar' ? 'جاري التحقق من الرابط (' + seconds + 's)...' : 'Verifying Link (' + seconds + 's)...';
      }
    };
    renderTimer();

    adCountdownInterval = setInterval(async function() {
      seconds--;
      if (seconds > 0) {
        renderTimer();
      } else {
        clearInterval(adCountdownInterval);
        adCountdownInterval = null;
        if (statusEl) {
          statusEl.style.background = 'rgba(0, 229, 255, 0.15)';
          statusEl.style.color = '#00e5ff';
          statusEl.innerHTML = currentLang === 'ar'
            ? '✓ <b>تمت مشاهدة الإعلان بنجاح!</b> جاري فك التشفير وتنزيل ملف السيرفر...'
            : '✓ <b>Ad verified successfully!</b> Decrypting config & downloading...';
        }
        await executeDownloadProcess('ad');
      }
    }, 1000);
  }
}

async function executeDownloadProcess(method) {
  const statusEl = document.getElementById('modal-cfg-status');
  const btnAd = document.getElementById('btn-unlock-ad');
  const btnPts = document.getElementById('btn-unlock-pts');
  const accId = currentUser ? (currentUser.account_key || ('user_' + currentUser.uid)) : 'dev_guest';

  try {
    const res = await fetch('/api/v1/servers/download-config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        server_id: currentSelectedConfig.id,
        unlock_method: method,
        account_id: accId
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      if (statusEl) {
        statusEl.style.background = 'rgba(255, 71, 87, 0.15)';
        statusEl.style.color = '#ff4757';
        statusEl.textContent = data.error || (currentLang === 'ar' ? 'فشل فك قفل السيرفر.' : 'Failed to unlock config.');
      }
      if (btnAd) btnAd.disabled = false;
      if (btnPts) btnPts.disabled = false;
      return;
    }

    // Trigger Instant File Download in Browser
    const blob = new Blob([data.config_data], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = data.filename || 'zvpn-profile.ovpn';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      try { document.body.removeChild(a); } catch (_) {}
      URL.revokeObjectURL(url);
    }, 200);

    // Update local user points
    if (currentUser) {
      currentUser.total_points = data.remaining_points;
      localStorage.setItem('zvpn_web_user', JSON.stringify(currentUser));
      updateUserNavUI(currentUser);
    }
    const ptsEl = document.getElementById('modal-cfg-user-pts');
    if (ptsEl) ptsEl.textContent = (currentLang === 'ar' ? 'رصيدك: ' : 'Your Balance: ') + (data.remaining_points || 0) + ' pts';

    if (statusEl) {
      statusEl.style.background = 'rgba(46, 213, 115, 0.15)';
      statusEl.style.color = '#2ed573';
      statusEl.innerHTML = currentLang === 'ar'
        ? '✓ <b>تم فك القفل وبدء التحميل فوراً!</b> تم تحديث نقاطك: ' + (data.remaining_points || 0) + ' نقطة.'
        : '✓ <b>Config unlocked & downloaded successfully!</b> Points balance: ' + (data.remaining_points || 0) + ' pts.';
    }

    setTimeout(function() {
      closeConfigUnlockModal();
      if (btnAd) btnAd.disabled = false;
      if (btnPts) btnPts.disabled = false;
    }, 2200);
  } catch (err) {
    if (statusEl) {
      statusEl.style.background = 'rgba(255, 71, 87, 0.15)';
      statusEl.style.color = '#ff4757';
      statusEl.textContent = (currentLang === 'ar' ? 'حدث خطأ أثناء التحميل: ' : 'Error: ') + err.message;
    }
    if (btnAd) btnAd.disabled = false;
    if (btnPts) btnPts.disabled = false;
  }
}

window.loadFeaturedConfigs = loadFeaturedConfigs;
window.openConfigUnlockModal = openConfigUnlockModal;
window.closeConfigUnlockModal = closeConfigUnlockModal;
window.confirmConfigUnlock = confirmConfigUnlock;

syncLiveServerStats();
loadFeaturedConfigs();

// ── ZVPN Custom Cursor Trail ──────────────────────────────────────────────────
(function initCursorTrail() {
  var trail = document.getElementById('zvpn-cursor-trail');
  if (!trail || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)) return;
  var tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener('pointermove', function(e) { tx = e.clientX; ty = e.clientY; trail.style.opacity = '1'; });
  document.addEventListener('pointerdown', function() {
    trail.style.width = '20px'; trail.style.height = '20px';
    trail.style.borderColor = 'rgba(0,229,255,0.9)';
  });
  document.addEventListener('pointerup', function() {
    trail.style.width = '34px'; trail.style.height = '34px';
    trail.style.borderColor = 'rgba(198,255,0,0.5)';
  });
  (function animate() {
    cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
    trail.style.transform = 'translate(' + (cx - 17) + 'px,' + (cy - 17) + 'px)';
    requestAnimationFrame(animate);
  })();
})();
</script>
</body>
</html>`;
}
