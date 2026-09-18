import React, { useState } from 'react';
import { Order, ActivePage } from '../types';
import { Package, Truck, CheckCircle2, Clock, ArrowRight, X } from 'lucide-react';

interface OrderHistoryPageProps {
  orders: Order[];
  setActivePage: (page: ActivePage) => void;
}

export const OrderHistoryPage: React.FC<OrderHistoryPageProps> = ({ orders, setActivePage }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto text-[#E50914]">
          <Package className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-extrabold text-white font-['Syne']">No Order History Yet</h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          You haven't placed any orders with FashionVellyBro yet. Once you complete a purchase, your tracking and delivery history will appear here.
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl transition-colors shadow-lg inline-flex items-center gap-2"
        >
          Explore Collections <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">Purchases</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
          Order History & Tracking
        </h1>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-black text-white text-base font-['Syne']">{order.id}</span>
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                  order.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  order.status === 'In Transit' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                  'bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/30'
                }`}>
                  {order.status}
                </span>
              </div>
              <p className="text-xs text-zinc-400">Placed on {order.date} &bull; Tracking: <strong className="text-white">{order.trackingNumber}</strong></p>
              <div className="flex items-center gap-2 pt-1">
                {order.items.slice(0, 3).map((it, i) => (
                  <img key={i} src={it.product.image} alt="" className="w-10 h-12 object-cover rounded-lg bg-black border border-zinc-800" referrerPolicy="no-referrer" />
                ))}
                {order.items.length > 3 && (
                  <span className="text-xs text-zinc-500 font-bold">+{order.items.length - 3} more</span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800">
              <div className="text-left md:text-right">
                <span className="text-xs text-zinc-400 block">Total Amount</span>
                <span className="text-lg font-extrabold text-white">${order.total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setSelectedOrder(order)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shadow"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-[#E50914] text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest">Order Receipt</span>
              <h3 className="text-2xl font-black text-white font-['Syne']">{selectedOrder.id}</h3>
              <p className="text-xs text-zinc-400 mt-1">Placed on {selectedOrder.date} &bull; Status: <strong className="text-white">{selectedOrder.status}</strong></p>
            </div>

            <div className="bg-black border border-zinc-800 p-4 rounded-2xl space-y-2 text-xs">
              <p className="text-zinc-400 font-bold uppercase tracking-wider">Shipping Destination</p>
              <p className="text-white font-semibold">{selectedOrder.shippingAddress.fullName}</p>
              <p className="text-zinc-300">{selectedOrder.shippingAddress.addressLine}, {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.postalCode}</p>
              <p className="text-zinc-400 pt-1">Payment Method: <strong className="text-white">{selectedOrder.paymentMethod}</strong></p>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Ordered Items</p>
              {selectedOrder.items.map((item) => {
                const price = item.product.discountPrice ?? item.product.price;
                return (
                  <div key={item.id} className="flex items-center justify-between bg-black border border-zinc-800 p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <img src={item.product.image} alt="" className="w-10 h-12 object-cover rounded-lg bg-zinc-800" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-bold text-white text-xs">{item.product.name}</h4>
                        <p className="text-[11px] text-zinc-400">Qty: {item.quantity} &bull; Size: {item.selectedSize}</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-white text-xs">${(price * item.quantity).toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="font-bold text-white text-sm">Total Paid</span>
              <span className="text-xl font-extrabold text-[#E50914]">${selectedOrder.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
