import React, { useState, useMemo } from 'react';
import { Product, ActivePage } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(400);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
      const currentPrice = p.discountPrice ?? p.price;
      const matchesPrice = currentPrice <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      const priceA = a.discountPrice ?? a.price;
      const priceB = b.discountPrice ?? b.price;
      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0; // featured
    });
  }, [searchQuery, selectedCategory, sortBy, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Catalog Showcase</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
            All Collections & Products
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E50914]"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-zinc-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#E50914]"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest Drops</option>
          </select>
        </div>
      </div>

      {/* Main Grid with Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#E50914]" /> Filters
            </h3>
            {(selectedCategory !== 'All' || searchQuery !== '' || maxPrice < 400) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setMaxPrice(400);
                }}
                className="text-xs text-[#E50914] hover:underline font-semibold"
              >
                Reset All
              </button>
            )}
          </div>

          {/* Categories Filter */}
          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-400 font-bold block mb-3">Categories</label>
            <div className="space-y-1.5">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === 'All' ? 'bg-[#E50914] text-white' : 'text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                All Products ({PRODUCTS.length})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    selectedCategory === cat.name ? 'bg-[#E50914] text-white' : 'text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Max Price</label>
              <span className="text-sm font-extrabold text-white">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="50"
              max="400"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#E50914] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
              <span>$50</span>
              <span>$400+</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between text-xs text-zinc-400 bg-zinc-900/40 px-4 py-3 rounded-xl border border-zinc-800">
            <span>Showing <strong className="text-white">{filteredProducts.length}</strong> showroom pieces</span>
            {selectedCategory !== 'All' && <span>Category: <strong className="text-[#E50914]">{selectedCategory}</strong></span>}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-zinc-900/30 rounded-2xl border border-zinc-800 space-y-3">
              <p className="text-zinc-400 text-sm">No products found matching your criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setMaxPrice(400); }}
                className="bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
