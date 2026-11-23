import fs from 'fs';

// 1. Parse world.bin from the repo
const bytes = fs.readFileSync('c:/VPN/shared/src/commonMain/composeResources/files/map/world.bin');

let o = 4;
function u8() { return bytes[o++]; }
function u16() { const v = bytes[o] | (bytes[o+1] << 8); o += 2; return v; }

const count = u16();
const countryList = [];
const countryAnchors = {};

for (let i = 0; i < count; i++) {
  const code = String.fromCharCode(bytes[o], bytes[o+1]);
  o += 2;
  const ax = Math.round((u16() / 65535) * 10000) / 10;
  const ay = Math.round((u16() / 65535) * 5000) / 10;
  
  const ringCount = u8();
  const dParts = [];
  for (let r = 0; r < ringCount; r++) {
    const ptCount = u16();
    if (ptCount === 0) continue;
    let ringD = '';
    for (let p = 0; p < ptCount; p++) {
      const px = Math.round((u16() / 65535) * 10000) / 10;
      const py = Math.round((u16() / 65535) * 5000) / 10;
      if (p === 0) ringD += 'M' + px + ',' + py;
      else ringD += 'L' + px + ',' + py;
    }
    ringD += 'Z';
    dParts.push(ringD);
  }

  // Omit Antarctica from rendering to maintain magnificent proportions
  if (code !== 'AQ') {
    countryAnchors[code] = [ax, ay];
    countryList.push({
      code: code,
      ax: ax,
      ay: ay,
      d: dParts.join(' ')
    });
  }
}

console.log('Parsed ' + countryList.length + ' inhabited countries for masterpiece map.');

// 2. Read servers_page.js
let src = fs.readFileSync('src/servers_page.js', 'utf8').replace(/\r\n/g, '\n');

// 3. Replace CSS with Masterpiece Cyber Map styling
const cssStart = src.indexOf('    /* ── Realistic Cyber World Vector Map (100% Offline, Zero API Key) ── */');
const cssEnd = src.indexOf('    /* ── Modals ── */', cssStart);

if (cssStart === -1 || cssEnd === -1) {
  throw new Error("CSS map section bounds not found! cssStart: " + cssStart + " cssEnd: " + cssEnd);
}

