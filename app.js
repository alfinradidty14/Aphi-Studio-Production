
// Multi-Project Demo Dataset for Aphi Studio Production (CinePrep)
const INITIAL_PROJECTS = [
  {
    id: "proj_tvc_aura_2026",
    title: "Aura Coffee - 'Awaken The Senses'",
    type: "Commercial (TVC & Digital)",
    status: "In Prep",
    client: "Aura Beverages Inc.",
    agency: "Creative Pulse Studio",
    productionCompany: "Aphi Studio Production",
    director: "Arya Pratama",
    producer: "Maya Siregar",
    firstAD: "Budi Santoso",
    dop: "Reza Rahardian",
    currentDay: 1,
    totalDays: 2,
    shootDate: "2026-10-15",
    weather: "Partly Cloudy, 28°C - 32°C. 15% rain chance.",
    sunrise: "05:25 AM",
    sunset: "17:45 PM",
    generalCall: "06:00 AM",
    locationName: "Studio 4 & Roastery Cafe",
    locationAddress: "Jl. Suryo No. 42, Senopati, Jakarta Selatan",
    parkingNotes: "Gedung Parkir Belakang (Gate B). Voucher disediakan tim Unit.",
    hospitalName: "RS Siloam Semanggi (IGD 24 Jam)",
    hospitalAddress: "Jl. Garnisun 1 No. 2-3, Karet Semanggi, Jakarta Selatan",
    hospitalPhone: "(021) 2996-2888 / 1500-181",
    scenes: [
      {
        id: "sc_1",
        sceneNumber: "1",
        slugline: "INT. COFFEE ROASTERY - MORNING",
        setting: "INT",
        timeOfDay: "MORNING",
        location: "Roastery Cafe Bar",
        pages: "1 2/8",
        synopsis: "Barista menyeduh biji kopi pilihan dengan V60. Uap harum mengepul di bawah cahaya pagi sinematik.",
        cast: ["Dimas Anggara (Barista)", "Tara Basro (Sarah)"],
        props: ["V60 Ceramic Dripper", "Artisan Glass Carafe", "Biji Kopi Roast Khusus", "Kettle Gooseneck Tembaga"],
        wardrobe: ["Apron Kulit Cokelat Vintage", "Linen Shirt Krem"],
        fx: ["Hazer Atmospheric Smoke Halus", "Macro Diopter Filter"],
        notes: "Prioritaskan shot macro slow-motion uap dan tetesan air."
      },
      {
        id: "sc_2",
        sceneNumber: "2",
        slugline: "EXT. CITY SIDEWALK - DAY",
        setting: "EXT",
        timeOfDay: "DAY",
        location: "Pedestrian Crossing Senopati",
        pages: "6/8",
        synopsis: "Sarah berjalan di trotoar kota menikmati iced latte. Ekspresinya segar di tengah hiruk pikuk pagi.",
        cast: ["Tara Basro (Sarah)", "5x Pedestrian Extras"],
        props: ["Cup Takeaway Branded Aura", "Modern Leather Tote Bag"],
        wardrobe: ["Smart Casual Blazer Abu & White Sneakers"],
        fx: ["Reflector Sunbounce 4x4", "Gimbal Stabilizer Rig"],
        notes: "Izin jalanan sudah siap. Pasang traffic cone untuk jalur tracking gimbal."
      },
      {
        id: "sc_3",
        sceneNumber: "3",
        slugline: "INT. CREATIVE AGENCY OFFICE - AFTERNOON",
        setting: "INT",
        timeOfDay: "AFTERNOON",
        location: "Studio 4 - Set Ruang Rapat",
        pages: "2 1/8",
        synopsis: "Tim kreatif tampak jenuh berdiskusi di ruang meeting. Sarah masuk membawakan paket kopi, suasana seketika hidup.",
        cast: ["Tara Basro (Sarah)", "Reza (Kreatif 1)", "Dina (Kreatif 2)", "Fahri (Client Lead)"],
        props: ["Coffee Carrier Box 4 Cups", "Laptops", "Sticky Notes & Whiteboard Spidol"],
        wardrobe: ["Casual Agency Attire"],
        fx: ["Warm Keylight Tungsten Look"],
        notes: "Setup lighting ruang rapat harus kontras sebelum dan sesudah kopi datang."
      }
    ],
    shots: [
      {
        id: "shot_1a",
        sceneId: "sc_1",
        shotNumber: "1A",
        size: "Extreme Close-Up (ECU)",
        angle: "Low Angle",
        movement: "Slow Push-In",
        lens: "100mm Macro f/2.8",
        fps: "60 fps",
        status: "Planned",
        description: "Tetesan air panas jatuh ke bubuk kopi, blooming mekar perlahan."
      },
      {
        id: "shot_1b",
        sceneId: "sc_1",
        shotNumber: "1B",
        size: "Medium Close-Up (MCU)",
        angle: "Eye Level",
        movement: "Pan Right",
        lens: "50mm Prime f/1.4",
        fps: "24 fps",
        status: "Planned",
        description: "Barista tersenyum fokus menuang kettle dengan presisi."
      },
      {
        id: "shot_1c",
        sceneId: "sc_1",
        shotNumber: "1C",
        size: "Over-the-Shoulder (OTS)",
        angle: "Eye Level",
        movement: "Static",
        lens: "35mm Prime",
        fps: "24 fps",
        status: "Planned",
        description: "Dari balik bahu Sarah menatap cangkir kopi pertama disajikan."
      },
      {
        id: "shot_2a",
        sceneId: "sc_2",
        shotNumber: "2A",
        size: "Medium Shot (MS)",
        angle: "Low Angle",
        movement: "Tracking Forward (Gimbal)",
        lens: "35mm f/1.8",
        fps: "48 fps",
        status: "Planned",
        description: "Sarah berjalan santai ke arah kamera, minum dengan sedotan ramah lingkungan."
      },
      {
        id: "shot_2b",
        sceneId: "sc_2",
        shotNumber: "2B",
        size: "Wide Shot (WS)",
        angle: "High Angle",
        movement: "Jib / Crane Down",
        lens: "24mm Ultra Wide",
        fps: "24 fps",
        status: "Planned",
        description: "Pemandangan jalanan kota berlatar gedung modern, Sarah tampak menonjol."
      },
      {
        id: "shot_3a",
        sceneId: "sc_3",
        shotNumber: "3A",
        size: "Master Wide Shot",
        angle: "Eye Level",
        movement: "Static",
        lens: "28mm Prime",
        fps: "24 fps",
        status: "Planned",
        description: "Suasana ruang rapat lesu, lalu pintu terbuka dan Sarah masuk tersenyum."
      }
    ],
    cast: [
      {
        id: "cast_1",
        castNumber: "1",
        characterName: "Sarah (Hero)",
        actorName: "Tara Basro",
        role: "Lead Talent",
        phone: "+62 811-2345-6789",
        pickupTime: "06:30 AM",
        hmuTime: "07:00 AM",
        onSetTime: "08:15 AM",
        notes: "Wardrobe fitting tuntas. Tidak ada alergi makanan."
      },
      {
        id: "cast_2",
        castNumber: "2",
        characterName: "Barista",
        actorName: "Dimas Anggara",
        role: "Featured Talent",
        phone: "+62 812-9876-5432",
        pickupTime: "06:00 AM",
        hmuTime: "06:30 AM",
        onSetTime: "07:30 AM",
        notes: "Sudah latihan pouring V60 bersama konsultan kopi."
      }
    ],
    crew: [
      { id: "cr_1", department: "Direction", role: "Director", name: "Arya Pratama", phone: "+62 811-1000-001", callTime: "06:00 AM" },
      { id: "cr_2", department: "Direction", role: "1st AD", name: "Budi Santoso", phone: "+62 811-1000-002", callTime: "05:30 AM" },
      { id: "cr_3", department: "Production", role: "Executive Producer", name: "Maya Siregar", phone: "+62 811-2000-001", callTime: "06:00 AM" },
      { id: "cr_4", department: "Camera", role: "DoP (Cinematographer)", name: "Reza Rahardian", phone: "+62 811-3000-001", callTime: "06:00 AM" },
      { id: "cr_5", department: "Lighting & Grip", role: "Gaffer", name: "Hendro Wibowo", phone: "+62 811-4000-001", callTime: "05:00 AM" },
      { id: "cr_6", department: "Sound", role: "Location Sound Recordist", name: "Fajar Nugraha", phone: "+62 811-5000-001", callTime: "06:00 AM" },
      { id: "cr_7", department: "Art Department", role: "Art Director", name: "Dian Sastrowardoyo", phone: "+62 811-6000-001", callTime: "05:00 AM" }
    ],
    equipment: [
      { id: "eq_1", category: "Camera", item: "ARRI Alexa Mini LF + Cage Kit", qty: "1 set", status: "Checked / Ready", source: "Rental (CineRent Jkt)" },
      { id: "eq_2", category: "Lenses", item: "Cooke Anamorphic /i Prime Set (25-100mm)", qty: "5 lenses", status: "Checked / Ready", source: "Rental" },
      { id: "eq_3", category: "Grip & Support", item: "DJI Ronin 2 3-Axis Gimbal + Ready Rig", qty: "1 set", status: "Checked / Ready", source: "Rental" },
      { id: "eq_4", category: "Lighting", item: "Aputure LS 600d Pro + F10 Fresnel", qty: "2 units", status: "Checked / Ready", source: "Rental" },
      { id: "eq_5", category: "Sound", item: "Sound Devices 833 8-Channel Mixer", qty: "1 unit", status: "Checked / Ready", source: "Rental" }
    ],
    daySchedule: [
      { time: "05:00 AM", activity: "Loading In & Genset Setup (Grip & Lighting & Art)" },
      { time: "06:00 AM", activity: "General Crew Call & Hot Breakfast / Coffee" },
      { time: "07:00 AM", activity: "Cast Arrives - Wardrobe & Makeup" },
      { time: "07:30 AM", activity: "Block & Light Scene 1 (INT. Roastery)" },
      { time: "08:15 AM", activity: "SHOOT Scene 1 (Shots 1A, 1B, 1C)" },
      { time: "12:00 PM", activity: "LUNCH BREAK (Catering Menu A & B, Halal)" },
      { time: "13:30 PM", activity: "SHOOT Scene 2 (Sidewalk Tracking)" },
      { time: "17:30 PM", activity: "SHOOT Scene 3 (INT. Office Set)" },
      { time: "20:00 PM", activity: "WRAP DAY 1 - Data Backup & DIT Sign-off" }
    ],
    departmentNotes: {
      production: "Semua kru wajib memakai ID badge produksi. Parkir khusus Gate B.",
      camera: "Data wrangler wajib backup 3 salinan: 2x Rugged SSD + 1x Cloud backup harian.",
      lighting: "Distribusi kabel trotoar wajib diberi rubber ramp pelindung.",
      sound: "Potensi ambient noise jalan raya; gunakan wireless lav tersembunyi.",
      art: "Pastikan cup kopi mockup bersih dan label logo terlihat jelas.",
      wardrobe: "Sediakan cadangan kemeja jika ada tumpahan kopi saat take."
    }
  },
  {
    id: "proj_mv_nirwana_2026",
    title: "Midnight Echoes - 'Nirwana' MV",
    type: "Music Video (MV)",
    status: "Ready to Shoot",
    client: "Sony Music Indonesia",
    agency: "IndieVibe Label",
    productionCompany: "Aphi Studio Production",
    director: "Gilang Pradipta",
    producer: "Siti Rahma",
    firstAD: "Rio Dewanto",
    dop: "Yudi Datau",
    currentDay: 1,
    totalDays: 1,
    shootDate: "2026-10-22",
    weather: "Night Shooting, Clear Sky, 24°C",
    sunrise: "05:30 AM",
    sunset: "17:50 PM",
    generalCall: "16:00 PM",
    locationName: "Gedung Tua Kota Tua & Rooftop",
    locationAddress: "Kawasan Kota Tua Jakarta Barat",
    parkingNotes: "Area Parkir Museum Fatahillah Barat",
    hospitalName: "RS Pelabuhan Jakarta Barat",
    hospitalAddress: "Jl. Kramat Jaya No. 1",
    hospitalPhone: "(021) 440-3026",
    scenes: [
      {
        id: "sc_mv1",
        sceneNumber: "1",
        slugline: "INT. ABANDONED WAREHOUSE - NIGHT",
        setting: "INT",
        timeOfDay: "NIGHT",
        location: "Warehouse Stage",
        pages: "1 page",
        synopsis: "Full band performance dengan backlight neon merah dan efek kabut asap tebal.",
        cast: ["Vocalist", "Guitarist", "Drummer", "Bassist"],
        props: ["Vintage Microphone", "Custom Fender Stratocaster", "Pearl Drum Kit"],
        wardrobe: ["All Black Cyberpunk Goth Leather"],
        fx: ["Smoke Machine DMX", "Red & Blue Laser Rigs"],
        notes: "Gunakan playback audio sinkronisasi timecode untuk lypsinc."
      }
    ],
    shots: [
      {
        id: "shot_mv1a",
        sceneId: "sc_mv1",
        shotNumber: "1A",
        size: "Wide Shot (WS)",
        angle: "Low Angle",
        movement: "Circular Tracking 360",
        lens: "24mm f/1.4",
        fps: "48 fps",
        status: "Planned",
        description: "Kamera memutari drum set saat musik drop pertama kali."
      }
    ],
    cast: [
      {
        id: "cast_mv1",
        castNumber: "1",
        characterName: "Lead Vocalist",
        actorName: "Adrian Syah",
        role: "Band Frontman",
        phone: "+62 812-4455-6677",
        pickupTime: "15:30 PM",
        hmuTime: "16:00 PM",
        onSetTime: "17:30 PM",
        notes: "Rambut ditata wet-look."
      }
    ],
    crew: [
      { id: "cr_mv1", department: "Direction", role: "Director", name: "Gilang Pradipta", phone: "+62 811-9000-001", callTime: "16:00 PM" },
      { id: "cr_mv2", department: "Camera", role: "DoP", name: "Yudi Datau", phone: "+62 811-9000-002", callTime: "16:00 PM" }
    ],
    equipment: [
      { id: "eq_mv1", category: "Camera", item: "RED V-Raptor 8K VV", qty: "1 unit", status: "Checked / Ready", source: "Rental" },
      { id: "eq_mv2", category: "Lighting", item: "Astera Titan Tubes 8-Kit", qty: "1 box", status: "Checked / Ready", source: "Rental" }
    ],
    daySchedule: [
      { time: "14:00 PM", activity: "Loading In & Lighting Rigging" },
      { time: "16:00 PM", activity: "General Crew Call & Soundcheck Audio Playback" },
      { time: "18:00 PM", activity: "Night Shoot Commences" },
      { time: "01:00 AM", activity: "Estimated Wrap & Data Dump" }
    ],
    departmentNotes: {
      production: "Syuting malam, siapkan kopi panas, minuman jahe, dan tim medis lapangan.",
      sound: "Pastikan master track audio playback terkirim ke monitor in-ear vokalis."
    }
  },
  {
    id: "proj_film_lembayung_2026",
    title: "Lembayung Senja (Short Film)",
    type: "Short Film / Feature",
    status: "In Prep",
    client: "Indie Film Grant / Festival Circuit",
    agency: "Aphi Cinema Initiative",
    productionCompany: "Aphi Studio Production",
    director: "Raditya Nugraha",
    producer: "Anindita Putri",
    firstAD: "Kevin Pratama",
    dop: "Bambang Supriadi",
    currentDay: 1,
    totalDays: 3,
    shootDate: "2026-11-05",
    weather: "Golden Hour Sunset, 26°C",
    sunrise: "05:15 AM",
    sunset: "17:40 PM",
    generalCall: "13:00 PM",
    locationName: "Bukit Teletubbies & Pantai Selatan",
    locationAddress: "Kecamatan Dlingo, Bantul, D.I. Yogyakarta",
    parkingNotes: "Parkir Lapangan Desa, Shuttle Pickup menuju Puncak Bukit",
    hospitalName: "RSUD Panembahan Senopati Bantul",
    hospitalAddress: "Jl. Dr. Wahidin Sudirohusodo No. 18, Bantul",
    hospitalPhone: "(0274) 367381",
    scenes: [
      {
        id: "sc_flm1",
        sceneNumber: "1",
        slugline: "EXT. HILLTOP PINUS - GOLDEN HOUR",
        setting: "EXT",
        timeOfDay: "GOLDEN HOUR",
        location: "Puncak Bukit Pinus",
        pages: "2 pages",
        synopsis: "Dua sahabat masa kecil bertemu kembali setelah 10 tahun berpisah di bawah cahaya lembayung senja.",
        cast: ["Bagas (Dewasa)", "Laras (Dewasa)"],
        props: ["Buku Harian Tua", "Kamera Analog 35mm"],
        wardrobe: ["Pakaian Hangat Rajut Earth-tone"],
        fx: ["Natural Sunset Lighting Only", "Drone Aerial Cam"],
        notes: "Golden hour window hanya 45 menit! Blocking harus sempurna sebelum jam 17:00."
      }
    ],
    shots: [
      {
        id: "shot_flm1a",
        sceneId: "sc_flm1",
        shotNumber: "1A",
        size: "Extreme Wide Shot (EWS)",
        angle: "High Angle",
        movement: "Drone Orbit",
        lens: "28mm Anamorphic",
        fps: "24 fps",
        status: "Planned",
        description: "Pemandangan bukit luas saat matahari mulai menyentuh ufuk barat."
      }
    ],
    cast: [
      {
        id: "cast_flm1",
        castNumber: "1",
        characterName: "Bagas",
        actorName: "Chicco Jerikho",
        role: "Main Protagonist",
        phone: "+62 811-7788-9900",
        pickupTime: "12:00 PM",
        hmuTime: "13:00 PM",
        onSetTime: "15:30 PM",
        notes: "Karakter melankolis, makeup natural tanpa bedak berlebih."
      }
    ],
    crew: [
      { id: "cr_flm1", department: "Direction", role: "Director", name: "Raditya Nugraha", phone: "+62 811-3344-5566", callTime: "13:00 PM" }
    ],
    equipment: [
      { id: "eq_flm1", category: "Camera", item: "Sony FX6 Cinema Line Full Frame", qty: "1 unit", status: "Checked / Ready", source: "In-House" }
    ],
    daySchedule: [
      { time: "13:00 PM", activity: "Crew Call at Jogja Basecamp & Loading to Hilltop" },
      { time: "15:00 PM", activity: "Standby on Set & Rehearsal with Talents" },
      { time: "16:45 PM", activity: "ROLL CAMERA - Golden Hour Takes" },
      { time: "18:00 PM", activity: "Sunset Wrap & Dinner at Basecamp" }
    ],
    departmentNotes: {
      production: "Medan bukit berbatu; wajib menggunakan sepatu boots/trekking."
    }
  }
];


