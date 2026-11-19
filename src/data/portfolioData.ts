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
    title: 'Employee Attendance Data Processing System — PT. Kokoh Inti Arebama (Gresik)',
    category: 'industry',
    categoryBadge: {
      en: 'Tugas Akhir • Industry Collaboration (Gresik)',
      id: 'Tugas Akhir • Kolaborasi Industri (Gresik)',
    },
    summary: {
      en: 'An automated employee attendance data processing and timesheet recapitulation system engineered in collaboration with PT. Kokoh Inti Arebama (Gresik distribution hub) to streamline shift calculations and monthly payroll readiness.',
      id: 'Sistem pengolahan dan rekapitulasi data absensi karyawan otomatis yang dibangun dalam kolaborasi dengan PT. Kokoh Inti Arebama (hub distribusi Gresik) untuk menyederhanakan kalkulasi shift dan kesiapan penggajian bulanan.',
    },
    description: {
      en: 'Developed in partnership with PT. Kokoh Inti Arebama for their Gresik distribution hub, this system solves the challenge of manual attendance logging across multi-shift staff. Built as a comprehensive Capstone Project (Tugas Akhir), the platform ingests raw punch logs, validates presence, computes precise work hours and overtime, and delivers verified attendance summaries for HR.',
      id: 'Dikembangkan melalui kemitraan dengan PT. Kokoh Inti Arebama untuk pusat distribusi Gresik, sistem ini menjawab tantangan rekap presensi manual pada staf dengan berbagai jadwal shift kerja. Dibangun sebagai Tugas Akhir komprehensif, platform ini memproses log data mentah mesin absensi, memvalidasi kehadiran, menghitung jam kerja dan lembur secara presisi, serta menyajikan rekap terverifikasi untuk HR.',
    },
    problem: {
      en: 'The Gresik operational facility managed complex shift rotations and extensive staff schedules using manual sign-in sheets and disconnected spreadsheets. Reconciling overtime, late arrivals, and night shifts required days of manual computation and was vulnerable to calculation discrepancies.',
      id: 'Fasilitas operasional Gresik mengelola rotasi shift kerja yang padat menggunakan lembar tanda tangan manual dan spreadsheet terpisah. Rekonsiliasi lembur, keterlambatan, dan jam shift malam memakan waktu berhari-hari serta rawan terjadi selisih perhitungan.',
    },
    solution: {
      en: 'Architected an automated attendance processing engine with Python and web technologies that digests raw clock-in logs, reconciles shift rosters, computes overtime multipliers atomically, and outputs audit-ready monthly summaries via a modern web interface.',
      id: 'Merancang mesin pemroses data absensi otomatis menggunakan Python dan teknologi web yang mengolah data log absensi, mencocokkan jadwal shift kerja, menghitung kelipatan lembur secara atomik, dan menyajikan rekap bulanan siap audit melalui antarmuka web modern.',
    },
    features: {
      en: [
        'Automated parsing and sanitization of raw biometric and machine attendance logs with Python.',
        'Intelligent shift-matching engine handling regular, weekend, and rotating night shifts.',
        'Precise overtime and tardiness penalty calculation rules with customizable thresholds.',
        'Interactive supervisor dashboard with daily attendance percentage indicators.',
        'One-click export of payroll-ready attendance recaps in Excel and PDF formats.',
      ],
      id: [
        'Pemrosesan dan pembersihan otomatis data log mentah dari mesin presensi biometrik dengan Python.',
        'Mesin pencocokan shift cerdas untuk jadwal reguler, akhir pekan, maupun shift malam bergilir.',
        'Kalkulasi lembur dan penalti keterlambatan yang presisi dengan parameter aturan yang fleksibel.',
        'Dashboard interaktif supervisor dengan indikator persentase kehadiran harian.',
        'Ekspor satu-klik laporan rekapitulasi kehadiran siap penggajian format Excel dan PDF.',
      ],
    },
    techStack: ['Python', 'PHP', 'MySQL', 'Data Processing', 'REST API', 'Tailwind CSS'],
    role: {
      en: 'Software & Data Processing Developer (Tugas Akhir)',
      id: 'Pengembang Perangkat Lunak & Pengolah Data (Tugas Akhir)',
    },
    partner: 'PT. Kokoh Inti Arebama (Gresik Distribution Hub)',
    images: ['/images/projects/wms-kia-1.jpg', '/images/projects/wms-kia-2.jpg'],
    fallbackImages: ['/images/projects/wms-kia-1.svg', '/images/projects/wms-kia-2.svg'],
    featured: true,
  },
  {
    id: 'mbb-financial-system',
    title: 'Corporate Financial Module & Information System — PT. Mahakam Berkah Bersama',
    category: 'industry',
    categoryBadge: {
      en: 'PKL (Internship) • Frontend Engineering',
      id: 'PKL (Magang) • Frontend Engineering',
    },
    summary: {
      en: 'Frontend architecture and API integration for internal corporate financial transaction and reporting modules developed during internship at PT. Mahakam Berkah Bersama.',
      id: 'Arsitektur frontend dan integrasi REST API untuk modul pencatatan transaksi dan pelaporan keuangan internal perusahaan yang dikembangkan selama magang di PT. Mahakam Berkah Bersama.',
    },
    description: {
      en: 'During the internship (Praktik Kerja Lapangan) at PT. Mahakam Berkah Bersama, contributed as a Frontend Developer to build clean, typed, and resilient user interface modules for corporate financial ledgering, expense disbursements, and fiscal reporting.',
      id: 'Selama masa Praktik Kerja Lapangan (PKL) di PT. Mahakam Berkah Bersama, berkontribusi sebagai Frontend Developer membangun modul antarmuka yang rapi, bertipe aman, dan andal untuk pembukuan transaksi keuangan, pencairan biaya, dan laporan fiskal perusahaan.',
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
    featured: true,
  },
  {
    id: 'presensi-school-app',
    title: 'Presensi — Digital School Attendance Web App',
    category: 'webapp',
    categoryBadge: {
      en: 'Fullstack Web App • EdTech',
      id: 'Aplikasi Web Fullstack • EdTech',
    },
    summary: {
      en: 'A modern web-based attendance platform featuring webcam photo-verified check-ins, location validation, and an administrative dashboard for automated attendance recap.',
      id: 'Platform absensi sekolah berbasis web modern dengan verifikasi swafoto kamera langsung, validasi kehadiran, dan dashboard admin untuk rekapitulasi kehadiran otomatis.',
    },
    description: {
      en: 'Designed and built to streamline daily school attendance tracking for students and faculty. The platform prevents proxy attendance by capturing live webcam verification snapshots upon check-in and provides automated reporting for school administration.',
      id: 'Dirancang dan dibangun untuk menyederhanakan pencatatan absensi harian siswa dan guru. Platform ini mencegah titip absen melalui tangkapan kamera langsung saat jam masuk dan menyediakan rekap otomatis bagi pihak sekolah.',
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
    featured: true,
  },
  {
    id: 'kanto-digital-canteen',
    title: 'KantO – Digital Canteen Mobile App Design & Prototype',
    category: 'uiux',
    categoryBadge: {
      en: 'Mobile UI/UX & Interactive Design',
      id: 'Mobile UI/UX & Desain Interaktif',
    },
    summary: {
      en: 'Mobile UI/UX design and interactive Figma prototype for a digital school cafeteria ordering ecosystem, featuring queue reduction flows and student reward points.',
      id: 'Desain produk UI/UX mobile dan purwarupa interaktif Figma untuk ekosistem kantin sekolah digital, dirancang untuk memangkas antrean dan meningkatkan kepuasan siswa.',
    },
    description: {
      en: 'Crafted as a comprehensive mobile-first UI/UX case study in Figma. KantO envisions a cashless, queue-free cafeteria experience tailored for students during fast-paced school breaks, featuring pre-ordering flows, real-time kitchen ticket tracking, and gamified student rewards.',
      id: 'Dibuat sebagai studi kasus desain produk UI/UX mobile-first komprehensif di Figma. KantO mengusung konsep kantin digital non-tunai tanpa antrean yang dirancang khusus untuk kenyamanan siswa saat jam istirahat, lengkap dengan alur pre-order, tiket dapur real-time, dan sistem poin reward.',
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
  },
  {
    id: 'batik-sweety-mobile',
    title: 'Batik Sweety — Interactive Cultural Heritage App',
    category: 'uiux',
    categoryBadge: {
      en: 'Mobile UI/UX & Interactive App',
      id: 'Mobile UI/UX & Aplikasi Edukatif',
    },
    summary: {
      en: 'Interactive educational mobile app introducing Indonesian batik heritage to teenagers through visual storytelling and gamified quizzes.',
      id: 'Aplikasi edukasi mobile interaktif yang memperkenalkan warisan batik Nusantara kepada generasi muda melalui visual storytelling dan kuis interaktif.',
    },
    description: {
      en: 'Designed with a mobile-first philosophy to bridge cultural preservation with modern Gen-Z visual aesthetics. Features interactive motif explorations, philosophical background stories, and gamified quizzes.',
      id: 'Dirancang dengan pendekatan mobile-first untuk menjembatani pelestarian budaya tradisional dengan estetika visual generasi muda. Memuat ensiklopedia motif batik, makna filosofis, dan kuis edukatif berbasis poin.',
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
  },
  {
    id: 'laundry-management-system',
    title: 'Laundry Management System',
    category: 'webapp',
    categoryBadge: {
      en: 'Web Application • Operations',
      id: 'Aplikasi Web • Manajemen Operasional',
    },
    summary: {
      en: 'Web-based operations manager for organizing customer profiles, order progress tracking, and financial transaction logs.',
      id: 'Aplikasi operasional berbasis web untuk mengelola data pelanggan, pelacakan proses cuci secara bertahap, dan pencatatan transaksi kasir laundry.',
    },
    description: {
      en: 'Engineered to help small-and-medium laundry enterprises handle daily order volumes efficiently. Features stage progression pipelines, customer weight calculations, and printable receipts.',
      id: 'Direkayasa untuk membantu usaha laundry mengelola volume pesanan harian secara tertata. Dilengkapi pelacakan status bertahap, kalkulasi berat pakaian, dan pencetakan nota pelanggan.',
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
    techStack: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'HTML5/CSS3'],
    role: {
      en: 'Fullstack Web Developer',
      id: 'Fullstack Web Developer',
    },
    images: ['/images/projects/laundry-1.jpg'],
    fallbackImages: ['/images/projects/laundry-1.svg'],
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
    techStack: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'Workflow Engine'],
    role: {
      en: 'Web Developer & Database Designer',
      id: 'Web Developer & Database Designer',
    },
    images: ['/images/projects/borrowing-1.jpg'],
    fallbackImages: ['/images/projects/borrowing-1.svg'],
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
    id: 'backend',
    title: {
      en: 'Python, Backend & Data Processing',
      id: 'Python, Backend & Pengolahan Data',
    },
    description: {
      en: 'Core technical mastery in Python logic, automated data pipelines, REST endpoints, and relational databases.',
      id: 'Penguasaan teknis utama pemrograman Python, pipeline data otomatis, endpoint REST, dan sistem basis data.',
    },
    skills: [
      { name: 'Python (Primary Focus)', level: 'Advanced' },
      { name: 'Data Processing & Logic', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Node.js & Express', level: 'Proficient' },
      { name: 'Database Architecture', level: 'Advanced' },
    ],
  },
  {
    id: 'frontend',
    title: {
      en: 'React & Frontend Architecture',
      id: 'React & Arsitektur Frontend',
    },
    description: {
      en: 'Building responsive, fluid, and scalable UI architectures with React, TypeScript, and modern standards.',
      id: 'Membangun antarmuka pengguna yang responsif, cepat, dan terstruktur rapi dengan React dan TypeScript.',
    },
    skills: [
      { name: 'React JS', level: 'Advanced' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Mastery' },
      { name: 'Bootstrap', level: 'Proficient' },
      { name: 'Axios & Fetch', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Proficient' },
    ],
  },
  {
    id: 'uiux',
    title: {
      en: 'UI/UX & Interactive Design',
      id: 'UI/UX & Desain Interaktif',
    },
    description: {
      en: 'Bridging design thinking with code to build intuitive and accessible experiences.',
      id: 'Menghubungkan pola pikir desain dengan kode untuk menciptakan pengalaman memikat.',
    },
    skills: [
      { name: 'Figma', level: 'Advanced' },
      { name: 'Wireframing', level: 'Advanced' },
      { name: 'Interactive Prototyping', level: 'Advanced' },
      { name: 'Design Systems', level: 'Proficient' },
      { name: 'Responsive Layouts', level: 'Mastery' },
      { name: 'Micro-Interactions', level: 'Proficient' },
    ],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools, Environment & DevOps',
      id: 'Alat, Lingkungan & Alur Kerja',
    },
    description: {
      en: 'Modern developer toolchains, version control, and operating systems.',
      id: 'Peralatan pengembangan modern, kontrol versi, dan sistem operasi.',
    },
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Visual Studio Code', level: 'Mastery' },
      { name: 'Linux (Arch Linux)', level: 'Proficient' },
      { name: 'Windows', level: 'Advanced' },
      { name: 'XAMPP / Apache', level: 'Advanced' },
      { name: 'Postman / API Client', level: 'Advanced' },
      { name: 'Vite & Bundlers', level: 'Advanced' },
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
