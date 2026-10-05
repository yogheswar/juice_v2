import { Product, CustomJuiceIngredient, CleanseProgram, StoreLocation } from '../types/juice';

export const HERO_IMAGE = '/src/assets/images/hero_cold_pressed_juices_1791172222895.jpg';
export const GREEN_IMAGE = '/src/assets/images/product_green_vitality_1791172245598.jpg';
export const CITRUS_IMAGE = '/src/assets/images/product_citrus_glow_1791172256619.jpg';
export const RUBY_IMAGE = '/src/assets/images/product_ruby_detox_1791172269478.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'emerald-vitality',
    name: 'Emerald Vitality No. 1',
    category: 'greens',
    tagline: 'Deep alkalizing cellular recharge',
    description: 'Our signature zero-fruit deep green pressed with crisp romaine, curly kale, celery, English cucumber, wild lemon, and raw ginger root. Ultra-crisp with zero spikes.',
    image: GREEN_IMAGE,
    basePrice: 9.50,
    prices: {
      '12oz': 9.50,
      '16oz': 12.00,
      '32oz': 21.00
    },
    ingredients: ['Lacinato Kale', 'English Cucumber', 'Organic Celery', 'Romaine Hearts', 'Wild Meyer Lemon', 'Fresh Ginger'],
    nutrition: {
      calories: 65,
      sugarGrams: 4,
      vitaminCDailyPercent: 95,
      potassiumMg: 520,
      hydrationScore: 10
    },
    tasteProfile: {
      sweetness: 1,
      tartness: 3,
      earthiness: 4,
      intensity: 3
    },
    dietary: ['100% Raw', 'Zero Added Sugar', 'Keto Friendly', 'Low Glycemic'],
    colorHex: '#1B4D30',
    farmSource: 'Salinas River Organic Basin, CA',
    featured: true
  },
  {
    id: 'golden-turmeric-glow',
    name: 'Golden Solar Tonic No. 2',
    category: 'citrus',
    tagline: 'Bioavailable anti-inflammatory solar blend',
    description: 'Cold-pressed Valencia orange, sweet heirloom carrots, Hawaiian gold turmeric root, organic ginger, and cold-pressed pink grapefruit with a pinch of cracked black pepper for turmeric absorption.',
    image: CITRUS_IMAGE,
    basePrice: 9.75,
    prices: {
      '12oz': 9.75,
      '16oz': 12.25,
      '32oz': 22.00
    },
    ingredients: ['Heirloom Carrot', 'Valencia Orange', 'Hawaiian Yellow Turmeric', 'Cold-Pressed Ginger', 'Pink Grapefruit', 'Cracked Tellicherry Pepper'],
    nutrition: {
      calories: 110,
      sugarGrams: 16,
      vitaminCDailyPercent: 180,
      potassiumMg: 440,
      hydrationScore: 8
    },
    tasteProfile: {
      sweetness: 4,
      tartness: 3,
      earthiness: 2,
      intensity: 4
    },
    dietary: ['Anti-Inflammatory', 'High Bioflavonoids', 'USDA Organic', 'Raw'],
    colorHex: '#D97706',
    farmSource: 'Ojai Citrus Groves & Kauai Gold Farm',
    featured: true
  },
  {
    id: 'ruby-beet-detox',
    name: 'Ruby Hearth No. 3',
    category: 'roots',
    tagline: 'Cardiovascular endurance & liver harmony',
    description: 'Deep crimson Chioggia beets, crisp Gala apples, Persian cucumbers, antioxidant-rich pomegranate juice, and fresh garden mint. Nitric oxide booster for clean stamina.',
    image: RUBY_IMAGE,
    basePrice: 9.50,
    prices: {
      '12oz': 9.50,
      '16oz': 12.00,
      '32oz': 21.00
    },
    ingredients: ['Chioggia Beets', 'Persian Cucumber', 'Gala Apple', 'Aril Pomegranate', 'Fresh Spearmint', 'Key Lime'],
    nutrition: {
      calories: 125,
      sugarGrams: 18,
      vitaminCDailyPercent: 110,
      potassiumMg: 610,
      hydrationScore: 9
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 2,
      earthiness: 5,
      intensity: 4
    },
    dietary: ['Nitric Oxide Rich', 'Pre-Workout Fuel', '100% Organic', 'Raw'],
    colorHex: '#881337',
    farmSource: 'Watsonville Organic Orchards, CA',
    featured: true
  },
  {
    id: 'blue-majik-hydrator',
    name: 'Glacial Hydrate No. 4',
    category: 'hydration',
    tagline: 'Deep cellular electrolyte replenishment',
    description: 'Wild coconut water, alkaline mineral water, cold-pressed pineapple, raw blue spirulina (Blue Majik), and sea salt minerals harvested from Big Sur.',
    image: GREEN_IMAGE, // fallback to crisp styled image
    basePrice: 10.25,
    prices: {
      '12oz': 10.25,
      '16oz': 12.75,
      '32oz': 23.50
    },
    ingredients: ['Wild Raw Coconut Water', 'Golden Pineapple', 'Blue Majik Spirulina', 'Big Sur Sea Mineral Salt', 'Filtered Alkaline H2O', 'Lime'],
    nutrition: {
      calories: 85,
      sugarGrams: 12,
      vitaminCDailyPercent: 120,
      potassiumMg: 680,
      hydrationScore: 10
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 2,
      earthiness: 1,
      intensity: 2
    },
    dietary: ['Electrolyte Charged', 'Algae Superfood', 'Zero Artificial Dyes', 'Post-Workout'],
    colorHex: '#0284C7',
    farmSource: 'Sustainable Hawaiian Coconut Groves',
    featured: false
  },
  {
    id: 'pure-celery-flush',
    name: 'Pure Celery Mineral Flush',
    category: 'greens',
    tagline: '100% single-origin cold pressed celery',
    description: 'Straight cold hydraulic pressed organic celery with a subtle squeeze of fresh Meyer lemon. Promotes healthy gut motility, morning bile balance, and natural hydration.',
    image: GREEN_IMAGE,
    basePrice: 8.75,
    prices: {
      '12oz': 8.75,
      '16oz': 11.25,
      '32oz': 19.50
    },
    ingredients: ['100% Organic Crisp Pascal Celery', 'Meyer Lemon'],
    nutrition: {
      calories: 42,
      sugarGrams: 3,
      vitaminCDailyPercent: 40,
      potassiumMg: 590,
      hydrationScore: 10
    },
    tasteProfile: {
      sweetness: 1,
      tartness: 2,
      earthiness: 3,
      intensity: 2
    },
    dietary: ['Single Ingredient', 'Gut Cleansing', 'Keto Certified', 'Low Calorie'],
    colorHex: '#15803D',
    farmSource: 'Oxnard Organic Co-op, CA',
    featured: false
  },
  {
    id: 'immunity-ginger-fire',
    name: 'Ginger Cayenne Fire Shot (4-Pack)',
    category: 'shots',
    tagline: 'Concentrated 2oz immune barrier booster',
    description: 'Intense 2oz concentrated cold-pressed Peruvian ginger root, wild turmeric, oregano oil drops, lemon juice, and habanero cayenne pepper. Guaranteed to clear sinuses and ignite digestion.',
    image: CITRUS_IMAGE,
    basePrice: 16.00,
    prices: {
      '12oz': 16.00, // 4-pack of 2oz bottles
      '16oz': 22.00, // 6-pack
      '32oz': 38.00  // 12-pack
    },
    ingredients: ['Peruvian Ginger Root', 'Wild Oregano Essence', 'Meyer Lemon', 'Turmeric Root', 'Ground Cayenne'],
    nutrition: {
      calories: 35,
      sugarGrams: 2,
      vitaminCDailyPercent: 140,
      potassiumMg: 210,
      hydrationScore: 7
    },
    tasteProfile: {
      sweetness: 1,
      tartness: 4,
      earthiness: 3,
      intensity: 5
    },
    dietary: ['Immune Barrier', 'Thermogenic', 'Antimicrobial', '100% Raw'],
    colorHex: '#EA580C',
    farmSource: 'Peruvian Organic Highland Farmers',
    featured: false
  },
  {
    id: 'sweet-green-harvest',
    name: 'Sweet Green Orchard No. 5',
    category: 'greens',
    tagline: 'Balanced entry into leafy nutrition',
    description: 'Crisp green Granny Smith apples, sweet spinach, English cucumber, Tuscan kale, and fresh pressed mint. The ultimate crowd favorite that kids and green juice beginners adore.',
    image: GREEN_IMAGE,
    basePrice: 9.25,
    prices: {
      '12oz': 9.25,
      '16oz': 11.75,
      '32oz': 20.50
    },
    ingredients: ['Granny Smith Apple', 'Baby Spinach', 'English Cucumber', 'Tuscan Kale', 'Spearmint Leaf', 'Lemon'],
    nutrition: {
      calories: 98,
      sugarGrams: 14,
      vitaminCDailyPercent: 85,
      potassiumMg: 470,
      hydrationScore: 9
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 3,
      earthiness: 2,
      intensity: 2
    },
    dietary: ['Kid Approved', 'Refreshing', 'Rich in Iron', 'Raw'],
    colorHex: '#166534',
    farmSource: 'Sebastopol Apple Orchards, CA',
    featured: false
  },
  {
    id: 'vanilla-almond-mylk',
    name: 'Sprouted Vanilla Almond Silk',
    category: 'hydration',
    tagline: 'Stoneground botanical protein & healthy fats',
    description: 'Sprouted organic raw almonds soaked in pure alkaline spring water, blended with Madagascar vanilla bean, Medjool date nectar, and pink Himalayan crystal salt.',
    image: HERO_IMAGE,
    basePrice: 10.50,
    prices: {
      '12oz': 10.50,
      '16oz': 13.00,
      '32oz': 24.00
    },
    ingredients: ['Sprouted Raw Almonds', 'Madagascar Vanilla Bean', 'Medjool Dates', 'Alkaline Spring H2O', 'Himalayan Pink Salt'],
    nutrition: {
      calories: 190,
      sugarGrams: 9,
      vitaminCDailyPercent: 10,
      potassiumMg: 380,
      hydrationScore: 8
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 1,
      earthiness: 2,
      intensity: 2
    },
    dietary: ['Plant Protein', 'No Gums or Carrageenan', 'Sprouted for Digestion', 'Vegan'],
    colorHex: '#B45309',
    farmSource: 'Capay Valley Organic Almond Groves',
    featured: false
  }
];

