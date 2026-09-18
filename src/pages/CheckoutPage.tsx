import React, { useState } from 'react';
import { CartItem, ActivePage, Order } from '../types';
import { ShieldCheck, CheckCircle2, CreditCard, Truck, ArrowRight, Lock } from 'lucide-react';

interface CheckoutPageProps {
  cart: CartItem[];
  setActivePage: (page: ActivePage) => void;
  onPlaceOrder: (order: Order) => void;
  discountApplied: boolean;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cart,
  setActivePage,
  onPlaceOrder,
  discountApplied
}) => {
  const [formData, setFormData] = useState({
    fullName: 'Alex Vance',
    email: 'alex.vance@fashionvellybro.com',
    phone: '+1 (555) 382-9102',
    addressLine: '742 Evergreen Terrace, Suite 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'United States',
    paymentMethod: 'Credit Card'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + (item.product.discountPrice ?? item.product.price) * item.quantity, 0);
  const discount = discountApplied ? subtotal * 0.20 : 0;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const total = subtotal - discount + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = 'FVB-' + Math.floor(100000 + Math.random() * 900000);
    setPlacedOrderId(orderId);

    const newOrder: Order = {
      id: orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [...cart],
      total,
      status: 'Processing',
      shippingAddress: {
        id: 'addr-1',
        fullName: formData.fullName,
        addressLine: formData.addressLine,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
        isDefault: true
      },
      paymentMethod: formData.paymentMethod,
      trackingNumber: 'TRK-' + Math.floor(100000000 + Math.random() * 900000000)
    };

    onPlaceOrder(newOrder);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block">Order Confirmed</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
          Thank You For Your Order!
        </h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
          Your order <strong className="text-white">{placedOrderId}</strong> has been successfully placed and is now being handcrafted & prepared for express dispatch.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl max-w-md mx-auto text-left space-y-3">
          <div className="flex justify-between text-xs text-zinc-400">
            <span>Order Number:</span>
            <span className="text-white font-bold">{placedOrderId}</span>
          </div>
          <div className="flex justify-between text-xs text-zinc-400">
            <span>Shipping To:</span>
            <span className="text-white font-bold">{formData.fullName}, {formData.city}</span>
          </div>
          <div className="flex justify-between text-xs text-zinc-400">
            <span>Estimated Delivery:</span>
            <span className="text-emerald-400 font-bold">2-3 Business Days</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button
            onClick={() => setActivePage('orders')}
            className="bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl transition-colors shadow-lg"
          >
            View Order History
          </button>
          <button
            onClick={() => setActivePage('home')}
            className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-zinc-800 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Secure Checkout</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
          Complete Your Order
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Shipping & Payment Form */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Shipping Address Section */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-bold text-white font-['Syne'] flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#E50914]" /> Shipping Address
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.addressLine}
                  onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">State / Province</label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Postal Code</label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Country</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-bold text-white font-['Syne'] flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#E50914]" /> Payment Method
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Credit Card', 'PayPal', 'Cash on Delivery'].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: method })}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    formData.paymentMethod === method
                      ? 'bg-[#E50914]/10 border-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                      : 'bg-black border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <p className="font-bold text-sm text-white">{method}</p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {method === 'Credit Card' ? 'Visa, Mastercard, Amex' : method === 'PayPal' ? 'Fast online checkout' : 'Pay when you receive'}
                  </p>
                </button>
              ))}
            </div>

            {formData.paymentMethod === 'Credit Card' && (
              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="4532 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 8920"
                    defaultValue="4532 8820 9102 3821"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      defaultValue="08/28"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">CVV Security</label>
                    <input
                      type="password"
                      placeholder="3 digits"
                      defaultValue="921"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Review & Place Order */}
        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6 sticky top-28">
          <h3 className="font-bold text-white text-base font-['Syne'] uppercase tracking-wider pb-4 border-b border-zinc-800">
            Order Summary ({cart.reduce((a, c) => a + c.quantity, 0)} items)
          </h3>

          <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
            {cart.map((item) => {
              const price = item.product.discountPrice ?? item.product.price;
              return (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.product.image} alt="" className="w-12 h-16 object-cover rounded-lg bg-black shrink-0" referrerPolicy="no-referrer" />
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-xs line-clamp-1">{item.product.name}</h4>
                    <p className="text-[11px] text-zinc-400">Qty: {item.quantity} &bull; {item.selectedSize}</p>
                  </div>
                  <span className="font-extrabold text-white text-xs">${(price * item.quantity).toFixed(2)}</span>
                </div>
              );
            })}
          </div>

          <div className="space-y-3 text-sm pt-4 border-t border-zinc-800">
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
              <span>Express Shipping</span>
              <span className="text-white font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="pt-4 border-t border-zinc-800 flex justify-between text-base font-extrabold text-white">
              <span>Total Due</span>
              <span className="text-2xl text-[#E50914]">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm py-4 rounded-xl transition-all shadow-[0_10px_25px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" /> Place Secure Order ($ {total.toFixed(2)})
          </button>

          <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs pt-2">
            <ShieldCheck className="w-4 h-4 text-[#E50914]" />
            <span>Buyer Protection & Money-Back Guarantee</span>
          </div>
        </div>

      </form>
    </div>
  );
};
