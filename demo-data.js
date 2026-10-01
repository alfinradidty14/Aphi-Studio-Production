// Multi-Project Demo Dataset for Aphi Studio Production (CinePrep Pro Suite) - English Edition
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
    locationAddress: "42 Suryo Street, Senopati, South Jakarta",
    parkingNotes: "Rear Parking Structure (Gate B). Parking passes issued by Unit Logistics.",
    hospitalName: "Siloam Hospital Semanggi (24/7 Emergency)",
    hospitalAddress: "1 Garnisun St, Karet Semanggi, South Jakarta",
    hospitalPhone: "+62 21 2996-2888 / 1500-181",
    scenes: [
      {
        id: "sc_1",
        sceneNumber: "1",
        slugline: "INT. COFFEE ROASTERY - MORNING",
        setting: "INT",
        timeOfDay: "MORNING",
        location: "Roastery Cafe Bar",
        pages: "1 2/8",
        synopsis: "Barista pours artisanal hot water over fresh coffee grounds in a V60. Aromatic steam curls upwards in cinematic golden morning light.",
        cast: ["Dimas Anggara (Barista)", "Tara Basro (Sarah)"],
        props: ["V60 Ceramic Dripper", "Artisan Glass Carafe", "Specialty Roast Beans", "Copper Gooseneck Kettle"],
        wardrobe: ["Vintage Brown Leather Apron", "Cream Linen Shirt"],
        fx: ["Subtle Atmospheric Hazer Smoke", "Macro Diopter Filter"],
        notes: "Prioritize 60fps macro slow-motion shots of steam swirls and water droplets."
      },
      {
        id: "sc_2",
        sceneNumber: "2",
        slugline: "EXT. CITY SIDEWALK - DAY",
        setting: "EXT",
        timeOfDay: "DAY",
        location: "Pedestrian Crossing Senopati",
        pages: "6/8",
        synopsis: "Sarah strolls down the bustling city sidewalk enjoying her iced latte. Her expression radiates energy amidst the morning rush.",
        cast: ["Tara Basro (Sarah)", "5x Pedestrian Extras"],
        props: ["Branded Aura Takeaway Cup", "Modern Leather Tote Bag"],
        wardrobe: ["Grey Smart Casual Blazer & Clean White Sneakers"],
        fx: ["4x4 Sunbounce Reflector", "Gimbal Stabilizer Rig"],
        notes: "Street permit approved. Place safety cones for the tracking gimbal operator."
      },
      {
        id: "sc_3",
        sceneNumber: "3",
        slugline: "INT. MODERN OFFICE - AFTERNOON",
        setting: "INT",
        timeOfDay: "AFTERNOON",
        location: "Studio 4 - Executive Meeting Room",
        pages: "2 1/8",
        synopsis: "A tense board meeting dissolves into cheerful smiles as Sarah enters carrying fresh iced lattes for the whole team.",
        cast: ["Tara Basro (Sarah)", "Reza (Creative Director)", "Dina (Account Lead)", "Fahri (Client Lead)"],
        props: ["Branded 4-Cup Drink Carrier", "Laptops & Presentation Boards", "Glass Water Bottles"],
        wardrobe: ["Modern Corporate Creative Wardrobe"],
        fx: ["Aputure 1200d Day Simulation outside window", "Subtle fill bounce"],
        notes: "Coordinate timing with client hero product reveal."
      }
    ],
    stripboard: [
      {
        id: "st_1",
        type: "scene",
        sceneNumber: "1",
        setting: "INT",
        timeOfDay: "MORNING",
        location: "Roastery Cafe Bar",
        pages: "1 2/8",
        estMinutes: 180
      },
      {
        id: "st_2",
        type: "scene",
        sceneNumber: "2",
        setting: "EXT",
        timeOfDay: "DAY",
        location: "Pedestrian Crossing Senopati",
        pages: "6/8",
        estMinutes: 150
      },
      {
        id: "st_break_1",
        type: "daybreak",
        dayNumber: 1,
        title: "END OF SHOOT DAY 1 & ESTIMATED WRAP (18:00 PM)",
        totalPages: "2 pages"
      },
      {
        id: "st_3",
        type: "scene",
        sceneNumber: "3",
        setting: "INT",
        timeOfDay: "AFTERNOON",
        location: "Studio 4 - Executive Meeting Room",
        pages: "2 1/8",
        estMinutes: 240
      }
    ],
    storyboards: [
      {
        id: "sb_1",
        sceneNumber: "1",
        shotNumber: "1A",
        framing: "Extreme Close-Up (ECU) Macro",
        movement: "Slow Push-In 60fps",
        imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
        caption: "Water droplets gently saturate freshly roasted ground coffee with curling cinematic steam."
      },
      {
        id: "sb_2",
        sceneNumber: "1",
        shotNumber: "1B",
        framing: "Medium Close-Up (MCU)",
        movement: "Pan Right 24fps",
        imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
        caption: "Barista pours water from a copper kettle with precision and a warm welcoming expression."
      },
      {
        id: "sb_3",
        sceneNumber: "2",
        shotNumber: "2A",
        framing: "Medium Shot (MS) Tracking",
        movement: "Forward Gimbal Tracking 48fps",
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
        caption: "Sarah walks smoothly along the morning city sidewalk enjoying her iced latte."
      },
      {
        id: "sb_4",
        sceneNumber: "3",
        shotNumber: "3A",
        framing: "Wide Shot (WS) Office",
        movement: "Static 24fps",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop&q=80",
        caption: "Tense meeting room brightens up as Sarah delivers refreshing iced coffee to the team."
      }
    ],
    shots: [
      {
        id: "sh_1a",
        sceneId: "sc_1",
        shotNumber: "1A",
        size: "Extreme Close-Up (ECU)",
        angle: "High Angle",
        movement: "Slow Push-in (Slider)",
        lens: "Cooke 100mm Macro T2.8",
        fps: "60 fps",
        status: "Planned",
        description: "Macro of water dripping into ground coffee, steam rising into soft backlight."
      },
      {
        id: "sh_1b",
        sceneId: "sc_1",
        shotNumber: "1B",
        size: "Medium Close-Up (MCU)",
        angle: "Eye Level",
        movement: "Static (Tripod)",
        lens: "Cooke S4/i 50mm T2.0",
        fps: "24 fps",
        status: "Planned",
        description: "Barista's focused smile as he pours hot water with a copper kettle."
      },
      {
        id: "sh_2a",
        sceneId: "sc_2",
        shotNumber: "2A",
        size: "Medium Shot (MS)",
        angle: "Low Angle",
        movement: "Forward Tracking (Ronin 2 Gimbal)",
        lens: "Cooke S4/i 35mm T2.0",
        fps: "48 fps",
        status: "Planned",
        description: "Sarah walks past camera sipping coffee, warm city sun flare in background."
      }
    ],
    continuityLogs: [
      {
        id: "cl_1",
        sceneNumber: "1",
        shotNumber: "1A",
        takeNumber: 1,
        clipName: "A001_C001",
        soundRoll: "SR01",
        timecode: "08:32:15:10",
        status: "NG (No Good)",
        isCircleTake: false,
        description: "Barista poured too quickly. Steam not fully catching backlight."
      },
      {
        id: "cl_2",
        sceneNumber: "1",
        shotNumber: "1A",
        takeNumber: 2,
        clipName: "A001_C002",
        soundRoll: "SR01",
        timecode: "08:38:45:12",
        status: "Good Take",
        isCircleTake: true,
        description: "Flawless drip macro, perfect steam curl, sharp focus throughout 60fps."
      },
      {
        id: "cl_3",
        sceneNumber: "1",
        shotNumber: "1B",
        takeNumber: 1,
        clipName: "A001_C003",
        soundRoll: "SR01",
        timecode: "09:12:00:18",
        status: "Good Take",
        isCircleTake: true,
        description: "Natural acting, clean audio, great copper kettle reflection."
      }
    ],
    cast: [
      {
        id: "c_1",
        castNumber: "1",
        characterName: "Sarah (Hero)",
        actorName: "Tara Basro",
        role: "Lead Talent",
        phone: "+62 811-9234-5678",
        pickupTime: "05:30 AM",
        hmuTime: "07:00 AM",
        onSetTime: "08:15 AM",
        notes: "Full wardrobe fitting completed. No dietary allergies."
      },
      {
        id: "c_2",
        castNumber: "2",
        characterName: "Barista",
        actorName: "Dimas Anggara",
        role: "Supporting Talent",
        phone: "+62 812-3456-7890",
        pickupTime: "05:00 AM",
        hmuTime: "06:30 AM",
        onSetTime: "07:30 AM",
        notes: "Practiced V60 pouring techniques with barista consultant."
      }
    ],
    crew: [
      { id: "cr_1", department: "Direction", role: "Director", name: "Arya Pratama", phone: "+62 811-100-2001", callTime: "06:00 AM" },
      { id: "cr_2", department: "Direction", role: "1st Assistant Director", name: "Budi Santoso", phone: "+62 812-200-3002", callTime: "05:30 AM" },
      { id: "cr_3", department: "Production", role: "Producer", name: "Maya Siregar", phone: "+62 813-300-4003", callTime: "05:30 AM" },
      { id: "cr_4", department: "Production", role: "Unit Production Manager", name: "Doni Prasetyo", phone: "+62 811-400-5004", callTime: "05:00 AM" },
      { id: "cr_5", department: "Camera", role: "Director of Photography", name: "Reza Rahardian", phone: "+62 812-500-6005", callTime: "06:00 AM" },
      { id: "cr_6", department: "Camera", role: "1st AC (Focus Puller)", name: "Fajar Nugraha", phone: "+62 813-600-7006", callTime: "05:30 AM" },
      { id: "cr_7", department: "Lighting & Grip", role: "Gaffer", name: "Agus Setiawan", phone: "+62 811-700-8007", callTime: "05:00 AM" },
      { id: "cr_8", department: "Sound", role: "Sound Recordist", name: "Ilham Ramadhan", phone: "+62 812-800-9008", callTime: "06:00 AM" }
    ],
    equipment: [
      { id: "eq_1", category: "Camera", item: "ARRI Alexa Mini LF Body + Cage + EVF", qty: "1 package", source: "CineRent Jakarta", status: "Checked / Ready" },
      { id: "eq_2", category: "Lenses", item: "Cooke S4/i Prime Set (25, 32, 50, 75, 100mm)", qty: "1 set (5 lenses)", source: "CineRent Jakarta", status: "Checked / Ready" },
      { id: "eq_3", category: "Lighting", item: "ARRI SkyPanel S60-C LED Softlight", qty: "2 units", source: "Lighting Dept Rental", status: "Loaded on Van" },
      { id: "eq_4", category: "Grip & Support", item: "DJI Ronin 2 3-Axis Gimbal Stabilizer", qty: "1 kit", source: "In-House Gear", status: "Checked / Ready" },
      { id: "eq_5", category: "Sound", item: "Sound Devices 833 8-Channel Recorder", qty: "1 package", source: "Audio Dept", status: "Checked / Ready" }
    ],
    budget: {
      totalEstimated: 150000000,
      categories: [
        { id: "b_1", type: "Above The Line", item: "Director & Creative Fee", estimated: 35000000, actual: 35000000, notes: "Arya Pratama" },
        { id: "b_2", type: "Above The Line", item: "Lead Talent (Sarah)", estimated: 25000000, actual: 25000000, notes: "Tara Basro" },
        { id: "b_3", type: "Below The Line", item: "Camera Package (ARRI Mini LF + Cooke)", estimated: 22000000, actual: 20500000, notes: "CineRent 2-Day Package" },
        { id: "b_4", type: "Below The Line", item: "Lighting & Grip Truck Rental", estimated: 18000000, actual: 17200000, notes: "Gaffer package" },
        { id: "b_5", type: "Below The Line", item: "Set Location & Permits", estimated: 15000000, actual: 14000000, notes: "Roastery + Street clearance" },
        { id: "b_6", type: "Below The Line", item: "Crew Catering & Craft Services (40 pax)", estimated: 12000000, actual: 11000000, notes: "Breakfast, Lunch, Dinner" }
      ],
      pettyCash: [
        { id: "pc_1", date: "2026-10-14", amount: 350000, desc: "Generator Diesel Fuel Refill", pic: "Doni (UPM)", status: "Receipt Verified" },
        { id: "pc_2", date: "2026-10-15", amount: 280000, desc: "Emergency Gaffer Tape & Grip Consumables", pic: "Agus (Gaffer)", status: "Receipt Verified" },
        { id: "pc_3", date: "2026-10-15", amount: 150000, desc: "Extra Ice & Water for Cast Holding", pic: "PA Unit", status: "Receipt Verified" }
      ]
    },
    cloudConfig: {
      provider: "supabase",
      url: "https://aphi-production.supabase.co",
      anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      enabled: false,
      lastSynced: null
    },
    daySchedule: [
      { time: "05:00 AM", activity: "Loading In & Generator Setup (Grip & Lighting & Art)" },
      { time: "06:00 AM", activity: "General Crew Call & Hot Breakfast / Coffee" },
      { time: "07:00 AM", activity: "Cast Arrival - Wardrobe & Makeup" },
      { time: "07:30 AM", activity: "Block & Light Scene 1 (INT. Roastery)" },
      { time: "08:15 AM", activity: "SHOOT Scene 1 (Shots 1A, 1B, 1C)" },
      { time: "12:00 PM", activity: "LUNCH BREAK (Catering Menu A & B, Halal)" },
      { time: "13:30 PM", activity: "SHOOT Scene 2 (Sidewalk Tracking)" },
      { time: "17:30 PM", activity: "SHOOT Scene 3 (INT. Office Set)" },
      { time: "20:00 PM", activity: "WRAP DAY 1 - Data Backup & DIT Sign-off" }
    ],
    departmentNotes: {
      production: "Strictly adhere to call times. Quiet on set during rolling.",
      camera: "Card dumps strictly by DIT after each scene. Verified checksum copy to RAID.",
      lighting: "Safety first on ceiling rigging and cable runs across pedestrian path.",
      sound: "Air conditioning in Roastery must be paused during sound takes.",
      art: "Prepare 3 standby cups of coffee with fresh foam before each take."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_PROJECTS };
}
