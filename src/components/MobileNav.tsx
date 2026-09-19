import React from 'react';
import { ActivePage } from '../types';
import { Home, Compass, Info, UserCheck, Mail } from 'lucide-react';

interface MobileNavProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  wishlistCount: number;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { label: 'Home', page: 'home' as ActivePage, icon: Home },
    { label: 'Catalog', page: 'shop' as ActivePage, icon: Compass },
    { label: 'About', page: 'about' as ActivePage, icon: Info },
    { label: 'Owner', page: 'owner' as ActivePage, icon: UserCheck },
    { label: 'Contact', page: 'contact' as ActivePage, icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-3 left-4 right-4 z-40 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 px-3 py-2 flex items-center justify-around shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activePage === item.page;

        return (
          <button
            key={item.page}
            onClick={() => setActivePage(item.page)}
            className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-[#E50914]/15 text-[#E50914] border border-[#E50914]/30 shadow-[0_0_15px_rgba(229,9,20,0.25)] scale-105' 
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
            }`}
          >
            <div className="relative">
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            </div>
            <span className={`text-[9px] sm:text-[10px] mt-1 uppercase tracking-wider ${isActive ? 'font-black text-white' : 'font-medium text-zinc-400'}`}>
              {item.label}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 w-1 h-1 bg-[#E50914] rounded-full shadow-[0_0_8px_#E50914]"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

