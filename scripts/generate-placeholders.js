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

// 1. PT. KIA Gresik - Attendance Data Processing 1
const wmsKia1 = createSvgTemplate(
  'Attendance Data Processing • PT. Kokoh Inti Arebama (Gresik)',
  'Employee Attendance & Timesheet Processing',
  'Tugas Akhir / TA',
  '#2563EB',
  `
  <!-- Header Stats -->
  <g>
    <rect x="0" y="0" width="310" height="90" rx="12" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Total Active Personnel (Gresik Hub)</text>
    <text x="24" y="68" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700">348 Karyawan</text>
    <text x="230" y="66" fill="#10B981" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Terdaftar</text>
  </g>
  <g transform="translate(330, 0)">
    <rect x="0" y="0" width="310" height="90" rx="12" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Processed Check-ins (Today)</text>
    <text x="24" y="68" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700">342 Records</text>
    <text x="230" y="66" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="12" font-weight="600">98.2% Hadir</text>
  </g>
  <g transform="translate(660, 0)">
    <rect x="0" y="0" width="350" height="90" rx="12" fill="#1E293B" fill-opacity="0.6" stroke="rgba(255,255,255,0.06)"/>
    <text x="24" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Overtime & Shift Calculations</text>
    <text x="24" y="68" fill="#F59E0B" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700">42 Lembur</text>
    <text x="260" y="66" fill="#F59E0B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Auto-Rekap</text>
  </g>

  <!-- Main Chart & Table Simulation -->
  <g transform="translate(0, 115)">
    <rect x="0" y="0" width="640" height="340" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="24" y="36" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600">Monthly Attendance Recapitulation & Trend</text>
    <text x="24" y="56" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Automated shift hours and timesheet parsing for PT. Kokoh Inti Arebama, Gresik</text>
    
    <!-- Graph Lines -->
    <path d="M 40 280 L 120 210 L 200 230 L 280 150 L 360 170 L 440 110 L 520 130 L 600 80" fill="none" stroke="#2563EB" stroke-width="3"/>
    <path d="M 40 280 L 120 210 L 200 230 L 280 150 L 360 170 L 440 110 L 520 130 L 600 80 L 600 300 L 40 300 Z" fill="url(#accentGrad)" opacity="0.1"/>
    <path d="M 40 290 L 120 260 L 200 240 L 280 210 L 360 200 L 440 220 L 520 180 L 600 150" fill="none" stroke="#06B6D4" stroke-width="2" stroke-dasharray="6 4"/>
    
    <!-- Data Points -->
    <circle cx="440" cy="110" r="5" fill="#38BDF8"/>
    <circle cx="600" cy="80" r="5" fill="#38BDF8"/>
  </g>

  <!-- Side Panel: Recent Attendance Processing Logs -->
  <g transform="translate(660, 115)">
    <rect x="0" y="0" width="350" height="340" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="20" y="36" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Data Processing Audit (Gresik)</text>
    
    <!-- Item 1 -->
    <g transform="translate(20, 60)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#10B981"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Shift Pagi (Gudang & Logistik)</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">142 Staf • Log Masuk Terverifikasi</text>
    </g>
    <!-- Item 2 -->
    <g transform="translate(20, 122)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#38BDF8"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Rekapitulasi Lembur Mingguan</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">Kalkulasi Otomatis • Formula Jam Kerja</text>
    </g>
    <!-- Item 3 -->
    <g transform="translate(20, 184)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#F59E0B"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Discrepancy & Leave Filter</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">6 Surat Izin/Sakit Tersinkronisasi</text>
    </g>
    <!-- Item 4 -->
    <g transform="translate(20, 246)">
      <rect width="310" height="52" rx="8" fill="#1E293B" fill-opacity="0.5"/>
      <circle cx="20" cy="26" r="6" fill="#6366F1"/>
      <text x="36" y="24" fill="#F8FAFC" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Export Laporan Payroll Bulanan</text>
      <text x="36" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">Format Excel/CSV Siap HRD</text>
    </g>
  </g>
  `
);