const DEFAULT_USERS = [
  {
    id: "usr_admin",
    name: "Aphi Master Admin",
    email: "admin@aphistudio.com",
    password: "admin123",
    role: "Studio Owner & Executive Producer",
    status: "approved",
    isAdmin: true,
    registeredAt: "2026-10-01"
  },
  {
    id: "usr_crew_budi",
    name: "Budi Santoso",
    email: "budi@aphistudio.com",
    password: "budi123",
    role: "1st Assistant Director",
    status: "approved",
    isAdmin: false,
    registeredAt: "2026-10-01"
  },
  {
    id: "usr_pending_rian",
    name: "Rian Hidayat",
    email: "rian@gmail.com",
    password: "rian123",
    role: "Lighting & Grip Crew",
    status: "pending",
    isAdmin: false,
    registeredAt: "2026-10-01"
  }
];

class ProductionApp {
  constructor() {
    this.storageProjectsKey = "aphi_studio_production_v5";
    this.storageUsersKey = "aphi_studio_users_v5";
    this.storageSessionKey = "aphi_studio_current_user_v5";

    this.projects = this.loadProjects();
    this.users = this.loadUsers();
    this.currentUser = this.loadSession();
    this.activeProjectId = null;
    this.searchQuery = "";

    this.initDOM();
  }

