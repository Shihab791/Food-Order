"use client";
import React, { useState, useEffect } from 'react';

export default function OfferSection() {
  // লাইভ কাউন্টডাউন স্টেট
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 28, seconds: 33 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        let s = prev.seconds - 1;
        let m = prev.minutes;
        let h = prev.hours;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <section className="w-full bg-[#1A0301] relative py-16 md:py-24 overflow-hidden font-sans">
      
      {/* ১. নিখুঁত ব্যাকগ্রাউন্ড লাইন্স এফেক্ট (অরিজিনাল স্ট্রাইপস) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(135deg, #fff 10%, transparent 10%, transparent 50%, #fff 50%, #fff 60%, transparent 60%, transparent 100%)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* বাম পাশ - টেক্সট ও টাইমার কন্টেন্ট */}
          <div className="flex-1 text-left space-y-7 lg:max-w-xl">
            
            {/* লিমিটেড অফার ব্যাজ */}
            <div className="inline-flex items-center gap-1.5 bg-[#FFB800] text-[#1A0301] text-[11px] font-black px-3.5 py-1.5 rounded-md uppercase tracking-wider">
              ⚡ Limited Time Offer
            </div>

            {/* মেইন হেডিং (অরিজিনাল টেক্সট ও কালার স্টাইল) */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.12] tracking-tight font-serif">
              Get 30% Off <br />
              Our <span className="text-white">Signature</span> <br />
              <span className="text-[#FFB800]">Burger</span> <span className="text-white">Meal</span>
            </h2>

            {/* ছোট ডেসক্রিপশন */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal opacity-80">
              Don't miss our weekend special - grab our award-winning signature burger combo with loaded fries and a premium shake at an unbeatable price.
            </p>

            {/* কাউন্টডাউন ডিজাইন (অরিজিনাল গ্লাস-বক্স স্টাইল) */}
            <div className="flex items-center gap-4 pt-2">
              
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#000000]/40 border border-white/10 flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl sm:text-3xl font-black tracking-wide leading-none">
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1.5">Hours</span>
                </div>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#000000]/40 border border-white/10 flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl sm:text-3xl font-black tracking-wide leading-none">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1.5">Minutes</span>
                </div>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#000000]/40 border border-white/10 flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl sm:text-3xl font-black tracking-wide leading-none">
                    {formatTime(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1.5">Seconds</span>
                </div>
              </div>

            </div>

            {/* বাটন (গ্লোয়িং শ্যাডো সহ) */}
            <div className="pt-4">
              <button className="flex items-center gap-2 bg-[#E32207] hover:bg-[#c41b04] text-white font-black px-8 py-4 rounded-full shadow-[0_15px_30px_rgba(227,34,7,0.35)] hover:shadow-[0_20px_40px_rgba(227,34,7,0.5)] transition-all duration-300 text-sm tracking-wide">
                🛒 Grab the Deal
              </button>
            </div>

          </div>

          {/* ডান পাশ - ইমেজ এবং ওভারল্যাপড ডিসকাউন্ট প্রাইজ ট্যাগ */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end">
            
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
              {/* মেইন বার্গার মিল ইমেজ */}
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" 
                alt="Signature Burger Combo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* গোল ডিসকাউন্ট প্রাইজ ট্যাগ (হুবহু ছবির মতো অর্ধেক বাইরে ঝুলানো ও গ্লোয়িং) */}
            <div className="absolute top-1/3 -left-6 sm:-left-8 bg-[#E32207] text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(227,34,7,0.8)] border-4 border-[#1A0301] z-20">
              <span className="text-[10px] sm:text-xs line-through text-white/60 font-bold leading-tight">$24.99</span>
              <span className="text-base sm:text-xl font-black tracking-tight leading-tight mt-0.5">$17.49</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}