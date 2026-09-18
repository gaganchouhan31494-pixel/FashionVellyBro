import React from 'react';
import { Logo } from '../components/Logo';
import { Sparkles, Shield, Award, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050506] text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-semibold text-[#E50914] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Luxury Brand Heritage
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-['Syne']">
            The Philosophy of <span className="text-[#E50914]">Velly</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
            Born from a vision of uncompromising quality and high-end streetwear aesthetics, FashionVellyBro defines modern luxury through architectural silhouettes and meticulous craftsmanship.
          </p>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group h-[400px] md:h-[480px]">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000" 
              alt="Fashion Craftsmanship" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#E50914] font-bold">Uncompromising Standard</span>
              <h3 className="text-2xl font-bold uppercase font-['Syne'] mt-1">Crafted for the Elite</h3>
            </div>
          </div>

          <div className="space-y-6 lg:pl-6">
            <h3 className="text-2xl md:text-3xl font-black uppercase font-['Syne'] tracking-tight">
              Redefining Modern Streetwear & Luxury Tailoring
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              At FashionVellyBro, every garment is a statement of identity. We combine raw urban attitude with premium Italian and Japanese textiles, engineered for individuals who command presence without uttering a word.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                <Shield className="w-6 h-6 text-[#E50914] mb-2" />
                <h4 className="font-bold text-sm uppercase">Premium Fabrics</h4>
                <p className="text-xs text-zinc-500 mt-1">Sourced from top mills worldwide.</p>
              </div>
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                <Award className="w-6 h-6 text-[#E50914] mb-2" />
                <h4 className="font-bold text-sm uppercase">Exquisite Fit</h4>
                <p className="text-xs text-zinc-500 mt-1">Tailored for modern silhouettes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="flex justify-center">
              <Logo size="md" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase font-['Syne']">
              "Style is not just what you wear; it is your permanent signature."
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Under the visionary leadership of founder Shumit Kumar, FashionVellyBro continues to push the boundaries of contemporary fashion, establishing new standards for timeless elegance and bold individuality.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
