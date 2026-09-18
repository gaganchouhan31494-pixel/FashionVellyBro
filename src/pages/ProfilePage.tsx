import React, { useState } from 'react';
import { UserProfile, ActivePage } from '../types';
import { User, Mail, Phone, MapPin, Trophy, Shield, LogOut, Edit3, Check } from 'lucide-react';

interface ProfilePageProps {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  setActivePage: (page: ActivePage) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, setUser, setActivePage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(prev => ({ ...prev, name, phone }));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest block mb-1">My Account</span>
          <h1 className="text-3xl font-extrabold text-white font-['Syne'] tracking-tight">
            Client Profile & VIP Status
          </h1>
        </div>

        <button
          onClick={() => {
            setActivePage('auth');
          }}
          className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-4 py-2.5 rounded-xl border border-zinc-800 text-xs font-bold transition-colors w-max"
        >
          <LogOut className="w-4 h-4 text-[#E50914]" /> Switch Account
        </button>
      </div>

      {/* User Header Card */}
      <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 shadow-xl">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-2xl object-cover border-2 border-[#E50914]"
          referrerPolicy="no-referrer"
        />
        <div className="flex-1 text-center sm:text-left space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h2 className="text-2xl font-black text-white font-['Syne']">{user.name}</h2>
            <span className="bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/30 text-xs font-extrabold px-3 py-1 rounded-full w-max mx-auto sm:mx-0">
              {user.tier}
            </span>
          </div>
          <p className="text-xs text-zinc-400">{user.email}</p>
          <div className="pt-2 flex items-center justify-center sm:justify-start gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1.5"><Trophy className="w-4 h-4 text-amber-400" /> {user.points} FVB Reward Points</span>
          </div>
        </div>
      </div>

      {/* Details & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Profile Info Form */}
        <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <h3 className="font-bold text-white text-base font-['Syne']">Personal Information</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs text-[#E50914] hover:underline font-semibold flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#E50914] hover:bg-[#c40711] text-white px-6 py-3 rounded-xl text-xs font-bold transition-colors shadow"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2"><User className="w-4 h-4 text-zinc-500" /> Full Name</span>
                <span className="text-white font-semibold">{user.name}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2"><Mail className="w-4 h-4 text-zinc-500" /> Email</span>
                <span className="text-white font-semibold">{user.email}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-zinc-400 flex items-center gap-2"><Phone className="w-4 h-4 text-zinc-500" /> Phone</span>
                <span className="text-white font-semibold">{user.phone}</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Links Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl space-y-4">
          <h3 className="font-bold text-white text-base font-['Syne'] pb-2 border-b border-zinc-800">Quick Actions</h3>
          <button
            onClick={() => setActivePage('orders')}
            className="w-full text-left bg-black hover:bg-zinc-800 border border-zinc-800 p-3.5 rounded-xl text-xs font-bold text-white transition-colors flex items-center justify-between"
          >
            <span>View Order History</span>
            <span className="text-[#E50914]">&rarr;</span>
          </button>
          <button
            onClick={() => setActivePage('shop')}
            className="w-full text-left bg-black hover:bg-zinc-800 border border-zinc-800 p-3.5 rounded-xl text-xs font-bold text-white transition-colors flex items-center justify-between"
          >
            <span>Browse New Drops</span>
            <span className="text-[#E50914]">&rarr;</span>
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="w-full text-left bg-black hover:bg-zinc-800 border border-zinc-800 p-3.5 rounded-xl text-xs font-bold text-white transition-colors flex items-center justify-between"
          >
            <span>Contact Fashion Concierge</span>
            <span className="text-[#E50914]">&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
};
