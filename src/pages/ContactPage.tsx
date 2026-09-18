import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onOpenAiStylist: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenAiStylist }) => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the delivery time for FashionVellyBro orders?',
      a: 'We dispatch all orders via express international couriers within 24 hours. Standard delivery takes 2-4 business days worldwide.'
    },
    {
      q: 'What is your return and exchange policy?',
      a: 'We offer hassle-free 30-day returns and exchanges for all unworn items in their original packaging with tags attached.'
    },
    {
      q: 'How do I care for my heavyweight FVB hoodies and bomber jackets?',
      a: 'We recommend machine washing cold on a gentle cycle and hanging dry to preserve the premium fleece density and custom hardware.'
    },
    {
      q: 'Can I track my shipment in real-time?',
      a: 'Yes! Once your order is dispatched, you will receive a tracking number via email and SMS that you can review in your Order History.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-12 space-y-12">
      
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest">Support & Concierge</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
          Get in Touch With Us
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Our fashion concierge and customer support team are available 24/7 to assist with styling, orders, and sizing inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info & AI Stylist Trigger */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white font-['Syne']">Client Services</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E50914]/10 text-[#E50914] rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Email Support</p>
                  <p className="text-white font-semibold mt-0.5">concierge@fashionvellybro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E50914]/10 text-[#E50914] rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Global Hotline</p>
                  <p className="text-white font-semibold mt-0.5">+1 (800) 555-FVBRO</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E50914]/10 text-[#E50914] rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Flagship Atelier</p>
                  <p className="text-white font-semibold mt-0.5">450 Fashion Ave, New York, NY 10018</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800">
              <button
                onClick={onOpenAiStylist}
                className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white border border-[#E50914]/50 py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#E50914]" /> Launch VellyBro AI Stylist
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white font-['Syne']">Message Sent Successfully!</h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Thank you for reaching out to FashionVellyBro. A client advisor will respond to your inquiry within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#E50914] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-white font-['Syne']">Send Us a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Vance"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Order Inquiry / Sizing Help"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you today?"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm py-4 rounded-xl transition-all shadow-[0_10px_25px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>

      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto pt-10 border-t border-zinc-800 space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-white font-['Syne']">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-white text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#E50914] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
