import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 600); // Wait for fade out animation
          }, 200);
          return 100;
        }
        return prev + 15;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#050506] flex flex-col items-center justify-center transition-opacity duration-600 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.12)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo Display */}
        <div className="transform scale-125 mb-8 animate-pulse">
          <Logo size="lg" />
        </div>

        <p className="text-zinc-400 text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-6">
          Initializing Luxury Streetwear Experience
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 h-1 bg-zinc-800 rounded-full overflow-hidden relative border border-zinc-700">
          <div 
            className="absolute top-0 left-0 bottom-0 bg-[#E50914] shadow-[0_0_15px_#E50914] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-4 text-xs font-mono text-zinc-500 tracking-wider">
          {progress}% LOADED
        </div>
      </div>

      <div className="absolute bottom-8 text-[11px] text-zinc-600 tracking-widest uppercase font-medium">
        Fashion Velly Bro &copy; 2026 • Premium Edition
      </div>
    </div>
  );
};
