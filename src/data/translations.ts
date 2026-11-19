export interface TranslationContent {
  nav: {
    about: string;
    experience: string;
    projects: string;
    certificates: string;
    skills: string;
    contact: string;
    resume: string;
    available: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    nickname: string;
    role: string;
    tagline: string;
    bio: string;
    exploreCta: string;
    contactCta: string;
    githubCta: string;
    statProjects: string;
    statCollaboration: string;
    statCode: string;
    floatingBadge1: string;
    floatingBadge2: string;
    floatingBadge3: string;
  };
  about: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    bentoEduTitle: string;
    bentoEduSubtitle: string;
    bentoIndustryTitle: string;
    bentoIndustrySubtitle: string;
    bentoFocusTitle: string;
    bentoFocusSubtitle: string;
    bentoDesignTitle: string;
    bentoDesignSubtitle: string;
    locationLabel: string;
    locationValue: string;
    statusLabel: string;
    statusValue: string;
    degreeLabel: string;
    degreeValue: string;
  };
  experience: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterInternship: string;
    filterCapstone: string;
    responsibilitiesLabel: string;
    technologiesLabel: string;
    partnerLabel: string;
  };
  projects: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterIndustry: string;
    filterWebapp: string;
    filterUiux: string;
    viewCaseStudy: string;
    liveDemo: string;
    viewCode: string;
    confidentialCode: string;
    modal: {
      roleLabel: string;
      clientLabel: string;
      techLabel: string;
      problemTitle: string;
      solutionTitle: string;
      featuresTitle: string;
      galleryTitle: string;
      closeModal: string;
      nextImage: string;
      prevImage: string;
    };
  };
  certificates: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    clickToEnlarge: string;
    verifiedBadge: string;
    issuedBy: string;
    issueDate: string;
    credentialCategory: string;
    closeLightbox: string;
    viewOriginal: string;
    singleFeaturedNote: string;
  };
  skills: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    frontendTitle: string;
    frontendDesc: string;
    backendTitle: string;
    backendDesc: string;
    designTitle: string;
    designDesc: string;
    toolsTitle: string;
    toolsDesc: string;
  };
  github: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    profileCardTitle: string;
    username: string;
    visitGithub: string;
    publicRepos: string;
    activeCommit: string;
    pinnedTitle: string;
    openSourceQuote: string;
  };
  contact: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    sendMessage: string;
    sending: string;
    sendSuccess: string;
    sendError: string;
    quickEmailTitle: string;
    copyEmail: string;
    copiedEmail: string;
    socialTitle: string;
    githubDesc: string;
    instagramDesc: string;
    locationTitle: string;
    locationDesc: string;
  };
  footer: {
    tagline: string;
    rights: string;
    craftedWith: string;
    backToTop: string;
    navigation: string;
  };
}

