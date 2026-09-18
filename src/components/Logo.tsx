import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl md:text-6xl'
  };

  return (
    <div className={`inline-flex flex-col items-center sm:items-start cursor-pointer select-none group ${className}`}>
      {/* Velly text with red underline bar matching the logo screenshot */}
      <div className="relative inline-flex flex-col items-center">
        <span className={`font-black tracking-widest text-white uppercase font-['Syne'] drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] ${sizeClasses[size]}`}>
          V<span className="text-white">E</span>LLY
        </span>
        {/* Vibrant Red Bar */}
        <div className="h-2 md:h-2.5 w-full bg-[#E50914] rounded-sm mt-0.5 shadow-[0_0_15px_rgba(229,9,20,0.9)] group-hover:shadow-[0_0_25px_rgba(229,9,20,1)] transition-all duration-300"></div>
      </div>
      
      {/* Subtext FashionVellyBro matching the exact screenshot layout */}
      <div className="mt-1 flex items-center justify-center gap-1.5 px-1.5 py-0.5 bg-black/70 rounded border border-zinc-800">
        <span className="text-[9px] md:text-[11px] tracking-[0.3em] uppercase font-bold text-zinc-300">
          <span className="text-[#E50914] font-black">F</span>ASHION <span className="text-white">VELLY</span> <span className="text-[#E50914] font-black">B</span>RO
        </span>
      </div>
    </div>
  );
};
