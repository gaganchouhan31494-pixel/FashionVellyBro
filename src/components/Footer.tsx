import React from 'react';
import { ActivePage } from '../types';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-black border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div onClick={() => setActivePage('home')} className="cursor-pointer">
            <Logo size="sm" />
          </div>
          <p className="text-xs leading-relaxed text-zinc-400">
            FashionVellyBro is a premier luxury streetwear and modern tailoring showroom founded by Shumit Kumar, defining international urban elegance.
          </p>
          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-widest text-[#E50914] font-bold block">Founder & Owner</span>
            <span className="text-sm font-bold text-white font-['Syne']">Shumit Kumar</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Syne']">Showroom Navigation</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <button onClick={() => setActivePage('home')} className="hover:text-[#E50914] transition-colors">Home Showcase</button>
            </li>
            <li>
              <button onClick={() => setActivePage('shop')} className="hover:text-[#E50914] transition-colors">Collections / Catalog</button>
            </li>
            <li>
              <button onClick={() => setActivePage('about')} className="hover:text-[#E50914] transition-colors">About Us</button>
            </li>
            <li>
              <button onClick={() => setActivePage('owner')} className="hover:text-[#E50914] transition-colors">Owner / Founder</button>
            </li>
            <li>
              <button onClick={() => setActivePage('contact')} className="hover:text-[#E50914] transition-colors">Concierge & Contact</button>
            </li>
          </ul>
        </div>

        {/* Contact Info Placeholders */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Syne']">Showroom Concierge</h4>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
              <span>742 Luxury Avenue, Fashion District, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#E50914] shrink-0" />
              <span>+1 (800) 555-VELLY</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#E50914] shrink-0" />
              <span>concierge@fashionvellybro.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Placeholders */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] font-['Syne']">Connect & Socials</h4>
          <p className="text-xs text-zinc-400">Follow the latest runway drops and editorial lookbooks.</p>
          <div className="flex items-center gap-3 pt-1">
            <a href="#instagram" onClick={(e) => e.preventDefault()} className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 hover:text-[#E50914] hover:border-[#E50914]/40 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#twitter" onClick={(e) => e.preventDefault()} className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 hover:text-[#E50914] hover:border-[#E50914]/40 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#facebook" onClick={(e) => e.preventDefault()} className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 hover:text-[#E50914] hover:border-[#E50914]/40 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <p>&copy; 2026 FashionVellyBro (Founder: Shumit Kumar). All rights reserved. Product Showcase Edition.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-zinc-400 cursor-pointer">Showroom Terms</span>
          <span className="hover:text-zinc-400 cursor-pointer">Authentication</span>
        </div>
      </div>
    </footer>
  );
};
