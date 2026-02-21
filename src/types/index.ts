export interface Product {
  id: string;
  name: string;
  category: 'Mobiles' | 'Laptops' | 'Desktops' | 'Tablets' | 'Accessories' | 'Components';
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    screen?: string;
    [key: string]: string | undefined;
  };
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
  updated_at: string | null;
}