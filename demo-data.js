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
