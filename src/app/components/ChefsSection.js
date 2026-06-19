import React from 'react';

export default function ChefsSection() {
  // শেফদের ডাটা লিস্ট (ছবিতে যেমন আছে হুবহু)
  const chefs = [
    {
      id: 1,
      name: "Alice Mortal",
      role: "HEAD CHEF",
      experience: "12 years experience",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Corn",
      role: "GRILL MASTER",
      experience: "8 years experience",
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Faz Chowdel",
      role: "PASTRY CHEF",
      experience: "10 years experience",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "William Latnum",
      role: "PIZZA ARTISAN",
      experience: "9 years experience",
      img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            The Culinary Team
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Meet Our Expert <span className="text-[#E32207]">Chefs</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ৪-কলাম রেসপন্সিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {chefs.map((chef) => (
            <div 
              key={chef.id}
              className="bg-white rounded-t-2xl rounded-b-[2rem] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* শেফ ইমেজ কন্টেইনার */}
              <div className="relative w-full aspect-[11/10] overflow-hidden bg-gray-100">
                <img 
                  src={chef.img} 
                  alt={chef.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* হালকা ওভারলে এফেক্ট */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300"></div>
              </div>

              {/* কন্টেন্ট এরিয়া (নাম, রোল এবং এক্সপেরিয়েন্স) */}
              <div className="p-6 text-center flex flex-col justify-center items-center flex-grow">
                {/* শেফ এর নাম */}
                <h3 className="font-extrabold text-[#1E1E1E] text-lg mb-1 tracking-tight group-hover:text-[#E32207] transition-colors">
                  {chef.name}
                </h3>
                
                {/* রোল বা পদবী */}
                <span className="text-[#E32207] text-[10px] font-black tracking-widest uppercase mb-1">
                  {chef.role}
                </span>

                {/* অভিজ্ঞতা */}
                <span className="text-gray-400 text-xs font-medium tracking-wide">
                  {chef.experience}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}