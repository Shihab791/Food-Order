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
      oldPrice: "$18.99",
      desc: "Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
      rating: "4.9",
      reviews: "128",
      badge: "Hot",
      badgeColor: "bg-amber-500",
      calories: "620 kcal",
      prepTime: "12 min",
      tags: ["Spicy", "Bestseller", "Beef"],
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
      calories: "540 kcal",
      prepTime: "15 min",
      tags: ["Vegetarian", "Cheese", "Fresh"],
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
      calories: "710 kcal",
      prepTime: "10 min",
      tags: ["Spicy", "Fried Chicken"],
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
      calories: "480 kcal",
      prepTime: "8 min",
      tags: ["Chicken", "Healthy"],
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
      calories: "450 kcal",
      prepTime: "5 min",
      tags: ["Sweet", "Chocolate"],
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
      calories: "580 kcal",
      prepTime: "14 min",
      tags: ["Creamy", "Mushroom"],
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400&auto=format&fit=crop"
    }
  ];

  // ফিল্টার স্টেট
  const [activeTab, setActiveTab] = useState("All");

  // মডাল এবং কোয়ান্টিটি স্টেট
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // ফিল্টার লজিক
  const filteredItems = activeTab === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  // মডাল ওপেন করার ফাংশন
  const openModal = (item) => {
    setSelectedItem(item);
    setQuantity(1);
  };

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

        {/* ২. ফিল্টার ট্যাবস */}
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
              {/* ইমেজ পার্ট (এখানে ক্লিক করলেও মডাল ওপেন হবে) */}
              <div 
                onClick={() => openModal(item)}
                className="relative w-full h-56 bg-gray-100 overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* টপ ব্যাজ */}
                {item.badge && (
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-extrabold text-white px-2.5 py-1 rounded-lg bg-amber-500 shadow-sm z-10">
                    ★ {item.badge}
                  </span>
                )}

                {/* উইশলিস্ট হার্ট বাটন (মডাল ওপেন হওয়া আটকাতে stopPropagation ব্যবহার করা হয়েছে) */}
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-400 hover:text-red-500 rounded-full flex items-center justify-center shadow-sm transition-colors duration-200 z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>

              {/* কন্টেন্ট পার্ট */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">
                  {item.category}
                </span>

                {/* খাবারের নাম (এখানে ক্লিক করলেও মডাল ওপেন হবে) */}
                <h3 
                  onClick={() => openModal(item)}
                  className="font-extrabold text-gray-900 text-lg mb-2 leading-snug group-hover:text-[#E32207] transition-colors cursor-pointer"
                >
                  {item.name}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                  {item.desc}
                </p>

                {/* নিচের প্রাইস এবং প্লাস বাটন */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#E32207] font-black text-lg">{item.price}</span>
                      {item.oldPrice && (
                        <span className="text-gray-300 text-xs line-through font-medium">{item.oldPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                      <span className="text-amber-400">★</span>
                      <span className="text-gray-600 font-bold">{item.rating}</span>
                      <span>({item.reviews})</span>
                    </div>
                  </div>

                  {/* কার্ট প্লাস বোতাম */}
                  <button 
                    onClick={() => openModal(item)}
                    className="w-9 h-9 bg-[#E32207] hover:bg-[#b51b05] text-white rounded-full flex items-center justify-center font-bold shadow-md shadow-red-500/10 transition-transform active:scale-95"
                  >
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

      {/* ৫. PRODUCT DETAILS MODAL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* ক্লোজ আইকন */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-lg font-bold">✕</span>
            </button>

            {/* বাম অংশ: ইমেজ */}
            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] md:min-h-[420px] bg-gray-100 relative">
              <img 
                src={selectedItem.img} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* ডান অংশ: কন্টেন্ট */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between text-left bg-white">
              <div>
                <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                  {selectedItem.category}
                </span>

                <h2 className="text-2xl md:text-3xl font-serif font-black text-gray-900 mb-2 leading-tight">
                  {selectedItem.name}
                </h2>

                <div className="flex items-center gap-1.5 mb-4 text-sm font-medium">
                  <div className="flex text-amber-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-gray-800 font-bold ml-1">{selectedItem.rating}</span>
                  <span className="text-gray-400 text-xs">({selectedItem.reviews} reviews)</span>
                </div>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-5">
                  {selectedItem.desc}
                </p>

                <div className="flex items-baseline gap-2.5 mb-5">
                  <span className="text-[#E32207] font-serif font-black text-3xl">{selectedItem.price}</span>
                  {selectedItem.oldPrice && (
                    <span className="text-gray-300 text-sm line-through font-medium">{selectedItem.oldPrice}</span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100/50">
                    <p className="font-extrabold text-gray-900 text-xs md:text-sm">{selectedItem.calories}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Calories</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100/50">
                    <p className="font-extrabold text-gray-900 text-xs md:text-sm">{selectedItem.prepTime}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Prep Time</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100/50">
                    <p className="font-extrabold text-gray-900 text-xs md:text-sm">{selectedItem.rating}/5</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Rating</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-500 hover:text-red-500 font-bold transition-colors"
                    >
                      －
                    </button>
                    <span className="font-bold text-gray-900 text-sm min-w-[12px] text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="w-8 h-8 rounded-full border border-[#E32207] flex items-center justify-center text-[#E32207] hover:bg-red-50 font-bold transition-colors"
                    >
                      ＋
                    </button>
                  </div>
                  <span className="text-gray-400 text-xs font-semibold">portion</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedItem.tags.map((tag, idx) => (
                    <span key={idx} className="bg-amber-50 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  alert(`${quantity}x ${selectedItem.name} added to cart!`);
                  setSelectedItem(null);
                }}
                className="w-full bg-[#E32207] hover:bg-[#b51b05] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-red-500/10"
              >
                🛒 Add to Cart
              </button>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}