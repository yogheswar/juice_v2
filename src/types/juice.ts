export type CategoryId = 'all' | 'greens' | 'citrus' | 'roots' | 'hydration' | 'cleanse' | 'shots';

export type BottleSize = '12oz' | '16oz' | '32oz';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  tagline: string;
  description: string;
  image: string;
  basePrice: number; // For 12oz
  prices: Record<BottleSize, number>;
  ingredients: string[];
  nutrition: {
    calories: number;
    sugarGrams: number;
    vitaminCDailyPercent: number;
    potassiumMg: number;
    hydrationScore: number; // 1 - 10
  };
  tasteProfile: {
    sweetness: number; // 1-5
    tartness: number;  // 1-5
    earthiness: number;// 1-5
    intensity: number; // 1-5
  };
  dietary: string[];
  colorHex: string;
  farmSource: string;
  featured?: boolean;
}

export interface CustomJuiceIngredient {
  id: string;
  name: string;
  category: 'base' | 'green' | 'root-citrus' | 'boost';
  calories: number;
  sugar: number;
  vitaminC: number;
  color: string;
  description: string;
  extraPrice: number;
}

export interface CustomJuiceOrder {
  id: string;
  customName: string;
  size: BottleSize;
  base: CustomJuiceIngredient;
  greens: CustomJuiceIngredient[];
  rootsAndCitrus: CustomJuiceIngredient[];
  boosters: CustomJuiceIngredient[];
  totalPrice: number;
  nutrition: {
    calories: number;
    sugarGrams: number;
    vitaminCDailyPercent: number;
  };
}

export interface CleanseProgram {
  id: string;
  title: string;
  days: number;
  bottleCount: number;
  price: number;
  subtext: string;
  description: string;
  schedule: Array<{
    time: string;
    label: string;
    productName: string;
    purpose: string;
  }>;
  benefits: string[];
}

export interface CartItem {
  cartItemId: string;
  productId?: string;
  isCustom?: boolean;
  name: string;
  image?: string;
  size: BottleSize;
  unitPrice: number;
  quantity: number;
  details?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  lat: number;
  lng: number;
  pickupReadyMinutes: number;
}
