'use client';
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="w-full relative bg-[#D31A03] py-10 md:py-12 overflow-hidden font-sans">
      
      {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক/প্যাটার্ন ইফেক্ট */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* max-w-4xl করে পুরো সেকশনের কন্টেন্ট উইডথ ছবির মতো কমানো হয়েছে */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-2">
          
          {/* ছোট টপ হেডিং */}
          <h4 className="text-white/95 font-serif italic text-base md:text-lg font-medium tracking-wide">
            Stay Connected
          </h4>
          
          {/* মেইন টাইটেল */}
          <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Subscribe & Get Exclusive <span className="text-[#FFB822]">Deals</span>
          </h2>
          
          {/* সাব-টাইটেল বা অফার টেক্সট */}
          <p className="text-white/80 text-[11px] sm:text-xs font-normal tracking-wide max-w-xs sm:max-w-md mx-auto">
            Get 15% off your first order plus early access to new menu items
          </p>

          {/* সাবস্ক্রিপশন ফর্ম - max-w-md করে ইনপুট ফিল্ডের সাইজ ছোট করা হয়েছে */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full max-w-md mx-auto pt-3 flex flex-col sm:flex-row items-center gap-2 px-4"
          >
            {/* ইমেইল ইনপুট ফিল্ড */}
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..." 
              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs px-4 py-2.5 rounded-full focus:outline-none focus:ring-1 focus:ring-[#FFB822] shadow-inner"
              required
            />
            
            {/* সাবস্ক্রাইব বাটন */}
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#FFB822] hover:bg-[#e0a11b] text-[#1E1E1E] font-extrabold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.98] shadow-md flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>📬</span> Subscribe
            </button>
          </form>

          {/* নো-স্প্যাম মেসেজ */}
          <p className="text-white/40 text-[10px] font-normal pt-1 flex items-center justify-center gap-1">
            🔒 No spam, unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
}