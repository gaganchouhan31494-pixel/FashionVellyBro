import React, { useState } from 'react';
import { ActivePage, UserProfile } from '../types';
import { Logo } from '../components/Logo';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthPageProps {
  setActivePage: (page: ActivePage) => void;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export const AuthPage: React.FC<AuthPageProps> = ({ setActivePage, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('alex.vance@fashionvellybro.com');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('Alex Vance');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: name || 'Alex Vance',
      email: email || 'alex.vance@fashionvellybro.com',
      phone: '+1 (555) 382-9102',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      tier: 'VIP Elite Member',
      points: 1250
    });
    alert(isLogin ? 'Successfully logged in!' : 'Account created successfully!');
    setActivePage('profile');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo size="sm" />
          </div>
          <h2 className="text-2xl font-black text-white font-['Syne']">
            {isLogin ? 'Welcome Back' : 'Create FVB Account'}
          </h2>
          <p className="text-xs text-zinc-400">
            {isLogin ? 'Sign in to access your wishlist, orders & VIP rewards' : 'Join the elite fashion circle for exclusive drops'}
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 bg-black p-1.5 rounded-2xl border border-zinc-800">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
              isLogin ? 'bg-[#E50914] text-white shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
              !isLogin ? 'bg-[#E50914] text-white shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-[#E50914]"
                  placeholder="Alex Vance"
                />
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5">Email Address</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-[#E50914]"
                placeholder="name@example.com"
              />
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-[#E50914]"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              />
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E50914] hover:bg-[#c40711] text-white font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_8px_20px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 mt-2"
          >
            {isLogin ? 'Sign In to Account' : 'Create Account'} <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-zinc-800 text-center">
          <button
            onClick={() => {
              setUser({
                name: 'Guest Shopper',
                email: 'guest@fashionvellybro.com',
                phone: '+1 (555) 000-0000',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300',
                tier: 'Member',
                points: 250
              });
              setActivePage('profile');
            }}
            className="text-xs text-zinc-400 hover:text-white underline font-semibold"
          >
            Continue as Guest / Demo Mode
          </button>
        </div>

      </div>
    </div>
  );
};
