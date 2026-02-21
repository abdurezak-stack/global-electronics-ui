import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'EXPRESS ProBook X15',
    category: 'Laptops',
    brand: 'ExpressTech',
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviewsCount: 1240,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/laptop-banner-91d665a8-1771682321124.webp',
    specs: {
      processor: 'Intel i9 13th Gen',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      screen: '15.6" 4K OLED'
    },
    isBestSeller: true
  },
  {
    id: '2',
    name: 'ExpressPhone 14 Ultra',
    category: 'Mobiles',
    brand: 'EXPRESS',
    price: 999.00,
    originalPrice: 1099.00,
    rating: 4.9,
    reviewsCount: 3500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/mobile-phone-banner-471ac8c0-1771682320592.webp',
    specs: {
      processor: 'A16 Bionic equivalent',
      ram: '12GB',
      storage: '256GB',
      screen: '6.7" Dynamic AMOLED'
    },
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: '3',
    name: 'Gaming Rig X-Treme',
    category: 'Desktops',
    brand: 'GameMaster',
    price: 2499.99,
    originalPrice: 2799.99,
    rating: 4.7,
    reviewsCount: 890,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/desktop-pc-banner-3bf80535-1771682320899.webp',
    specs: {
      processor: 'AMD Ryzen 9 7950X',
      ram: '64GB RGB DDR5',
      storage: '2TB Gen4 SSD',
      gpu: 'RTX 4090 24GB'
    },
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Tab EXPRESS Air',
    category: 'Tablets',
    brand: 'EXPRESS',
    price: 599.00,
    originalPrice: 649.00,
    rating: 4.6,
    reviewsCount: 560,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/accessories-banner-753eb89e-1771682319582.webp',
    specs: {
      processor: 'M2 Chip',
      ram: '8GB',
      storage: '128GB',
      screen: '11" Liquid Retina'
    },
    isNewArrival: true
  },
  {
    id: '5',
    name: 'Workstation Prime',
    category: 'Desktops',
    brand: 'ExpressTech',
    price: 1899.00,
    originalPrice: 2099.00,
    rating: 4.5,
    reviewsCount: 320,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/workstation-banner-3e8af44d-1771682320300.webp',
    specs: {
      processor: 'Threadripper 3960X',
      ram: '128GB ECC',
      storage: '4TB RAID 0',
      screen: 'Dual 27" Monitors included'
    }
  },
  {
    id: '6',
    name: 'ExpressPhone 14 Pro',
    category: 'Mobiles',
    brand: 'EXPRESS',
    price: 899.00,
    originalPrice: 999.00,
    rating: 4.7,
    reviewsCount: 2200,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/mobile-phone-banner-471ac8c0-1771682320592.webp',
    specs: {
      processor: 'Express Bionic 15',
      ram: '8GB',
      storage: '128GB',
      screen: '6.1" OLED'
    }
  },
  {
    id: '7',
    name: 'CloudBook 13',
    category: 'Laptops',
    brand: 'CloudTech',
    price: 449.00,
    originalPrice: 599.00,
    rating: 4.2,
    reviewsCount: 1500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/laptop-banner-91d665a8-1771682321124.webp',
    specs: {
      processor: 'Intel Celeron',
      ram: '4GB',
      storage: '64GB eMMC',
      screen: '13.3" FHD'
    }
  },
  {
    id: '8',
    name: 'ExpressBuds Pro',
    category: 'Accessories',
    brand: 'EXPRESS',
    price: 149.00,
    originalPrice: 199.00,
    rating: 4.8,
    reviewsCount: 12000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/accessories-banner-753eb89e-1771682319582.webp',
    specs: {
      battery: '30 Hours',
      noise: 'Active Cancellation',
      charging: 'Wireless Case'
    },
    isBestSeller: true
  },
  {
    id: '9',
    name: 'UltraWide Curved 34"',
    category: 'Accessories',
    brand: 'ExpressTech',
    price: 699.99,
    originalPrice: 849.99,
    rating: 4.6,
    reviewsCount: 450,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/workstation-banner-3e8af44d-1771682320300.webp',
    specs: {
      resolution: '3440 x 1440',
      refresh: '144Hz',
      panel: 'IPS'
    }
  },
  {
    id: '10',
    name: 'RTX 4080 Super',
    category: 'Components',
    brand: 'NVidia',
    price: 1199.99,
    originalPrice: 1299.99,
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/desktop-pc-banner-3bf80535-1771682320899.webp',
    specs: {
      vram: '16GB GDDR6X',
      bus: '256-bit',
      power: '320W'
    },
    isNewArrival: true
  }
];