export const CUSTOM_BASES: CustomJuiceIngredient[] = [
  { id: 'b-apple', name: 'Crisp Green Apple Base', category: 'base', calories: 60, sugar: 12, vitaminC: 25, color: '#65A30D', description: 'Sweet tart crisp apple freshly crushed', extraPrice: 0 },
  { id: 'b-cucumber', name: 'Cool Cucumber & Celery', category: 'base', calories: 25, sugar: 3, vitaminC: 15, color: '#16A34A', description: 'Ultra-hydrating zero-sugar green water', extraPrice: 0 },
  { id: 'b-coconut', name: 'Raw Young Coconut Water', category: 'base', calories: 45, sugar: 8, vitaminC: 30, color: '#0284C7', description: 'Naturally isotonic with essential electrolytes', extraPrice: 1.00 },
  { id: 'b-alkaline', name: 'Infused Alkaline Spring Water', category: 'base', calories: 0, sugar: 0, vitaminC: 0, color: '#38BDF8', description: 'Light & crisp with mountain minerals', extraPrice: 0 }
];

export const CUSTOM_GREENS: CustomJuiceIngredient[] = [
  { id: 'g-kale', name: 'Dino Lacinato Kale', category: 'green', calories: 20, sugar: 1, vitaminC: 45, color: '#14532D', description: 'Rich chlorophyll and iron powerhouse', extraPrice: 0.75 },
  { id: 'g-spinach', name: 'Organic Baby Spinach', category: 'green', calories: 15, sugar: 0.5, vitaminC: 35, color: '#166534', description: 'Silky smooth taste, packed with folates', extraPrice: 0.75 },
  { id: 'g-mint', name: 'Fresh Spearmint Leaf', category: 'green', calories: 5, sugar: 0, vitaminC: 10, color: '#22C55E', description: 'Cooling digestive tonic aroma', extraPrice: 0.50 },
  { id: 'g-romaine', name: 'Crunchy Romaine Hearts', category: 'green', calories: 12, sugar: 1, vitaminC: 20, color: '#4ADE80', description: 'Clean crisp sweetness with mineral salts', extraPrice: 0.50 }
];

