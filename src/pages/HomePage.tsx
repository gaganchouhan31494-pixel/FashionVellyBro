import React from 'react';
import { ActivePage, Product } from '../types';
import { PRODUCTS, CATEGORIES, REVIEWS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  setActivePage: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const newArrivals = PRODUCTS.filter(p => p.isNewArrival);
  const specialOffers = PRODUCTS.filter(p => p.isSpecialOffer);

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Professional Hero Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden border-b border-zinc-800">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#E50914] shadow-md">
              <Sparkles className="w-4 h-4" /> Fall / Winter 2026 Collection
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white font-['Syne'] tracking-tight leading-[1.1]">
              Redefining <span className="text-[#E50914] underline decoration-white/20 underline-offset-8">Luxury</span> Streetwear.
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover uncompromising craftsmanship, bold crimson aesthetics, and avant-garde silhouettes designed for the modern icon.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setActivePage('shop')}
                className="w-full sm:w-auto bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_10px_30px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 group"
              >
                Shop Now Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActivePage('categories')}
                className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm px-8 py-4 rounded-xl border border-zinc-800 transition-colors flex items-center justify-center"
              >
                Explore Categories
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
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Premium Cotton</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-['Syne']">4.9</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Customer Rating</p>
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
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="bg-[#E50914] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider w-max mb-2">
                  Featured Look #01
                </span>
                <h3 className="text-white text-xl font-bold font-['Syne']">FVB Signature Crimson Bomber</h3>
                <p className="text-zinc-300 text-xs mt-1">$229.00 &bull; Limited Edition</p>
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
            onClick={() => setActivePage('categories')}
            className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            View All ({CATEGORIES.length}) <ArrowRight className="w-4 h-4" />
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
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
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

      {/* 3. Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Handpicked Selection</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              Featured Products
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            View All Shop <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>
      </section>

      {/* 4. Special Offers Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-[#121214] border-2 border-[#E50914]/40 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="bg-[#E50914] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-lg uppercase tracking-wider shadow">
              Limited Time Season Sale
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-white font-['Syne'] tracking-tight">
              Get 20% Off Your First Order With Code <span className="text-[#E50914]">FVB20</span>
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Experience uncompromising luxury streetwear. Apply code at checkout to enjoy exclusive savings across our entire catalogue.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActivePage('shop')}
                className="bg-white hover:bg-zinc-200 text-black font-extrabold text-sm px-8 py-3.5 rounded-xl transition-colors shadow-lg"
              >
                Shop Special Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Just Dropped</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            Explore All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>
      </section>

      {/* 6. Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-zinc-800">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Client Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
            Trusted by Style Icons Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                  <p className="text-xs text-zinc-500">{rev.productName}</p>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full font-semibold">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
