import { Product, Category } from '@/types';
import headphonesImg from '@/assets/headphones.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import laptopImg from '@/assets/laptop.jpg';
import sneakersImg from '@/assets/sneakers.jpg';
import watchImg from '@/assets/watch.jpg';
import cameraImg from '@/assets/camera.jpg';
import gamingImg from '@/assets/gaming.jpg';
import backpackImg from '@/assets/backpack.jpg';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', image: smartphoneImg, productCount: 8 },
  { id: 'fashion', name: 'Fashion', image: sneakersImg, productCount: 4 },
  { id: 'accessories', name: 'Accessories', image: watchImg, productCount: 6 },
  { id: 'gaming', name: 'Gaming', image: gamingImg, productCount: 3 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    category: 'electronics',
    image: headphonesImg,
    rating: 4.8,
    reviews: 1250,
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation.',
    features: ['Active Noise Cancellation', '30-hour battery', 'Bluetooth 5.0', 'Quick charge'],
    inStock: true,
    discount: 25
  },
  {
    id: '2',
    name: 'Latest Smartphone',
    price: 899,
    category: 'electronics',
    image: smartphoneImg,
    rating: 4.6,
    reviews: 2100,
    description: 'Cutting-edge smartphone with advanced camera system and lightning-fast performance.',
    features: ['Triple camera system', '128GB storage', '5G ready', 'All-day battery'],
    inStock: true
  },
  {
    id: '3',
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2799,
    category: 'electronics',
    image: laptopImg,
    rating: 4.9,
    reviews: 850,
    description: 'Professional laptop designed for creators and developers with incredible performance.',
    features: ['M2 Pro chip', '512GB SSD', '16GB RAM', 'Liquid Retina XDR display'],
    inStock: true,
    discount: 11
  },
  {
    id: '4',
    name: 'Designer Sneakers',
    price: 179,
    originalPrice: 229,
    category: 'fashion',
    image: sneakersImg,
    rating: 4.4,
    reviews: 680,
    description: 'Comfortable and stylish sneakers perfect for everyday wear and light workouts.',
    features: ['Breathable mesh', 'Cushioned sole', 'Durable construction', 'Multiple colors'],
    inStock: true,
    discount: 22
  },
  {
    id: '5',
    name: 'Luxury Smart Watch',
    price: 449,
    category: 'accessories',
    image: watchImg,
    rating: 4.7,
    reviews: 420,
    description: 'Elegant smartwatch combining classic design with modern smart features.',
    features: ['Heart rate monitor', 'GPS tracking', 'Waterproof', '7-day battery'],
    inStock: true
  },
  {
    id: '6',
    name: 'Professional Camera',
    price: 1299,
    originalPrice: 1499,
    category: 'electronics',
    image: cameraImg,
    rating: 4.8,
    reviews: 290,
    description: 'High-end mirrorless camera for photography enthusiasts and professionals.',
    features: ['24.2MP sensor', '4K video', 'Image stabilization', 'Weather sealed'],
    inStock: false,
    discount: 13
  },
  {
    id: '7',
    name: 'Gaming Controller Pro',
    price: 89,
    category: 'gaming',
    image: gamingImg,
    rating: 4.5,
    reviews: 1100,
    description: 'Professional gaming controller with customizable buttons and precise control.',
    features: ['Programmable buttons', 'Hair triggers', 'RGB lighting', 'Wireless'],
    inStock: true
  },
  {
    id: '8',
    name: 'Travel Backpack',
    price: 129,
    category: 'accessories',
    image: backpackImg,
    rating: 4.6,
    reviews: 340,
    description: 'Durable and spacious backpack designed for travel and everyday use.',
    features: ['35L capacity', 'Laptop compartment', 'Water resistant', 'Multiple pockets'],
    inStock: true
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.discount && product.discount > 15);
};