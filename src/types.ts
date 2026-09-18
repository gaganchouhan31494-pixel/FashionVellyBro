export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isSpecialOffer?: boolean;
  discountPercent?: number;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface CartItem {
  id: string; // unique combination of product.id + size + color
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  productName?: string;
}

export interface UserAddress {
  id: string;
  fullName: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  tier: string;
  points: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'In Transit' | 'Delivered' | 'Cancelled';
  shippingAddress: UserAddress;
  paymentMethod: string;
  trackingNumber: string;
}

export type ActivePage = 
  | 'home' 
  | 'shop' 
  | 'product-detail' 
  | 'categories' 
  | 'cart' 
  | 'checkout' 
  | 'auth' 
  | 'profile' 
  | 'orders' 
  | 'contact';