  loadProjects() {
    const saved = localStorage.getItem(this.storageProjectsKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return JSON.parse(JSON.stringify(INITIAL_PROJECTS));
  }

  saveProjects() {
    localStorage.setItem(this.storageProjectsKey, JSON.stringify(this.projects));
    if (this.activeProjectId) {
      this.updateWorkspaceStats();
    } else {
      this.renderLanding();
    }
  }

  loadUsers() {
    const saved = localStorage.getItem(this.storageUsersKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return JSON.parse(JSON.stringify(DEFAULT_USERS));
  }

  saveUsers() {
    localStorage.setItem(this.storageUsersKey, JSON.stringify(this.users));
    this.updateHeaderControls();
    this.renderAdminUsersList();
  }

  loadSession() {
    const saved = localStorage.getItem(this.storageSessionKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return null;
  }

  saveSession(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(this.storageSessionKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.storageSessionKey);
    }
    this.updateHeaderControls();
  }

  initDOM() {
    this.setupWorkspaceTabs();
    if (!this.currentUser) {
      this.showAuthView();
    } else {
      this.navToLanding();
    }
  }

  showAuthView() {
    document.getElementById("main-header").style.display = "none";
    document.getElementById("view-auth").style.display = "block";
    document.getElementById("view-landing").style.display = "none";
    document.getElementById("view-workspace").style.display = "none";
  }

  switchAuthTab(tab) {
    this.hideAuthAlert();
    const btnLogin = document.getElementById("btn-tab-login");
    const btnSignup = document.getElementById("btn-tab-signup");
    const formLogin = document.getElementById("form-login");
    const formSignup = document.getElementById("form-signup");
    const titleText = document.getElementById("auth-title-text");

    if (tab === "login") {
      btnLogin.classList.add("active");
      btnSignup.classList.remove("active");
      formLogin.style.display = "block";
      formSignup.style.display = "none";
      titleText.textContent = "Log In";
    } else {
      btnLogin.classList.remove("active");
      btnSignup.classList.add("active");
      formLogin.style.display = "none";
      formSignup.style.display = "block";
      titleText.textContent = "Join Us";
    }
  }

  showAuthAlert(message, type = "error") {
    const box = document.getElementById("auth-alert-box");
    box.className = `auth-alert auth-alert-${type}`;
    box.innerHTML = message;
    box.style.display = "block";
  }

  hideAuthAlert() {
    const box = document.getElementById("auth-alert-box");
    if (box) box.style.display = "none";
  }

  handleLogin() {
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    const user = this.users.find((u) => u.email.toLowerCase() === email && u.password === password);
    if (!user) {
      this.showAuthAlert("❌ Email atau password salah.", "error");
      return;
    }

    if (user.status === "pending") {
      this.showAuthAlert("⏳ <strong>Pendaftaran Menunggu Persetujuan:</strong><br>Akun Anda belum disetujui oleh Master Admin Aphi Studio. Silakan tunggu konfirmasi admin.", "warning");
      return;
    }

    if (user.status === "rejected") {
      this.showAuthAlert("🚫 Akun ini telah ditolak atau dinonaktifkan oleh Admin.", "error");
      return;
    }

    this.saveSession(user);
    this.hideAuthAlert();
    document.getElementById("form-login").reset();
    this.navToLanding();
  }

  handleSignUp() {
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();
    const role = document.getElementById("signup-role").value;
    const password = document.getElementById("signup-password").value;
    const confirmPass = document.getElementById("signup-password-confirm").value;

    if (password !== confirmPass) {
      this.showAuthAlert("❌ Password dan Konfirmasi Password tidak sama.", "error");
      return;
    }

    if (this.users.some((u) => u.email.toLowerCase() === email)) {
      this.showAuthAlert("⚠️ Email ini sudah terdaftar. Silakan log in.", "warning");
      return;
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      name,
      email,
      password,
      role,
      status: "pending",
      isAdmin: false,
      registeredAt: new Date().toISOString().split("T")[0]
    };

    this.users.push(newUser);
    this.saveUsers();

    document.getElementById("form-signup").reset();
    this.switchAuthTab("login");
    this.showAuthAlert("🎉 <strong>Pendaftaran Berhasil!</strong><br>Akun Anda berstatus <strong>Pending Approval</strong>. Harap tunggu persetujuan Master Admin sebelum masuk.", "success");
  }

  quickDemoAdminLogin() {
    const admin = this.users.find(u => u.isAdmin);
    if (admin) {
      this.saveSession(admin);
      this.hideAuthAlert();
      this.navToLanding();
    }
  }

  logout() {
    if (confirm("Keluar dari sesi Aphi Studio Production?")) {
      this.saveSession(null);
      this.activeProjectId = null;
      this.showAuthView();
    }
  }

  openAdminApprovalsModal() {
    if (!this.currentUser || !this.currentUser.isAdmin) return;
    this.renderAdminUsersList();
    this.openModal("modal-admin-approvals");
  }

  renderAdminUsersList() {
    const tbody = document.getElementById("admin-users-table-body");
    if (!tbody) return;

    tbody.innerHTML = this.users.map((u) => {
      let statusBadge = "";
      if (u.status === "approved") {
        statusBadge = `<span class="badge badge-green">✓ Disetujui</span>`;
      } else if (u.status === "rejected") {
        statusBadge = `<span class="badge badge-red">✕ Ditolak</span>`;
      } else {
        statusBadge = `<span class="badge badge-gold">⏳ Menunggu (Pending)</span>`;
      }

      let actionButtons = "";
      if (u.isAdmin) {
        actionButtons = `<span style="font-size:0.75rem; color:var(--apple-blue); font-weight:bold;">👑 Master Admin</span>`;
      } else {
        actionButtons = `
          <div style="display:flex; gap:0.3rem;">
            ${u.status !== 'approved' ? `<button class="btn btn-primary btn-sm" onclick="app.approveUser('${u.id}')">Setujui</button>` : ''}
            ${u.status !== 'rejected' ? `<button class="btn btn-danger-glass btn-sm" onclick="app.rejectUser('${u.id}')">Tolak</button>` : ''}
            <button class="btn btn-glass btn-sm" onclick="app.deleteUser('${u.id}')" title="Hapus User">🗑️</button>
          </div>
        `;
      }

      return `
        <tr style="${u.status === 'pending' ? 'background: rgba(245, 158, 11, 0.05); font-weight:600;' : ''}">
          <td><strong>${this.escapeHTML(u.name)}</strong></td>
          <td>${this.escapeHTML(u.email)}</td>
          <td>${this.escapeHTML(u.role)}</td>
          <td>${statusBadge}</td>
          <td>${actionButtons}</td>
        </tr>
      `;
    }).join("");
  }

  approveUser(id) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return;
    user.status = "approved";
    this.saveUsers();
  }

  rejectUser(id) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return;
    user.status = "rejected";
    this.saveUsers();
  }

  deleteUser(id) {
    const user = this.users.find((u) => u.id === id);
    if (!user) return;
    if (confirm(`Hapus akun "${user.name}"?`)) {
      this.users = this.users.filter((u) => u.id !== id);
      this.saveUsers();
    }
  }

