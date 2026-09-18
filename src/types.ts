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

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  productName?: string;
}

export type ActivePage = 
  | 'home' 
  | 'shop' 
  | 'about'
  | 'owner'
  | 'contact';
