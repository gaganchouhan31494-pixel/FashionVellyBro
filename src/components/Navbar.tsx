import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Logo } from './Logo';
import { Search, ShoppingBag, Heart, User, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenAiStylist: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  cartCount,
  wishlistCount,
  onOpenAiStylist,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Categories', page: 'categories' },
    { label: 'Order History', page: 'orders' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800/80 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div onClick={() => setActivePage('home')} className="cursor-pointer transform scale-90 sm:scale-100 origin-left">
          <Logo size="sm" className="md:scale-100" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => setActivePage(link.page)}
              className={`text-sm font-semibold transition-colors relative py-2 ${
                activePage === link.page
                  ? 'text-[#E50914]'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.label}
              {activePage === link.page && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E50914] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* AI Stylist Button */}
          <button
            onClick={onOpenAiStylist}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white border border-[#E50914]/40 px-3 py-1.5 md:px-3.5 md:py-2 rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(229,9,20,0.15)]"
            title="Ask AI Stylist"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#E50914]" />
            <span>AI Stylist</span>
          </button>

          {/* Search Bar (Desktop) */}
          <div className="relative hidden lg:block w-48 xl:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activePage !== 'shop') setActivePage('shop');
              }}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E50914] transition-colors"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-zinc-500 pointer-events-none" />
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => setActivePage('shop')}
            className="relative p-2 text-zinc-300 hover:text-white transition-colors bg-zinc-900/80 border border-zinc-800 rounded-xl"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E50914] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-black">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActivePage('cart')}
            className="relative p-2 text-zinc-300 hover:text-white transition-colors bg-zinc-900/80 border border-zinc-800 rounded-xl"
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E50914] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Button (Desktop) */}
          <button
            onClick={() => setActivePage('profile')}
            className="hidden sm:flex p-2 text-zinc-300 hover:text-white transition-colors bg-zinc-900/80 border border-zinc-800 rounded-xl"
            title="Profile"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors bg-zinc-900 border border-zinc-800 rounded-xl ml-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 border-b border-zinc-800 px-5 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activePage !== 'shop') setActivePage('shop');
              }}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E50914]"
            />
            <Search className="absolute right-3.5 top-3 w-4 h-4 text-zinc-500" />
          </div>

          <button
            onClick={() => {
              onOpenAiStylist();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#E50914] text-white py-3 rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(229,9,20,0.4)]"
          >
            <Sparkles className="w-4 h-4" /> Ask VellyBro AI Stylist
          </button>

          <nav className="flex flex-col space-y-1 pt-2 border-t border-zinc-800/60">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setActivePage(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activePage === link.page
                    ? 'bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/40'
                    : 'text-zinc-300 hover:bg-zinc-900'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-500 font-mono">→</span>
              </button>
            ))}
            <button
              onClick={() => {
                setActivePage('profile');
                setMobileMenuOpen(false);
              }}
              className="text-left py-3 px-4 rounded-xl text-sm font-semibold text-zinc-300 hover:bg-zinc-900 flex items-center justify-between"
            >
              <span>My Profile & VIP Points</span>
              <User className="w-4 h-4 text-[#E50914]" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
