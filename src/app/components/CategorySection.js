"use client";
import React, { useState } from 'react';

export default function CategorySection() {
  // ক্যাটাগরি ডাটা অবজেক্ট
  const categories = [
    { id: 1, name: 'All Items', items: '99 items', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=150&auto=format&fit=crop' },
    { id: 2, name: 'Burgers', items: '24 items', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=150&auto=format&fit=crop' },
    { id: 3, name: 'Pizza', items: '18 items', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=150&auto=format&fit=crop' },
    { id: 4, name: 'Fried Chicken', items: '15 items', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=150&auto=format&fit=crop' },
    { id: 5, name: 'Wraps', items: '12 items', img: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=150&auto=format&fit=crop' },
    { id: 6, name: 'Desserts', items: '20 items', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=150&auto=format&fit=crop' },
  ];

  // একটি স্টেট দিয়ে অ্যাক্টিভ কার্ড ট্র্যাক করা (ডিফল্ট: All Items)
  const [activeCategory, setActiveCategory] = useState(1);

  // ওপরের লাল ব্যানারের লেখার লিস্ট
  const marqueeItems = [
    "Gourmet Burgers", "Artisan Pizzas", "Fresh Wraps & Rolls", 
    "Loaded Fries", "Ice Cream Shakes", "Grilled Sandwiches", "Crispy Fried Chicken"
  ];

  return (
    <section className="w-full bg-[#FCF8F3] pb-16 pt-0 font-sans overflow-hidden">
      
      {/* ১. টপ ইনফিনিটি মার্কি ব্যানার */}
      <div className="w-full bg-[#E32207] py-3 text-white overflow-hidden relative flex items-center">
        {/* Tailwind-এর animate-marquee ব্যবহার করার জন্য বা সিম্পল অ্যানিমেশনের জন্য flex */}
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-12 text-sm font-medium tracking-wide uppercase">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full inline-block opacity-80"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ২. হেডার সেকশন */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-16 mb-12">
        <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-2">
          What We Offer
        </h4>
        <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
          Browse by <span className="text-[#E32207]">Category</span>
        </h2>
        {/* ছোট আন্ডারলাইন */}
        <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        
        <p className="text-gray-500 max-w-md mx-auto mt-4 text-sm md:text-base leading-relaxed">
          From sizzling burgers to exotic world cuisines - find your favourite in our menu
        </p>
      </div>

      {/* ৩. ক্যাটাগরি কার্ডস গ্রিড (Responsive) */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`cursor-pointer rounded-2xl bg-white p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1
                  ${isActive 
                    ? 'border-2 border-[#E32207] shadow-[0_15px_30px_rgba(227,34,7,0.15)] bg-white' 
                    : 'border-2 border-transparent shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:shadow-md'
                  }
                `}
              >
                {/* ইমেজ কন্টেইনার (গোল বৃত্ত) */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center shadow-inner">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* টেক্সট */}
                <h3 className="font-bold text-[#1E1E1E] text-base mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {category.items}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}