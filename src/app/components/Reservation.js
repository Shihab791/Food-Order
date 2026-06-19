'use client';
import React, { useState } from 'react';

export default function Reservation() {
  // ফর্ম ডাটা স্টেট ম্যানেজমেন্ট
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    guests: '2 People',
    date: '',
    time: '07:00 PM',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার ব্যাকএন্ড বা বুকিং লজিক অ্যাপ্লাই করতে পারেন
    alert(`Thank you ${formData.fullName}! Your reservation request for ${formData.guests} on ${formData.date} at ${formData.time} has been submitted.`);
  };

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার অংশ */}
        <div className="text-center mb-16">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            Book a Table
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Make a <span className="text-[#E32207]">Reservation</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto mt-4 leading-relaxed font-normal">
            Reserve your table for a memorable dining experience. We recommend booking 24 hours in advance for weekend evenings.
          </p>
        </div>

        {/* মেইন কন্টেইনার গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* বাম পাশ: কন্টাক্ট ইনফো ডার্ক কার্ড (৪ কলাম) */}
          <div className="lg:col-span-4 bg-[#1E1E1E] text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wide">Contact Info</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  We're happy to help you plan the perfect dining experience.
                </p>
              </div>

              {/* কন্টাক্ট লিস্ট আইটেমস */}
              <div className="space-y-5">
                {/* ওপেনিং আওয়ার্স */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    ⏰
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Opening Hours</h5>
                    <p className="text-white font-bold text-xs sm:text-sm mt-0.5">Wed – Sun, 9 AM – 11 PM</p>
                  </div>
                </div>

                {/* কল ফর বুকিং */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    📞
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Call For Booking</h5>
                    <p className="text-white font-bold text-xs sm:text-sm mt-0.5">01889804917</p>
                  </div>
                </div>

                {/* গ্রুপ ডাইনিং */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    👥
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Group Dining</h5>
                    <p className="text-white font-bold text-xs sm:text-sm mt-0.5">Special menus for 10+ guests</p>
                  </div>
                </div>

                {/* লোকেশন */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    📍
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Location</h5>
                    <p className="text-white font-bold text-xs sm:text-sm mt-0.5">Duip abashik,Mirpur-2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ডান পাশ: রিজার্ভেশন ফর্ম কার্ড (৮ কলাম) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-gray-100">
            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* রো ১: নাম এবং ফোন */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Full Name *</label>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (800) 000-0000" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* রো ২: ইমেইল এবং গেস্ট সংখ্যা */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-1.5 relative">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Number of Guests *</label>
                  <div className="relative">
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>4 People</option>
                      <option>6+ People</option>
                    </select>
                    {/* কাস্টম ডাউন অ্যারো আইকন */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* রো ৩: ডেট এবং টাইম */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Date *</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-1.5 relative">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Time *</label>
                  <div className="relative">
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option>09:00 AM</option>
                      <option>12:00 PM</option>
                      <option>03:00 PM</option>
                      <option>07:00 PM</option>
                      <option>09:00 PM</option>
                    </select>
                    {/* কাস্টম ডাউন অ্যারো আইকন */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* স্পেশাল রিকোয়েস্ট এরিয়া */}
              <div className="space-y-1.5">
                <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Special Requests</label>
                <textarea 
                  rows="3"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Allergies, dietary needs, special occasions..." 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* কনফার্মেশন বাটন */}
              <button 
                type="submit"
                className="w-full bg-[#E32207] hover:bg-[#c91e06] text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl shadow-[0_8px_25px_rgba(227,34,7,0.25)] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
              >
                📅 Confirm Reservation
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}