// 2. PT. KIA Gresik - Attendance Processing 2 (Pipeline)
const wmsKia2 = createSvgTemplate(
  'PT. KIA Gresik • Automated Log Processing Pipeline',
  'Automated Time Tracking & Analytics Workflow',
  'Tugas Akhir / TA',
  '#06B6D4',
  `
  <g transform="translate(0, 20)">
    <rect x="0" y="0" width="1010" height="430" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="45" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">Automated Attendance Log Ingestion & Recapitulation Flow</text>
    <text x="30" y="70" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">Digital calculation pipeline for PT. Kokoh Inti Arebama Gresik replacing error-prone manual spreadsheets</text>

    <!-- 4 Stage Steps -->
    <g transform="translate(30, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(37,99,235,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#2563EB"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">1</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Raw Log Ingestion</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Parse biometric logs from PT. KIA Gresik terminal.</text>
      <rect x="25" y="142" width="70" height="18" rx="4" fill="rgba(16,185,129,0.2)"/>
      <text x="60" y="155" fill="#10B981" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">Parsed</text>
    </g>

    <g transform="translate(275, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(56,189,248,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#06B6D4"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">2</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Shift Logic Rule</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Automated shift & overtime calculation engine.</text>
      <rect x="25" y="142" width="70" height="18" rx="4" fill="rgba(56,189,248,0.2)"/>
      <text x="60" y="155" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">Calculated</text>
    </g>

    <g transform="translate(520, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(99,102,241,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#6366F1"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">3</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Discrepancy Check</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Supervisor review for leaves, sick notes & permits.</text>
      <rect x="25" y="142" width="85" height="18" rx="4" fill="rgba(99,102,241,0.2)"/>
      <text x="67" y="155" fill="#818CF8" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">Audited</text>
    </g>

    <g transform="translate(765, 110)">
      <rect width="215" height="180" rx="10" fill="#1E293B" fill-opacity="0.6" stroke="rgba(245,158,11,0.4)"/>
      <circle cx="35" cy="40" r="16" fill="#F59E0B"/>
      <text x="35" y="46" fill="#FFF" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" font-weight="700">4</text>
      <text x="25" y="85" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600">Export & Payroll</text>
      <text x="25" y="112" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="11">Atomic MySQL commit & Excel monthly payroll recap.</text>
      <rect x="25" y="142" width="80" height="18" rx="4" fill="rgba(245,158,11,0.2)"/>
      <text x="65" y="155" fill="#FBBF24" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle">Ready</text>
    </g>

    <!-- Bottom Code/Log Strip -->
    <g transform="translate(30, 320)">
      <rect width="950" height="70" rx="8" fill="#0A0F1D" stroke="rgba(255,255,255,0.06)"/>
      <text x="20" y="28" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12">> python process_attendance.py --branch "KIA_GRESIK" --month "2026-05" --recap</text>
      <text x="20" y="52" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="12">[200 OK] 348 Employee Timesheets aggregated. Overtime discrepancies resolved (0 errors).</text>
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

    <!-- Rows -->
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
  </g>
  `
);

