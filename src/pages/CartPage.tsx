import React, { useState } from 'react';
import { CartItem, ActivePage } from '../types';
import { Trash2, ShoppingBag, ArrowRight, Tag, Check, ShieldCheck } from 'lucide-react';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  setActivePage: (page: ActivePage) => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  discountApplied: boolean;
  setDiscountApplied: (applied: boolean) => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  setActivePage,
  promoCode,
  setPromoCode,
  discountApplied,
  setDiscountApplied
}) => {
  const [promoInput, setPromoInput] = useState(promoCode);

  const subtotal = cart.reduce((sum, item) => sum + (item.product.discountPrice ?? item.product.price) * item.quantity, 0);
  const discount = discountApplied ? subtotal * 0.20 : 0;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'FVB20') {
      setDiscountApplied(true);
      setPromoCode('FVB20');
      alert('Promo code FVB20 applied successfully! 20% discount added.');
    } else {
      alert('Invalid promo code. Try "FVB20" for 20% off.');
    }
  };

  const freeShippingThreshold = 150;
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto text-[#E50914]">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-extrabold text-white font-['Syne']">Your Cart is Empty</h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          You haven't added any luxury streetwear or apparel to your cart yet. Explore our latest drops and find your signature style.
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl transition-colors shadow-lg inline-flex items-center gap-2"
        >
          Start Shopping <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Secure Bag</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
          Shopping Cart ({cart.reduce((a, c) => a + c.quantity, 0)})
        </h1>
      </div>

      {/* Free Shipping Progress */}
      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-white">
            {subtotal >= freeShippingThreshold
              ? '🎉 You qualify for Free Express Shipping!'
              : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for Free Express Shipping`}
          </span>
          <span className="text-zinc-400">{Math.round(shippingProgress)}%</span>
        </div>
        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div className="bg-[#E50914] h-full transition-all duration-500" style={{ width: `${shippingProgress}%` }}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => {
            const price = item.product.discountPrice ?? item.product.price;
            return (
              <div
                key={item.id}
                className="bg-zinc-900/60 border border-zinc-800 p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-32 object-cover rounded-xl bg-zinc-800 shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 space-y-2 text-center sm:text-left w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-white text-base font-['Syne']">{item.product.name}</h3>
                    <span className="text-lg font-extrabold text-white mt-1 sm:mt-0">${(price * item.quantity).toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-zinc-400">
                    <span>Size: <strong className="text-white">{item.selectedSize}</strong></span>
                    <span>Color: <strong className="text-white">{item.selectedColor}</strong></span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity modifier */}
                    <div className="flex items-center bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-zinc-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-3 py-1.5 text-white font-bold text-xs">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-zinc-400 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-zinc-500 hover:text-[#E50914] transition-colors p-2"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-6 sticky top-28">
          <h3 className="font-bold text-white text-base font-['Syne'] uppercase tracking-wider pb-4 border-b border-zinc-800">
            Order Summary
          </h3>

          {/* Promo code form */}
          <form onSubmit={handleApplyPromo} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Promo Code (FVB20)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white uppercase placeholder-zinc-500 focus:outline-none focus:border-[#E50914]"
              />
              <Tag className="absolute right-3 top-3 w-3.5 h-3.5 text-zinc-500" />
            </div>
            <button
              type="submit"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              Apply
            </button>
          </form>

          {discountApplied && (
            <div className="flex items-center justify-between text-xs bg-emerald-500/10 text-emerald-400 p-2.5 rounded-xl border border-emerald-500/20">
              <span className="flex items-center gap-1.5 font-semibold"><Check className="w-4 h-4" /> Promo Code FVB20 Applied</span>
              <span>-20%</span>
            </div>
          )}

          <div className="space-y-3 text-sm pt-2">
            <div className="flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span className="text-white font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            {discountApplied && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Discount (20%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-zinc-400">
              <span>Estimated Shipping</span>
              <span className="text-white font-semibold">
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="pt-4 border-t border-zinc-800 flex justify-between text-base font-extrabold text-white">
              <span>Total</span>
              <span className="text-xl text-[#E50914]">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => setActivePage('checkout')}
            className="w-full bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm py-4 rounded-xl transition-all shadow-[0_10px_25px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 group"
          >
            Proceed to Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs pt-2">
            <ShieldCheck className="w-4 h-4 text-[#E50914]" />
            <span>Encrypted 256-bit Secure Checkout</span>
          </div>
        </div>

      </div>
    </div>
  );
};
