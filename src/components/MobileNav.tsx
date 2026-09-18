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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg border-t border-zinc-800 px-2 py-2 flex items-center justify-around shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activePage === item.page;

        return (
          <button
            key={item.page}
            onClick={() => setActivePage(item.page)}
            className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
              isActive ? 'text-[#E50914]' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            </div>
            <span className={`text-[10px] mt-1 font-medium ${isActive ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
