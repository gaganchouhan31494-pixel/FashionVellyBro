import React from 'react';
import { Logo } from './Logo';
import { ActivePage } from '../types';
import { ShieldCheck, Truck, RotateCcw, Headphones, Send } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Perks Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-zinc-800/80 mb-12">
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
            <div className="p-3 bg-[#E50914]/10 rounded-xl text-[#E50914]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Global Express Delivery</h4>
              <p className="text-xs text-zinc-400">Free shipping on orders over $150</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
            <div className="p-3 bg-[#E50914]/10 rounded-xl text-[#E50914]">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Hassle-Free Returns</h4>
              <p className="text-xs text-zinc-400">30-day easy exchange & refund policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
            <div className="p-3 bg-[#E50914]/10 rounded-xl text-[#E50914]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">100% Secure Checkout</h4>
              <p className="text-xs text-zinc-400">Encrypted payment gateway protection</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
            <div className="p-3 bg-[#E50914]/10 rounded-xl text-[#E50914]">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24/7 VIP Support</h4>
              <p className="text-xs text-zinc-400">Dedicated fashion concierge service</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              FashionVellyBro is the pinnacle of modern luxury streetwear and tailored apparel. Designed for those who command presence through uncompromising style and uncompromising quality.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-white font-bold block mb-3">Join the FVB Inner Circle</span>
              <form onSubmit={(e) => { e.preventDefault(); alert('Successfully subscribed to FashionVellyBro newsletter!'); }} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 flex-1 focus:outline-none focus:border-[#E50914]"
                  required
                />
                <button type="submit" className="bg-[#E50914] hover:bg-[#c40711] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => setActivePage('home')} className="hover:text-[#E50914] transition-colors">Home</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Shop All</button></li>
              <li><button onClick={() => setActivePage('categories')} className="hover:text-[#E50914] transition-colors">Categories</button></li>
              <li><button onClick={() => setActivePage('orders')} className="hover:text-[#E50914] transition-colors">Order Tracking</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-[#E50914] transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Collections</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Streetwear</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Luxury Jackets</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Formal & Tailoring</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Heavyweight Hoodies</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Accessories</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Client Care</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => setActivePage('profile')} className="hover:text-[#E50914] transition-colors">My Account</button></li>
              <li><button onClick={() => setActivePage('cart')} className="hover:text-[#E50914] transition-colors">Shopping Cart</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-[#E50914] transition-colors">Size Guide</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-[#E50914] transition-colors">Shipping & Returns</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-[#E50914] transition-colors">FAQs</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>&copy; {new Date().getFullYear()} FashionVellyBro Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 cursor-pointer">Cookie Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