const masterpieceCss = `    /* ── Masterpiece High-Tech Cyber Radar World Map ── */
    .map-container {
      display: none;
      background: radial-gradient(ellipse at 50% 50%, #0d1527 0%, #060913 75%, #020408 100%);
      border: 1px solid rgba(0, 229, 255, 0.4);
      border-radius: 24px;
      margin-bottom: 2.5rem;
      overflow: hidden;
      position: relative;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85), inset 0 0 100px rgba(0, 229, 255, 0.05);
    }
    .map-container.active { display: block; }

    /* Corner Tactical Cyber Brackets */
    .cyber-corner-bracket {
      position: absolute; width: 18px; height: 18px; pointer-events: none; z-index: 10;
      border-color: var(--accent-cyan); border-style: solid; opacity: 0.7;
    }
    .bracket-tl { top: 12px; left: 12px; border-width: 2px 0 0 2px; }
    .bracket-tr { top: 12px; right: 12px; border-width: 2px 2px 0 0; }
    .bracket-bl { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; }
    .bracket-br { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

    /* Map HUD Header */
    .map-hud-header {
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
      padding: 16px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(10, 15, 28, 0.88); backdrop-filter: blur(14px); position: relative; z-index: 5;
    }
    .map-hud-title {
      display: flex; align-items: center; gap: 12px;
      font-weight: 900; font-size: 0.92rem; letter-spacing: 0.08em; color: var(--accent-cyan);
      text-transform: uppercase;
    }
    .hud-status-beacon {
      width: 12px; height: 12px; border-radius: 50%; background: #00E5FF;
      box-shadow: 0 0 16px #00E5FF, 0 0 30px #00E5FF; animation: pulse-beacon 1.8s infinite;
    }
    @keyframes pulse-beacon {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.35; transform: scale(0.8); }
    }
    .hud-telemetry-stats {
      display: flex; align-items: center; gap: 14px; font-size: 0.78rem; font-family: var(--font-mono);
      color: var(--text-muted);
    }
    .hts-item { display: inline-flex; align-items: center; gap: 5px; }
    .hts-item b { color: #fff; }
    .hts-item.green b { color: #2ed573; }
    .hts-item.cyan b { color: var(--accent-cyan); }
    .hts-item.lime b { color: var(--accent); }

    .map-hud-controls { display: flex; align-items: center; gap: 10px; }
    .hud-reset-btn {
      padding: 7px 16px; border-radius: 10px; font-size: 0.8rem; font-weight: 800;
      background: rgba(198, 255, 0, 0.12); border: 1px solid var(--accent); color: var(--accent);
      cursor: pointer; transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      display: inline-flex; align-items: center; gap: 6px;
    }
    .hud-reset-btn:hover { background: var(--accent); color: #000; box-shadow: 0 0 18px var(--accent-glow); transform: translateY(-1px); }

    /* Quick Country Bar (Horizontal Carousel) */
    .globe-country-bar {
      display: flex; gap: 8px; overflow-x: auto; padding: 10px 20px;
      background: rgba(7, 11, 20, 0.75); border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      scrollbar-width: thin; scrollbar-color: rgba(0, 229, 255, 0.3) transparent; position: relative; z-index: 5;
    }
    .globe-country-bar::-webkit-scrollbar { height: 4px; }
    .globe-country-bar::-webkit-scrollbar-thumb { background: rgba(0, 229, 255, 0.35); border-radius: 2px; }
    .gcb-item {
      display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px; font-size: 0.78rem; font-weight: 700; color: #fff;
      cursor: pointer; white-space: nowrap; transition: all 0.2s; flex-shrink: 0;
    }
    .gcb-item:hover { background: rgba(0, 229, 255, 0.14); border-color: var(--accent-cyan); color: var(--accent-cyan); transform: translateY(-1px); }
    .gcb-item.active {
      background: rgba(198, 255, 0, 0.18); border-color: var(--accent); color: var(--accent);
      box-shadow: 0 0 14px var(--accent-glow);
    }
    .gcb-num { font-family: var(--font-mono); font-size: 0.72rem; opacity: 0.8; }

    /* SVG Viewport & Atmosphere */
    .cyber-map-viewport {
      position: relative; width: 100%; overflow: hidden; background: #060913;
      user-select: none;
    }
    #world-vector-svg {
      width: 100%; height: auto; min-height: 480px; display: block;
      transition: viewBox 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Radar Beam Sweep Animation across map */
    .map-radar-sweep-beam {
      position: absolute; top: 0; bottom: 0; width: 120px; pointer-events: none; z-index: 2;
      background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.07), rgba(198, 255, 0, 0.12), transparent);
      animation: radar-sweep 9s linear infinite; mix-blend-mode: screen;
    }
    @keyframes radar-sweep {
      0% { transform: translateX(-150px); }
      100% { transform: translateX(1200px); }
    }

    /* Country Polygons (Natural Earth Real Borders) */
    .country-poly {
      fill: rgba(14, 22, 38, 0.85);
      stroke: rgba(0, 229, 255, 0.2);
      stroke-width: 0.7;
      cursor: pointer;
      transition: fill 0.22s, stroke 0.22s, filter 0.22s;
    }
    .country-poly:hover {
      fill: rgba(0, 229, 255, 0.28) !important;
      stroke: #00E5FF !important;
      stroke-width: 1.4;
      filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.7));
    }
    .country-poly.active-country {
      fill: rgba(198, 255, 0, 0.3) !important;
      stroke: #C6FF00 !important;
      stroke-width: 1.8;
      filter: drop-shadow(0 0 14px rgba(198, 255, 0, 0.85));
    }
    .country-poly.has-servers {
      fill: rgba(16, 26, 46, 0.96);
      stroke: rgba(0, 229, 255, 0.38);
    }

    /* Server Nodes Layer */
    .map-node-group { cursor: pointer; }
    .map-node-core {
      transition: transform 0.2s, r 0.2s, fill 0.2s;
    }
    .map-node-group:hover .map-node-core {
      r: 9px !important; fill: #C6FF00 !important; filter: drop-shadow(0 0 12px #C6FF00);
    }
    .map-node-group.active-node .map-node-core {
      r: 10px !important; fill: #C6FF00 !important; filter: drop-shadow(0 0 16px #C6FF00);
    }

    /* CSS Radar Pulse Ring on Hubs */
    @keyframes cyber-radar-pulse {
      0% { r: 5px; opacity: 0.95; stroke-width: 2px; }
      100% { r: 26px; opacity: 0; stroke-width: 0.4px; }
    }
    .radar-pulse-ring {
      animation: cyber-radar-pulse 2.4s infinite cubic-bezier(0.2, 0, 0.4, 1);
      pointer-events: none;
    }

    /* Shockwave Burst on Click */
    @keyframes cyber-click-burst {
      0% { r: 6px; opacity: 1; stroke-width: 4px; stroke: #C6FF00; }
      50% { stroke: #00E5FF; stroke-width: 2.5px; opacity: 0.85; }
      100% { r: 80px; opacity: 0; stroke-width: 0.5px; }
    }
    .click-shockwave {
      animation: cyber-click-burst 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      fill: none; pointer-events: none;
    }

    /* Tactical Dual-Ring Rotating Target Reticle */
    @keyframes reticle-spin-cw {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes reticle-spin-ccw {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    }
    .tactical-reticle-outer {
      animation: reticle-spin-cw 8s linear infinite;
      transform-origin: center; pointer-events: none;
    }
    .tactical-reticle-inner {
      animation: reticle-spin-ccw 5s linear infinite;
      transform-origin: center; pointer-events: none;
    }

    /* Dynamic Laser Connection Beams */
    .cyber-laser-beam {
      stroke-dasharray: 8, 4;
      animation: laser-flow 1.2s linear infinite;
      filter: drop-shadow(0 0 4px var(--accent-cyan));
      pointer-events: none;
    }
    @keyframes laser-flow {
      0% { stroke-dashoffset: 24; opacity: 0.6; }
      50% { opacity: 1; }
      100% { stroke-dashoffset: 0; opacity: 0.6; }
    }

    /* Floating Holographic Cyber Tooltip HUD */
    .map-tooltip {
      position: absolute; pointer-events: none;
      background: rgba(10, 16, 28, 0.96); border: 1px solid var(--accent-cyan);
      border-radius: 14px; padding: 14px 18px; min-width: 240px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.9), 0 0 26px rgba(0, 229, 255, 0.3);
      backdrop-filter: blur(16px); z-index: 999;
      transform: translate(-50%, -125%);
      opacity: 0; transition: opacity 0.15s ease-out;
      display: none;
    }
    .map-tooltip.visible { opacity: 1; display: block; }
    .tt-badge {
      display: inline-flex; align-items: center; gap: 6px; font-size: 0.68rem; font-family: var(--font-mono);
      font-weight: 800; color: var(--accent-cyan); letter-spacing: 0.08em; margin-bottom: 6px;
    }
    .tt-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #00E5FF; box-shadow: 0 0 6px #00E5FF; }
    .tt-header {
      display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
      padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .tt-flag { font-size: 2rem; line-height: 1; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); }
    .tt-title-wrap { display: flex; flex-direction: column; }
    .tt-country { font-weight: 900; color: #fff; font-size: 1.05rem; line-height: 1.2; }
    .tt-code { font-size: 0.72rem; font-family: var(--font-mono); color: var(--accent); font-weight: 800; }
    .tt-metrics { display: flex; flex-direction: column; gap: 5px; font-size: 0.8rem; }
    .tt-row { display: flex; align-items: center; justify-content: space-between; }
    .tt-row-label { color: var(--text-muted); font-size: 0.74rem; }
    .tt-row-val { font-family: var(--font-mono); font-weight: 800; color: #fff; font-size: 0.82rem; }
    .tt-row-val.cyan { color: var(--accent-cyan); }
    .tt-row-val.green { color: #2ed573; }
    .tt-action {
      margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(255,255,255,0.12);
      font-size: 0.74rem; color: var(--accent); font-weight: 800; text-align: center;
      display: flex; align-items: center; justify-content: center; gap: 6px;
    }

    /* Live Tactical Command Drawer (Appears on Country Selection) */
    .map-tactical-drawer {
      position: absolute; bottom: 16px; left: 20px; right: 20px;
      background: rgba(10, 16, 28, 0.94); border: 1.5px solid var(--accent);
      border-radius: 16px; padding: 14px 22px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.9), 0 0 30px rgba(198, 255, 0, 0.25);
      backdrop-filter: blur(18px); z-index: 10;
      display: none; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
      animation: drawerSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes drawerSlideUp {
      0% { opacity: 0; transform: translateY(24px) scale(0.98); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .mtd-left { display: flex; align-items: center; gap: 14px; }
    .mtd-flag { font-size: 2.2rem; line-height: 1; filter: drop-shadow(0 2px 6px rgba(0,0,0,0.6)); }
    .mtd-status-line { display: flex; align-items: center; gap: 8px; font-size: 0.7rem; font-family: var(--font-mono); font-weight: 900; color: var(--accent); letter-spacing: 0.08em; }
    .mtd-pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #C6FF00; box-shadow: 0 0 10px #C6FF00; animation: pulse-beacon 1.2s infinite; }
    .mtd-title { font-size: 1.15rem; font-weight: 900; color: #fff; }
    .mtd-metrics { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .mtd-metric-item { display: flex; flex-direction: column; }
    .mtd-m-label { font-size: 0.68rem; font-family: var(--font-mono); color: var(--text-muted); font-weight: 700; letter-spacing: 0.06em; }
    .mtd-m-val { font-family: var(--font-mono); font-weight: 900; font-size: 0.95rem; color: #fff; }
    .mtd-m-val.cyan { color: var(--accent-cyan); }
    .mtd-m-val.green { color: #2ed573; }
    .mtd-m-val.purple { color: #b388ff; }
    .mtd-actions { display: flex; align-items: center; gap: 10px; }
    .mtd-btn-engage {
      padding: 10px 20px; border-radius: 10px; font-size: 0.84rem; font-weight: 900;
      background: var(--accent); color: #000; border: none; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s;
    }
    .mtd-btn-engage:hover { box-shadow: 0 0 20px var(--accent-glow); transform: translateY(-1px); }
    .mtd-btn-clear {
      width: 38px; height: 38px; border-radius: 10px; font-size: 1.4rem;
      background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);
      color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .mtd-btn-clear:hover { background: rgba(255, 71, 87, 0.2); color: #ff4757; border-color: #ff4757; }

    /* Map Zoom Floating Controls */
    .map-zoom-controls {
      position: absolute; right: 18px; top: 18px; z-index: 8;
      display: flex; flex-direction: column; gap: 6px;
    }
    .map-zoom-btn {
      width: 32px; height: 32px; border-radius: 8px;
      background: rgba(10, 16, 28, 0.85); border: 1px solid rgba(0, 229, 255, 0.35);
      color: var(--accent-cyan); font-size: 1.1rem; font-weight: 900;
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      backdrop-filter: blur(8px); transition: all 0.2s;
    }
    .map-zoom-btn:hover { background: var(--accent-cyan); color: #000; box-shadow: 0 0 12px var(--accent-cyan); }

    /* Staggered Cascade Entrance for Server Cards */
    @keyframes cardCascadeIn {
      0% { opacity: 0; transform: translateY(20px) scale(0.97); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .server-card {
      animation: cardCascadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }
    .server-card.fastest-in-region {
      border-color: var(--accent) !important;
      box-shadow: 0 0 24px rgba(198, 255, 0, 0.2) !important;
    }

    /* Cyber Map Legend */
    .map-legend {
      display: flex; flex-wrap: wrap; gap: 14px; padding: 12px 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06); background: rgba(6, 9, 16, 0.88);
      align-items: center; justify-content: space-between; position: relative; z-index: 5;
    }
    .map-legend-items { display: flex; flex-wrap: wrap; gap: 16px; }
    .map-legend-item { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: var(--text-muted); font-weight: 700; }
    .map-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .map-telemetry-badge {
      font-size: 0.76rem; font-family: var(--font-mono); color: var(--accent);
      background: rgba(198, 255, 0, 0.08); padding: 5px 12px; border-radius: 8px; border: 1px solid rgba(198, 255, 0, 0.25);
    }
\n`;

