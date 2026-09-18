import React from 'react';
import { ActivePage, Product } from '../types';
import { PRODUCTS, CATEGORIES, REVIEWS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Logo } from '../components/Logo';
import { ArrowRight, Sparkles, Star, Trophy, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  setActivePage: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectProduct,
  onToggleWishlist,
  wishlistIds
}) => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const newArrivals = PRODUCTS.filter(p => p.isNewArrival);

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. Professional Hero Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden border-b border-zinc-800">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#E50914] shadow-md">
              <Sparkles className="w-4 h-4" /> Luxury Streetwear Showcase 2026
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white font-['Syne'] tracking-tight leading-[1.1]">
              Redefining <span className="text-[#E50914] underline decoration-white/20 underline-offset-8">Luxury</span> Tailoring.
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore the exclusive catalog of FashionVellyBro. Founded by Shumit Kumar, we deliver uncompromising urban silhouettes crafted for the elite.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setActivePage('shop')}
                className="w-full sm:w-auto bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-[0_10px_30px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 group"
              >
                Explore Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActivePage('owner')}
                className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-zinc-800 transition-colors flex items-center justify-center"
              >
                Meet The Founder
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-['Syne']">15k+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Global Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-['Syne']">100%</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Luxury Fabrics</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-['Syne']">4.9</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Showroom Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Models Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=900"
                alt="Fashion Model"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="bg-[#E50914] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider w-max mb-2">
                  Signature Showcase Piece
                </span>
                <h3 className="text-white text-xl font-bold font-['Syne']">FVB Executive Crimson Bomber</h3>
                <p className="text-zinc-300 text-xs mt-1">Curated by Shumit Kumar</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Popular Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Curated Style</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              Popular Categories
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            View Collections <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActivePage('shop')}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900 shadow-lg hover:border-[#E50914] transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-[#E50914] text-xs font-bold uppercase tracking-wider">{cat.itemCount} Items</span>
                <h3 className="text-white font-extrabold text-lg font-['Syne'] mt-0.5">{cat.name}</h3>
                <p className="text-zinc-400 text-xs line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Showcase Lineup</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              Featured Collection
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs font-bold text-[#E50914] hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            Browse All Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>
      </section>

      {/* 4. Founder Highlight Section (Shumit Kumar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=700" 
                alt="Shumit Kumar - Founder" 
                className="w-full h-full object-cover filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-zinc-800 rounded-full text-xs font-semibold text-[#E50914] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Founder & Creative Director
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase font-['Syne'] tracking-tight">
                Shumit Kumar
              </h2>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                "FashionVellyBro is built on the belief that clothing should be an extension of your inner dominance and personal narrative. Every piece in our catalog is meticulously crafted to ensure you command any room you step into."
              </p>

              <div className="flex items-center gap-6 pt-2">
                <div>
                  <span className="text-white font-extrabold text-lg block font-['Syne']">Shumit Kumar</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">Founder, FashionVellyBro</span>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={() => setActivePage('owner')}
                    className="bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-colors shadow flex items-center gap-2"
                  >
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New Collection Drops */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Latest Drops</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            View All Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>
      </section>

      {/* 6. Brand Story Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-14 text-center space-y-6">
          <div className="flex justify-center">
            <Logo size="md" />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-['Syne']">
            Experience Unrivaled Streetwear Elegance
          </h3>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
            Visit our flagship boutique or browse our digital showroom to explore seasonal drops, bespoke tailoring consultations, and limited-edition releases.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActivePage('about')}
              className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-colors"
            >
              About Brand
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="bg-[#E50914] hover:bg-[#c40711] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-colors"
            >
              Contact Concierge
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
