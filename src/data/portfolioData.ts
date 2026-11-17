import type { Project, Experience, SkillCategory, GithubRepo } from '../types';

export const personalInfo = {
  fullName: 'Muhammad Kevin Febrian',
  displayName: 'Febri',
  title: {
    en: 'Fullstack Web Developer & UI-Focused Software Engineer',
    id: 'Fullstack Web Developer & Software Engineer Berfokus pada UI/UX',
  },
  location: 'Jabodetabek, Indonesia',
  email: 'hello@febri.dev',
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
      en: 'Fullstack / Software Developer',
      id: 'Fullstack / Software Developer',
    },
    company: 'PT. Kokoh Inti Arebama (PT. KIA)',
    location: 'Jakarta / Jabodetabek, Indonesia',
    period: {
      en: 'Final Project Phase (Tugas Akhir)',
      id: 'Fase Tugas Akhir Kejuruan',
    },
    summary: {
      en: 'Collaborated with PT. Kokoh Inti Arebama (leading building materials & ceramic tiles distributor) to engineer an end-to-end web-based Warehouse Management System (WMS) that replaced error-prone manual spreadsheets and digitized stock auditing.',
      id: 'Berkolaborasi dengan PT. Kokoh Inti Arebama (distributor bahan bangunan & keramik terkemuka) untuk merekayasa Warehouse Management System (WMS) berbasis web yang mengotomatisasi pencatatan inventaris dan meminimalkan kesalahan manual.',
    },
    achievements: {
      en: [
        'Engineered an end-to-end inbound and outbound goods logging pipeline with automated stock count synchronization in MySQL.',
        'Designed an intuitive, high-visibility dashboard UI allowing warehouse supervisors to monitor pallet counts and bin locations in real time.',
        'Implemented strict role-based access control (RBAC) separating warehouse pickers, receiving clerks, and management auditors.',
        'Reduced manual record discrepancy risks by introducing structured validation checks before inventory commits.',
      ],
      id: [
        'Merekayasa alur pencatatan barang masuk (inbound) dan keluar (outbound) dengan sinkronisasi inventaris otomatis di MySQL.',
        'Merancang antarmuka dashboard dengan visibilitas tinggi agar supervisor gudang dapat memantau jumlah palet dan lokasi rak secara real-time.',
        'Mengimplementasikan role-based access control (RBAC) untuk memisahkan hak akses staf gudang, petugas penerimaan, dan auditor.',
        'Meminimalkan risiko ketidaksesuaian stok manual melalui validasi terstruktur sebelum data dicatat ke database.',
      ],
    },
    techStack: ['Fullstack Web', 'PHP / Node.js', 'MySQL', 'REST API', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
    icon: 'warehouse',
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
      en: 'Tugas Akhir • Industry Collaboration',
      id: 'Tugas Akhir • Kolaborasi Industri',
    },
    summary: {
      en: 'A web-based warehouse inventory and goods tracking system built in collaboration with PT. Kokoh Inti Arebama to digitize inbound/outbound logistics and provide real-time stock visibility.',
      id: 'Sistem manajemen pergudangan berbasis web yang dibangun dalam kolaborasi dengan PT. Kokoh Inti Arebama untuk mendigitalisasi logistik barang masuk/keluar dan menyediakan visibilitas stok real-time.',
    },
    description: {
      en: 'PT. Kokoh Inti Arebama is an established Indonesian distributor of premium building materials, ceramic tiles, and sanitary wares. This system was engineered as a comprehensive Capstone Project (Tugas Akhir) to modernize the distribution center’s inventory operations, replacing paper logs and decentralized spreadsheets with an atomic, transactional web application.',
      id: 'PT. Kokoh Inti Arebama merupakan distributor bahan bangunan, keramik, dan perlengkapan saniter terkemuka di Indonesia. Sistem ini direkayasa sebagai Tugas Akhir komprehensif untuk memodernisasi operasi inventaris pusat distribusi, menggantikan pencatatan manual berbasis kertas dengan aplikasi web terstruktur dan transaksional.',
    },
    problem: {
      en: 'The warehouse facility previously relied on manual paperwork and offline spreadsheets for tracking pallet movements and inbound/outbound manifests. This resulted in delayed inventory counts, vulnerability to human data entry mistakes, and a lack of real-time visibility for operational supervisors.',
      id: 'Fasilitas pergudangan sebelumnya mengandalkan pencatatan kertas dan spreadsheet terpisah untuk mencatat pergerakan palet serta dokumen surat jalan. Hal ini menyebabkan keterlambatan rekap stok, risiko kesalahan input staf, dan ketiadaan pemantauan real-time bagi supervisor.',
    },
    solution: {
      en: 'Architected a centralized Warehouse Management System featuring digitized receipt generation, barcode verification workflows, bin/rack slot tracking, atomic database transactions in MySQL, and an executive overview dashboard with instant reporting.',
      id: 'Merancang Warehouse Management System terpusat dengan penerbitan surat jalan digital, alur validasi kode barcode, pelacakan slot rak penyimpanan, transaksi MySQL atomik, serta dashboard eksekutif untuk pemantauan instan.',
    },
    features: {
      en: [
        'Inbound & outbound logistics logging with live pallet and carton count calculation.',
        'Real-time stock level monitoring with automated minimum inventory threshold warnings.',
        'Multi-tiered role-based access control (Admin, Warehouse Supervisor, Receiving Staff).',
        'Audit-ready transaction history logs tracking every stock movement by timestamp and user.',
        'Exportable monthly and weekly inventory reports formatted for company audit reviews.',
      ],
      id: [
        'Pencatatan logistik barang masuk dan keluar dengan perhitungan otomatis jumlah karton dan palet.',
        'Pemantauan stok real-time dilengkapi notifikasi peringatan saat persediaan mendekati ambang minimum.',
        'Hak akses berlapis (Admin, Supervisor Gudang, Staf Penerimaan Barang).',
        'Riwayat audit terperinci yang mencatat setiap mutasi stok berdasarkan waktu dan akun staf.',
        'Fitur ekspor laporan inventaris mingguan dan bulanan siap cetak untuk keperluan audit manajemen.',
      ],
    },
    techStack: ['Fullstack Web', 'PHP / Node.js', 'MySQL', 'REST API', 'Tailwind CSS', 'JavaScript'],
    role: {
      en: 'Lead Software & Fullstack Developer (Tugas Akhir)',
      id: 'Lead Software & Fullstack Developer (Tugas Akhir)',
    },
    partner: 'PT. Kokoh Inti Arebama (Building Materials Distributor)',
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
    title: 'KantO – Digital School Canteen Platform',
    category: 'webapp',
    categoryBadge: {
      en: 'Fullstack & Product Design',
      id: 'Fullstack & Desain Produk',
    },
    summary: {
      en: 'Digital canteen ordering platform streamlining cafeteria menus, orders, ratings, reward points, and sales analytics.',
      id: 'Platform pemesanan kantin digital yang menyederhanakan pemesanan menu makanan sekolah, sistem rating, poin reward, dan analitik penjualan kantin.',
    },
    description: {
      en: 'An all-in-one digital ordering ecosystem designed for high-traffic school lunch breaks. Students pre-order meals to skip queue lines, while cafeteria vendors manage orders on an incoming kitchen ticket dashboard.',
      id: 'Ekosistem pemesanan digital all-in-one yang dirancang untuk mengatasi antrean padat kantin saat jam istirahat sekolah. Siswa dapat memesan lebih awal dan pedagang menerima pesanan lewat tiket dapur terstruktur.',
    },
    problem: {
      en: 'Short lunch breaks often led to chaotic cafeteria queues, delayed student lunches, and unorganized cash reconciliation for independent canteen food stalls.',
      id: 'Waktu istirahat yang singkat seringkali menyebabkan antrean kantin berdesakan, siswa kehabisan waktu makan, serta pembukuan uang tunai yang tidak teratur bagi pedagang kantin.',
    },
    solution: {
      en: 'Developed an engaging ordering app where students browse dynamic stall menus, customize orders, earn student reward coins, and receive digital pickup tokens for seamless collection.',
      id: 'Mengembangkan aplikasi pemesanan interaktif di mana siswa dapat menjelajahi menu gerai, menyesuaikan pesanan, mengumpulkan koin reward, dan mendapatkan kode pengambilan pesanan yang rapi.',
    },
    features: {
      en: [
        'Multi-stall digital menu catalog with live stock status and customer review ratings.',
        'Shopping cart & scheduled pickup slot selection to avoid peak breaktime crowding.',
        'Vendor kitchen board with incoming, preparing, and ready-to-pickup stage toggles.',
        'Gamified reward coins system encouraging student engagement and loyalty.',
      ],
      id: [
        'Katalog menu digital multi-gerai dengan status stok dan ulasan rating siswa.',
        'Keranjang belanja dan pemilihan slot jam ambil makanan untuk menghindari kerumunan.',
        'Papan pesanan penjual dengan status bertahap (Diterima, Dimasak, Siap Ambil).',
        'Sistem poin reward menarik untuk meningkatkan loyalitas transaksi siswa.',
      ],
    },
    techStack: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Responsive UI'],
    role: {
      en: 'Fullstack Developer & System Architect',
      id: 'Fullstack Developer & Arsitek Sistem',
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

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend Development',
      id: 'Pengembangan Frontend',
    },
    description: {
      en: 'Crafting responsive, fluid, and scalable UI architectures with modern standards.',
      id: 'Membangun antarmuka pengguna yang responsif, cepat, dan terstruktur rapi.',
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
    id: 'backend',
    title: {
      en: 'Backend & Database',
      id: 'Backend & Basis Data',
    },
    description: {
      en: 'Engineering reliable REST endpoints, server-side business logic, and relational schemas.',
      id: 'Merancang endpoint REST yang andal, logika bisnis server, dan skema database.',
    },
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'Python (Flask)', level: 'Intermediate' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Database Normalization', level: 'Advanced' },
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
    name: 'framonn/wms-kokoh-arebama',
    description: 'Digital Warehouse Management System (WMS) engineered in collaboration with PT. Kokoh Inti Arebama for pallet & stock logistics tracking.',
    language: 'TypeScript / PHP',
    languageColor: '#3178c6',
    stars: 12,
    forks: 3,
    url: 'https://github.com/framonn',
    topics: ['wms', 'logistics', 'mysql', 'inventory-management', 'capstone-project'],
  },
  {
    name: 'framonn/mbb-finance-client',
    description: 'Corporate financial transaction and general ledger frontend modules built with React JS, TypeScript, and Axios interceptors.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 8,
    forks: 2,
    url: 'https://github.com/framonn',
    topics: ['react', 'typescript', 'axios', 'finance-module', 'tailwind-css'],
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
  {
    name: 'framonn/batik-sweety-ui',
    description: 'Interactive cultural heritage and gamified mobile UI design system introducing Indonesian Batik patterns to teenagers.',
    language: 'Design / Figma',
    languageColor: '#f24e1e',
    stars: 19,
    forks: 4,
    url: 'https://github.com/framonn',
    topics: ['ui-ux', 'figma', 'design-system', 'mobile-first', 'batik-indonesia'],
  },
];