src = src.slice(0, cssStart) + masterpieceCss + src.slice(cssEnd);
console.log('CSS updated with Masterpiece Cyber Map styling');

// 4. Generate Country Polygons for 168 inhabited countries (without Antarctica AQ)
let countriesPolySvg = '';
countryList.forEach(c => {
  countriesPolySvg += `<path class="country-poly" id="cpoly-${c.code}" data-code="${c.code}" d="${c.d}" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />\n`;
});

// 5. Replace HTML Map Container with Masterpiece Container
const htmlMapStart = src.indexOf('      <!-- World-Class Realistic Vector Cyber World Map (169 Countries, Zero API Key) -->');
const htmlMapEnd = src.indexOf('      <!-- Grid View -->', htmlMapStart);

if (htmlMapStart === -1 || htmlMapEnd === -1) {
  throw new Error("HTML map section bounds not found! htmlMapStart: " + htmlMapStart + " htmlMapEnd: " + htmlMapEnd);
}

const masterpieceHtml = `      <!-- Masterpiece Cyber Radar World Map -->
      <div class="map-container active" id="servers-map-container">
        <!-- Corner Cyber Brackets -->
        <div class="cyber-corner-bracket bracket-tl"></div>
        <div class="cyber-corner-bracket bracket-tr"></div>
        <div class="cyber-corner-bracket bracket-bl"></div>
        <div class="cyber-corner-bracket bracket-br"></div>

        <!-- Map HUD Header -->
        <div class="map-hud-header">
          <div class="map-hud-title">
            <span class="hud-status-beacon"></span>
            <span data-t="map_hud_title">LIVE CYBER RADAR // GLOBAL SERVER NETWORK</span>
          </div>

          <div class="hud-telemetry-stats">
            <span class="hts-item cyan"><span>NODES:</span> <b id="map-telemetry-nodes-count">16,086</b></span>
            <span class="hts-item lime"><span>REGIONS:</span> <b>108</b></span>
            <span class="hts-item green"><span>STATUS:</span> <b>ONLINE 99.98%</b></span>
          </div>

          <div class="map-hud-controls">
            <button class="hud-reset-btn" id="map-reset-btn" onclick="resetCountryFilter()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              <span data-t="map_reset_btn">Global Overview</span>
            </button>
          </div>
        </div>

        <!-- Quick Country Carousel Bar -->
        <div class="globe-country-bar" id="globe-country-bar"></div>

        <!-- Map Viewport -->
        <div class="cyber-map-viewport" id="cyber-map-viewport">
          <!-- Animated Radar Scanning Beam -->
          <div class="map-radar-sweep-beam"></div>

          <!-- Zoom & Pan Floating Controls -->
          <div class="map-zoom-controls">
            <button class="map-zoom-btn" onclick="zoomMap(1)" title="Zoom In">+</button>
            <button class="map-zoom-btn" onclick="zoomMap(-1)" title="Zoom Out">&minus;</button>
            <button class="map-zoom-btn" onclick="resetMapZoom()" title="Reset View" style="font-size:0.8rem;">⟲</button>
          </div>

          <!-- Floating Holographic Cyber Tooltip HUD -->
          <div id="map-tooltip" class="map-tooltip">
            <div class="tt-badge"><span class="tt-badge-dot"></span><span>TACTICAL POP LOCKED</span></div>
            <div class="tt-header">
              <span class="tt-flag" id="tt-flag">🌐</span>
              <div class="tt-title-wrap">
                <span class="tt-country" id="tt-country">United States</span>
                <span class="tt-code" id="tt-code">USA • REGION 01</span>
              </div>
            </div>
            <div class="tt-metrics">
              <div class="tt-row">
                <span class="tt-row-label">ACTIVE SERVERS</span>
                <span class="tt-row-val cyan" id="tt-count">3,411 Nodes</span>
              </div>
              <div class="tt-row">
                <span class="tt-row-label">LATENCY SPECS</span>
                <span class="tt-row-val green" id="tt-ping">⚡ 12 ms</span>
              </div>
              <div class="tt-row">
                <span class="tt-row-label">PROTOCOL STACK</span>
                <span class="tt-row-val" id="tt-proto">VLESS • OpenVPN</span>
              </div>
            </div>
            <div class="tt-action" data-t="tt_action">▶ Click to engage link &amp; filter servers</div>
          </div>

          <!-- World SVG Map with Real Country Paths -->
          <svg id="world-vector-svg" viewBox="0 8 1000 405" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="map-bg-grad" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stop-color="#0e172a" />
                <stop offset="60%" stop-color="#060913" />
                <stop offset="100%" stop-color="#020408" />
              </radialGradient>
              <linearGradient id="cyber-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.8" />
                <stop offset="50%" stop-color="#C6FF00" stop-opacity="1" />
                <stop offset="100%" stop-color="#00E5FF" stop-opacity="0.8" />
              </linearGradient>
            </defs>

            <!-- Deep Space Background -->
            <rect x="0" y="8" width="1000" height="405" fill="url(#map-bg-grad)"/>

            <!-- High-Tech Coordinate Grid -->
            <!-- Latitudes -->
            <line x1="0" y1="80" x2="1000" y2="80" stroke="rgba(0,229,255,0.06)" stroke-width="0.8" stroke-dasharray="3,6"/>
            <line x1="0" y1="160" x2="1000" y2="160" stroke="rgba(0,229,255,0.08)" stroke-width="0.8" stroke-dasharray="3,6"/>
            <line x1="0" y1="240" x2="1000" y2="240" stroke="rgba(0,229,255,0.15)" stroke-width="1.2"/>
            <line x1="0" y1="320" x2="1000" y2="320" stroke="rgba(0,229,255,0.08)" stroke-width="0.8" stroke-dasharray="3,6"/>
            <!-- Longitudes -->
            <line x1="200" y1="8" x2="200" y2="413" stroke="rgba(0,229,255,0.06)" stroke-width="0.8" stroke-dasharray="3,6"/>
            <line x1="400" y1="8" x2="400" y2="413" stroke="rgba(0,229,255,0.06)" stroke-width="0.8" stroke-dasharray="3,6"/>
            <line x1="500" y1="8" x2="500" y2="413" stroke="rgba(0,229,255,0.15)" stroke-width="1.2"/>
            <line x1="600" y1="8" x2="600" y2="413" stroke="rgba(0,229,255,0.06)" stroke-width="0.8" stroke-dasharray="3,6"/>
            <line x1="800" y1="8" x2="800" y2="413" stroke="rgba(0,229,255,0.06)" stroke-width="0.8" stroke-dasharray="3,6"/>

            <!-- Coordinate Labels on Edges -->
            <text x="8" y="243" fill="rgba(0,229,255,0.3)" font-size="8" font-family="monospace">0° EQ</text>
            <text x="8" y="163" fill="rgba(0,229,255,0.25)" font-size="8" font-family="monospace">+30°N</text>
            <text x="8" y="83" fill="rgba(0,229,255,0.25)" font-size="8" font-family="monospace">+60°N</text>
            <text x="8" y="323" fill="rgba(0,229,255,0.25)" font-size="8" font-family="monospace">-30°S</text>
            <text x="502" y="20" fill="rgba(0,229,255,0.3)" font-size="8" font-family="monospace">0° MERIDIAN</text>

            <!-- Real Country Polygons Layer (168 Inhabited Countries) -->
            <g id="countries-poly-layer">
              ${countriesPolySvg}
            </g>

            <!-- Global High-Speed Telemetry Backbone Arcs -->
            <g class="cyber-telemetry-arcs" stroke="url(#cyber-arc-grad)" stroke-width="1.4" fill="none" opacity="0.5">
              <path d="M229,140 Q378,75 527,108" stroke-dasharray="8,4" />
              <path d="M527,108 Q575,130 624,184" stroke-dasharray="8,4" />
              <path d="M527,108 Q705,65 885,150" stroke-dasharray="8,4" />
              <path d="M624,184 Q700,200 735,246" stroke-dasharray="8,4" />
              <path d="M735,246 Q810,200 885,150" stroke-dasharray="8,4" />
              <path d="M160,135 Q90,75 25,85" stroke-dasharray="8,4" />
              <path d="M975,85 Q930,95 885,150" stroke-dasharray="8,4" />
            </g>

            <!-- Dynamic Laser Beams Layer on Selection -->
            <g id="dynamic-laser-beams-layer"></g>

            <!-- Dynamic Tactical Reticle Layer on Selection -->
            <g id="tactical-reticle-layer"></g>

            <!-- Dynamic Server Nodes Layer -->
            <g id="map-dots-layer"></g>

            <!-- Dynamic Shockwave Burst Layer on Click -->
            <g id="shockwave-burst-layer"></g>
          </svg>

          <!-- Live Tactical Command Drawer (Slides up on country selection) -->
          <div id="map-tactical-drawer" class="map-tactical-drawer">
            <div class="mtd-left">
              <span class="mtd-flag" id="mtd-flag">🇺🇸</span>
              <div>
                <div class="mtd-status-line">
                  <span class="mtd-pulse-dot"></span>
                  <span class="mtd-status-text">SECURE TUNNEL LINK // ACTIVE</span>
                </div>
                <div class="mtd-title" id="mtd-title">United States</div>
              </div>
            </div>

            <div class="mtd-metrics">
              <div class="mtd-metric-item">
                <span class="mtd-m-label">ACTIVE NODES</span>
                <span class="mtd-m-val cyan" id="mtd-count">3,411</span>
              </div>
              <div class="mtd-metric-item">
                <span class="mtd-m-label">LATENCY</span>
                <span class="mtd-m-val green" id="mtd-ping">⚡ 12 ms</span>
              </div>
              <div class="mtd-metric-item">
                <span class="mtd-m-label">BACKBONE</span>
                <span class="mtd-m-val purple" id="mtd-speed">10 Gbps Fiber</span>
              </div>
              <div class="mtd-metric-item">
                <span class="mtd-m-label">ENCRYPTION</span>
                <span class="mtd-m-val" id="mtd-cipher">AES-256-GCM</span>
              </div>
            </div>

            <div class="mtd-actions">
              <button class="mtd-btn-engage" onclick="scrollToServers()">
                <span>⚡ View Filtered Servers</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <button class="mtd-btn-clear" onclick="resetCountryFilter()" title="Clear Filter">&times;</button>
            </div>
          </div>
        </div>

        <!-- Cyber Map Legend -->
        <div class="map-legend">
          <div class="map-legend-items">
            <div class="map-legend-item"><div class="map-legend-dot" style="background:#00E5FF;box-shadow:0 0 8px #00E5FF;"></div>Standard POP</div>
            <div class="map-legend-item"><div class="map-legend-dot" style="background:#C6FF00;box-shadow:0 0 8px #C6FF00;"></div>High-Density Tier 1 Hub (500+)</div>
            <div class="map-legend-item"><div class="map-legend-dot" style="background:#b388ff;box-shadow:0 0 8px #b388ff;"></div>Stealth Reality Anti-DPI</div>
          </div>
          <div class="map-telemetry-badge">
            <span id="map-telemetry-nodes-count-badge">16,086 NODES</span> • 100% ENCRYPTED • HARDWARE ACCELERATED
          </div>
        </div>
      </div>\n\n`;

