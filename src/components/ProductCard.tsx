import React from 'react';
import { Product } from '../types';
import { Star, Heart, ShoppingBag, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#121214] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-[#E50914]/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)] flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onSelect(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.discountPercent && (
            <span className="bg-[#E50914] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
              -{product.discountPercent}%
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-white text-black text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isWishlisted
              ? 'bg-[#E50914] text-white shadow-[0_0_12px_rgba(229,9,20,0.6)]'
              : 'bg-black/50 text-white hover:bg-white hover:text-black'
          }`}
          title="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-150 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="flex-1 bg-white/90 hover:bg-white text-black font-semibold text-xs py-2.5 px-3 rounded-xl backdrop-blur-sm transition-colors flex items-center justify-center gap-1.5 shadow"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="uppercase tracking-wider font-medium">{product.category}</span>
            <div className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
              <span className="text-zinc-500">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 
            onClick={() => onSelect(product)}
            className="font-bold text-white text-sm sm:text-base line-clamp-1 hover:text-[#E50914] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-extrabold text-white">
              ${(product.discountPrice ?? product.price).toFixed(2)}
            </span>
            {product.discountPrice && (
              <span className="text-xs text-zinc-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product, product.sizes[0], product.colors[0]?.name || 'Default')}
            className="bg-[#E50914] hover:bg-[#c40711] text-white p-2.5 rounded-xl transition-colors shadow-[0_4px_12px_rgba(229,9,20,0.3)] flex items-center justify-center"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