  updateHeaderControls() {
    const container = document.getElementById("header-user-controls");
    if (!container) return;

    if (!this.currentUser) {
      container.innerHTML = ``;
      return;
    }

    const pendingCount = this.users.filter((u) => u.status === "pending").length;
    const adminBtn = this.currentUser.isAdmin ? `
      <button class="btn btn-admin-glass btn-sm" onclick="app.openAdminApprovalsModal()" title="Persetujuan Akun">
        🛡️ Kru ${pendingCount > 0 ? `<span class="badge badge-gold" style="background:#b45309; color:#fff; font-size:0.68rem; padding:0.1rem 0.4rem; margin-left:0.2rem;">${pendingCount} Pending</span>` : ''}
      </button>
    ` : '';

    container.innerHTML = `
      <div class="user-profile-badge">
        <span>👤 <strong>${this.escapeHTML(this.currentUser.name)}</strong></span>
        ${this.currentUser.isAdmin ? '<span class="badge badge-purple">Admin</span>' : `<span style="font-size:0.75rem; color:var(--apple-text-sub);">${this.escapeHTML(this.currentUser.role)}</span>`}
      </div>
      ${adminBtn}
      <button class="btn btn-glass btn-sm" onclick="app.exportAllJSON()" title="Export Backup">💾</button>
      <button class="btn btn-danger-glass btn-sm" onclick="app.logout()">Keluar</button>
    `;
  }

  handleSearch(val) {
    this.searchQuery = (val || "").trim().toLowerCase();
    this.renderLanding();
  }