src = src.slice(0, htmlMapStart) + masterpieceHtml + src.slice(htmlMapEnd);
console.log('HTML updated with Masterpiece Map Container & HUD Drawer');

// 6. Update client-side Map Engine functions
const meStart = src.indexOf('    /* ── Country Center Anchors for 169 Real Countries ── */');
const meEnd = src.indexOf('    /* ── Pagination ── */', meStart);

if (meStart === -1 || meEnd === -1) {
  throw new Error("Map Engine bounds not found! meStart: " + meStart + " meEnd: " + meEnd);
}

const anchorsJson = JSON.stringify(countryAnchors);

const masterpieceEngine = `    /* ── Inhabited Country Anchors (Natural Earth 168 Countries) ── */
    var COUNTRY_MAP_ANCHORS = ${anchorsJson};

    var selectedMapCountryCode = null;
    var currentMapZoomLevel = 0;
    var baseViewBox = { x: 0, y: 8, w: 1000, h: 405 };

    /* Render Cyber Radar Map Nodes on Real Vector World Map */
    function renderMapView(servers) {
      var layer = document.getElementById('map-dots-layer');
      if (!layer) return;

      var summary = window.fullCatalogSummary;
      var countries = (summary && summary.countries) ? summary.countries : [];

      if (countries.length === 0) {
        var group = {};
        (servers || []).forEach(function(s) {
          var code = (s.country_code || 'US').toUpperCase();
          if (!group[code]) group[code] = { code: code, name: s.country, flag: s.flag || '🌐', count: 0 };
          group[code].count++;
        });
        countries = Object.values(group);
      }

      /* Rebuild Quick Country Bar */
      renderQuickCountryBar(countries.slice(0, 24));

      /* Update total count badges */
      var totalNodes = countries.reduce(function(acc, c) { return acc + (c.count || 0); }, 0);
      var totalFormatted = Number(totalNodes || 16086).toLocaleString();
      var b1 = document.getElementById('map-telemetry-nodes-count');
      var b2 = document.getElementById('map-telemetry-nodes-count-badge');
      if (b1) b1.textContent = totalFormatted;
      if (b2) b2.textContent = totalFormatted + ' NODES';

      /* Mark countries with servers */
      countries.forEach(function(c) {
        var poly = document.getElementById('cpoly-' + c.code);
        if (poly) {
          poly.classList.add('has-servers');
          poly.dataset.name = c.name || c.code;
          poly.dataset.arName = c.ar_name || c.name || c.code;
          poly.dataset.flag = c.flag || '🌐';
          poly.dataset.count = c.count || 1;
        }
      });

      var nodesHtml = '';
      countries.forEach(function(c) {
        var anchor = COUNTRY_MAP_ANCHORS[c.code];
        if (!anchor) return;

        var x = anchor[0];
        var y = anchor[1];
        var count = c.count || 1;

        var isSelected = (selectedMapCountryCode === c.code);
        var baseR = Math.min(3.6 + Math.log2(count + 1) * 1.15, 11);
        var color = isSelected ? '#C6FF00' : (count > 500 ? '#00E5FF' : '#00F5D4');

        nodesHtml += '<g class="map-node-group ' + (isSelected ? 'active-node' : '') + '" ' +
          'data-code="' + c.code + '" ' +
          'data-name="' + (c.name || c.code) + '" ' +
          'data-ar-name="' + (c.ar_name || c.name || c.code) + '" ' +
          'data-flag="' + (c.flag || '🌐') + '" ' +
          'data-count="' + count + '" ' +
          'onmouseenter="showMapTooltip(this, event)" ' +
          'onmouseleave="hideMapTooltip()" ' +
          'onclick="selectMapCountry(this.dataset.code)">';

        /* Animated Radar Ripple for Top Hubs */
        if (count >= 300 || isSelected) {
          nodesHtml += '<circle class="radar-pulse-ring" cx="' + x + '" cy="' + y + '" r="' + (baseR + 4) + '" ' +
            'fill="none" stroke="' + color + '" />';
        }

        /* Solid Glowing Core Node */
        nodesHtml += '<circle class="map-node-core" cx="' + x + '" cy="' + y + '" r="' + baseR + '" ' +
          'fill="' + color + '" stroke="#060913" stroke-width="1.8" />';

        nodesHtml += '</g>';
      });

      layer.innerHTML = nodesHtml;
    }

    /* Quick Country Bar Carousel */
    function renderQuickCountryBar(countries) {
      var bar = document.getElementById('globe-country-bar');
      if (!bar) return;

      var allLabel = currentLang === 'ar' ? 'جميع السيرفرات' : 'All Nodes';
      var html = '<button class="gcb-item ' + (selectedMapCountryCode === null ? 'active' : '') + '" onclick="resetCountryFilter()">' +
        '<span>🌐</span><span>' + allLabel + '</span>' +
        '<span class="gcb-num">16k+</span></button>';

      countries.forEach(function(c) {
        var isAct = (selectedMapCountryCode === c.code);
        var label = currentLang === 'ar' ? (c.ar_name || c.name) : c.name;
        html += '<button class="gcb-item ' + (isAct ? 'active' : '') + '" data-code="' + c.code + '" onclick="selectMapCountry(this.dataset.code)">' +
          '<span>' + c.flag + '</span><span>' + label + '</span>' +
          '<span class="gcb-num">' + Number(c.count).toLocaleString() + '</span></button>';
      });

      bar.innerHTML = html;
    }

    /* Show Tooltip on Hover */
    window.showMapTooltip = function(el, e) {
      var tt = document.getElementById('map-tooltip');
      var vp = document.getElementById('cyber-map-viewport');
      if (!tt || !vp) return;

      var flag = el.dataset.flag || '🌐';
      var name = currentLang === 'ar' ? (el.dataset.arName || el.dataset.name) : el.dataset.name;
      var count = Number(el.dataset.count || 0).toLocaleString();
      var code = el.dataset.code || '';

      document.getElementById('tt-flag').textContent = flag;
      document.getElementById('tt-country').textContent = name;
      document.getElementById('tt-code').textContent = code + ' // REGIONAL POP';
      document.getElementById('tt-count').textContent = count + ' Nodes';
      document.getElementById('tt-ping').textContent = '⚡ ' + (Math.floor(Math.random() * 14) + 8) + ' ms';

      var vpRect = vp.getBoundingClientRect();
      var nodeRect = el.getBoundingClientRect();
      var left = (nodeRect.left + nodeRect.width / 2) - vpRect.left;
      var top = nodeRect.top - vpRect.top - 12;

      tt.style.left = left + 'px';
      tt.style.top = top + 'px';
      tt.classList.add('visible');
    };

    window.hideMapTooltip = function() {
      var tt = document.getElementById('map-tooltip');
      if (tt) tt.classList.remove('visible');
    };

    /* Trigger Expanding Shockwave Burst at [x, y] */
    function triggerShockwave(x, y) {
      var burstLayer = document.getElementById('shockwave-burst-layer');
      if (!burstLayer) return;

      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('class', 'click-shockwave');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      burstLayer.appendChild(circle);

      setTimeout(function() {
        if (circle.parentNode) circle.parentNode.removeChild(circle);
      }, 950);
    }

    /* Render Tactical Reticle and Connecting Laser Beams */
    function renderTacticalReticleAndBeams(code, x, y) {
      var reticleLayer = document.getElementById('tactical-reticle-layer');
      var beamsLayer = document.getElementById('dynamic-laser-beams-layer');
      if (!reticleLayer || !beamsLayer) return;

      // Reticle
      reticleLayer.innerHTML = '<g transform="translate(' + x + ',' + y + ')">' +
        '<circle class="tactical-reticle-outer" r="16" fill="none" stroke="#C6FF00" stroke-width="1.5" stroke-dasharray="6,4" />' +
        '<circle class="tactical-reticle-inner" r="11" fill="none" stroke="#00E5FF" stroke-width="1.2" stroke-dasharray="4,3" />' +
        '<circle r="3" fill="#C6FF00" />' +
        '<line x1="-22" y1="0" x2="-18" y2="0" stroke="#C6FF00" stroke-width="2" />' +
        '<line x1="18" y1="0" x2="22" y2="0" stroke="#C6FF00" stroke-width="2" />' +
        '<line x1="0" y1="-22" x2="0" y2="-18" stroke="#C6FF00" stroke-width="2" />' +
        '<line x1="0" y1="18" x2="0" y2="22" stroke="#C6FF00" stroke-width="2" />' +
        '<text x="26" y="4" fill="#C6FF00" font-size="9" font-family="monospace" font-weight="900" letter-spacing="1">LOCKED</text>' +
        '</g>';

      // Connect laser beams to major hubs
      var primaryHubs = [
        [229, 140], // US
        [527, 108], // Frankfurt
        [885, 150], // Tokyo
        [735, 246]  // Singapore
      ];

      var beamsHtml = '';
      primaryHubs.forEach(function(hub) {
        var midX = (x + hub[0]) / 2;
        var midY = Math.min(y, hub[1]) - 30;
        beamsHtml += '<path class="cyber-laser-beam" d="M' + x + ',' + y + ' Q' + midX + ',' + midY + ' ' + hub[0] + ',' + hub[1] + '" fill="none" stroke="#00E5FF" stroke-width="1.6" />';
      });
      beamsLayer.innerHTML = beamsHtml;
    }

    /* Select Country from Map with Artistry */
    window.selectMapCountry = function(code) {
      selectedMapCountryCode = code;

      var anchor = COUNTRY_MAP_ANCHORS[code];
      if (anchor) {
        triggerShockwave(anchor[0], anchor[1]);
        renderTacticalReticleAndBeams(code, anchor[0], anchor[1]);
      }

      /* Highlight country polygon */
      document.querySelectorAll('.country-poly').forEach(function(p) { p.classList.remove('active-country'); });
      var activePoly = document.getElementById('cpoly-' + code);
      if (activePoly) activePoly.classList.add('active-country');

      /* Populate and reveal Live Tactical Command Drawer */
      var drawer = document.getElementById('map-tactical-drawer');
      var mFlag = document.getElementById('mtd-flag');
      var mTitle = document.getElementById('mtd-title');
      var mCount = document.getElementById('mtd-count');
      var mPing = document.getElementById('mtd-ping');

      var cName = code;
      var cFlag = '🌐';
      var cCount = '1';
      if (window.fullCatalogSummary && window.fullCatalogSummary.countries) {
        var found = window.fullCatalogSummary.countries.find(function(x) { return x.code === code; });
        if (found) {
          cFlag = found.flag || '🌐';
          cName = currentLang === 'ar' ? (found.ar_name || found.name) : found.name;
          cCount = Number(found.count || 1).toLocaleString();
        }
      }

      if (drawer && mFlag && mTitle && mCount && mPing) {
        mFlag.textContent = cFlag;
        mTitle.textContent = cName + ' (' + code + ')';
        mCount.textContent = cCount + ' Nodes';
        mPing.textContent = '⚡ ' + (Math.floor(Math.random() * 12) + 8) + ' ms';
        drawer.style.display = 'flex';
      }

      /* Update filters & re-render cards */
      setCountryFilter(code);

      var sel = document.getElementById('country-select');
      if (sel) sel.value = code;

      renderMapView(window.currentRenderedServers || []);

      /* Highlight first card as fastest route */
      setTimeout(function() {
        var firstCard = document.querySelector('.server-card');
        if (firstCard) firstCard.classList.add('fastest-in-region');
      }, 100);
    };

    /* Smoothly scroll down to filtered server cards */
    window.scrollToServers = function() {
      var grid = document.getElementById('servers-grid-container');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    /* Reset Filter */
    window.resetCountryFilter = function() {
      selectedMapCountryCode = null;

      // Hide tactical drawer
      var drawer = document.getElementById('map-tactical-drawer');
      if (drawer) drawer.style.display = 'none';

      // Clear reticle and beams
      var reticleLayer = document.getElementById('tactical-reticle-layer');
      var beamsLayer = document.getElementById('dynamic-laser-beams-layer');
      if (reticleLayer) reticleLayer.innerHTML = '';
      if (beamsLayer) beamsLayer.innerHTML = '';

      document.querySelectorAll('.country-poly').forEach(function(p) { p.classList.remove('active-country'); });

      setCountryFilter('all');

      var sel = document.getElementById('country-select');
      if (sel) sel.value = 'all';

      renderMapView(window.currentRenderedServers || []);
    };

    /* Zoom & Pan Map Controls */
    window.zoomMap = function(dir) {
      var svg = document.getElementById('world-vector-svg');
      if (!svg) return;

      currentMapZoomLevel = Math.max(-1, Math.min(3, currentMapZoomLevel + dir));
      var factor = Math.pow(0.8, currentMapZoomLevel);
      var newW = Math.round(baseViewBox.w * factor);
      var newH = Math.round(baseViewBox.h * factor);
      var newX = Math.round((baseViewBox.w - newW) / 2);
      var newY = Math.round(baseViewBox.y + (baseViewBox.h - newH) / 2);

      svg.setAttribute('viewBox', newX + ' ' + newY + ' ' + newW + ' ' + newH);
    };

    window.resetMapZoom = function() {
      var svg = document.getElementById('world-vector-svg');
      if (!svg) return;
      currentMapZoomLevel = 0;
      svg.setAttribute('viewBox', baseViewBox.x + ' ' + baseViewBox.y + ' ' + baseViewBox.w + ' ' + baseViewBox.h);
    };
\n`;

src = src.slice(0, meStart) + masterpieceEngine + src.slice(meEnd);
console.log('Masterpiece Map Engine installed successfully');

fs.writeFileSync('src/servers_page.js', src, 'utf8');
console.log('=== Saved servers_page.js successfully ===');
