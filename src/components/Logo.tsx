import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-4xl md:text-6xl'
  };

  return (
    <div className={`inline-flex flex-col items-center sm:items-start cursor-pointer select-none group ${className}`}>
      {/* Velly text with red luxury accent bar */}
      <div className="relative inline-flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914] animate-pulse"></div>
          <span className={`font-black tracking-[0.2em] text-white uppercase font-['Syne'] drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)] ${sizeClasses[size]}`}>
            VELLY
          </span>
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
        </div>
        {/* Vibrant Red Luxury Gradient Bar */}
        <div className="h-2 md:h-2.5 w-full bg-gradient-to-r from-[#E50914] via-red-600 to-[#E50914] rounded-full mt-1 shadow-[0_0_20px_rgba(229,9,20,0.9)] group-hover:shadow-[0_0_30px_rgba(229,9,20,1)] transition-all duration-300"></div>
      </div>
      
      {/* Subtext FashionVellyBro */}
      <div className="mt-1.5 flex items-center justify-center gap-1 px-2.5 py-0.5 bg-zinc-900/90 rounded-full border border-zinc-800 shadow-inner">
        <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-bold text-zinc-300">
          <span className="text-[#E50914]">FASHION</span> <span className="text-white">VELLY</span> <span className="text-[#E50914]">BRO</span>
        </span>
      </div>
    </div>
  );
};