export const CUSTOM_ROOTS: CustomJuiceIngredient[] = [
  { id: 'r-ginger', name: 'Peruvian Raw Ginger', category: 'root-citrus', calories: 10, sugar: 1, vitaminC: 15, color: '#EAB308', description: 'Spicy warming circulatory stimulant', extraPrice: 0.75 },
  { id: 'r-turmeric', name: 'Hawaiian Gold Turmeric', category: 'root-citrus', calories: 12, sugar: 1, vitaminC: 20, color: '#F97316', description: 'Curcumin-packed golden restorative', extraPrice: 1.00 },
  { id: 'r-lemon', name: 'Wild Meyer Lemon', category: 'root-citrus', calories: 12, sugar: 1.5, vitaminC: 40, color: '#FACC15', description: 'Bright alkalizing citric punch', extraPrice: 0.50 },
  { id: 'r-grapefruit', name: 'Pink Star Ruby Grapefruit', category: 'root-citrus', calories: 25, sugar: 5, vitaminC: 50, color: '#FB7185', description: 'Aromatic bitter-sweet bioflavonoids', extraPrice: 0.75 },
  { id: 'r-beet', name: 'Earthy Red Beetroot', category: 'root-citrus', calories: 30, sugar: 6, vitaminC: 15, color: '#9F1239', description: 'Nitric oxide booster for clean blood flow', extraPrice: 0.85 }
];

