import { Certification, Education, Experience, Project, SecurityLog, SkillCategory } from '../types';

export const personalInfo = {
  name: "Renaldi Nainggolan",
  role: "Layer 1 Engineer & SOC Operations Specialist",
  tagline: "Dedicated to Proactive Server Traffic Monitoring, Cyberattack Log Analysis & Cloud Security Protection (Imperva)",
  email: "renaldinainggolan4@gmail.com",
  phone: "0822-6079-9287",
  formattedPhone: "+62 822-6079-9287",
  address: "Jl. Duku VI, Srengseng, Kembangan, Jakarta Barat",
  linkedin: "Renaldi Nainggolan",
  linkedinUrl: "https://www.linkedin.com/in/renaldi-nainggolan-72a26830a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "@rei_nainggolan",
  instagramUrl: "https://instagram.com/rei_nainggolan",
  profilePhotoUrl: "https://lh3.googleusercontent.com/d/1kmx94fzLuXsBkA2BFiZ50EYf9G8yVw4o",
  profilePhotoDriveUrl: "https://drive.google.com/uc?export=view&id=1kmx94fzLuXsBkA2BFiZ50EYf9G8yVw4o",
  cvDriveUrl: "https://drive.google.com/file/d/1OLtoQIOF6YHgkRfREMw-NWkNdGeUBpXg/view?usp=drivesdk",
  cvDownloadUrl: "https://drive.google.com/uc?export=download&id=1OLtoQIOF6YHgkRfREMw-NWkNdGeUBpXg",
  availability: "Siap Bergabung Segera (Available for Hire)",
  summary:
    "I am a junior working in the field of cybersecurity with over a year of experience analyzing cyberattacks. I have a proven track record from my time at PT Neptus Teknologi Indonesia. I am currently seeking an opportunity to contribute to the company's growth in the role of Layer 1 Engineer.",
  summaryId:
    "Junior di bidang cybersecurity dengan pengalaman lebih dari 1 tahun dalam menganalisis serangan siber, pemantauan lalu lintas server real-time, dan mitigasi ancaman menggunakan Imperva Cloud Security. Memiliki rekam jejak terbukti di PT Neptus Teknologi Indonesia (SOC Operation) dan siap berkontribusi secara maksimal sebagai Layer 1 Engineer.",
};

export const stats = [
  { value: "1+", label: "Tahun Pengalaman", subtitle: "SOC & Layer 1 Operations" },
  { value: "24/7", label: "Monitoring Readiness", subtitle: "Real-time Traffic Triage" },
  { value: "3.22", label: "IPK / GPA", subtitle: "D3 Sistem Informasi UBSI" },
  { value: "100%", label: "Client SLA Focus", subtitle: "Incident & Request Handling" },
];

export const experiences: Experience[] = [
  {
    id: "neptus",
    role: "Layer 1 Engineer | SOC Operation",
    company: "PT Neptus Teknologi Indonesia",
    department: "Security Operations Center (SOC)",
    period: "Maret 2025 – Juni 2026",
    duration: "1 Tahun 4 Bulan",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description: [
      "Layer 1 Engineer dengan keahlian utama dalam pemantauan lalu lintas data ke server secara real-time untuk mendeteksi anomali dan potensi serangan siber.",
      "Menganalisis dan menangani eskalasi insiden keamanan jaringan dan aplikasi web (DDoS, Brute Force, Web Exploit, Bot Traffic).",
      "Menyusun laporan bulanan (Monthly Security Incident & Change Reports) mengenai tren insiden keamanan dan permintaan perubahan yang diminta oleh klien.",
      "Merespons serta menangani setiap permintaan dan keluhan keamanan dari klien secara cepat, tanggap, sesuai dengan SOP dan Mengekskalasikan Kepada L2/L3",
    ],
    skills: ["Cloud Security (Imperva)", "Traffic Monitoring", "Log Analysis", "Incident Response", "Client SLA Reporting"],
    keyAchievements: [
      "Secara konsisten menjaga respons waktu insiden (MTTR) di bawah batas SLA klien.",
      "Menghasilkan laporan berkala yang mendalam untuk evaluasi postur keamanan siber klien korporat.",
      "Mendeteksi dan memitigasi anomali traffic bot berbahaya menggunakan Imperva WAF.",
    ],
  },
  {
    id: "digitalent-kominfo",
    role: "Digital Mentorship & Business 4.0 Intern",
    company: "Digitalent ft Menkomdigi (Kominfo) & Micromentor",
    department: "Program Pendampingan UMKM Era Industri 4.0",
    period: "Oktober 2022 – Desember 2022",
    duration: "3 Bulan",
    location: "Jakarta, Indonesia",
    type: "Internship",
    description: [
      "Kolaborasi resmi antara Micromentor dengan Kementerian Komunikasi dan Digital (Kemenkomdigi / Kominfo) dalam membina pelaku UMKM.",
      "Memberikan pendampingan intensif kepada pelaku UMKM mengenai strategi menjalankan bisnis secara efektif dan aman di era industri 4.0.",
      "Edukasi pemanfaatan platform digital, keamanan data transaksi sederhana, dan optimalisasi sistem informasi usaha.",
    ],
    skills: ["Digital Transformation", "Mentoring UMKM", "Industrial Era 4.0", "Data Privacy Basics", "Communication"],
    keyAchievements: [
      "Membantu puluhan pelaku UMKM mengadopsi kanal digital dengan pemahaman literasi keamanan digital dasar.",
      "Mendapatkan sertifikasi dan apresiasi resmi program kolaborasi Kemenkomdigi & Micromentor.",
    ],
  },
];

