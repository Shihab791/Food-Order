'use client';
import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message regarding "${formData.subject}" has been received.`);
    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার অংশ */}
        <div className="text-center mb-16">
          <h4 className="text-[#E32207] font-serif italic text-xl md:text-2xl mb-1">
            Get In Touch
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Contact <span className="text-[#E32207]">Us</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-xs md:text-sm max-w-sm mx-auto mt-4 leading-relaxed font-normal">
            Have a question, feedback, or want to plan a special event? We'd love to hear from you.
          </p>
        </div>

        {/* মেইন লেআউট গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* বাম পাশ: Let's Talk ডার্ক কার্ড (৪ কলাম) */}
          <div className="lg:col-span-4 bg-[#1E1E1E] text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wide">Let's Talk</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  We typically respond within 24 hours during business hours.
                </p>
              </div>

              {/* ইনফো লিস্ট */}
              <div className="space-y-5">
                {/* অ্যাড্রেস */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    📍
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Address</h5>
                    <p className="text-white/90 text-xs sm:text-sm mt-0.5 font-medium leading-snug">
                      Duip Abashik, Mirpur-2 
                    </p>
                  </div>
                </div>

                {/* ফোন */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    📞
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Phone</h5>
                    <p className="text-white/90 text-xs sm:text-sm mt-0.5 font-medium">01889804917</p>
                  </div>
                </div>

                {/* ইমেইল */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    ✉️
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Email</h5>
                    <p className="text-white/90 text-xs sm:text-sm mt-0.5 font-medium break-all">mdshihab8007@gmail.com</p>
                  </div>
                </div>

                {/* ওয়ার্কিং আওয়ার্স */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-[#E32207] shrink-0 mt-0.5">
                    ⏰
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Working Hours</h5>
                    <p className="text-white/90 text-xs sm:text-sm mt-0.5 font-medium">Wed – Sun: 9 AM – 11 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* সোশ্যাল মিডিয়া আইকনসমূহ (ছবির মতো বামে নিচে সারিবদ্ধ) */}
            <div className="flex items-center gap-2 mt-8 pt-4 border-t border-white/5">
              {['Facebook', 'Instagram', 'Twitter', 'Youtube'].map((platform, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#E32207] hover:text-white transition-colors duration-200 flex items-center justify-center text-gray-400 text-xs"
                  title={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* ডান পাশ: কন্টাক্ট ফর্ম কার্ড (৮ কলাম) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* রো ১: নাম এবং ইমেইল */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Your Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all"
                    required
                  />
                </div>
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
              </div>

              {/* রো ২: ফোন এবং সাবজেক্ট ড্রপডাউন */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (800) 000-0000" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5 relative">
                  <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Subject *</label>
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option>General Inquiry</option>
                      <option>Catering / Events</option>
                      <option>Feedback & Suggestions</option>
                      <option>Careers</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* মেসেজ টেক্সট এরিয়া */}
              <div className="space-y-1.5">
                <label className="text-[#1E1E1E] text-xs sm:text-sm font-extrabold">Message *</label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..." 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#E32207] focus:ring-1 focus:ring-[#E32207]/20 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* সাবমিট বাটন (ছবির মতো একদম পারফেক্ট ছোট সাইজে বামে পজিশন করা) */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="bg-[#E32207] hover:bg-[#c91e06] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-full shadow-[0_6px_20px_rgba(227,34,7,0.25)] transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
                >
                  🚀 Send Message
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}