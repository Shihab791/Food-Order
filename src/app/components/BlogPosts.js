import React from 'react';

export default function BlogPosts() {
  const blogs = [
    {
      id: 1,
      day: "14",
      month: "MAR",
      category: "FOOD & HEALTH",
      title: "Healthy Fast Food: A Myth or Beautiful Reality",
      author: "James Writer",
      comments: "24 Comments",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      day: "28",
      month: "FEB",
      category: "FOOD SCIENCE",
      title: "Is Fast Food Getting Healthier? Here's What We Found",
      author: "Sarah Grain",
      comments: "18 Comments",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      day: "05",
      month: "JAN",
      category: "RECIPES",
      title: "Innovative Hot Chickpeas Flake Crackin' Recipe at Home",
      author: "Chef Marcus",
      comments: "32 Comments",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            News & Updates
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Our Latest <span className="text-[#E32207]">Blog</span> Posts
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ৩-কলাম রেসপন্সিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogs.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col group hover:shadow-md transition-all duration-300"
            >
              {/* ইমেজ এবং ডেট ব্যাজ সেকশন */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* লাল ক্যালেন্ডার ডেট ব্যাজ */}
                <div className="absolute top-4 left-4 bg-[#E32207] text-white rounded-xl py-1.5 px-3 flex flex-col items-center justify-center min-w-[45px] shadow-md z-10">
                  <span className="text-base font-black leading-none tracking-tight">{post.day}</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">{post.month}</span>
                </div>
              </div>

              {/* কন্টেন্ট সেকশন */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="space-y-2.5">
                  {/* ক্যাটাগরি */}
                  <span className="text-[#E32207] text-[11px] font-black tracking-widest uppercase block">
                    {post.category}
                  </span>
                  
                  {/* টাইটেল */}
                  <h3 className="text-[#1E1E1E] text-base md:text-lg font-extrabold leading-snug tracking-tight hover:text-[#E32207] cursor-pointer transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                {/* মেটা ডাটা এবং লিংক */}
                <div className="mt-5 pt-4 border-t border-gray-50 space-y-3">
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-medium">
                    <span className="flex items-center gap-1.5 antialiased">
                      👤 <span className="hover:text-gray-600 cursor-pointer">{post.author}</span>
                    </span>
                    <span className="flex items-center gap-1.5 antialiased">
                      💬 <span>{post.comments}</span>
                    </span>
                  </div>

                  <a 
                    href="#" 
                    className="inline-flex items-center text-[#E32207] hover:text-[#c91e06] font-bold text-xs sm:text-sm tracking-wide group/btn pt-1 transition-colors"
                  >
                    Read More 
                    <span className="transform translate-x-1 group-hover/btn:translate-x-2 transition-transform duration-200 ml-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}