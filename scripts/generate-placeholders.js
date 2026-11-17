import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');
const projectsDir = path.join(imagesDir, 'projects');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

function createSvgTemplate(title, subtitle, badge, accentColor, innerContent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050814"/>
      <stop offset="50%" stop-color="#090E24"/>
      <stop offset="100%" stop-color="#0D1536"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#bgGrad)"/>
  <rect width="1200" height="675" fill="url(#grid)"/>
  
  <!-- Subtle ambient glow -->
  <circle cx="950" cy="150" r="250" fill="${accentColor}" opacity="0.12" filter="url(#glow)"/>
  <circle cx="200" cy="550" r="200" fill="#38BDF8" opacity="0.08" filter="url(#glow)"/>

  <!-- Main Glass Window Container -->
  <g transform="translate(60, 45)">
    <rect width="1080" height="585" rx="16" fill="#0F172A" fill-opacity="0.7" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 16 C 0 7.16 7.16 0 16 0 L 1064 0 C 1072.84 0 1080 7.16 1080 16 L 1080 48 L 0 48 Z" fill="#131E47" fill-opacity="0.8"/>
    <circle cx="24" cy="24" r="6" fill="#EF4444" opacity="0.85"/>
    <circle cx="44" cy="24" r="6" fill="#F59E0B" opacity="0.85"/>
    <circle cx="64" cy="24" r="6" fill="#10B981" opacity="0.85"/>
    
    <!-- Window Title -->
    <text x="540" y="30" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="13" text-anchor="middle" font-weight="500">
      ${title} — System Preview
    </text>

    <!-- Top Badge -->
    <rect x="910" y="14" width="150" height="22" rx="11" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
    <text x="985" y="29" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="600">
      ${badge}
    </text>

    <!-- Inner Content Area -->
    <g transform="translate(32, 70)">
      ${innerContent}
    </g>
  </g>
</svg>`;
}

// 1. WMS KIA 1
const wmsKia1 = createSvgTemplate(
  'WMS • PT. Kokoh Inti Arebama',
  'Warehouse Inventory Tracking',
  'Tugas Akhir / TA',
  '#2563EB',
  `
  <!-- Header Stats -->
  <g>
    <rect x="0" y="0" width="310" height="90" rx="12" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Total Active SKU</text>
    <text x="24" y="68" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700">4,892 Units</text>
    <text x="230" y="66" fill="#10B981" font-family="'Inter', sans-serif" font-size="12" font-weight="600">+14.2%</text>
  </g>
  <g transform="translate(330, 0)">
    <rect x="0" y="0" width="310" height="90" rx="12" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Inbound Today (PT KIA)</text>
    <text x="24" y="68" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700">32 Pallets</text>
    <text x="230" y="66" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Verified</text>
  </g>
  <g transform="translate(660, 0)">
    <rect x="0" y="0" width="350" height="90" rx="12" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Dispatched Outbound</text>
    <text x="24" y="68" fill="#F59E0B" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700">118 Orders</text>
    <text x="260" y="66" fill="#F59E0B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">On Route</text>
  </g>

  <!-- Main Chart & Table Simulation -->
  <g transform="translate(0, 115)">
    <rect x="0" y="0" width="640" height="340" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="24" y="36" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600">Real-time Stock Inflow & Outflow</text>
    <text x="24" y="56" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Collaborative inventory audit for PT. Kokoh Inti Arebama distribution hub</text>
    
    <!-- Graph Lines -->
    <path d="M 40 280 L 120 220 L 200 240 L 280 160 L 360 190 L 440 120 L 520 140 L 600 90" fill="none" stroke="#2563EB" stroke-width="3"/>
    <path d="M 40 280 L 120 220 L 200 240 L 280 160 L 360 190 L 440 120 L 520 140 L 600 90 L 600 300 L 40 300 Z" fill="url(#accentGrad)" opacity="0.1"/>
    <path d="M 40 290 L 120 270 L 200 250 L 280 230 L 360 210 L 440 230 L 520 200 L 600 170" fill="none" stroke="#06B6D4" stroke-width="2" stroke-dasharray="6 4"/>
    
    <!-- Data Points -->
    <circle cx="440" cy="120" r="5" fill="#38BDF8"/>
    <circle cx="600" cy="90" r="5" fill="#38BDF8"/>
  </g>

  <!-- Side Panel: Recent Warehouse Logs -->
  <g transform="translate(660, 115)">
    <rect x="0" y="0" width="350" height="340" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="20" y="36" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Stock Movement Audit</text>
    
    <!-- Item 1 -->
    <g transform="translate(20, 60)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#10B981"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Ceramic Tile Granito 60x60</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">+250 Ctn • Bay A-04</text>
    </g>
    <!-- Item 2 -->
    <g transform="translate(20, 122)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#38BDF8"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Sanitary Ware Set Deluxe</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">Dispatched • Order #KIA-891</text>
    </g>
    <!-- Item 3 -->
    <g transform="translate(20, 184)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#F59E0B"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Adhesive Mortar Pro 25kg</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">Stock Threshold Alert • Bay C-12</text>
    </g>
    <!-- Item 4 -->
    <g transform="translate(20, 246)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#6366F1"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Warehouse Staff Verification</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">Role: Supervisor Approved</text>
    </g>
  </g>
  `
);

// 2. WMS KIA 2 (Detail View)
const wmsKia2 = createSvgTemplate(
  'WMS • Inbound Scanning & Barcode Protocol',
  'Stock Scanning & Verification',
  'Tugas Akhir / TA',
  '#06B6D4',
  `
  <g transform="translate(0, 20)">
    <rect x="0" y="0" width="1010" height="430" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="45" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">Automated Dispatch & Inbound Inspection Flow</text>
    <text x="30" y="70" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">Digital audit trail minimizing human error across logistics warehouse stages</text>

    <!-- 4 Stage Steps -->
    <g transform="translate(30, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(37,99,235,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#2563EB"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">1</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">PO Inbound</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Surat Jalan verification against PT. KIA manifests.</text>
      <rect x="25" y="142" width="70" height="18" rx="4" fill="rgba(16,185,129,0.2)"/>
      <text x="60" y="155" fill="#10B981" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">Synced</text>
    </g>

    <g transform="translate(275, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(56,189,248,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#06B6D4"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">2</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Barcode Scan</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">SKU auto-detection & damage check log.</text>
      <rect x="25" y="142" width="70" height="18" rx="4" fill="rgba(56,189,248,0.2)"/>
      <text x="60" y="155" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">0.4s Scan</text>
    </g>

    <g transform="translate(520, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(99,102,241,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#6366F1"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">3</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Racking Slot</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Warehouse bin allocation (Aisle/Rack/Tier).</text>
      <rect x="25" y="142" width="85" height="18" rx="4" fill="rgba(99,102,241,0.2)"/>
      <text x="67" y="155" fill="#818CF8" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">Auto-Route</text>
    </g>

    <g transform="translate(765, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(245,158,11,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#F59E0B"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">4</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Database Write</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Atomic MySQL transaction with role logging.</text>
      <rect x="25" y="142" width="80" height="18" rx="4" fill="rgba(245,158,11,0.2)"/>
      <text x="65" y="155" fill="#FBBF24" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">ACID Safe</text>
    </g>

    <!-- Bottom Code/Log Strip -->
    <g transform="translate(30, 320)">
      <rect width="950" height="70" rx="8" fill="#0A0F1D" stroke="rgba(255,255,255,0.06)"/>
      <text x="20" y="28" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12">> POST /api/v1/warehouse/inbound-batch --payload {"hub": "KIA_JAKARTA", "status": "APPROVED"}</text>
      <text x="20" y="52" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="12">[200 OK] 42 Pallets successfully inventoried. Redundancy check passed.</text>
    </g>
  </g>
  `
);

// 3. MBB Finance 1
const mbbFinance1 = createSvgTemplate(
  'Financial Module • PT. Mahakam Berkah Bersama',
  'Corporate Finance & Reporting System',
  'Internship / PKL',
  '#38BDF8',
  `
  <!-- Metrics Strip -->
  <g>
    <rect x="0" y="0" width="230" height="80" rx="10" fill="#1E293B" fill-opacity="0.6"/>
    <text x="20" y="30" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Total Monthly Disbursed</text>
    <text x="20" y="60" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="700">Rp 1.428.500.000</text>
  </g>
  <g transform="translate(255, 0)">
    <rect x="0" y="0" width="230" height="80" rx="10" fill="#1E293B" fill-opacity="0.6"/>
    <text x="20" y="30" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Audited Ledgers</text>
    <text x="20" y="60" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="700">342 Records</text>
  </g>
  <g transform="translate(510, 0)">
    <rect x="0" y="0" width="230" height="80" rx="10" fill="#1E293B" fill-opacity="0.6"/>
    <text x="20" y="30" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">API Sync Response</text>
    <text x="20" y="60" fill="#10B981" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="700">42ms Latency</text>
  </g>
  <g transform="translate(765, 0)">
    <rect x="0" y="0" width="245" height="80" rx="10" fill="#1E293B" fill-opacity="0.6"/>
    <text x="20" y="30" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Frontend Framework</text>
    <text x="20" y="60" fill="#6366F1" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="700">React + TS + Axios</text>
  </g>

  <!-- Table View Simulation -->
  <g transform="translate(0, 105)">
    <rect x="0" y="0" width="1010" height="345" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="25" y="35" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600">PT. Mahakam Berkah Bersama — General Ledger & Transaction Feeds</text>
    
    <!-- Table Header -->
    <g transform="translate(25, 55)">
      <rect width="960" height="32" rx="6" fill="#1E293B" fill-opacity="0.8"/>
      <text x="20" y="21" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">TX ID</text>
      <text x="140" y="21" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">DEPARTMENT</text>
      <text x="320" y="21" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">DESCRIPTION</text>
      <text x="600" y="21" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">AMOUNT</text>
      <text x="780" y="21" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">STATUS</text>
      <text x="890" y="21" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11" font-weight="600">ACTION</text>
    </g>

    <!-- Row 1 -->
    <g transform="translate(25, 95)">
      <rect width="960" height="48" rx="6" fill="#1E293B" fill-opacity="0.3"/>
      <text x="20" y="30" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12">TX-2024-881</text>
      <text x="140" y="30" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12">Operations / Fleet</text>
      <text x="320" y="30" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="12">Fuel & Logistics Routine Disbursal</text>
      <text x="600" y="30" fill="#F8FAFC" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">Rp 48.200.000</text>
      <rect x="780" y="15" width="75" height="20" rx="4" fill="rgba(16,185,129,0.15)"/>
      <text x="817" y="29" fill="#10B981" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle" font-weight="600">VERIFIED</text>
      <text x="890" y="30" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="11">View Receipt</text>
    </g>

    <!-- Row 2 -->
    <g transform="translate(25, 150)">
      <rect width="960" height="48" rx="6" fill="#1E293B" fill-opacity="0.3"/>
      <text x="20" y="30" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12">TX-2024-882</text>
      <text x="140" y="30" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12">Procurement</text>
      <text x="320" y="30" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="12">Heavy Equipment Spare Parts Batch #3</text>
      <text x="600" y="30" fill="#F8FAFC" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">Rp 125.750.000</text>
      <rect x="780" y="15" width="75" height="20" rx="4" fill="rgba(56,189,248,0.15)"/>
      <text x="817" y="29" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle" font-weight="600">AUDITED</text>
      <text x="890" y="30" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="11">View Receipt</text>
    </g>

    <!-- Row 3 -->
    <g transform="translate(25, 205)">
      <rect width="960" height="48" rx="6" fill="#1E293B" fill-opacity="0.3"/>
      <text x="20" y="30" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12">TX-2024-883</text>
      <text x="140" y="30" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12">Human Resources</text>
      <text x="320" y="30" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="12">Site Staff Medical & Safety Equipment</text>
      <text x="600" y="30" fill="#F8FAFC" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">Rp 16.400.000</text>
      <rect x="780" y="15" width="75" height="20" rx="4" fill="rgba(245,158,11,0.15)"/>
      <text x="817" y="29" fill="#F59E0B" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle" font-weight="600">PENDING</text>
      <text x="890" y="30" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="11">View Receipt</text>
    </g>
  </g>
  `
);

// 4. MBB Finance 2 (Analytics & API Sync)
const mbbFinance2 = createSvgTemplate(
  'PT. MBB Financial System • API Sync & Reports',
  'REST API Architecture & Data Analytics',
  'Internship / PKL',
  '#6366F1',
  `
  <g transform="translate(0, 10)">
    <rect x="0" y="0" width="1010" height="435" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="40" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">Asynchronous REST Data Flow & Financial Analytics</text>
    <text x="30" y="65" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">TypeScript type safety, custom Axios interceptors, and cash flow visualization</text>

    <!-- Chart -->
    <g transform="translate(30, 95)">
      <rect width="600" height="230" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <text x="20" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="600">Cash Flow Quarterly Projection (2024)</text>
      <!-- Bars -->
      <rect x="50" y="120" width="35" height="80" rx="4" fill="#2563EB"/>
      <rect x="130" y="90" width="35" height="110" rx="4" fill="#38BDF8"/>
      <rect x="210" y="70" width="35" height="130" rx="4" fill="#06B6D4"/>
      <rect x="290" y="50" width="35" height="150" rx="4" fill="#6366F1"/>
      <rect x="370" y="40" width="35" height="160" rx="4" fill="#8B5CF6"/>
      <rect x="450" y="60" width="35" height="140" rx="4" fill="#10B981"/>
      <rect x="530" y="30" width="35" height="170" rx="4" fill="#38BDF8"/>
    </g>

    <!-- Side API Status Box -->
    <g transform="translate(650, 95)">
      <rect width="330" height="230" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <text x="20" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="600">API Interceptor Pipeline</text>
      
      <g transform="translate(20, 50)">
        <rect width="290" height="38" rx="6" fill="#0A0F1D"/>
        <text x="12" y="24" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="11">✓ Bearer Auth Header Attached</text>
      </g>
      <g transform="translate(20, 96)">
        <rect width="290" height="38" rx="6" fill="#0A0F1D"/>
        <text x="12" y="24" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11">✓ Response Sanitizer (TS Types)</text>
      </g>
      <g transform="translate(20, 142)">
        <rect width="290" height="38" rx="6" fill="#0A0F1D"/>
        <text x="12" y="24" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="11">✓ Exponential Retry on 5xx</text>
      </g>
      <g transform="translate(20, 188)">
        <rect width="290" height="30" rx="6" fill="rgba(37,99,235,0.2)"/>
        <text x="12" y="20" fill="#93C5FD" font-family="'Inter', sans-serif" font-size="11">Status: Active & Audited</text>
      </g>
    </g>

    <!-- Bottom summary -->
    <g transform="translate(30, 345)">
      <rect width="950" height="60" rx="8" fill="#1E293B" fill-opacity="0.3"/>
      <text x="25" y="35" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="12">
        Built during PKL at PT. Mahakam Berkah Bersama — delivering streamlined financial oversight and data reliability.
      </text>
    </g>
  </g>
  `
);

// 5. Presensi 1 (Attendance Check-In)
const presensi1 = createSvgTemplate(
  'Presensi • Digital School Attendance',
  'Webcam Photo-Verification & Geolocation',
  'Fullstack Web App',
  '#10B981',
  `
  <!-- Split layout: Webcam preview & Student check-in -->
  <g transform="translate(30, 10)">
    <!-- Left Camera Simulation Frame -->
    <g>
      <rect x="0" y="0" width="460" height="425" rx="14" fill="#131E47" fill-opacity="0.5" stroke="rgba(56, 189, 248, 0.2)"/>
      <text x="25" y="35" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600">Webcam Attendance Verification</text>
      
      <!-- Video Viewfinder -->
      <g transform="translate(25, 55)">
        <rect width="410" height="300" rx="10" fill="#0B132B"/>
        <!-- Crosshairs / Face box -->
        <rect x="130" y="60" width="150" height="170" rx="20" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="8 6"/>
        <circle cx="205" cy="120" r="35" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
        <path d="M 160 195 Q 205 170 250 195" fill="none" stroke="#38BDF8" stroke-width="2"/>
        
        <!-- Live Indicator -->
        <rect x="15" y="15" width="80" height="22" rx="4" fill="rgba(239, 68, 68, 0.2)"/>
        <circle cx="28" cy="26" r="4" fill="#EF4444"/>
        <text x="40" y="30" fill="#FCA5A5" font-family="'Inter', sans-serif" font-size="10" font-weight="600">CAMERA ON</text>
        
        <!-- Detected Face Tag -->
        <rect x="135" y="240" width="140" height="22" rx="4" fill="rgba(16, 185, 129, 0.25)"/>
        <text x="205" y="255" fill="#34D399" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="600">Face Match: 98.4%</text>
      </g>
      
      <text x="25" y="390" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Geo-coordinates: -6.2088° S, 106.8456° E (School Radius Check)</text>
    </g>

    <!-- Right: Student Check-in card -->
    <g transform="translate(490, 0)">
      <rect x="0" y="0" width="460" height="425" rx="14" fill="#131E47" fill-opacity="0.5" stroke="rgba(56, 189, 248, 0.2)"/>
      <text x="25" y="35" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600">Daily Attendance Record</text>

      <g transform="translate(25, 60)">
        <text x="0" y="20" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Student Name</text>
        <text x="0" y="44" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700">Muhammad Kevin Febrian</text>
        
        <text x="0" y="85" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Class & Major</text>
        <text x="0" y="105" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="14" font-weight="600">Software Engineering (RPL)</text>

        <text x="0" y="145" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Timestamp</text>
        <text x="0" y="165" fill="#F8FAFC" font-family="'JetBrains Mono', monospace" font-size="14">07:14:22 WIB • Present (Tepat Waktu)</text>

        <!-- Big Action Button -->
        <rect x="0" y="200" width="410" height="50" rx="10" fill="#10B981"/>
        <text x="205" y="232" fill="#050814" font-family="'Space Grotesk', sans-serif" font-size="16" text-anchor="middle" font-weight="700">SUBMIT ATTENDANCE VERIFICATION</text>

        <g transform="translate(0, 275)">
          <rect width="410" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
          <text x="15" y="26" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Database Synchronization</text>
          <text x="15" y="46" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Photo securely hashed & stored in server attendance bucket.</text>
        </g>
      </g>
    </g>
  </g>
  `
);

// 6. Presensi 2 (Admin Recap)
const presensi2 = createSvgTemplate(
  'Presensi • Admin Dashboard & Analytics',
  'Automated Attendance Recap & Export',
  'Fullstack Web App',
  '#10B981',
  `
  <g transform="translate(0, 15)">
    <rect x="0" y="0" width="1010" height="420" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="40" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">School Admin Attendance Dashboard & Analytics</text>
    <text x="30" y="65" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">Automated morning attendance recap, late arrival tracking, and Excel export</text>

    <!-- 3 Mini stat circles -->
    <g transform="translate(30, 95)">
      <rect width="300" height="100" rx="10" fill="#1E293B" fill-opacity="0.6"/>
      <text x="20" y="35" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Overall Present Rate</text>
      <text x="20" y="75" fill="#10B981" font-family="'Space Grotesk', sans-serif" font-size="32" font-weight="700">97.8%</text>
    </g>
    <g transform="translate(355, 95)">
      <rect width="300" height="100" rx="10" fill="#1E293B" fill-opacity="0.6"/>
      <text x="20" y="35" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Late Check-ins Today</text>
      <text x="20" y="75" fill="#F59E0B" font-family="'Space Grotesk', sans-serif" font-size="32" font-weight="700">12 Students</text>
    </g>
    <g transform="translate(680, 95)">
      <rect width="300" height="100" rx="10" fill="#1E293B" fill-opacity="0.6"/>
      <text x="20" y="35" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Sick / Excused (Izin)</text>
      <text x="20" y="75" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="32" font-weight="700">6 Students</text>
    </g>

    <!-- Table preview -->
    <g transform="translate(30, 220)">
      <rect width="950" height="175" rx="8" fill="#1E293B" fill-opacity="0.4"/>
      <text x="25" y="35" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="600">Today's Class Summaries (RPL 1, RPL 2, TKJ 1, MM 1)</text>
      
      <g transform="translate(25, 55)">
        <text x="0" y="20" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Class XII RPL 1: 36/36 Present (100%) • Verification: All Photos Signed</text>
        <text x="0" y="50" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Class XII RPL 2: 35/36 Present (97.2%) • 1 Sick Leave Document Uploaded</text>
        <text x="0" y="80" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Daily Recap automatically compiled at 08:00 AM WIB for homeroom teachers.</text>
      </g>
    </g>
  </g>
  `
);

// 7. KantO
const kanto1 = createSvgTemplate(
  'KantO • Digital School Canteen',
  'Food Ordering, Menus, Ratings & Reward Coins',
  'Fullstack & Product Design',
  '#F59E0B',
  `
  <g transform="translate(0, 15)">
    <rect x="0" y="0" width="1010" height="425" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="40" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">Digital Canteen Marketplace & Order Terminal</text>
    <text x="30" y="65" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">Pre-order breaktime meals, student coin rewards, queue management, and merchant sales</text>

    <!-- Menu Food Grid -->
    <g transform="translate(30, 95)">
      <!-- Item 1 -->
      <g>
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
        <rect x="15" y="15" width="185" height="100" rx="8" fill="#0D1536"/>
        <text x="107" y="70" fill="#F59E0B" font-family="'Space Grotesk', sans-serif" font-size="16" text-anchor="middle" font-weight="700">Nasi Goreng Spesial</text>
        <text x="20" y="145" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="13" font-weight="600">Rp 15.000</text>
        <text x="20" y="165" fill="#FBBF24" font-family="'Inter', sans-serif" font-size="11">★ 4.9 (124 reviews)</text>
        <rect x="20" y="185" width="175" height="30" rx="6" fill="#F59E0B"/>
        <text x="107" y="205" fill="#000" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">+ Add to Tray</text>
      </g>
      <!-- Item 2 -->
      <g transform="translate(245, 0)">
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
        <rect x="15" y="15" width="185" height="100" rx="8" fill="#0D1536"/>
        <text x="107" y="70" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="16" text-anchor="middle" font-weight="700">Ayam Geprek Sambal</text>
        <text x="20" y="145" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="13" font-weight="600">Rp 18.000</text>
        <text x="20" y="165" fill="#FBBF24" font-family="'Inter', sans-serif" font-size="11">★ 4.8 (98 reviews)</text>
        <rect x="20" y="185" width="175" height="30" rx="6" fill="#F59E0B"/>
        <text x="107" y="205" fill="#000" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">+ Add to Tray</text>
      </g>
      <!-- Item 3 -->
      <g transform="translate(490, 0)">
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
        <rect x="15" y="15" width="185" height="100" rx="8" fill="#0D1536"/>
        <text x="107" y="70" fill="#10B981" font-family="'Space Grotesk', sans-serif" font-size="16" text-anchor="middle" font-weight="700">Dimsum Ayam 4pcs</text>
        <text x="20" y="145" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="13" font-weight="600">Rp 12.000</text>
        <text x="20" y="165" fill="#FBBF24" font-family="'Inter', sans-serif" font-size="11">★ 4.7 (76 reviews)</text>
        <rect x="20" y="185" width="175" height="30" rx="6" fill="#F59E0B"/>
        <text x="107" y="205" fill="#000" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">+ Add to Tray</text>
      </g>
      <!-- Cart summary side -->
      <g transform="translate(735, 0)">
        <rect width="215" height="230" rx="10" fill="#0A0F1D" stroke="rgba(56,189,248,0.2)"/>
        <text x="15" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="600">Active Order #KNT-42</text>
        <text x="15" y="55" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Pickup: 10:15 WIB (Istirahat)</text>
        <text x="15" y="90" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">1x Nasi Goreng Spesial</text>
        <text x="15" y="115" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">1x Es Teh Manis</text>
        <text x="15" y="150" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700">Total: Rp 20.000</text>
        <rect x="15" y="175" width="185" height="38" rx="6" fill="#38BDF8"/>
        <text x="107" y="199" fill="#050814" font-family="'Inter', sans-serif" font-size="12" text-anchor="middle" font-weight="700">CONFIRM & PAY</text>
      </g>
    </g>

    <!-- Bottom strip -->
    <g transform="translate(30, 350)">
      <rect width="950" height="50" rx="8" fill="#1E293B" fill-opacity="0.4"/>
      <text x="25" y="30" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">
        Tech Stack: PHP, MySQL, JavaScript, Tailwind CSS • Features: QR code pick-up token, vendor order dashboard.
      </text>
    </g>
  </g>
  `
);

// 8. Batik Sweety
const batikSweety1 = createSvgTemplate(
  'Batik Sweety • Interactive Cultural Heritage App',
  'Mobile UI/UX Design & Gamified Quizzes',
  'Mobile UI/UX & Interactive App',
  '#EC4899',
  `
  <g transform="translate(30, 15)">
    <!-- Mobile App Mockup Frame -->
    <g transform="translate(60, 0)">
      <rect width="250" height="420" rx="30" fill="#0A0F1D" stroke="#EC4899" stroke-width="2"/>
      <rect x="85" y="12" width="80" height="16" rx="8" fill="#1E293B"/>
      
      <!-- Inner phone content -->
      <g transform="translate(15, 45)">
        <text x="15" y="25" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700">Batik Sweety</text>
        <text x="15" y="42" fill="#EC4899" font-family="'Inter', sans-serif" font-size="11">Discover Indonesian Heritage</text>

        <!-- Batik Card 1: Mega Mendung -->
        <g transform="translate(10, 60)">
          <rect width="200" height="110" rx="12" fill="#1E293B" stroke="rgba(236,72,153,0.3)"/>
          <!-- Stylized clouds / wave motifs -->
          <path d="M 20 80 Q 50 30 80 80 T 140 80 T 180 80" fill="none" stroke="#EC4899" stroke-width="2"/>
          <path d="M 30 65 Q 60 25 90 65 T 150 65" fill="none" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="15" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">Mega Mendung</text>
          <text x="15" y="98" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="10">Asal: Cirebon, Jawa Barat</text>
        </g>

        <!-- Batik Card 2: Parang Rusak -->
        <g transform="translate(10, 185)">
          <rect width="200" height="110" rx="12" fill="#1E293B" stroke="rgba(245,158,11,0.3)"/>
          <line x1="20" y1="90" x2="180" y2="30" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6 4"/>
          <line x1="30" y1="100" x2="190" y2="40" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="15" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">Parang Rusak</text>
          <text x="15" y="98" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="10">Asal: Yogyakarta & Surakarta</text>
        </g>

        <!-- Bottom bar -->
        <rect x="10" y="315" width="200" height="35" rx="10" fill="#EC4899"/>
        <text x="110" y="337" fill="#FFF" font-family="'Inter', sans-serif" font-size="12" text-anchor="middle" font-weight="700">Mulai Kuis Batik</text>
      </g>
    </g>

    <!-- Right Side Explanations -->
    <g transform="translate(380, 20)">
      <rect width="560" height="380" rx="14" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
      <text x="30" y="45" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="700">Preserving Culture Through Interactive Design</text>
      <text x="30" y="75" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">A mobile-first visual experience educating teenagers on traditional Indonesian Batik motifs.</text>

      <g transform="translate(30, 110)">
        <rect width="500" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="26" fill="#EC4899" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600">Gamified Cultural Quizzes</text>
        <text x="20" y="46" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">Interactive pattern recognition quizzes with animated badges & score leaderboards.</text>
      </g>

      <g transform="translate(30, 185)">
        <rect width="500" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="26" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600">Visual Storytelling & History Cards</text>
        <text x="20" y="46" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">Rich cultural context, philosophic meanings, and artisan manufacturing techniques.</text>
      </g>

      <g transform="translate(30, 260)">
        <rect width="500" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="26" fill="#10B981" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600">Design System & Accessibility</text>
        <text x="20" y="46" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">Crafted in Figma with high-contrast color systems tailored for teenage audiences.</text>
      </g>
    </g>
  </g>
  `
);

// 9. Laundry
const laundry1 = createSvgTemplate(
  'Laundry Management System • Workflow Operations',
  'Customer Order Lifecycle & Invoicing',
  'Web Application',
  '#0284C7',
  `
  <g transform="translate(0, 15)">
    <rect x="0" y="0" width="1010" height="420" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="40" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">Laundry Order Tracking & Stage Pipeline</text>
    <text x="30" y="65" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">End-to-end management from weighing, washing, drying, ironing to WhatsApp customer notifications</text>

    <!-- 4 Pipeline Columns -->
    <g transform="translate(30, 95)">
      <!-- Col 1 -->
      <g>
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <rect x="15" y="15" width="185" height="26" rx="6" fill="#3B82F6"/>
        <text x="107" y="32" fill="#FFF" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">1. Antrean / Queued (4)</text>
        <g transform="translate(15, 55)">
          <rect width="185" height="70" rx="6" fill="#0A0F1D"/>
          <text x="12" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Budi Santoso</text>
          <text x="12" y="42" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">6.5 kg • Cuci Komplit</text>
          <text x="12" y="58" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10">Rp 45.500</text>
        </g>
      </g>
      <!-- Col 2 -->
      <g transform="translate(245, 0)">
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <rect x="15" y="15" width="185" height="26" rx="6" fill="#06B6D4"/>
        <text x="107" y="32" fill="#FFF" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">2. Proses Cuci / Wash (3)</text>
        <g transform="translate(15, 55)">
          <rect width="185" height="70" rx="6" fill="#0A0F1D"/>
          <text x="12" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Siti Rahma</text>
          <text x="12" y="42" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Bed Cover King Size</text>
          <text x="12" y="58" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="10">Mesin #02 • 18m left</text>
        </g>
      </g>
      <!-- Col 3 -->
      <g transform="translate(490, 0)">
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <rect x="15" y="15" width="185" height="26" rx="6" fill="#F59E0B"/>
        <text x="107" y="32" fill="#FFF" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">3. Setrika / Ironing (2)</text>
        <g transform="translate(15, 55)">
          <rect width="185" height="70" rx="6" fill="#0A0F1D"/>
          <text x="12" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Ahmad Fauzi</text>
          <text x="12" y="42" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">8.0 kg • Kemeja Formal</text>
          <text x="12" y="58" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="10">Uap Halus</text>
        </g>
      </g>
      <!-- Col 4 -->
      <g transform="translate(735, 0)">
        <rect width="215" height="230" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <rect x="15" y="15" width="185" height="26" rx="6" fill="#10B981"/>
        <text x="107" y="32" fill="#FFF" font-family="'Inter', sans-serif" font-size="11" text-anchor="middle" font-weight="700">4. Siap Ambil / Ready (6)</text>
        <g transform="translate(15, 55)">
          <rect width="185" height="70" rx="6" fill="#0A0F1D"/>
          <text x="12" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Dewi Sartika</text>
          <text x="12" y="42" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Rak C-05 • Packed</text>
          <text x="12" y="58" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="10">Notified WA</text>
        </g>
      </g>
    </g>

    <!-- Bottom summary -->
    <g transform="translate(30, 345)">
      <rect width="950" height="50" rx="8" fill="#1E293B" fill-opacity="0.4"/>
      <text x="25" y="30" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">
        Tech Stack: PHP, MySQL, JavaScript, Bootstrap • Automated daily revenue reports & customer receipt printing.
      </text>
    </g>
  </g>
  `
);

// 10. Borrowing
const borrowing1 = createSvgTemplate(
  'Equipment Borrowing System • Asset Lending Portal',
  'Multi-Step Approvals & Activity Logs',
  'Web Information System',
  '#8B5CF6',
  `
  <g transform="translate(0, 15)">
    <rect x="0" y="0" width="1010" height="420" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="40" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">School & Lab Equipment Lending Approval System</text>
    <text x="30" y="65" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">Digital asset reservation, teacher/lab head approval workflow, return condition inspection, and audit history</text>

    <!-- Workflow Steps -->
    <g transform="translate(30, 95)">
      <g>
        <rect width="300" height="130" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="30" fill="#8B5CF6" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">REQUEST SUBMISSION</text>
        <text x="20" y="55" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="14" font-weight="600">Sony Alpha 7 IV + Lensa 24-70mm</text>
        <text x="20" y="78" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Peminjam: Muhammad Kevin (RPL)</text>
        <text x="20" y="98" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="11">Keperluan: Dokumentasi Proyek TA</text>
      </g>

      <g transform="translate(325, 0)">
        <rect width="300" height="130" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="30" fill="#10B981" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">MULTI-LEVEL APPROVAL</text>
        <text x="20" y="55" fill="#10B981" font-family="'Inter', sans-serif" font-size="13">✓ Pembina Lab: Approved</text>
        <text x="20" y="78" fill="#10B981" font-family="'Inter', sans-serif" font-size="13">✓ Waka Sarpras: Verified</text>
        <text x="20" y="105" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="11">Batas Pengembalian: 3 Hari</text>
      </g>

      <g transform="translate(650, 0)">
        <rect width="300" height="130" rx="10" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="30" fill="#F59E0B" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">RETURN INSPECTION</text>
        <text x="20" y="55" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="13">Kondisi Alat: Sangat Baik</text>
        <text x="20" y="78" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Sensor bersih, baterai terisi, memori format.</text>
        <rect x="20" y="95" width="100" height="20" rx="4" fill="rgba(16,185,129,0.2)"/>
        <text x="70" y="109" fill="#10B981" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">CLOSED / SELESAI</text>
      </g>
    </g>

    <!-- Table of Assets -->
    <g transform="translate(30, 245)">
      <rect width="950" height="150" rx="8" fill="#1E293B" fill-opacity="0.4"/>
      <text x="20" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="600">Active Asset Catalog & Availability Tracker</text>
      
      <g transform="translate(20, 50)">
        <text x="0" y="20" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">1. Projektor Epson EB-X500 • Status: Tersedia (Lab Komputer 2)</text>
        <text x="0" y="45" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">2. Mikrotik Router RB750Gr3 • Status: Dipinjam (Kelompok Jaringan)</text>
        <text x="0" y="70" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">3. Raspberry Pi 4 Model B 8GB • Status: Tersedia (Inventaris Hardware)</text>
      </g>
    </g>
  </g>
  `
);

// 11. Profile Avatar Febri
const profileFebri = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050814"/>
      <stop offset="50%" stop-color="#090E24"/>
      <stop offset="100%" stop-color="#131E47"/>
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#050814" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="800" rx="36" fill="url(#avatarBg)"/>
  <circle cx="400" cy="380" r="320" fill="url(#halo)"/>

  <!-- Geometric Designer Tech Frame -->
  <g transform="translate(100, 80)">
    <rect width="600" height="640" rx="28" fill="#0D1536" fill-opacity="0.6" stroke="url(#accentGlow)" stroke-width="2"/>
    
    <!-- Code Window Dots -->
    <circle cx="36" cy="36" r="7" fill="#EF4444"/>
    <circle cx="58" cy="36" r="7" fill="#F59E0B"/>
    <circle cx="80" cy="36" r="7" fill="#10B981"/>
    <text x="300" y="42" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="14" text-anchor="middle">febri.dev / profile.tsx</text>

    <!-- Avatar Center Silhouette & Monogram -->
    <g transform="translate(175, 100)">
      <!-- Circle Frame -->
      <circle cx="125" cy="125" r="120" fill="#131E47" stroke="#38BDF8" stroke-width="3"/>
      <!-- Creative Developer Avatar Portrait Silhouette -->
      <circle cx="125" cy="100" r="50" fill="#38BDF8" opacity="0.9"/>
      <path d="M 60 215 C 60 160 190 160 190 215 Z" fill="#2563EB" opacity="0.95"/>
      <!-- Glasses / Tech Developer Detail -->
      <rect x="100" y="92" width="22" height="14" rx="3" fill="none" stroke="#050814" stroke-width="2.5"/>
      <rect x="128" y="92" width="22" height="14" rx="3" fill="none" stroke="#050814" stroke-width="2.5"/>
      <line x1="122" y1="99" x2="128" y2="99" stroke="#050814" stroke-width="2.5"/>
      
      <!-- Small floating code badge -->
      <rect x="165" y="160" width="80" height="30" rx="8" fill="#050814" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="205" y="180" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12" text-anchor="middle" font-weight="700">&lt;FEBRI/&gt;</text>
    </g>

    <!-- Developer Identity Details -->
    <g transform="translate(40, 390)">
      <text x="260" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" text-anchor="middle">
        Muhammad Kevin Febrian
      </text>
      <text x="260" y="60" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="16" font-weight="600" text-anchor="middle">
        Fullstack Web Developer & Software Engineer
      </text>
      <text x="260" y="85" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13" text-anchor="middle">
        Rekayasa Perangkat Lunak (RPL) • Jabodetabek, Indonesia
      </text>

      <!-- Skill Tag Chips -->
      <g transform="translate(25, 120)">
        <rect x="0" y="0" width="95" height="32" rx="6" fill="#1E293B" stroke="rgba(56,189,248,0.2)"/>
        <text x="47" y="21" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">React JS</text>

        <rect x="105" y="0" width="115" height="32" rx="6" fill="#1E293B" stroke="rgba(56,189,248,0.2)"/>
        <text x="162" y="21" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">TypeScript</text>

        <rect x="230" y="0" width="115" height="32" rx="6" fill="#1E293B" stroke="rgba(56,189,248,0.2)"/>
        <text x="287" y="21" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">Tailwind CSS</text>

        <rect x="355" y="0" width="115" height="32" rx="6" fill="#1E293B" stroke="rgba(56,189,248,0.2)"/>
        <text x="412" y="21" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">MySQL & API</text>
      </g>
    </g>
  </g>
</svg>`;

// Write all SVGs
const files = [
  { path: path.join(projectsDir, 'wms-kia-1.svg'), content: wmsKia1 },
  { path: path.join(projectsDir, 'wms-kia-2.svg'), content: wmsKia2 },
  { path: path.join(projectsDir, 'mbb-finance-1.svg'), content: mbbFinance1 },
  { path: path.join(projectsDir, 'mbb-finance-2.svg'), content: mbbFinance2 },
  { path: path.join(projectsDir, 'presensi-1.svg'), content: presensi1 },
  { path: path.join(projectsDir, 'presensi-2.svg'), content: presensi2 },
  { path: path.join(projectsDir, 'kanto-1.svg'), content: kanto1 },
  { path: path.join(projectsDir, 'batik-sweety-1.svg'), content: batikSweety1 },
  { path: path.join(projectsDir, 'laundry-1.svg'), content: laundry1 },
  { path: path.join(projectsDir, 'borrowing-1.svg'), content: borrowing1 },
  { path: path.join(imagesDir, 'profile-febri.svg'), content: profileFebri },
];

for (const file of files) {
  fs.writeFileSync(file.path, file.content, 'utf8');
  console.log(`Generated: ${file.path}`);
}

console.log('Successfully generated all placeholder graphics!');
