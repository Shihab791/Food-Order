import React from 'react';

export default function TimelineSection() {
  // টাইমলাইনের ডাটা
  const timelineData = [
    {
      year: "2012",
      title: "Evolution of Restaurants",
      desc: "Sarab opens its first 20-seat diner on Flavor Street. Within 3 months, lines stretch around the block every evening as word of our food spreads.",
      position: "left"
    },
    {
      year: "2015",
      title: "Fine Dining & The Concept",
      desc: "Expanding the vision - we introduced our signature tasting menu and hired our first Michelin-trained chef, elevating our craft to remarkable new heights.",
      position: "right"
    },
    {
      year: "2019",
      title: "Modern Fast Food Origins",
      desc: "Launched our signature fast-food line, merging gourmet quality with speed and convenience. Within 6 months we won 3 prestigious culinary awards nationally.",
      position: "left"
    },
    {
      year: "2026",
      title: "National Expansion",
      desc: "Now operating in 8 cities across the US with an online delivery platform handling 10,000+ orders weekly - and growing every single day.",
      position: "right"
    }
  ];

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার অংশ */}
        <div className="text-center mb-16">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-2">
            Our Journey
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            A History of <span className="text-[#E32207]">Restaurant</span>
          </h2>
          <div className="w-12 h-1 bg-[#E32207] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 leading-relaxed font-normal">
            From humble beginnings to the city's most beloved restaurant - every chapter written with passion.
          </p>
        </div>

        {/* টাইমলাইন মেইন কন্টেইনার */}
        <div className="relative border-l-2 md:border-l-0 md:flex md:flex-col md:items-center border-[#E32207]/30 max-w-4xl mx-auto pl-6 md:pl-0 space-y-12 md:space-y-0">
          
          {/* ডেস্কটপের জন্য মাঝখানের মেইন সোজা ভার্টিকাল লাইন */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E32207] transform md:-translate-x-1/2 hidden md:block"></div>

          {/* প্রতিটি টাইমলাইন নোড লুপ */}
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`relative w-full md:w-1/2 flex flex-col md:pb-12 ${
                item.position === 'left' 
                  ? 'md:pr-12 md:mr-auto md:items-end md:text-right' 
                  : 'md:pl-12 md:ml-auto md:items-start md:text-left'
              }`}
            >
              
              {/* টাইমলাইন ডট (ফিক্সড ক্লাস লেআউট) */}
              <div 
                className={`absolute top-1.5 md:top-2 w-4 h-4 rounded-full bg-[#FCF8F3] border-4 border-[#E32207] ring-4 ring-[#E32207]/20 z-10 -left-[31px] md:left-auto ${
                  item.position === 'left' ? 'md:-right-[9px]' : 'md:-left-[9px]'
                }`}
              ></div>

              {/* কন্টেন্ট বক্স */}
              <div className="space-y-1.5 max-w-md">
                
                {/* বছর */}
                <span className="text-[#E32207] font-serif italic text-lg sm:text-xl font-bold block">
                  {item.year}
                </span>

                {/* টাইটেল */}
                <h3 className="text-[#1E1E1E] font-black text-base sm:text-lg tracking-tight">
                  {item.title}
                </h3>

                {/* ডেসক্রিপশন */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal opacity-90">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}