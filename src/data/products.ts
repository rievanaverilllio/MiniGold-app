export interface Product {
  id: number;
  name: string;
  slug?: string; // optional if later want slug variant
  description: string;
  price: number; // store in smallest currency unit or just number
  currency: string;
  image: string;
  category?: string;
}

// Temporary in‑memory products list (replace with DB later)
export const products: Product[] = [
  {
    id: 1,
    name: 'Amethyst Dragonfly Brooch',
    description: 'An intricate dragonfly brooch featuring a polished amethyst centerpiece and detailed wing filigree.',
    price: 650.70,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Brooch'
  },
  {
    id: 2,
    name: 'Classic Zirconia Elegance',
    description: 'Timeless zirconia piece with refined minimalist setting for everyday sophistication.',
    price: 330.90,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Necklace'
  },
  {
    id: 3,
    name: 'Eternal Elegance Bracelet',
    description: 'A delicate bracelet that blends enduring craftsmanship with modern luxe aesthetics.',
    price: 460.30,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Bracelet'
  },
  {
    id: 4,
    name: 'Classic Solitaire Earrings',
    description: 'Precision-cut solitaire earrings offering brilliant light performance and versatility.',
    price: 120.90,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Earrings'
  },
  {
    id: 5,
    name: 'Diamond Infinity Chain',
    description: 'An infinity-linked chain adorned with micro diamonds symbolizing endless radiance.',
    price: 780.50,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Necklace'
  },
  {
    id: 6,
    name: 'Rose Gold Tennis Bracelet',
    description: 'Rose gold plated tennis bracelet with brilliant round stones in a classic channel.',
    price: 925.40,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Bracelet'
  },
  {
    id: 7,
    name: 'Vintage Pearl Drops',
    description: 'Graceful drop earrings featuring natural pearls with vintage inspired hardware.',
    price: 340.20,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Earrings'
  },
  {
    id: 8,
    name: 'Sapphire Halo Ring',
    description: 'A striking sapphire center embraced by a luminous halo setting.',
    price: 1250.90,
    currency: 'USD',
    image: '/hero-bg.jpg',
    category: 'Ring'
  }
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}
