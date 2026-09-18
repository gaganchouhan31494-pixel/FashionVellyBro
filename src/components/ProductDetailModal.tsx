import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, qty: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!isOpen || !product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#121214] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-[#E50914] text-white rounded-full transition-colors backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Gallery */}
          <div className="w-full md:w-1/2 p-6 bg-black flex flex-col justify-between">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {product.discountPercent && (
                <span className="absolute top-4 left-4 bg-[#E50914] text-white text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider shadow">
                  -{product.discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-16 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === img ? 'border-[#E50914] shadow-[0_0_10px_rgba(229,9,20,0.5)]' : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold">{product.category}</span>
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-zinc-500 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne'] tracking-tight mb-3">
                {product.name}
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-black text-white">
                  ${(product.discountPrice ?? product.price).toFixed(2)}
                </span>
                {product.discountPrice && (
                  <span className="text-base text-zinc-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                <span className="ml-auto bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full">
                  In Stock ({product.stock} left)
                </span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-5">
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
                    Color: <span className="text-white font-semibold">{selectedColor}</span>
                  </label>
                  <div className="flex gap-3">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === c.name ? 'border-[#E50914] scale-110 shadow-[0_0_10px_rgba(229,9,20,0.5)]' : 'border-zinc-700'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <Check className={`w-3.5 h-3.5 ${c.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                      Select Size
                    </label>
                    <button className="text-xs text-[#E50914] hover:underline font-semibold">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          selectedSize === sz
                            ? 'bg-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.4)] border border-[#E50914]'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-600'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Quantity</span>
                <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-lg ${
                    addedAnimation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#E50914] hover:bg-[#c40711] text-white shadow-[0_6px_20px_rgba(229,9,20,0.4)]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-5 h-5" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" /> Add to Cart
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition-colors flex items-center justify-center ${
                    isWishlisted
                      ? 'bg-[#E50914] border-[#E50914] text-white'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Perks */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-zinc-400 text-center">
                <div className="flex flex-col items-center gap-1 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
                  <Truck className="w-4 h-4 text-[#E50914]" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-1 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
                  <RotateCcw className="w-4 h-4 text-[#E50914]" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-1 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-[#E50914]" />
                  <span>100% Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