export const CUSTOM_BOOSTERS: CustomJuiceIngredient[] = [
  { id: 'bo-spirulina', name: 'Blue Majik Sea Algae', category: 'boost', calories: 10, sugar: 0, vitaminC: 10, color: '#0369A1', description: 'Concentrated phycocyanin cellular shield', extraPrice: 1.50 },
  { id: 'bo-cayenne', name: 'Habanero Cayenne Pepper', category: 'boost', calories: 5, sugar: 0, vitaminC: 15, color: '#DC2626', description: 'Metabolism igniter & sinus clearer', extraPrice: 0.50 },
  { id: 'bo-chia', name: 'Hydrated Chia Seeds', category: 'boost', calories: 35, sugar: 0, vitaminC: 0, color: '#334155', description: 'Omega-3 fibers and steady hydration gel', extraPrice: 1.00 },
  { id: 'bo-ashwa', name: 'Organic Ashwagandha Root', category: 'boost', calories: 8, sugar: 0, vitaminC: 5, color: '#A16207', description: 'Adaptogenic balance for cortisol relief', extraPrice: 1.25 }
];

export const CLEANSE_PROGRAMS: CleanseProgram[] = [
  {
    id: 'cleanse-1-day',
    title: 'The 1-Day Reset',
    days: 1,
    bottleCount: 6,
    price: 49.00,
    subtext: 'Ideal after weekends or heavy travel',
    description: 'Give your digestive system a full 24-hour restorative vacation while delivering dense living chlorophyll, micronutrients, and enzymatic nourishment.',
    benefits: [
      'Alleviates post-travel bloating & digestive lag',
      'Provides 100% of daily essential micronutrients',
      'Hydrates at cellular level without sugar spikes',
      'Includes guided 24-hour hour-by-hour drinking guide'
    ],
    schedule: [
      { time: '08:00 AM', label: 'Awaken', productName: 'Emerald Vitality No. 1', purpose: 'Chlorophyll cellular kickstart' },
      { time: '10:30 AM', label: 'Protect', productName: 'Golden Solar Tonic No. 2', purpose: 'Curcumin & vitamin C defense' },
      { time: '01:00 PM', label: 'Sustain', productName: 'Pure Celery Mineral Flush', purpose: 'Sodium cluster salts & digestion' },
      { time: '03:30 PM', label: 'Revive', productName: 'Glacial Hydrate No. 4', purpose: 'Blue spirulina afternoon energy' },
      { time: '06:00 PM', label: 'Fortify', productName: 'Ruby Hearth No. 3', purpose: 'Nitrates for restorative circulation' },
      { time: '08:30 PM', label: 'Replenish', productName: 'Sprouted Vanilla Almond Silk', purpose: 'Tryptophan & soothing plant protein' }
    ]
  },
  {
    id: 'cleanse-3-day',
    title: 'The 3-Day Deep Glow',
    days: 3,
    bottleCount: 18,
    price: 139.00,
    subtext: 'Our most popular comprehensive reset',
    description: 'Designed for noticeable vitality, clearer skin tone, restful sleep patterns, and re-sensitized tastebuds. Includes insulated cold-chain cooler tote bag.',
    benefits: [
      'Deep cellular reset and clear glowing complexion',
      'Reboots cravings away from refined sugars and salts',
      '18 cold-pressed organic bottles sealed at 38°F',
      'Complimentary insulated thermal tote bag & ginger shot pack'
    ],
    schedule: [
      { time: '08:00 AM', label: 'Morning Green', productName: 'Emerald Vitality No. 1', purpose: 'Deep green alkalizer' },
      { time: '10:30 AM', label: 'Solar Radiance', productName: 'Golden Solar Tonic No. 2', purpose: 'Anti-inflammatory solar energy' },
      { time: '01:00 PM', label: 'Noon Balance', productName: 'Sweet Green Orchard No. 5', purpose: 'Gentle fruit enzymes & stamina' },
      { time: '03:30 PM', label: 'Algae Elixir', productName: 'Glacial Hydrate No. 4', purpose: 'Brain clarity & potassium' },
      { time: '06:00 PM', label: 'Evening Root', productName: 'Ruby Hearth No. 3', purpose: 'Circulatory oxygenation' },
      { time: '08:30 PM', label: 'Night Soothe', productName: 'Sprouted Vanilla Almond Silk', purpose: 'Relaxing magnesium & healthy fats' }
    ]
  },
  {
    id: 'cleanse-5-day',
    title: 'The 5-Day Cellular Renewal',
    days: 5,
    bottleCount: 30,
    price: 219.00,
    subtext: 'Total metabolic refresh & deep gut restoration',
    description: 'A transformative seasonal reboot for seasoned juicers or those undergoing major dietary shifts. Split into two fresh deliveries to ensure maximum live enzymatic potency.',
    benefits: [
      'Split into 2 deliveries so every bottle is within 48h of pressing',
      'Includes 5 bonus Morning Ginger Cayenne shots',
      'Comprehensive preparation and transition-out food protocols',
      'Priority cold-chain direct delivery included'
    ],
    schedule: [
      { time: '07:30 AM', label: 'Sinus & Fire', productName: 'Immunity Ginger Fire Shot', purpose: 'Digestive fire igniter' },
      { time: '08:00 AM', label: 'Core Green', productName: 'Emerald Vitality No. 1', purpose: 'Nutrient loading' },
      { time: '11:00 AM', label: 'Hydration', productName: 'Glacial Hydrate No. 4', purpose: 'Electrolyte stabilization' },
      { time: '01:30 PM', label: 'Living Roots', productName: 'Ruby Hearth No. 3', purpose: 'Cardiovascular energy' },
      { time: '04:30 PM', label: 'Solar Shield', productName: 'Golden Solar Tonic No. 2', purpose: 'Inflammation defense' },
      { time: '08:00 PM', label: 'Nourish', productName: 'Sprouted Vanilla Almond Silk', purpose: 'Nerve grounding & sleep fuel' }
    ]
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'downtown-sanctuary',
    name: 'SOLTERRA Downtown Flagship & Pressery',
    address: '428 S. Spring Street, Historic Core',
    city: 'Los Angeles, CA 90013',
    hours: 'Mon – Sat: 7:00 AM – 7:00 PM · Sun: 8:00 AM – 5:00 PM',
    phone: '(213) 555-0192',
    lat: 34.0478,
    lng: -118.2505,
    pickupReadyMinutes: 15
  },
  {
    id: 'venice-ocean-bar',
    name: 'SOLTERRA Venice Coastal Bar',
    address: '1102 Abbot Kinney Blvd',
    city: 'Venice Beach, CA 90291',
    hours: 'Daily: 7:30 AM – 6:30 PM',
    phone: '(310) 555-0284',
    lat: 33.9912,
    lng: -118.4682,
    pickupReadyMinutes: 12
  }
];

export const TESTIMONIALS = [
  {
    quote: "The Emerald Vitality and Golden Solar have completely replaced my morning double-shot espresso. No afternoon crash, pure steady energy, and you can truly taste how fresh and cold the press is.",
    author: "Elena Rostova",
    role: "Architect & Daily Subscriber",
    verified: true,
    rating: 5,
    favorite: "Emerald Vitality No. 1"
  },
  {
    quote: "We did the 3-Day Deep Glow cleanse as a couple before our wedding. By day two our skin had a vibrant glow and digestion was totally calm. The glass bottle drop-off packaging was impeccably cold.",
    author: "Marcus Vance",
    role: "Marathon Runner & Designer",
    verified: true,
    rating: 5,
    favorite: "3-Day Deep Glow Package"
  },
  {
    quote: "Most juice bars water down with ice or use pasteurized puree bases. SOLTERRA is 100% hydraulic pressed raw produce. You see the deep cellular separation in the fridge—authentic craftsmanship.",
    author: "Dr. Sarah Chen",
    role: "Functional Medicine Practitioner",
    verified: true,
    rating: 5,
    favorite: "Pure Celery Mineral Flush"
  }
];
