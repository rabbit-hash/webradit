export const projects = [
  {
    title: "Safe SAPA",
    description: "Sistem portal internal karyawan PTPN IV Regional I untuk pelaporan kendala operasional, masukan, feedback, dan perizinan secara real-time. Multi-role system dengan 3 level akses: Karyawan PKS, Tekpol, dan Admin.",
    tags: ["Laravel", "React", "MySQL", "Tailwind"],
    badge: "enterprise",
    role: "Lead Full-stack Developer",
    highlights: [
      "Multi-role authentication (PKS, Tekpol, Admin) dengan hak akses granular",
      "Real-time monitoring & filter interaktif untuk evaluasi kendala",
      "Dashboard analytics dengan grafik tren & perbandingan unit PKS",
      "Fitur cetak laporan PDF & ekspor data Excel/CSV"
    ],
    images: [
      { src: "/projects/safe-sapa/sapa1.png", alt: "Safe SAPA - Admin Dashboard" },
      { src: "/projects/safe-sapa/sapa2.png", alt: "Safe SAPA - Panel Evaluasi" }
    ]
  },
  {
    title: "O1MS (Operational Info & Monitoring System)",
    description: "Platform terintegrasi untuk pemantauan dan pengelolaan data operasional PKS & PPK secara real-time di PTPN IV Regional I.",
    tags: ["Laravel", "React", "SQLite", "Tailwind"],
    badge: "enterprise",
    role: "Full-stack Developer",
    highlights: [
      "Pelaporan harian produksi & penggunaan bahan kimia",
      "Validasi data berjenjang oleh manajerial & Tekpol",
      "Dashboard interaktif untuk monitoring performa pabrik",
      "Sistem 4 role akses (Admin, Tekpol, Manager, Unit PKS/PPK)"
    ],
    images: [
      { src: "/projects/o1ms/o1ms3.png", alt: "O1MS Dashboard 3" },
      { src: "/projects/o1ms/o1ms2.png", alt: "O1MS Dashboard 2" },
      { src: "/projects/o1ms/o1ms1.png", alt: "O1MS Dashboard 1" }
    ]
  },
  {
    title: "SINERGI",
    description: "Sistem dashboard & monitoring investasi serta penyerapan anggaran eksploitasi PTPN IV Regional I. Mengintegrasikan data Google Sheets ke database lokal secara real-time.",
    tags: ["Laravel", "MySQL", "Tailwind", "Chart.js"],
    badge: "enterprise",
    role: "Full-stack Developer",
    highlights: [
      "Sinkronisasi data otomatis (scheduler) dari Google Sheets",
      "Dashboard analitik dengan visualisasi grafik & tren tahunan",
      "Integrasi SSO (Single Sign-On) Portal 1Tep dengan JWT",
      "Filter riwayat harian & pelacakan progress fisik pekerjaan"
    ],
    images: [
      { src: "/projects/sinergi/sinergi3.png", alt: "Beranda & Dashboard Analitik" },
      { src: "/projects/sinergi/sinergi1.png", alt: "Halaman Welcome" },
      { src: "/projects/sinergi/sinergi2.png", alt: "Halaman Login / SSO" }
    ]
  },
  {
    title: "Clash of BaNG",
    description: "Website pertama yang saya buat, berawal dari tugas kuliah. Ini adalah website komunitas klan game Clash of BaNG yang berisi perbandingan statistik pasukan (troops), update komunitas, dan form pendaftaran anggota.",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "open-source",
    role: "Solo Developer",
    link: "https://clash-of-bang-jade.vercel.app/",
    images: [
      { src: "/projects/clash-of-bang/cob1.png", alt: "Clash of BaNG Website 1" },
      { src: "/projects/clash-of-bang/cob2.png", alt: "Clash of BaNG Website 2" }
    ]
  },
  {
    title: "Dashboard SDM Tekpol",
    description: "Dashboard eksekutif untuk memonitor, mengelola, dan memvisualisasikan program-program pengembangan Sumber Daya Manusia (SDM) di Bidang Tekpol.",
    tags: ["Laravel", "Tailwind", "Alpine.js", "Chart.js"],
    badge: "private",
    role: "Full-stack Developer",
    highlights: [
      "Dashboard indikator utama dengan visualisasi grafik & statistik",
      "Tampilan jadwal interaktif (Calendar View & List View)",
      "Manajemen data praktis via Upload Excel & Sync Google Sheets",
      "Mode layar penuh untuk presentasi & ekspor laporan infografis ke PDF"
    ],
    images: [
      { src: "/projects/dashboard-sdm/sdm1.png", alt: "Dashboard SDM 1" },
      { src: "/projects/dashboard-sdm/sdm2.png", alt: "Dashboard SDM 2" }
    ]
  }
];
