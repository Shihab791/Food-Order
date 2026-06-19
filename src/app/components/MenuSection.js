"use client";
import React, { useState } from 'react';

export default function MenuSection() {
  // ক্যাটাগরির লিস্ট
  const categories = ["All", "Burgers", "Pizza", "Chicken", "Wraps", "Desserts", "Pasta"];

  // মেনু আইটেমের ডাটা
  const menuItems = [
    {
      id: 1,
      name: "Classic Smash Burger",
      category: "Burgers",
      price: "$14.99",
      oldPrice: "$17.99",
      desc: "Double smashed patty, cheddar, caramelized onions, pickles & special sauce.",
      rating: "4.9",
      reviews: "120",
      badge: "Hot",
      badgeColor: "bg-amber-500",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Margherita Royale",
      category: "Pizza",
      price: "$19.99",
      oldPrice: "$22.00",
      desc: "San Marzano tomatoes, buffalo mozzarella, basil & truffle oil on sourdough.",
      rating: "4.8",
      reviews: "95",
      badge: "New",
      badgeColor: "bg-emerald-500",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Nashville Hot Chicken",
      category: "Chicken",
      price: "$12.99",
      oldPrice: "$15.00",
      desc: "Crispy fried chicken in fiery Nashville spice blend with honey drizzle.",
      rating: "5.0",
      reviews: "210",
      badge: "Best Seller",
      badgeColor: "bg-[#E32207]",
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Loaded Fajita Wrap",
      category: "Wraps",
      price: "$10.99",
      oldPrice: "",
      desc: "Grilled chicken, peppers, sour cream & guacamole in a warm tortilla.",
      rating: "4.7",
      reviews: "74",
      badge: "",
      badgeColor: "",
      img: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Nutella Lava Cake",
      category: "Desserts",
      price: "$8.99",
      oldPrice: "$10.99",
      desc: "Molten chocolate cake with Nutella center, vanilla ice cream & caramel.",
      rating: "4.9",
      reviews: "150",
      badge: "New",
      badgeColor: "bg-emerald-500",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Truffle Mushroom Pasta",
      category: "Pasta",
      price: "$16.99",
      oldPrice: "",
      desc: "Al dente tagliatelle, wild mushrooms, black truffle, parmesan & thyme.",
      rating: "4.8",
      reviews: "88",
      badge: "Chef's Pick",
      badgeColor: "bg-amber-600",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400&auto=format&fit=crop"
    }
  ];

  // ফিল্টার স্টেট
  const [activeTab, setActiveTab] = useState("All");

  // ফিল্টার লজিক
  const filteredItems = activeTab === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ১. হেডার সেকশন */}
        <div className="text-center mb-10">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            What's Cooking
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Our Delicious <span className="text-[#E32207]">Menu</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ২. ফিল্টার ট্যাবস (বোতাম সমূহ) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all duration-300
                ${activeTab === category
                  ? "bg-[#E32207] text-white border-[#E32207] shadow-md shadow-red-500/20"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ৩. ফুড কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col group transition-all duration-300 hover:shadow-xl"
            >
              {/* ইমেজ পার্ট */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* টপ ব্যাজ (যেমন: Hot, New) */}
                {item.badge && (
                  <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-wider font-extrabold text-white px-2.5 py-1 rounded-lg ${item.badgeColor} shadow-sm`}>
                    ★ {item.badge}
                  </span>
                )}

                {/* উইশলিস্ট হার্ট বাটন */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-400 hover:text-red-500 rounded-full flex items-center justify-center shadow-sm transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>

              {/* কন্টেন্ট পার্ট */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* ক্যাটাগরি নাম */}
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">
                  {item.category}
                </span>

                {/* খাবারের নাম */}
                <h3 className="font-extrabold text-gray-900 text-lg mb-2 leading-snug group-hover:text-[#E32207] transition-colors">
                  {item.name}
                </h3>

                {/* ডেসক্রিপশন */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                  {item.desc}
                </p>

                {/* নিচের প্রাইস এবং প্লাস বাটন পার্ট */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#E32207] font-black text-lg">{item.price}</span>
                      {item.oldPrice && (
                        <span className="text-gray-300 text-xs line-through font-medium">{item.oldPrice}</span>
                      )}
                    </div>
                    {/* রেটিং ও রিভিউ */}
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                      <span className="text-amber-400">★</span>
                      <span className="text-gray-600 font-bold">{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                  </div>

                  {/* কার্ট প্লাস বোতাম */}
                  <button className="w-9 h-9 bg-[#E32207] hover:bg-[#b51b05] text-white rounded-full flex items-center justify-center font-bold shadow-md shadow-red-500/10 transition-transform active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ৪. বটম সিটিএ বাটন */}
        <div className="text-center mt-12">
          <a
            href="#full-menu"
            className="inline-flex items-center gap-2 bg-[#E32207] hover:bg-[#b51b05] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-red-500/10 hover:shadow-xl transition-all duration-300 text-sm transform hover:-translate-y-0.5"
          >
            📖 View Full Menu
          </a>
        </div>

      </div>
    </section>
  );
}