export const translations: Record<'EN' | 'ID', TranslationContent> = {
  EN: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      certificates: 'Certificates',
      skills: 'Skills',
      contact: 'Contact',
      resume: 'Resume',
      available: 'Available for Work',
    },
    hero: {
      badge: 'Software Engineering Student • Available for Projects',
      greeting: "Hi, I'm",
      name: 'Muhammad Kevin Febrian',
      nickname: 'Febri',
      role: 'Software Engineering Student & Fullstack Developer',
      tagline: 'Crafting interactive software & web experiences with clean code.',
      bio: 'Software Engineering (RPL) student and developer specialized in Python architectures, modern React ecosystems, REST API design, and structured databases. Proven in developing industry systems and intuitive UI/UX prototypes.',
      exploreCta: 'Explore Projects',
      contactCta: 'Get In Touch',
      githubCta: 'GitHub Profile',
      statProjects: 'Industry & UI Projects',
      statCollaboration: 'Industry Partners',
      statCode: 'Python & Clean Code',
      floatingBadge1: 'Fullstack Dev',
      floatingBadge2: 'Python',
      floatingBadge3: 'UI/UX',
    },
    about: {
      sectionBadge: 'Behind the Code',
      title: 'Bridging Engineering Logic with Visual Craft',
      subtitle: 'A Software Engineering student passionate about turning complex system requirements into scalable code and seamless digital products.',
      storyTitle: 'Who I Am',
      storyP1: 'I am Muhammad Kevin Febrian (Febri), a vocational Software Engineering (Rekayasa Perangkat Lunak / RPL) student based in Depok, Indonesia. My journey in tech centers around building reliable, performant software solutions using Python and modern web technologies to solve real operational challenges.',
      storyP2: 'Having collaborated with established industry partners like PT. Kokoh Inti Arebama (Gresik distribution hub) on an automated employee attendance data processing system and completed an intensive internship at PT. Mahakam Berkah Bersama, I bring hands-on experience in real-world workflows, database integrity, and high-standard UI execution.',
      bentoEduTitle: 'Software Engineering (RPL)',
      bentoEduSubtitle: 'Rigorous vocational grounding in algorithmic logic, OOP, database modeling, and SDLC.',
      bentoIndustryTitle: 'Industry-Tested Experience',
      bentoIndustrySubtitle: 'Delivered production modules for corporate finance and automated attendance processing.',
      bentoFocusTitle: 'Core Technical Focus: Python',
      bentoFocusSubtitle: 'Specialized in Python programming and data processing, modern React frontend architectures, REST API integrations, and relational database systems.',
      bentoDesignTitle: 'UI/UX & Interactive Design',
      bentoDesignSubtitle: 'Deep attention to micro-interactions, responsive layouts, accessibility, and visual harmony.',
      locationLabel: 'Location',
      locationValue: 'Depok, Indonesia',
      statusLabel: 'Status',
      statusValue: 'Student & Active Developer',
      degreeLabel: 'Status / Field',
      degreeValue: 'Software Engineering Student (RPL)',
    },
    experience: {
      sectionBadge: 'Milestones & Career',
      title: 'Industry Experience & Milestones',
      subtitle: 'Direct track record working with established companies and real-world stakeholder requirements.',
      filterAll: 'All Milestones',
      filterInternship: 'Internship (PKL)',
      filterCapstone: 'Capstone Project (Tugas Akhir)',
      responsibilitiesLabel: 'Key Deliverables & Impact',
      technologiesLabel: 'Technologies Deployed',
      partnerLabel: 'Corporate Partner',
    },
    projects: {
      sectionBadge: 'Curated Works',
      title: 'Featured Projects & Case Studies',
      subtitle: 'From industrial attendance data processing systems to interactive mobile product designs.',
      filterAll: 'All Works',
      filterIndustry: 'Industry & Capstone',
      filterWebapp: 'Web Applications',
      filterUiux: 'UI/UX & Mobile',
      viewCaseStudy: 'View Case Study',
      liveDemo: 'Live Demo',
      viewCode: 'Source Code',
      confidentialCode: 'Proprietary Codebase',
      modal: {
        roleLabel: 'Role & Responsibility',
        clientLabel: 'Partner / Context',
        techLabel: 'Tech Stack',
        problemTitle: 'The Challenge & Problem',
        solutionTitle: 'Engineered Solution',
        featuresTitle: 'Key Architecture & Features',
        galleryTitle: 'System Screenshots & Previews',
        closeModal: 'Close',
        nextImage: 'Next image',
        prevImage: 'Previous image',
      },
    },
    certificates: {
      sectionBadge: 'Credentials & Mastery',
      title: 'Certificates & Credentials',
      subtitle: 'Verified technical competency and certification.',
      clickToEnlarge: 'Click to Enlarge',
      verifiedBadge: 'Verified Credential',
      issuedBy: 'Issuing Organization',
      issueDate: 'Issued',
      credentialCategory: 'Category',
      closeLightbox: 'Close',
      viewOriginal: 'Inspect High-Resolution',
      singleFeaturedNote: 'Featured Official Certification',
    },
    skills: {
      sectionBadge: 'Capabilities',
      title: 'Technical Arsenal & Skillset',
      subtitle: 'Balanced expertise across the modern web stack, database systems, and design tools.',
      frontendTitle: 'Frontend Development',
      frontendDesc: 'Building fluid, responsive, and accessible user interfaces with clean component architectures.',
      backendTitle: 'Backend & Database',
      backendDesc: 'Architecting RESTful endpoints, relational schemas, and server-side logic.',
      designTitle: 'UI/UX & Design Systems',
      designDesc: 'Translating concepts into interactive prototypes, wireframes, and design guidelines in Figma.',
      toolsTitle: 'Tools, OS & DevOps',
      toolsDesc: 'Modern developer workflow utilities, version control, and Unix/Windows environments.',
    },
    github: {
      sectionBadge: 'Open Source & Code',
      title: 'GitHub & Coding Presence',
      subtitle: 'Explore public repositories, code experiments, and software engineering contributions.',
      profileCardTitle: 'GitHub Profile',
      username: '@framonn',
      visitGithub: 'Visit GitHub Profile',
      publicRepos: 'Public Repositories',
      activeCommit: 'Continuous Code Exploration',
      pinnedTitle: 'Selected Repositories',
      openSourceQuote: '"Writing clean, maintainable code is an ongoing craft of discipline and empathy for future maintainers."',
    },
    contact: {
      sectionBadge: 'Let’s Connect',
      title: 'Ready to build something impactful?',
      subtitle: 'Whether you have a job opportunity, freelance project, or simply want to connect—my inbox is always open.',
      formName: 'Your Name',
      formNamePlaceholder: 'e.g., Alex Pratama',
      formEmail: 'Email Address',
      formEmailPlaceholder: 'alex@company.com',
      formSubject: 'Subject',
      formSubjectPlaceholder: 'Project Inquiry / Opportunity',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell me about your project, timeline, or position...',
      sendMessage: 'Send Message',
      sending: 'Transmitting...',
      sendSuccess: 'Message dispatched! I will get back to you shortly.',
      sendError: 'Please fill in all required fields.',
      quickEmailTitle: 'Direct Email',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied to clipboard!',
      socialTitle: 'Social & Developer Links',
      githubDesc: 'Explore source code and open repos',
      instagramDesc: 'Personal lifestyle & creative updates',
      locationTitle: 'Based In',
      locationDesc: 'Depok, Jawa Barat, Indonesia (GMT+7)',
    },
    footer: {
      tagline: 'Crafting interactive web experiences with clean code & thoughtful design.',
      rights: 'All rights reserved.',
      craftedWith: 'Designed & Engineered with React, TypeScript & Tailwind CSS.',
      backToTop: 'Back to top',
      navigation: 'Quick Links',
    },
  },

  ID: {
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      certificates: 'Sertifikat',
      skills: 'Keahlian',
      contact: 'Kontak',
      resume: 'Resume',
      available: 'Pelajar & Siap Berkontribusi',
    },
    hero: {
      badge: 'Pelajar Rekayasa Perangkat Lunak • Terbuka untuk Proyek & Magang',
      greeting: 'Halo, Saya',
      name: 'Muhammad Kevin Febrian',
      nickname: 'Febri',
      role: 'Pelajar Rekayasa Perangkat Lunak (RPL) & Fullstack Developer',
      tagline: 'Menciptakan perangkat lunak dan pengalaman web interaktif dengan kode bersih.',
      bio: 'Pelajar / Siswa Rekayasa Perangkat Lunak (RPL) dan developer yang menguasai arsitektur Python, ekosistem modern React, REST API, dan perancangan basis data terstruktur. Berpengalaman menangani sistem pengolahan data industri dan antarmuka pengguna intuitif.',
      exploreCta: 'Lihat Portofolio Proyek',
      contactCta: 'Hubungi Saya',
      githubCta: 'Profil GitHub',
      statProjects: 'Proyek Industri & Desain',
      statCollaboration: 'Mitra Industri',
      statCode: 'Python & Kode Bersih',
      floatingBadge1: 'Fullstack Dev',
      floatingBadge2: 'Python',
      floatingBadge3: 'UI/UX',
    },
    about: {
      sectionBadge: 'Di Balik Kode',
      title: 'Memadukan Logika Rekayasa dengan Kepekaan Visual',
      subtitle: 'Pelajar Rekayasa Perangkat Lunak (RPL) yang berdedikasi mengubah kebutuhan sistem yang kompleks menjadi solusi digital yang efisien dan memikat.',
      storyTitle: 'Tentang Saya',
      storyP1: 'Saya Muhammad Kevin Febrian (Febri), seorang pelajar / siswa bidang Rekayasa Perangkat Lunak (RPL) yang berdomisili di Depok, Indonesia. Fokus keahlian saya berakar pada pengembangan perangkat lunak yang tangguh dan cepat menggunakan Python serta teknologi web modern untuk menyelesaikan permasalahan operasional dunia nyata.',
      storyP2: 'Melalui kolaborasi langsung dengan mitra industri resmi seperti PT. Kokoh Inti Arebama (hub distribusi Gresik) dalam merekayasa sistem pengolahan dan rekapitulasi data absensi karyawan, serta pengalaman magang intensif (PKL) di PT. Mahakam Berkah Bersama, saya terbiasa bekerja dengan alur industri nyata, integritas basis data, dan kualitas UI tingkat tinggi.',
      bentoEduTitle: 'Rekayasa Perangkat Lunak (RPL)',
      bentoEduSubtitle: 'Fondasi kejuruan yang mendalam dalam logika algoritma, OOP, pemodelan database, dan SDLC.',
      bentoIndustryTitle: 'Pengalaman Teruji di Industri',
      bentoIndustrySubtitle: 'Mengembangkan modul fungsional untuk keuangan perusahaan dan pengolahan data absensi.',
      bentoFocusTitle: 'Fokus Teknis Utama: Python',
      bentoFocusSubtitle: 'Spesialisasi pada pemrograman Python dan pemrosesan data, arsitektur frontend React modern, integrasi REST API, dan sistem basis data relasional.',
      bentoDesignTitle: 'UI/UX & Desain Interaktif',
      bentoDesignSubtitle: 'Perhatian tinggi terhadap mikro-interaksi, tata letak responsif, aksesibilitas, dan keselarasan visual.',
      locationLabel: 'Lokasi',
      locationValue: 'Depok, Indonesia',
      statusLabel: 'Status',
      statusValue: 'Pelajar & Pengembang Aktif',
      degreeLabel: 'Status / Bidang',
      degreeValue: 'Siswa Rekayasa Perangkat Lunak (RPL)',
    },
    experience: {
      sectionBadge: 'Perjalanan & Karier',
      title: 'Pengalaman Industri & Rekam Jejak',
      subtitle: 'Bukti rekam jejak nyata berkolaborasi dengan perusahaan resmi dan kebutuhan pemangku kepentingan industri.',
      filterAll: 'Semua Rekam Jejak',
      filterInternship: 'Praktik Kerja Lapangan (PKL)',
      filterCapstone: 'Tugas Akhir (Capstone)',
      responsibilitiesLabel: 'Tanggung Jawab & Kontribusi Utama',
      technologiesLabel: 'Teknologi yang Diterapkan',
      partnerLabel: 'Mitra Perusahaan',
    },
    projects: {
      sectionBadge: 'Karya Pilihan',
      title: 'Portofolio Proyek & Studi Kasus',
      subtitle: 'Mulai dari sistem pengolahan data absensi industri hingga rancangan produk mobile UI/UX interaktif.',
      filterAll: 'Semua Proyek',
      filterIndustry: 'Industri & Tugas Akhir',
      filterWebapp: 'Aplikasi Web',
      filterUiux: 'UI/UX & Mobile',
      viewCaseStudy: 'Buka Studi Kasus',
      liveDemo: 'Demo Langsung',
      viewCode: 'Kode Sumber',
      confidentialCode: 'Kode Proprietary Perusahaan',
      modal: {
        roleLabel: 'Peran & Tanggung Jawab',
        clientLabel: 'Mitra / Konteks Proyek',
        techLabel: 'Tumpukan Teknologi',
        problemTitle: 'Tantangan & Masalah',
        solutionTitle: 'Solusi Rekayasa yang Dibangun',
        featuresTitle: 'Arsitektur & Fitur Utama',
        galleryTitle: 'Tangkapan Layar & Pratinjau Sistem',
        closeModal: 'Tutup',
        nextImage: 'Gambar selanjutnya',
        prevImage: 'Gambar sebelumnya',
      },
    },
    certificates: {
      sectionBadge: 'Kredensial & Sertifikasi',
      title: 'Sertifikat & Kredensial',
      subtitle: 'Sertifikasi kompetensi keahlian dan pencapaian terverifikasi.',
      clickToEnlarge: 'Klik untuk Memperbesar',
      verifiedBadge: 'Kredensial Terverifikasi',
      issuedBy: 'Lembaga Penerbit',
      issueDate: 'Tahun',
      credentialCategory: 'Kategori',
      closeLightbox: 'Tutup',
      viewOriginal: 'Perbesar Resolusi Penuh',
      singleFeaturedNote: 'Sertifikasi Resmi Unggulan',
    },
    skills: {
      sectionBadge: 'Kapabilitas Teknis',
      title: 'Keahlian & Penguasaan Teknologi',
      subtitle: 'Kompetensi seimbang di seluruh tumpukan web modern, sistem basis data, dan alat perancangan antarmuka.',
      frontendTitle: 'Pengembangan Frontend',
      frontendDesc: 'Membangun antarmuka pengguna yang responsif, mulus, dan berstandar tinggi dengan arsitektur komponen bersih.',
      backendTitle: 'Backend & Basis Data',
      backendDesc: 'Merancang endpoint RESTful, skema relasional yang optimal, dan logika pemrosesan server.',
      designTitle: 'UI/UX & Sistem Desain',
      designDesc: 'Menerjemahkan kebutuhan alur pengguna menjadi purwarupa interaktif, wireframe, dan panduan desain di Figma.',
      toolsTitle: 'Alat, Sistem Operasi & Lingkungan',
      toolsDesc: 'Penggunaan kontrol versi Git, alur kerja modern developer, dan lingkungan Linux / Windows.',
    },
    github: {
      sectionBadge: 'Kode Sumber & Open Source',
      title: 'Keberadaan di GitHub & Dunia Koding',
      subtitle: 'Jelajahi repositori publik, eksplorasi kode, dan kontribusi rekayasa perangkat lunak.',
      profileCardTitle: 'Profil GitHub',
      username: '@framonn',
      visitGithub: 'Kunjungi Profil GitHub',
      publicRepos: 'Repositori Publik',
      activeCommit: 'Eksplorasi Kode Berkelanjutan',
      pinnedTitle: 'Repositori Pilihan',
      openSourceQuote: '"Menulis kode yang bersih dan mudah dirawat adalah bentuk disiplin dan empati bagi mereka yang akan meneruskannya."',
    },
    contact: {
      sectionBadge: 'Hubungi Saya',
      title: 'Mari berkolaborasi membangun karya nyata',
      subtitle: 'Apakah Anda memiliki tawaran pekerjaan, proyek freelance, atau sekadar ingin berdiskusi—saya selalu terbuka untuk menyapa.',
      formName: 'Nama Lengkap',
      formNamePlaceholder: 'contoh: Budi Setiawan',
      formEmail: 'Alamat Email',
      formEmailPlaceholder: 'budi@perusahaan.com',
      formSubject: 'Subjek Pesan',
      formSubjectPlaceholder: 'Peluang Kerja / Diskusi Proyek',
      formMessage: 'Pesan',
      formMessagePlaceholder: 'Jelaskan proyek, kebutuhan tim, atau penawaran kerja sama Anda...',
      sendMessage: 'Kirim Pesan',
      sending: 'Mengirimkan...',
      sendSuccess: 'Pesan berhasil terkirim! Saya akan segera merespons email Anda.',
      sendError: 'Harap lengkapi semua kolom yang wajib diisi.',
      quickEmailTitle: 'Email Langsung',
      copyEmail: 'Salin Email',
      copiedEmail: 'Berhasil disalin ke papan klip!',
      socialTitle: 'Tautan Pengembang & Media Sosial',
      githubDesc: 'Lihat repositori dan proyek sumber terbuka',
      instagramDesc: 'Aktivitas personal & pembaruan kreatif',
      locationTitle: 'Berdomisili Di',
      locationDesc: 'Depok, Jawa Barat, Indonesia (WIB)',
    },
    footer: {
      tagline: 'Menciptakan pengalaman web interaktif dengan kode bersih & desain penuh makna.',
      rights: 'Hak cipta dilindungi undang-undang.',
      craftedWith: 'Dirancang & Direkayasa menggunakan React, TypeScript & Tailwind CSS.',
      backToTop: 'Kembali ke atas',
      navigation: 'Navigasi Cepat',
    },
  },
};
