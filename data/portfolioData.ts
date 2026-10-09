export interface Project {
  id: string;
  title: string;
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'UI/UX';
  tagline: string;
  description: string;
  overview: string;
  role: string;
  period: string;
  clientOrContext: string;
  features: string[];
  techStack: string[];
  gradient: string;
  accentColor: string;
  image?: string; // Path or URL to project image (e.g. '/images/projects/lms.png')
  stats?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Freelance' | 'Organisasi' | 'Proyek';
  description: string[];
  techOrTools?: string[];
  badge?: string;
  logo?: string; // Path or URL to company logo (e.g. '/images/experience/stit.png')
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpaOrScore: string;
  highlights: string[];
  logo?: string; // Path or URL to campus/school logo (e.g. '/images/education/stt-nf.png')
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
  logo?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; iconName?: string; icon?: string; logo?: string }[];
}

export const PERSONAL_INFO = {
  name: "Rizki Ahmad Fauzi",
  avatar: "/images/Uji1.png", // Simpan foto Anda di folder public/images/profile.jpg
  title: "Web Developer | Fullstack Developer",
  subTitle: "Membangun Aplikasi Web Modern, Skalabel & Berorientasi Solusi",
  email: "rizkiahmadfauzi1215@gmail.com",
  phone: "+62 857-1793-7863",
  whatsappUrl: "https://wa.me/6285717937863?text=Halo%20Rizki,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
  linkedin: "https://linkedin.com/in/rizki-ahmad-fauzi-55b583243",
  github: "https://github.com",
  location: "Jonggol, Bogor, Jawa Barat 16830",
  bio: "Fullstack Web Developer dengan pengalaman membangun aplikasi web end-to-end, mulai dari Learning Management System dengan Role-Based Access Control hingga platform rental mobil dan sistem invoice digital. Terbiasa menangani seluruh siklus pengembangan, dari analisis kebutuhan sampai deployment, dengan stack Laravel, MySQL, dan React. Lulusan Teknik Informatika STT Terpadu Nurul Fikri (IPK 3,74).",
  stats: [
    { value: "3.74", label: "IPK Kelulusan (STT-NF)", suffix: "/4.0" },
    { value: "6+", label: "Proyek Skala Penuh", suffix: "" },
    { value: "5+", label: "Sertifikasi Kompetensi", suffix: "" },
    { value: "100%", label: "Komitmen Kualitas", suffix: "" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "stit-lms",
    title: "Learning Management System (LMS) STIT Fatahillah",
    image: "/images/LMS.png",
    category: "Fullstack",
    tagline: "Platform Manajemen Akademik & E-Learning Kampus Berbasis RBAC",
    description: "Sistem LMS komprehensif untuk institusi kampus dengan Role-Based Access Control bertingkat (Admin, Dosen, Mahasiswa) yang mengintegrasikan perkuliahan, penugasan, dan rekap penilaian secara real-time.",
    overview: "Dikembangkan untuk mendigitalisasi operasional akademik di STIT Fatahillah Cileungsi. Sistem ini memfasilitasi distribusi materi kuliah digital, bank soal & kuis online, pengumpulan tugas mahasiswa dengan verifikasi otomatis, serta sistem rekapitulasi nilai yang transparan dan aman.",
    role: "Fullstack Web Developer & UI/UX Designer",
    period: "2025 – Sekarang",
    clientOrContext: "STIT Fatahillah – Cileungsi",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald",
    features: [
      "Role-Based Access Control (RBAC) aman untuk Admin, Dosen, dan Mahasiswa",
      "Manajemen materi kuliah multimoda (dokumen, video, link referensi)",
      "Sistem kuis online interaktif dengan timer dan auto-grading",
      "Portal pengumpulan tugas mahasiswa dengan upload file & feedback dosen",
      "Dashboard rekap nilai dan pelaporan kehadiran mahasiswa terintegrasi",
      "Desain antarmuka responsif dan modern sesuai panduan identitas visual kampus"
    ],
    techStack: ["React.js (Vite)", "Tailwind CSS", "Node.js", "Express.js", "Prisma ORM", "JWT Authentication", "MySQL"],
    stats: [
      { label: "Pengguna", value: "3 Role (Admin, Dosen, Mhs)" },
      { label: "Keamanan", value: "JWT + RBAC" },
      { label: "Arsitektur", value: "RESTful API" }
    ]
  },
  {
    id: "mj-trans-rental",
    title: "MJ Trans Rental Bali – Car Rental & Fleet Platform",
    image: "/images/MJ-Transport.png",
    category: "Fullstack",
    tagline: "Platform Reservasi Rental Mobil Lepas Kunci & Driver untuk Wisata Bali",
    description: "Platform penyewaan mobil modern untuk wisatawan di Bali yang mengubah proses reservasi konvensional menjadi alur digital end-to-end yang aman, transparan, dan cepat.",
    overview: "Membantu MJ Trans Rental Bali mengotomasi alur booking armada kendaraan lepas kunci dan paket dengan supir. Platform ini mencakup katalog kendaraan dinamis dengan filter tanggal & transmisi, verifikasi identitas (KTP/SIM) & bukti pembayaran, pembuatan invoice digital otomatis, serta dashboard admin untuk manajemen penugasan supir.",
    role: "Freelance Full-Stack Developer",
    period: "2024 – 2025",
    clientOrContext: "MJ Trans Rental Bali (Freelance Project)",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "blue",
    features: [
      "Katalog armada interaktif dengan filter tipe armada, transmisi, harga & ketersediaan",
      "Alur pemesanan online real-time dengan pemilihan lepas kunci atau dengan supir",
      "Sistem upload dan verifikasi dokumen identitas (KTP, SIM) & bukti transfer bank",
      "Generator invoice digital otomatis dengan kode booking unik dan status tracking",
      "Dashboard admin komprehensif: validasi pembayaran, verifikasi data, dan penugasan driver",
      "Export data jadwal operasional supir harian/mingguan untuk tim lapangan"
    ],
    techStack: ["Next.js", "TypeScript", "Laravel REST API", "Tailwind CSS", "MySQL", "Sanctum"],
    stats: [
      { label: "Tipe Sewa", value: "Lepas Kunci / Supir" },
      { label: "Output", value: "Invoice & Booking Tracker" },
      { label: "Admin Tools", value: "Driver Scheduler" }
    ]
  },
  {
    id: "flowerplus-skripsi",
    title: "FlowerPlus – UMKM Florist Operations & Invoice Web Admin",
    image: "/images/FP.png",
    category: "Fullstack",
    tagline: "Sistem Informasi Manajemen Operasional & Faktur Digital untuk UMKM Florist",
    description: "Aplikasi web admin terpadu untuk efisiensi rantai operasional bisnis florist, mulai dari katalog stok bunga, manajemen pesanan kustom, otomatisasi faktur/invoice, hingga rekapitulasi laba-rugi.",
    overview: "Proyek Skripsi S1 Teknik Informatika di STT Terpadu Nurul Fikri (lulus dengan predikat IPK 3.74). Mengatasi permasalahan pencatatan manual pada UMKM florist dengan menghadirkan solusi web terstruktur untuk memantau status pembuatan pesanan karangan bunga, pencatatan biaya bahan baku, pembuatan invoice PDF instan, dan pelaporan keuangan berkala.",
    role: "Lead Fullstack Developer (Skripsi)",
    period: "2024 – 2025",
    clientOrContext: "Skripsi S1 Teknik Informatika STT-NF",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "rose",
    features: [
      "Manajemen inventaris stok bunga segar, aksesoris, dan paket buket terintegrasi",
      "Sistem pencatatan order kustom dengan status pengerjaan (Baru, Proses, Siap Kirim, Selesai)",
      "Pembuatan invoice otomatis dengan template profesional siap cetak & unduh",
      "Laporan penjualan, omzet, dan estimasi keuntungan bersih UMKM",
      "Manajemen data pelanggan & riwayat pembelian untuk retensi konsumen"
    ],
    techStack: ["React.js", "Laravel 10", "MySQL", "Tailwind CSS", "RESTful API"],
    stats: [
      { label: "Skripsi IPK", value: "3.74 (STT-NF)" },
      { label: "Integrasi", value: "Invoice & Stock Auto" },
      { label: "Target", value: "UMKM Florist" }
    ]
  },
  {
    id: "stit-fatahillah-portal",
    title: "Website & Portal STIT Fatahillah",
    image: "images/Web-Stifa.png",
    category: "Frontend",
    tagline: "Aplikasi Web Responsif & Dinamis untuk Digitalisasi Kampus STIT Fatahillah",
    description: "Merancang dan membangun aplikasi web responsif dan dinamis untuk Sekolah Tinggi Ilmu Tarbiyah (STIT) Fatahillah menggunakan React.js dan Vite guna meningkatkan digitalisasi kampus dan akses informasi akademik.",
    overview: "Mengembangkan modul informasi komprehensif yang mencakup portal berita berbasis dynamic routing & slugs, informasi PMB (Penerimaan Mahasiswa Baru), profil Program Studi (PGMI & MPI), direktori dosen, dan kalender akademik. Mengintegrasikan bagan struktur organisasi interaktif menggunakan ReactFlow serta portal akses jurnal ilmiah (Tadrusuun & Alqiyadi). Mengoptimalkan performa halaman dan SEO menggunakan React Helmet untuk visibilitas mesin pencari serta menerapkan transisi visual interaktif dengan AOS dan Bootstrap 5.",
    role: "Frontend Developer / Web Developer",
    period: "2025",
    clientOrContext: "STIT Fatahillah – Cileungsi",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "amber",
    features: [
      "Portal berita kampus berbasis dynamic routing & slugs untuk navigasi konten yang SEO-friendly",
      "Modul informasi PMB (Penerimaan Mahasiswa Baru) lengkap dengan alur pendaftaran",
      "Profil Program Studi (PGMI & MPI) dan direktori dosen terintegrasi",
      "Bagan struktur organisasi interaktif menggunakan ReactFlow",
      "Portal akses jurnal ilmiah kampus (Tadrusuun & Alqiyadi)",
      "Kalender akademik digital dan optimasi SEO dengan React Helmet",
      "Transisi visual interaktif dengan AOS Animation dan layout responsif Bootstrap 5"
    ],
    techStack: ["React.js", "Vite", "React Router", "Bootstrap 5", "Axios", "React Helmet (SEO)", "ReactFlow", "AOS Animation"],
    stats: [
      { label: "Platform", value: "Website Kampus" },
      { label: "SEO", value: "React Helmet" },
      { label: "Interaktif", value: "ReactFlow & AOS" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "stit-fatahillah-webdev",
    role: "Web Developer (Fullstack)",
    company: "STIT Fatahillah",
    location: "Cileungsi, Jawa Barat, Indonesia",
    period: "Maret 2025 – Sekarang",
    type: "Full-time",
    badge: "Pekerjaan Utama",
    description: [
      "Mengembangkan beberapa aplikasi web strategis untuk kebutuhan institusi dan organisasi kampus, termasuk website resmi STIT Fatahillah.",
      "Membangun Learning Management System (LMS) berbasis Role-Based Access Control untuk Admin, Dosen, dan Mahasiswa mencakup materi kuliah, kuis, tugas, dan rekapitulasi penilaian.",
      "Menangani pengembangan fullstack menggunakan React.js (Vite), Tailwind CSS, Node.js, Express.js, Prisma ORM, serta autentikasi JWT.",
      "Merancang UI/UX yang responsif, modern, dan konsisten dengan identitas visual kampus."
    ],
    techOrTools: ["React.js", "Node.js", "Express.js", "Prisma ORM", "Tailwind CSS", "JWT", "MySQL", "Figma"]
  },
  {
    id: "stit-fatahillah-designer",
    role: "Graphic Designer & Event Project Manager (Musiman)",
    company: "STIT Fatahillah",
    location: "Cileungsi, Jawa Barat",
    period: "2025 – Sekarang",
    type: "Full-time",
    badge: "Peran Tambahan",
    description: [
      "Membuat materi visual flyer PMB (Penerimaan Mahasiswa Baru) dan berbagai materi promosi media sosial serta media cetak menggunakan Adobe Photoshop dan Illustrator.",
      "Menjadi Penanggung Jawab acara Fun Run Gebyar Milad STIT Fatahillah: memimpin perencanaan, penyusunan rundown, koordinasi lintas divisi panitia, hingga evaluasi pasca acara."
    ],
    techOrTools: ["Adobe Photoshop", "Adobe Illustrator", "Event Management", "Leadership"]
  },
  {
    id: "freelance-mj-trans",
    role: "Freelance Full-Stack Developer",
    company: "MJ Trans Rental Bali",
    location: "Bali Client",
    period: "2024 – 2025",
    type: "Freelance",
    badge: "Klien Freelance",
    description: [
      "Membangun platform penyewaan mobil wisata Bali (lepas kunci dan dengan supir) yang mendigitalkan reservasi konvensional menjadi pemesanan online aman dan transparan.",
      "Mengembangkan katalog armada dengan filter pintar, pemesanan online real-time, invoice digital otomatis, serta verifikasi KTP, SIM, dan bukti transfer.",
      "Merancang dashboard admin untuk validasi pembayaran, verifikasi dokumen, penugasan driver, dan export jadwal supir harian menggunakan Next.js, TypeScript, dan Laravel REST API."
    ],
    techOrTools: ["Next.js", "TypeScript", "Laravel", "REST API", "Tailwind CSS", "MySQL"]
  },
  {
    id: "org-astro",
    role: "Staff Event ASTRO",
    company: "STT Terpadu Nurul Fikri",
    location: "Depok, Indonesia",
    period: "2024",
    type: "Organisasi",
    badge: "Kepengurusan",
    description: [
      "Menyusun timeline acara dari tahap inisiasi perencanaan hingga eksekusi hari H.",
      "Mengawasi jalannya kegiatan sesuai rundown dan memitigasi potensi kendala teknis di lapangan."
    ],
    techOrTools: ["Team Management", "Rundown Execution", "Communication"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    school: "Sekolah Tinggi Teknologi Nurul Fikri (STT-NF)",
    logo: "/images/Logo_Nf.jpg",
    degree: "S1 Teknik Informatika",
    period: "September 2022 – 2026",
    location: "Depok, Jawa Barat",
    gpaOrScore: "IPK 3,74",
    highlights: [
      "Skripsi: FlowerPlus – Sistem Web Admin untuk Operasional dan Manajemen Invoice UMKM Florist (React.js, Laravel 10, MySQL).",
      "Program Studi Independen Bersertifikat (SIB) di NF Academy: Fullstack Web Development & Digital Marketing.",
      "Aktif dalam berbagai proyek kolaboratif frontend dan backend kampus."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Sertifikasi Kompetensi Digital Marketing BNSP",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Februari 2025",
    credentialUrl: "https://drive.google.com/file/d/1KlaFtfU7XM_HwaOAFeaBvhfr6-Mbn9_N/view?usp=sharing", // Ganti dengan link sertifikat Anda (URL drive, kredensial, dsb.)
    skills: ["SEO Strategy", "Social Media Marketing", "Content & Conversion Analytics"]
  },
  {
    title: "Full Stack Web Developer",
    issuer: "NF Academy",
    date: "Januari 2025",
    credentialUrl: "https://drive.google.com/file/d/12_Ha0-ya5eZXbQLci1bIreOH-MAQIfvO/view?usp=sharing", // Ganti dengan link sertifikat Anda
    skills: ["Laravel", "React.js", "RESTful API", "MySQL", "Fullstack Development"]
  },
  {
    title: "AWS Cloud Practitioner Training",
    issuer: "Dicoding Indonesia (Nilai Rata-rata 80)",
    date: "Juni 2023",
    credentialUrl: "https://drive.google.com/file/d/1mbPmLQit8hAtI5axVHSHhrmkvKuXegLO/view?usp=sharing", // Ganti dengan link sertifikat Anda
    skills: ["Cloud Architecture", "AWS Core Services", "Security & Deployment"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Membangun antarmuka web modern, responsif, dan interaktif dengan performa optimal.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ]
  },
  {
    title: "Backend & API Architecture",
    description: "Merancang API RESTful, logika bisnis server-side, dan arsitektur data yang aman.",
    skills: [
      { name: "Laravel (PHP)", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Node.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "RESTful API", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "PHP", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ]
  },
  {
    title: "Database & ORM",
    description: "Pengelolaan struktur relasional data, optimasi kueri, dan integritas database.",
    skills: [
      { name: "MySQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Database Design", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    title: "Keamanan & Pengujian",
    description: "Memastikan otentikasi data terproteksi dan keandalan sistem.",
    skills: [
      { name: "Role-Based Access Control (RBAC)", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
      { name: "JWT (JSON Web Token)", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
      { name: "Laravel Sanctum", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }
    ]
  },
  {
    title: "UI/UX & Graphic Design",
    description: "Merancang identitas visual, wireframe, prototipe interaktif, dan media promosi.",
    skills: [
      { name: "Figma", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe Photoshop", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Adobe Illustrator", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { name: "Canva", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" }
    ]
  },
  {
    title: "Tools & Collaboration",
    description: "Alat bantu manajemen alur kerja, version control, dan produktivitas tim.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman API", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "VS Code", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ]
  }
];
