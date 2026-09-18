import React, { useState, useEffect } from 'react';
import { ActivePage, Product } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AiStylistModal } from './components/AiStylistModal';
import { LoadingScreen } from './components/LoadingScreen';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { OwnerPage } from './pages/OwnerPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [activePage, setActivePage] = useState<ActivePage>('home');
  
  const handlePageChange = (newPage: ActivePage) => {
    if (newPage === activePage) return;
    setIsPageTransitioning(true);
    setActivePage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsPageTransitioning(false);
    }, 400);
  };

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fvb_wishlist');
      return saved ? JSON.parse(saved) : ['p1', 'p2'];
    } catch {
      return ['p1', 'p2'];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [aiStylistOpen, setAiStylistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('fvb_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#E50914] selection:text-white">
      
      {/* Initial Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Page Transition Splash Overlay */}
      {isPageTransitioning && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity animate-fadeIn">
          <div className="w-12 h-12 border-3 border-[#E50914] border-t-transparent rounded-full animate-spin mb-4 shadow-[0_0_20px_#E50914]"></div>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-white font-['Syne']">Loading Showroom...</p>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        wishlistCount={wishlistIds.length}
        onOpenAiStylist={() => setAiStylistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (activePage !== 'shop') handlePageChange('shop');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-24 md:pb-0">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            onSelectProduct={handleSelectProduct}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />
        )}
        {activePage === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {activePage === 'about' && (
          <AboutPage />
        )}
        {activePage === 'owner' && (
          <OwnerPage />
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
        setActivePage={handlePageChange}
        wishlistCount={wishlistIds.length}
      />

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />

    </div>
  );
}
