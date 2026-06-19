import React from 'react';

export default function ShowcaseSection() {
  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-12">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            Food Showcase
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Let's See Our <span className="text-[#E32207]">Fast Food</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* মেইন গ্রিড লেআউট (ছবিতে যেমন আছে হুবহু ৩-কলাম Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* ১. বাম পাশের বড় কলাম - ফুল হাইট বার্গার ইমেজ */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm h-[320px] md:h-[450px] lg:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" 
              alt="Classic Burger" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* হালকা ডার্ক ওভারলে (হোভার এফেক্ট) */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
          </div>

          {/* ২. মাঝখানের কলাম - দুটি সমান ছোট ইমেজ (পিজ্জা ও ডোনাট) */}
          <div className="flex flex-col gap-5 h-[450px] lg:h-[500px]">
            {/* ওপরের পিজ্জা ইমেজ */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" 
                alt="Delicious Pizza" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
            </div>
            
            {/* নিচের ডোনাট ইমেজ */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop" 
                alt="Sweet Donuts" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
            </div>
          </div>

          {/* ৩. ডান পাশের কলাম - দুটি সমান ছোট ইমেজ (চিকেন ও প্ল্যাটার) */}
          <div className="flex flex-col gap-5 h-[450px] lg:h-[500px] md:col-span-2 lg:col-span-1">
            {/* ওপরের ক্রিসপি চিকেন বার্গার */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop" 
                alt="Nashville Hot Chicken Burger" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
            </div>
            
            {/* নিচের ফুড প্ল্যাটার */}
            <div className="flex-1 relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop" 
                alt="Healthy Food Platter" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}