  // ==========================================
  // NAVIGATION BETWEEN LANDING & WORKSPACE
  // ==========================================
  navToLanding() {
    if (!this.currentUser) return this.showAuthView();

    this.activeProjectId = null;
    document.getElementById("main-header").style.display = "flex";
    document.getElementById("view-auth").style.display = "none";
    document.getElementById("view-landing").style.display = "block";
    document.getElementById("view-workspace").style.display = "none";
    document.getElementById("header-search-wrap").style.display = "flex";

    // Greeting update (Image 4)
    document.getElementById("user-greeting-heading").textContent = `Selamat datang, ${this.currentUser.name.split(' ')[0]} 👋`;

    this.updateHeaderControls();
    this.renderLanding();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openProject(projectId) {
    if (!this.currentUser) return this.showAuthView();

    this.activeProjectId = projectId;
    const proj = this.getActiveProject();
    if (!proj) return;

    document.getElementById("main-header").style.display = "flex";
    document.getElementById("view-auth").style.display = "none";
    document.getElementById("view-landing").style.display = "none";
    document.getElementById("view-workspace").style.display = "block";
    document.getElementById("header-search-wrap").style.display = "none";

    document.getElementById("ws-project-title").textContent = proj.title || "Untitled";
    document.getElementById("ws-project-type").textContent = proj.type || "Film/Video";
    document.getElementById("ws-day-badge").textContent = `Day ${proj.currentDay || 1}/${proj.totalDays || 1}`;
    document.getElementById("ws-project-sub").innerHTML = `Klien: <strong>${this.escapeHTML(proj.client || "-")}</strong> &bull; Sutradara: <strong>${this.escapeHTML(proj.director || "-")}</strong> &bull; Tanggal: <strong>${proj.shootDate || "-"}</strong>`;

    this.updateHeaderControls();

    // Reset tab to Overview
    document.querySelectorAll(".seg-tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll("#view-workspace .tab-pane").forEach((p) => p.classList.remove("active"));
    const firstTabBtn = document.querySelector(`.seg-tab-btn[data-tab="tab-overview"]`);
    if (firstTabBtn) firstTabBtn.classList.add("active");
    const firstPane = document.getElementById("tab-overview");
    if (firstPane) firstPane.classList.add("active");

    this.renderWorkspaceAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openFirstProjectCallSheet() {
    const first = this.projects[0];
    if (first) {
      this.openProject(first.id);
      const csBtn = document.querySelector(`.seg-tab-btn[data-tab="tab-callsheet"]`);
      if (csBtn) csBtn.click();
    }
  }

  getActiveProject() {
    return this.projects.find((p) => p.id === this.activeProjectId) || this.projects[0];
  }

  // ==========================================
  // VIEW 1: LANDING & DASHBOARD RENDERING
  // ==========================================
  renderLanding() {
    const grid = document.getElementById("folder-projects-container");
    const draftsContainer = document.getElementById("drafts-list-container");
    if (!grid) return;

    let filtered = this.projects;
    if (this.searchQuery) {
      filtered = this.projects.filter(p => 
        (p.title || "").toLowerCase().includes(this.searchQuery) ||
        (p.client || "").toLowerCase().includes(this.searchQuery) ||
        (p.type || "").toLowerCase().includes(this.searchQuery)
      );
    }

    document.getElementById("badge-total-callsheets").textContent = this.projects.length;
    document.getElementById("drafts-count-heading").textContent = `Drafts & Projects (${filtered.length})`;

    // 1. RENDER FOLDER CARDS (IMAGE 3 REFERENCE)
    let folderHtml = "";
    filtered.forEach((p, idx) => {
      let themeClass = "theme-gradient-blue";
      if (p.type.includes("Music Video") || p.type.includes("MV")) themeClass = "theme-gradient-red";
      else if (p.type.includes("Short Film") || p.type.includes("Feature")) themeClass = "theme-gradient-green";
      else if (idx % 3 === 1) themeClass = "theme-gradient-purple";

      const sceneCount = (p.scenes || []).length;
      const shotCount = (p.shots || []).length;

      folderHtml += `
        <div class="folder-card ${themeClass}" onclick="app.openProject('${p.id}')">
          <!-- 3 White Sheets Peeking Out (Image 3) -->
          <div class="peeking-sheets-wrapper">
            <div class="peeking-sheet sheet-left">
              <div class="paper-line" style="width:75%;"></div>
              <div class="paper-line" style="width:90%;"></div>
              <div class="paper-line" style="width:60%;"></div>
            </div>
            <div class="peeking-sheet sheet-right">
              <div class="paper-line" style="width:85%;"></div>
              <div class="paper-line" style="width:70%;"></div>
              <div class="paper-line" style="width:50%;"></div>
            </div>
            <div class="peeking-sheet sheet-center">
              <div class="paper-line" style="width:80%;"></div>
              <div class="paper-line" style="width:95%;"></div>
              <div class="paper-line" style="width:65%;"></div>
              <div class="paper-line" style="width:85%;"></div>
            </div>
          </div>

          <!-- Dark Folder Pocket Flap (Image 3) -->
          <div class="folder-dark-pocket">
            <div class="folder-pocket-tab-cut"></div>
            <div class="folder-title-row">
              <h4>${this.escapeHTML(p.title)}</h4>
              <span style="cursor:pointer; font-size:1.1rem; opacity:0.8;" onclick="event.stopPropagation(); app.deleteProject('${p.id}')" title="Hapus Proyek">•••</span>
            </div>
            <div class="folder-subtext">${this.escapeHTML(p.type)} &bull; ${this.escapeHTML(p.status || "In Prep")}</div>

            <div class="folder-footer-stats">
              <span>📄 ${sceneCount} Scenes &bull; ${shotCount} Shots</span>
              <span style="font-weight:600; color:#ffffff;">Day ${p.currentDay || 1}/${p.totalDays || 1}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Add New Project Folder Card
    folderHtml += `
      <div class="folder-card" style="background:#ffffff; border: 2px dashed #cbd5e1; display:flex; align-items:center; justify-content:center; text-align:center;" onclick="app.openNewProjectModal()">
        <div>
          <div style="font-size:2.8rem; margin-bottom:0.5rem;">✨</div>
          <h4 style="font-size:1.05rem; font-weight:800; color:#1d4ed8; margin-bottom:0.25rem;">+ New Production</h4>
          <p style="font-size:0.78rem; color:var(--apple-text-sub);">Start a new TVC, MV, or Film</p>
        </div>
      </div>
    `;

    grid.innerHTML = folderHtml;

    // 2. RENDER DRAFTS LIST (IMAGE 4 LOWER TABLE)
    let draftsHtml = "";
    filtered.forEach((p) => {
      draftsHtml += `
        <div class="draft-item-row" onclick="app.openProject('${p.id}')" style="cursor:pointer;">
          <div class="draft-item-left">
            <div class="draft-icon-box">📁</div>
            <div>
              <div style="font-weight:700; font-size:0.86rem; color:var(--apple-dark);">${this.escapeHTML(p.title)}</div>
              <div style="font-size:0.74rem; color:var(--apple-text-tertiary);">${this.escapeHTML(p.type)} &bull; ${p.shootDate || "No date"}</div>
            </div>
          </div>
          <button class="btn btn-glass btn-sm" style="font-size:0.75rem;" onclick="event.stopPropagation(); app.openProject('${p.id}')">
            Resume
          </button>
        </div>
      `;
    });
    draftsContainer.innerHTML = draftsHtml || `<div style="text-align:center; padding:1rem; color:var(--apple-text-sub);">No projects found.</div>`;
  }

  // ==========================================
  // WORKSPACE VIEW LOGIC
  // ==========================================
  setupWorkspaceTabs() {
    const tabBtns = document.querySelectorAll(".seg-tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        document.querySelectorAll("#view-workspace .tab-pane").forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        const targetId = btn.getAttribute("data-tab");
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add("active");

        if (targetId === "tab-callsheet") {
          this.renderCallSheet();
        }
      });
    });
  }

  renderWorkspaceAll() {
    const p = this.getActiveProject();
    if (!p) return;

    this.updateWorkspaceStats();
    this.renderWorkspaceProjectForm();
    this.renderScenes();
    this.renderShotList();
    this.renderCast();
    this.renderCrew();
    this.renderEquipment();
    this.renderCallSheet();
  }

  updateWorkspaceStats() {
    const p = this.getActiveProject();
    if (!p) return;
    document.getElementById("stat-ws-scenes").textContent = (p.scenes || []).length;
    document.getElementById("stat-ws-shots").textContent = (p.shots || []).length;
    document.getElementById("stat-ws-cast").textContent = (p.cast || []).length;
    document.getElementById("stat-ws-crew-gear").textContent = `${(p.crew || []).length} Kru / ${(p.equipment || []).length} Gear`;
  }

  renderWorkspaceProjectForm() {
    const p = this.getActiveProject();
    if (!p) return;

    document.getElementById("ws-inp-title").value = p.title || "";
    document.getElementById("ws-inp-type").value = p.type || "Commercial (TVC & Digital)";
    document.getElementById("ws-inp-status").value = p.status || "In Prep";
    document.getElementById("ws-inp-client").value = p.client || "";
    document.getElementById("ws-inp-agency").value = p.agency || "";
    document.getElementById("ws-inp-director").value = p.director || "";
    document.getElementById("ws-inp-producer").value = p.producer || "";
    document.getElementById("ws-inp-first-ad").value = p.firstAD || "";
    document.getElementById("ws-inp-dop").value = p.dop || "";

    document.getElementById("ws-inp-shoot-date").value = p.shootDate || "";
    document.getElementById("ws-inp-current-day").value = p.currentDay || 1;
    document.getElementById("ws-inp-total-days").value = p.totalDays || 1;
    document.getElementById("ws-inp-general-call").value = p.generalCall || "06:00 AM";
    document.getElementById("ws-inp-sunrise").value = p.sunrise || "05:30 AM";
    document.getElementById("ws-inp-sunset").value = p.sunset || "17:45 PM";
    document.getElementById("ws-inp-weather").value = p.weather || "";
    document.getElementById("ws-inp-location-name").value = p.locationName || "";
    document.getElementById("ws-inp-location-address").value = p.locationAddress || "";
    document.getElementById("ws-inp-parking-notes").value = p.parkingNotes || "";
    document.getElementById("ws-inp-hospital-name").value = p.hospitalName || "";
    document.getElementById("ws-inp-hospital-address").value = p.hospitalAddress || "";
    document.getElementById("ws-inp-hospital-phone").value = p.hospitalPhone || "";
  }

  saveActiveProjectDetails() {
    const p = this.getActiveProject();
    if (!p) return;

    p.title = document.getElementById("ws-inp-title").value.trim();
    p.type = document.getElementById("ws-inp-type").value;
    p.status = document.getElementById("ws-inp-status").value;
    p.client = document.getElementById("ws-inp-client").value.trim();
    p.agency = document.getElementById("ws-inp-agency").value.trim();
    p.director = document.getElementById("ws-inp-director").value.trim();
    p.producer = document.getElementById("ws-inp-producer").value.trim();
    p.firstAD = document.getElementById("ws-inp-first-ad").value.trim();
    p.dop = document.getElementById("ws-inp-dop").value.trim();

    p.shootDate = document.getElementById("ws-inp-shoot-date").value;
    p.currentDay = parseInt(document.getElementById("ws-inp-current-day").value) || 1;
    p.totalDays = parseInt(document.getElementById("ws-inp-total-days").value) || 1;
    p.generalCall = document.getElementById("ws-inp-general-call").value.trim();
    p.sunrise = document.getElementById("ws-inp-sunrise").value.trim();
    p.sunset = document.getElementById("ws-inp-sunset").value.trim();
    p.weather = document.getElementById("ws-inp-weather").value.trim();
    p.locationName = document.getElementById("ws-inp-location-name").value.trim();
    p.locationAddress = document.getElementById("ws-inp-location-address").value.trim();
    p.parkingNotes = document.getElementById("ws-inp-parking-notes").value.trim();
    p.hospitalName = document.getElementById("ws-inp-hospital-name").value.trim();
    p.hospitalAddress = document.getElementById("ws-inp-hospital-address").value.trim();
    p.hospitalPhone = document.getElementById("ws-inp-hospital-phone").value.trim();

    this.saveProjects();
    this.renderWorkspaceAll();
    alert("Data proyek berhasil disimpan!");
  }

  renderScenes() {
    const p = this.getActiveProject();
    const container = document.getElementById("scenes-list-container");
    if (!p || !p.scenes || p.scenes.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--apple-text-sub);">Belum ada adegan. Klik <strong>+ Tambah Adegan</strong>.</div>`;
      return;
    }

    let html = "";
    p.scenes.forEach((sc) => {
      const isExt = (sc.setting || "").includes("EXT");
      const settingBadge = isExt ? `<span class="badge badge-gold">EXT</span>` : `<span class="badge badge-blue">INT</span>`;
      const timeBadge = `<span class="badge badge-purple">${sc.timeOfDay || "DAY"}</span>`;

      const renderBubbles = (items) => {
        if (!items || items.length === 0) return `<span style="color:var(--apple-text-tertiary); font-size:0.7rem;">-</span>`;
        return items.map((it) => `<span class="tag-bubble">${this.escapeHTML(it)}</span>`).join("");
      };

      html += `
        <div class="scene-strip-card">
          <div class="scene-strip-head">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="badge badge-blue" style="font-weight:800;">SC ${sc.sceneNumber}</span>
              ${settingBadge}
              ${timeBadge}
              <strong style="font-family:var(--font-mono); font-size:0.88rem;">${this.escapeHTML(sc.slugline || `${sc.setting}. ${sc.location} - ${sc.timeOfDay}`)}</strong>
            </div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span style="font-size:0.75rem; color:var(--apple-text-sub);">${sc.pages || "1 page"}</span>
              <button class="btn btn-glass btn-sm" onclick="app.editScene('${sc.id}')">Edit</button>
              <button class="btn btn-danger-glass btn-sm" onclick="app.deleteScene('${sc.id}')">Hapus</button>
            </div>
          </div>
          <div class="scene-strip-body">
            <p style="font-size:0.83rem; margin-bottom:0.6rem; color:var(--apple-dark);">
              <strong>Sinopsis:</strong> ${this.escapeHTML(sc.synopsis || "-")}
            </p>
            <div class="grid-4" style="background:rgba(0,0,0,0.02); padding:0.6rem; border-radius:8px;">
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">🎭 Cast</span>
                <div class="tag-bubble-row">${renderBubbles(sc.cast)}</div>
              </div>
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">📦 Props</span>
                <div class="tag-bubble-row">${renderBubbles(sc.props)}</div>
              </div>
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">👔 Wardrobe</span>
                <div class="tag-bubble-row">${renderBubbles(sc.wardrobe)}</div>
              </div>
              <div>
                <span style="font-size:0.68rem; text-transform:uppercase; color:var(--apple-text-sub); font-weight:700;">✨ FX / Grip</span>
                <div class="tag-bubble-row">${renderBubbles(sc.fx)}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    this.updateSceneSelectOptions();
  }

  updateSceneSelectOptions() {
    const p = this.getActiveProject();
    if (!p) return;
    const filterSelect = document.getElementById("filter-shot-scene");
    const currentVal = filterSelect.value;
    filterSelect.innerHTML = `<option value="ALL">Semua Adegan</option>` +
      (p.scenes || []).map((s) => `<option value="${s.id}">Scene ${s.sceneNumber}: ${this.escapeHTML(s.location || s.slugline)}</option>`).join("");
    if ((p.scenes || []).some(s => s.id === currentVal)) filterSelect.value = currentVal;

    const modalSelect = document.getElementById("sht-scene-id");
    if (modalSelect) {
      modalSelect.innerHTML = (p.scenes || []).map((s) => `<option value="${s.id}">Scene ${s.sceneNumber} (${s.setting}. ${s.location})</option>`).join("");
    }
  }

  openAddSceneModal() {
    const p = this.getActiveProject();
    document.getElementById("modal-scene-title").textContent = "Tambah Adegan (Scene)";
    document.getElementById("scene-form-id").value = "";
    document.getElementById("sf-num").value = ((p.scenes || []).length + 1).toString();
    document.getElementById("sf-setting").value = "INT";
    document.getElementById("sf-time").value = "DAY";
    document.getElementById("sf-location").value = "";
    document.getElementById("sf-pages").value = "1 page";
    document.getElementById("sf-synopsis").value = "";
    document.getElementById("sf-cast").value = "";
    document.getElementById("sf-props").value = "";
    document.getElementById("sf-wardrobe").value = "";
    document.getElementById("sf-fx").value = "";
    this.openModal("modal-scene");
  }

  editScene(id) {
    const p = this.getActiveProject();
    const sc = (p.scenes || []).find((s) => s.id === id);
    if (!sc) return;
    document.getElementById("modal-scene-title").textContent = `Edit Scene ${sc.sceneNumber}`;
    document.getElementById("scene-form-id").value = sc.id;
    document.getElementById("sf-num").value = sc.sceneNumber;
    document.getElementById("sf-setting").value = sc.setting || "INT";
    document.getElementById("sf-time").value = sc.timeOfDay || "DAY";
    document.getElementById("sf-location").value = sc.location || "";
    document.getElementById("sf-pages").value = sc.pages || "";
    document.getElementById("sf-synopsis").value = sc.synopsis || "";
    document.getElementById("sf-cast").value = (sc.cast || []).join(", ");
    document.getElementById("sf-props").value = (sc.props || []).join(", ");
    document.getElementById("sf-wardrobe").value = (sc.wardrobe || []).join(", ");
    document.getElementById("sf-fx").value = (sc.fx || []).join(", ");
    this.openModal("modal-scene");
  }

  saveSceneForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("scene-form-id").value;
    const num = document.getElementById("sf-num").value.trim();
    const setting = document.getElementById("sf-setting").value;
    const timeOfDay = document.getElementById("sf-time").value;
    const location = document.getElementById("sf-location").value.trim();
    const pages = document.getElementById("sf-pages").value.trim();
    const synopsis = document.getElementById("sf-synopsis").value.trim();

    const parseList = (str) => str.split(",").map((s) => s.trim()).filter(Boolean);

    const sceneData = {
      id: id || `sc_${Date.now()}`,
      sceneNumber: num,
      slugline: `${setting}. ${location.toUpperCase()} - ${timeOfDay}`,
      setting,
      timeOfDay,
      location,
      pages: pages || "1 page",
      synopsis,
      cast: parseList(document.getElementById("sf-cast").value),
      props: parseList(document.getElementById("sf-props").value),
      wardrobe: parseList(document.getElementById("sf-wardrobe").value),
      fx: parseList(document.getElementById("sf-fx").value)
    };

    if (id) {
      const idx = p.scenes.findIndex((s) => s.id === id);
      if (idx !== -1) p.scenes[idx] = sceneData;
    } else {
      if (!p.scenes) p.scenes = [];
      p.scenes.push(sceneData);
    }

    this.saveProjects();
    this.renderScenes();
    this.renderCallSheet();
    this.closeModal("modal-scene");
  }

  deleteScene(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus adegan ini beserta shot terkait?")) {
      p.scenes = p.scenes.filter((s) => s.id !== id);
      p.shots = (p.shots || []).filter((sh) => sh.sceneId !== id);
      this.saveProjects();
      this.renderScenes();
      this.renderShotList();
      this.renderCallSheet();
    }
  }

  renderShotList() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("shot-list-table-body");
    const filter = document.getElementById("filter-shot-scene").value;

    let filtered = p.shots || [];
    if (filter && filter !== "ALL") {
      filtered = filtered.filter((s) => s.sceneId === filter);
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada shot. Klik <strong>+ Tambah Shot</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((sh) => {
      const parentScene = (p.scenes || []).find((s) => s.id === sh.sceneId);
      const isTaken = sh.status === "Taken";
      const statusBadge = isTaken 
        ? `<span class="badge badge-green" style="cursor:pointer;" onclick="app.toggleShotStatus('${sh.id}')">✓ Taken</span>`
        : `<span class="badge badge-gold" style="cursor:pointer;" onclick="app.toggleShotStatus('${sh.id}')">Planned</span>`;

      return `
        <tr style="${isTaken ? 'opacity:0.6;' : ''}">
          <td>${statusBadge}</td>
          <td><strong style="color:var(--apple-blue); font-size:0.9rem;">${sh.shotNumber}</strong></td>
          <td><span class="badge badge-blue">SC ${parentScene ? parentScene.sceneNumber : "?"}</span></td>
          <td><strong>${this.escapeHTML(sh.size)}</strong><br><span style="font-size:0.72rem; color:var(--apple-text-tertiary);">${this.escapeHTML(sh.angle || "")}</span></td>
          <td>${this.escapeHTML(sh.movement || "Static")}</td>
          <td>${this.escapeHTML(sh.lens || "-")}</td>
          <td>${this.escapeHTML(sh.fps || "24 fps")}</td>
          <td style="max-width:280px;">${this.escapeHTML(sh.description || "")}</td>
          <td>
            <div style="display:flex; gap:0.25rem;">
              <button class="btn btn-glass btn-sm" onclick="app.editShot('${sh.id}')">✏️</button>
              <button class="btn btn-danger-glass btn-sm" onclick="app.deleteShot('${sh.id}')">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  toggleShotStatus(id) {
    const p = this.getActiveProject();
    const sh = (p.shots || []).find((s) => s.id === id);
    if (!sh) return;
    sh.status = sh.status === "Taken" ? "Planned" : "Taken";
    this.saveProjects();
    this.renderShotList();
  }

  openAddShotModal() {
    const p = this.getActiveProject();
    if (!p.scenes || p.scenes.length === 0) {
      alert("Harap buat minimal 1 adegan di Script Breakdown terlebih dahulu.");
      return;
    }
    document.getElementById("modal-shot-title").textContent = "Tambah Shot";
    document.getElementById("shot-form-id").value = "";
    this.updateSceneSelectOptions();
    document.getElementById("sht-num").value = `${(p.shots || []).length + 1}A`;
    document.getElementById("sht-movement").value = "";
    document.getElementById("sht-lens").value = "";
    document.getElementById("sht-desc").value = "";
    this.openModal("modal-shot");
  }

  editShot(id) {
    const p = this.getActiveProject();
    const sh = (p.shots || []).find((s) => s.id === id);
    if (!sh) return;
    document.getElementById("modal-shot-title").textContent = `Edit Shot ${sh.shotNumber}`;
    document.getElementById("shot-form-id").value = sh.id;
    this.updateSceneSelectOptions();
    document.getElementById("sht-scene-id").value = sh.sceneId;
    document.getElementById("sht-num").value = sh.shotNumber;
    document.getElementById("sht-size").value = sh.size;
    document.getElementById("sht-angle").value = sh.angle || "Eye Level";
    document.getElementById("sht-movement").value = sh.movement || "";
    document.getElementById("sht-lens").value = sh.lens || "";
    document.getElementById("sht-fps").value = sh.fps || "24 fps";
    document.getElementById("sht-desc").value = sh.description || "";
    this.openModal("modal-shot");
  }

  saveShotForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("shot-form-id").value;
    const shotData = {
      id: id || `shot_${Date.now()}`,
      sceneId: document.getElementById("sht-scene-id").value,
      shotNumber: document.getElementById("sht-num").value.trim(),
      size: document.getElementById("sht-size").value,
      angle: document.getElementById("sht-angle").value,
      movement: document.getElementById("sht-movement").value.trim(),
      lens: document.getElementById("sht-lens").value.trim(),
      fps: document.getElementById("sht-fps").value,
      status: "Planned",
      description: document.getElementById("sht-desc").value.trim()
    };

    if (id) {
      const idx = p.shots.findIndex((s) => s.id === id);
      if (idx !== -1) {
        shotData.status = p.shots[idx].status;
        p.shots[idx] = shotData;
      }
    } else {
      if (!p.shots) p.shots = [];
      p.shots.push(shotData);
    }

    this.saveProjects();
    this.renderShotList();
    this.closeModal("modal-shot");
  }

  deleteShot(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus shot ini?")) {
      p.shots = p.shots.filter((s) => s.id !== id);
      this.saveProjects();
      this.renderShotList();
    }
  }

  renderCast() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("cast-table-body");
    if (!p.cast || p.cast.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada cast. Klik <strong>+ Tambah Cast</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = p.cast.map((c) => `
      <tr>
        <td><strong>${c.castNumber || "#"}</strong></td>
        <td><strong>${this.escapeHTML(c.characterName)}</strong><br><span style="font-size:0.72rem; color:var(--apple-text-tertiary);">${this.escapeHTML(c.role || "")}</span></td>
        <td>${this.escapeHTML(c.actorName)}<br><span style="font-size:0.72rem; color:var(--apple-text-sub);">${this.escapeHTML(c.phone || "")}</span></td>
        <td><span class="badge badge-gold">${c.pickupTime || "-"}</span></td>
        <td>${c.hmuTime || "-"}</td>
        <td><span class="badge badge-blue">${c.onSetTime || "-"}</span></td>
        <td>
          <button class="btn btn-glass btn-sm" onclick="app.editCast('${c.id}')">✏️</button>
          <button class="btn btn-danger-glass btn-sm" onclick="app.deleteCast('${c.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddCastModal() {
    document.getElementById("cast-form-id").value = "";
    document.getElementById("cst-character").value = "";
    document.getElementById("cst-actor").value = "";
    document.getElementById("cst-role").value = "Lead Talent";
    document.getElementById("cst-phone").value = "";
    document.getElementById("cst-pickup").value = "06:30 AM";
    document.getElementById("cst-hmu").value = "07:00 AM";
    document.getElementById("cst-onset").value = "08:00 AM";
    document.getElementById("cst-notes").value = "";
    this.openModal("modal-cast");
  }

  editCast(id) {
    const p = this.getActiveProject();
    const c = (p.cast || []).find((item) => item.id === id);
    if (!c) return;
    document.getElementById("cast-form-id").value = c.id;
    document.getElementById("cst-character").value = c.characterName || "";
    document.getElementById("cst-actor").value = c.actorName || "";
    document.getElementById("cst-role").value = c.role || "";
    document.getElementById("cst-phone").value = c.phone || "";
    document.getElementById("cst-pickup").value = c.pickupTime || "";
    document.getElementById("cst-hmu").value = c.hmuTime || "";
    document.getElementById("cst-onset").value = c.onSetTime || "";
    document.getElementById("cst-notes").value = c.notes || "";
    this.openModal("modal-cast");
  }

  saveCastForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("cast-form-id").value;
    const castData = {
      id: id || `cast_${Date.now()}`,
      castNumber: ((p.cast || []).length + 1).toString(),
      characterName: document.getElementById("cst-character").value.trim(),
      actorName: document.getElementById("cst-actor").value.trim(),
      role: document.getElementById("cst-role").value.trim(),
      phone: document.getElementById("cst-phone").value.trim(),
      pickupTime: document.getElementById("cst-pickup").value.trim(),
      hmuTime: document.getElementById("cst-hmu").value.trim(),
      onSetTime: document.getElementById("cst-onset").value.trim(),
      notes: document.getElementById("cst-notes").value.trim()
    };

    if (id) {
      const idx = p.cast.findIndex((item) => item.id === id);
      if (idx !== -1) {
        castData.castNumber = p.cast[idx].castNumber;
        p.cast[idx] = castData;
      }
    } else {
      if (!p.cast) p.cast = [];
      p.cast.push(castData);
    }

    this.saveProjects();
    this.renderCast();
    this.renderCallSheet();
    this.closeModal("modal-cast");
  }

  deleteCast(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus cast ini?")) {
      p.cast = p.cast.filter((c) => c.id !== id);
      this.saveProjects();
      this.renderCast();
      this.renderCallSheet();
    }
  }

  renderCrew() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("crew-table-body");
    if (!p.crew || p.crew.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada kru. Klik <strong>+ Tambah Kru</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = p.crew.map((cr) => `
      <tr>
        <td><span class="badge badge-purple">${this.escapeHTML(cr.department)}</span></td>
        <td><strong>${this.escapeHTML(cr.role)}</strong></td>
        <td>${this.escapeHTML(cr.name)}</td>
        <td><span class="badge badge-gold">${cr.callTime || "-"}</span></td>
        <td>
          <button class="btn btn-glass btn-sm" onclick="app.editCrew('${cr.id}')">✏️</button>
          <button class="btn btn-danger-glass btn-sm" onclick="app.deleteCrew('${cr.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddCrewModal() {
    document.getElementById("crew-form-id").value = "";
    document.getElementById("crw-name").value = "";
    document.getElementById("crw-phone").value = "";
    document.getElementById("crw-call").value = "06:00 AM";
    this.openModal("modal-crew");
  }

  editCrew(id) {
    const p = this.getActiveProject();
    const cr = (p.crew || []).find((c) => c.id === id);
    if (!cr) return;
    document.getElementById("crew-form-id").value = cr.id;
    document.getElementById("crw-dept").value = cr.department;
    document.getElementById("crw-role").value = cr.role;
    document.getElementById("crw-name").value = cr.name;
    document.getElementById("crw-phone").value = cr.phone || "";
    document.getElementById("crw-call").value = cr.callTime || "";
    this.openModal("modal-crew");
  }

  saveCrewForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("crew-form-id").value;
    const crewData = {
      id: id || `cr_${Date.now()}`,
      department: document.getElementById("crw-dept").value,
      role: document.getElementById("crw-role").value.trim(),
      name: document.getElementById("crw-name").value.trim(),
      phone: document.getElementById("crw-phone").value.trim(),
      callTime: document.getElementById("crw-call").value.trim()
    };

    if (id) {
      const idx = p.crew.findIndex((c) => c.id === id);
      if (idx !== -1) p.crew[idx] = crewData;
    } else {
      if (!p.crew) p.crew = [];
      p.crew.push(crewData);
    }

    this.saveProjects();
    this.renderCrew();
    this.renderCallSheet();
    this.closeModal("modal-crew");
  }

  deleteCrew(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus kru ini?")) {
      p.crew = p.crew.filter((c) => c.id !== id);
      this.saveProjects();
      this.renderCrew();
      this.renderCallSheet();
    }
  }

  renderEquipment() {
    const p = this.getActiveProject();
    const tbody = document.getElementById("equipment-table-body");
    if (!p.equipment || p.equipment.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.25rem; color:var(--apple-text-sub);">Belum ada peralatan. Klik <strong>+ Tambah Gear</strong>.</td></tr>`;
      return;
    }

    tbody.innerHTML = p.equipment.map((eq) => `
      <tr>
        <td><span class="badge badge-blue">${this.escapeHTML(eq.category)}</span></td>
        <td><strong>${this.escapeHTML(eq.item)}</strong></td>
        <td>${this.escapeHTML(eq.qty || "1")}</td>
        <td>${this.escapeHTML(eq.source || "Rental")}</td>
        <td><span class="badge badge-green">${this.escapeHTML(eq.status || "Checked")}</span></td>
        <td>
          <button class="btn btn-glass btn-sm" onclick="app.editEquipment('${eq.id}')">✏️</button>
          <button class="btn btn-danger-glass btn-sm" onclick="app.deleteEquipment('${eq.id}')">🗑️</button>
        </td>
      </tr>
    `).join("");
  }

  openAddEquipmentModal() {
    document.getElementById("eq-form-id").value = "";
    document.getElementById("eqf-name").value = "";
    document.getElementById("eqf-qty").value = "1 unit";
    document.getElementById("eqf-source").value = "Rental";
    this.openModal("modal-equipment");
  }

  editEquipment(id) {
    const p = this.getActiveProject();
    const eq = (p.equipment || []).find((e) => e.id === id);
    if (!eq) return;
    document.getElementById("eq-form-id").value = eq.id;
    document.getElementById("eqf-category").value = eq.category;
    document.getElementById("eqf-name").value = eq.item;
    document.getElementById("eqf-qty").value = eq.qty || "";
    document.getElementById("eqf-source").value = eq.source || "";
    document.getElementById("eqf-status").value = eq.status || "Checked / Ready";
    this.openModal("modal-equipment");
  }

  saveEquipmentForm() {
    const p = this.getActiveProject();
    const id = document.getElementById("eq-form-id").value;
    const eqData = {
      id: id || `eq_${Date.now()}`,
      category: document.getElementById("eqf-category").value,
      item: document.getElementById("eqf-name").value.trim(),
      qty: document.getElementById("eqf-qty").value.trim(),
      source: document.getElementById("eqf-source").value.trim(),
      status: document.getElementById("eqf-status").value
    };

    if (id) {
      const idx = p.equipment.findIndex((e) => e.id === id);
      if (idx !== -1) p.equipment[idx] = eqData;
    } else {
      if (!p.equipment) p.equipment = [];
      p.equipment.push(eqData);
    }

    this.saveProjects();
    this.renderEquipment();
    this.closeModal("modal-equipment");
  }

  deleteEquipment(id) {
    const p = this.getActiveProject();
    if (confirm("Hapus peralatan ini?")) {
      p.equipment = p.equipment.filter((e) => e.id !== id);
      this.saveProjects();
      this.renderEquipment();
    }
  }

  openNewProjectModal() {
    document.getElementById("np-title").value = "";
    document.getElementById("np-client").value = "";
    document.getElementById("np-director").value = "";
    document.getElementById("np-shoot-date").value = new Date().toISOString().split("T")[0];
    this.openModal("modal-new-project");
  }

  submitNewProject() {
    const title = document.getElementById("np-title").value.trim();
    if (!title) return;

    const newProj = {
      id: `proj_${Date.now()}`,
      title,
      type: document.getElementById("np-type").value,
      status: "In Prep",
      client: document.getElementById("np-client").value.trim() || "-",
      agency: "-",
      productionCompany: "Aphi Studio Production",
      director: document.getElementById("np-director").value.trim() || "-",
      producer: "-",
      firstAD: "-",
      dop: "-",
      currentDay: 1,
      totalDays: 1,
      shootDate: document.getElementById("np-shoot-date").value || "",
      weather: "Cerah, 28°C",
      sunrise: "05:30 AM",
      sunset: "17:45 PM",
      generalCall: "06:00 AM",
      locationName: "Studio Set Utama",
      locationAddress: "",
      parkingNotes: "Parkir area produksi",
      hospitalName: "RS Terdekat 24 Jam",
      hospitalAddress: "",
      hospitalPhone: "",
      scenes: [],
      shots: [],
      cast: [],
      crew: [],
      equipment: [],
      daySchedule: [
        { time: "06:00 AM", activity: "Crew Call & Breakfast" },
        { time: "07:00 AM", activity: "Cast Hair & Makeup" },
        { time: "08:00 AM", activity: "Roll Camera Scene 1" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "18:00 PM", activity: "Estimated Wrap" }
      ],
      departmentNotes: {
        production: "Patuhi call time dan jaga kebersihan set.",
        camera: "Backup media berkala.",
        lighting: "Safety first.",
        sound: "Hening saat roll sound.",
        art: "Siapkan props sebelum blocking."
      }
    };

    this.projects.push(newProj);
    this.saveProjects();
    this.closeModal("modal-new-project");
    this.openProject(newProj.id);
  }

  deleteProject(id) {
    const p = this.projects.find((item) => item.id === id);
    if (!p) return;
    if (confirm(`Hapus proyek "${p.title}"?`)) {
      this.projects = this.projects.filter((item) => item.id !== id);
      this.saveProjects();
      this.renderLanding();
    }
  }

  renderCallSheet() {
    const cs = document.getElementById("printable-callsheet");
    const d = this.getActiveProject();
    if (!cs || !d) return;

    const scenesRows = (d.scenes || []).map((s) => `
      <tr>
        <td style="text-align:center; font-weight:bold;">${s.sceneNumber}</td>
        <td><strong>${s.setting}.</strong></td>
        <td>${s.timeOfDay}</td>
        <td><strong>${this.escapeHTML(s.location || "")}</strong></td>
        <td style="text-align:center;">${s.pages || "1"}</td>
        <td>${this.escapeHTML((s.cast || []).join(", "))}</td>
        <td>${this.escapeHTML(s.synopsis || "")}</td>
      </tr>
    `).join("");

    const castRows = (d.cast || []).map((c) => `
      <tr>
        <td style="text-align:center; font-weight:bold;">${c.castNumber}</td>
        <td><strong>${this.escapeHTML(c.characterName)}</strong></td>
        <td>${this.escapeHTML(c.actorName)}</td>
        <td style="text-align:center;">${c.pickupTime || "-"}</td>
        <td style="text-align:center;">${c.hmuTime || "-"}</td>
        <td style="text-align:center; font-weight:bold; background:#fef3c7;">${c.onSetTime || "-"}</td>
        <td>${this.escapeHTML(c.notes || "-")}</td>
      </tr>
    `).join("");

    const scheduleRows = (d.daySchedule || []).map((sch) => `
      <tr>
        <td style="width:90px; font-weight:bold;">${sch.time}</td>
        <td>${this.escapeHTML(sch.activity)}</td>
      </tr>
    `).join("");

    const notes = d.departmentNotes || {};

    cs.innerHTML = `
      <div class="cs-header">
        <div class="cs-title-bar">
          <div>
            <div style="font-size:11px; text-transform:uppercase; color:#6b7280; font-weight:bold;">
              ${this.escapeHTML(d.productionCompany || "APHI STUDIO PRODUCTION")} &bull; ${this.escapeHTML(d.type || "VIDEO PRODUCTION")}
            </div>
            <h1 class="cs-main-title">${this.escapeHTML(d.title || "UNTITLED PRODUCTION")}</h1>
            <div style="font-size:11px; color:#4b5563;">
              Klien: <strong>${this.escapeHTML(d.client || "-")}</strong> &bull; Agency: <strong>${this.escapeHTML(d.agency || "-")}</strong>
            </div>
          </div>
          <div style="text-align:right;">
            <div class="cs-badge-day">DAY ${d.currentDay || 1} OF ${d.totalDays || 1}</div>
            <div style="font-size:14px; font-weight:bold; margin-top:4px;">DATE: ${d.shootDate || "-"}</div>
            <div style="font-size:14px; color:#b45309; font-weight:900;">CREW CALL: ${d.generalCall || "06:00 AM"}</div>
          </div>
        </div>

        <div class="cs-sub-bar">
          <div>🌅 SUNRISE: ${d.sunrise || "05:30 AM"} | 🌇 SUNSET: ${d.sunset || "17:45 PM"}</div>
          <div>⛅ WEATHER: ${this.escapeHTML(d.weather || "Cerah")}</div>
        </div>
      </div>

      <div class="cs-info-grid">
        <div class="cs-box">
          <div class="cs-box-title">📍 SET LOCATION & BASECAMP</div>
          <div style="font-size:13px; font-weight:bold;">${this.escapeHTML(d.locationName || "-")}</div>
          <div style="font-size:11px; margin-top:2px;">${this.escapeHTML(d.locationAddress || "-")}</div>
          <div style="font-size:11px; margin-top:4px; color:#374151;"><strong>Catatan Parkir:</strong> ${this.escapeHTML(d.parkingNotes || "Sesuai petunjuk tim unit.")}</div>
        </div>

        <div class="cs-box cs-hospital-box">
          <div class="cs-box-title cs-hospital-title">🚨 NEAREST EMERGENCY HOSPITAL (IGD 24 JAM)</div>
          <div style="font-size:12px; font-weight:bold; color:#b91c1c;">${this.escapeHTML(d.hospitalName || "RS Terdekat")}</div>
          <div style="font-size:10px; margin-top:2px;">${this.escapeHTML(d.hospitalAddress || "-")}</div>
          <div style="font-size:12px; font-weight:bold; margin-top:4px; color:#991b1b;">TELP DARURAT: ${this.escapeHTML(d.hospitalPhone || "-")}</div>
        </div>
      </div>

      <div style="font-size:12px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:2px solid #111827;">
        🎬 SCENES TO SHOOT TODAY
      </div>
      <table class="cs-table">
        <thead>
          <tr>
            <th style="width:35px; text-align:center;">SC#</th>
            <th style="width:45px;">I/E</th>
            <th style="width:75px;">D/N</th>
            <th style="width:170px;">SET & LOCATION</th>
            <th style="width:45px; text-align:center;">PAGES</th>
            <th style="width:140px;">CAST</th>
            <th>SYNOPSIS / ACTION</th>
          </tr>
        </thead>
        <tbody>
          ${scenesRows || `<tr><td colspan="7" style="text-align:center;">Tidak ada scene terjadwal</td></tr>`}
        </tbody>
      </table>

      <div style="font-size:12px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:2px solid #111827;">
        🎭 CAST CALL TIMES
      </div>
      <table class="cs-table">
        <thead>
          <tr>
            <th style="width:35px; text-align:center;">ID</th>
            <th style="width:140px;">CHARACTER</th>
            <th style="width:140px;">ACTOR</th>
            <th style="width:70px; text-align:center;">PICKUP</th>
            <th style="width:70px; text-align:center;">H&MU</th>
            <th style="width:70px; text-align:center;">ON SET</th>
            <th>SPECIAL NOTES</th>
          </tr>
        </thead>
        <tbody>
          ${castRows || `<tr><td colspan="7" style="text-align:center;">Tidak ada data cast</td></tr>`}
        </tbody>
      </table>

      <div class="grid-2" style="gap:10px; margin-bottom:1rem;">
        <div>
          <div style="font-size:11px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:1px solid #111827;">
            ⏱️ ESTIMATED ADVANCE SCHEDULE
          </div>
          <table class="cs-table" style="margin-bottom:0;">
            <tbody>
              ${scheduleRows || `<tr><td>Jadwal menyusul dari 1st AD</td></tr>`}
            </tbody>
          </table>
        </div>

        <div>
          <div style="font-size:11px; font-weight:900; text-transform:uppercase; margin-bottom:4px; border-bottom:1px solid #111827;">
            📌 DEPARTMENT NOTES
          </div>
          <div style="font-size:10px; line-height:1.4;">
            <p><strong>PRODUCTION:</strong> ${this.escapeHTML(notes.production || "Tetap patuhi jadwal call time.")}</p>
            <p style="margin-top:3px;"><strong>CAMERA:</strong> ${this.escapeHTML(notes.camera || "Pastikan media card terbackup.")}</p>
            <p style="margin-top:3px;"><strong>LIGHTING:</strong> ${this.escapeHTML(notes.lighting || "Safety first untuk rigging.")}</p>
            <p style="margin-top:3px;"><strong>SOUND:</strong> ${this.escapeHTML(notes.sound || "Jaga ketenangan set.")}</p>
            <p style="margin-top:3px;"><strong>ART & WARDROBE:</strong> ${this.escapeHTML(notes.art || "Pastikan hero props siap.")}</p>
          </div>
        </div>
      </div>

      <div class="cs-footer">
        <div><strong>Director:</strong> ${this.escapeHTML(d.director || "-")}</div>
        <div><strong>Producer:</strong> ${this.escapeHTML(d.producer || "-")}}</div>
        <div><strong>1st AD:</strong> ${this.escapeHTML(d.firstAD || "-")}</div>
        <div><strong>DoP:</strong> ${this.escapeHTML(d.dop || "-")}</div>
      </div>
    `;
  }

  printCurrentCallSheet() {
    const csBtn = document.querySelector(`.seg-tab-btn[data-tab="tab-callsheet"]`);
    if (csBtn) csBtn.click();
    this.renderCallSheet();
    window.print();
  }

  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) {
      el.style.display = "flex";
      el.classList.add("open");
    }
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) {
      el.style.display = "none";
      el.classList.remove("open");
    }
  }

  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new ProductionApp();
});
  