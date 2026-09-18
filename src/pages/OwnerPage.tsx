import React from 'react';
import { Logo } from '../components/Logo';
import { Award, Sparkles, Target, Compass, ArrowRight } from 'lucide-react';

export const OwnerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050506] text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-semibold text-[#E50914] tracking-widest uppercase">
            <CrownIcon className="w-3.5 h-3.5 text-[#E50914]" /> Leadership & Vision
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-['Syne']">
            Meet The <span className="text-[#E50914]">Founder</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base">
            The creative force and uncompromising mind behind FashionVellyBro's luxury streetwear revolution.
          </p>
        </div>

        {/* Owner Profile Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Owner Photo / Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#E50914]/40 shadow-[0_0_30px_rgba(229,9,20,0.2)] aspect-[4/5] bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Shumit Kumar - Founder" 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#E50914] font-bold">Visionary Leader</span>
                <h3 className="text-2xl font-bold uppercase font-['Syne'] mt-1">Shumit Kumar</h3>
                <p className="text-xs text-zinc-400 tracking-wider">Founder & Owner, FashionVellyBro</p>
              </div>
            </div>
          </div>

          {/* Owner Bio & Details */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#E50914] tracking-widest uppercase">Executive Profile</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase font-['Syne'] tracking-tight">
                Shumit Kumar
              </h2>
              <p className="text-zinc-400 text-sm font-semibold tracking-wider">
                Founder / Owner, FashionVellyBro
              </p>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                As the founder of FashionVellyBro, Shumit Kumar established the brand with a singular mission: to bridge the gap between high-end luxury tailoring and uncompromising urban streetwear culture.
              </p>
              <p>
                With a rigorous eye for architectural lines, premium textiles, and bold minimalist aesthetics, Shumit leads the design and curation of every collection, ensuring that each garment conveys power, elegance, and individuality.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#E50914]/10 border border-[#E50914]/30 rounded-lg text-[#E50914]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase">Uncompromising Quality</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Every stitch and fabric is hand-inspected.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#E50914]/10 border border-[#E50914]/30 rounded-lg text-[#E50914]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase">Global Vision</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Setting international luxury standards.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/60 border border-zinc-800 rounded-xl">
                <Logo size="sm" />
                <span className="text-xs text-zinc-400 font-mono">Established for Elite Wardrobes</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}
