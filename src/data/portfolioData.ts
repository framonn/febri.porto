import type { Project, Experience, Certificate, SkillCategory, GithubRepo } from '../types';

export const personalInfo = {
  fullName: 'Muhammad Kevin Febrian',
  displayName: 'Febri',
  title: {
    en: 'Software Engineering Student & Fullstack Developer',
    id: 'Pelajar Rekayasa Perangkat Lunak (RPL) & Fullstack Developer',
  },
  location: 'Depok, Indonesia',
  email: 'rplfebri@gmail.com',
  github: {
    username: 'framonn',
    url: 'https://github.com/framonn',
  },
  instagram: {
    handle: '@febrinxs_',
    url: 'https://www.instagram.com/febrinxs_',
  },
  avatar: {
    primary: '/images/profile-febri.jpg',
    fallback: '/images/profile-febri.svg',
  },
  stats: {
    projectsCount: '7+',
    industryPartners: '2',
    techSkills: '15+',
  },
};

export const experiences: Experience[] = [
  {
    id: 'exp-ta-kia',
    type: 'capstone',
    typeBadge: {
      en: 'Final Capstone Project (Tugas Akhir)',
      id: 'Tugas Akhir (Capstone Industry Collaboration)',
    },
    title: {
      en: 'Software & Data Processing Developer',
      id: 'Pengembang Perangkat Lunak & Pengolah Data',
    },
    company: 'PT. Kokoh Inti Arebama (Gresik)',
    location: 'Gresik, Jawa Timur, Indonesia',
    period: {
      en: 'Final Project Phase (Tugas Akhir)',
      id: 'Fase Tugas Akhir Kejuruan',
    },
    summary: {
      en: 'Collaborated with PT. Kokoh Inti Arebama (Gresik distribution hub) to engineer an automated employee attendance data processing and timesheet recapitulation system, eliminating manual timesheet errors and synchronizing biometric logs with shift schedules.',
      id: 'Berkolaborasi dengan PT. Kokoh Inti Arebama (hub distribusi Gresik) untuk merekayasa sistem pengolahan dan rekapitulasi data absensi karyawan otomatis, mengeliminasi kesalahan rekap manual serta menyinkronkan data log presensi dengan jadwal shift kerja.',
    },
    achievements: {
      en: [
        'Built automated data processing pipelines in Python to parse and validate thousands of employee biometric attendance records.',
        'Engineered automated shift calculation logic accounting for multi-shift schedules, overtime hours, and attendance penalties.',
        'Designed an intuitive, high-visibility dashboard UI allowing HR and Gresik operational supervisors to monitor timesheet status in real time.',
        'Implemented exportable payroll-ready attendance reports in Excel and PDF formats, cutting monthly reporting cycles significantly.',
      ],
      id: [
        'Membangun alur pemrosesan data otomatis dengan Python untuk memvalidasi dan mengolah ribuan catatan presensi biometrik karyawan.',
        'Mengembangkan logika kalkulasi shift otomatis yang memperhitungkan jadwal multi-shift, jam lembur, dan penalti keterlambatan.',
        'Merancang antarmuka dashboard dengan visibilitas tinggi agar HR dan supervisor cabang Gresik dapat memantau status absensi secara real-time.',
        'Menyediakan fitur ekspor laporan absensi siap pakai untuk penggajian dalam format Excel dan PDF, memangkas siklus rekap bulanan secara drastis.',
      ],
    },
    techStack: ['Python', 'PHP / Web', 'MySQL', 'Data Processing', 'REST API', 'Tailwind CSS'],
    icon: 'briefcase',
  },
  {
    id: 'exp-pkl-mbb',
    type: 'internship',
    typeBadge: {
      en: 'Internship (Praktik Kerja Lapangan / PKL)',
      id: 'Praktik Kerja Lapangan (PKL)',
    },
    title: {
      en: 'Frontend Developer Intern',
      id: 'Frontend Developer Intern',
    },
    company: 'PT. Mahakam Berkah Bersama (PT. MBB)',
    location: 'Jakarta / Jabodetabek, Indonesia',
    period: {
      en: 'Internship Period (PKL)',
      id: 'Periode Praktik Kerja Lapangan',
    },
    summary: {
      en: 'Developed responsive frontend user interfaces and integrated backend REST APIs for corporate financial transaction and reporting modules using React JS, TypeScript, Axios, and modern CSS frameworks.',
      id: 'Mengembangkan antarmuka pengguna responsif dan mengintegrasikan REST API untuk modul pencatatan transaksi keuangan perusahaan menggunakan React JS, TypeScript, Axios, dan Tailwind CSS.',
    },
    achievements: {
      en: [
        'Built responsive financial dashboard interfaces adhering to corporate design guidelines and usability standards.',
        'Integrated asynchronous REST APIs using Axios with custom request interceptors, response sanitization, and error boundaries.',
        'Implemented typed state management and interactive data tables with dynamic search, pagination, and date filtering.',
        'Collaborated closely with senior developers and internal stakeholders to iterate UI components and optimize load latency.',
      ],
      id: [
        'Membangun antarmuka dashboard keuangan responsif sesuai dengan standar desain dan kemudahan penggunaan internal perusahaan.',
        'Mengintegrasikan REST API asinkron menggunakan Axios dengan interceptor otentikasi, sanitasi respon, dan penanganan kesalahan.',
        'Menerapkan state management bertipe aman serta tabel data interaktif dengan pencarian dinamis, pagination, dan filter tanggal.',
        'Bekerja sama secara aktif dengan tim developer senior dan pemangku kepentingan untuk menyempurnakan performa UI.',
      ],
    },
    techStack: ['React JS', 'TypeScript', 'Axios', 'Tailwind CSS', 'REST API', 'JavaScript (ES6+)'],
    icon: 'briefcase',
  },
];