// 4. MBB Finance 2
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
  </g>
  `
);

// 5. Presensi 1
const presensi1 = createSvgTemplate(
  'Presensi • Digital School Attendance',
  'Webcam Photo-Verification & Geolocation',
  'Fullstack Web App',
  '#10B981',
  `
  <g transform="translate(30, 10)">
    <rect x="0" y="0" width="460" height="425" rx="14" fill="#131E47" fill-opacity="0.5" stroke="rgba(56, 189, 248, 0.2)"/>
    <text x="25" y="35" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600">Webcam Attendance Verification</text>
  </g>
  `
);

// 6. Presensi 2
const presensi2 = createSvgTemplate(
  'Presensi • Admin Dashboard & Analytics',
  'Automated Attendance Recap & Export',
  'Fullstack Web App',
  '#10B981',
  `
  <g transform="translate(0, 15)">
    <rect x="0" y="0" width="1010" height="420" rx="12" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
    <text x="30" y="40" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="600">School Admin Attendance Dashboard & Analytics</text>
  </g>
  `
);

// 7. KantO (Mobile UI/UX Product Design in Figma - Same as Batik Sweety style)
const kanto1 = createSvgTemplate(
  'KantO • School Canteen Mobile App Design',
  'Mobile UI/UX Design System & Interactive Prototype',
  'Mobile UI/UX & Product Design',
  '#F59E0B',
  `
  <g transform="translate(30, 15)">
    <!-- Mobile App Mockup Frame 1: Home & Stall Menu -->
    <g transform="translate(40, 0)">
      <rect width="250" height="420" rx="30" fill="#0A0F1D" stroke="#F59E0B" stroke-width="2"/>
      <rect x="85" y="12" width="80" height="16" rx="8" fill="#1E293B"/>
      
      <!-- Inner phone content -->
      <g transform="translate(15, 45)">
        <text x="15" y="25" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700">KantO App</text>
        <text x="15" y="42" fill="#F59E0B" font-family="'Inter', sans-serif" font-size="11">Digital Canteen Pre-order</text>

        <!-- Food Card 1 -->
        <g transform="translate(10, 60)">
          <rect width="200" height="110" rx="12" fill="#1E293B" stroke="rgba(245,158,11,0.3)"/>
          <text x="15" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">Nasi Goreng Spesial</text>
          <text x="15" y="52" fill="#F59E0B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Rp 15.000</text>
          <rect x="15" y="70" width="80" height="24" rx="6" fill="#F59E0B"/>
          <text x="55" y="86" fill="#000" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle" font-weight="700">+ Pesan</text>
        </g>

        <!-- Food Card 2 -->
        <g transform="translate(10, 185)">
          <rect width="200" height="110" rx="12" fill="#1E293B" stroke="rgba(56,189,248,0.3)"/>
          <text x="15" y="30" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700">Ayam Geprek Sambal</text>
          <text x="15" y="52" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="12" font-weight="600">Rp 18.000</text>
          <rect x="15" y="70" width="80" height="24" rx="6" fill="#38BDF8"/>
          <text x="55" y="86" fill="#000" font-family="'Inter', sans-serif" font-size="10" text-anchor="middle" font-weight="700">+ Pesan</text>
        </g>

        <!-- Bottom bar -->
        <rect x="10" y="315" width="200" height="35" rx="10" fill="#F59E0B"/>
        <text x="110" y="337" fill="#000" font-family="'Inter', sans-serif" font-size="12" text-anchor="middle" font-weight="700">Buka Keranjang (2 Item)</text>
      </g>
    </g>

    <!-- Right Side Explanations (UI/UX Case Study Breakdown) -->
    <g transform="translate(350, 20)">
      <rect width="590" height="380" rx="14" fill="#131E47" fill-opacity="0.4" stroke="rgba(56, 189, 248, 0.15)"/>
      <text x="30" y="45" fill="#F8FAFC" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="700">Figma Mobile UI/UX & Product Design</text>
      <text x="30" y="75" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13">High-fidelity interactive mobile prototype designed to solve break-time school cafeteria crowding.</text>

      <g transform="translate(30, 110)">
        <rect width="530" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="26" fill="#F59E0B" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600">Pre-Ordering & Pickup Slot Workflow</text>
        <text x="20" y="46" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">Intuitive user journeys allowing students to pre-order meals before recess bell rings.</text>
      </g>

      <g transform="translate(30, 185)">
        <rect width="530" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="26" fill="#38BDF8" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600">Gamified Student Reward Coins</text>
        <text x="20" y="46" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">Digital point wallet system incentivizing cashless habits and quick counter collections.</text>
      </g>

      <g transform="translate(30, 260)">
        <rect width="530" height="60" rx="8" fill="#1E293B" fill-opacity="0.6"/>
        <text x="20" y="26" fill="#10B981" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600">Component Design System in Figma</text>
        <text x="20" y="46" fill="#CBD5E1" font-family="'Inter', sans-serif" font-size="11">Mobile-first components, interactive micro-states, typography scale, and color hierarchy.</text>
      </g>
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
  </g>
  `
);

// Write updated SVGs
const files = [
  { path: path.join(projectsDir, 'wms-kia-1.svg'), content: wmsKia1 },
  { path: path.join(projectsDir, 'wms-kia-2.svg'), content: wmsKia2 },
  { path: path.join(projectsDir, 'kanto-1.svg'), content: kanto1 },
];

for (const file of files) {
  fs.writeFileSync(file.path, file.content, 'utf8');
  console.log(`Updated: ${file.path}`);
}

console.log('Successfully updated placeholder graphics for PT. KIA Gresik and KantO UI/UX!');
