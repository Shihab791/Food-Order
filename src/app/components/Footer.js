'use client';
import React from 'react';

export default function Footer() {
  // ব্যাক টু টপ স্ক্রোল ফাংশন
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#181818] text-gray-400 pt-16 pb-8 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ৪-কলামের মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* কলাম ১: ব্র্যান্ড ইনফো (৪ কলাম চওড়া) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-2xl font-black text-white tracking-tight flex items-center">
              Sar<span className="text-[#E32207]">ab</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              We bring the world's finest flavors together in a fast, friendly, and affordable experience. Every meal crafted with love.
            </p>
            {/* সোশ্যাল আইকন জোন */}
            <div className="flex items-center gap-2 pt-2">
              {['f', 'ig', 'tw', 'yt', 'tk'].map((icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#E32207] hover:text-white text-gray-400 text-xs font-semibold flex items-center justify-center transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* কলাম ২: কুইক লিংকস (২ কলাম চওড়া) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-white font-extrabold text-sm tracking-wide uppercase">Quick Links</h3>
              <div className="w-8 h-[2px] bg-[#E32207] mt-1.5"></div>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {['Home', 'About Us', 'Our Menu', 'Reservation', 'Blog', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                    <span className="text-[#E32207] text-[10px] transform group-hover:translate-x-0.5 transition-transform">❯</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৩: আওয়ার মেনু (২ কলাম চওড়া) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-white font-extrabold text-sm tracking-wide uppercase">Our Menu</h3>
              <div className="w-8 h-[2px] bg-[#E32207] mt-1.5"></div>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {['Burgers', 'Pizza', 'Fried Chicken', 'Wraps & Rolls', 'Pasta', 'Desserts'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                    <span className="text-[#E32207] text-[10px] transform group-hover:translate-x-0.5 transition-transform">❯</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৪: গেট ইন টাচ (৪ কলাম চওড়া) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-white font-extrabold text-sm tracking-wide uppercase">Get In Touch</h3>
              <div className="w-8 h-[2px] bg-[#E32207] mt-1.5"></div>
            </div>
            
            <div className="space-y-4 pt-1">
              {/* অ্যাড্রেস */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E32207] text-xs shrink-0 mt-0.5">
                  📍
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Address</h4>
                  <p className="text-gray-400 text-xs font-medium mt-0.5 leading-snug">Duip abashik,Mirpur-2</p>
                </div>
              </div>

              {/* ফোন */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E32207] text-xs shrink-0 mt-0.5">
                  📞
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Phone</h4>
                  <p className="text-gray-400 text-xs font-medium mt-0.5">01889804917</p>
                </div>
              </div>

              {/* ইমেইল */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E32207] text-xs shrink-0 mt-0.5">
                  ✉️
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Email</h4>
                  <p className="text-gray-400 text-xs font-medium mt-0.5 break-all">mdshihab8007@gmail.com</p>
                </div>
              </div>

              {/* আওয়ার্স */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E32207] text-xs shrink-0 mt-0.5">
                  ⏰
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Hours</h4>
                  <p className="text-gray-400 text-xs font-medium mt-0.5">Wed - Sun: 09 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* বটম বার: কপিরাইট, পলিসি এবং স্ক্রোল বাটন */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          
          {/* কপিরাইট নোটিশ */}
          <div className="text-[11px] sm:text-xs font-normal text-gray-500 text-center md:text-left space-y-1">
            <p>
              © 2026 <span className="text-[#E32207] font-semibold">Sarab Restaurant</span>. All Rights Reserved by <span className="text-emerald-500 font-semibold hover:underline cursor-pointer">Bestwpware</span>. Made with ❤️
            </p>
            <p>
              Distributed by <span className="text-emerald-500 font-semibold hover:underline cursor-pointer">ThemeWagon</span>
            </p>
          </div>

          {/* পলিসি লিংকসমূহ */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          {/* ব্যাক টু টপ বাটন (ছবির মতো একদম নিচে ডান কোণায় ফিক্সড পজিশনড) */}
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:absolute md:bottom-2 md:right-0 bg-[#E32207] hover:bg-[#c91e06] text-white w-9 h-9 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.95] flex items-center justify-center text-xs font-bold z-50 group"
            title="Back to Top"
          >
            <span className="transform group-hover:-translate-y-0.5 transition-transform">▲</span>
          </button>

        </div>

      </div>
    </footer>
  );
}