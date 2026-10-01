// Multi-Project Demo Dataset for Aphi Studio Production (CinePrep Pro Suite)
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
    // FEATURE 1: STORYBOARDS
    storyboards: [
      {
        id: "sb_1",
        sceneNumber: "1",
        shotNumber: "1A",
        framing: "Extreme Close-Up (ECU) Macro",
        movement: "Slow Push-In 60fps",
        caption: "Tetesan air menyentuh bubuk kopi V60 dengan uap harum sinematik.",
        colorNotes: "Warm amber roast, steamy morning light",
        imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "sb_2",
        sceneNumber: "1",
        shotNumber: "1B",
        framing: "Medium Close-Up (MCU)",
        movement: "Pan Right 24fps",
        caption: "Barista tersenyum ramah saat menuang air panas dari kettle tembaga.",
        colorNotes: "Warm vintage cafe interior tone",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "sb_3",
        sceneNumber: "2",
        shotNumber: "2A",
        framing: "Medium Shot (MS) Tracking",
        movement: "Forward Gimbal Tracking 48fps",
        caption: "Sarah berjalan santai di trotoar pagi kota sambil menikmati iced latte.",
        colorNotes: "Clean daylight, vibrant urban sidewalk",
        imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "sb_4",
        sceneNumber: "3",
        shotNumber: "3A",
        framing: "Wide Shot (WS) Office",
        movement: "Static 24fps",
        caption: "Suasana ruang rapat yang suntuk berubah cerah saat Sarah mengantarkan kopi.",
        colorNotes: "Cool corporate blue shifting to warm golden optimism",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
      }
    ],
    // FEATURE 2: DIGITAL STRIPBOARD
    stripboard: [
      { id: "st_1", type: "scene", sceneNumber: "1", setting: "INT", timeOfDay: "MORNING", location: "Roastery Cafe Bar", pages: "1 2/8", estMinutes: 180 },
      { id: "st_2", type: "scene", sceneNumber: "2", setting: "EXT", timeOfDay: "DAY", location: "Pedestrian Crossing Senopati", pages: "6/8", estMinutes: 150 },
      { id: "st_b1", type: "daybreak", dayNumber: 1, title: "END OF SHOOT DAY 1 (SENOPATI SET) — 2 PAGES", totalPages: "2 pages" },
      { id: "st_3", type: "scene", sceneNumber: "3", setting: "INT", timeOfDay: "AFTERNOON", location: "Studio 4 Set Rapat", pages: "2 1/8", estMinutes: 240 },
      { id: "st_b2", type: "daybreak", dayNumber: 2, title: "END OF SHOOT DAY 2 & ESTIMATED WRAP — 2 1/8 PAGES", totalPages: "2 1/8 pages" }
    ],
    // FEATURE 3: DAILY CONTINUITY & CAMERA LOG
    continuityLogs: [
      { id: "cl_1", sceneNumber: "1", shotNumber: "1A", takeNumber: 1, isCircleTake: false, clipName: "A001_C001", soundRoll: "SR01", timecode: "08:34:12:04", status: "NG (No Good)", description: "Tetesan air terlalu cepat mengucur, blooming belum maksimal.", directorComment: "Ulang take 2" },
      { id: "cl_2", sceneNumber: "1", shotNumber: "1A", takeNumber: 2, isCircleTake: true, clipName: "A001_C002", soundRoll: "SR01", timecode: "08:38:45:12", status: "Good Take", description: "Sempurna! Blooming kopi mekar indah dengan kepulan uap teratur.", directorComment: "Best take! Kirim ke editor" },
      { id: "cl_3", sceneNumber: "1", shotNumber: "1B", takeNumber: 1, isCircleTake: true, clipName: "A001_C003", soundRoll: "SR01", timecode: "09:12:05:18", status: "Good Take", description: "Ekspresi barista senyum hangat, fokus mata tajam f/1.4.", directorComment: "Pilihan utama" },
      { id: "cl_4", sceneNumber: "2", shotNumber: "2A", takeNumber: 1, isCircleTake: false, clipName: "B001_C001", soundRoll: "SR02", timecode: "13:45:10:00", status: "Hold", description: "Gimbal tracking mulus, ada sedikit bump di trotoar pada detik 12.", directorComment: "Ambil safety take" },
      { id: "cl_5", sceneNumber: "2", shotNumber: "2A", takeNumber: 2, isCircleTake: true, clipName: "B001_C002", soundRoll: "SR02", timecode: "13:50:30:20", status: "Good Take", description: "Langkah kaki talent sangat ritmis, sedotan kena cahaya matahari tepat.", directorComment: "Master shot clear" }
    ],
    // FEATURE 4: BUDGET & PETTY CASH TRACKER
    budget: {
      totalEstimated: 150000000,
      categories: [
        { id: "b_1", type: "Above The Line", item: "Sutradara (Director Fee)", estimated: 35000000, actual: 35000000, notes: "Kontrak 2 hari syuting + post" },
        { id: "b_2", type: "Above The Line", item: "Lead Talent (Tara Basro) & Barista", estimated: 25000000, actual: 25000000, notes: "Termasuk fitting & makeup" },
        { id: "b_3", type: "Below The Line", item: "Sewa Kamera ARRI Mini LF & Cooke Anamorphic", estimated: 22000000, actual: 21500000, notes: "Diskon paket CineRent" },
        { id: "b_4", type: "Below The Line", item: "Lighting Aputure 600d & Grip Package", estimated: 16000000, actual: 16000000, notes: "Full set 2 hari" },
        { id: "b_5", type: "Below The Line", item: "Art Department, Mockup Cup & Dressing Set", estimated: 12000000, actual: 13200000, notes: "Tambah props V60 artisan" },
        { id: "b_6", type: "Below The Line", item: "Sewa Lokasi Cafe Roastery & Izin Jalan", estimated: 18000000, actual: 18000000, notes: "Izin dishub Senopati beres" },
        { id: "b_7", type: "Below The Line", item: "Katering Kru & Pemain (35 pax x 4 sesi)", estimated: 7500000, actual: 7200000, notes: "Menu A & B Halal" },
        { id: "b_8", type: "Below The Line", item: "Genset Silent 20kVA & BBM Solar", estimated: 6000000, actual: 5800000, notes: "Konsumsi solar 120 liter" }
      ],
      pettyCash: [
        { id: "pc_1", date: "2026-10-15", desc: "BBM Solar Genset 60 Liter", amount: 900000, pic: "Andi (UPM)", status: "Ada Kuitansi" },
        { id: "pc_2", date: "2026-10-15", desc: "Es Batu & Kopi Ekstra untuk Kru Siang", amount: 250000, pic: "Doni (PA)", status: "Ada Kuitansi" },
        { id: "pc_3", date: "2026-10-15", desc: "Kabel Ties & Gaffer Tape Hitam 3 Roll", amount: 180000, pic: "Hendro (Gaffer)", status: "Ada Kuitansi" },
        { id: "pc_4", date: "2026-10-15", desc: "Biaya Parkir Truk Genset & Mobil Kru", amount: 350000, pic: "Doni (PA)", status: "Ada Kuitansi" }
      ]
    },
    // FEATURE 5: CLOUD CONFIG
    cloudConfig: {
      provider: "supabase",
      url: "",
      anonKey: "",
      enabled: false,
      lastSynced: null
    },
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
  }
];