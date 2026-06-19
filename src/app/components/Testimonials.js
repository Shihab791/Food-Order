import React from 'react';

export default function Testimonials() {
  const feedbacks = [
    {
      id: 1,
      name: "Monica Wilber",
      role: "Regular Customer",
      review: "Honestly the best burgers I've ever had. The smash burger is incredible - perfectly crispy edges, juicy inside, and those pickles! We come every Friday now.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Cameron Fox",
      role: "Food Blogger",
      review: "Ordered delivery and the food arrived hot and fresh in 22 minutes. Portions are generous. Sarab has become my go-to comfort food spot without question.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Food Enthusiast",
      review: "The truffle pasta blew my mind. I didn't expect that quality from a fast food place. Great ambiance, super friendly staff. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            What People Say
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Our Customers <span className="text-[#E32207]">Feedback</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ৩-কলাম রেসপন্সিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {feedbacks.map((item) => (
            <div 
              key={item.id}
              className="bg-[#FFF8F2] rounded-2xl p-6 lg:p-8 border border-amber-500/5 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* ব্যাকগ্রাউন্ডের হালকা বড় কোটেশন মার্ক ইফেক্ট */}
              <div className="absolute right-6 top-4 text-amber-500/10 font-serif text-6xl select-none pointer-events-none transition-transform duration-300 group-hover:translate-y-1">
                ”
              </div>

              <div className="space-y-4 relative z-10">
                {/* ৫-স্টার রেটিং */}
                <div className="flex text-amber-500 text-sm tracking-tighter">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* রিভিউ টেক্সট */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal antialiased">
                  {item.review}
                </p>
              </div>

              {/* ইউজার বায়ো এবং ইমেজ সেকশন */}
              <div className="mt-6 flex items-center gap-3 border-t border-amber-500/5 pt-4">
                <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#E32207] to-amber-500 shadow-sm">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-full bg-white"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1E1E1E] text-xs sm:text-sm tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* নিচের ৩টি ডট ইন্ডিকেটর (ছবিতে যেমন আছে) */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-[#0066FF]"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}