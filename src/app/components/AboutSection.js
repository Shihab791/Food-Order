import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* বাম পাশ - ইমেজেস এবং এক্সপেরিয়েন্স ব্যাজ */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-start">
            
            {/* মেইন রেস্টুরেন্ট ইন্টেরিয়র ইমেজ */}
            <div className="relative w-[85%] aspect-[4/3] sm:w-[420px] sm:h-[340px] md:w-[460px] md:h-[370px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" 
                alt="Sarab Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* লাল রঙের এক্সপেরিয়েন্স ব্যাজ (ওভারল্যাপড অন লেফট) */}
            <div className="absolute top-8 left-0 lg:-left-4 bg-[#E32207] text-white rounded-2xl p-4 w-28 sm:w-32 shadow-[0_15px_30px_rgba(227,34,7,0.3)] z-20 flex flex-col items-center text-center justify-center aspect-square">
              <span className="text-2xl sm:text-3xl font-black block">12+</span>
              <span className="text-[10px] sm:text-xs font-medium tracking-wide uppercase mt-1 opacity-90 leading-tight">
                Years of Excellence
              </span>
            </div>

            {/* ছোট ফুড ওভারলে ইমেজ (বটম রাইট) */}
            <div className="absolute -bottom-8 right-4 sm:right-8 lg:-right-4 w-[45%] sm:w-[180px] md:w-[200px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] z-20">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop" 
                alt="Delicious Food Serving" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* ডান পাশ - কন্টেন্ট এবং ফিচারস লিস্ট */}
          <div className="flex-1 space-y-6 lg:pl-6 text-left">
            
            {/* সাব-হেডিং */}
            <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl">
              Our Story
            </h4>
            
            {/* মেইন হেডিং */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E1E1E] leading-[1.15] tracking-tight">
              We Invite You to Visit <br />
              Our <span className="text-[#E32207]">Food Restaurant</span>
            </h2>

            {/* ডেসক্রিপশন */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              Founded in 2012, Sarab began as a small corner joint with a big dream – to serve food that brings people together. Today we're proud to serve thousands of happy customers every week with the same passion that started it all.
            </p>

            {/* ফিচারস লিস্ট */}
            <div className="space-y-4 pt-2">
              
              {/* ফিচার ১ */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-lg shadow-sm">
                  🍃
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E] text-base">100% Fresh Ingredients</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                    We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.
                  </p>
                </div>
              </div>

              {/* ফিচার ২ */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-lg shadow-sm">
                  🏅
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E] text-base">Award-Winning Recipes</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                    Our signature recipes have won national culinary awards 5 years in a row.
                  </p>
                </div>
              </div>

              {/* ফিচার ৩ */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-lg shadow-sm">
                  🚚
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E] text-base">Lightning-Fast Delivery</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                    Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.
                  </p>
                </div>
              </div>

            </div>

            {/* সিটিএ বাটন */}
            <div className="pt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-[#E32207] hover:bg-[#b51b05] text-white font-bold px-7 py-3.5 rounded-full shadow-[0_10px_20px_rgba(227,34,7,0.2)] hover:shadow-lg transition-all duration-300 text-sm transform hover:-translate-y-0.5"
              >
                📖 View Full Menu
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}