export const educationList: Education[] = [
  {
    id: "ubsi",
    institution: "Universitas Bina Sarana Informatika (UBSI)",
    campus: "Kampus Cipulir, DKI Jakarta",
    degree: "Diploma 3 (D3)",
    major: "Sistem Informasi",
    period: "2020 – 2024",
    gpa: "3.22",
    maxGpa: "4.00",
    highlights: [
      "Fokus kurikulum pada Perancangan Sistem Informasi, Jaringan Komputer, Basis Data, dan Arsitektur Keamanan Informasi.",
      "Lulus tepat waktu dengan predikat Sangat Memuaskan (IPK 3.22/4.00).",
      "Aktif dalam studi kasus analisis sistem informasi dan infrastruktur jaringan data.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Perimeter Security",
    description: "Keahlian dalam perlindungan infrastruktur cloud dan firewall aplikasi web",
    iconName: "CloudShield",
    skills: [
      {
        name: "Cloud Security (Imperva)",
        level: 90,
        badge: "Core Specialty",
        description: "Mitigasi ancaman DDoS, pemantauan serangan siber, dan proteksi bot otomatis dengan Imperva WAF.",
      },
      {
        name: "Web Application Firewall (WAF)",
        level: 88,
        badge: "Advanced",
        description: "Analisis payload serangan OWASP Top 10 (SQL Injection, XSS, Path Traversal).",
      },
      {
        name: "Data Traffic Monitoring",
        level: 92,
        badge: "Daily Operation",
        description: "Pemantauan Request With Error yang masuk ke server.",
      },
    ],
  },
  {
    title: "SOC Operations & Triage",
    description: "Pemeriksaan log mendalam dan penanganan siklus insiden keamanan",
    iconName: "ShieldAlert",
    skills: [
      {
        name: "Log Analysis & Inspection",
        level: 92,
        badge: "Expertise",
        description: "Investigasi Syslog, access logs, HTTP response error codes (4xx/5xx), dan pola malicious IP.",
      },
      {
        name: "Incident Handling & Escalation",
        level: 86,
        badge: "Workflow",
        description: "Penerapan prosedur mitigasi awal Layer 1, penanganan eskalasi insiden, dan verifikasi false-positive.",
      },
      {
        name: "Detail-Oriented Investigation",
        level: 95,
        badge: "Key Trait",
        description: "Ketelitian tinggi dalam menyaring jutaan baris log untuk menemukan anomali tersembunyi.",
      },
    ],
  },
  {
    title: "Reporting & Productivity",
    description: "Penyusunan dokumentasi teknis dan laporan eksekutif untuk klien korporat",
    iconName: "FileSpreadsheet",
    skills: [
      {
        name: "Monthly Security Incident Reporting",
        level: 90,
        badge: "Client Facing",
        description: "Penyusunan rekapitulasi serangan bulanan, evaluasi tren, dan rekomendasi perubahan keamanan.",
      },
      {
        name: "Microsoft Office (Excel, Word, PPT)",
        level: 90,
        badge: "Mastery",
        description: "Pengolahan data insiden menggunakan rumus Excel, rekapitulasi data, dan presentasi laporan berkala.",
      },
      {
        name: "Client SLA Management",
        level: 88,
        badge: "Professional",
        description: "Menjaga waktu respon dan resolusi insiden sesuai komitmen kontrak SLA klien.",
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "micromentor-umkm",
    title: "Digital Mentoring Industrial Era 4.0",
    issuer: "Micromentor ft Kemenkomdigi",
    collaborator: "Ministry of Communication & Information",
    date: "Desember 2022",
    skillsCovered: [
      "Digital Business Optimization",
      "Cyber Hygiene for SMEs",
      "Communication & Advisory",
    ],
    badgeColor: "from-sky-600 to-blue-800",
  },
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Masif / Native", proficiency: 100, note: "Komunikasi profesional lisan & tulisan lancar" },
  { name: "English", level: "Pasif / Technical", proficiency: 75, note: "Pemahaman dokumentasi teknis, security alerts & incident logs" },
];

export const sampleSecurityLogs: SecurityLog[] = [
  {
    id: "LOG-90412",
    timestamp: "10:42:15 WIB",
    sourceIp: "185.220.101.5",
    country: "DE (Tor Exit Node)",
    requestType: "POST",
    endpoint: "/api/v1/auth/login",
    threatType: "Credential Stuffing / Brute Force",
    severity: "High",
    action: "RATE_LIMITED",
    wafRule: "Imperva-Bot-Protection-Rule #412",
  },
  {
    id: "LOG-90413",
    timestamp: "10:42:19 WIB",
    sourceIp: "45.154.255.89",
    country: "RU (Unknown ASN)",
    requestType: "GET",
    endpoint: "/products.php?id=1' UNION SELECT NULL,password FROM users--",
    threatType: "SQL Injection (SQLi) Attempt",
    severity: "Critical",
    action: "BLOCKED",
    wafRule: "Imperva-OWASP-SQLi-Filter #108",
  },
  {
    id: "LOG-90414",
    timestamp: "10:42:24 WIB",
    sourceIp: "103.245.12.18",
    country: "ID (Jakarta DC)",
    requestType: "GET",
    endpoint: "/assets/css/main.css",
    threatType: "Legitimate CDN Static Asset Request",
    severity: "Low",
    action: "ALLOWED",
    wafRule: "Default-Pass-Through",
  },
  {
    id: "LOG-90415",
    timestamp: "10:42:30 WIB",
    sourceIp: "194.26.29.112",
    country: "NL (Hosting Provider)",
    requestType: "POST",
    endpoint: "/search?q=<script>alert(document.cookie)</script>",
    threatType: "Cross-Site Scripting (XSS)",
    severity: "High",
    action: "BLOCKED",
    wafRule: "Imperva-WAF-XSS-Sanitizer #204",
  },
  {
    id: "LOG-90416",
    timestamp: "10:42:35 WIB",
    sourceIp: "91.240.118.23",
    country: "UA (Volumetric Botnet)",
    requestType: "GET",
    endpoint: "/checkout",
    threatType: "HTTP Flood DDoS Spike (5.2k req/sec)",
    severity: "Critical",
    action: "BLOCKED",
    wafRule: "Imperva-DDoS-Mitigation-Shield #001",
  },
];

export const caseStudies = [
  {
    id: "ddos-mitigation",
    title: "Mitigasi Serangan HTTP Flood DDoS pada Server Klien",
    category: "Cloud Security & Imperva",
    scenario: "Terjadi lonjakan anomali trafik hingga 12.000 permintaan/detik ke endpoint autentikasi server klien yang menyebabkan peningkatan latensi server hingga 400%.",
    actionTaken: [
      "Menganalisis spike grafik traffic pada dashboard Imperva dan mengidentifikasi sebaran IP botnet.",
      "Mengaktifkan custom challenge CAPTCHA dan memperketat threshold Rate Limiting pada layer 7.",
      "Mengisolasi IP penyerang dan memblokir autonomous system (ASN) yang terindikasi berbahaya.",
    ],
    outcome: "Lalu lintas normal kembali stabil dalam waktu kurang dari 5 menit tanpa adanya downtime pada aplikasi klien yang sah.",
    tools: ["Imperva Cloud Security", "Log Analyzer", "Traffic Monitor"],
  },
  {
    id: "sqli-investigation",
    title: "Investigasi & Analisis Payload SQL Injection",
    category: "Log Analysis & Triage",
    scenario: "Terdeteksi pola URL encoding mencurigakan berulang kali pada parameter query produk oleh satu subnet IP eksternal.",
    actionTaken: [
      "Melakukan triage mendalam pada log request mentah untuk merekonstruksi payload serangan.",
      "Memastikan status HTTP diblokir (403 Forbidden) oleh aturan Imperva WAF dan tidak ada kebocoran data backend.",
      "Mencatat rincian insiden ke dalam sistem penanganan eskalasi dan menyusun laporan ringkas untuk tim teknis klien.",
    ],
    outcome: "Zero data breach, false-positive terverifikasi bersih, dan proteksi whitelist diperbarui secara presisi.",
    tools: ["Syslog Inspection", "WAF Engine", "Incident Management System"],
  },
  {
    id: "monthly-reporting",
    title: "Penyusunan Monthly Security Incident & Trend Report",
    category: "Reporting & Client SLA",
    scenario: "Klien korporat membutuhkan visibilitas komprehensif atas seluruh upaya serangan siber, status patch WAF, dan tingkat pemenuhan SLA bulanan.",
    actionTaken: [
      "Mengumpulkan data metrik insiden harian dan mengekspor log statistik dari platform keamanan.",
      "Mengolah data menggunakan Microsoft Excel (VLOOKUP, Rumus, dan Tabulasi Data) untuk memetakan tren serangan terbanyak.",
      "Menyajikan ringkasan eksekutif dan rekomendasi pencegahan proaktif dalam format dokumen yang mudah dipahami manajemen.",
    ],
    outcome: "Klien mendapatkan gambaran keamanan yang transparan dan memberikan penilaian kepuasan 100% terhadap SLA.",
    tools: ["Microsoft Excel", "Microsoft PowerPoint", "SLA Incident Register"],
  },
];

export const projects: Project[] = [
  {
    id: "nxtgen-youth-gbi",
    title: "NXTGEN Youth GBI Asia Africa",
    subtitle: "Aplikasi Mobile Komunitas & Pelayanan Pemuda",
    category: "Aplikasi Mobile",
    description:
      "Aplikasi mobile yang dirancang khusus untuk komunitas pemuda NXTGEN Youth GBI Asia Africa. Aplikasi ini memfasilitasi warta kegiatan rohani, jadwal ibadah, pendaftaran event, sistem presensi, dan interaksi komunitas jemaat muda secara digital dan terstruktur.",
    techStack: [
      "AI-Assisted Architecture",
      "Supabase (Auth & Realtime DB)",
      "PostgreSQL",
      "Vercel Deployment",
    ],
    features: [
      "Backend Terintegrasi Supabase: Autentikasi aman pengguna, penyimpanan data dinamis, dan sinkronisasi realtime.",
      "Perancangan Cepat Berbasis AI: Struktur arsitektur dan UI/UX mobile-first dioptimalkan dengan bantuan teknologi AI terkini.",
      "Informasi & Agenda Komunitas: Akses instan ke warta pemuda, jadwal pelayanan, dan notifikasi kegiatan komunitas.",
      "Performa Tinggi & Ringan: Di-deploy di Vercel dengan loading instan di berbagai perangkat mobile (iOS/Android).",
    ],
    liveUrl: "https://aplikasi-nxtgen2026.vercel.app",
    displayUrl: "aplikasi-nxtgen2026.vercel.app",
    architectureDetails: {
      frontend: "Responsive Mobile UI",
      backend: "Supabase (Backend-as-a-Service)",
      aiIntegration: "AI-Powered Code Generation",
      database: "Supabase PostgreSQL Database",
      hosting: "Vercel Edge Network",
    },
  },
];
