/**
 * ZVPN Global Server Infrastructure & Direct Config Hub
 * Enterprise-Grade Standalone Page for 16,000+ High-Speed Encrypted Server Nodes.
 * Multi-Protocol Separation: OpenVPN, VLESS, Shadowsocks, VMess, Trojan.
 * 7 Languages, Interactive SVG Map View, Dropdown Language Selector,
 * Copy Protection, Professional Footer, Real AdBlock Detection.
 */

import { ZVPN_LOGO_PATH, ZVPN_FAVICON_DATA_URI } from './logo.js';

export function getServersPageHtml(config = {}) {
  const totalServers = config.totalServers || 16086;
  const totalCountries = config.totalCountries || 104;
  const formattedServers = Number(totalServers).toLocaleString();

  return `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>ZVPN Server Hub – 16,000+ Global Server Nodes | OpenVPN, VLESS, Shadowsocks, VMess, Trojan</title>
  <meta name="description" content="Explore, test, and download standalone server profiles for OpenVPN, VLESS, Shadowsocks, VMess, and Trojan across 104 countries. 100% free with sponsor unlock or reward points.">
  <link rel="icon" type="image/x-icon" href="${ZVPN_FAVICON_DATA_URI}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">



  <style>
    :root {
      --bg: #050608;
      --bg-surface: #0a0c11;
      --bg-card: rgba(13, 16, 23, 0.78);
      --bg-card-hover: rgba(18, 23, 34, 0.92);
      --border: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(198, 255, 0, 0.4);
      --accent: #C6FF00;
      --accent-glow: rgba(198, 255, 0, 0.28);
      --accent-cyan: #00E5FF;
      --accent-purple: #9D4EDD;
      --accent-green: #00F5D4;
      --accent-blue: #3A86FF;
      --accent-crimson: #FF006E;
      --text: #F1F3F7;
      --text-muted: #8E98A8;
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --font-ar: 'Cairo', var(--font-sans);
    }

    /* ── Copy Protection ── */
    html, body {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
    }
    input, textarea, .allow-select, .code-box {
      -webkit-user-select: text !important;
      user-select: text !important;
    }

    [dir="rtl"] { font-family: var(--font-ar); }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.6;
      min-height: 100vh;
      overflow-x: hidden;
      background-image:
        radial-gradient(circle at 10% 5%, rgba(198, 255, 0, 0.06) 0%, transparent 45%),
        radial-gradient(circle at 90% 25%, rgba(0, 229, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 50% 85%, rgba(157, 78, 221, 0.05) 0%, transparent 60%);
    }

    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; border: none; background: none; }

    /* Custom Cursor */
    html, body, button, a {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath d='M3 3 L3 22 L8 17 L12 24 L15 22 L11 15 L18 15 Z' fill='%23C6FF00' stroke='%23050508' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='6.5' cy='7.5' r='1.5' fill='%2300E5FF'/%3E%3C/svg%3E") 3 3, auto !important;
    }
    #zvpn-cursor-trail {
      position: fixed; top: 0; left: 0; width: 34px; height: 34px; border-radius: 50%;
      border: 1.5px solid rgba(198, 255, 0, 0.5); box-shadow: 0 0 12px rgba(198, 255, 0, 0.25);
      pointer-events: none; z-index: 999999; transform: translate(-50%, -50%);
      transition: width 0.2s cubic-bezier(0.2,0,0.2,1), height 0.2s cubic-bezier(0.2,0,0.2,1), border-color 0.2s;
      will-change: transform;
    }
    @media (pointer: coarse) { #zvpn-cursor-trail { display: none !important; } }

    .container { max-width: 1480px; margin: 0 auto; padding: 0 1.5rem; }

    /* ── Header ── */
    header {
      position: sticky; top: 0; z-index: 100;
      background: rgba(5, 6, 8, 0.9);
      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--border);
    }
    nav {
      display: flex; align-items: center; justify-content: space-between;
      height: 4.25rem; gap: 1rem;
    }
    .logo {
      display: inline-flex; align-items: center; gap: 10px;
      font-size: 1.35rem; font-weight: 900; letter-spacing: -0.02em; color: #fff;
      flex-shrink: 0;
    }
    .logo-mark { width: 32px; height: 32px; filter: drop-shadow(0 0 10px var(--accent-glow)); }
    .nav-badge {
      font-size: 0.72rem; font-weight: 800; padding: 3px 9px; border-radius: 999px;
      background: rgba(198, 255, 0, 0.12); color: var(--accent); border: 1px solid var(--border-accent);
      letter-spacing: 0.04em; text-transform: uppercase;
    }

    .nav-links { display: flex; align-items: center; gap: 1.5rem; list-style: none; }
    .nav-links a { color: var(--text-muted); font-size: 0.9rem; font-weight: 600; transition: color 0.2s; display: flex; align-items: center; gap: 6px; }
    .nav-links a:hover, .nav-links a.active { color: #fff; }
    .nav-links svg { flex-shrink: 0; }

    .nav-actions { display: flex; align-items: center; gap: 10px; }
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      padding: 9px 18px; border-radius: 10px; font-weight: 700; font-size: 0.88rem;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      background: var(--accent); color: #000; border: 1px solid var(--accent);
      cursor: pointer;
    }
    .btn:hover { box-shadow: 0 0 20px var(--accent-glow); transform: translateY(-1px); }
    .btn.outline { background: rgba(255, 255, 255, 0.04); color: #fff; border: 1px solid var(--border); }
    .btn.outline:hover { border-color: var(--accent); background: rgba(198, 255, 0, 0.08); color: var(--accent); }

    /* ── Language Dropdown ── */
    .lang-dropdown-wrap {
      position: relative;
    }
    .lang-btn {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 7px 13px; border-radius: 9px; font-size: 0.82rem; font-weight: 800;
      background: rgba(255, 255, 255, 0.05); color: #fff; border: 1px solid var(--border);
      cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
    }
    .lang-btn:hover { border-color: var(--accent-cyan); color: var(--accent-cyan); }
    .lang-btn svg { transition: transform 0.2s; }
    .lang-btn.open svg { transform: rotate(180deg); }
    #lang-menu {
      display: none; position: absolute; top: calc(100% + 8px); right: 0;
      background: #0d1017; border: 1px solid var(--border-accent); border-radius: 12px;
      min-width: 180px; overflow: hidden; z-index: 9999;
      box-shadow: 0 12px 36px rgba(0,0,0,0.7);
      animation: slideUp 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    }
    [dir="rtl"] #lang-menu { right: auto; left: 0; }
    #lang-menu.open { display: block; }
    .lang-option {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 16px; cursor: pointer; font-size: 0.88rem; font-weight: 700;
      color: var(--text-muted); transition: all 0.15s;
    }
    .lang-option:hover { background: rgba(198, 255, 0, 0.07); color: #fff; }
    .lang-option.active { color: var(--accent); background: rgba(198, 255, 0, 0.06); }
    .lang-option .flag { font-size: 1.1rem; }

    /* ── Continents Bar ── */
    .continents-bar {
      display: flex; gap: 10px; overflow-x: auto; padding: 12px 0 16px; margin-bottom: 1.5rem;
      scrollbar-width: none; border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .continents-bar::-webkit-scrollbar { display: none; }
    .continent-pill {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px;
      background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border);
      color: var(--text-muted); font-size: 0.8rem; font-weight: 700; white-space: nowrap; cursor: pointer;
      transition: all 0.2s;
    }
    .continent-pill:hover, .continent-pill.active {
      background: rgba(0, 229, 255, 0.1); border-color: var(--accent-cyan); color: var(--accent-cyan);
    }
    .continent-num {
      font-family: var(--font-mono); font-size: 0.74rem; background: rgba(255,255,255,0.08);
      padding: 1px 6px; border-radius: 999px;
    }

    /* ── Hero ── */
    .hub-hero { padding: 2.5rem 0 1.5rem; text-align: center; }
    .hub-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px; border-radius: 999px; font-size: 0.82rem; font-weight: 800;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: rgba(0, 229, 255, 0.1); color: var(--accent-cyan); border: 1px solid rgba(0, 229, 255, 0.3);
      margin-bottom: 1.25rem;
    }
    .hub-title {
      font-size: clamp(2.2rem, 4.2vw, 3.8rem); font-weight: 900; line-height: 1.15;
      letter-spacing: -0.03em; margin-bottom: 1rem;
    }
    .hub-title span {
      background: linear-gradient(135deg, #fff 30%, var(--accent) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hub-desc {
      font-size: 1.12rem; color: var(--text-muted); max-width: 820px; margin: 0 auto 2.5rem;
    }

    /* ── Protocol Tabs ── */
    .protocol-nav {
      display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 1.5rem;
      scrollbar-width: thin; scrollbar-color: var(--border) transparent;
    }
    .proto-tab {
      display: inline-flex; align-items: center; gap: 10px; padding: 12px 22px;
      border-radius: 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border);
      color: var(--text-muted); font-size: 0.92rem; font-weight: 700; white-space: nowrap;
      cursor: pointer; transition: all 0.25s ease;
    }
    .proto-tab:hover { background: rgba(255, 255, 255, 0.07); color: #fff; border-color: rgba(255, 255, 255, 0.2); }
    .proto-tab.active { background: rgba(198, 255, 0, 0.1); border-color: var(--accent); color: var(--accent); box-shadow: 0 0 16px rgba(198, 255, 0, 0.18); }
    .proto-tab.active.purple { background: rgba(157, 78, 221, 0.14); border-color: var(--accent-purple); color: #c77dff; }
    .proto-tab.active.cyan { background: rgba(0, 229, 255, 0.14); border-color: var(--accent-cyan); color: var(--accent-cyan); }
    .proto-tab.active.green { background: rgba(0, 245, 212, 0.14); border-color: var(--accent-green); color: var(--accent-green); }
    .proto-tab.active.blue { background: rgba(58, 134, 255, 0.14); border-color: var(--accent-blue); color: var(--accent-blue); }
    .proto-tab.active.crimson { background: rgba(255, 0, 110, 0.14); border-color: var(--accent-crimson); color: var(--accent-crimson); }
    .proto-count { font-size: 0.74rem; font-family: var(--font-mono); padding: 2px 8px; border-radius: 999px; background: rgba(255, 255, 255, 0.08); color: inherit; }

    /* ── Category Pills ── */
    .category-pills { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 1.8rem; }
    .cat-btn {
      padding: 7px 16px; border-radius: 999px; background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border); color: var(--text-muted); font-size: 0.82rem;
      font-weight: 700; white-space: nowrap; cursor: pointer; transition: all 0.2s;
    }
    .cat-btn:hover, .cat-btn.active { border-color: var(--accent); background: rgba(198, 255, 0, 0.08); color: #fff; }

    /* ── Filter Bar ── */
    .filter-bar {
      display: flex; gap: 14px; flex-wrap: wrap; align-items: center; justify-content: space-between;
      background: var(--bg-surface); border: 1px solid var(--border); border-radius: 16px;
      padding: 16px 20px; margin-bottom: 2rem;
    }
    .search-input-box { flex: 1 1 320px; position: relative; }
    .search-input-box svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; }
    [dir="rtl"] .search-input-box svg { left: auto; right: 14px; }
    .search-input {
      width: 100%; height: 44px; padding: 0 16px 0 42px; border-radius: 10px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border);
      color: #fff; font-size: 0.92rem; outline: none; transition: border-color 0.2s;
    }
    [dir="rtl"] .search-input { padding: 0 42px 0 16px; }
    .search-input:focus { border-color: var(--accent); }

    .filter-controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .filter-select {
      height: 44px; padding: 0 14px; border-radius: 10px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border);
      color: #fff; font-size: 0.88rem; outline: none; cursor: pointer; max-width: 240px;
    }
    .filter-select option { background: #0c0e14; color: #fff; }

    /* ── View Mode Toggle ── */
    .view-mode-toggle {
      display: inline-flex; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border);
      border-radius: 10px; overflow: hidden;
    }
    .view-btn {
      padding: 10px 13px; color: var(--text-muted); font-size: 0.82rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 5px; transition: all 0.2s;
      font-weight: 700; white-space: nowrap;
    }
    .view-btn svg { width: 15px; height: 15px; }
    .view-btn.active { background: var(--accent); color: #000; }

    /* ── Server Cards Grid ── */
    .servers-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
      gap: 18px; margin-bottom: 2.5rem;
    }
    .server-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
      padding: 20px; display: flex; flex-direction: column; justify-content: space-between;
      backdrop-filter: blur(14px); transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative; overflow: hidden;
    }
    .server-card:hover { border-color: var(--border-accent); transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5); }
    .server-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: transparent; transition: background 0.3s;
    }
    .server-card:hover::before { background: linear-gradient(90deg, var(--accent), var(--accent-cyan)); }

    .card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
    .country-identity { display: flex; align-items: center; gap: 12px; }
    .country-flag { font-size: 2.2rem; line-height: 1; flex-shrink: 0; }
    .country-name { font-size: 1.05rem; font-weight: 800; color: #fff; line-height: 1.25; }
    .server-id-sub { font-size: 0.74rem; font-family: var(--font-mono); color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 170px; }

    .badge-proto { font-size: 0.7rem; font-weight: 900; font-family: var(--font-mono); padding: 3px 8px; border-radius: 6px; letter-spacing: 0.05em; text-transform: uppercase; }
    .badge-proto.openvpn { background: rgba(0, 229, 255, 0.12); color: var(--accent-cyan); border: 1px solid rgba(0, 229, 255, 0.3); }
    .badge-proto.vless { background: rgba(157, 78, 221, 0.15); color: #c77dff; border: 1px solid rgba(157, 78, 221, 0.4); }
    .badge-proto.shadowsocks { background: rgba(0, 245, 212, 0.12); color: var(--accent-green); border: 1px solid rgba(0, 245, 212, 0.3); }
    .badge-proto.vmess { background: rgba(58, 134, 255, 0.12); color: var(--accent-blue); border: 1px solid rgba(58, 134, 255, 0.3); }
    .badge-proto.trojan { background: rgba(255, 0, 110, 0.12); color: var(--accent-crimson); border: 1px solid rgba(255, 0, 110, 0.3); }

    .load-box { margin-bottom: 14px; }
    .load-header { display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; }
    .load-bar-wrap { width: 100%; height: 5px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; }
    .load-bar-fill { height: 100%; border-radius: 999px; transition: width 0.3s ease; background: linear-gradient(90deg, #2ed573, var(--accent)); }
    .load-bar-fill.heavy { background: linear-gradient(90deg, #ffa502, #ff4757); }

    .card-metrics { display: flex; gap: 12px; background: rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.04); border-radius: 10px; padding: 10px 14px; margin-bottom: 14px; }
    .metric-col { display: flex; flex-direction: column; gap: 2px; }
    .metric-label { font-size: 0.7rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; }
    .metric-val { font-size: 0.9rem; font-weight: 800; font-family: var(--font-mono); color: #fff; }
    .metric-val.green { color: #2ed573; }

    .feature-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; }
    .ftag { font-size: 0.68rem; font-weight: 700; padding: 2px 7px; border-radius: 4px; background: rgba(255, 255, 255, 0.04); color: var(--text-muted); border: 1px solid rgba(255, 255, 255, 0.06); }
    .ftag.cyan { color: var(--accent-cyan); border-color: rgba(0, 229, 255, 0.2); }
    .ftag.lime { color: var(--accent); border-color: rgba(198, 255, 0, 0.2); }

    .action-btn {
      width: 100%; height: 42px; border-radius: 10px; font-size: 0.88rem; font-weight: 800;
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: rgba(198, 255, 0, 0.1); border: 1px solid var(--accent); color: var(--accent);
      cursor: pointer; transition: all 0.2s ease;
    }
    .action-btn:hover { background: var(--accent); color: #000; box-shadow: 0 0 16px var(--accent-glow); }
    .action-btn.purple { background: rgba(157, 78, 221, 0.12); border-color: var(--accent-purple); color: #c77dff; }
    .action-btn.purple:hover { background: var(--accent-purple); color: #fff; }

    /* ── Table View ── */
    .table-container {
      width: 100%; overflow-x: auto; background: var(--bg-surface); border: 1px solid var(--border);
      border-radius: 16px; margin-bottom: 2.5rem; display: none;
    }
    .dc-table { width: 100%; border-collapse: collapse; text-align: start; font-size: 0.88rem; }
    .dc-table th { padding: 14px 16px; background: rgba(255, 255, 255, 0.02); border-bottom: 1px solid var(--border); color: var(--text-muted); font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }
    .dc-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.04); vertical-align: middle; }
    .dc-table tr:hover td { background: rgba(255, 255, 255, 0.02); }

            /* ── Masterpiece High-Tech Cyber Radar World Map (v3) ── */
    .map-container { display: none; position: relative; overflow: hidden; margin-bottom: 2.5rem; border-radius: 24px;
      background: radial-gradient(ellipse at 50% 50%, #0d1527 0%, #060913 75%, #020408 100%);
      border: 1px solid rgba(0, 229, 255, 0.4);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85), inset 0 0 100px rgba(0, 229, 255, 0.05); }
    .map-container.active { display: block; }

    .cyber-corner-bracket { position: absolute; width: 18px; height: 18px; pointer-events: none; z-index: 10;
      border-color: var(--accent-cyan); border-style: solid; opacity: 0.7; }
    .bracket-tl { top: 12px; left: 12px; border-width: 2px 0 0 2px; }
    .bracket-tr { top: 12px; right: 12px; border-width: 2px 2px 0 0; }
    .bracket-bl { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; }
    .bracket-br { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

    .map-hud-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
      padding: 16px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(10, 15, 28, 0.88); backdrop-filter: blur(14px); position: relative; z-index: 5; }
    .map-hud-title { display: flex; align-items: center; gap: 12px; font-weight: 900; font-size: 0.92rem;
      letter-spacing: 0.08em; color: var(--accent-cyan); text-transform: uppercase; }
    .hud-status-beacon { width: 12px; height: 12px; border-radius: 50%; background: #00E5FF;
      box-shadow: 0 0 16px #00E5FF, 0 0 30px #00E5FF; animation: pulse-beacon 1.8s infinite; }
    @keyframes pulse-beacon { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.8); } }
    .hud-telemetry-stats { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; font-size: 0.78rem;
      font-family: var(--font-mono); color: var(--text-muted); }
    .hts-item { display: inline-flex; align-items: center; gap: 5px; }
    .hts-item b { color: #fff; }
    .hts-item.green b { color: #2ed573; }
    .hts-item.cyan b { color: var(--accent-cyan); }
    .hts-item.lime b { color: var(--accent); }
    .map-hud-controls { display: flex; align-items: center; gap: 10px; }
    .hud-reset-btn { padding: 7px 16px; border-radius: 10px; font-size: 0.8rem; font-weight: 800;
      background: rgba(198, 255, 0, 0.12); border: 1px solid var(--accent); color: var(--accent); cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); display: inline-flex; align-items: center; gap: 6px; }
    .hud-reset-btn:hover { background: var(--accent); color: #000; box-shadow: 0 0 18px var(--accent-glow); transform: translateY(-1px); }

    .globe-country-bar { display: flex; gap: 8px; overflow-x: auto; padding: 10px 20px; position: relative; z-index: 5;
      background: rgba(7, 11, 20, 0.75); border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      scrollbar-width: thin; scrollbar-color: rgba(0, 229, 255, 0.3) transparent; }
    .globe-country-bar::-webkit-scrollbar { height: 4px; }
    .globe-country-bar::-webkit-scrollbar-thumb { background: rgba(0, 229, 255, 0.35); border-radius: 2px; }
    .gcb-item { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; flex-shrink: 0; white-space: nowrap;
      background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px;
      font-size: 0.78rem; font-weight: 700; color: #fff; cursor: pointer; transition: all 0.2s; }
    .gcb-item:hover { background: rgba(0, 229, 255, 0.14); border-color: var(--accent-cyan); color: var(--accent-cyan); transform: translateY(-1px); }
    .gcb-item.active { background: rgba(198, 255, 0, 0.18); border-color: var(--accent); color: var(--accent); box-shadow: 0 0 14px var(--accent-glow); }
    .gcb-num { font-family: var(--font-mono); font-size: 0.72rem; opacity: 0.8; }
    .gcb-item:focus-visible, .map-zoom-btn:focus-visible, .hud-reset-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

    .cyber-map-viewport { position: relative; width: 100%; overflow: hidden; background: #060913; user-select: none; }
    #world-vector-svg { width: 100%; height: auto; display: block; cursor: grab; touch-action: pan-y; }
    #world-vector-svg.zoomed { touch-action: none; }
    #world-vector-svg:active { cursor: grabbing; }

    .map-radar-sweep-beam { position: absolute; top: 0; bottom: 0; left: -120px; width: 120px; pointer-events: none; z-index: 2;
      background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.07), rgba(198, 255, 0, 0.12), transparent);
      animation: radar-sweep 9s linear infinite; mix-blend-mode: screen; }
    @keyframes radar-sweep { to { left: 100%; } }

    .country-poly { fill: rgba(16, 26, 46, 0.96); stroke: rgba(0, 229, 255, 0.38); stroke-width: 0.7;
      vector-effect: non-scaling-stroke; cursor: pointer; transition: fill 0.22s, stroke 0.22s; }
    .country-poly.no-servers { fill: rgba(14, 22, 38, 0.6); stroke: rgba(0, 229, 255, 0.15); cursor: default; }
    .country-poly.has-servers:hover { fill: rgba(0, 229, 255, 0.28); stroke: #00E5FF; stroke-width: 1.4; }
    .country-poly.active-country { fill: rgba(198, 255, 0, 0.3) !important; stroke: #C6FF00 !important; stroke-width: 1.8; }
    #backbone-arcs-layer path { stroke-dasharray: 8 4; vector-effect: non-scaling-stroke; }

    .map-node-group { cursor: pointer; }
    .map-node-group:focus { outline: none; }
    .map-node-core { vector-effect: non-scaling-stroke; transition: fill 0.2s; }
    .map-node-group:hover .map-node-core, .map-node-group:focus-visible .map-node-core,
    .map-node-group.active-node .map-node-core { fill: #C6FF00; stroke: #C6FF00; stroke-width: 3; filter: drop-shadow(0 0 10px #C6FF00); }

    .radar-pulse-ring { transform-box: fill-box; transform-origin: center; pointer-events: none;
      vector-effect: non-scaling-stroke; stroke-width: 2; animation: cyber-radar-pulse 2.4s infinite cubic-bezier(0.2, 0, 0.4, 1); }
    @keyframes cyber-radar-pulse { 0% { transform: scale(1); opacity: 0.9; } 100% { transform: scale(4.5); opacity: 0; } }

    .click-shockwave { transform-box: fill-box; transform-origin: center; fill: none; stroke: #C6FF00; stroke-width: 3;
      vector-effect: non-scaling-stroke; pointer-events: none; animation: cyber-click-burst 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    @keyframes cyber-click-burst { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(14); opacity: 0; } }

    .tactical-reticle-outer, .tactical-reticle-inner { transform-box: fill-box; transform-origin: center; pointer-events: none; vector-effect: non-scaling-stroke; }
    .tactical-reticle-outer { animation: reticle-spin 8s linear infinite; }
    .tactical-reticle-inner { animation: reticle-spin 5s linear infinite reverse; }
    @keyframes reticle-spin { to { transform: rotate(360deg); } }

    .cyber-laser-beam { fill: none; stroke: #00E5FF; stroke-width: 1.4; stroke-dasharray: 8 4; vector-effect: non-scaling-stroke;
      animation: laser-flow 1.2s linear infinite; pointer-events: none; }
    @keyframes laser-flow { to { stroke-dashoffset: -24; } }

    .map-tooltip { position: absolute; pointer-events: none; display: none; z-index: 999; min-width: 240px;
      background: rgba(10, 16, 28, 0.96); border: 1px solid var(--accent-cyan); border-radius: 14px; padding: 14px 18px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.9), 0 0 26px rgba(0, 229, 255, 0.3); backdrop-filter: blur(16px);
      transform: translate(-50%, -100%); }
    .map-tooltip.visible { display: block; animation: fadeIn 0.15s ease-out; }
    .tt-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 0.68rem; font-family: var(--font-mono);
      font-weight: 800; color: var(--accent-cyan); letter-spacing: 0.08em; margin-bottom: 6px; }
    .tt-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #00E5FF; box-shadow: 0 0 6px #00E5FF; }
    .tt-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .tt-flag { font-size: 2rem; line-height: 1; }
    .tt-title-wrap { display: flex; flex-direction: column; }
    .tt-country { font-weight: 900; color: #fff; font-size: 1.05rem; line-height: 1.2; }
    .tt-code { font-size: 0.72rem; font-family: var(--font-mono); color: var(--accent); font-weight: 800; }
    .tt-metrics { display: flex; flex-direction: column; gap: 5px; font-size: 0.8rem; }
    .tt-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .tt-row-label { color: var(--text-muted); font-size: 0.74rem; }
    .tt-row-val { font-family: var(--font-mono); font-weight: 800; color: #fff; font-size: 0.82rem; }
    .tt-row-val.cyan { color: var(--accent-cyan); }
    .tt-row-val.green { color: #2ed573; }
    .tt-action { margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(255,255,255,0.12);
      font-size: 0.74rem; color: var(--accent); font-weight: 800; text-align: center; }

    .map-tactical-drawer { position: absolute; bottom: 16px; left: 20px; right: 20px; z-index: 10;
      background: rgba(10, 16, 28, 0.94); border: 1.5px solid var(--accent); border-radius: 16px; padding: 14px 22px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.9), 0 0 30px rgba(198, 255, 0, 0.25); backdrop-filter: blur(18px);
      display: none; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
      animation: drawerSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    @keyframes drawerSlideUp { 0% { opacity: 0; transform: translateY(24px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
    .mtd-left { display: flex; align-items: center; gap: 14px; }
    .mtd-flag { font-size: 2.2rem; line-height: 1; }
    .mtd-status-line { display: flex; align-items: center; gap: 8px; font-size: 0.7rem; font-family: var(--font-mono); font-weight: 900; color: var(--accent); letter-spacing: 0.08em; }
    .mtd-pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #C6FF00; box-shadow: 0 0 10px #C6FF00; animation: pulse-beacon 1.2s infinite; }
    .mtd-title { font-size: 1.15rem; font-weight: 900; color: #fff; }
    .mtd-metrics { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .mtd-metric-item { display: flex; flex-direction: column; }
    .mtd-m-label { font-size: 0.68rem; font-family: var(--font-mono); color: var(--text-muted); font-weight: 700; letter-spacing: 0.06em; }
    .mtd-m-val { font-family: var(--font-mono); font-weight: 900; font-size: 0.95rem; color: #fff; }
    .mtd-m-val.cyan { color: var(--accent-cyan); } .mtd-m-val.green { color: #2ed573; } .mtd-m-val.purple { color: #b388ff; }
    .mtd-actions { display: flex; align-items: center; gap: 10px; }
    .mtd-btn-engage { padding: 10px 20px; border-radius: 10px; font-size: 0.84rem; font-weight: 900; background: var(--accent);
      color: #000; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
    .mtd-btn-engage:hover { box-shadow: 0 0 20px var(--accent-glow); transform: translateY(-1px); }
    .mtd-btn-clear { width: 38px; height: 38px; border-radius: 10px; font-size: 1.4rem; background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12); color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .mtd-btn-clear:hover { background: rgba(255, 71, 87, 0.2); color: #ff4757; border-color: #ff4757; }

    .map-zoom-controls { position: absolute; right: 18px; top: 18px; z-index: 8; display: flex; flex-direction: column; gap: 6px; }
    .map-zoom-btn { width: 34px; height: 34px; border-radius: 8px; background: rgba(10, 16, 28, 0.85);
      border: 1px solid rgba(0, 229, 255, 0.35); color: var(--accent-cyan); font-size: 1.1rem; font-weight: 900;
      display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(8px); transition: all 0.2s; }
    .map-zoom-btn:hover { background: var(--accent-cyan); color: #000; box-shadow: 0 0 12px var(--accent-cyan); }

    @keyframes cardCascadeIn { 0% { opacity: 0; transform: translateY(20px) scale(0.97); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
    .server-card { animation: cardCascadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
    .server-card.fastest-in-region { border-color: var(--accent) !important; box-shadow: 0 0 24px rgba(198, 255, 0, 0.2) !important; }

    .map-legend { display: flex; flex-wrap: wrap; gap: 14px; padding: 12px 24px; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(255,255,255,0.06); background: rgba(6, 9, 16, 0.88); position: relative; z-index: 5; }
    .map-legend-items { display: flex; flex-wrap: wrap; gap: 16px; }
    .map-legend-item { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: var(--text-muted); font-weight: 700; }
    .map-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .map-telemetry-badge { font-size: 0.76rem; font-family: var(--font-mono); color: var(--accent);
      background: rgba(198, 255, 0, 0.08); padding: 5px 12px; border-radius: 8px; border: 1px solid rgba(198, 255, 0, 0.25); }

    @media (max-width: 700px) {
      .map-hud-header { padding: 12px 16px; }
      .map-tactical-drawer { position: relative; left: auto; right: auto; bottom: auto; margin: 10px; }
      .mtd-metrics { gap: 12px; }
    }
    @media (prefers-reduced-motion: reduce) { .map-container *, .server-card { animation: none !important; transition: none !important; } }


    /* ── v3: sleek choropleth style, toolbar, tooltip, legend ── */
    .cyber-corner-bracket, .map-radar-sweep-beam, .radar-pulse-ring { display: none; }
    .map-container { border-color: rgba(255,255,255,0.09); box-shadow: 0 12px 40px rgba(0,0,0,0.6); }
    .map-hud-header { padding: 12px 20px; }
    .country-poly { fill: var(--heat, #00E5FF); fill-opacity: 0.12; stroke: rgba(255,255,255,0.2); stroke-width: 0.7; }
    .country-poly.h1 { fill-opacity: 0.2; } .country-poly.h2 { fill-opacity: 0.34; } .country-poly.h3 { fill-opacity: 0.5; }
    .country-poly.h4 { fill-opacity: 0.68; } .country-poly.h5 { fill-opacity: 0.88; }
    .country-poly.no-servers { fill: #0e1626; fill-opacity: 1; stroke: rgba(255,255,255,0.07); cursor: default; }
    .country-poly.has-servers:hover, .country-poly.has-servers:focus-visible { fill: var(--heat, #00E5FF); fill-opacity: 0.95; stroke: #fff; stroke-width: 1.3; outline: none; }
    .country-poly.active-country { fill: #C6FF00 !important; fill-opacity: 0.6 !important; stroke: #C6FF00 !important; stroke-width: 1.6; }
    .micro-hit { fill: transparent; stroke: none; }
    .map-node-group.micro .map-node-core { fill: rgba(6,9,19,0.6); stroke: var(--heat, #00E5FF); stroke-width: 1.6; filter: none; }
    .map-node-group.micro:hover .map-node-core, .map-node-group.micro:focus-visible .map-node-core, .map-node-group.micro.active-node .map-node-core { fill: rgba(198,255,0,0.3); stroke: #C6FF00; filter: none; }

    .map-tooltip { transform: none; min-width: 0; width: 230px; padding: 12px 14px; border-radius: 12px; border-color: rgba(255,255,255,0.18); }
    .tt-badge, .tt-action { display: none; }
    .tt-header { margin-bottom: 8px; padding-bottom: 8px; }
    .tt-flag { font-size: 1.7rem; }

    .map-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 18px; padding: 10px 20px; position: relative; z-index: 6;
      background: rgba(7,11,20,0.6); border-bottom: 1px solid rgba(255,255,255,0.05); }
    .mt-group { display: flex; gap: 6px; flex-wrap: wrap; }
    .mt-chip { padding: 6px 12px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); cursor: pointer;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); transition: all 0.2s; white-space: nowrap; }
    .mt-chip:hover { color: #fff; border-color: rgba(255,255,255,0.25); }
    .mt-chip.active { color: #000; background: var(--heat, #00E5FF); border-color: var(--heat, #00E5FF); }
    .mt-chip:focus-visible, .mt-btn:focus-visible, #mt-search:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .mt-tools { display: flex; gap: 8px; align-items: center; margin-inline-start: auto; }
    .mt-search { position: relative; }
    #mt-search { width: 200px; height: 34px; padding: 0 12px; border-radius: 8px; color: #fff; font-size: 0.82rem;
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
    .mt-results { display: none; position: absolute; top: calc(100% + 6px); inset-inline-end: 0; width: 260px; max-height: 260px; overflow: auto; z-index: 30;
      background: #0d1017; border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; box-shadow: 0 12px 30px rgba(0,0,0,0.7); }
    .mt-results.open { display: block; }
    .mt-res { display: flex; align-items: center; gap: 8px; padding: 8px 12px; cursor: pointer; font-size: 0.82rem; }
    .mt-res:hover { background: rgba(255,255,255,0.06); }
    .mt-res-name { flex: 1; }
    .mt-none { color: var(--text-muted); cursor: default; }
    .mt-btn { width: 34px; height: 34px; border-radius: 8px; color: #fff; cursor: pointer; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
    .mt-btn:hover { border-color: var(--accent); color: var(--accent); }

    .map-legend { padding: 10px 20px; }
    .legend-lbl { font-size: 0.76rem; color: var(--text-muted); font-weight: 700; }
    .legend-step { display: inline-flex; align-items: center; gap: 6px; font-size: 0.74rem; color: var(--text-muted); font-family: var(--font-mono); }
    .legend-swatch { width: 22px; height: 10px; border-radius: 2px; background: var(--heat, #00E5FF); }
    .legend-swatch.h1 { opacity: 0.2; } .legend-swatch.h2 { opacity: 0.34; } .legend-swatch.h3 { opacity: 0.5; }
    .legend-swatch.h4 { opacity: 0.68; } .legend-swatch.h5 { opacity: 0.88; }
    .legend-ring { width: 10px; height: 10px; border-radius: 50%; border: 1.6px solid var(--heat, #00E5FF); }
    #servers-map-container:fullscreen { border-radius: 0; overflow: auto; background: #060913; }

    @media (max-width: 700px) {
      .mt-group { flex-wrap: nowrap; overflow-x: auto; width: 100%; scrollbar-width: none; }
      .mt-tools { width: 100%; margin-inline-start: 0; }
      #mt-search { flex: 1; width: auto; }
      .mt-search { flex: 1; }
    }
    /* ── Pagination (v2) ── */
    .pagination-bar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;
      padding: 14px 18px; margin: 0 0 2.5rem; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 14px; }
    .page-info { font-size: 0.84rem; color: var(--text-muted); font-weight: 600; }
    .page-buttons { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .pg-btn { min-width: 38px; height: 38px; padding: 0 10px; border-radius: 9px; font-size: 0.88rem; font-weight: 700;
      font-family: var(--font-mono); color: var(--text); background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border);
      cursor: pointer; transition: all 0.2s; }
    .pg-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); background: rgba(198, 255, 0, 0.08); }
    .pg-btn.active { background: var(--accent); border-color: var(--accent); color: #000; }
    .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .pg-btn:focus-visible { outline: 2px solid var(--accent-cyan); outline-offset: 2px; }
    .pg-gap { color: var(--text-muted); padding: 0 4px; }
    #servers-grid-container, #servers-table-container { scroll-margin-top: 90px; }
    @media (max-width: 600px) { .pagination-bar { justify-content: center; } }

/* ── Modals ── */
    .modal-backdrop {
      position: fixed; inset: 0; background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(14px);
      z-index: 99999; display: none; align-items: center; justify-content: center; padding: 1.5rem;
    }
    .modal-backdrop.open { display: flex; animation: fadeIn 0.2s ease-out; }
    .modal-card {
      background: #0d1017; border: 1px solid var(--border-accent); border-radius: 20px;
      max-width: 540px; width: 100%; padding: 28px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85);
      position: relative; animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .modal-close {
      position: absolute; top: 16px; right: 18px; font-size: 1.5rem; color: var(--text-muted);
      cursor: pointer; background: none; border: none; width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center; border-radius: 50%;
    }
    [dir="rtl"] .modal-close { right: auto; left: 18px; }
    .modal-close:hover { color: #fff; background: rgba(255, 255, 255, 0.1); }

    .ad-progress-wrap { width: 100%; height: 6px; background: rgba(255, 255, 255, 0.1); border-radius: 999px; margin: 10px 0 6px; overflow: hidden; }
    .ad-progress-bar { height: 100%; width: 0%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent)); transition: width 1s linear; }

    .code-box {
      background: #050608; border: 1px solid var(--border); border-radius: 10px;
      padding: 12px; margin: 14px 0; font-family: var(--font-mono); font-size: 0.78rem;
      color: #a0aec0; word-break: break-all; max-height: 120px; overflow-y: auto;
    }

    .adblock-card {
      background: #140d12; border: 1px solid #ff4757; border-radius: 20px;
      max-width: 520px; width: 100%; padding: 30px; text-align: center;
      box-shadow: 0 0 50px rgba(255, 71, 87, 0.3); animation: slideUp 0.25s;
    }

    /* ── Professional Footer ── */
    .pro-footer {
      border-top: 1px solid rgba(198, 255, 0, 0.18);
      background: linear-gradient(to bottom, rgba(5,6,8,0.0), rgba(5,6,8,1));
      padding: 3.5rem 0 1.5rem; margin-top: 2rem;
      position: relative; overflow: hidden;
    }
    .pro-footer::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(198,255,0,0.5), rgba(0,229,255,0.4), transparent);
    }
    .footer-grid {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 2.5rem;
      margin-bottom: 2.5rem;
    }
    @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; } }
    .footer-brand .logo { margin-bottom: 14px; display: inline-flex; }
    .footer-brand p { color: var(--text-muted); font-size: 0.87rem; line-height: 1.65; max-width: 300px; }
    .footer-col h4 { font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
    .footer-col ul li a { color: var(--text-muted); font-size: 0.87rem; font-weight: 600; transition: color 0.2s; }
    .footer-col ul li a:hover { color: #fff; }
    .footer-contact-box { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
    .footer-contact-box p { color: var(--text-muted); font-size: 0.82rem; margin-bottom: 12px; line-height: 1.5; }
    .footer-bottom {
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
      gap: 12px; padding-top: 1.5rem; border-top: 1px solid var(--border);
    }
    .footer-bottom p { color: var(--text-muted); font-size: 0.8rem; }
    .footer-shields { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .shield-badge {
      display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px;
      border-radius: 6px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.04em;
      background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-muted);
    }

    /* ── Mobile Nav ── */
    @media (max-width: 860px) {
      .nav-links { display: none; }
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes spin { 100% { transform: rotate(360deg); } }
    @keyframes pulse-dot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(0.85); } }
  
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

  <!-- Custom Cursor Trail -->
  <div id="zvpn-cursor-trail"></div>

  <!-- Header -->
  <header>
    <div class="container">
      <nav>
        <a href="/" class="logo">
          <svg class="logo-mark" viewBox="0 0 100 100" fill="none">
            <path d="${ZVPN_LOGO_PATH}" fill="url(#zvpn-grad)" />
            <defs>
              <linearGradient id="zvpn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#C6FF00" />
                <stop offset="100%" stop-color="#00E5FF" />
              </linearGradient>
            </defs>
          </svg>
          <span>ZVPN</span>
          <span class="nav-badge" data-t="nav_badge">${formattedServers} NODES</span>
        </a>

        <ul class="nav-links">
          <li>
            <a href="/" data-t="nav_home">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Home
            </a>
          </li>
          <li>
            <a href="/servers" class="active" data-t="nav_servers">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              Server Hub (16k+)
            </a>
          </li>
          <li>
            <a href="/#download" data-t="nav_download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Clients
            </a>
          </li>
          <li>
            <a href="/#pricing" data-t="nav_pricing">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              VIP Access
            </a>
          </li>
          <li>
            <a href="mailto:itsbaask@gmail.com" data-t="nav_support">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Support
            </a>
          </li>
        </ul>

        <div class="nav-actions">
          <!-- Language Dropdown -->
          <div class="lang-dropdown-wrap">
            <button class="lang-btn" id="lang-dropdown" onclick="toggleLangMenu()" aria-haspopup="true" aria-expanded="false">
              <span id="lang-current-flag"><img class="cyber-flag-img" src="https://flagcdn.com/w40/gb.png" srcset="https://flagcdn.com/w80/gb.png 2x" width="20" height="14" alt="en" /></span>
              <span id="lang-current-label">EN</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div id="lang-menu" role="menu">
              <div class="lang-option active" onclick="setLanguage('en')" data-lang="en"><img class="cyber-flag-img" src="https://flagcdn.com/w40/gb.png" srcset="https://flagcdn.com/w80/gb.png 2x" width="20" height="14" alt="en" /> English</div>
              <div class="lang-option" onclick="setLanguage('ar')" data-lang="ar"><img class="cyber-flag-img" src="https://flagcdn.com/w40/sa.png" srcset="https://flagcdn.com/w80/sa.png 2x" width="20" height="14" alt="ar" /> العربية</div>
              <div class="lang-option" onclick="setLanguage('fr')" data-lang="fr"><img class="cyber-flag-img" src="https://flagcdn.com/w40/fr.png" srcset="https://flagcdn.com/w80/fr.png 2x" width="20" height="14" alt="fr" /> Français</div>
              <div class="lang-option" onclick="setLanguage('es')" data-lang="es"><img class="cyber-flag-img" src="https://flagcdn.com/w40/es.png" srcset="https://flagcdn.com/w80/es.png 2x" width="20" height="14" alt="es" /> Español</div>
              <div class="lang-option" onclick="setLanguage('ru')" data-lang="ru"><img class="cyber-flag-img" src="https://flagcdn.com/w40/ru.png" srcset="https://flagcdn.com/w80/ru.png 2x" width="20" height="14" alt="ru" /> Русский</div>
              <div class="lang-option" onclick="setLanguage('tr')" data-lang="tr"><img class="cyber-flag-img" src="https://flagcdn.com/w40/tr.png" srcset="https://flagcdn.com/w80/tr.png 2x" width="20" height="14" alt="tr" /> Türkçe</div>
              <div class="lang-option" onclick="setLanguage('zh')" data-lang="zh"><img class="cyber-flag-img" src="https://flagcdn.com/w40/cn.png" srcset="https://flagcdn.com/w80/cn.png 2x" width="20" height="14" alt="zh" /> 中文</div>
            </div>
          </div>
          <a href="/#download" class="btn" data-t="nav_get_app">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Get App
          </a>
        </div>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hub-hero">
    <div class="container">

      <!-- Continents Bar -->
      <div class="continents-bar" id="continents-bar">
        <button class="continent-pill active" onclick="setCategoryFilter('all')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span data-t="cont_global">Global Network</span>
          <span class="continent-num" id="cont-all-num">16,086</span>
        </button>
        <button class="continent-pill" onclick="setCategoryFilter('americas')">
          <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M7 10c1-2 3-2 4-1 2 2 1 4 3 4s3-1 3-2"/></svg> <span data-t="cont_americas">Americas</span>
          <span class="continent-num" id="cont-americas-num">5,415</span>
        </button>
        <button class="continent-pill" onclick="setCategoryFilter('europe')">
          <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 13.5 9 16.5 9 14 11 15 14 12 12.5 9 14 10 11 7.5 9 10.5 9"/></svg> <span data-t="cont_europe">Europe</span>
          <span class="continent-num" id="cont-europe-num">4,870</span>
        </button>
        <button class="continent-pill" onclick="setCategoryFilter('asia')">
          <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 8c2 1 2 3 1 4-2 2-4 2-5 4"/></svg> <span data-t="cont_asia">Asia Pacific</span>
          <span class="continent-num" id="cont-asia-num">4,520</span>
        </button>
        <button class="continent-pill" onclick="setCategoryFilter('arab')">
          <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg> <span data-t="cont_arab">Middle East &amp; Arab</span>
          <span class="continent-num" id="cont-arab-num">890</span>
        </button>
      </div>

      <div class="hub-badge" data-t="hub_badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        16,000+ HIGH-SPEED NODES &bull; ZERO LOGS &bull; MULTI-PROTOCOL
      </div>
      <h1 class="hub-title" data-t="hub_title">
        Global Encrypted <span>Server Infrastructure</span>
      </h1>
      <p class="hub-desc" data-t="hub_desc">
        Explore, test, and download standalone configurations and direct connection links for OpenVPN, VLESS, Shadowsocks, VMess, and Trojan across 104 countries. 100% free with sponsor unlock or reward points.
      </p>

      <!-- Protocol Tabs -->
      <div class="protocol-nav" id="protocol-nav-tabs">
        <button class="proto-tab active" onclick="setProtocolFilter('all')" id="ptab-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span data-t="proto_all">All Protocols</span>
          <span class="proto-count" id="count-all">16,086</span>
        </button>
        <button class="proto-tab cyan" onclick="setProtocolFilter('openvpn')" id="ptab-openvpn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          OpenVPN (.ovpn)
          <span class="proto-count" id="count-openvpn">4,633</span>
        </button>
        <button class="proto-tab purple" onclick="setProtocolFilter('vless')" id="ptab-vless">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          VLESS (XTLS/Reality)
          <span class="proto-count" id="count-vless">4,063</span>
        </button>
        <button class="proto-tab green" onclick="setProtocolFilter('shadowsocks')" id="ptab-shadowsocks">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Shadowsocks
          <span class="proto-count" id="count-shadowsocks">2,968</span>
        </button>
        <button class="proto-tab blue" onclick="setProtocolFilter('vmess')" id="ptab-vmess">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
          VMess
          <span class="proto-count" id="count-vmess">2,747</span>
        </button>
        <button class="proto-tab crimson" onclick="setProtocolFilter('trojan')" id="ptab-trojan">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Trojan
          <span class="proto-count" id="count-trojan">756</span>
        </button>
      </div>

      <!-- Category Pills -->
      <div class="category-pills" id="category-pills">
        <button class="cat-btn active" onclick="setCategoryFilter('all')" data-t="cat_all">All Nodes</button>
        <button class="cat-btn" onclick="setCategoryFilter('gaming')" data-t="cat_gaming">Ultra Low Ping (&lt;40ms)</button>
        <button class="cat-btn" onclick="setCategoryFilter('gigabit')" data-t="cat_gigabit">Gigabit Ports (&gt;400 Mbps)</button>
        <button class="cat-btn" onclick="setCategoryFilter('stealth')" data-t="cat_stealth">Stealth Reality (Anti-DPI)</button>
        <button class="cat-btn" onclick="setCategoryFilter('arab')" data-t="cat_arab">Arab &amp; Middle East</button>
        <button class="cat-btn" onclick="setCategoryFilter('europe')" data-t="cat_europe">Europe Hub</button>
        <button class="cat-btn" onclick="setCategoryFilter('americas')" data-t="cat_americas">North America</button>
        <button class="cat-btn" onclick="setCategoryFilter('asia')" data-t="cat_asia">Asia Pacific</button>
      </div>

      <!-- Filter & Search Toolbar -->
      <div class="filter-bar">
        <div class="search-input-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="server-search-input" class="search-input" placeholder="Search by country, code, city, protocol..." data-t-placeholder="filter_search_placeholder" oninput="handleSearchDebounced(this.value)">
        </div>

        <div class="filter-controls">
          <select id="country-select" class="filter-select" onchange="setCountryFilter(this.value)">
            <option value="all" data-t="filter_all_countries">All Countries (104)</option>
          </select>

          <select id="sort-select" class="filter-select" onchange="setSortFilter(this.value)">
            <option value="ping" data-t="filter_sort_ping">Lowest Ping (Fastest)</option>
            <option value="speed" data-t="filter_sort_speed">Highest Speed (Mbps)</option>
            <option value="load" data-t="filter_sort_load">Optimal Server Load</option>
            <option value="country" data-t="filter_sort_country">Country Name (A-Z)</option>
          </select>

          <select id="limit-select" class="filter-select" onchange="setLimitFilter(this.value)" style="max-width: 120px;">
            <option value="24">24 / page</option>
            <option value="48" selected>48 / page</option>
            <option value="96">96 / page</option>
            <option value="192">192 / page</option>
          </select>

          <!-- View Mode Toggle: Grid | Table | Map -->
          <div class="view-mode-toggle">
            <button class="view-btn" id="btn-view-grid" onclick="setViewMode('grid')" title="Grid View" data-t="view_grid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              Grid
            </button>
            <button class="view-btn" id="btn-view-table" onclick="setViewMode('table')" title="Table View" data-t="view_table">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              Table
            </button>
            <button class="view-btn active" id="btn-view-map" onclick="setViewMode('map')" title="Map View" data-t="view_map">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
              Map
            </button>
          </div>
        </div>
      </div>

      <!-- Results Indicator -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
        <div id="results-count-text" style="font-size: 0.92rem; color: var(--text-muted); font-weight: 600;">
          Loading verified telemetry from edge...
        </div>
        <div id="loading-spinner-small" style="display: none; width: 18px; height: 18px; border: 2px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
      </div>

      <!-- Masterpiece Cyber Radar World Map -->
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

        <!-- Map toolbar: protocol / region / search -->
        <div class="map-toolbar" id="map-toolbar"></div>

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
          <svg id="world-vector-svg" viewBox="0 8 1000 405" preserveAspectRatio="xMidYMid meet" role="img" aria-label="World server map" xmlns="http://www.w3.org/2000/svg">
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
              <path class="country-poly" id="cpoly-FJ" data-code="FJ" d="M1000,294.6L1000,296L996.5,297.3L996.1,296.2L1000,294.6Z M994.8,298.6L996.4,299L996,300.4L992.7,300.5L993.5,298.3L994.8,298.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TZ" data-code="TZ" d="M594.2,252.6L604.7,258.6L604.9,260.2L608.9,263L607.6,266.4L607.8,268L609.6,269L608.9,273.6L612,278.7L609.8,280.3L601.4,282.6L596,282L593.7,276.2L585.4,273.2L582.3,268.1L581.5,262.5L585.4,259.3L584.6,256.7L585.6,254.7L584.5,253.2L594.2,252.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-EH" data-code="EH" d="M475.9,173.2L475.9,178.1L466.8,178L466.8,185.1L464.2,185.3L464.1,190.8L453.2,190.7L452.6,191.7L452.7,190.5L459,190.3L461.4,184.2L465.3,181.2L468.4,175.3L475.6,174.7L475.9,173.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CA" data-code="CA" d="M158.8,113.9L151,110L146,108.8L144.5,106.3L144.9,104.6L141.3,103.5L140.8,101.2L137.5,99.2L138.9,94.7L134.1,92.9L129.6,87.7L123.7,83.9L118.2,86.4L113.8,83.3L108.3,82.5L108.4,56.4L120.8,58.6L126.6,56.6L130.8,56.9L139.5,55L141.4,56.2L144.1,54.2L150.7,57L154.4,55.1L154.8,57.2L162.6,56.1L179.9,58.6L183.6,60L179.7,61.4L184.7,62L194.6,61.2L197.6,62.8L200.6,61.4L197.7,60.2L199.5,59.3L205.1,58.9L210.2,61.1L218.2,62.1L226.6,61.7L226.2,60L228.7,59.5L233,60.4L233,63.1L234.7,60.9L237,60.9L238.2,58.1L232,55.3L232.2,52.2L235.5,50.2L242,51.9L245.8,55L243.3,56.4L248.5,57L248.5,59.8L252.2,57.6L255.5,59.4L254.7,61.5L257.4,63.3L262.3,58.9L262.4,55.9L270.5,56.5L274.2,57.9L274.4,59.3L272.3,60.7L274.3,62.2L273.9,63.6L268.5,65.5L261.8,65.1L257.4,70.1L248.1,73.3L247.9,75.1L244.6,75.5L238.2,80.8L237,86.3L241.1,86.7L243.6,91.4L247.5,90.9L263.9,96.4L271.5,96.8L271.9,102L273.9,105.1L278,107.8L280.2,106.9L281.7,104L280.2,99.6L278.2,98.1L282.7,96.8L287.4,93L285.3,88.7L281.9,86.7L285.2,83.7L283,76.9L294.9,76.5L301.7,80.2L306.7,80.4L307.5,86.2L312.1,88.3L316.1,86.8L320.6,82.4L329.5,91.8L328.3,93.5L340.7,98.3L341.8,100.6L345.1,102L345.3,105.1L333.2,110.4L315.6,110.5L309.7,113.7L302.5,119.9L304.8,119.5L309.3,115.8L319.3,113.2L321.8,114.6L319.1,116.5L320.9,121.6L324.5,122.9L329.1,122.5L331.9,119.4L332.1,121.4L333.9,122.4L318.4,129L316.3,128.8L316.2,126.5L321,124.2L313.5,124.6L311.7,123L311.7,119.3L307.7,118.2L303.7,123.7L301.4,125L292,125L286.6,128.8L281.3,128.8L280.1,129.3L280.7,130.9L271,134.2L269,133.4L271.8,129L270.7,124L264.2,119.7L254.5,115.8L245.4,116.3L238,114.8L236.6,112.8L235.7,113.9L158.8,113.9Z M266.7,76.5L268.7,75.2L272.6,75.3L269.3,77.3L266.7,76.5Z M278.4,47.8L275.3,46.3L275.5,45.3L283.2,45.4L288.2,47.7L278.4,47.8Z M240,41.7L238.5,42.8L231.1,41.9L236.5,39.9L240,41.7Z M231.2,31.2L234.6,32.2L229.7,33.7L227.4,33.1L226,30.9L231.2,31.2Z M255.1,43.4L243.3,42.1L242,39.2L239.2,38L230.2,36.8L231.3,35.7L245.5,36.7L247.9,37.6L247.3,38.7L252.3,40L274.6,39.7L278.2,41.9L272.4,43.2L255.1,43.4Z M190.9,32.9L194.8,33.3L188.8,35L184.6,34.1L190.9,32.9Z M191.8,31.1L195.4,31.7L187.4,32.2L191.8,31.1Z M345.6,107.5L342.2,111.6L344,110.7L345.9,111.3L344.9,112.3L351.5,113.2L350.6,115.2L352.5,114.8L353.7,118L352.6,120.4L349.5,120L349.3,117.4L346.1,119.8L344.5,119.7L346.4,118.4L343.8,117.7L335.4,117.8L335,116.9L336.7,116L335.5,115.2L340.7,109.1L344.8,106.6L346.1,106.7L345.6,107.5Z M267,69.1L277.5,73L275,73.9L269.1,71.9L262.4,74.9L261.5,73.2L257.7,73.5L260.1,72.1L261.4,67.4L267,69.1Z M281.2,49L283.8,47.9L293.8,50.6L294.2,51.9L299.3,51.2L302.2,53L308.9,54.1L314,57.8L308.9,59.1L319.8,61.5L323.8,64.1L328.2,64.3L327.3,66.2L322.5,69.5L314.7,65.6L311.1,65.9L310.7,67.5L318.6,71.2L320.4,73.9L319.4,75.9L308.9,72.9L316.2,78L308.7,76.9L292.1,70.3L292.2,71.1L284.1,71.6L281.8,70.6L283.6,68.6L294.6,68.2L293.6,67.2L294.6,65.8L298.2,63.1L296.4,60.9L286.5,58.6L288.3,57.9L280.7,55.1L274.2,56.3L253.7,54.4L251.3,53.4L254.3,52.2L250.3,52.2L249.4,49.3L254.4,45.7L261.6,45L259.6,46.8L261.7,48.5L264.3,46.3L271.4,45.1L276.1,48L275.7,49.8L281.2,49Z M237.5,44.1L248.6,44.8L238.1,49.9L235,49.8L233.3,46L237.5,44.1Z M158.7,38.6L169.2,34.7L177.2,34.3L176.9,36.5L174.7,37.4L162.5,39.2L158.7,38.6Z M131.4,99.9L134,99.7L133.2,102.8L135.6,105.1L130.4,101.6L130.1,99.5L131.4,99.9Z M207,29.7L219.9,31.1L223.1,33.6L207.8,32.3L210.5,31.4L207.2,30.8L207,29.7Z M156.9,115.3L151,114.4L147.1,111.6L144.3,111.1L143.5,109L150.7,110.3L156.9,115.3Z M162.4,43.2L173.4,43.9L179.1,45.9L168.8,48.6L165.4,50.5L165.4,51.7L158.1,53L150.2,50.4L155.7,45.3L153,43.6L162.4,43.2Z M200.5,39.3L205.9,39L206.4,40.3L204.7,41.6L188.3,43.3L184,43.4L183.7,42.4L189.5,41.2L173,41L179.4,37.6L197,40.4L193.1,37.7L195.6,36.7L198.5,37L200.5,39.3Z M204.1,47L207.2,48.1L209.8,52.8L219.5,55.5L219.2,56.7L214.6,56.9L216.4,58L215.5,59L205.7,57.8L185.2,59.6L183.7,58.3L177.5,57.9L174.1,55.7L187.7,54.5L172.5,54.1L171,53L177.5,51.9L168.3,51.2L172.6,48L180,46.3L182.9,46.9L181.5,48.2L187.7,47.3L191.5,48.8L194.7,47.3L197.2,48.2L199.5,51L200.9,49.8L198.9,47L204.1,47Z M221,48L217.9,46.2L221.2,44.9L229.5,45.1L230.2,45.9L227.6,47.2L231.8,48.4L231.3,50.9L226.8,52L215.3,48.6L215.3,47.7L221,48Z M203.9,45.6L209.7,46.1L207.3,47.9L202.9,45.9L203.9,45.6Z M226.4,36.9L228.5,38.2L227.3,41.7L222.8,42L219.8,41.5L219.8,39.9L215.3,40.1L215.1,38L226.4,36.9Z M233.3,26.1L238.1,25.1L236.9,24.4L243.3,24.3L256.1,26.9L261.6,29.6L252.7,32.5L242,32.4L239,31.3L241.3,29.5L236.2,29.5L231.4,27.3L233.3,26.1Z M245.6,22.5L262.5,20.4L268.9,21.3L271.1,19.8L279.7,19.1L297.7,18.8L328.2,20.5L312.1,23.6L318.1,23.6L307,26.1L302.3,28.3L286.4,29.7L290.2,30L288.3,30.5L290.6,31.9L278.4,35.5L283.6,36.7L276.2,38.4L251.4,37.6L251.1,36.2L256.2,35.6L254.8,33.6L264,34.6L255.7,32.3L263.6,29.6L258.5,27.1L268.3,27.5L272.6,26.5L256.7,26.3L245.6,22.5Z M291.1,62.7L286.2,63.6L285.5,62.3L286.6,60.7L289.2,60.3L291.4,61.1L291.1,62.7Z M232.6,57L234.3,58L232.6,59L222.8,57.2L227.2,55.2L232.6,57Z M320.8,111.5L325.4,111.9L328.3,113.6L320.8,111.5Z M322.2,119.3L323.2,120.7L327.7,121L325.4,122.3L321.8,121.1L321.1,120.2L322.2,119.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-US" data-code="US" d="M158.8,113.9L235.7,113.9L236.6,112.8L238,114.8L245.4,116.3L254.5,115.8L264.2,119.7L270.7,124L271.8,129L269.1,133.1L270.3,134.2L280.7,130.9L280.1,129.3L281.3,128.8L286.6,128.8L292,125L301.4,125L303.7,123.7L307.7,118.2L311.7,119.3L311.7,123L314,125.5L305.2,128.7L303.3,132.4L305.7,134.3L295.2,136.3L300.2,136.3L294.6,136.8L293.9,139.7L291.9,141.8L290.2,140.3L291.5,143.3L289.1,146.6L289.7,144.6L287.9,141.3L288,144.2L286.1,143.8L288,144.7L289.6,151.2L287.9,153.3L280.4,157L274.1,162.7L274.1,166.6L277.6,175.3L276.7,180L274.5,180L273,178.1L269.8,172.5L270.4,170.7L267.5,166.8L263.6,167.7L260,165.6L251.1,166.2L251.6,169L241,167.3L237,168.1L230.2,172.7L230.2,178.1L229.1,178.2L224.9,176.8L219.6,168.4L215.3,167.3L213.6,169.5L211.3,168.7L204.2,161.8L191.6,163L181.3,159.1L174.6,159.6L170.8,155.5L164.9,153.9L154.5,138L154.1,131.2L155.8,123.5L153.6,116.2L158,116.6L159.5,119.2L158.8,113.9Z M68.3,194.2L70,195.8L67.5,197.5L66.5,195.3L67,193.7L68.3,194.2Z M74.4,89L77.4,90L72.2,92.4L70.8,91.7L70.4,90.4L74.4,89Z M108.4,56.4L108.3,82.5L113.8,83.3L118.2,86.4L123.7,83.9L129.6,87.7L134.1,92.9L138.9,94.7L138.9,96.4L137.4,97.8L133.4,95.8L132.6,93.4L129.1,91.2L127.6,88.5L120.5,88.3L111.5,84.6L100.1,83.3L91.4,80.9L88.3,81.5L88.8,83.4L78.6,85.7L79.4,81.3L82.4,80.5L81.6,79.8L72.2,85.1L74.2,86.5L71.6,88.5L65.8,90.5L59.9,94.5L47,98.1L41.8,98.4L59.2,91.6L61.9,90.1L63.8,86.3L58.2,87.7L54.6,85.9L50.1,87L50.4,84.4L48.6,83.4L45,83.9L40.7,81.9L40.7,80.4L38.5,79.2L39.6,77.6L42.9,74.6L47,74.8L53.4,72.9L51.3,71.1L53.4,70L47.9,71.3L41.8,71L37.7,70.3L33,67.6L43.1,65.1L45.4,65.1L45,66.5L50.9,66.3L36.8,60.1L38.3,58.7L43.2,58.6L50.2,54.6L65,51.8L71.3,53.6L77.2,53.2L108.4,56.4Z M23,72.8L31.4,74.2L29.1,75.1L23.5,74.1L23,72.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KZ" data-code="KZ" d="M742.7,113.3L738.2,115.4L738.1,118.2L736.6,119.4L731.1,118.5L729,123.5L722.1,125.2L724.6,130.1L722.7,130.8L722.9,132.4L719.8,131L710.1,130.9L706.1,129.7L704.6,130.3L704.1,131.9L697.7,131.4L691.9,135L690.6,137L688.9,135.7L685.3,135.6L684.7,133.4L683.4,133.3L683.6,130.6L680.3,128.5L672.3,129.2L669.6,126.6L662.5,123.4L655.4,125L655.5,135.3L654,135.4L650.2,132.4L645.8,133.9L645.8,131.1L642.6,130.2L639.7,126.1L642.4,126.3L642.5,124.3L647.3,124.3L647.3,119.9L642.2,119.3L636.4,121.1L635,120.7L635.3,119.2L633.5,117.4L631.4,117.5L629.1,115.6L632.1,109.8L634.9,111.5L635.3,109.4L641,106.4L645.4,106.3L654.8,109.4L657.7,108.2L662.1,108.2L665.7,109.6L670.4,108.9L671.1,107.6L666.6,105.7L671.4,102.8L669.4,100.9L670.7,100L681.1,99L691.9,96.2L696.8,96.7L697.7,99.6L700.6,99L704.2,99.9L704,101.4L713.6,98.6L712.6,99.5L716.1,101.7L722.3,108.7L723.8,107.3L727.6,108.9L731.6,108.1L737.6,112L741.2,111.6L742.7,113.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-UZ" data-code="UZ" d="M655.5,135.3L655.4,125L662.5,123.4L669.6,126.6L672.3,129.2L680.3,128.5L683.6,130.6L683.4,133.3L684.7,133.4L685.3,135.6L688.9,135.7L689.6,137L697.1,132.6L697.9,132.9L695.6,134.7L702.9,136.5L699.4,138.5L696.1,138.3L696.3,136.2L692.6,136.9L690.4,140.2L688.1,140.1L687.3,141.3L689.4,141.9L690,144L688.4,146.8L684.8,146.2L684.9,144.5L678.2,142L673.3,138.7L671.9,135.9L668,135.5L666.6,132.7L662.9,131.2L658.2,133.8L658.6,135.2L655.5,135.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PG" data-code="PG" d="M891.7,257.2L901.6,260.7L905.5,265.2L910.1,266.9L910.8,268.4L908.2,268.7L908.9,270.5L913.1,275.3L914.7,275.2L914.6,276.4L918.9,278.6L918.6,279.4L910.9,278.1L905.7,272.4L902.1,271.2L898,272.9L898.4,275L896.2,275.9L891.8,275.3L891.7,257.2Z M924,260.2L925.4,262.5L924.5,263.2L923.4,260.5L918.5,257.6L919.3,256.9L924,260.2Z M920.3,266.2L915.9,267.5L912,266L912.2,265.1L916.2,265.3L917.1,263.9L917.3,265.4L918.9,265.2L921.2,263.2L920.9,261.6L922.6,261.5L923.1,263.5L920.3,266.2Z M929.9,264.8L933.4,268.2L933,268.9L931,268.2L929.2,264.3L929.9,264.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ID" data-code="ID" d="M891.7,257.2L891.8,275.3L889.3,273L882.3,273.4L885.2,270.3L883.1,265L871.3,259.8L869.4,261.4L868.8,259.2L866.6,257.8L871.4,256.2L867.3,256.1L862.5,252.6L867.7,251L872.2,252.2L873.4,257.7L876.3,259.4L881.8,254.7L891.7,257.2Z M847.1,274.7L847.5,276.1L845.7,278.2L842.9,278.4L844.4,275.8L847.1,274.7Z M827.5,238.5L825.9,241L827.9,243.6L827.4,244.9L830.5,247.5L827.3,247.8L826.4,252.2L823.8,254.1L822.6,261.1L822.2,260.2L819.1,261.4L818,259.7L814.6,258.7L811.3,259.7L810.3,258.3L806.2,258.2L805.8,254.4L803,251.3L802.6,248.8L804.6,244.4L807,247.9L813.5,245.8L816.1,246.6L818.4,246L821.9,238L827.5,238.5Z M859.4,257.8L862.4,258.6L863.4,260.7L855.3,259.4L855.9,257.9L859.4,257.8Z M855.4,244L857.5,246.9L857.3,249.3L855.9,249L855.8,252.5L853.9,247.2L855.4,244Z M841.5,247.6L847.9,246.1L845.7,248.8L843.6,249.3L833.8,249.3L833.4,251.4L835.9,253.9L842.6,251.7L842.4,253L841.2,252.6L837.5,255.3L840.1,258.8L839.6,259.8L842.1,263L842.1,264.8L840.6,265.7L839.6,264.7L840.9,262.4L838.2,263.5L837.5,262.7L837.8,261.6L835.8,260L836,257.3L834.2,258.1L834.5,265.4L832.8,265.8L831.6,264.9L831.9,259.7L830.8,259.7L829.9,257.8L832.9,249.6L835.8,246.4L841.5,247.6Z M834.1,278.5L830.5,276.5L833.1,276L835.5,277.7L834.1,278.5Z M837.1,273.7L841.4,272.5L841,274L833.1,274.5L833.1,273.5L835.3,272.9L837.1,273.7Z M828.5,273.2L830.2,273L830.9,274.2L824.3,275.1L827.5,272.5L828.5,273.2Z M801.4,267.8L801.7,268.8L807,269.1L807.7,268L812.8,269.3L813.8,271.1L821.4,273.3L818.2,274.3L800.8,271.6L792.7,269L794.6,266.4L801.4,267.8Z M789.9,253L791.3,256.5L793.4,256.7L794.8,258.5L793.9,266.3L790.9,266.3L785,261.7L775.7,249.5L773.9,244.9L764.7,234.8L770.8,235.4L779.6,244.2L782.4,244.2L784.7,246.1L788.4,249.7L787.3,252L789.9,253Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AR" data-code="AR" d="M309.3,396.2L311.8,399.6L319.3,401.9L318.1,403.3L315.4,403.5L309.3,402.4L309.3,396.2Z M339.9,333.9L337.5,345.6L341,348L340.7,349.9L342.4,351.1L342.3,352.5L339.6,356.1L335.5,357.6L326.8,357.9L327.4,363L325.7,364L319.1,364.1L319.5,366.8L321.4,367.7L322.9,366.8L323.7,368.2L318.9,370.8L317.9,375.1L313.1,376.5L312.3,378.6L317.7,381.2L316.7,383.7L313.4,385.3L311.6,388.5L307.9,390.9L310.7,395.4L300.2,394.5L299.1,390.8L296.3,389.9L296.1,387L299.1,384L301,374.9L302.2,374.4L300.6,372.8L301.5,371.6L299.6,367.4L300.7,366.8L300.2,363.4L301.6,358.1L303.3,357.1L302.4,351.8L304.5,350L306.1,345L304.1,337.1L305.8,334.3L306.5,329.1L310.3,324.7L310,318.1L313,316.7L313.6,313.2L315.9,310.6L319.5,311.3L321.2,313.3L322.3,311.1L325.4,311.2L331,316.3L339.5,319.9L339.9,321.1L337.2,325.3L345.3,326.1L349.6,321L351,322.6L351,324.8L339.9,333.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CL" data-code="CL" d="M309.3,396.2L309.3,402.4L314,402.5L310.7,404.5L302.8,402.9L292.6,396.8L302.5,400.2L304.8,397L309.3,396.2Z M306.7,298.8L309.9,303.9L309,306.6L311.6,313.5L313.9,313.8L313,316.7L310,318.1L310.3,324.7L306.5,329.1L305.8,334.3L304.1,337.1L306.1,345L304.5,350L302.4,351.8L303.3,357.1L301.6,358.1L300.2,363.4L300.7,366.8L299.6,367.4L301.5,371.6L300.6,372.8L302.2,374.4L301,374.9L299.1,384L296.1,387L296.3,389.9L299.1,390.8L300.2,394.5L309.5,395.3L303.2,396.9L302.8,399.5L301.6,399.6L291.8,395.2L290,385.2L291.2,382.5L294.1,380.4L289.9,379.6L292.5,377.1L293.5,372.5L296.6,373.5L298,367.7L296.1,367L295.3,370.5L293.5,370.1L296.6,359.1L295.6,353.2L296.8,353.1L301.6,340.1L301.4,330.2L303,326.8L305.3,309.4L304.5,301L306.7,298.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CD" data-code="CD" d="M581.5,262.5L582.3,268.1L585.4,273.2L579.8,273.7L578.8,282.8L582.3,283.8L582.5,286.8L580.4,286.8L575.5,282.2L573.8,283.1L567.4,280.4L561.5,280.8L560.4,270.3L555.8,269.3L553.9,269.9L552.8,272.2L548.5,272.4L545.4,266.3L534.2,266.9L533.8,266.1L535.1,263.9L537.8,262.5L540.5,263.8L544.5,259.8L545.6,254.8L549,251.2L551.5,238.3L554.1,236L562.2,238.8L563.5,236.9L571.3,235.4L576,235.5L579,238.1L582.5,237.2L585.7,240.3L585.5,243.5L586.6,243.9L583,248.3L580.6,257.9L581.5,262.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SO" data-code="SO" d="M615.5,254.7L613.9,252.4L613.8,242.3L617,238.2L621.3,236.2L624.9,236.1L635.9,223.7L636,218.3L642,216.6L640.4,224.4L635,235.2L629.3,242.1L619.8,249.2L615.5,254.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KE" data-code="KE" d="M608.9,263L604.9,260.2L604.7,258.6L594.2,252.6L594.2,249.7L597.3,244.7L594.5,238.2L598,234.7L599.5,235.2L600.4,237.6L605.9,240L609.9,240.5L613.2,238.2L616.3,239.1L613.8,242.3L613.9,252.4L615.5,254.7L611.8,257.1L608.9,263Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SD" data-code="SD" d="M568.2,227.1L565.2,225.1L565.4,222L561.9,214.9L560.9,215L564,206.4L566.4,206.6L566.2,194.4L569.5,194.4L569.5,188.9L602.4,188.9L604.1,198.3L606.7,200L602.4,202.9L600.7,212.3L595.2,220.5L594.4,225.9L593.7,221.3L592.2,220.2L592.2,216.2L591,216L589.1,216.7L590,219.2L587.1,222.8L583.3,221.4L580.5,223.9L574.3,223.7L571.6,221.1L569.6,221.5L568.2,225.2L566.4,226.1L568.2,227.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TD" data-code="TD" d="M566.2,195.6L566.4,206.6L564,206.4L560.9,215L561.9,214.9L563.5,219.1L560.3,220.6L558.3,223.7L552.3,225L552.5,226L549.9,228.1L542.4,229.4L541.6,225.6L538.8,223.5L539.4,222.2L543,222.3L541.5,219.7L540.6,213L538.8,212.9L537.6,210.1L538.8,206.4L542.4,203.8L544.2,193.4L541.9,190.8L541.3,186.5L544.1,185L566.2,195.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-HT" data-code="HT" d="M300.8,195.2L300.8,199.9L293.2,199L293.4,198.2L299.1,198.1L297.8,195.9L296.1,195.4L296.7,194.7L300.8,195.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-DO" data-code="DO" d="M300.8,199.9L301.2,194.8L305.7,195.4L310.2,198.3L309.2,199.4L303.7,198.8L301.7,201.1L300.8,199.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-RU" data-code="RU" d="M636.4,121.1L629.7,126.1L635,133.9L632.8,135.7L626.3,131.9L611,129.4L601.9,124.3L606.2,121.6L604.7,120.5L608.7,119.3L606.2,119.2L606.3,117.9L610.4,116.9L611.3,112.2L598.2,109.5L597.3,107.8L595.1,107.6L595.5,106.2L593.8,104.6L588.3,105.3L587,102.6L590.8,101.8L585.4,97.7L585.8,95.7L578.3,94L575.8,90.3L577,89.5L576.2,86.9L580.9,83.3L578,81.9L587.5,75.4L583.4,73.5L584.6,71.7L582.1,69.6L583.9,67.2L580.7,64L583.3,62L579,60.1L579.4,58.2L589.3,55.8L593.8,57.5L601.4,58.2L614.1,62.6L614.2,64.5L606.6,66.7L592.2,64.9L596.7,66.9L597.1,71.1L602.8,72.6L603.2,71.3L601.5,70.1L603.3,69L610,70.8L612.3,70.1L610.5,68.1L616.9,65.3L622.1,66.5L623.7,64.6L621.4,62.9L622.8,61.2L620.7,59.5L628.5,60.4L630.1,62L626.5,62.3L626.6,63.9L628.7,64.8L633,64.2L633.7,62.4L649.2,58.7L651.3,58.9L648.6,60.6L663.3,58.7L666.5,60.3L669.7,58.5L666.7,56.9L668.2,56L676.4,56.8L690.3,60.9L692.2,59.4L689.3,57.3L685.9,57.1L686.8,55.8L685.3,52.7L694.3,47.1L701.6,47.8L702.2,49.4L699.6,51.6L702.2,54.5L701.6,58.3L704.6,60L698,65.8L701.2,66.2L708.5,61.8L706.9,60.2L708.2,58.4L705.1,58.1L704.4,56.6L706.7,53.8L703.1,51.5L708,49.7L707.4,47.7L710.2,49.2L709.1,51.8L712.1,52.4L710.8,50.3L715.5,49.3L721.2,49.1L726.4,50.7L723.9,48.4L723.6,45.4L741.2,44.6L738.9,43.2L742.1,41.3L759,38.8L768.6,39.1L779.9,37.7L783.3,35.3L789.9,34.2L794.6,35.1L790.8,35.8L797.1,36.2L797.9,37.6L808.5,36.9L817,39.3L816.3,40.8L803.9,43.9L813.9,44.5L815.4,46.3L821,45.1L842.2,47.3L842.4,45.2L852.7,45.7L857.2,47.1L858.5,48.9L856.8,50.1L864.7,53.4L867.4,50.5L871.8,51.7L888.5,51.4L886.5,48.8L890.2,47.6L915.3,49.4L924.9,53.2L941.7,53.1L944,54.3L943.6,56.3L947.1,57.1L966.2,56.7L971.1,59.2L974.5,58.3L972.2,56.5L973.5,55.3L988.1,55.9L1000,58.4L1000,69.5L992.8,70.5L998.2,75.1L997.9,76.9L992.7,76.3L982.5,78.7L973.1,83.7L969.2,81.7L961.9,83.9L960.7,82.9L958,84.1L954.3,83.7L950,88.2L950.1,89.3L953.3,90L952.9,94L950.4,94.1L949.2,96.4L950.3,97.6L945.5,99L944.5,102.2L940.4,102.9L939.5,105.7L935.5,108.3L931.8,96.2L933.1,92.3L935.6,89.4L939.9,88.7L954.6,80.2L956.9,76.2L953.5,76.5L951.8,78.8L944.8,81.8L942.5,78.4L935.3,79.3L928.4,84L930.7,85.7L920.2,86.7L920.4,84.7L916.1,84.3L912.6,85.7L895,86L875.3,98L879.7,98.3L881.1,100.1L883.8,100.7L885.6,99.3L888.6,99.5L892.6,102.5L889.1,115.4L874.6,129.4L870.9,131.1L867.4,129.8L863.3,132.7L862.9,130.8L864.3,130.7L864.7,127.5L864,125.1L869.7,124.6L875.1,115.3L863.9,117.3L862.7,114.6L859.4,112.7L854.6,111.8L849.9,103.4L843.3,101.5L836.1,102.1L833.8,103.5L835.4,104.1L835.4,105.7L831.3,109.5L831.4,110.7L827.4,112.5L817.7,110.4L807.4,113.5L801.3,113.1L796.9,110.3L788,110.9L784,109.7L783.5,107.6L774.6,105.4L771.7,108.3L772.9,109.9L770.2,111.9L756.2,108.9L742.7,113.3L741.2,111.6L737.6,112L731.6,108.1L727.6,108.9L723.8,107.3L722.3,108.7L716.1,101.7L712.6,99.5L713.6,98.6L704,101.4L704.2,99.9L700.6,99L697.7,99.6L696.8,96.7L691.9,96.2L681.1,99L670.7,100L669.4,100.9L671.4,102.8L666.6,105.7L671.1,107.6L670.4,108.9L665.7,109.6L662.1,108.2L657.7,108.2L654.8,109.4L645.4,106.3L641,106.4L635.3,109.4L634.9,111.5L632.1,109.8L629.1,115.6L631.4,117.5L633.5,117.4L635.3,119.2L635,120.7L636.4,121.1Z M760.5,24.9L766.5,24.3L778.3,28.4L777.6,30.9L771.6,31.2L759.2,29.4L757.1,27.4L753.3,26.8L760.5,24.9Z M785.7,29.8L792.7,31.3L791.9,32.5L776.2,33.6L781.3,29.9L785.7,29.8Z M885.6,38.5L903,40.1L900.8,42.2L886,42.7L880.5,40.9L882,39L885.6,38.5Z M911.7,40.7L918.7,41.4L915.5,42.5L905.9,41.2L906.6,40.3L911.7,40.7Z M888.5,46.2L894.6,44.8L898.9,46.6L888.5,46.2Z M624.6,26.1L643.1,25.8L632.2,27.7L629.2,27.1L630.8,26.2L624.6,26.1Z M563.1,99.1L554.6,98.8L555.2,97.6L559.1,96.7L563.2,97.6L563.1,99.1Z M648.6,45.1L655.3,42.7L654.5,41.4L669.9,38.2L689.3,36.3L691.2,37.4L662.4,43.6L653.9,49L654.5,51.3L659.8,53.6L649.1,53.4L648.4,52.2L643.3,51.5L642.9,50L645.8,49.4L645.7,47.8L651.2,45.5L648.6,45.1Z M897,100.8L897.9,106.2L901.8,114L897.7,113L896,117.1L898.7,119.9L898.6,121.8L896.5,120.2L894.7,122.3L894.9,108.5L893.3,105.7L893.6,101.9L896.1,100.7L895,99.4L896.3,99L897,100.8Z M14.1,63.3L13.9,65L15.7,65.7L15.1,63.7L22.6,64.1L28.1,66.7L20.8,68.2L20.7,70.9L19.6,71.5L11.2,69.7L10.5,68.5L4.6,68.4L3.1,67.4L3.6,66.4L0.3,67L1.6,68.3L0,69.5L0,58.4L14.1,63.3Z M3.6,53.1L0,53.2L0,51.3L6.7,52L3.6,53.1Z M592.9,122.3L593.6,121.6L598.6,123.9L601.5,123.7L594.1,126.8L592.6,126.2L593.2,124.9L590.2,124.1L592.9,122.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BS" data-code="BS" d="M282.8,180L284.6,184L282.2,181.7L282.8,180Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-FK" data-code="FK" d="M330,394L337.4,391.9L339.6,393.2L335,395L333.7,394L331.4,395.3L330,394Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NO" data-code="NO" d="M542.1,28.7L547.2,27.6L559.8,30.7L552.8,31.8L551.3,33.8L548.9,34.3L547.6,36.6L544.2,36.8L538.2,35.1L540.7,34.1L531.2,30.9L529,28.7L536.6,27.7L542.1,28.7Z M586.4,56.8L579.4,58.2L580.6,56.2L577,55.1L572.7,56L568.7,59.3L562.1,58.8L559,57.3L555.6,58.2L555.2,60L550,59.5L549.2,61.1L546.6,61.1L537.7,70L538.7,71L537.7,72.1L535,72L533.1,74.6L533.3,78.3L535.1,79.7L534.2,83L530.6,86.5L528.8,84.8L523.3,88L519.6,88.7L515.7,87.3L513.9,77.9L529.2,70.9L541,61.6L553.3,56.1L564,55L568.2,52.7L578.2,52.3L586.9,54.3L583.4,55L586.4,56.8Z M576.1,27.6L572,29.1L564,29.4L555.8,29L548.2,26.9L563.7,26L576.1,27.6Z M568.7,33.7L562.5,34.9L557.6,34.2L559.5,33.5L557.8,32.6L563.6,32.1L568.7,33.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GL" data-code="GL" d="M370.1,20.5L392.7,17.9L424.7,18L442.1,20.2L437,21.3L411.4,21.7L431,22.8L436.4,22L438.7,23L435.6,24.6L456.2,22.5L464.5,23L466.1,24.2L444.3,27.3L450.8,27.4L445.3,31.2L445.3,34.3L448.7,36.1L439.8,37.1L444.9,38.6L445.6,41L442.6,41.2L446.2,43.6L440,43.8L443.2,45L442.3,45.9L434.5,46.4L438,48.2L438.1,49.5L432.6,48.3L431.1,49.1L438.5,51.5L439.6,53.7L434.6,54.2L429.1,51.6L430,53.5L426.8,54.9L437.9,55.2L422.9,59.8L411.7,60.8L405,64.8L389.4,68.2L387,69.9L385.6,73.7L381.1,75.9L382.2,78L379.5,83.1L375.6,83.2L371.5,81L365.9,80.9L356.6,73.3L354.8,69L350.9,66.4L351.9,64.3L350.1,63.4L352.8,60.1L357,59.1L358.7,55.7L351.5,57.5L348.1,56.6L349,53.3L357.2,54L350,51.3L344.9,51L348,48.4L340.8,42.5L337.2,41.4L337.3,40.2L329.8,38.6L309.7,38.7L301.7,36.1L314.5,35.1L296.4,33.2L296.8,32.1L317.5,29.5L318.5,28.5L311,27.5L327.1,24.1L326,22.9L341.1,21.7L352.7,22.5L360,21L376.3,23.2L369.7,21.7L370.1,20.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TF" data-code="TF" d="M691.5,385.1L696,386.8L695.2,388.1L691,388.3L691.5,385.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TL" data-code="TL" d="M847.1,274.7L853.7,273.3L847.5,276.1L847.1,274.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ZA" data-code="ZA" d="M545.4,329.4L546.7,328L548.3,330L551.3,330.7L555.3,329.1L555.3,318.8L557.7,321.9L558,324.5L560,324.2L564.8,320.2L567.3,321.3L571.3,320.8L575.3,315.5L581.8,311.4L586.6,311.8L588.7,317.7L588.4,321.8L586.2,321.5L585.2,324.3L586.9,325.8L591.2,324.3L589.5,329.9L578.4,341L571.6,344.3L562.7,344.1L555.7,346.7L551,344.8L549.8,340.6L550.6,337.9L545.4,329.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LS" data-code="LS" d="M580.5,330.4L581.5,331.3L578.1,334.9L575,333L578,330.1L580.5,330.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MX" data-code="MX" d="M174.6,159.6L181.3,159.1L191.6,163L204.2,161.8L211.3,168.7L213.6,169.5L215.3,167.3L217.6,167.3L223.6,173.5L224.9,176.8L230.2,178.1L228.1,187.7L233.6,197.7L237.7,199.6L246.1,197.6L247.9,196.4L249.2,191.7L258.2,190.2L258.8,192.1L256.6,195.4L256,199.3L254.2,198.6L253.2,200.3L247.2,200.5L247.2,202.1L246,202.1L248.7,205.4L245.2,205.4L243.8,209.6L239.2,205.7L237,205L231.8,206.5L212.5,199.2L207,194.6L206.3,193.2L207.6,190.5L205.5,186.7L196.5,178.9L196.4,176.5L193.4,174.5L192.7,172.6L188.3,169.6L185.7,163.4L181.2,161.7L180.7,162.8L181.5,166.2L190,175.9L192.6,182.5L196.1,185.1L194.8,186.6L188.4,181.3L188.1,177.7L180.4,173L181.8,172.9L182.9,170.6L179.1,167.9L174.6,159.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-UY" data-code="UY" d="M339.9,333.9L341.7,333.6L350.6,339L352.2,340.9L350.5,345.5L347.4,347.1L343.8,346.8L337.7,344.2L339.9,333.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BR" data-code="BR" d="M351.7,343.8L351,342.2L352.2,340.9L350.6,339L341.7,333.6L339.9,333.9L351,324.8L351,322.6L349.6,321L348.3,321.5L349.2,316.7L346.1,316.5L345,312.1L339.1,311.4L338.4,306.1L340.3,300.5L338.1,298L338.2,295.3L332.9,295.2L331.9,288.3L321.3,284.6L318.3,282.1L318.5,277.1L314.9,277.6L310.4,280.6L304,280.6L304.2,276.4L301.9,278L299.5,277.9L296.6,276.3L297.2,275.1L294.5,270.9L296.9,268.4L297.5,264.7L303.3,261.8L305.9,261.9L307.2,253.1L305.5,248.5L307.6,248.3L307.7,247.3L306.1,247L306.1,245.2L311.5,245.3L312.4,244.3L313.7,246.9L317.9,247.8L324,243.9L321.5,243.1L321.2,239.5L320,238.7L324.7,239.5L330.6,237.4L331.3,235.6L333.4,236.1L333,237.3L334.6,239L333.4,242.3L336,246.3L340.7,244.6L344.5,245L344.5,243L352.9,244.1L357.5,238.3L359.7,244.7L361.2,245.2L361.3,247.1L359.2,249.4L360,250.2L365,250.7L365,253.4L367.1,251.6L375.3,254.3L376.6,255.9L376.2,257.5L379.4,256.6L389,258L396.6,263.4L401.1,264.3L403.5,270.4L402.4,275L392.6,286.3L390.9,299.6L386.3,310.9L383.4,313.8L376,314.9L367.6,319.1L365.3,321.9L364.2,329.6L351.7,343.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BO" data-code="BO" d="M306.9,280.4L310.4,280.6L314.9,277.6L318.5,277.1L318.3,282.1L321.3,284.6L331.9,288.3L332.9,295.2L338.2,295.3L338.1,298L340.3,300.5L339.3,305.5L338.4,306.1L335.8,303.8L328.4,304.5L325.9,311.8L322.3,311.1L321.2,313.3L319.5,311.3L315.9,310.6L313.6,313.2L311.6,313.5L309,306.6L309.9,303.9L306.7,298.8L308.4,295.8L307.4,291.5L309.3,284.9L306.9,280.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PE" data-code="PE" d="M305.9,261.9L303.3,261.8L297.5,264.7L296.9,268.4L294.5,270.9L297.2,275.1L296.6,276.3L299.5,277.9L301.9,278L304.2,276.4L304,280.6L306.9,280.4L309.3,284.9L307.4,291.5L308.4,295.8L304.5,301L288.9,290.7L278.4,270L274.3,267L275.2,265.8L273.9,263.2L276.9,259.5L276.6,262.3L278.8,262.4L280,263.8L281.6,262.6L283.8,258.3L287.1,257.2L290.2,254.3L291.4,250.2L297,256.4L303.3,256.3L305.4,257.6L303.6,260.4L305.9,261.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CO" data-code="CO" d="M314.2,246.5L312.4,244.3L311.5,245.3L306.1,245.2L306.1,247L307.7,247.3L307.6,248.3L305.5,248.5L307.2,253.1L305.9,261.9L303.6,260.4L305.4,257.6L303.3,256.3L297,256.4L291.4,250.2L284.9,248.9L280.6,245.3L285.8,239.3L284.7,238.6L285.2,233.8L283.7,229.9L285.4,228L284.8,226.3L289.8,223.8L290.3,220.5L291.9,219.2L296.1,218.8L301.7,215.6L301.9,217.3L300.1,217.8L297.5,221L296.4,224.6L297.8,224.8L298.8,229.4L300.1,230.6L305.3,230.7L307.3,233.1L312.9,233.1L311.6,237.5L313.1,240.8L311.6,242.2L314.2,246.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PA" data-code="PA" d="M285.1,225.9L285.4,228L283.7,229.9L282.1,227.6L282.8,226.9L280.2,225L276.7,226.9L277.8,229L275.3,229.9L274.8,228.3L273.6,228.6L273,227.5L269.9,227.6L269.6,223.7L273.8,225.6L280.5,223.5L285.1,225.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CR" data-code="CR" d="M270.7,223.4L269.6,223.7L269.5,227.2L264,222L263.6,223.5L262.1,222.4L261.3,219.7L262.3,218.8L267.6,219.6L270.7,223.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NI" data-code="NI" d="M267.6,219.6L261.9,219.2L256.5,214.1L259.1,213.2L259,211.8L261.7,211.6L264.1,208.9L269,208.3L267.6,219.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-HN" data-code="HN" d="M269,208.3L264.1,208.9L257.5,213.9L255.9,211.4L251.8,209.9L252.4,208.1L255.8,205.9L263.9,205.6L269,208.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SV" data-code="SV" d="M251.8,209.9L256.3,211.7L255.8,213.5L249.7,211.8L251.8,209.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GT" data-code="GT" d="M243.8,209.6L245.2,205.4L248.7,205.4L246,202.1L247.2,202.1L247.2,200.5L252.4,200.5L252.1,205.9L254.9,206.3L251.8,209.9L249.7,211.8L243.8,209.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BZ" data-code="BZ" d="M252.4,200.5L254.2,198.6L255.3,199L254.6,204.1L253,205.9L252.1,205.9L252.4,200.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-VE" data-code="VE" d="M331.3,235.6L330.6,237.4L324.7,239.5L320,238.7L321.2,239.5L321.5,243.1L324,243.9L317.9,247.8L315.8,248L311.6,242.2L313.1,240.8L311.6,237.5L312.9,233.1L307.3,233.1L305.3,230.7L300.1,230.6L298.8,229.4L297.8,224.8L296.4,224.6L297.5,221L300.1,217.8L301.9,217.3L300.1,218.3L301,221L299.8,222.6L300.8,224.8L302,224.6L301.7,219.5L305.1,218.4L305.7,216.2L310.6,220.7L316,220.4L319.8,222L321.3,220.4L328.1,220.2L325.7,221.1L331,223.9L331.5,226.2L334,226.8L331.8,228.4L332.5,230.4L330.1,231.4L329.4,233.4L331.3,235.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GY" data-code="GY" d="M342.9,244.7L340.7,244.6L337.4,246.5L334.3,245L333.4,242.3L334.6,239L333,237.3L333.4,236.1L329.4,233.4L330.1,231.4L332.5,230.4L331.8,228.4L334,226.8L341.3,233.4L338.8,238.7L342.9,244.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SR" data-code="SR" d="M348.5,243.6L344.5,243L344.5,245L342.9,244.7L340,240.7L338.8,238.7L341.3,233.4L350.1,234L348.7,236.4L350,239.9L348.5,243.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-FR" data-code="FR" d="M356.5,238.5L352.9,244.1L348.5,243.6L350,239.9L348.7,236.4L350.1,234L353.1,235L356.5,238.5Z M517.2,112.6L522.5,113.8L520.7,117.7L518.7,117.9L516.8,120.2L516.7,121.5L518.1,121L519,122.2L519.7,124.1L518.7,124.9L519.5,127.1L521,127.4L520.7,128.6L518.1,130.2L512.7,129.4L508.6,130.4L508.3,132L505.1,132.4L494.7,129.4L496.2,127.7L496.7,122.2L491.8,117.9L487.5,116.8L487.3,114.8L495.5,114.9L494.6,111.7L497.2,112.9L503.7,110.8L504.6,108.5L507,107.9L511.9,111.4L517.2,112.6Z M524.3,131.6L526.1,130.5L525.6,135.1L524.4,134.5L524.3,131.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-EC" data-code="EC" d="M290.6,250.4L290.2,254.3L287.1,257.2L283.8,258.3L281.6,262.6L280,263.8L278.8,262.4L276.6,262.3L278.4,257.4L277.8,256.2L276.8,257.5L275.1,256.2L275.2,252.9L277.5,247.9L281,246.2L284.9,248.9L288.1,248.8L290.6,250.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-JM" data-code="JM" d="M284.5,198.6L288.3,200.3L285.5,200.8L282.4,199.4L284.5,198.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CU" data-code="CU" d="M271.5,185.6L282.4,187.5L289.8,192.4L293.9,193.7L284,194.8L285.9,193.3L282.9,192.4L281.3,190L271.7,187.8L272.8,187.1L264,189.2L267.3,186.7L271.5,185.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ZW" data-code="ZW" d="M586.6,311.8L577.8,309.7L577,306.9L572.7,303.6L570.2,299.3L575.1,299.8L580.4,294.6L584.1,293.1L584.3,294.1L586.6,294.1L591.2,296.4L590.7,306.4L586.6,311.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BW" data-code="BW" d="M581.8,311.4L575.3,315.5L571.3,320.8L567.3,321.3L564.8,320.2L560,324.2L558,324.5L557.7,321.9L555.3,318.8L555.3,310.7L558,310.6L558.1,300.7L564.4,299.6L565.5,300.8L570.2,299.3L572.7,303.6L577,306.9L577.8,309.7L581.8,311.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NA" data-code="NA" d="M555.3,318.8L555.3,329.1L551.3,330.7L548.3,330L546.7,328L545.4,329.4L542.2,325.3L539.6,311.4L532.8,300.2L532.6,298.1L537.4,297.1L539.1,298.4L550.7,298.1L552.7,299.4L559.4,299.8L566.8,298L569.7,298.8L565.5,300.8L564.4,299.6L558.1,300.7L558,310.6L555.3,310.7L555.3,318.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SN" data-code="SN" d="M453.6,212.2L451,209.1L455.2,204.3L459.5,203.9L462.7,205.4L466.2,209.4L468,215.4L453.7,215.6L453.2,213.5L461.5,212.5L458.1,211.5L453.6,212.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ML" data-code="ML" d="M468,215.4L466.2,209.4L467.6,207.3L484.6,206.9L485.2,205L482.1,180.7L486.3,180.6L508.7,195.3L508.8,197.1L511.8,196.8L511.9,203.2L510.1,206.8L497,208.4L491.4,212.4L488.9,212.6L485.5,217.5L485,221.2L477.7,221.6L474.6,215.8L471.8,217.1L468.2,216.5L468,215.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MR" data-code="MR" d="M452.6,191.7L453.2,190.7L464.1,190.8L464.2,185.3L466.8,185.1L466.8,178L475.9,178.1L475.9,173.9L486.3,180.6L482.1,180.7L485.2,205L484.6,206.9L467.6,207.3L466.2,209.4L462.7,205.4L459.5,203.9L454.3,205.2L454.8,194.2L452.6,191.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BJ" data-code="BJ" d="M507.5,232.6L505.2,232.9L504.6,224.6L502.1,220.9L504,217.9L507.9,216L510,217.6L510.6,220.2L507.6,226.4L507.5,232.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NE" data-code="NE" d="M541.3,186.5L541.9,190.8L544.2,193.4L542.4,203.8L538.8,206.4L537.6,210.1L538.8,212.9L540.6,213L539.4,215.3L536.3,212.2L534.2,213.8L530.5,212.8L525,214.4L521.7,212.9L518.9,213.6L515.1,211.5L511.4,212.4L510,217.6L507.9,216L506,216.8L506.1,214.9L502.8,214.3L501,208.5L510.1,206.8L511.9,203.2L511.8,196.8L515.8,195.6L533.3,184.8L539.3,187.5L541.3,186.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NG" data-code="NG" d="M507.5,232.6L507.6,226.4L510.3,222L510.2,215.1L512.1,211.8L515.1,211.5L518.9,213.6L521.7,212.9L525,214.4L530.5,212.8L534.2,213.8L536.3,212.2L540.5,216.4L532.6,230.6L530.7,231.5L528.1,230.4L525.6,232.1L523.6,236.7L516.4,238.2L512,232.6L507.5,232.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CM" data-code="CM" d="M540.3,214.3L543,222.3L539.4,222.2L538.8,223.5L541.6,225.6L542.9,228.6L540.4,232.7L540.2,236.9L544.1,241.6L544.3,245.2L539.8,243.8L526.8,243.7L527.2,241.5L523.6,237.5L524.3,234.8L528.1,230.4L530.7,231.5L532.6,230.6L537.7,220L540,217.9L540.5,216.4L539.4,215.3L540.3,214.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TG" data-code="TG" d="M502.5,219.5L502.1,220.9L504.6,224.6L505.2,232.9L502.9,233.5L501.6,230.8L501,221.7L499.9,220.3L502.5,219.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GH" data-code="GH" d="M500.1,219.4L502,226.9L501.6,230.8L502.9,233.5L494.5,236.9L492.1,236.1L491,232.6L492.9,227.2L491.8,219.5L500.1,219.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CI" data-code="CI" d="M477.7,221.6L482.8,220.8L483.2,222L485,221.2L488,223.3L492.1,223.2L492.9,227.2L491,232.6L492.1,236.1L487.1,235.6L478.6,237.9L479,234.1L476.1,232L477,226.9L478.2,226.2L476.9,222.8L477.7,221.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GN" data-code="GN" d="M461.9,215L468,215.4L468.2,216.5L471.8,217.1L474.6,215.8L477.7,221.6L476.9,222.8L478.2,226.2L477,226.9L477,228.6L474.4,229.7L472.9,226.3L470.8,226.8L469.1,222.1L465.5,222.7L463.2,225.3L458,219.3L461.8,217.2L461.9,215Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GW" data-code="GW" d="M453.7,215.6L461.9,215L461.8,217.2L458,219.3L453.7,215.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LR" data-code="LR" d="M476.6,228.6L476.1,232L479,234.1L478.6,237.9L475,236.6L468.2,231.2L471.6,226.6L472.9,226.3L474.4,229.7L476.6,228.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SL" data-code="SL" d="M463.2,225.3L465.5,222.7L469.1,222.1L471.6,226.6L468.2,231.2L464,228.3L463.2,225.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BF" data-code="BF" d="M485,221.2L485.5,217.5L488.1,213.3L491.4,212.4L497,208.4L501,208.5L502.8,214.3L506.1,214.9L505.4,217.7L502.5,219.5L491.8,219.5L492.1,223.2L488,223.3L485,221.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CF" data-code="CF" d="M576,235.5L567.8,235.8L563.5,236.9L562.2,238.8L554.1,236L551.5,238.3L551.3,240.3L547.6,239.6L544.5,243.7L540.2,236.9L540.2,234.9L542.4,229.4L549.9,228.1L552.5,226L552.3,225L558.3,223.7L560.3,220.6L563.5,219.1L565.4,222L565.2,225.1L569.8,228.3L576,235.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CG" data-code="CG" d="M551.3,240.3L549,251.2L545.6,254.8L544.5,259.8L540.5,263.8L539.3,262.5L536.8,263.6L535.1,262.3L533.1,264L530.8,261.1L532.9,259.5L531.9,257.7L534.7,256.6L534.9,255.4L538.9,256.9L540.1,253.7L538.5,249.9L539.7,246.7L536.9,246.3L536.3,243.7L544.3,245.2L547.6,239.6L551.3,240.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GA" data-code="GA" d="M531.3,243.7L536,243.5L536.9,246.3L539.7,246.7L538.5,249.9L540.1,253.7L538.9,256.9L534.9,255.4L534.7,256.6L531.9,257.7L532.9,259.5L530.8,261.1L524.4,253.1L526.4,247.2L531.3,247.1L531.3,243.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GQ" data-code="GQ" d="M526.8,243.7L531.3,243.7L531.3,247.1L526.4,247.2L526.8,243.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ZM" data-code="ZM" d="M585.4,273.2L592.3,276.9L592.5,284.5L590.8,288.1L592.3,288.8L583.8,291.1L584.1,293.1L580.4,294.6L575.1,299.8L568.6,298.2L564.5,298.7L560.8,294.7L560.9,285.8L566.7,285.9L566.4,280.4L571.5,282.7L575.5,282.2L580.4,286.8L582.5,286.8L582.3,283.8L578.8,282.8L579,275.5L580.6,273.4L585.4,273.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MW" data-code="MW" d="M591,275.6L593.7,276.2L595.2,278.2L596,287.7L599.1,290.6L599.4,294.2L597.3,296.7L595.5,295L595.7,290.6L590.8,288.1L592.5,284.5L593,279.2L591,275.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MZ" data-code="MZ" d="M596,282L604.1,282.1L612,278.7L613.3,290.8L609.6,296.4L603.9,298.8L596.6,305L596.4,306.9L598.8,311.4L598.5,317L591.7,320.4L590.5,321.5L591.2,324.3L589.1,324.3L588.7,317.7L586.6,311.8L590.7,306.4L591.2,296.4L586.6,294.1L584.3,294.1L583.8,291.1L592.3,288.8L595.7,290.6L595.5,295L597.3,296.7L599.4,294.2L599.1,290.6L596,287.7L596,282Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SZ" data-code="SZ" d="M589.1,324.3L586.9,325.8L585.2,324.3L586.2,321.5L588.4,321.8L589.1,324.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AO" data-code="AO" d="M536.1,263.3L533.8,266.1L533.1,264L535.1,262.3L536.1,263.3Z M534.2,266.9L545.4,266.3L548.5,272.4L552.8,272.2L553.9,269.9L555.8,269.3L560.4,270.3L561.5,280.8L565.2,280.2L566.7,281.2L566.7,285.9L560.9,285.8L560.8,294.7L564.5,298.7L559.4,299.8L552.7,299.4L550.7,298.1L539.1,298.4L537.4,297.1L532.6,298.1L533.8,290.1L538.2,281.4L534.2,266.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BI" data-code="BI" d="M584.6,256.7L585.4,259.3L581.5,262.5L580.6,257.9L584.6,256.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IL" data-code="IL" d="M599.2,159.1L597.7,159.6L597.1,161.5L597,162.9L598.3,162.5L598.4,163.6L597,168.1L595.2,163.3L597.5,158.1L599.5,157.6L599.2,159.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LB" data-code="LB" d="M599.5,157.6L597.6,158.1L600,153.8L601.3,153.9L601.7,155L599.5,157.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MG" data-code="MG" d="M637.6,284.6L639.9,293.6L639.4,294.4L638.5,292.8L638,293.6L638.3,296.9L630.8,319.3L626.1,321.1L622.3,319.4L620.4,313.3L620.6,309.3L621.9,308.8L623.5,304L622.1,298.4L623.5,295L628.6,293.8L632.5,290.5L633,288L634.1,288.3L636.7,283.4L637.6,284.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GM" data-code="GM" d="M453.6,212.2L458.1,211.5L461.5,212.5L453.2,213.5L453.6,212.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TN" data-code="TN" d="M526.3,165.8L525.2,160.8L521.1,157.4L520.9,155.3L522.6,153.7L523.4,147.4L526.4,146.3L528.4,146.6L528.3,148L530.6,147L529.4,148.9L530,153.2L528.2,154.6L528.7,156.2L531.9,158L531.8,160.1L527.6,162.8L527.7,165.2L526.3,165.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-DZ" data-code="DZ" d="M475.9,173.9L475.9,169.9L485.4,166.7L489.8,164.2L489.9,162.1L496.4,160.4L496.9,159.3L494,152.3L496.6,150.8L504.1,148.3L523.4,147.4L522.6,153.7L520.9,155.3L521.1,157.4L525.2,160.8L527.2,168.3L527,176.4L525.9,177.5L528.6,182.3L529.9,181.8L533.3,184.8L515.8,195.6L508.8,197.1L508.7,195.3L475.9,173.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-JO" data-code="JO" d="M598.7,160L599.2,159.1L602.3,160.2L607.8,157.3L608.9,160.7L602.8,162.5L605.6,165.3L600.2,168.9L597,168.1L598.7,160Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AE" data-code="AE" d="M643.3,182.7L650,183L655.8,177.6L656.3,178.6L656.7,180.8L655.2,180.8L655.5,183L654.2,183.5L652.8,187.5L644.4,186.1L643.3,182.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-QA" data-code="QA" d="M641.1,181.2L641,179.2L642.5,177.5L643.4,180L642.8,181.6L641.1,181.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KW" data-code="KW" d="M633.3,166.7L634.5,170.7L629.4,169.2L631.4,166.5L633.3,166.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IQ" data-code="IQ" d="M608.9,160.7L607.8,157.3L613.9,154.4L614.7,149L618.8,146.2L624.4,146.7L626.2,150.1L628,150.9L628.2,152.5L626.2,155.6L628.1,158.3L631.5,159.8L632.9,161.9L632.5,163.9L634.9,166.9L631.4,166.5L629.4,169.2L624.2,168.9L616.4,163.4L608.9,160.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-OM" data-code="OM" d="M653.4,186.9L654.2,183.5L655.5,183L655.2,180.8L656.7,180.8L659.4,183.7L663.1,184.5L666.1,188L662.5,193.3L660.6,193.8L660.3,197.4L657.3,198.4L656.3,200.3L654.6,200.3L652.2,202.9L647.5,203.7L644.4,197.2L652.8,194.4L654.6,188.9L653.4,186.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KH" data-code="KH" d="M785,216.2L784.3,212.8L786.1,210.5L789.7,210L794.6,211.4L795.8,209.5L798.3,210.6L798.9,212.4L798.6,215.7L793.9,217.9L795.1,219.5L787.5,220.5L785,216.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TH" data-code="TH" d="M792.3,210.4L786.1,210.5L784.3,212.8L785,216.2L780.1,214.9L780.5,212.7L778,212.8L775.6,224.3L777.4,224.4L779,229.4L783.7,232.7L781,234.2L780.8,232.8L778,232L772.6,226.8L776.6,217L775.3,211.6L772.8,208L774.7,205.1L770.5,198.8L772.9,195.3L778.1,193.3L779.5,195.8L781.3,195.9L780.7,201.4L786.7,199.1L788.8,199.3L790.9,201.6L791.1,204.3L793.3,206.8L792.3,210.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LA" data-code="LA" d="M798.3,210.6L795.8,209.5L794.6,211.4L792.3,210.4L793.3,206.8L788.8,199.3L783.6,199.7L780.7,201.4L781.3,195.9L779.5,195.8L778.1,193.3L781,190.5L782.8,191.2L782.4,188L783.8,187.6L786.7,192.3L790.1,192.3L791.2,194.8L788.6,196.5L791.9,198.1L798.1,205.8L798.3,210.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MM" data-code="MM" d="M778.1,193.3L772.9,195.3L770.5,198.8L774.7,205.1L772.8,208L775.3,211.6L776.6,217L773.8,222.4L773.6,213.6L769.9,203L764.9,206.3L761.6,205.4L762,199.4L760.2,195.2L756.6,192.6L756.4,190.3L757.4,190.8L757.4,188.8L758.8,188.1L759.2,183.1L761.4,183.7L764.2,176.2L767.8,174.3L769.8,174.8L770.4,171.5L772,171.3L774.1,173.6L774.1,178L771.5,180.3L771.1,183.6L774.1,183.2L774.7,185.7L776.5,186.3L775.7,188.6L778.9,190.1L781,189.3L778.1,193.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-VN" data-code="VN" d="M789.8,220.9L795.1,219.5L793.9,217.9L798.6,215.7L798.8,207.8L791.9,198.1L788.6,196.5L791.2,194.8L790.1,192.3L786.7,192.3L783.8,187.6L790.2,186.6L792.6,185.1L796.5,186.7L796,188.3L797.3,189.4L800.1,190.1L796.4,192.5L793.5,197.1L802.4,207.6L803.7,212.7L803.3,217.6L792.1,226.1L791.1,224.3L791.9,222.4L789.8,220.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KP" data-code="KP" d="M862.9,132.2L860.2,134.4L860.3,136.4L854.3,139.6L853.8,141.1L856.1,143.4L848,145.4L846.4,144.1L848.3,140.6L845.2,139.1L847.4,137.3L852.4,133.8L856.1,134.8L855.7,133.3L860,132.2L861.1,130.6L862.9,132.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KR" data-code="KR" d="M850.5,145.1L856.5,142.7L859.6,147.8L858.6,152.6L851.3,154.5L850.3,148L852.4,147.5L850.5,145.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MN" data-code="MN" d="M743.8,113.1L756.2,108.9L770.2,111.9L772.9,109.9L771.7,108.3L774.6,105.4L783.5,107.6L784,109.7L788,110.9L796.9,110.3L801.3,113.1L807.4,113.5L817.7,110.4L824.1,111.4L820.8,116.3L821.5,117.4L828,116.5L832.7,119.3L832.4,120.3L826.2,120.4L815.2,125.5L810.8,124.7L809.3,126.5L810.6,128.5L806.7,130.9L791.6,134.5L780.1,131.5L767.6,131.3L764.7,127.1L759.7,125.1L752.6,124.2L751.6,123L752.7,119.8L750.8,117.5L744.5,115L743.8,113.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IN" data-code="IN" d="M770.4,171.5L769.8,174.8L767.8,174.3L764.2,176.2L761.4,183.7L759.2,183.1L758.8,188.1L757.4,188.8L756,184.4L754.7,186.2L753.2,184.7L756.6,180.6L749.8,179.8L749.5,177.9L746,176.5L745,178.4L747,179.9L744.7,181.9L746.4,182.7L746.9,189.7L741.6,190.3L741.8,192.4L740.3,194L736.3,195.9L728.3,202.7L728.3,204L723.1,205.8L721.8,221.2L720.4,221.4L719.1,223.5L720,224.4L717.4,225.2L715.4,227.9L712.8,225.3L706.8,209.4L704.3,205.6L701.7,190.7L695.8,192L692.1,188.6L693.5,187.6L692.6,186.5L689.4,184.2L691.2,182.3L697.3,182.3L694.9,176.4L693.1,175.2L696.2,172.3L699.4,172.5L706.7,163.9L706.7,162L709.1,160.4L706.8,159L704.9,154.7L706.2,153.5L713.5,153.7L716.2,151.4L719.2,154.7L720,158.4L719.9,159.8L717.9,159.4L718.7,162.5L725.3,166.2L722.5,170L731.4,174L744.6,176.6L744.8,172.6L746.5,172L746.8,174.7L749.3,175.8L755.6,175.4L754.7,172.9L762.7,168.7L765,169.4L767,168.2L768.3,169.9L767.4,171.1L770.4,171.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BD" data-code="BD" d="M757.4,188.8L756.6,192.6L753.9,186.8L751.4,186.7L750.8,189.3L747.3,188.7L746.4,182.7L744.7,181.9L747,179.9L745,178.4L746,176.5L749.5,177.9L749.8,179.8L756.6,180.6L753.2,184.7L754.7,186.2L756,184.4L757.4,188.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BT" data-code="BT" d="M754.7,172.9L755.6,175.4L749.3,175.8L746.8,174.7L750,171.4L754.7,172.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NP" data-code="NP" d="M744.8,172.6L744.6,176.6L742.3,176.7L731.4,174L722.5,170L723.6,167.4L726.5,165.5L738.4,171.7L744.8,172.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PK" data-code="PK" d="M716.2,151.4L713.5,153.7L706.2,153.5L704.9,154.7L706.8,159L709.1,160.4L706.7,162L706.7,163.9L699.4,172.5L696.2,172.3L693.1,175.2L694.9,176.4L697.3,182.3L691.2,182.3L689.4,184.2L687.3,183.5L684.4,179.4L670.8,180.3L671.9,177.1L675.9,175.7L674.3,173.9L674.3,171.5L671.6,170.3L669.1,167.1L673.7,168.6L684.3,167L684.4,164.6L685.9,163L692.5,161.4L692.4,159.7L695.3,157.3L694.3,155.5L696.9,155.6L698.9,152.4L697.9,149.8L699.6,148.6L708.8,146.9L711.7,150.3L716.2,151.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AF" data-code="AF" d="M684.8,146.2L692.2,146.8L696.7,143.1L698.2,143.7L699.6,148L703.5,145.8L708.8,146.9L697.9,149.8L698.9,152.4L696.9,155.6L694.3,155.5L695.3,157.3L692.4,159.7L692.5,161.4L685.9,163L684.4,164.6L684.3,167L673.7,168.6L669.1,167.1L671.6,164.6L671.4,162.8L669.3,162.4L668.2,158.4L669.3,156.9L668.1,156.5L670,151L675,151.7L675.5,150.4L679.3,149.1L679.9,146.9L682.6,145.4L684.8,146.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TJ" data-code="TJ" d="M688.4,146.8L690,144L689.4,141.9L687.3,141.3L688.1,140.1L690.4,140.2L692.6,136.9L696.3,136.2L695.7,137.5L697.3,138.2L693.2,138.6L693,140.2L704.6,140.5L705.4,143L708,143.4L708.3,146.1L703.5,145.8L699.6,148L698.2,143.7L696.7,143.1L692.2,146.8L688.4,146.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-KG" data-code="KG" d="M697.1,132.6L699.6,131L704.1,131.9L704.6,130.3L706.1,129.7L710.1,130.9L719.8,131L722.9,132.4L717.2,135.6L713.6,135.9L712.6,137.7L707.7,137.9L704.6,140.5L693,140.2L693.2,138.6L699.4,138.5L702.9,136.5L695.6,134.7L697.9,132.9L697.1,132.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TM" data-code="TM" d="M645.8,133.9L650.2,132.4L654,135.4L658.6,135.2L658.2,133.8L662.9,131.2L666.6,132.7L668,135.5L671.9,135.9L673.3,138.7L678.2,142L684.9,144.5L684.8,146.2L682.6,145.4L679.9,146.9L679.3,149.1L672.9,152L670,151L669.8,148.6L659.3,144.4L654.2,144.5L649.8,146.7L649.7,141.8L647.5,140.9L648.2,139L646.4,138.8L647,136.5L649.6,137.1L652,136.2L649.2,133L647,133.7L646.7,135.7L645.8,133.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IR" data-code="IR" d="M634.9,166.9L632.5,163.9L632.9,161.9L631.5,159.8L628.1,158.3L626.2,155.6L628.2,152.5L628,150.9L626.2,150.1L622.8,144.5L622.5,140.5L624.4,139.7L626.3,142L628.2,142.4L633.5,140L634.3,140.9L633.4,142.2L635.8,143.6L636.7,145.6L641.2,147.6L649.5,147.3L657.3,144.1L669.8,148.6L668.1,156.5L669.3,156.9L668.2,158.4L669.3,162.4L671.4,162.8L671.6,164.6L669.1,167.1L671.6,170.3L674.3,171.5L674.3,173.9L675.9,175.7L671.9,177.1L670.8,180.3L659.4,178.5L658.3,175.1L652,176.4L648.6,175.5L643.1,172.6L639.2,166.3L636,165.8L634.9,166.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SY" data-code="SY" d="M599.2,159.1L601.7,155L600,153.8L599.7,151.6L602.1,147.7L609.8,148L617.6,146.6L614.7,149L613.9,154.4L602.3,160.2L599.2,159.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AM" data-code="AM" d="M629.2,142.3L621.3,138.2L621.1,135.9L624.9,135.4L626.6,136.6L626,137.3L627.5,138.3L626.7,139.2L629.1,140.4L629.2,142.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SE" data-code="SE" d="M530.6,86.5L534.2,83L535.1,79.7L533.3,78.3L533.1,74.6L535,72L537.7,72.1L538.7,71L537.7,70L546.6,61.1L549.2,61.1L550,59.5L555.2,60L555.6,58.2L557.4,58L565.4,61.3L566.4,66.6L561.6,67.4L558.9,69.4L559.4,71.1L549.6,75.7L547.6,79.6L552.2,83.1L549.6,86.2L546.7,86.9L544.1,94.2L540.7,93.9L539.2,96.1L536,96.2L530.6,86.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BY" data-code="BY" d="M578.3,94L585.8,95.7L585.4,97.7L590.8,101.8L587,102.6L588.3,105.3L585.9,105.4L584.9,107.4L570.4,105.8L565.3,106.7L564.4,104.2L566.1,103.6L565.2,100.2L570.9,99.2L571.6,97.7L573.9,96.8L573.6,95.5L578.3,94Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-UA" data-code="UA" d="M588.3,105.3L593.8,104.6L595.5,106.2L595.1,107.6L597.3,107.8L598.2,109.5L611.3,112.2L610.4,116.9L597.1,121.5L597.3,122.9L588.2,121.3L588,120.3L585.4,120.6L582.2,124.2L579.7,124.2L578.4,123.6L580.2,121L583.4,121L579.6,116.3L576.5,115.4L569.1,117.4L563.1,117L561.3,115.5L563.3,113.8L562.6,112.6L566.4,109.9L565.3,106.7L570.4,105.8L584.9,107.4L585.9,105.4L588.3,105.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PL" data-code="PL" d="M565.2,100.2L566.1,103.6L564.4,104.2L566.8,109.2L562.6,112.6L563.3,113.8L560,112.6L555.1,113.3L548.8,110.1L544.9,109.9L541.7,108L539.1,102.8L539.2,100.7L549,97.6L551.9,98.8L563.1,99.1L565.2,100.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AT" data-code="AT" d="M547.2,116.3L547,117.5L545.4,117.5L544.5,120.3L540.6,121L533.8,119.1L530.7,120.1L526.3,119.2L527.5,117.8L535.9,118.1L535.8,115.9L537.8,114.2L539.8,115.1L542.4,113.8L545.8,114.5L547.2,116.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-HU" data-code="HU" d="M561.3,115.5L563.1,117L558.4,121.3L551.3,122.9L545,119.9L545.4,117.5L547,117.5L547.2,116.3L549.6,117.3L557.8,114.9L561.3,115.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MD" data-code="MD" d="M573.9,116.1L576.5,115.4L579.6,116.3L583.4,121L580.2,121L578.4,123.6L578.1,120L573.9,116.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-RO" data-code="RO" d="M578.4,123.6L582.2,124.2L580.1,125.2L579.3,128.6L575.7,127.3L571,128.6L563.7,128.3L563.1,126.2L559.9,125.6L556.2,121.9L558.4,121.3L561.4,117.6L564.3,116.4L569.1,117.4L573.9,116.1L578.1,120L578.4,123.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LT" data-code="LT" d="M573.6,95.5L573.9,96.8L571.6,97.7L570.9,99.2L565.2,100.2L563.1,99.1L563.2,97.6L559.1,96.7L558.5,94.4L569.1,93.4L573.6,95.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LV" data-code="LV" d="M575.8,90.3L578.3,94L573.6,95.5L569.1,93.4L558.5,94.4L559.9,90.5L562.6,89.6L564.8,91.6L567,91.6L567.5,89.5L569.9,89L575.8,90.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-EE" data-code="EE" d="M577.7,84.8L576.2,86.9L577,89.5L575.8,90.3L567.5,89.5L567.9,87.8L565.1,87.2L564.8,85.6L577.7,84.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-DE" data-code="DE" d="M539.2,100.7L539.1,102.8L541.7,108L534,110.4L534.8,112.4L537.8,114.2L535.8,115.9L535.9,118.1L520.7,117.7L522.5,113.8L518.5,113.3L516.8,110.8L516.6,106L519,104.9L519.7,100.8L522.6,101.3L524.5,99.9L523.7,97.3L527.6,97.3L530.4,100L534.8,98.7L539.2,100.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BG" data-code="BG" d="M562.9,127.1L563.7,128.3L571,128.6L575.7,127.3L579.3,128.6L576.9,131.7L577.8,133.3L572.5,133.8L572.5,135.2L563.8,135.2L562.2,132.4L563.9,130L562.5,128.8L562.9,127.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GR" data-code="GR" d="M573,151.9L568.7,153L565.3,152L565.8,150.8L573,151.9Z M563.8,135.2L572.5,135.2L572.5,133.8L573.9,134.5L572.4,136.6L565.9,137L567.8,138.5L562.8,138.2L564.9,141.1L563.8,141.7L566.7,143.8L566.8,145.4L564.2,144.7L565,146.1L563.3,146.4L564.3,148.8L562.5,148.9L560.2,147.7L556,139.9L558.4,136.5L563.8,135.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TR" data-code="TR" d="M624.4,146.7L618.8,146.2L609.8,148L602.1,147.7L600.4,150.5L599.4,149.2L600.4,148.2L596.4,147.8L594.5,149.4L590.3,149.7L585.1,148.1L582.5,149.6L579.8,148.1L576.8,148.2L573.1,143.9L574.5,141.7L572.7,140.4L575.8,137.7L580.1,137.6L581.2,135.5L586.5,135.9L593.1,133.3L597.7,133.2L606.5,136.3L618.4,134.5L621.1,135.9L621.3,138.2L624.4,139.7L622.5,140.5L622.8,144.5L624.4,146.7Z M572.5,133.8L577.8,133.3L580.5,135.3L573.2,138.5L572.4,136.6L573.9,134.5L572.5,133.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AL" data-code="AL" d="M558.4,136.5L556,139.9L553.9,138.2L553.6,132.8L554.8,131.4L557,132.7L557.2,135.9L558.4,136.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-HR" data-code="HR" d="M546,120.8L552.3,122.5L553.9,124.3L552.8,125.4L544.3,124.4L543.8,125.5L551.2,132L544.5,129.1L541.4,124.8L539.6,124.4L538.8,125.6L537.9,124.6L538.1,123.6L542.6,123.7L543.8,121.6L546,120.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CH" data-code="CH" d="M526.6,118L526.3,119.2L529,119.7L528.8,120.9L520.2,122.8L518.1,121L516.7,121.5L518.7,117.9L523.7,117.1L526.6,118Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BE" data-code="BE" d="M517.1,108.9L515.8,112.4L511.9,111.4L507,107.9L513.8,107L517.1,108.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NL" data-code="NL" d="M519.2,101.4L519,104.9L516.6,106L517.1,108.9L513.8,107L509.2,107.4L513.1,102.5L519.2,101.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PT" data-code="PT" d="M474.9,133.7L477,132.6L477.7,133.9L481.5,133.7L482.2,135L481,135.8L480.4,139.7L479.2,139.9L480.5,144.2L478.2,147.7L475.3,147.6L475.4,143.7L473.5,142.4L475.6,136.8L474.9,133.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ES" data-code="ES" d="M479.3,147L480.5,144.2L479.2,139.9L480.4,139.7L481,135.8L482.2,135L481.5,133.7L477.7,133.9L477,132.6L474.9,133.7L473.9,130.5L477.8,128.5L494.7,129.4L500.9,131.7L508.3,132L508.4,133.6L505.8,135.5L502.3,136.1L499.2,140.8L500.3,142.4L494,148.1L487.9,148.1L485.1,150.1L481.9,147.4L479.3,147Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IE" data-code="IE" d="M482.8,100.4L483.2,102.3L481.1,104.8L476.2,106.5L472.3,106.1L474.5,103.2L473.1,100.3L479,96.9L479,99.8L482.8,100.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NC" data-code="NC" d="M960.5,308.6L964.2,311.6L963.2,312.2L959.7,310.2L955.6,305.9L960.5,308.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SB" data-code="SB" d="M943.5,272.3L944.2,273.7L939.5,270.6L943.5,272.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-NZ" data-code="NZ" d="M991.3,361.3L988.9,364.7L986.8,365.8L985.1,364.7L986.7,362.4L982.8,359.7L984.9,357.8L985.3,353.8L979.5,345.9L984.3,348L987,353.4L987.1,351.5L988.4,352.2L988.8,354.3L992.9,355.5L995.9,354.7L994.4,358.8L992.2,358.7L991.3,361.3Z M971.3,371L980,362.5L981.2,364.8L983.2,363.7L984,364.9L979.8,370.5L980.8,371.8L976.3,372.9L973.9,377.5L970.4,379.6L963,378.4L964,375.3L971.3,371Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AU" data-code="AU" d="M910.2,363.4L911.9,363.5L910.9,370L909.9,369.3L908,371.2L905.7,371L902.1,363.1L906.6,364.3L910.2,363.4Z M850.4,339.5L845.1,341.6L843.5,344.1L833,344.4L827.8,347.4L824,347.3L819.5,345L819.6,343.4L821.4,342.4L821.7,339.5L819.6,331.8L814.8,322.5L816.1,323.8L815.1,321.2L817.3,323L815,317.7L815.9,312.4L817.1,310.4L817.3,312.6L818.5,310.6L824.2,307.5L835.7,304.7L839.6,300.5L839.8,297.9L841.7,295.6L842.9,298L844.1,297.4L843.1,296.1L843.9,294.8L845.2,295.4L845.5,293.2L849.1,289.5L853,288.4L856.5,291.3L860.1,291.6L859.5,290.1L862.8,284.8L868.3,283.6L868.2,282.2L866.2,281.3L867.7,280.9L875.8,284L879.1,282.9L880.4,284.3L877.7,287L876.4,291.7L889.5,299.2L891.3,298.2L892.4,295.5L893.6,291.8L893.6,284.5L895.9,279.6L899.8,290.4L901.6,289.4L903.8,291.6L906.6,302.7L913.5,306.6L915.8,312.1L918.7,312.2L919.2,315.2L924.6,320.2L926.6,328.1L924.7,337.9L917.6,349.1L916.7,354L912,355L906.4,358.4L902.4,356.7L902.9,355.3L898.9,357.8L890.7,355.6L887.7,350.4L883.7,348.9L884.6,347.6L883.9,345.5L882.6,347.4L880.1,347.9L883,343.4L882.8,341.4L877.7,346.9L875.6,345.8L873,340.6L864.8,337.5L850.4,339.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LK" data-code="LK" d="M727.2,229.1L726.8,232L723.2,233.4L721.4,227.2L722.6,222.7L727.2,229.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CN" data-code="CN" d="M804.1,199.5L801.8,198.6L801.7,196.2L807.7,194.2L808.4,195.3L806.5,198.1L804.1,199.5Z M722.9,132.4L722.7,130.8L724.6,130.1L722.1,125.2L729,123.5L731.1,118.5L736.6,119.4L738.1,118.2L738.2,115.4L743.8,113.1L744.5,115L750.8,117.5L752.7,119.8L751.6,123L752.6,124.2L759.7,125.1L764.7,127.1L767.6,131.3L780.1,131.5L791.6,134.5L803.4,131.9L810.6,128.5L809.3,126.5L810.8,124.7L815.2,125.5L826.2,120.4L832.4,120.3L832.7,119.3L828,116.5L821.5,117.4L820.8,116.3L824.1,111.4L827.4,112.5L831.4,110.7L831.3,109.5L835.4,105.7L835.4,104.1L833.8,103.5L839.6,101.6L849.9,103.4L854.6,111.8L859.4,112.7L862.7,114.6L863.9,117.3L875.1,115.3L869.7,124.6L864,125.1L864.3,130.7L862.9,130.8L862.9,132.2L861.1,130.6L860,132.2L855.7,133.3L856.1,134.8L852.4,133.8L845.2,139.1L836.3,142L839.4,137.7L837.9,136.3L826.5,142.4L832.5,146.8L835.6,144.8L839.9,146L840.3,147.4L836.4,148.2L831,153L834,154.6L838.6,162L838.6,164L836.9,164.8L839.1,167.1L838,171.6L836.5,171.8L829.6,181.8L821.9,186.7L817.1,188.3L816.1,187.4L807.7,190.6L806.8,193.5L805.2,193.7L805.2,190.6L797.3,189.4L796,188.3L796.5,186.7L792.6,185.1L790.2,186.6L782.4,188L782.8,191.2L781.3,191.1L781,189.3L778.9,190.1L775.7,188.6L776.5,186.3L774.7,185.7L774.1,183.2L771.1,183.6L771.5,180.3L774.1,178L774.1,173.6L772,171.3L767.4,171.1L768.3,169.9L767,168.2L765,169.4L762.7,168.7L757,172.5L750,171.4L746.7,174.2L746.5,172L738.4,171.7L718.7,162.5L717.9,159.4L719.9,159.8L720,158.4L719.2,154.7L716.2,151.4L711.7,150.3L708.3,146.1L708,143.4L705.4,143L704.6,140.5L707.7,137.9L712.6,137.7L713.6,135.9L717.2,135.6L722.9,132.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-TW" data-code="TW" d="M838.3,182.2L835.4,189L833.6,184.6L837.5,179.7L838.8,180.6L838.3,182.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IT" data-code="IT" d="M529,119.7L533.8,119.1L538.4,120.8L538.7,123.4L534.2,123.9L535,127.5L542.1,133.5L544.2,133.4L544.1,134.6L551,137.9L550.8,139.4L546.9,137.7L545.7,139.5L547.7,140.5L547.4,141.9L543.6,144.7L544.7,141.8L542.8,138.8L531.1,132.3L528.3,128L524.7,126.8L520.7,128.6L521,127.4L519.5,127.1L518.7,124.9L519.7,124.1L519,122.2L524.9,122.1L525.5,121L528.8,120.9L529,119.7Z M541,144L543.1,143.8L541.9,148.3L534.5,145.5L534.9,144.1L541,144Z M524.2,136.4L525.6,135.5L527.2,137.5L526.9,141.2L524.5,141.9L523.4,141.2L522.7,136.2L524.2,136.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-DK" data-code="DK" d="M527.6,97.3L523.7,97.3L522.5,92.9L523.7,91.4L529.4,89.6L528.5,92L530.3,93.2L526.8,95.9L527.6,97.3Z M534.4,94.1L535.3,95.5L533.6,97.8L530.7,96.2L530.3,95.1L534.4,94.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GB" data-code="GB" d="M482.8,100.4L479,99.8L479,96.9L481.3,96.7L484.3,98.5L482.8,100.4Z M491.4,101.7L491.8,100L489.9,98.3L485.9,97L486.9,95.8L486,95L484.5,96.4L484.3,93.7L482.9,92.3L486.1,87.1L491.6,87.1L488.7,90.1L494.6,89.8L491.3,94.5L494.2,94.7L496.9,98.3L498.8,98.7L501.3,103L504.7,103.5L502.9,106.1L504,107.5L501.5,109L484,110.7L490.5,107.1L486.2,106.7L485.4,105.6L488.3,104.7L486.7,103.2L487.3,101.4L491.4,101.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-IS" data-code="IS" d="M459.7,65.4L459.1,67.2L462.2,69.1L458.6,71.2L448.2,73.6L436.8,72.3L439.5,71.1L433.5,69.7L438.4,69.2L438.3,68.4L432.4,67.8L434.3,65.9L438.5,65.5L442.8,67.4L447.1,65.9L450.6,66.7L455.1,65.2L459.7,65.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-AZ" data-code="AZ" d="M628.9,133.7L632.8,135.7L635,133.9L640,138.2L637.7,138.4L635.8,143.6L633.4,142.2L634.3,140.9L633.5,140L629.2,142.3L629.1,140.4L626.7,139.2L627.5,138.3L624.9,135.4L629.2,135.9L628.9,133.7Z M628.2,142.4L626.3,142L624.4,139.7L627.1,140.4L628.2,142.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-GE" data-code="GE" d="M611,129.4L626.3,131.9L629.6,135.6L621.1,135.9L615.4,134.6L615.2,131.5L611,129.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PH" data-code="PH" d="M835.6,214.7L834.2,212.6L837.6,213.7L836.8,216.1L835.6,214.7Z M840.5,222.3L841.5,219.8L843,219.6L842.6,221.5L844.7,218.8L844.4,221.4L841.7,224.9L839.9,223L840.5,222.3Z M851,226.6L851.5,230L850.6,232.6L849.5,229.7L848.2,231.2L849.1,233.2L848.3,234.5L845.1,232.9L844.3,230.9L845.1,229.6L843.4,228.2L839.1,230.8L838.7,230L839.7,227.7L843,225.9L844,227.1L848.5,225L848.4,222.9L850.6,224.2L851,226.6Z M829.2,224.1L825.5,226.8L832,218.4L832.5,220.7L829.2,224.1Z M839.8,199.4L840.3,202.5L837.9,205.7L838.1,210.2L844.3,211.7L844.7,215.2L841.5,212.4L840.8,213.4L839,211.7L835.1,211.5L836.1,209.7L835.3,209L834.9,210L833.1,207.2L835.3,198.6L839.8,199.4Z M839,218.3L838.6,217L842,217.8L838.9,221L839,218.3Z M848.6,216.2L849.4,219.3L847.3,218.6L848,221.2L846.7,221.9L845.3,218.1L846.9,218.3L846.9,217.2L845.2,215.1L848.6,216.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MY" data-code="MY" d="M778,232L780.8,232.8L781,234.2L783.7,232.7L786,234.7L789.5,246.4L787.5,246.6L781.6,242.3L778,232Z M827.5,238.5L821.9,238L818.4,246L813.5,245.8L807,247.9L805.1,246.3L804.6,244.4L808.8,244.9L809.4,242.5L813.9,241.4L817.2,237.4L818.5,238.9L820.4,238L820.7,234.9L824.2,230.8L825.4,230.8L826.9,233.4L831.1,235L827.5,238.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BN" data-code="BN" d="M820.7,234.9L820.4,238L818.5,238.9L817.2,237.4L820.7,234.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SI" data-code="SI" d="M538.4,120.8L545,119.9L546,120.8L543.8,121.6L542.6,123.7L538.1,123.6L538.4,120.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-FI" data-code="FI" d="M579.4,58.2L579,60.1L583.3,62L580.7,64L583.9,67.2L582.1,69.6L584.6,71.7L583.4,73.5L587.5,75.4L586.5,76.8L578,81.9L563.5,83.8L559.2,81.3L559.9,78.6L558.5,76.1L559.8,74.5L570.6,69.1L570.3,68L565.5,65.6L565.4,61.3L557.4,58L559,57.3L562.1,58.8L568.7,59.3L572.7,56L577,55.1L580.6,56.2L579.4,58.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SK" data-code="SK" d="M562.7,113.6L560.8,115.8L557.8,114.9L549.6,117.3L546.9,115.4L551.5,112.5L560,112.6L562.7,113.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-CZ" data-code="CZ" d="M541.7,108L546.4,110.5L548.8,110.1L552.4,112.5L547.1,115L542.4,113.8L539.8,115.1L534.8,112.4L534,110.4L541.7,108Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ER" data-code="ER" d="M601.2,209.9L602.4,202.9L606.7,200L609.1,205.8L619.7,214.7L617.6,215.2L611.2,209.7L607,209.7L605.3,208.4L604.4,210.5L601.2,209.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-JP" data-code="JP" d="M894.1,141.2L891.6,144L891,150.4L889.6,152.4L881.2,153.9L877.2,157L875.3,156L875.2,153.9L863.8,155.9L866.7,157.9L864.8,162.6L863,163.8L861.7,162.7L862.3,160.2L859.5,157.5L868.4,151.6L876.9,151.3L879.8,146.4L881.6,147.7L887.3,143.8L889.7,135.6L892.7,135.1L894.1,141.2Z M901.7,127.9L903.7,126.7L904.3,129.8L900.2,130.6L897.7,133.3L893.4,131.4L891.9,134.5L888.8,134.5L888.4,131.8L889.8,129.6L892.7,129.5L894.4,123.5L897.6,126.4L901.7,127.9Z M867.7,157L872,154.5L874.4,156.1L872.8,157.8L871.6,156.9L870.2,157.5L869.5,159.2L867.7,158.4L867.7,157Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-PY" data-code="PY" d="M338.4,306.1L339.1,311.4L345,312.1L346.1,316.5L349.2,316.7L347.8,323.9L345.3,326.1L337.2,325.3L339.9,321.1L339.5,319.9L331,316.3L325.9,311.8L328.4,304.5L335.8,303.8L338.4,306.1Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-YE" data-code="YE" d="M644.4,197.2L647.5,203.7L645.5,204.5L644.9,206.7L635.2,211.1L626.7,213.1L625,214.7L620.8,214.9L618.3,207.7L620.5,201.2L629.9,202L630.5,202.9L636.4,198.3L644.4,197.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SA" data-code="SA" d="M597.1,168.5L600.2,168.9L604.2,166.7L605.6,165.3L602.8,162.5L608.9,160.7L616.4,163.4L624.2,168.9L631.8,169.4L632.5,170.8L634.5,170.7L635.6,173.1L639.3,175.9L639.6,178.9L642.8,181.6L644.4,186.1L653.4,186.9L654.6,188.9L652.8,194.4L644.4,197.2L636.4,198.3L630.5,202.9L629.9,202L620.5,201.2L618.8,204.6L613.7,195.9L608.7,190.9L606.9,184.2L604.1,182.5L597.6,172L596.2,172.1L597.1,168.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MA" data-code="MA" d="M494,152.3L496.9,159.3L496.4,160.4L489.9,162.1L489.8,164.2L485.4,166.7L475.9,169.9L475.6,174.7L468.4,175.3L465.3,181.2L461.4,184.2L459,190.3L452.7,190.5L459.9,177.1L464.9,172.1L467.5,171.8L473.4,166.8L472.7,163.4L475.9,157.7L480.8,155.2L483.5,150.7L494,152.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-EG" data-code="EG" d="M602.4,188.9L569.5,188.9L568.6,166.5L569.9,162.3L580.3,164.2L586.1,162.3L588.8,164.1L589.4,163.2L595.2,163.3L597,168.1L594.9,172.7L592.1,171.1L589.8,167.3L599.1,183.5L598.7,185.8L602.4,188.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-LY" data-code="LY" d="M569.5,188.9L569.5,194.4L566.2,194.4L566.2,195.6L544.1,185L539.3,187.5L533.3,184.8L529.9,181.8L528.6,182.3L525.9,177.5L527,176.4L527.4,169.6L526.3,165.8L527.7,165.2L527.6,162.8L531.8,160.1L531.9,158L542.4,160.4L543.6,162.8L553,165.9L555.7,163.9L555.1,161.8L557.9,159.1L563.6,159.3L564.6,160.6L569.2,161.4L569.5,188.9Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ET" data-code="ET" d="M632.7,227.8L624.9,236.1L621.3,236.2L616.3,239.1L613.2,238.2L609.9,240.5L600.4,237.6L596.4,231.7L593.2,228.6L591.5,228.4L594,226.7L595.2,220.5L599.6,215.1L601.2,209.9L604.4,210.5L605.3,208.4L607,209.7L611.2,209.7L615.5,212.6L617.6,215.2L615.7,217.7L616,219.3L618.8,219.6L618.2,220.6L621.3,224.5L632.7,227.8Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-DJ" data-code="DJ" d="M617.6,215.2L620.3,215.6L618.7,217.4L619.9,218.2L618.8,219.6L616,219.3L615.7,217.7L617.6,215.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-UG" data-code="UG" d="M594.2,252.6L582.2,253.7L583,248.3L586.6,243.9L585.5,243.5L585.7,240.3L586.8,239.5L592.8,239.5L594.5,238.2L595.8,240.1L597.3,244.7L594.2,249.7L594.2,252.6Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-RW" data-code="RW" d="M584.5,253.2L585.4,256.4L580.6,257.9L581.4,254.5L584.5,253.2Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-BA" data-code="BA" d="M551.6,131.5L545.7,127.7L543.8,125.5L544.3,124.4L553.8,125.4L554,129L551.6,131.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-MK" data-code="MK" d="M562.2,132.4L563.8,135.2L558.4,136.5L557.2,135.9L557.7,133.2L562.2,132.4Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-RS" data-code="RS" d="M552.3,122.5L556.2,121.9L559.9,125.6L563.1,126.2L562.2,127.8L563.9,130L562.6,132.1L559.9,132.7L560.5,131.4L557.8,129.8L556.3,131.1L553.4,129.1L554.4,127.7L553.1,126.6L553.9,124.3L552.3,122.5Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-ME" data-code="ME" d="M555.7,131.7L554.8,131.4L553.8,133.7L551.2,132L553.4,129.1L556.5,130.8L555.7,131.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-XK" data-code="XK" d="M557.2,133.7L555.7,131.7L557.3,130L560.5,131.4L557.2,133.7Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />
<path class="country-poly" id="cpoly-SS" data-code="SS" d="M585.7,240.3L582.5,237.2L577.7,237.8L569.8,228.3L566.4,226.1L568.2,225.2L569.6,221.5L571.6,221.1L574.3,223.7L580.5,223.9L583.3,221.4L587.1,222.8L590,219.2L589.1,216.7L592.2,216.2L592.2,220.2L593.7,221.3L594.4,225.9L591.5,228.4L594.7,229.9L598,234.7L592.8,239.5L585.7,240.3Z" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)" />

            </g>

            <!-- Global High-Speed Telemetry Backbone Arcs -->
            <g id="backbone-arcs-layer" stroke="url(#cyber-arc-grad)" stroke-width="1.4" fill="none" opacity="0.5" style="pointer-events:none"></g>

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
                <svg class="cyber-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> <span>View Filtered Servers</span>
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
      </div>

      <!-- Grid View -->
      <div class="servers-grid" id="servers-grid-container" style="display:none;"></div>

      <!-- Table View -->
      <div class="table-container" id="servers-table-container">
        <table class="dc-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Country &amp; Flag</th>
              <th>Server Node &amp; Cipher</th>
              <th>Protocol &amp; Port</th>
              <th data-t="server_load">Server Load</th>
              <th data-t="server_latency">Ping</th>
              <th data-t="server_uplink">Bandwidth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="servers-table-body"></tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination-bar" id="pagination-container" style="display:none;">
        <div class="page-info" id="pagination-info">Page 1 of 1</div>
        <div class="page-buttons" id="pagination-buttons"></div>
      </div>

    </div>
  </section>

  <!-- Professional Footer -->
  <footer class="pro-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="/" class="logo" style="margin-bottom:14px;">
            <svg class="logo-mark" viewBox="0 0 100 100" fill="none">
              <path d="${ZVPN_LOGO_PATH}" fill="url(#zvpn-grad-ft)" />
              <defs>
                <linearGradient id="zvpn-grad-ft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#C6FF00" /><stop offset="100%" stop-color="#00E5FF" />
                </linearGradient>
              </defs>
            </svg>
            <span>ZVPN</span>
          </a>
          <p data-t="footer_desc">Enterprise-grade encrypted VPN network. 16,000+ global nodes across 104 countries, zero logs, multi-protocol support. Free & premium plans.</p>
        </div>
        <!-- Navigation -->
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/" data-t="nav_home">Home</a></li>
            <li><a href="/servers" data-t="nav_servers">Server Hub</a></li>
            <li><a href="/#download" data-t="nav_download">Clients</a></li>
            <li><a href="/#pricing" data-t="nav_pricing">VIP Access</a></li>
          </ul>
        </div>
        <!-- Protocols -->
        <div class="footer-col">
          <h4>Protocols</h4>
          <ul>
            <li><a href="/servers?p=openvpn">OpenVPN</a></li>
            <li><a href="/servers?p=vless">VLESS / Reality</a></li>
            <li><a href="/servers?p=shadowsocks">Shadowsocks</a></li>
            <li><a href="/servers?p=vmess">VMess</a></li>
            <li><a href="/servers?p=trojan">Trojan</a></li>
          </ul>
        </div>
        <!-- Contact -->
        <div class="footer-col">
          <h4 data-t="footer_support">Support</h4>
          <div class="footer-contact-box">
            <p data-t="footer_contact_desc">24/7 technical support for all ZVPN users.</p>
            <a href="mailto:itsbaask@gmail.com" class="btn" style="width:100%;justify-content:center;padding:10px;font-size:0.82rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              itsbaask@gmail.com
            </a>
          </div>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p data-t="footer_rights">&copy; 2025 ZVPN. All rights reserved.</p>
        <div class="footer-shields">
          <div class="shield-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Cloudflare Protected
          </div>
          <div class="shield-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            TLS 1.3 Encrypted
          </div>
          <div class="shield-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Zero Logs Policy
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Server Unlock & Download Modal -->
  <div class="modal-backdrop" id="server-unlock-modal">
    <div class="modal-card">
      <button class="modal-close" onclick="closeServerUnlockModal()">&times;</button>

      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px;">
        <span id="modal-flag" style="font-size: 2.4rem; line-height: 1;">🌐</span>
        <div>
          <h3 id="modal-name" style="font-size: 1.25rem; font-weight: 800; color: #fff; margin-bottom: 4px;">Server Node</h3>
          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            <span id="modal-proto" class="badge-proto openvpn">OPENVPN</span>
            <span id="modal-ping" style="font-size: 0.8rem; color: #2ed573; font-weight: 700; font-family: var(--font-mono);">⚡ 14 ms</span>
            <span id="modal-speed" style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">850 Mbps</span>
            <span id="modal-cipher" style="font-size: 0.72rem; color: var(--accent-cyan); font-family: var(--font-mono);">TLS 1.3</span>
          </div>
        </div>
      </div>

      <!-- Option 1: Sponsor Ad -->
      <div style="background: rgba(198, 255, 0, 0.05); border: 1px solid rgba(198, 255, 0, 0.3); border-radius: 14px; padding: 16px; margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 800; font-size: 0.92rem; color: #C6FF00; display: flex; align-items: center; gap: 6px;" data-t="modal_ad_title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Free Unlock via Sponsor Ad
          </span>
          <span style="font-size: 0.7rem; background: #C6FF00; color: #000; font-weight: 800; padding: 2px 8px; border-radius: 999px;">+10 BONUS POINTS</span>
        </div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;" data-t="modal_ad_sub">
          Watch a quick sponsor ad to unlock and download this server configuration and earn +10 bonus points.
        </p>
        <div id="modal-ad-progress-box" style="display: none;">
          <div class="ad-progress-wrap"><div id="modal-ad-progress-bar" class="ad-progress-bar"></div></div>
        </div>
        <button id="modal-btn-ad" onclick="triggerServerUnlock('ad')" class="btn" style="width: 100%; justify-content: center; padding: 12px; font-weight: 800; font-size: 0.88rem; cursor: pointer;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span id="modal-btn-ad-text">Watch Sponsor Ad &amp; Unlock Free</span>
        </button>
      </div>

      <!-- Option 2: Points -->
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 16px; margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; font-size: 0.9rem; color: #fff;" data-t="modal_pts_title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Instant Points Unlock
          </span>
          <span id="modal-user-points" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); font-weight: 700;">Your Balance: 0 pts</span>
        </div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;" data-t="modal_pts_sub">
          Deduct 5 points from your ZVPN account balance to unlock immediately.
        </p>
        <button id="modal-btn-pts" onclick="triggerServerUnlock('points')" class="btn outline" style="width: 100%; justify-content: center; padding: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer;">
          Deduct 5 Points &amp; Unlock Now
        </button>
      </div>

      <!-- Unlocked Config Box -->
      <div id="modal-unlocked-box" style="display: none; margin-top: 14px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: #2ed573; margin-bottom: 8px;" data-t="modal_unlock_success">
          ✓ Configuration Ready &amp; Decrypted:
        </div>
        <div id="modal-code-display" class="code-box"></div>
        <div style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;">
          <button id="btn-copy-uri" onclick="copyModalUri()" class="btn" style="flex: 1 1 180px; padding: 10px; font-size: 0.84rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy Connection Link
          </button>
          <button id="btn-download-file" onclick="downloadModalFile()" class="btn outline" style="flex: 1 1 180px; padding: 10px; font-size: 0.84rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Config File
          </button>
        </div>
      </div>

      <div id="modal-status-msg" style="display: none; padding: 10px; border-radius: 8px; font-size: 0.85rem; text-align: center; margin-top: 12px;"></div>
    </div>
  </div>

  <!-- AdBlock Modal -->
  <div class="modal-backdrop" id="adblock-modal">
    <div class="adblock-card">
      <div style="margin-bottom: 16px;"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff4757" stroke-width="2" style="filter:drop-shadow(0 0 16px rgba(255,71,87,0.4));"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></div>
      <h2 style="font-size: 1.4rem; font-weight: 900; color: #ff4757; margin-bottom: 10px;" data-t="ab_title">
        AdBlocker / Blocking DNS Detected
      </h2>
      <p style="font-size: 0.92rem; color: #F1F3F7; line-height: 1.6; margin-bottom: 20px;" data-t="ab_desc">
        Free high-speed encrypted servers are 100% funded by sponsor ads. To download configuration profiles, please pause your AdBlocker (uBlock, AdGuard, Brave Shields) or whitelist <b>z-vpn.site</b>.
        <br><br>
        لتحميل ملفات وسيرفرات ZVPN المجانية، يرجى تعطيل مانع الإعلانات أو إلغاء حظر DNS الإعلانات لصفحة الموقع.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button onclick="recheckAdBlockAndProceed()" class="btn" style="padding: 12px 24px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Recheck / إعادة الفحص
        </button>
        <button onclick="unlockWithVipPoints()" class="btn outline" style="padding: 12px 24px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Unlock with VIP Points
        </button>
      </div>
    </div>
  </div>

    <!-- Client-Side Logic -->
  <script>
    function renderCyberFlag(code, size) {
      if (!code || code === 'all' || code === 'XX' || code === 'GLOBAL' || code === '🌐') {
        return '<span class="cyber-flag-badge"><svg class="cyber-svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>';
      }
      var c = String(code).toLowerCase();
      var isLg = (size === 'lg');
      return '<img class="cyber-flag-img ' + (isLg ? 'flag-lg' : '') + '" src="https://flagcdn.com/' + (isLg ? 'w80' : 'w40') + '/' + c + '.png" srcset="https://flagcdn.com/' + (isLg ? 'w160' : 'w80') + '/' + c + '.png 2x" width="' + (isLg ? 38 : 20) + '" height="' + (isLg ? 26 : 14) + '" alt="' + code + '" loading="lazy" onerror="this.hidden=true" />';
    }

    var currentLang = 'en';
    var currentPage = 1;
    var currentLimit = 48;
    var currentProtocol = 'all';
    var currentCountry = 'all';
    var currentCategory = 'all';
    var currentSort = 'ping';
    var currentSearch = '';
    var currentViewMode = 'map';
    var searchDebounceTimer = null;
    var activeModalServer = null;
    var activeUnlockedData = null;
    var adTimerInterval = null;
    var currentUser = null;
    var isAdBlockDetected = false;
    var langMenuOpen = false;

    /* ── Copy Protection JS ── */
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; }, { capture: true });
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === 123 || e.key === 'F12') { e.preventDefault(); return false; }
      if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) { e.preventDefault(); return false; }
      if (e.ctrlKey && (e.keyCode === 85 || e.key === 'u' || e.key === 'U')) { e.preventDefault(); return false; }
      if (e.ctrlKey && (e.keyCode === 83 || e.key === 's' || e.key === 'S')) { e.preventDefault(); return false; }
    }, { capture: true });
    document.addEventListener('dragstart', function(e) { e.preventDefault(); return false; });
    document.addEventListener('copy', function(e) {
      var active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.classList.contains('code-box'))) return;
      e.preventDefault();
    });
    setInterval(function() {
      try { console.clear(); console.log("%c[ZVPN ACTIVE SECURITY DEFENSE]", "color:#C6FF00;font-size:22px;font-weight:900;"); } catch (_) {}
    }, 3000);

    /* ── Translations: 7 Languages ── */
    var translations = {
      en: {
        nav_badge: "${formattedServers} NODES",
        nav_home: "Home", nav_servers: "Server Hub (16k+)", nav_download: "Clients",
        nav_pricing: "VIP Access", nav_support: "Support", nav_get_app: "Get App",
        hub_badge: "16,000+ HIGH-SPEED NODES • ZERO LOGS • MULTI-PROTOCOL",
        hub_title: "Global Encrypted <span>Server Infrastructure</span>",
        hub_desc: "Explore, test, and download standalone configurations and direct connection links for OpenVPN, VLESS, Shadowsocks, VMess, and Trojan across 104 countries. 100% free with sponsor unlock or reward points.",
        ab_title: "AdBlocker / Blocking DNS Detected",
        ab_desc: "Free high-speed encrypted servers are 100% funded by sponsor ads. Please disable your AdBlocker or whitelist z-vpn.site.",
        download_btn: "Download Config", connect_btn: "Get Link / Config",
        filter_search_placeholder: "Search by country, code, city, protocol...",
        filter_all_countries: "All Countries (104)",
        filter_sort_ping: "Lowest Ping (Fastest)", filter_sort_speed: "Highest Speed (Mbps)",
        filter_sort_load: "Optimal Server Load", filter_sort_country: "Country Name (A-Z)",
        view_grid: "Grid", view_table: "Table", view_map: "Map",
        server_load: "Server Load", server_latency: "Ping", server_uplink: "Bandwidth", server_online: "Online",
        modal_ad_title: "Free Unlock via Sponsor Ad", modal_pts_title: "Instant Points Unlock",
        modal_ad_sub: "Watch a quick sponsor ad to unlock and earn +10 bonus points.",
        modal_pts_sub: "Deduct 5 points from your ZVPN account balance to unlock immediately.",
        modal_unlock_success: "✓ Configuration Ready & Decrypted:",
        footer_desc: "Enterprise-grade encrypted VPN network. 16,000+ global nodes across 104 countries, zero logs, multi-protocol support.",
        footer_support: "Support", footer_contact_desc: "24/7 technical support for all ZVPN users.",
        footer_rights: "© 2025 ZVPN. All rights reserved.",
        page_info: function(p,t){ return "Page " + p + " of " + t; },
        results_text: function(s,e,t){ return "Showing " + s + "–" + e + " of " + t + " verified servers"; },
        no_servers: "No Matching Servers Found",
        cont_global: "Global Network", cont_americas: "Americas", cont_europe: "Europe",
        cont_asia: "Asia Pacific", cont_arab: "Middle East & Arab",
        proto_all: "All Protocols",
        cat_all: "All Nodes", cat_gaming: "Ultra Low Ping (<40ms)", cat_gigabit: "Gigabit Ports (>400 Mbps)",
        cat_stealth: "Stealth Reality (Anti-DPI)", cat_arab: "Arab & Middle East",
        cat_europe: "Europe Hub", cat_americas: "North America", cat_asia: "Asia Pacific",
        loading: "Loading verified telemetry from edge..."
      },
      ar: {
        nav_badge: "${formattedServers} سيرفر",
        nav_home: "الرئيسية", nav_servers: "منصة السيرفرات (16 ألف+)", nav_download: "التطبيقات",
        nav_pricing: "باقات VIP", nav_support: "الدعم الفني", nav_get_app: "تحميل التطبيق",
        hub_badge: "أكثر من 16,000 سيرفر فائق السرعة • بدون سجلات • متعدد البروتوكولات",
        hub_title: "البنية التحتية <span>للسيرفرات المشفرة عالمياً</span>",
        hub_desc: "استكشف وفلتر وحمل ملفات الإعدادات والروابط المباشرة لبروتوكولات OpenVPN و VLESS و Shadowsocks و VMess و Trojan عبر 104 دولة. مجاناً 100% بمشاهدة إعلان الراعي أو بنقاط المكافآت.",
        ab_title: "تم اكتشاف مانع إعلانات أو DNS حظر",
        ab_desc: "لتحميل ملفات وسيرفرات ZVPN المجانية، يرجى تعطيل مانع الإعلانات أو إلغاء حظر DNS لصفحة الموقع.",
        download_btn: "تحميل التكوين", connect_btn: "جلب الرابط والتكوين",
        filter_search_placeholder: "ابحث بالدولة أو الكود أو البروتوكول...",
        filter_all_countries: "كل دول العالم (104)",
        filter_sort_ping: "أقل زمن استجابة (الأسرع)", filter_sort_speed: "أعلى سرعة (ميغابت)",
        filter_sort_load: "أفضل حمل للسيرفر", filter_sort_country: "اسم الدولة (أ-ي)",
        view_grid: "شبكة", view_table: "جدول", view_map: "خريطة",
        server_load: "حمل السيرفر", server_latency: "الاستجابة", server_uplink: "النطاق الترددي", server_online: "متصل",
        modal_ad_title: "فك مجاني بإعلان الراعي", modal_pts_title: "فك فوري بالنقاط",
        modal_ad_sub: "شاهد إعلان الراعي لفك القفل وكسب +10 نقاط مكافأة.",
        modal_pts_sub: "اخصم 5 نقاط من رصيدك في ZVPN للفك الفوري.",
        modal_unlock_success: "✓ التكوين جاهز ومفكوك:",
        footer_desc: "شبكة VPN مشفرة على مستوى المؤسسات. أكثر من 16,000 عقدة عالمية في 104 دول، بدون سجلات، دعم متعدد البروتوكولات.",
        footer_support: "الدعم الفني", footer_contact_desc: "دعم فني على مدار الساعة لجميع مستخدمي ZVPN.",
        footer_rights: "© 2025 ZVPN. جميع الحقوق محفوظة.",
        page_info: function(p,t){ return "الصفحة " + p + " من " + t; },
        results_text: function(s,e,t){ return "عرض " + s + "–" + e + " من " + t + " سيرفر نشط"; },
        no_servers: "لا توجد سيرفرات مطابقة",
        cont_global: "الشبكة العالمية", cont_americas: "الأمريكتان", cont_europe: "أوروبا",
        cont_asia: "آسيا والمحيط الهادئ", cont_arab: "الشرق الأوسط والعالم العربي",
        proto_all: "جميع البروتوكولات",
        cat_all: "جميع العقد", cat_gaming: "أقل زمن استجابة (<40 مللي)", cat_gigabit: "منافذ جيجابت (>400 ميغابت)",
        cat_stealth: "Stealth Reality (ضد DPI)", cat_arab: "العالم العربي والشرق الأوسط",
        cat_europe: "مركز أوروبا", cat_americas: "أمريكا الشمالية", cat_asia: "آسيا والمحيط الهادئ",
        loading: "جاري تحميل بيانات السيرفرات الحية..."
      },
      fr: {
        nav_badge: "${formattedServers} NŒUDS",
        nav_home: "Accueil", nav_servers: "Hub Serveurs (16k+)", nav_download: "Clients",
        nav_pricing: "Accès VIP", nav_support: "Support", nav_get_app: "Télécharger",
        hub_badge: "16 000+ NŒUDS ULTRA-RAPIDES • ZÉRO LOGS • MULTI-PROTOCOLE",
        hub_title: "Infrastructure <span>Serveur Chiffrée Mondiale</span>",
        hub_desc: "Explorez, testez et téléchargez des configurations standalone et liens de connexion pour OpenVPN, VLESS, Shadowsocks, VMess et Trojan dans 104 pays.",
        ab_title: "Bloqueur de Publicités Détecté",
        ab_desc: "Les serveurs gratuits sont financés à 100% par les annonces sponsors. Veuillez désactiver votre bloqueur ou mettre z-vpn.site en liste blanche.",
        download_btn: "Télécharger Config", connect_btn: "Obtenir Lien / Config",
        filter_search_placeholder: "Rechercher par pays, code, ville, protocole...",
        filter_all_countries: "Tous les pays (104)",
        filter_sort_ping: "Ping le plus bas (Rapide)", filter_sort_speed: "Vitesse la plus élevée",
        filter_sort_load: "Charge serveur optimale", filter_sort_country: "Nom du pays (A-Z)",
        view_grid: "Grille", view_table: "Tableau", view_map: "Carte",
        server_load: "Charge Serveur", server_latency: "Ping", server_uplink: "Bande passante", server_online: "En ligne",
        modal_ad_title: "Déblocage gratuit via annonce", modal_pts_title: "Déblocage instantané par points",
        modal_ad_sub: "Regardez une annonce sponsor pour débloquer et gagner +10 points bonus.",
        modal_pts_sub: "Déduire 5 points de votre solde ZVPN pour débloquer immédiatement.",
        modal_unlock_success: "✓ Configuration prête et déchiffrée :",
        footer_desc: "Réseau VPN chiffré de qualité entreprise. 16 000+ nœuds mondiaux dans 104 pays, zéro log, multi-protocole.",
        footer_support: "Support", footer_contact_desc: "Support technique 24/7 pour tous les utilisateurs ZVPN.",
        footer_rights: "© 2025 ZVPN. Tous droits réservés.",
        page_info: function(p,t){ return "Page " + p + " sur " + t; },
        results_text: function(s,e,t){ return "Affichage " + s + "–" + e + " sur " + t + " serveurs"; },
        no_servers: "Aucun serveur trouvé",
        cont_global: "Réseau Mondial", cont_americas: "Amériques", cont_europe: "Europe",
        cont_asia: "Asie-Pacifique", cont_arab: "Moyen-Orient & Arabe",
        proto_all: "Tous les protocoles",
        cat_all: "Tous les nœuds", cat_gaming: "Ultra faible latence (<40ms)", cat_gigabit: "Ports Gigabit (>400 Mbps)",
        cat_stealth: "Stealth Reality (Anti-DPI)", cat_arab: "Arabe & Moyen-Orient",
        cat_europe: "Hub Europe", cat_americas: "Amérique du Nord", cat_asia: "Asie-Pacifique",
        loading: "Chargement des données serveur..."
      },
      es: {
        nav_badge: "${formattedServers} NODOS",
        nav_home: "Inicio", nav_servers: "Hub de Servidores (16k+)", nav_download: "Clientes",
        nav_pricing: "Acceso VIP", nav_support: "Soporte", nav_get_app: "Descargar App",
        hub_badge: "16,000+ NODOS ULTRA-RÁPIDOS • CERO REGISTROS • MULTI-PROTOCOLO",
        hub_title: "Infraestructura de <span>Servidores Cifrados Global</span>",
        hub_desc: "Explora, prueba y descarga configuraciones independientes y enlaces de conexión para OpenVPN, VLESS, Shadowsocks, VMess y Trojan en 104 países.",
        ab_title: "Bloqueador de Anuncios Detectado",
        ab_desc: "Los servidores gratuitos están financiados al 100% por anuncios patrocinadores. Desactiva tu bloqueador o incluye z-vpn.site en la lista blanca.",
        download_btn: "Descargar Config", connect_btn: "Obtener Enlace / Config",
        filter_search_placeholder: "Buscar por país, código, ciudad, protocolo...",
        filter_all_countries: "Todos los países (104)",
        filter_sort_ping: "Ping más bajo (Más rápido)", filter_sort_speed: "Velocidad más alta (Mbps)",
        filter_sort_load: "Carga óptima del servidor", filter_sort_country: "Nombre del país (A-Z)",
        view_grid: "Cuadrícula", view_table: "Tabla", view_map: "Mapa",
        server_load: "Carga del Servidor", server_latency: "Ping", server_uplink: "Ancho de banda", server_online: "En línea",
        modal_ad_title: "Desbloqueo gratis por anuncio", modal_pts_title: "Desbloqueo instantáneo con puntos",
        modal_ad_sub: "Mira un anuncio patrocinador para desbloquear y ganar +10 puntos.",
        modal_pts_sub: "Deduce 5 puntos de tu saldo ZVPN para desbloquear de inmediato.",
        modal_unlock_success: "✓ Configuración lista y descifrada:",
        footer_desc: "Red VPN cifrada de nivel empresarial. Más de 16,000 nodos globales en 104 países, cero registros, soporte multi-protocolo.",
        footer_support: "Soporte", footer_contact_desc: "Soporte técnico 24/7 para todos los usuarios ZVPN.",
        footer_rights: "© 2025 ZVPN. Todos los derechos reservados.",
        page_info: function(p,t){ return "Página " + p + " de " + t; },
        results_text: function(s,e,t){ return "Mostrando " + s + "–" + e + " de " + t + " servidores"; },
        no_servers: "No se encontraron servidores",
        cont_global: "Red Global", cont_americas: "Américas", cont_europe: "Europa",
        cont_asia: "Asia Pacífico", cont_arab: "Oriente Medio & Árabe",
        proto_all: "Todos los protocolos",
        cat_all: "Todos los nodos", cat_gaming: "Ultra baja latencia (<40ms)", cat_gigabit: "Puertos Gigabit (>400 Mbps)",
        cat_stealth: "Stealth Reality (Anti-DPI)", cat_arab: "Árabe & Oriente Medio",
        cat_europe: "Hub Europa", cat_americas: "América del Norte", cat_asia: "Asia Pacífico",
        loading: "Cargando telemetría de servidores..."
      },
      ru: {
        nav_badge: "${formattedServers} УЗЛОВ",
        nav_home: "Главная", nav_servers: "Хаб Серверов (16k+)", nav_download: "Клиенты",
        nav_pricing: "VIP Доступ", nav_support: "Поддержка", nav_get_app: "Скачать",
        hub_badge: "16 000+ ВЫСОКОСКОРОСТНЫХ УЗЛОВ • НУЛЕВЫЕ ЛОГИ • МУЛЬТИ-ПРОТОКОЛ",
        hub_title: "Глобальная Зашифрованная <span>Серверная Инфраструктура</span>",
        hub_desc: "Исследуйте, тестируйте и скачивайте конфигурации и прямые ссылки для OpenVPN, VLESS, Shadowsocks, VMess и Trojan в 104 странах.",
        ab_title: "Обнаружен Блокировщик Рекламы",
        ab_desc: "Бесплатные серверы финансируются спонсорской рекламой. Пожалуйста, отключите блокировщик или добавьте z-vpn.site в белый список.",
        download_btn: "Скачать Конфиг", connect_btn: "Получить Ссылку / Конфиг",
        filter_search_placeholder: "Поиск по стране, коду, городу, протоколу...",
        filter_all_countries: "Все страны (104)",
        filter_sort_ping: "Минимальный пинг (Быстрый)", filter_sort_speed: "Максимальная скорость",
        filter_sort_load: "Оптимальная нагрузка", filter_sort_country: "Название страны (А-Я)",
        view_grid: "Сетка", view_table: "Таблица", view_map: "Карта",
        server_load: "Нагрузка Сервера", server_latency: "Пинг", server_uplink: "Пропускная способность", server_online: "Онлайн",
        modal_ad_title: "Бесплатная разблокировка через рекламу", modal_pts_title: "Мгновенная разблокировка баллами",
        modal_ad_sub: "Посмотрите спонсорскую рекламу для разблокировки и получения +10 баллов.",
        modal_pts_sub: "Спишите 5 баллов с вашего баланса ZVPN для мгновенной разблокировки.",
        modal_unlock_success: "✓ Конфигурация готова и расшифрована:",
        footer_desc: "Корпоративная зашифрованная VPN-сеть. 16 000+ глобальных узлов в 104 странах, нулевые логи, мульти-протокол.",
        footer_support: "Поддержка", footer_contact_desc: "Круглосуточная техническая поддержка для всех пользователей ZVPN.",
        footer_rights: "© 2025 ZVPN. Все права защищены.",
        page_info: function(p,t){ return "Страница " + p + " из " + t; },
        results_text: function(s,e,t){ return "Показано " + s + "–" + e + " из " + t + " серверов"; },
        no_servers: "Серверы не найдены",
        cont_global: "Глобальная Сеть", cont_americas: "Америки", cont_europe: "Европа",
        cont_asia: "Азиатско-Тихоокеанский", cont_arab: "Ближний Восток & Арабский",
        proto_all: "Все протоколы",
        cat_all: "Все узлы", cat_gaming: "Ультра низкий пинг (<40мс)", cat_gigabit: "Гигабитные порты (>400 Мбит)",
        cat_stealth: "Stealth Reality (Анти-DPI)", cat_arab: "Арабский & Ближний Восток",
        cat_europe: "Хаб Европа", cat_americas: "Северная Америка", cat_asia: "Азиатско-Тихоокеанский",
        loading: "Загрузка телеметрии серверов..."
      },
      tr: {
        nav_badge: "${formattedServers} DÜĞÜM",
        nav_home: "Ana Sayfa", nav_servers: "Sunucu Merkezi (16k+)", nav_download: "İstemciler",
        nav_pricing: "VIP Erişim", nav_support: "Destek", nav_get_app: "Uygulamayı İndir",
        hub_badge: "16.000+ ULTRA HIZLI DÜĞÜM • SIFIR KAYIT • ÇOKLU PROTOKOL",
        hub_title: "Global Şifreli <span>Sunucu Altyapısı</span>",
        hub_desc: "104 ülkede OpenVPN, VLESS, Shadowsocks, VMess ve Trojan için bağımsız yapılandırmaları ve doğrudan bağlantı bağlantılarını keşfedin, test edin ve indirin.",
        ab_title: "Reklam Engelleyici Tespit Edildi",
        ab_desc: "Ücretsiz sunucular %100 sponsor reklamlarla finanse edilmektedir. Lütfen reklam engelleyicinizi devre dışı bırakın veya z-vpn.site'yi beyaz listeye ekleyin.",
        download_btn: "Yapılandırmayı İndir", connect_btn: "Bağlantı / Yapılandırma Al",
        filter_search_placeholder: "Ülke, kod, şehir, protokole göre ara...",
        filter_all_countries: "Tüm Ülkeler (104)",
        filter_sort_ping: "En Düşük Ping (En Hızlı)", filter_sort_speed: "En Yüksek Hız (Mbps)",
        filter_sort_load: "Optimal Sunucu Yükü", filter_sort_country: "Ülke Adı (A-Z)",
        view_grid: "Izgara", view_table: "Tablo", view_map: "Harita",
        server_load: "Sunucu Yükü", server_latency: "Ping", server_uplink: "Bant Genişliği", server_online: "Çevrimiçi",
        modal_ad_title: "Reklam ile Ücretsiz Kilit Açma", modal_pts_title: "Puanlarla Anında Kilit Açma",
        modal_ad_sub: "Sponsor reklamı izleyin, kilit açın ve +10 puan kazanın.",
        modal_pts_sub: "Anında kilit açmak için ZVPN bakiyenizden 5 puan düşün.",
        modal_unlock_success: "✓ Yapılandırma Hazır ve Şifresi Çözüldü:",
        footer_desc: "Kurumsal düzeyde şifreli VPN ağı. 104 ülkede 16.000+ global düğüm, sıfır kayıt, çoklu protokol desteği.",
        footer_support: "Destek", footer_contact_desc: "Tüm ZVPN kullanıcıları için 7/24 teknik destek.",
        footer_rights: "© 2025 ZVPN. Tüm hakları saklıdır.",
        page_info: function(p,t){ return p + " / " + t + " Sayfa"; },
        results_text: function(s,e,t){ return t + " sunucudan " + s + "–" + e + " gösteriliyor"; },
        no_servers: "Eşleşen Sunucu Bulunamadı",
        cont_global: "Küresel Ağ", cont_americas: "Amerikalar", cont_europe: "Avrupa",
        cont_asia: "Asya-Pasifik", cont_arab: "Orta Doğu & Arap",
        proto_all: "Tüm Protokoller",
        cat_all: "Tüm Düğümler", cat_gaming: "Ultra Düşük Ping (<40ms)", cat_gigabit: "Gigabit Portlar (>400 Mbps)",
        cat_stealth: "Stealth Reality (Anti-DPI)", cat_arab: "Arap & Orta Doğu",
        cat_europe: "Avrupa Merkezi", cat_americas: "Kuzey Amerika", cat_asia: "Asya-Pasifik",
        loading: "Sunucu telemetrisi yükleniyor..."
      },
      zh: {
        nav_badge: "${formattedServers} 节点",
        nav_home: "首页", nav_servers: "服务器中心 (16k+)", nav_download: "客户端",
        nav_pricing: "VIP访问", nav_support: "支持", nav_get_app: "下载应用",
        hub_badge: "16,000+ 超高速节点 • 零日志 • 多协议",
        hub_title: "全球加密<span>服务器基础设施</span>",
        hub_desc: "探索、测试和下载104个国家的OpenVPN、VLESS、Shadowsocks、VMess和Trojan的独立配置和直接连接链接。通过赞助广告或奖励积分100%免费。",
        ab_title: "检测到广告拦截器",
        ab_desc: "免费高速加密服务器由赞助广告100%资助。请暂停您的广告拦截器或将z-vpn.site列入白名单。",
        download_btn: "下载配置", connect_btn: "获取链接/配置",
        filter_search_placeholder: "按国家、代码、城市、协议搜索...",
        filter_all_countries: "所有国家 (104)",
        filter_sort_ping: "最低延迟 (最快)", filter_sort_speed: "最高速度 (Mbps)",
        filter_sort_load: "最优服务器负载", filter_sort_country: "国家名称 (A-Z)",
        view_grid: "网格", view_table: "表格", view_map: "地图",
        server_load: "服务器负载", server_latency: "延迟", server_uplink: "带宽", server_online: "在线",
        modal_ad_title: "通过赞助广告免费解锁", modal_pts_title: "即时积分解锁",
        modal_ad_sub: "观看赞助广告以解锁并赚取+10奖励积分。",
        modal_pts_sub: "从您的ZVPN账户余额中扣除5积分立即解锁。",
        modal_unlock_success: "✓ 配置已准备好并解密：",
        footer_desc: "企业级加密VPN网络。104个国家16,000+全球节点，零日志，多协议支持。",
        footer_support: "支持", footer_contact_desc: "为所有ZVPN用户提供全天候技术支持。",
        footer_rights: "© 2025 ZVPN. 版权所有。",
        page_info: function(p,t){ return "第 " + p + " 页 / 共 " + t + " 页"; },
        results_text: function(s,e,t){ return "显示 " + s + "–" + e + "，共 " + t + " 台服务器"; },
        no_servers: "未找到匹配的服务器",
        cont_global: "全球网络", cont_americas: "美洲", cont_europe: "欧洲",
        cont_asia: "亚太地区", cont_arab: "中东和阿拉伯",
        proto_all: "所有协议",
        cat_all: "所有节点", cat_gaming: "超低延迟 (<40ms)", cat_gigabit: "千兆端口 (>400 Mbps)",
        cat_stealth: "隐身Reality (反DPI)", cat_arab: "阿拉伯和中东",
        cat_europe: "欧洲中心", cat_americas: "北美", cat_asia: "亚太地区",
        loading: "正在加载服务器遥测数据..."
      }
    };

    var langFlags = { en:'gb', ar:'sa', fr:'fr', es:'es', ru:'ru', tr:'tr', zh:'cn' };
    var langLabels = { en:'EN', ar:'AR', fr:'FR', es:'ES', ru:'RU', tr:'TR', zh:'ZH' };

    /* ── Country coordinates (lat→y, lon→x in SVG 1000×500) ── */
    var COUNTRY_COORDS = {
      US: [120,180], CA: [100,110], MX: [150,210], BR: [210,320], AR: [200,400],
      GB: [460,95], DE: [480,95], FR: [462,105], NL: [468,88], SE: [490,75],
      NO: [480,70], FI: [505,68], PL: [495,90], ES: [450,118], IT: [480,120],
      CH: [472,105], AT: [486,103], BE: [466,90], PT: [445,120], GR: [498,128],
      TR: [535,120], UA: [515,95], RO: [505,100], HU: [492,97], CZ: [483,93],
      RU: [570,80], KZ: [590,105], AZ: [545,115], GE: [540,112],
      SA: [555,170], AE: [570,170], QA: [568,170], KW: [553,160], BH: [565,168],
      IQ: [545,155], JO: [535,152], LB: [532,145], IL: [530,148], EG: [515,160],
      MA: [445,148], DZ: [462,148], TN: [472,142], LY: [488,152], SD: [520,182],
      NG: [476,205], GH: [464,210], KE: [528,222], ZA: [495,350], ET: [535,205],
      IN: [628,175], PK: [604,152], BD: [657,170], LK: [640,210], NP: [645,160],
      CN: [700,130], JP: [780,130], KR: [768,138], TW: [755,165], HK: [742,170],
      TH: [706,195], VN: [720,200], PH: [755,210], MY: [720,220], SG: [722,230],
      ID: [735,240], AU: [800,340], NZ: [870,380],
      BR2: [215,330], CL: [195,370], PE: [185,310], CO: [175,278],
      UZ: [598,120], TM: [585,125], AF: [600,145], IR: [570,145],
      KH: [718,210], MM: [698,190], LA: [712,200]
    };

    /* Approximate SVG coordinate from lat/lon */
    function coordToSvg(lat, lon) {
      var x = ((lon + 180) / 360) * 1000;
      var y = ((90 - lat) / 180) * 500;
      return [x, y];
    }

    /* ── Language Dropdown ── */
    function toggleLangMenu() {
      langMenuOpen = !langMenuOpen;
      var menu = document.getElementById('lang-menu');
      var btn = document.getElementById('lang-dropdown');
      if (menu) menu.classList.toggle('open', langMenuOpen);
      if (btn) btn.classList.toggle('open', langMenuOpen);
    }

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.lang-dropdown-wrap')) {
        langMenuOpen = false;
        var menu = document.getElementById('lang-menu');
        var btn = document.getElementById('lang-dropdown');
        if (menu) menu.classList.remove('open');
        if (btn) btn.classList.remove('open');
      }
    });

    function setLanguage(lang) {
      if (!translations[lang]) return;
      currentLang = lang;
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

      var flagEl = document.getElementById('lang-current-flag');
      var labelEl = document.getElementById('lang-current-label');
      if (flagEl) flagEl.textContent = langFlags[lang] || '';
      if (labelEl) labelEl.textContent = langLabels[lang] || lang.toUpperCase();

      document.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      try { localStorage.setItem('zvpn_lang', lang); } catch (_) {}
      langMenuOpen = false;
      var menu = document.getElementById('lang-menu');
      var btn = document.getElementById('lang-dropdown');
      if (menu) menu.classList.remove('open');
      if (btn) btn.classList.remove('open');

      var t = translations[lang];
      document.querySelectorAll('[data-t]').forEach(function(el) {
        var k = el.getAttribute('data-t');
        if (typeof t[k] === 'string') {
          if (k === 'hub_title') el.innerHTML = t[k];
          else el.textContent = t[k];
        }
      });
      document.querySelectorAll('[data-t-placeholder]').forEach(function(el) {
        var k = el.getAttribute('data-t-placeholder');
        if (t[k]) el.placeholder = t[k];
      });

      fetchServerCatalog();
    }

    function T(key) {
      var t = translations[currentLang] || translations['en'];
      return t[key] || (translations['en'][key]) || key;
    }

    /* ── View Mode ── */
    function setViewMode(mode) {
      currentViewMode = mode;
      var btnGrid = document.getElementById('btn-view-grid');
      var btnTable = document.getElementById('btn-view-table');
      var btnMap = document.getElementById('btn-view-map');
      if (btnGrid) btnGrid.classList.toggle('active', mode === 'grid');
      if (btnTable) btnTable.classList.toggle('active', mode === 'table');
      if (btnMap) btnMap.classList.toggle('active', mode === 'map');

      var mapCont = document.getElementById('servers-map-container');
      var gridCont = document.getElementById('servers-grid-container');
      var tableCont = document.getElementById('servers-table-container');

      if (mapCont) mapCont.style.display = (mode === 'map') ? 'block' : 'none';
      if (gridCont) gridCont.style.display = (mode === 'grid' || mode === 'map') ? 'grid' : 'none';
      if (tableCont) tableCont.style.display = (mode === 'table') ? 'block' : 'none';

      renderCurrentServers();
    }

    /* ── Fetch Server Catalog ── */
    async function fetchServerCatalog() {
      var myReq = (window.__catalogReq = (window.__catalogReq || 0) + 1);
      var spinner = document.getElementById('loading-spinner-small');
      var resultsText = document.getElementById('results-count-text');
      if (spinner) spinner.style.display = 'inline-block';
      if (resultsText) resultsText.textContent = T('loading');

      var url = '/api/v1/servers/catalog?page=' + currentPage +
        '&limit=' + currentLimit +
        '&protocol=' + encodeURIComponent(currentProtocol) +
        '&country=' + encodeURIComponent(currentCountry) +
        '&category=' + encodeURIComponent(currentCategory) +
        '&sort=' + encodeURIComponent(currentSort) +
        '&search=' + encodeURIComponent(currentSearch);

      try {
        var res = await fetch(url);
        var data = await res.json();
        if (myReq !== window.__catalogReq) return;
        if (spinner) spinner.style.display = 'none';
        if (data.success) {
          window.lastCatalogData = data;
          renderCatalogData(data);
        } else {
          showEmptyGrid(data.error || 'Failed to load servers.');
        }
      } catch (err) {
        if (spinner) spinner.style.display = 'none';
        showEmptyGrid('Network error. Please refresh.');
      }
    }

    function renderCatalogData(data) {
      if (data.summary && data.summary.countries) {
        populateCountryDropdown(data.summary.countries);
      }
      if (data.summary && data.summary.protocols) {
        var p = data.summary.protocols;
        if (p.all !== undefined) document.getElementById('count-all').textContent = Number(p.all).toLocaleString();
        if (p.openvpn !== undefined) document.getElementById('count-openvpn').textContent = Number(p.openvpn).toLocaleString();
        if (p.vless !== undefined) document.getElementById('count-vless').textContent = Number(p.vless).toLocaleString();
        if (p.shadowsocks !== undefined) document.getElementById('count-shadowsocks').textContent = Number(p.shadowsocks).toLocaleString();
        if (p.vmess !== undefined) document.getElementById('count-vmess').textContent = Number(p.vmess).toLocaleString();
        if (p.trojan !== undefined) document.getElementById('count-trojan').textContent = Number(p.trojan).toLocaleString();
      }

      var resultsText = document.getElementById('results-count-text');
      if (resultsText) {
        var start = (data.page - 1) * data.limit + 1;
        var end = Math.min(data.page * data.limit, data.filtered_total);
        if (data.filtered_total === 0) {
          resultsText.textContent = T('no_servers');
        } else {
          var rfn = (translations[currentLang] || translations['en']).results_text;
          resultsText.textContent = typeof rfn === 'function'
            ? rfn(start, end, Number(data.filtered_total).toLocaleString())
            : (start + '–' + end + ' / ' + Number(data.filtered_total).toLocaleString());
        }
      }

      window.currentRenderedServers = data.servers || [];
      if (data.summary) {
        window.fullCatalogSummary = data.summary;
      }
      renderCurrentServers();
      renderPagination(data.total_pages, data.page);
    }

    function populateCountryDropdown(countries) {
      var select = document.getElementById('country-select');
      if (!select || select.options.length > 5) return;
      var currentVal = select.value || 'all';
      var allLabel = T('filter_all_countries');
      var html = '<option value="all">' + allLabel + '</option>';
      countries.forEach(function(c) {
        var displayName = currentLang === 'ar' ? (c.ar_name || c.name) : c.name;
        html += '<option value="' + c.code + '">' + (c.flag || '🌐') + ' ' + displayName + ' (' + c.count + ')</option>';
      });
      select.innerHTML = html;
      select.value = currentVal;
    }

    function renderCurrentServers() {
      var servers = window.currentRenderedServers || [];
      if (currentViewMode === 'table') {
        renderTableView(servers);
      } else {
        renderGridView(servers);
      }
      renderMapView(servers);
    }

    function renderGridView(servers) {
      var grid = document.getElementById('servers-grid-container');
      if (!grid) return;
      if (!servers || servers.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);"><div style="margin-bottom:14px;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="1.8" style="opacity:0.7;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h3>' + T('no_servers') + '</h3></div>';
        return;
      }
      grid.innerHTML = servers.map(function(s) {
        var pingColor = s.latency_ms <= 40 ? 'green' : '';
        var proto = (s.protocol || 'openvpn').toLowerCase();
        var protoClass = 'openvpn';
        if (proto.includes('vless')) protoClass = 'vless';
        else if (proto.includes('shadow') || proto === 'ss') protoClass = 'shadowsocks';
        else if (proto.includes('vmess')) protoClass = 'vmess';
        else if (proto.includes('trojan')) protoClass = 'trojan';
        var actionBtnLabel = protoClass === 'openvpn' ? T('download_btn') : T('connect_btn');
        var actionBtnClass = protoClass === 'vless' ? 'action-btn purple' : 'action-btn';
        var loadHeavy = s.load_percent > 70 ? 'heavy' : '';
        var cName = currentLang === 'ar' ? (s.ar_country || s.country) : s.country;

        return '<div class="server-card">' +
          '<div>' +
            '<div class="card-top">' +
              '<div class="country-identity">' +
                '<span class="country-flag">' + renderCyberFlag(s.country_code) + '</span>' +
                '<div><div class="country-name">' + cName + '</div>' +
                '<div class="server-id-sub" title="' + s.name + '">' + (s.name || s.id) + '</div></div>' +
              '</div>' +
              '<span class="badge-proto ' + protoClass + '">' + proto.toUpperCase() + '</span>' +
            '</div>' +
            '<div class="load-box">' +
              '<div class="load-header"><span>' + T('server_load') + '</span><span style="font-family:var(--font-mono);">' + s.load_percent + '%</span></div>' +
              '<div class="load-bar-wrap"><div class="load-bar-fill ' + loadHeavy + '" style="width:' + s.load_percent + '%;"></div></div>' +
            '</div>' +
            '<div class="card-metrics">' +
              '<div class="metric-col"><span class="metric-label">' + T('server_latency') + '</span>' +
                '<span class="metric-val ' + pingColor + '"><svg class="cyber-svg-icon" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> ' + s.latency_ms + ' ms</span></div>' +
              '<div class="metric-col" style="margin-left:auto;"><span class="metric-label">' + T('server_uplink') + '</span>' +
                '<span class="metric-val">' + s.speed_mbps + ' Mbps</span></div>' +
            '</div>' +
            '<div class="feature-tags"><span class="ftag lime">' + s.cipher + '</span><span class="ftag cyan">:' + s.port + '</span><span class="ftag">P2P</span></div>' +
          '</div>' +
          '<button class="' + actionBtnClass + '" data-id="' + s.id + '" onclick="openServerUnlockModalById(this.dataset.id)">' + actionBtnLabel + '</button>' +
        '</div>';
      }).join('');
    }

    function renderTableView(servers) {
      var tbody = document.getElementById('servers-table-body');
      if (!tbody) return;
      tbody.innerHTML = servers.map(function(s) {
        var proto = (s.protocol || 'openvpn').toLowerCase();
        var protoClass = 'openvpn';
        if (proto.includes('vless')) protoClass = 'vless';
        else if (proto.includes('shadow') || proto === 'ss') protoClass = 'shadowsocks';
        else if (proto.includes('vmess')) protoClass = 'vmess';
        else if (proto.includes('trojan')) protoClass = 'trojan';
        var cName = currentLang === 'ar' ? (s.ar_country || s.country) : s.country;
        return '<tr>' +
          '<td><span style="color:#2ed573;">● ' + T('server_online') + '</span></td>' +
          '<td><div style="display:flex;align-items:center;gap:8px;">' + renderCyberFlag(s.country_code) + ' <b>' + cName + '</b></div></td>' +
          '<td><div style="font-weight:700;">' + (s.name || s.id) + '</div><div style="font-size:0.74rem;color:var(--text-muted);">' + s.cipher + '</div></td>' +
          '<td><span class="badge-proto ' + protoClass + '">' + proto.toUpperCase() + '</span> :' + s.port + '</td>' +
          '<td><span style="font-family:var(--font-mono);">' + s.load_percent + '%</span></td>' +
          '<td><span style="color:#2ed573;font-family:var(--font-mono);font-weight:800;display:inline-flex;align-items:center;gap:4px;"><svg class="cyber-svg-icon" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> ' + s.latency_ms + ' ms</span></td>' +
          '<td><span style="font-family:var(--font-mono);font-weight:700;">' + s.speed_mbps + ' Mbps</span></td>' +
          '<td><button class="btn" style="padding:6px 14px;font-size:0.8rem;" data-id="' + s.id + '" onclick="openServerUnlockModalById(this.dataset.id)">' +
            (protoClass === 'openvpn' ? T('download_btn') : T('connect_btn')) + '</button></td>' +
        '</tr>';
      }).join('');
    }

    /* ── Map View ── */
    var PROTO_COLORS = {
      openvpn: '#00E5FF', vless: '#9D4EDD', shadowsocks: '#00F5D4',
      ss: '#00F5D4', vmess: '#3A86FF', trojan: '#FF006E', mixed: '#C6FF00'
    };

            /* ── Inhabited Country Anchors (Natural Earth 168 Countries) ── */
    var COUNTRY_MAP_ANCHORS = {"FJ":[994.4,299.5],"TZ":[597.1,266.8],"EH":[464.9,183.4],"CA":[216.9,82.4],"US":[229.2,140.2],"KZ":[690.8,113.7],"UZ":[677.8,134.2],"PG":[899.7,265.8],"ID":[783,252.7],"AR":[321.7,343.1],"CL":[299.1,356],"CD":[565.2,255.2],"SO":[625.5,240.1],"KE":[605.3,248.5],"SD":[581.3,204.6],"TD":[551.8,207.9],"HT":[299.4,196.5],"DO":[303.7,196.9],"RU":[624.1,88.2],"BS":[285.7,176.7],"FK":[336.8,393.4],"NO":[526.9,79.6],"GL":[390.7,43.6],"TF":[692,387],"TL":[849.6,274.5],"ZA":[565.7,332.5],"LS":[578.5,331.9],"MX":[215.9,183.6],"UY":[344.5,341.6],"BR":[362.3,283.6],"BO":[320.6,296.3],"PE":[297.5,286],"CO":[296.7,240.6],"PA":[276.8,225.8],"CR":[266.5,222],"NI":[263.7,214.8],"HN":[258.6,208.9],"SV":[253.1,212],"GT":[248.6,208.4],"BZ":[253.6,202.2],"VE":[320.6,230],"GY":[336.3,235.8],"SR":[344.7,238.5],"FR":[507.1,120.3],"EC":[282.8,253.5],"JM":[285.2,199.6],"CU":[283.4,190.7],"ZW":[583.1,302.5],"BW":[567.2,311.4],"NA":[547.5,307.2],"SN":[458.9,207.9],"ML":[494.3,198.1],"MR":[472.9,195.6],"BJ":[506.5,221.3],"NE":[526.4,201.5],"NG":[520.8,223.8],"CM":[534.6,237.3],"TG":[502.9,225.5],"GH":[497.1,228.6],"CI":[484.5,229.2],"GN":[472.2,220.5],"GW":[459.7,216.2],"LR":[473.7,232.1],"SL":[467.3,226.1],"BF":[496.2,214.8],"CF":[558.1,230.6],"CG":[544.2,249.6],"GA":[532.9,251.2],"GQ":[525,243.5],"ZM":[573.3,290.7],"MW":[593.4,287.2],"MZ":[605.1,288.7],"SZ":[587.4,323.7],"AO":[550,283.8],"BI":[583.1,259.3],"IL":[596.8,164.1],"LB":[600,155.2],"MG":[629.7,301.7],"GM":[458.3,212.1],"TN":[525,156.4],"DZ":[507.8,173.9],"JO":[601,164.4],"AE":[651.5,184.8],"QA":[642.1,179.9],"KW":[631.4,168.3],"IQ":[620.2,158.1],"OM":[659.3,188.6],"KH":[790.3,214.9],"TH":[780.8,207.1],"LA":[784.8,196],"MM":[766.1,190.1],"VN":[792.7,189.7],"KP":[851.2,139.2],"KR":[855.9,148.9],"MN":[789.3,122.2],"IN":[720.4,187],"BD":[749.1,182.7],"BT":[750.1,173.5],"NP":[732.3,171.4],"PK":[690.4,168.5],"AF":[684.7,155.1],"TJ":[701.6,143.9],"KG":[707,134.3],"TM":[663,139.3],"IR":[652.6,160.6],"SY":[606.3,152.8],"AM":[624.4,137.6],"SE":[552.8,67.1],"BY":[578.9,100.5],"UA":[589.3,111.9],"PL":[554.1,105.6],"AT":[539.3,118],"HU":[554,119.2],"MD":[579.1,118.2],"RO":[569.4,123],"LT":[566.9,96.9],"LV":[570.7,91.5],"EE":[571.8,86.9],"DE":[526.9,108.4],"BG":[569.9,131.9],"GR":[560.3,140.3],"TR":[595.8,140.7],"AL":[555.9,137.1],"HR":[545.5,122.8],"CH":[520.7,120.2],"BE":[513.3,108.9],"NL":[515.6,104.4],"PT":[477,140],"ES":[490.4,138.6],"IE":[478.3,102.6],"NC":[958.6,308.5],"SB":[942.1,272.3],"NZ":[980,360.4],"AU":[872.4,317],"LK":[724.2,228.9],"CN":[795.4,159.7],"TW":[835.8,184.3],"IT":[530.8,125.7],"DK":[525,94.5],"GB":[494.1,98.9],"IS":[448.1,70.1],"AZ":[631.1,137.8],"GE":[621.5,133.7],"PH":[840.2,218.9],"MY":[816.2,243],"BN":[818.2,237.6],"SI":[541.4,122.1],"FI":[575.8,74.3],"SK":[552.9,114.6],"CZ":[542.7,111.4],"ER":[606.3,206.1],"JP":[884.6,149.6],"PY":[332.9,310.2],"YE":[627.4,207.4],"SA":[624.2,183.9],"MA":[480,162.1],"EG":[581.8,177.3],"LY":[550,176],"ET":[608.6,227.7],"DJ":[618.1,216.7],"UG":[591.5,244.5],"RW":[583.6,255.3],"BA":[550.2,127.5],"MK":[559.9,134.6],"RS":[557.7,127.3],"ME":[553.2,131.1],"XK":[557.9,131.7],"SS":[584.4,229.9]};

    /* ── Masterpiece Map Engine v3: choropleth map, filters, pan/zoom, no dependencies ── */
    var selectedMapCountryCode = null;
    var BASE_VB = { x: 0, y: 8, w: 1000, h: 405 };
    var mapVB = { x: 0, y: 8, w: 1000, h: 405 };
    var MAP_MAX_ZOOM = 8, mapAnimId = null, mapDragged = false, mapReticleAnchor = null;
    var mapIdx = {}, mapSig = '', mapBarSig = '';

    function mapEsc(v) {
      return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    function mapSvg() { return document.getElementById('world-vector-svg'); }
    function mapScale() { return BASE_VB.w / mapVB.w; }
    function nodeK() { return 1 / Math.pow(mapScale(), 0.65); }

    function clampVB(v) {
      var w = Math.max(BASE_VB.w / MAP_MAX_ZOOM, Math.min(BASE_VB.w, v.w));
      var h = w * BASE_VB.h / BASE_VB.w;
      var x = Math.max(BASE_VB.x, Math.min(BASE_VB.x + BASE_VB.w - w, v.x));
      var y = Math.max(BASE_VB.y, Math.min(BASE_VB.y + BASE_VB.h - h, v.y));
      return { x: x, y: y, w: w, h: h };
    }

    function applyVB(v) {
      mapVB = clampVB(v);
      var svg = mapSvg();
      if (!svg) return;
      svg.setAttribute('viewBox', mapVB.x + ' ' + mapVB.y + ' ' + mapVB.w + ' ' + mapVB.h);
      svg.classList.toggle('zoomed', mapScale() > 1.01);
      updateNodeScale();
    }

    function animateVB(target, ms) {
      var t = clampVB(target);
      if (mapAnimId) cancelAnimationFrame(mapAnimId);
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ms = 0;
      var f = { x: mapVB.x, y: mapVB.y, w: mapVB.w }, t0 = performance.now();
      function step(now) {
        var p = ms ? Math.min(1, (now - t0) / ms) : 1;
        var e = 1 - Math.pow(1 - p, 3);
        applyVB({ x: f.x + (t.x - f.x) * e, y: f.y + (t.y - f.y) * e, w: f.w + (t.w - f.w) * e });
        mapAnimId = p < 1 ? requestAnimationFrame(step) : null;
      }
      mapAnimId = requestAnimationFrame(step);
    }

    function zoomAt(factor, cx, cy) {
      var nw = Math.max(BASE_VB.w / MAP_MAX_ZOOM, Math.min(BASE_VB.w, mapVB.w / factor));
      var k = nw / mapVB.w;
      applyVB({ x: cx - (cx - mapVB.x) * k, y: cy - (cy - mapVB.y) * k, w: nw });
    }

    /* Keep dots and reticle at a readable size at every zoom level */
    function updateNodeScale() {
      var k = nodeK();
      document.querySelectorAll('#map-dots-layer [data-r]').forEach(function(el) {
        el.setAttribute('r', (parseFloat(el.getAttribute('data-r')) * k).toFixed(2));
      });
      var g = document.getElementById('reticle-g');
      if (g && mapReticleAnchor) {
        g.setAttribute('transform', 'translate(' + mapReticleAnchor[0] + ',' + mapReticleAnchor[1] + ') scale(' + k + ')');
      }
    }

    /* ── Data helpers (no random numbers: real values or a dash) ── */
    function mapCountries(servers) {
      var summary = window.fullCatalogSummary;
      var list = (summary && summary.countries) ? summary.countries : [];
      if (list.length) return list;
      var group = {};
      (servers || []).forEach(function(s) {
        var code = (s.country_code || '').toUpperCase();
        if (!code) return;
        if (!group[code]) group[code] = { code: code, name: s.country, flag: s.flag || '🌐', count: 0 };
        group[code].count++;
      });
      return Object.keys(group).map(function(k) { return group[k]; });
    }

    function countryPing(c) {
      var v = c.ping != null ? c.ping : (c.avg_ping != null ? c.avg_ping : c.min_latency);
      if (v == null) {
        (window.currentRenderedServers || []).forEach(function(s) {
          if ((s.country_code || '').toUpperCase() === c.code && typeof s.latency_ms === 'number' && (v == null || s.latency_ms < v)) v = s.latency_ms;
        });
      }
      return v;
    }
    function pingText(v) { return v == null ? '—' : '⚡ ' + Math.round(v) + ' ms'; }
    function mapName(c) { return currentLang === 'ar' ? (c.ar_name || c.name || c.code) : (c.name || c.code); }

    /* ── Choropleth + micro-state markers + toolbar + legend ── */
    var HEAT_STEPS = [1, 25, 100, 300, 1000];
    var PROTO_HEAT = { all: '#00E5FF', openvpn: '#00E5FF', vless: '#B06CFF', shadowsocks: '#00F5D4', vmess: '#3A86FF', trojan: '#FF4D94' };
    var MAP_PROTOS = [['all', null], ['openvpn', 'OpenVPN'], ['vless', 'VLESS'], ['shadowsocks', 'Shadowsocks'], ['vmess', 'VMess'], ['trojan', 'Trojan']];
    var MAP_REGIONS = [
      ['all', 'cont_global', { x: 0, y: 8, w: 1000 }],
      ['americas', 'cont_americas', { x: 110, y: 60, w: 380 }],
      ['europe', 'cont_europe', { x: 450, y: 82, w: 170 }],
      ['asia', 'cont_asia', { x: 600, y: 85, w: 330 }],
      ['arab', 'cont_arab', { x: 520, y: 140, w: 190 }]
    ];
    var mapToolbarSig = '';

    function heatBin(n) { var b = 0; for (var i = 0; i < HEAT_STEPS.length; i++) { if (n >= HEAT_STEPS[i]) b = i + 1; } return b; }
    function curProto() { return (typeof currentProtocol === 'string') ? currentProtocol : 'all'; }
    function curRegion() { return (typeof currentCategory === 'string') ? currentCategory : 'all'; }
    function mapT(k, fb) { return (typeof T === 'function') ? T(k) : fb; }
    /* If the API sends c.protocols = {vless: 12, ...} the map recolors per protocol; otherwise it uses c.count */
    function countryValue(c) {
      var p = curProto();
      if (p !== 'all' && c.protocols && c.protocols[p] != null) return Number(c.protocols[p]) || 0;
      return Number(c.count) || 0;
    }

    function renderMapLegend(totalText) {
      var lg = document.querySelector('#servers-map-container .map-legend');
      if (!lg) return;
      var ar = currentLang === 'ar';
      var sw = '';
      HEAT_STEPS.forEach(function(n, i) {
        sw += '<span class="legend-step"><span class="legend-swatch h' + (i + 1) + '"></span><span>' + Number(n).toLocaleString() + '+</span></span>';
      });
      lg.innerHTML = '<div class="map-legend-items"><span class="legend-lbl">' + (ar ? 'عدد السيرفرات' : 'Nodes per country') + '</span>' + sw +
        '<span class="legend-step"><span class="legend-ring"></span><span>' + (ar ? 'دولة صغيرة' : 'Small country') + '</span></span></div>' +
        '<div class="map-telemetry-badge"><span id="map-telemetry-nodes-count-badge">' + totalText + ' NODES</span></div>';
    }

    function renderMapToolbar() {
      var tb = document.getElementById('map-toolbar');
      if (!tb) return;
      if (!tb.firstChild) {
        tb.innerHTML = '<div class="mt-group" id="mt-protos" role="group" aria-label="Protocol"></div>' +
          '<div class="mt-group" id="mt-regions" role="group" aria-label="Region"></div>' +
          '<div class="mt-tools"><div class="mt-search"><input id="mt-search" type="search" autocomplete="off"><div id="mt-results" class="mt-results"></div></div>' +
          '<button class="mt-btn" id="mt-full" type="button" title="Fullscreen" onclick="mapToggleFullscreen()">⛶</button></div>';
        var inp = document.getElementById('mt-search');
        inp.addEventListener('input', function() { mapSearch(inp.value); });
        inp.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') { var f = document.querySelector('#mt-results .mt-res'); if (f) { selectMapCountry(f.dataset.code); inp.value = ''; mapSearch(''); } }
          if (e.key === 'Escape') { inp.value = ''; mapSearch(''); }
        });
        inp.addEventListener('blur', function() { setTimeout(function() { mapSearch(''); }, 150); });
      }
      var sig = currentLang + '|' + curProto() + '|' + curRegion();
      if (sig === mapToolbarSig) return;
      mapToolbarSig = sig;
      var ar = currentLang === 'ar';
      document.getElementById('mt-search').placeholder = ar ? 'ابحث عن دولة...' : 'Find a country...';
      var ph = '';
      MAP_PROTOS.forEach(function(p) {
        var label = p[1] || mapT('proto_all', 'All protocols');
        ph += '<button type="button" class="mt-chip' + (curProto() === p[0] ? ' active' : '') + '" onclick="mapPickProtocol(this.dataset.v)" data-v="' + p[0] + '">' + mapEsc(label) + '</button>';
      });
      document.getElementById('mt-protos').innerHTML = ph;
      var rh = '';
      MAP_REGIONS.forEach(function(r) {
        rh += '<button type="button" class="mt-chip' + (curRegion() === r[0] ? ' active' : '') + '" onclick="mapPickRegion(this.dataset.v)" data-v="' + r[0] + '">' + mapEsc(mapT(r[1], r[0])) + '</button>';
      });
      document.getElementById('mt-regions').innerHTML = rh;
    }

    function mapSearch(q) {
      var box = document.getElementById('mt-results');
      if (!box) return;
      q = String(q || '').trim().toLowerCase();
      if (!q) { box.classList.remove('open'); box.innerHTML = ''; return; }
      var hits = Object.keys(mapIdx).map(function(k) { return mapIdx[k]; }).filter(function(c) {
        return countryValue(c) > 0 && (String(c.name || '').toLowerCase().indexOf(q) > -1 || String(c.ar_name || '').indexOf(q) > -1 || String(c.code).toLowerCase() === q);
      }).sort(function(a, b) { return countryValue(b) - countryValue(a); }).slice(0, 8);
      box.innerHTML = hits.length ? hits.map(function(c) {
        return '<div class="mt-res" data-code="' + mapEsc(c.code) + '" onmousedown="selectMapCountry(this.dataset.code)">' +
          '<span>' + mapEsc(c.flag || '🌐') + '</span><span class="mt-res-name">' + mapEsc(mapName(c)) + '</span>' +
          '<span class="gcb-num">' + countryValue(c).toLocaleString() + '</span></div>';
      }).join('') : '<div class="mt-res mt-none">—</div>';
      box.classList.add('open');
    }

    window.mapPickProtocol = function(p) { if (typeof setProtocolFilter === 'function') setProtocolFilter(p); renderMapToolbar(); };
    window.mapPickRegion = function(key) {
      var r = MAP_REGIONS.filter(function(x) { return x[0] === key; })[0];
      if (typeof setCategoryFilter === 'function') setCategoryFilter(key);
      renderMapToolbar();
      if (r) { var w = r[2].w; animateVB({ x: r[2].x, y: r[2].y, w: w }, 700); }
    };
    window.mapToggleFullscreen = function() {
      var box = document.getElementById('servers-map-container');
      if (!box) return;
      if (document.fullscreenElement) { document.exitFullscreen(); } else if (box.requestFullscreen) { box.requestFullscreen(); }
    };

    function renderMapView(servers) {
      var layer = document.getElementById('map-dots-layer');
      if (!layer) return;
      var countries = mapCountries(servers);
      mapIdx = {};
      countries.forEach(function(c) { mapIdx[c.code] = c; });

      var total = countries.reduce(function(a, c) { return a + countryValue(c); }, 0);
      var totalText = Number(countries.length ? total : 16086).toLocaleString();
      var b1 = document.getElementById('map-telemetry-nodes-count');
      if (b1) b1.textContent = totalText;
      renderMapLegend(totalText);
      renderQuickCountryBar(countries.slice(0, 24));
      renderMapToolbar();

      var box = document.getElementById('servers-map-container');
      if (box) box.style.setProperty('--heat', PROTO_HEAT[curProto()] || PROTO_HEAT.all);

      var sig = (selectedMapCountryCode || '-') + '|' + currentLang + '|' + curProto() + '|' +
        countries.map(function(c) { return c.code + ':' + countryValue(c); }).join(',');
      if (sig === mapSig) return;

      document.querySelectorAll('.country-poly').forEach(function(p) {
        var code = p.dataset.code, c = mapIdx[code], v = c ? countryValue(c) : 0, on = v > 0;
        p.classList.remove('h0', 'h1', 'h2', 'h3', 'h4', 'h5');
        p.classList.toggle('has-servers', on);
        p.classList.toggle('no-servers', !on);
        p.classList.toggle('active-country', code === selectedMapCountryCode);
        if (on) {
          p.classList.add('h' + heatBin(v));
          p.setAttribute('tabindex', '0'); p.setAttribute('role', 'button');
          p.setAttribute('aria-label', mapName(c) + ', ' + v + ' nodes');
        } else {
          p.removeAttribute('tabindex'); p.removeAttribute('role'); p.removeAttribute('aria-label');
        }
      });

      /* Only countries too small to click get a marker (ring), everyone else is clicked directly */
      var measurable = true, html = '';
      countries.forEach(function(c) {
        var a = COUNTRY_MAP_ANCHORS[c.code];
        if (!a || countryValue(c) <= 0) return;
        var poly = document.getElementById('cpoly-' + c.code), tiny = !poly;
        if (poly) {
          var bb = null;
          try { bb = poly.getBBox(); } catch (_) {}
          if (!bb || (bb.width === 0 && bb.height === 0)) measurable = false;
          else tiny = bb.width < 5 && bb.height < 5;
        }
        if (!tiny) return;
        var code = mapEsc(c.code), sel = selectedMapCountryCode === c.code;
        html += '<g class="map-node-group micro' + (sel ? ' active-node' : '') + '" data-code="' + code + '" tabindex="0" role="button" ' +
          'aria-label="' + mapEsc(mapName(c)) + '" onmouseenter="showMapTooltip(this, event)" onmouseleave="hideMapTooltip()" onclick="selectMapCountry(this.dataset.code)">' +
          '<circle class="micro-hit" cx="' + a[0] + '" cy="' + a[1] + '" r="10" data-r="10" />' +
          '<circle class="map-node-core" cx="' + a[0] + '" cy="' + a[1] + '" r="4" data-r="4" />' +
          '</g>';
      });
      mapSig = measurable ? sig : '';
      layer.innerHTML = html;
      var arcLayer = document.getElementById('backbone-arcs-layer');
      if (arcLayer) arcLayer.innerHTML = '';
      updateNodeScale();
    }

    function renderQuickCountryBar(countries) {
      var bar = document.getElementById('globe-country-bar');
      if (!bar) return;
      var sig = currentLang + '|' + countries.map(function(c) { return c.code + ':' + c.count; }).join(',');
      if (sig !== mapBarSig) {
        mapBarSig = sig;
        var keep = bar.scrollLeft;
        var allLabel = currentLang === 'ar' ? 'جميع السيرفرات' : 'All Nodes';
        var html = '<button class="gcb-item" data-code="" onclick="resetCountryFilter()">' +
          '<span>🌐</span><span>' + allLabel + '</span></button>';
        countries.forEach(function(c) {
          html += '<button class="gcb-item" data-code="' + mapEsc(c.code) + '" onclick="selectMapCountry(this.dataset.code)">' +
            renderCyberFlag(c.code) + '<span>' + mapEsc(mapName(c)) + '</span>' +
            '<span class="gcb-num">' + Number(c.count).toLocaleString() + '</span></button>';
        });
        bar.innerHTML = html;
        bar.scrollLeft = keep;
      }
      bar.querySelectorAll('.gcb-item').forEach(function(b) {
        b.classList.toggle('active', (b.dataset.code || null) === selectedMapCountryCode);
      });
    }

    /* ── Tooltip: measured and clamped so it is never cut off ── */
    window.showMapTooltip = function(el, e) {
      var tt = document.getElementById('map-tooltip'), vp = document.getElementById('cyber-map-viewport');
      var c = mapIdx[el.dataset.code];
      if (!tt || !vp || !c || countryValue(c) <= 0) { hideMapTooltip(); return; }
      document.getElementById('tt-flag').innerHTML = renderCyberFlag(c.code, 'lg');
      document.getElementById('tt-country').textContent = mapName(c);
      document.getElementById('tt-code').textContent = c.code;
      document.getElementById('tt-count').textContent = countryValue(c).toLocaleString() + ' Nodes';
      document.getElementById('tt-ping').textContent = pingText(countryPing(c));
      var protoEl = document.getElementById('tt-proto');
      if (protoEl && protoEl.parentNode) {
        var names = c.protocols ? Object.keys(c.protocols).filter(function(k) { return c.protocols[k] > 0; }) : [];
        protoEl.parentNode.style.display = names.length ? 'flex' : 'none';
        protoEl.textContent = names.map(function(k) { return k.toUpperCase(); }).join(' • ');
      }
      tt.style.visibility = 'hidden';
      tt.classList.add('visible');
      var vr = vp.getBoundingClientRect(), w = tt.offsetWidth, h = tt.offsetHeight, x, y;
      if (e && e.clientX != null) { x = e.clientX - vr.left; y = e.clientY - vr.top; }
      else { var r = el.getBoundingClientRect(); x = r.left + r.width / 2 - vr.left; y = r.top + r.height / 2 - vr.top; }
      var left = Math.max(8, Math.min(vr.width - w - 8, x - w / 2));
      var top = y - h - 16;
      if (top < 8) top = y + 22;
      top = Math.max(8, Math.min(vr.height - h - 8, top));
      tt.style.left = left + 'px';
      tt.style.top = top + 'px';
      tt.style.visibility = 'visible';
    };
    window.hideMapTooltip = function() {
      var tt = document.getElementById('map-tooltip');
      if (tt) { tt.classList.remove('visible'); tt.style.visibility = ''; }
    };

    /* ── Selection effects ── */
    function triggerShockwave(x, y) {
      var layer = document.getElementById('shockwave-burst-layer');
      if (!layer) return;
      var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('class', 'click-shockwave');
      c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 5 * nodeK());
      layer.appendChild(c);
      setTimeout(function() { if (c.parentNode) c.parentNode.removeChild(c); }, 950);
    }

    function renderTacticalReticleAndBeams(code, x, y) {
      var rl = document.getElementById('tactical-reticle-layer'), bl = document.getElementById('dynamic-laser-beams-layer');
      if (!rl || !bl) return;
      mapReticleAnchor = [x, y];
      rl.innerHTML = '<g id="reticle-g">' +
        '<circle class="tactical-reticle-outer" r="16" fill="none" stroke="#C6FF00" stroke-width="1.5" stroke-dasharray="6,4" />' +
        '<circle class="tactical-reticle-inner" r="11" fill="none" stroke="#00E5FF" stroke-width="1.2" stroke-dasharray="4,3" />' +
        '<circle r="3" fill="#C6FF00" />' +
        '<text x="26" y="4" fill="#C6FF00" font-size="9" font-family="monospace" font-weight="900">LOCKED</text></g>';

      /* Beams go to the busiest hubs (not a hard-coded list) */
      var hubs = Object.keys(mapIdx).filter(function(k) { return k !== code && COUNTRY_MAP_ANCHORS[k]; })
        .sort(function(a, b) { return mapIdx[b].count - mapIdx[a].count; }).slice(0, 4);
      var html = '';
      hubs.forEach(function(k) {
        var p = COUNTRY_MAP_ANCHORS[k], d = Math.hypot(x - p[0], y - p[1]);
        html += '<path class="cyber-laser-beam" d="M' + x + ',' + y + ' Q' + (x + p[0]) / 2 + ',' +
          (Math.min(y, p[1]) - d * 0.25) + ' ' + p[0] + ',' + p[1] + '" />';
      });
      bl.innerHTML = html;
      updateNodeScale();
    }

    function flyToCountry(code) {
      var a = COUNTRY_MAP_ANCHORS[code], poly = document.getElementById('cpoly-' + code);
      if (!a) return;
      var bb = null;
      try { bb = poly ? poly.getBBox() : null; } catch (_) {}
      var s, cx = a[0], cy = a[1];
      if (!bb || bb.width > 350 || bb.width < 1) {
        s = bb && bb.width > 350 ? 2.2 : 5; /* huge or tiny shapes: centre on the anchor */
      } else {
        s = Math.min(MAP_MAX_ZOOM, 0.6 * BASE_VB.w / Math.max(bb.width, 24), 0.6 * BASE_VB.h / Math.max(bb.height, 16));
        s = Math.max(1.6, s);
        cx = bb.x + bb.width / 2; cy = bb.y + bb.height / 2;
      }
      var w = BASE_VB.w / s, h = BASE_VB.h / s;
      animateVB({ x: cx - w / 2, y: cy - h / 2, w: w }, 700);
    }

    window.selectMapCountry = function(code) {
      var c = mapIdx[code];
      if (!c) return;
      selectedMapCountryCode = code;
      var a = COUNTRY_MAP_ANCHORS[code];
      if (a) { triggerShockwave(a[0], a[1]); renderTacticalReticleAndBeams(code, a[0], a[1]); flyToCountry(code); }

      var drawer = document.getElementById('map-tactical-drawer');
      document.getElementById('mtd-flag').innerHTML = renderCyberFlag(c.code, 'lg');
      document.getElementById('mtd-title').textContent = mapName(c) + ' (' + code + ')';
      document.getElementById('mtd-count').textContent = Number(c.count || 1).toLocaleString() + ' Nodes';
      document.getElementById('mtd-ping').textContent = pingText(countryPing(c));
      if (drawer) drawer.style.display = 'flex';

      renderMapView(window.currentRenderedServers || []);
      setCountryFilter(code);
      var sel = document.getElementById('country-select');
      if (sel) sel.value = code;

      var active = document.querySelector('#globe-country-bar .gcb-item.active');
      if (active && active.scrollIntoView) active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      setTimeout(function() {
        var first = document.querySelector('.server-card');
        if (first) first.classList.add('fastest-in-region');
      }, 600);
    };

    window.scrollToServers = function() {
      var grid = document.getElementById('servers-grid-container');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.resetCountryFilter = function() {
      selectedMapCountryCode = null; mapReticleAnchor = null;
      var drawer = document.getElementById('map-tactical-drawer');
      if (drawer) drawer.style.display = 'none';
      ['tactical-reticle-layer', 'dynamic-laser-beams-layer'].forEach(function(id) {
        var l = document.getElementById(id); if (l) l.innerHTML = '';
      });
      animateVB({ x: BASE_VB.x, y: BASE_VB.y, w: BASE_VB.w }, 600);
      renderMapView(window.currentRenderedServers || []);
      setCountryFilter('all');
      var sel = document.getElementById('country-select');
      if (sel) sel.value = 'all';
    };

    window.zoomMap = function(dir) {
      zoomAt(dir > 0 ? 1.5 : 1 / 1.5, mapVB.x + mapVB.w / 2, mapVB.y + mapVB.h / 2);
    };
    window.resetMapZoom = function() { animateVB({ x: BASE_VB.x, y: BASE_VB.y, w: BASE_VB.w }, 500); };

    /* ── Drag to pan, pinch / Ctrl+wheel to zoom ── */
    (function initMapInteractions() {
      var svg = mapSvg();
      if (!svg || svg.getAttribute('data-v2')) return;
      svg.setAttribute('data-v2', '1');
      var ptrs = {}, pinch = 0, sx = 0, sy = 0;

      function toSvg(cx, cy) {
        var r = svg.getBoundingClientRect();
        return { x: mapVB.x + (cx - r.left) / r.width * mapVB.w, y: mapVB.y + (cy - r.top) / r.height * mapVB.h };
      }
      function pinchInfo() {
        var k = Object.keys(ptrs);
        if (k.length < 2) return null;
        var a = ptrs[k[0]], b = ptrs[k[1]];
        return { d: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      }

      svg.addEventListener('pointerdown', function(e) {
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
        mapDragged = false; sx = e.clientX; sy = e.clientY;
        var p = pinchInfo(); pinch = p ? p.d : 0;
      });
      svg.addEventListener('pointermove', function(e) {
        var prev = ptrs[e.pointerId];
        if (!prev) return;
        if (Object.keys(ptrs).length >= 2) {
          ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
          var p = pinchInfo();
          if (p && pinch > 0) { var pt = toSvg(p.x, p.y); zoomAt(p.d / pinch, pt.x, pt.y); }
          if (p) pinch = p.d;
          mapDragged = true; return;
        }
        if (!mapDragged && Math.hypot(e.clientX - sx, e.clientY - sy) < 5) return;
        if (mapScale() <= 1.01) return;
        mapDragged = true;
        if (!svg.hasPointerCapture(e.pointerId)) svg.setPointerCapture(e.pointerId);
        var r = svg.getBoundingClientRect(), k = mapVB.w / r.width;
        applyVB({ x: mapVB.x - (e.clientX - prev.x) * k, y: mapVB.y - (e.clientY - prev.y) * k, w: mapVB.w });
        ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
        hideMapTooltip();
      });
      function up(e) { delete ptrs[e.pointerId]; pinch = 0; }
      svg.addEventListener('pointerup', up);
      svg.addEventListener('pointercancel', up);
      svg.addEventListener('click', function(e) {
        if (mapDragged) { e.stopPropagation(); e.preventDefault(); mapDragged = false; }
      }, true);
      /* Ctrl/Cmd + wheel zooms; a plain wheel keeps scrolling the page */
      svg.addEventListener('wheel', function(e) {
        if (!(e.ctrlKey || e.metaKey)) return;
        e.preventDefault();
        var pt = toSvg(e.clientX, e.clientY);
        zoomAt(e.deltaY < 0 ? 1.25 : 0.8, pt.x, pt.y);
      }, { passive: false });
    })();


    (function initMapA11y() {
      var svg = mapSvg();
      if (!svg || svg.getAttribute('data-a11y')) return;
      svg.setAttribute('data-a11y', '1');
      svg.addEventListener('keydown', function(e) {
        var t = e.target;
        if (t && t.dataset && t.dataset.code && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); selectMapCountry(t.dataset.code); }
      });
      svg.addEventListener('focusin', function(e) { var t = e.target; if (t && t.dataset && t.dataset.code) showMapTooltip(t, null); });
      svg.addEventListener('focusout', hideMapTooltip);
    })();
    /* ── Pagination (v2) ── */
    function pgRange(page, total) {
      var narrow = window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
      var span = narrow ? 1 : 2, out = [];
      var start = Math.max(1, page - span), end = Math.min(total, page + span);
      if (start > 1) { out.push(1); if (start > 2) out.push('gap'); }
      for (var i = start; i <= end; i++) out.push(i);
      if (end < total) { if (end < total - 1) out.push('gap'); out.push(total); }
      return out;
    }

    function renderPagination(totalPages, page) {
      var container = document.getElementById('pagination-container');
      var info = document.getElementById('pagination-info');
      var btnBox = document.getElementById('pagination-buttons');
      if (!container || !info || !btnBox) return;
      totalPages = Number(totalPages) || 1;
      page = Number(page) || 1;
      if (totalPages <= 1) { container.style.display = 'none'; return; }
      container.style.display = 'flex';

      var pfn = (translations[currentLang] || translations['en']).page_info;
      info.textContent = typeof pfn === 'function' ? pfn(page, totalPages) : ('Page ' + page + ' of ' + totalPages);

      var rtl = document.documentElement.dir === 'rtl';
      var html = '<button type="button" class="pg-btn pg-nav" data-page="' + (page - 1) + '" aria-label="Previous page"' +
        (page <= 1 ? ' disabled' : '') + '>' + (rtl ? '›' : '‹') + '</button>';
      pgRange(page, totalPages).forEach(function(x) {
        if (x === 'gap') { html += '<span class="pg-gap">…</span>'; return; }
        html += '<button type="button" class="pg-btn' + (x === page ? ' active' : '') + '" data-page="' + x + '"' +
          (x === page ? ' aria-current="page"' : '') + '>' + x + '</button>';
      });
      html += '<button type="button" class="pg-btn pg-nav" data-page="' + (page + 1) + '" aria-label="Next page"' +
        (page >= totalPages ? ' disabled' : '') + '>' + (rtl ? '‹' : '›') + '</button>';
      btnBox.innerHTML = html;

      if (!btnBox.getAttribute('data-bound')) {
        btnBox.setAttribute('data-bound', '1');
        btnBox.addEventListener('click', function(e) {
          var b = e.target.closest ? e.target.closest('.pg-btn') : null;
          if (!b || b.disabled) return;
          goToPage(b.getAttribute('data-page'));
        });
      }
    }

    function goToPage(p) {
      p = parseInt(p, 10);
      var last = (window.lastCatalogData && window.lastCatalogData.total_pages) || 1;
      if (!p || p < 1 || p > last || p === currentPage) return;
      currentPage = p;
      fetchServerCatalog();
      var target = document.getElementById(currentViewMode === 'table' ? 'servers-table-container' : 'servers-grid-container');
      if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setProtocolFilter(proto) {
      currentProtocol = proto; currentPage = 1;
      document.querySelectorAll('.proto-tab').forEach(function(b) { b.classList.remove('active'); });
      var tab = document.getElementById('ptab-' + proto);
      if (tab) tab.classList.add('active');
      fetchServerCatalog();
    }
    function setCategoryFilter(cat) {
      currentCategory = cat; currentPage = 1;
      document.querySelectorAll('.cat-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + cat + "'"));
      });
      document.querySelectorAll('.continent-pill').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + cat + "'"));
      });
      fetchServerCatalog();
    }
    function setCountryFilter(countryCode) {
      currentCountry = countryCode; currentPage = 1;
      var sel = document.getElementById('country-select');
      if (sel) sel.value = countryCode;
      fetchServerCatalog();
    }
    function setSortFilter(sort) { currentSort = sort; currentPage = 1; fetchServerCatalog(); }
    function setLimitFilter(limit) { currentLimit = parseInt(limit); currentPage = 1; fetchServerCatalog(); }
    function handleSearchDebounced(val) {
      currentSearch = val.trim(); currentPage = 1;
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(function() { fetchServerCatalog(); }, 300);
    }
    function showEmptyGrid(msg) {
      var grid = document.getElementById('servers-grid-container');
      if (grid) grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:50px;">' + msg + '</p>';
    }

    /* ── AdBlock Detection ── */
    async function detectAdBlocker() {
      var bait = document.createElement('div');
      bait.className = 'ads-banner pub_300x250 pub_728x90 text-ad text_ad ad-placement sponsor-slot';
      bait.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:1px;height:1px;';
      document.body.appendChild(bait);
      var baitBlocked = (bait.offsetParent === null || bait.offsetHeight === 0 || bait.offsetLeft === 0 || window.getComputedStyle(bait).display === 'none');
      try { document.body.removeChild(bait); } catch(_) {}
      isAdBlockDetected = baitBlocked;
      return isAdBlockDetected;
    }

    /* ── Modal Logic ── */
    function openServerUnlockModalById(id) {
      var s = (window.currentRenderedServers || []).find(function(x) { return x.id === id; });
      if (!s) return;
      openServerUnlockModal(s);
    }

    function openServerUnlockModal(s) {
      activeModalServer = s; activeUnlockedData = null;
      document.getElementById('modal-flag').innerHTML = renderCyberFlag(s.country_code, 'lg');
      var cName = currentLang === 'ar' ? (s.ar_country || s.country) : s.country;
      document.getElementById('modal-name').textContent = cName + ' – ' + (s.name || s.id);
      document.getElementById('modal-proto').textContent = (s.protocol || 'openvpn').toUpperCase();
      document.getElementById('modal-proto').className = 'badge-proto ' + (s.protocol || 'openvpn');
      document.getElementById('modal-ping').innerHTML = '<svg class="cyber-svg-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> ' + s.latency_ms + ' ms';
      document.getElementById('modal-speed').textContent = s.speed_mbps + ' Mbps';
      document.getElementById('modal-cipher').textContent = s.cipher || 'TLS 1.3';

      var userPts = currentUser ? (currentUser.total_points || 0) : 0;
      var ptsEl = document.getElementById('modal-user-points');
      if (ptsEl) ptsEl.textContent = (currentLang === 'ar' ? 'رصيدك: ' : 'Your Balance: ') + userPts + ' pts';

      var statusMsg = document.getElementById('modal-status-msg');
      if (statusMsg) { statusMsg.style.display = 'none'; statusMsg.textContent = ''; }
      var unlockedBox = document.getElementById('modal-unlocked-box');
      if (unlockedBox) unlockedBox.style.display = 'none';
      var progressBox = document.getElementById('modal-ad-progress-box');
      if (progressBox) progressBox.style.display = 'none';

      var btnAd = document.getElementById('modal-btn-ad');
      var btnPts = document.getElementById('modal-btn-pts');
      if (btnAd) { btnAd.disabled = false; document.getElementById('modal-btn-ad-text').textContent = T('download_btn') === T('connect_btn') ? 'Watch Sponsor Ad & Unlock Free' : 'Watch Sponsor Ad & Unlock Free'; }
      if (btnPts) { btnPts.disabled = false; }

      var modal = document.getElementById('server-unlock-modal');
      if (modal) modal.classList.add('open');
    }

    function closeServerUnlockModal() {
      if (adTimerInterval) { clearInterval(adTimerInterval); adTimerInterval = null; }
      var modal = document.getElementById('server-unlock-modal');
      if (modal) modal.classList.remove('open');
      activeModalServer = null; activeUnlockedData = null;
    }

    function showAdBlockWarning() {
      closeServerUnlockModal();
      var m = document.getElementById('adblock-modal');
      if (m) m.classList.add('open');
    }

    function closeAdBlockWarning() {
      var m = document.getElementById('adblock-modal');
      if (m) m.classList.remove('open');
    }

    async function recheckAdBlockAndProceed() {
      var isBlocked = await detectAdBlocker();
      if (isBlocked) {
        alert('⚠️ AdBlocker or blocking DNS is still active! Please disable it completely to continue.');
      } else {
        closeAdBlockWarning();
        if (activeModalServer) openServerUnlockModal(activeModalServer);
      }
    }

    function unlockWithVipPoints() {
      closeAdBlockWarning();
      if (activeModalServer) { openServerUnlockModal(activeModalServer); triggerServerUnlock('points'); }
    }

    async function triggerServerUnlock(method) {
      if (!activeModalServer) return;
      var statusMsg = document.getElementById('modal-status-msg');
      var btnAd = document.getElementById('modal-btn-ad');
      var btnPts = document.getElementById('modal-btn-pts');

      if (method === 'points') {
        var curPts = currentUser ? (currentUser.total_points || 0) : 0;
        if (curPts < 5) {
          if (statusMsg) {
            statusMsg.style.display = 'block';
            statusMsg.style.background = 'rgba(255, 71, 87, 0.15)';
            statusMsg.style.color = '#ff4757';
            statusMsg.innerHTML = currentLang === 'ar'
              ? '⚠️ رصيدك غير كافٍ (تحتاج 5 نقاط). اضغط على <b>مشاهدة إعلان الراعي</b> لفك القفل مجاناً وربح +10 نقاط!'
              : '⚠️ Insufficient points balance (requires 5 pts). Click <b>Watch Sponsor Ad</b> to unlock free & earn +10 bonus points!';
          }
          return;
        }
        await executeUnlockServer('points');
        return;
      }

      if (method === 'ad') {
        var blocked = await detectAdBlocker();
        if (blocked) { showAdBlockWarning(); return; }

        if (btnAd) btnAd.disabled = true;
        if (btnPts) btnPts.disabled = true;

        var progressBox = document.getElementById('modal-ad-progress-box');
        var progressBar = document.getElementById('modal-ad-progress-bar');
        if (progressBox) progressBox.style.display = 'block';
        if (progressBar) progressBar.style.width = '0%';

        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.background = 'rgba(198, 255, 0, 0.1)';
          statusMsg.style.color = '#C6FF00';
          statusMsg.style.border = '1px solid rgba(198, 255, 0, 0.3)';
        }

        try { window.open('https://exe.io/Ft7gILD', '_blank', 'noopener'); } catch (_) {}

        var totalSeconds = 8, seconds = totalSeconds;

        var renderCountdown = function() {
          var pct = Math.round(((totalSeconds - seconds) / totalSeconds) * 100);
          if (progressBar) progressBar.style.width = pct + '%';
          if (statusMsg) {
            statusMsg.innerHTML = currentLang === 'ar'
              ? '🎬 <b>جاري عرض رابط الراعي (exe.io)...</b> يرجى الانتظار <span style="font-size:1.15rem;color:#fff;font-weight:800;">(' + seconds + ' ثوانٍ)</span> لفك القفل مجاناً.'
              : '🎬 <b>Viewing Sponsor Link (exe.io)...</b> Please wait <span style="font-size:1.15rem;color:#fff;font-weight:800;">(' + seconds + 's)</span> to unlock free.';
          }
          var btnText = document.getElementById('modal-btn-ad-text');
          if (btnText) btnText.textContent = 'Verifying Sponsor Link (' + seconds + 's)...';
        };
        renderCountdown();

        adTimerInterval = setInterval(async function() {
          seconds--;
          if (seconds > 0) {
            renderCountdown();
          } else {
            clearInterval(adTimerInterval); adTimerInterval = null;
            if (progressBar) progressBar.style.width = '100%';
            if (statusMsg) {
              statusMsg.style.background = 'rgba(0, 229, 255, 0.15)';
              statusMsg.style.color = '#00e5ff';
              statusMsg.innerHTML = '✓ <b>Ad verified!</b> Decrypting server configuration...';
            }
            await executeUnlockServer('ad');
          }
        }, 1000);
      }
    }

    async function executeUnlockServer(method) {
      var statusMsg = document.getElementById('modal-status-msg');
      var accId = currentUser ? (currentUser.account_key || ('user_' + currentUser.uid)) : 'dev_guest';
      try {
        var res = await fetch('/api/v1/servers/download-config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ server_id: activeModalServer.id, unlock_method: method, account_id: accId })
        });
        var data = await res.json();
        if (!res.ok || !data.success) {
          if (statusMsg) { statusMsg.style.background='rgba(255,71,87,0.15)'; statusMsg.style.color='#ff4757'; statusMsg.textContent = data.error || 'Failed to unlock server.'; }
          return;
        }
        activeUnlockedData = data;
        if (currentUser) { currentUser.total_points = data.remaining_points; localStorage.setItem('zvpn_web_user', JSON.stringify(currentUser)); }
        var ptsEl = document.getElementById('modal-user-points');
        if (ptsEl) ptsEl.textContent = (currentLang === 'ar' ? 'رصيدك: ' : 'Your Balance: ') + (data.remaining_points || 0) + ' pts';

        if (statusMsg) {
          statusMsg.style.background = 'rgba(46,213,115,0.15)'; statusMsg.style.color = '#2ed573';
          statusMsg.innerHTML = currentLang === 'ar'
            ? '✓ <b>تم فك قفل السيرفر بنجاح!</b> رصيدك الآن: ' + (data.remaining_points || 0) + ' نقطة.'
            : '✓ <b>Config unlocked successfully!</b> Balance: ' + (data.remaining_points || 0) + ' pts.';
        }

        var unlockedBox = document.getElementById('modal-unlocked-box');
        var codeDisplay = document.getElementById('modal-code-display');
        var btnCopy = document.getElementById('btn-copy-uri');
        var proto = (data.protocol || '').toLowerCase();
        var isOvpn = proto === 'openvpn' || proto === 'wireguard';

        if (isOvpn) {
          downloadModalFile();
          if (btnCopy) btnCopy.style.display = 'none';
          if (codeDisplay) codeDisplay.textContent = (data.config_data || '').slice(0, 300) + '...';
        } else {
          if (btnCopy) btnCopy.style.display = 'inline-flex';
          var uriText = data.raw_uri || data.config_data || '';
          if (codeDisplay) codeDisplay.textContent = uriText;
        }
        if (unlockedBox) unlockedBox.style.display = 'block';
      } catch (err) {
        if (statusMsg) { statusMsg.style.background='rgba(255,71,87,0.15)'; statusMsg.style.color='#ff4757'; statusMsg.textContent = 'Error: ' + err.message; }
      }
    }

    function downloadModalFile() {
      if (!activeUnlockedData) return;
      var payload = activeUnlockedData.config_data || activeUnlockedData.raw_uri || '';
      var blob = new Blob([payload], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = activeUnlockedData.filename || 'zvpn-config.txt';
      document.body.appendChild(a); a.click();
      setTimeout(function() { try { document.body.removeChild(a); } catch(_) {} URL.revokeObjectURL(url); }, 200);
    }

    function copyModalUri() {
      if (!activeUnlockedData) return;
      var text = activeUnlockedData.raw_uri || activeUnlockedData.config_data || '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        var ta = document.createElement('textarea'); ta.value = text;
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      }
      var btn = document.getElementById('btn-copy-uri');
      if (btn) {
        var old = btn.innerHTML;
        btn.textContent = currentLang === 'ar' ? '✓ تم النسخ!' : '✓ Copied!';
        setTimeout(function() { btn.innerHTML = old; }, 2000);
      }
    }

    /* ── Cursor Animation ── */
    (function initCursor() {
      var trail = document.getElementById('zvpn-cursor-trail');
      if (!trail || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)) return;
      var tx = 0, ty = 0, cx = 0, cy = 0;
      document.addEventListener('pointermove', function(e) { tx = e.clientX; ty = e.clientY; trail.style.opacity = '1'; });
      (function animate() {
        cx += (tx - cx) * 0.14; cy += (ty - cy) * 0.14;
        trail.style.transform = 'translate(' + (cx - 17) + 'px,' + (cy - 17) + 'px)';
        requestAnimationFrame(animate);
      })();
    })();

    /* ── Init ── */
    function initPage() {
      try {
        var savedUser = localStorage.getItem('zvpn_web_user');
        if (savedUser) currentUser = JSON.parse(savedUser);
      } catch (_) {}
      try {
        var savedLang = localStorage.getItem('zvpn_lang');
        if (savedLang && translations[savedLang]) setLanguage(savedLang);
      } catch (_) {}

      /* Default view is map */
      setViewMode('map');
            detectAdBlocker();
      fetchServerCatalog();
    }

    window.addEventListener('DOMContentLoaded', initPage);
  <\/script>
</body>
</html>`;
}
