import React from 'react';
import { ActivePage, Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface CategoriesPageProps {
  setActivePage: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Collections</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight mb-4">
          Explore Categories
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          From heavy-duty luxury outerwear to signature streetwear and formal tailoring, find your aesthetic across our curated categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setActivePage('shop')}
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900 shadow-xl hover:border-[#E50914] transition-all duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
              <span className="bg-[#E50914] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider w-max mb-3">
                {cat.itemCount} Items Available
              </span>
              <h3 className="text-white font-extrabold text-2xl font-['Syne'] mb-2">{cat.name}</h3>
              <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 mb-4">
                {cat.description}
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider group-hover:text-[#E50914] transition-colors">
                <span>Browse Category</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