export const projects: Project[] = [
  {
    id: 'wms-pt-kia',
    title: 'Warehouse Management System (WMS) — PT. Kokoh Inti Arebama',
    category: 'industry',
    categoryBadge: {
      en: 'Tugas Akhir • Implemented',
      id: 'Tugas Akhir • Terimplementasi',
    },
    summary: {
      en: 'Digital warehouse inventory & logistics management platform engineered to automate inbound/outbound logging and real-time stock monitoring.',
      id: 'Sistem manajemen pergudangan & logistik berbasis web yang mengotomatisasi pencatatan barang masuk/keluar dan pemantauan stok real-time.',
    },
    description: {
      en: 'Developed in partnership with PT. Kokoh Inti Arebama for their distribution operations, this system solves the challenge of manual inventory audits and decentralized tracking. Built as a comprehensive Capstone Project (Tugas Akhir), the platform ingests logistics manifests, validates stock movements, computes bin allocations, and delivers audit-ready stock summaries.',
      id: 'Dikembangkan melalui kemitraan dengan PT. Kokoh Inti Arebama untuk kegiatan operasional distribusi, sistem ini menjawab tantangan audit inventaris manual dan pencatatan yang tersebar. Dibangun sebagai Tugas Akhir komprehensif, platform ini mengolah manifes logistik, memvalidasi mutasi stok, mengkalkulasi alokasi rak, serta menyajikan rekap inventaris siap audit.',
    },
    contribution: {
      en: 'Designed the inventory database schema, built inbound/outbound goods logging workflows, and developed the real-time stock monitoring dashboard—successfully implemented for operational use.',
      id: 'Merancang skema database inventaris, membangun alur pencatatan barang masuk/keluar, dan mengembangkan dashboard monitoring stok real-time yang telah diimplementasikan secara operasional.',
    },
    problem: {
      en: 'The warehouse facility previously relied on manual paperwork and offline spreadsheets for tracking pallet movements and inbound/outbound manifests. This resulted in delayed inventory counts, vulnerability to human data entry mistakes, and a lack of real-time visibility for operational supervisors.',
      id: 'Fasilitas operasional gudang sebelumnya mengandalkan pencatatan kertas dan spreadsheet terpisah untuk mencatat pergerakan barang serta dokumen surat jalan. Hal ini menyebabkan keterlambatan rekap stok, risiko kesalahan input, dan ketiadaan pemantauan real-time bagi supervisor.',
    },
    solution: {
      en: 'Architected an automated inventory engine and web interface that digests goods receipts, reconciles bin locations, validates barcode scans, and outputs audit-ready monthly summaries via a modern dashboard.',
      id: 'Merancang sistem inventaris terotomasi dan antarmuka web yang mengolah penerimaan barang, mencocokkan lokasi rak, memvalidasi pemindaian barcode, dan menyajikan rekap bulanan siap audit melalui dashboard modern.',
    },
    features: {
      en: [
        'Automated parsing and logging of inbound and outbound goods manifests.',
        'Real-time stock level monitoring with automated minimum threshold warnings.',
        'Structured bin and rack slot allocation tracking with atomic database updates.',
        'Interactive supervisor dashboard with daily inventory turnover metrics.',
        'One-click export of audit-ready inventory reports in Excel and PDF formats.',
      ],
      id: [
        'Pencatatan dan pemrosesan otomatis manifes barang masuk dan keluar.',
        'Pemantauan stok real-time dilengkapi notifikasi peringatan ambang batas minimum.',
        'Pelacakan alokasi slot rak dan palet dengan pembaruan database atomik.',
        'Dashboard interaktif supervisor dengan metrik perputaran inventaris harian.',
        'Ekspor satu-klik laporan inventaris siap audit dalam format Excel dan PDF.',
      ],
    },
    techStack: ['Python', 'PHP', 'MySQL', 'REST API', 'Tailwind CSS'],
    role: {
      en: 'Software & Database Developer (Tugas Akhir)',
      id: 'Pengembang Perangkat Lunak & Basis Data (Tugas Akhir)',
    },
    partner: 'PT. Kokoh Inti Arebama (Building Materials Distributor)',
    images: ['/images/projects/wms-kia-1.jpg', '/images/projects/wms-kia-2.jpg'],
    fallbackImages: ['/images/projects/wms-kia-1.svg', '/images/projects/wms-kia-2.svg'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'mbb-financial-system',
    title: 'Corporate Financial Module & Information System — PT. Mahakam Berkah Bersama',
    category: 'industry',
    categoryBadge: {
      en: 'PKL / Internship',
      id: 'PKL / Magang',
    },
    summary: {
      en: 'Corporate ledger and financial reporting system engineered to handle dense transaction records and multi-column ledger tracking.',
      id: 'Sistem pencatatan dan pelaporan keuangan perusahaan yang dirancang untuk menangani transaksi padat dan audit buku besar terstruktur.',
    },
    description: {
      en: 'During the internship (Praktik Kerja Lapangan) at PT. Mahakam Berkah Bersama, contributed as a Frontend Developer to build clean, typed, and resilient user interface modules for corporate financial ledgering, expense disbursements, and fiscal reporting.',
      id: 'Selama masa Praktik Kerja Lapangan (PKL) di PT. Mahakam Berkah Bersama, berkontribusi sebagai Frontend Developer membangun modul antarmuka yang rapi, bertipe aman, dan andal untuk pembukuan transaksi keuangan, pencairan biaya, dan laporan fiskal perusahaan.',
    },
    contribution: {
      en: 'Developed responsive financial transaction and reporting UI components using React & TypeScript, and integrated backend REST APIs via Axios.',
      id: 'Mengembangkan komponen UI transaksi dan laporan keuangan responsif menggunakan React & TypeScript, serta mengintegrasikan REST API backend menggunakan Axios.',
    },
    problem: {
      en: 'Internal finance teams needed an intuitive, modern dashboard interface capable of displaying dense tabular ledgers, filtering thousands of transactions dynamically, and maintaining rigorous client-side state synchrony with backend REST services without UI freezes.',
      id: 'Tim keuangan internal membutuhkan antarmuka dashboard modern yang mampu menampilkan data buku besar yang padat, memfilter ribuan transaksi secara cepat, dan menjaga sinkronisasi data dengan server tanpa kendala performa.',
    },
    solution: {
      en: 'Engineered high-performance React components using TypeScript and Tailwind CSS, wired with Axios interceptors for secure token handling, optimistic UI state updates, and interactive data visualization for financial health summaries.',
      id: 'Mengembangkan komponen React berkinerja tinggi dengan TypeScript dan Tailwind CSS, dihubungkan dengan interceptor Axios untuk pengelolaan token yang aman, pembaruan UI responsif, serta visualisasi data transaksi.',
    },
    features: {
      en: [
        'Dynamic financial ledger view with instant multi-column search, date filtering, and status tagging.',
        'Custom Axios HTTP client setup with automated JWT authentication headers and unified error handling.',
        'Interactive financial summary widgets visualizing cash inflows and operational disbursements.',
        'Strict TypeScript interfaces ensuring type consistency with backend database schemas.',
        'Fully responsive layout optimized for desktop workstations and tablet audit reviews.',
      ],
      id: [
        'Tampilan buku besar keuangan dinamis dengan filter tanggal, pencarian multi-kolom, dan tag status.',
        'Konfigurasi Axios HTTP client dengan otentikasi JWT otomatis dan penanganan error terpusat.',
        'Widget visualisasi ringkasan keuangan untuk memantau arus kas masuk dan pengeluaran operasional.',
        'Penerapan antarmuka TypeScript ketat guna menjamin kesesuaian tipe data dengan skema backend.',
        'Tata letak responsif optimal untuk layar desktop kantor maupun tablet supervisor.',
      ],
    },
    techStack: ['React JS', 'TypeScript', 'Tailwind CSS', 'Axios', 'REST API', 'JavaScript (ES6+)'],
    role: {
      en: 'Frontend Developer Intern',
      id: 'Frontend Developer Intern',
    },
    partner: 'PT. Mahakam Berkah Bersama',
    images: ['/images/projects/mbb-finance-1.jpg', '/images/projects/mbb-finance-2.jpg'],
    fallbackImages: ['/images/projects/mbb-finance-1.svg', '/images/projects/mbb-finance-2.svg'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'presensi-school-app',
    title: 'Presensi — Digital School Attendance Web App',
    category: 'webapp',
    categoryBadge: {
      en: 'Fullstack Web App',
      id: 'Aplikasi Web Fullstack',
    },
    summary: {
      en: 'Digital school attendance platform featuring live webcam photo verification, automated tardiness rules, and administrator reports.',
      id: 'Platform absensi sekolah digital dengan verifikasi foto webcam langsung, klasifikasi ketepatan waktu otomatis, dan rekap admin.',
    },
    description: {
      en: 'Designed and built to streamline daily school attendance tracking for students and faculty. The platform prevents proxy attendance by capturing live webcam verification snapshots upon check-in and provides automated reporting for school administration.',
      id: 'Dirancang dan dibangun untuk menyederhanakan pencatatan absensi harian siswa dan guru. Platform ini mencegah titip absen melalui tangkapan kamera langsung saat jam masuk dan menyediakan rekap otomatis bagi pihak sekolah.',
    },
    contribution: {
      en: 'Built the fullstack architecture from scratch, including Express REST APIs, MySQL relational schema, photo-verified check-in flow, and admin recap dashboard.',
      id: 'Membangun arsitektur fullstack dari nol, meliputi REST API Express, skema relasional MySQL, alur check-in dengan bukti foto, dan dashboard rekap admin.',
    },
    problem: {
      en: 'Traditional manual roll calls and paper sign-in sheets were time-consuming, prone to proxy attendance, and required hours of tedious manual data entry every month for homeroom teachers and staff.',
      id: 'Presensi manual menggunakan lembar kertas memakan banyak waktu kegiatan belajar mengajar, rawan kecurangan titip absen, dan menyita waktu berjam-jam untuk rekap bulanan staf tata usaha.',
    },
    solution: {
      en: 'Built an interactive, fullstack web app utilizing HTML5 MediaDevices for instant photo capture, coupled with a Node/Express and MySQL backend that automatically classifies punctuality and compiles real-time classroom statistics.',
      id: 'Membangun aplikasi web fullstack memanfaatkan API kamera HTML5 untuk verifikasi foto langsung, didukung backend Node/Express dan MySQL yang mengklasifikasikan ketepatan waktu serta menyajikan statistik kelas secara instan.',
    },
    features: {
      en: [
        'Self-service student check-in/check-out with integrated webcam photo verification.',
        'Automated status classification (Present, Late, Sick, Excused) based on strict time boundaries.',
        'Administrative analytics panel for homeroom teachers with instant classroom attendance rates.',
        'Excel / CSV report export generator for monthly school administrative submissions.',
        'Role-based access separating student interfaces from admin review capabilities.',
      ],
      id: [
        'Alur check-in/check-out mandiri siswa dengan verifikasi foto webcam langsung.',
        'Klasifikasi status otomatis (Hadir, Terlambat, Sakit, Izin) berdasarkan batas jam sekolah.',
        'Panel analitik admin untuk wali kelas dengan persentase kehadiran per kelas secara live.',
        'Fitur ekspor laporan ke format Excel / CSV untuk kebutuhan rekap tata usaha bulanan.',
        'Pemisahan hak akses yang aman antara akun siswa dan panel verifikasi guru/admin.',
      ],
    },
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Webcam API'],
    role: {
      en: 'Fullstack Developer & UI Designer',
      id: 'Fullstack Developer & UI Designer',
    },
    images: ['/images/projects/presensi-1.jpg', '/images/projects/presensi-2.jpg'],
    fallbackImages: ['/images/projects/presensi-1.svg', '/images/projects/presensi-2.svg'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'kanto-digital-canteen',
    title: 'KantO – Digital Canteen Mobile App Design & Prototype',
    category: 'uiux',
    categoryBadge: {
      en: 'Mobile UI/UX • Prototype',
      id: 'Mobile UI/UX • Purwarupa',
    },
    summary: {
      en: 'Mobile UI/UX design and interactive Figma prototype for a digital school cafeteria ordering ecosystem, featuring queue reduction flows and student reward points.',
      id: 'Desain produk UI/UX mobile dan purwarupa interaktif Figma untuk ekosistem kantin sekolah digital, dirancang untuk memangkas antrean dan meningkatkan kepuasan siswa.',
    },
    description: {
      en: 'Crafted as a comprehensive mobile-first UI/UX case study in Figma. KantO envisions a cashless, queue-free cafeteria experience tailored for students during fast-paced school breaks, featuring pre-ordering flows, real-time kitchen ticket tracking, and gamified student rewards.',
      id: 'Dibuat sebagai studi kasus desain produk UI/UX mobile-first komprehensif di Figma. KantO mengusung konsep kantin digital non-tunai tanpa antrean yang dirancang khusus untuk kenyamanan siswa saat jam istirahat, lengkap dengan alur pre-order, tiket dapur real-time, dan sistem poin reward.',
    },
    contribution: {
      en: 'Designed the end-to-end mobile user experience, food ordering journey, and interactive design system in Figma to reduce breaktime queue congestion.',
      id: 'Merancang pengalaman pengguna mobile end-to-end, alur pemesanan makanan, dan sistem desain interaktif di Figma untuk mengurai antrean jam istirahat.',
    },
    problem: {
      en: 'Short 20-30 minute lunch breaks create chaotic queue bottlenecks at school canteens, leaving students with little time to eat and causing cafeteria vendors to lose track of peak-time orders.',
      id: 'Waktu istirahat sekolah yang singkat (20-30 menit) menimbulkan penumpukan antrean padat di kantin, membuat siswa kehabisan waktu makan dan pedagang kesulitan mengelola pesanan yang membludak.',
    },
    solution: {
      en: 'Designed an intuitive mobile app experience with structured Figma design systems, ergonomic thumb-zone navigation, clean vendor stall categorization, meal pre-ordering, and scheduled pickup notifications.',
      id: 'Merancang pengalaman aplikasi mobile intuitif dengan design system Figma terstruktur, navigasi yang ergonomis, kategorisasi stan makanan yang jelas, pemesanan awal, dan notifikasi jadwal pengambilan makanan.',
    },
    features: {
      en: [
        'High-fidelity interactive Figma prototype with fluid micro-interactions and screen flows.',
        'Mobile-first ordering architecture with dietary filter tags and real-time stall menus.',
        'Kitchen ticket status visualization (Order Placed, Cooking, Ready for Pickup).',
        'Gamified reward coins wallet encouraging healthy meal choices and student engagement.',
      ],
      id: [
        'Purwarupa interaktif fidelitas tinggi di Figma dengan mikro-interaksi dan alur navigasi mulus.',
        'Arsitektur pemesanan mobile-first dengan filter kategori makanan dan menu kantin live.',
        'Visualisasi status tiket dapur (Pesanan Masuk, Dimasak, Siap Diambil).',
        'Dompet poin reward siswa interaktif untuk meningkatkan kepuasan dan loyalitas pengguna.',
      ],
    },
    techStack: ['UI/UX Design', 'Figma', 'Mobile-First', 'Prototyping', 'Design Systems'],
    role: {
      en: 'Lead UI/UX & Product Designer',
      id: 'Lead UI/UX & Desain Produk',
    },
    images: ['/images/projects/kanto-1.jpg'],
    fallbackImages: ['/images/projects/kanto-1.svg'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'batik-sweety-mobile',
    title: 'Batik Sweety — Interactive Cultural Heritage App',
    category: 'uiux',
    categoryBadge: {
      en: 'Mobile UI/UX & Interactive',
      id: 'Mobile UI/UX & Interaktif',
    },
    summary: {
      en: 'Interactive educational mobile app introducing Indonesian batik heritage to teenagers through visual storytelling and gamified quizzes.',
      id: 'Aplikasi edukasi mobile interaktif yang memperkenalkan warisan batik Nusantara kepada generasi muda melalui visual storytelling dan kuis interaktif.',
    },
    description: {
      en: 'Designed with a mobile-first philosophy to bridge cultural preservation with modern Gen-Z visual aesthetics. Features interactive motif explorations, philosophical background stories, and gamified quizzes.',
      id: 'Dirancang dengan pendekatan mobile-first untuk menjembatani pelestarian budaya tradisional dengan estetika visual generasi muda. Memuat ensiklopedia motif batik, makna filosofis, dan kuis edukatif berbasis poin.',
    },
    contribution: {
      en: 'Researched traditional Indonesian batik patterns and created the gamified mobile prototype and high-fidelity interaction flows in Figma.',
      id: 'Melakukan riset motif batik tradisional Indonesia dan merancang purwarupa interaktif serta alur kuis berhadiah di Figma.',
    },
    problem: {
      en: 'Many young students perceive traditional batik as formal or outdated, with limited interactive digital learning media available to explore its rich regional diversity.',
      id: 'Banyak generasi muda memandang batik hanya sebagai pakaian formal yang kaku, serta minimnya media digital interaktif yang menyenangkan untuk mempelajari filosofi motif batik Nusantara.',
    },
    solution: {
      en: 'Crafted a vibrant, modern UI/UX design prototype in Figma featuring interactive micro-interactions, pattern showcase cards (Mega Mendung, Parang Rusak, Kawung), and high-contrast typography.',
      id: 'Merancang purwarupa UI/UX yang memikat di Figma dengan mikro-interaksi dinamis, kartu visual motif (Mega Mendung, Parang, Kawung), dan tipografi berstandar tinggi yang ramah bagi pengguna muda.',
    },
    features: {
      en: [
        'Curated digital encyclopedia of authentic Indonesian batik patterns with regional origins.',
        'Gamified pattern recognition quizzes with animated feedback and milestone badges.',
        'Clean mobile-first design system with accessible contrast ratios and tactile touch targets.',
        'High-fidelity interactive prototype demonstrating intuitive page navigation flows.',
      ],
      id: [
        'Ensiklopedia digital motif batik asli Nusantara lengkap dengan asal daerah dan sejarah.',
        'Kuis tebak motif interaktif dilengkapi efek visual menarik dan perolehan lencana.',
        'Sistem desain mobile-first dengan kontras ramah mata dan tombol aksi yang ergonomis.',
        'Purwarupa interaktif fidelitas tinggi yang mendemonstrasikan navigasi intuitif.',
      ],
    },
    techStack: ['UI/UX Design', 'Figma', 'Prototyping', 'Design Systems', 'Mobile-First'],
    role: {
      en: 'Lead UI/UX Designer & Researcher',
      id: 'Lead UI/UX Designer & Peneliti',
    },
    images: ['/images/projects/batik-sweety-1.jpg'],
    fallbackImages: ['/images/projects/batik-sweety-1.svg'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'laundry-management-system',
    title: 'Laundry Management System',
    category: 'webapp',
    categoryBadge: {
      en: 'Web Application',
      id: 'Aplikasi Web Operasional',
    },
    summary: {
      en: 'Web-based operations manager for organizing customer profiles, order progress tracking, and financial transaction logs.',
      id: 'Aplikasi operasional berbasis web untuk mengelola data pelanggan, pelacakan proses cuci secara bertahap, dan pencatatan transaksi kasir laundry.',
    },
    description: {
      en: 'Engineered to help small-and-medium laundry enterprises handle daily order volumes efficiently. Features stage progression pipelines, customer weight calculations, and printable receipts.',
      id: 'Direkayasa untuk membantu usaha laundry mengelola volume pesanan harian secara tertata. Dilengkapi pelacakan status bertahap, kalkulasi berat pakaian, dan pencetakan nota pelanggan.',
    },
    contribution: {
      en: 'Engineered the fullstack PHP and MySQL web application with staged order tracking pipelines and automated receipt calculation.',
      id: 'Membangun aplikasi web fullstack PHP dan MySQL dengan alur pelacakan tahapan cuci dan kalkulasi otomatis nota kasir.',
    },
    problem: {
      en: 'Laundry businesses frequently encounter misplaced customer garments, confusion around wash progress, and discrepancies in daily cash receipts due to manual paper logging.',
      id: 'Usaha laundry sering menghadapi risiko pakaian pelanggan tertukar, ketidakpastian proses cuci, dan pembukuan kasir yang selisih akibat pencatatan kertas nota yang tercecer.',
    },
    solution: {
      en: 'Built an intuitive web application providing Kanban-style stage transitions (Queued, Washing, Drying, Ironing, Ready), automated pricing calculation by weight, and audit-friendly cash records.',
      id: 'Membangun aplikasi web dengan alur tahapan status visual (Antrean, Cuci, Kering, Setrika, Selesai), perhitungan tarif otomatis per kilogram, dan rekapitulasi keuangan kasir yang rapi.',
    },
    features: {
      en: [
        'Step-by-step order tracking pipeline keeping staff aligned on laundry status.',
        'Automated billing calculator for weight-based and piece-rate laundry packages.',
        'Customer database with order history and quick WhatsApp contact integrations.',
        'Daily and monthly revenue reports summarizing total wash turnaround volumes.',
      ],
      id: [
        'Alur pelacakan status pesanan terstruktur agar staf dapat memantau setiap tahap pengerjaan.',
        'Kalkulator biaya otomatis untuk paket cuci kiloan maupun satuan (dry clean).',
        'Database pelanggan terintegrasi dengan riwayat transaksi dan nomor kontak WhatsApp.',
        'Laporan pemasukan harian dan bulanan untuk memantau performa bisnis laundry.',
      ],
    },
    techStack: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'HTML5/CSS3'],
    role: {
      en: 'Fullstack Web Developer',
      id: 'Fullstack Web Developer',
    },
    images: ['/images/projects/laundry-1.jpg'],
    fallbackImages: ['/images/projects/laundry-1.svg'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'equipment-borrowing-system',
    title: 'Equipment Borrowing System',
    category: 'webapp',
    categoryBadge: {
      en: 'Web Information System',
      id: 'Sistem Informasi Web',
    },
    summary: {
      en: 'Asset lending and inventory request platform featuring multi-step approval workflows, return tracking, and activity audit logs.',
      id: 'Platform peminjaman aset dan inventaris yang dilengkapi alur persetujuan bertingkat, pelacakan pengembalian barang, dan log audit aktivitas.',
    },
    description: {
      en: 'A digital asset management system developed for institutional laboratories and schools to monitor the borrowing, reservation, and safe return of high-value equipment like cameras, routers, and lab devices.',
      id: 'Sistem manajemen aset digital yang dikembangkan untuk laboratorium dan institusi sekolah guna memantau pengajuan pinjam, reservasi, dan kondisi pengembalian alat berharga seperti kamera, router, dan perangkat lab.',
    },
    contribution: {
      en: 'Architected the relational database and multi-step approval workflow engine for institutional asset lending and return verification.',
      id: 'Merancang arsitektur basis data relasional dan sistem verifikasi persetujuan bertingkat untuk peminjaman aset institusi.',
    },
    problem: {
      en: 'School equipment and hardware items were often lent out without centralized records, resulting in unaccounted assets, broken devices returned without inspection, and missing accountability.',
      id: 'Peminjaman alat sekolah dan perangkat keras seringkali tidak tercatat rapi, mengakibatkan hilangnya aset berharga, kerusakan alat tanpa pertanggungjawaban, dan sulitnya verifikasi barang.',
    },
    solution: {
      en: 'Architected an approval workflow system where borrowing requests must be verified by lab supervisors, equipment conditions are checked upon checkout and return, and return deadlines are tracked digitally.',
      id: 'Merancang alur sistem verifikasi berjenjang di mana permohonan pinjam harus disetujui pembina lab, kondisi fisik alat diperiksa saat diambil dan dikembalikan, serta tenggat waktu dipantau otomatis.',
    },
    features: {
      en: [
        'Multi-step approval pipeline connecting students, lab custodians, and department heads.',
        'Asset inventory status tracking (Available, Reserved, Borrowed, Under Maintenance).',
        'Digital inspection checklist recording equipment condition before and after lending.',
        'Comprehensive activity audit trail logging every checkout and check-in timestamp.',
      ],
      id: [
        'Alur persetujuan bertingkat yang menghubungkan siswa, pengelola lab, dan kepala jurusan.',
        'Status ketersediaan inventaris (Tersedia, Dipesan, Dipinjam, Dalam Perbaikan).',
        'Daftar periksa kondisi fisik alat untuk mencatat kelengkapan sebelum dan sesudah dipinjam.',
        'Log audit aktivitas komprehensif yang merekam riwayat tanggal dan pihak peminjam.',
      ],
    },
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Workflow Engine'],
    role: {
      en: 'Web Developer & Database Designer',
      id: 'Web Developer & Database Designer',
    },
    images: ['/images/projects/borrowing-1.jpg'],
    fallbackImages: ['/images/projects/borrowing-1.svg'],
    liveUrl: '',
    githubUrl: '',
  },
];

export const certificatesData: Certificate[] = [
  {
    id: 'cert-bnsp-web-programmer',
    title: {
      en: 'Junior Web Programmer (Pemrogram Web Pratama) — BNSP',
      id: 'Sertifikasi Kompetensi Pemrogram Web Pratama (BNSP)',
    },
    issuer: 'BNSP & LSP Teknologi Digital',
    category: {
      en: 'National Competency Certification (BNSP)',
      id: 'Sertifikasi Kompetensi Nasional (BNSP)',
    },
    date: '06 Mei 2026',
    image: '/images/certificates/cert-ukk-rpl.jpg',
    fallbackImage: '/images/certificates/cert-ukk-rpl.svg',
    description: {
      en: 'Official National Competency Certification in Web Development (Junior Web Programmer / Pemrogram Web Pratama), conferred by Badan Nasional Sertifikasi Profesi (BNSP) through Lembaga Sertifikasi Profesi (LSP) Teknologi Digital.',
      id: 'Sertifikat Kompetensi resmi tingkat nasional pada bidang Pengembangan Website dengan kualifikasi Pemrogram Web Pratama (Junior Web Programmer), diterbitkan atas nama Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Teknologi Digital.',
    },
    skills: ['Pengembangan Website', 'Junior Web Programmer', 'Frontend & Backend', 'MySQL Database', 'REST APIs', 'Clean Code'],
    credentialId: '62090 2513 3 0180319 2026',
    registrationId: 'TIK 1565 65008 2026',
    verified: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend',
      id: 'Frontend',
    },
    description: {
      en: 'Responsive, accessible, and scalable UI engineering with modern component architectures.',
      id: 'Pengembangan antarmuka web responsif, aksesibel, dan terstruktur rapi.',
    },
    skills: [
      { name: 'React JS', level: 'Advanced' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Vite', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    title: {
      en: 'Backend',
      id: 'Backend',
    },
    description: {
      en: 'Server-side business logic, automated routines, and RESTful API integrations.',
      id: 'Logika bisnis server, otomasi pemrosesan, dan integrasi RESTful API.',
    },
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
    ],
  },
  {
    id: 'database',
    title: {
      en: 'Database',
      id: 'Database',
    },
    description: {
      en: 'Relational data modeling, schema normalization, and structured SQL operations.',
      id: 'Pemodelan data relasional, normalisasi skema, dan operasional SQL terstruktur.',
    },
    skills: [
      { name: 'MySQL', level: 'Advanced' },
    ],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools',
      id: 'Tools',
    },
    description: {
      en: 'Essential version control, code editors, local environments, and prototyping.',
      id: 'Kontrol versi, editor kode, lingkungan lokal, dan purwarupa desain.',
    },
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Mastery' },
      { name: 'XAMPP', level: 'Advanced' },
      { name: 'Figma', level: 'Advanced' },
    ],
  },
];

export const githubRepos: GithubRepo[] = [
  {
    name: 'framonn/kia-attendance-system',
    description: 'Automated Employee Attendance Data Processing and Timesheet Recapitulation System engineered in collaboration with PT. Kokoh Inti Arebama (Gresik Hub).',
    language: 'Python / PHP',
    languageColor: '#3572A5',
    stars: 14,
    forks: 3,
    url: 'https://github.com/framonn',
    topics: ['python', 'attendance-system', 'data-processing', 'timesheets', 'mysql', 'gresik-hub'],
  },
  {
    name: 'framonn/mbb-finance-client',
    description: 'Corporate financial transaction and general ledger frontend modules built with React JS, TypeScript, and Axios interceptors.',
    language: 'TypeScript / React',
    languageColor: '#3178c6',
    stars: 8,
    forks: 2,
    url: 'https://github.com/framonn',
    topics: ['react', 'typescript', 'axios', 'finance-module', 'tailwind-css'],
  },
  {
    name: 'framonn/kanto-mobile-ui',
    description: 'Mobile UI/UX design system and interactive Figma prototype for digital school canteen ordering with reward coins.',
    language: 'Figma / UI/UX',
    languageColor: '#f24e1e',
    stars: 16,
    forks: 4,
    url: 'https://github.com/framonn',
    topics: ['ui-ux', 'figma', 'mobile-first', 'canteen-app', 'prototyping'],
  },
  {
    name: 'framonn/presensi-webcam-app',
    description: 'Fullstack school attendance verification system with live photo capture, GPS coordinates, and administrative analytics.',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 15,
    forks: 5,
    url: 'https://github.com/framonn',
    topics: ['express', 'react', 'webcam-verification', 'mysql', 'edtech'],
  },
];
