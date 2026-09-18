import { Product, Category, Review } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Streetwear',
    slug: 'streetwear',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    itemCount: 24,
    description: 'Bold urban silhouettes, oversized hoodies, and graphic aesthetics.'
  },
  {
    id: 'c2',
    name: 'Luxury Jackets',
    slug: 'luxury-jackets',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    itemCount: 18,
    description: 'Premium leather, puffer bombers, and tailored outerwear.'
  },
  {
    id: 'c3',
    name: 'Formal & Tailoring',
    slug: 'formal',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    itemCount: 15,
    description: 'Sharp blazers, minimalist trousers, and evening wear.'
  },
  {
    id: 'c4',
    name: 'Hoodies & Sweatshirts',
    slug: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800',
    itemCount: 30,
    description: 'Heavyweight french terry fleece with signature FVB red embroidery.'
  },
  {
    id: 'c5',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1521335629174-fef9b0dd584b?auto=format&fit=crop&q=80&w=800',
    itemCount: 12,
    description: 'Leather crossbodies, minimalist caps, and statement chains.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'FVB Signature Crimson Bomber Jacket',
    category: 'Luxury Jackets',
    price: 289.00,
    discountPrice: 229.00,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Crafted from premium matte black nylon with contrasting bright red lining and hardware. Features custom FashionVellyBro metallic zipper pulls and embroidered sleeve emblem.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pitch Black', hex: '#0B0B0C' },
      { name: 'Crimson Red', hex: '#E50914' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    isFeatured: true,
    isNewArrival: true,
    stock: 15
  },
  {
    id: 'p2',
    name: 'VellyBro Heavyweight Over-Hoodie',
    category: 'Hoodies & Sweatshirts',
    price: 145.00,
    discountPrice: 119.00,
    discountPercent: 18,
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=900'
    ],
    description: '500GSM ultra-dense organic cotton hoodie designed with a structured boxy fit. Minimalist white FVB chest typography with red accent stitch.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Carbon Black', hex: '#141416' },
      { name: 'Snow White', hex: '#F8F9FA' }
    ],
    isFeatured: true,
    isSpecialOffer: true,
    stock: 22
  },
  {
    id: 'p3',
    name: 'Avant-Garde Red Stripe Track Pants',
    category: 'Streetwear',
    price: 120.00,
    rating: 4.7,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Relaxed-fit technical trousers featuring striking dual red racing stripes along the outseam. Equipped with deep zip pockets and adjustable bungee ankles.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Midnight Black', hex: '#0B0B0C' }
    ],
    isNewArrival: true,
    stock: 18
  },
  {
    id: 'p4',
    name: 'FVB Executive Double-Breasted Blazer',
    category: 'Formal & Tailoring',
    price: 345.00,
    discountPrice: 299.00,
    discountPercent: 13,
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Immaculately tailored from Italian tropical wool blend. Features peak lapels, structured shoulders, and a signature crimson silk pocket square lining.',
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Obsidian Black', hex: '#0B0B0C' }
    ],
    isFeatured: true,
    stock: 8
  },
  {
    id: 'p5',
    name: 'Urban Cyberpunk Utility Vest',
    category: 'Streetwear',
    price: 180.00,
    discountPrice: 149.00,
    discountPercent: 17,
    rating: 4.6,
    reviewsCount: 51,
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Multi-pocket tactical vest designed for the urban explorer. Water-resistant ripstop nylon with red buckle closures and modular strap system.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Matte Black', hex: '#121214' },
      { name: 'Signal Red', hex: '#E50914' }
    ],
    isSpecialOffer: true,
    stock: 14
  },
  {
    id: 'p6',
    name: 'Minimalist Monogram Graphic Tee',
    category: 'Streetwear',
    price: 65.00,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Super-soft combed cotton tee featuring the iconic FashionVellyBro typographic emblem across the back in scarlet red.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Jet Black', hex: '#0B0B0C' },
      { name: 'Bright White', hex: '#FFFFFF' }
    ],
    isNewArrival: true,
    stock: 45
  },
  {
    id: 'p7',
    name: 'FVB All-Weather Leather Crossbody Bag',
    category: 'Accessories',
    price: 155.00,
    discountPrice: 129.00,
    discountPercent: 16,
    rating: 4.8,
    reviewsCount: 77,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Full-grain calfskin leather bag with detachable red strap webbing. Multiple compartments for phone, wallet, and everyday essentials.',
    sizes: ['One Size'],
    colors: [
      { name: 'Black / Red', hex: '#0B0B0C' }
    ],
    isFeatured: true,
    stock: 19
  },
  {
    id: 'p8',
    name: 'High-Top Leather Street Sneakers',
    category: 'Streetwear',
    price: 220.00,
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Handcrafted leather sneakers with reinforced ankle support, cushioned memory foam insoles, and signature red outsole detailing.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: [
      { name: 'Black & Red', hex: '#0B0B0C' },
      { name: 'Triple White', hex: '#FFFFFF' }
    ],
    isNewArrival: true,
    stock: 25
  },
  {
    id: 'p9',
    name: 'FVB Urban Oversized Trench Coat',
    category: 'Luxury Jackets',
    price: 395.00,
    discountPrice: 349.00,
    discountPercent: 12,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Floor-sweeping structured trench coat with storm flaps, belted waist, and scarlet inner lining.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Midnight Onyx', hex: '#0D0D0F' }
    ],
    isFeatured: true,
    stock: 10
  },
  {
    id: 'p10',
    name: 'Executive Minimalist Wool Trousers',
    category: 'Formal & Tailoring',
    price: 165.00,
    rating: 4.7,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Pleated luxury wool trousers tailored for a clean drape and modern silhouette.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Dark Charcoal', hex: '#1C1C1E' }
    ],
    isNewArrival: true,
    stock: 20
  },
  {
    id: 'p11',
    name: 'FVB Signature Metallic Buckle Belt',
    category: 'Accessories',
    price: 85.00,
    rating: 4.8,
    reviewsCount: 44,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Italian leather belt featuring custom gunmetal hardware and subtle red accent stitch near the buckle.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Matte Black', hex: '#0B0B0C' }
    ],
    stock: 30
  },
  {
    id: 'p12',
    name: 'VellyBro Heavyweight Zip Hoodie',
    category: 'Hoodies & Sweatshirts',
    price: 155.00,
    discountPrice: 135.00,
    discountPercent: 12,
    rating: 4.9,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Full-zip heavyweight french terry fleece hoodie with metallic double zippers and embroidered red FVB monogram.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pitch Black', hex: '#0B0B0C' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    isFeatured: true,
    stock: 16
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Marcus Vance',
    rating: 5,
    date: '2 days ago',
    comment: 'The quality of the FVB Bomber Jacket is out of this world. The red contrast lining and heavy hardware feel genuinely luxury. Worth every penny!',
    verified: true,
    productName: 'FVB Signature Crimson Bomber Jacket'
  },
  {
    id: 'r2',
    author: 'Elena Rostova',
    rating: 5,
    date: '1 week ago',
    comment: 'Super fast delivery and immaculate packaging. The heavyweight hoodie has such a clean boxy drape. FashionVellyBro is my new go-to brand.',
    verified: true,
    productName: 'VellyBro Heavyweight Over-Hoodie'
  },
  {
    id: 'r3',
    author: 'Jordan K.',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Sleek design, fits true to size. The customer support team was extremely helpful when I needed to exchange sizes.',
    verified: true,
    productName: 'Avant-Garde Red Stripe Track Pants'
  }
];
