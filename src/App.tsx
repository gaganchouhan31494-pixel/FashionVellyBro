import React, { useState, useEffect } from 'react';
import { ActivePage, Product, CartItem, Order, UserProfile } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AiStylistModal } from './components/AiStylistModal';
import { LoadingScreen } from './components/LoadingScreen';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AuthPage } from './pages/AuthPage';
import { ProfilePage } from './pages/ProfilePage';
import { OrderHistoryPage } from './pages/OrderHistoryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('fvb_cart');
    return saved ? JSON.parse(saved) : [
      {
        id: 'p1-M-Pitch Black',
        product: PRODUCTS[0],
        selectedSize: 'M',
        selectedColor: 'Pitch Black',
        quantity: 1
      }
    ];
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('fvb_wishlist');
    return saved ? JSON.parse(saved) : ['p1', 'p2'];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('fvb_orders');
    return saved ? JSON.parse(saved) : [
      {
        id: 'FVB-928192',
        date: 'May 12, 2026',
        items: [{
          id: 'p2-L-Carbon Black',
          product: PRODUCTS[1],
          selectedSize: 'L',
          selectedColor: 'Carbon Black',
          quantity: 1
        }],
        total: 119.00,
        status: 'Delivered',
        shippingAddress: {
          id: 'addr-1',
          fullName: 'Alex Vance',
          addressLine: '742 Evergreen Terrace',
          city: 'New York',
          state: 'NY',
          postalCode: '10001',
          country: 'United States',
          isDefault: true
        },
        paymentMethod: 'Credit Card',
        trackingNumber: 'TRK-892109482'
      }
    ];
  });

  const [user, setUser] = useState<UserProfile>({
    name: 'Alex Vance',
    email: 'alex.vance@fashionvellybro.com',
    phone: '+1 (555) 382-9102',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    tier: 'VIP Elite Member',
    points: 1250
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [aiStylistOpen, setAiStylistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [promoCode, setPromoCode] = useState('FVB20');
  const [discountApplied, setDiscountApplied] = useState(true);

  useEffect(() => {
    localStorage.setItem('fvb_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('fvb_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  useEffect(() => {
    localStorage.setItem('fvb_orders', JSON.stringify(orders));
  }, [orders]);

  const handleAddToCart = (product: Product, size: string, color: string, qty: number = 1) => {
    const cartItemId = `${product.id}-${size}-${color}`;
    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { id: cartItemId, product, selectedSize: size, selectedColor: color, quantity: qty }];
    });
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const handleRemoveCartItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handlePlaceOrder = (newOrder: Order) => {
    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#E50914] selection:text-white">
      
      {/* Initial Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenAiStylist={() => setAiStylistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-24 md:pb-0">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(p, sz, cl) => handleAddToCart(p, sz, cl, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />
        )}
        {activePage === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            onAddToCart={(p, sz, cl) => handleAddToCart(p, sz, cl, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {activePage === 'categories' && (
          <CategoriesPage
            setActivePage={setActivePage}
            onSelectProduct={handleSelectProduct}
          />
        )}
        {activePage === 'cart' && (
          <CartPage
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveCartItem}
            setActivePage={setActivePage}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            discountApplied={discountApplied}
            setDiscountApplied={setDiscountApplied}
          />
        )}
        {activePage === 'checkout' && (
          <CheckoutPage
            cart={cart}
            setActivePage={setActivePage}
            onPlaceOrder={handlePlaceOrder}
            discountApplied={discountApplied}
          />
        )}
        {activePage === 'auth' && (
          <AuthPage
            setActivePage={setActivePage}
            setUser={setUser}
          />
        )}
        {activePage === 'profile' && (
          <ProfilePage
            user={user}
            setUser={setUser}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'orders' && (
          <OrderHistoryPage
            orders={orders}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            onOpenAiStylist={() => setAiStylistOpen(true)}
          />
        )}
      </main>

      {/* Product Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={(p, sz, cl, qty) => handleAddToCart(p, sz, cl, qty)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
      />

      {/* AI Stylist Modal */}
      <AiStylistModal
        isOpen={aiStylistOpen}
        onClose={() => setAiStylistOpen(false)}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
      />

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}

