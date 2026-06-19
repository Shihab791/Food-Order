import React from 'react';

export default function OpeningHours() {
  return (
    <section className="w-full bg-[#14532D] relative py-16 md:py-20 overflow-hidden font-sans">
      
      {/* ব্যাকগ্রাউন্ডের হালকা তির্যক লাইন (স্ট্রাইপস) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(135deg, #fff 10%, transparent 10%, transparent 50%, #fff 50%, #fff 60%, transparent 60%, transparent 100%)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-10 md:mb-12">
          <h4 className="text-amber-400 font-serif italic text-lg md:text-xl mb-1">
            Opening Hours
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            We're Open <span className="text-amber-400">For You</span>
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ৩টি কার্ডের গ্রিড লেআউট - max-w-5xl করে চওড়া কমানো হয়েছে এবং গ্যাপ ৬ করা হয়েছে */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* ১. বাম পাশের কার্ড - কাজের সময়সূচী (Glassmorphism) */}
          <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-3.5 shadow-xl">
            <div className="space-y-3">
              
              {/* সোম - মঙ্গল */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                  📅 Monday - Tuesday
                </span>
                <span className="text-red-300 text-[11px] font-bold bg-red-500/20 px-2 py-0.5 rounded-md">
                  • Closed
                </span>
              </div>

              {/* বুধ - বৃহস্পতি */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                  📅 Wednesday - Thursday
                </span>
                <span className="text-emerald-300 text-[11px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded-md">
                  • 09:00 AM - 10:00 PM
                </span>
              </div>

              {/* শুক্র */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                  📅 Friday
                </span>
                <span className="text-emerald-300 text-[11px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded-md">
                  • 09:00 AM - 11:00 PM
                </span>
              </div>

              {/* শনি */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                  📅 Saturday
                </span>
                <span className="text-emerald-300 text-[11px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded-md">
                  • 10:00 AM - 11:30 PM
                </span>
              </div>

              {/* রবি */}
              <div className="flex justify-between items-center">
                <span className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                  📅 Sunday
                </span>
                <span className="text-emerald-300 text-[11px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded-md">
                  • 11:00 AM - 09:00 PM
                </span>
              </div>

            </div>
          </div>

          {/* ২. মাঝখানের কার্ড - অর্ডার অনলাইন (হাইলাইটেড রেড গ্লোয়িং কার্ড) */}
          <div className="bg-[#E32207] rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center text-center space-y-4 shadow-[0_20px_50px_rgba(227,34,7,0.35)] relative overflow-hidden group border border-white/10 transform hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -inset-10 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
            
            <div className="text-white text-3xl animate-bounce duration-1000">
              🚚
            </div>

            <div className="relative z-10 space-y-1.5">
              <h3 className="text-white font-black text-xl md:text-2xl tracking-tight">
                Order Online
              </h3>
              <p className="text-white/85 text-xs font-medium max-w-[200px] mx-auto leading-relaxed">
                Get hot food delivered in 25 minutes
              </p>
            </div>

            <button className="relative z-10 bg-white hover:bg-gray-100 text-[#E32207] font-black text-[11px] uppercase tracking-wider px-7 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95">
              Order Now ?
            </button>
          </div>

          {/* ৩. ডান পাশের কার্ড - কন্টাক্ট ইনফো (Glassmorphism) */}
          <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-center space-y-4 shadow-xl">
            
            <h4 className="text-amber-400 font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2.5">
              📍 Find Us
            </h4>

            <div className="space-y-3.5">
              {/* অ্যাড্রেস */}
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-base mt-0.5">🏢</span>
                <div>
                  <h5 className="text-white/40 text-[9px] font-bold uppercase tracking-wider">Address</h5>
                  <p className="text-white font-bold text-xs sm:text-sm tracking-wide mt-0.5">42 Flavor Street, NY</p>
                </div>
              </div>

              {/* ফোন */}
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-base mt-0.5">📞</span>
                <div>
                  <h5 className="text-white/40 text-[9px] font-bold uppercase tracking-wider">Phone</h5>
                  <p className="text-white font-bold text-xs sm:text-sm tracking-wide mt-0.5">+1 (800) 123-4567</p>
                </div>
              </div>

              {/* ইমেইল */}
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-base mt-0.5">✉️</span>
                <div>
                  <h5 className="text-white/40 text-[9px] font-bold uppercase tracking-wider">Email</h5>
                  <p className="text-white font-bold text-xs sm:text-sm tracking-wide mt-0.5 break-all">hello@sarabfood.com</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}