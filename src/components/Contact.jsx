import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Calendar, 
  Send,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export default function ContactEnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    batch: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We will call you shortly.");
  };

  return (
    <section id = "contact" className="relative w-full py-20 lg:py-28 bg-[#FDFCFE] overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      {/* Clean Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Subtle Glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-purple-50 to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ========================================= */}
          {/* LEFT COLUMN: Professional Content */}
          {/* ========================================= */}
          <div className="space-y-8 text-center lg:text-left relative">
            
            {/* 1. Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#3F348F] text-xs font-bold uppercase tracking-wider shadow-sm mx-auto lg:mx-0">
               <ShieldCheck className="w-4 h-4 fill-current" />
               Expert Guidance
            </div>

            {/* 2. Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight font-sans">
               <span className="font-light text-slate-600">Not sure which</span> <br/>
               <span className="font-bold text-[#3F348F]">
                 Path to take?
               </span>
            </h2>

            {/* 3. Paragraph */}
            <p className="text-lg text-slate-500 mt-4 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Don't guess your future. Book a free 1-on-1 counseling session with our senior mentors. We will analyze your skills and suggest the perfect roadmap.
            </p>

            {/* 4. Benefits List (Trust Signals) */}
            <div className="flex flex-col gap-5 pt-4 max-w-md mx-auto lg:mx-0">
               {[
                 "In-depth Profile Analysis",
                 "Customized Career Roadmap",
                 "Scholarship Eligibility Check"
               ].map((item, index) => (
                 <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-purple-100 hover:shadow-md transition-all">
                    <div className="bg-green-50 p-2 rounded-full text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-semibold">{item}</span>
                 </div>
               ))}
            </div>

          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: The Enrollment Form */}
          {/* ========================================= */}
          <div className="relative">
            {/* Form Container Card - Glassmorphism style */}
            <div className="bg-white/90 backdrop-blur-xl border border-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(63,52,143,0.15)] relative z-10">
              
              {/* --- FORM FIELDS (No Heading) --- */}
              <form onSubmit={handleSubmit} className="space-y-5 mt-2">
                
                {/* Name Input */}
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3F348F] transition-colors" />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Full Name" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium"
                    required
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3F348F] transition-colors" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium"
                    required
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3F348F] transition-colors" />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium"
                    required
                    onChange={handleChange}
                  />
                </div>

                {/* Flex row for Selects */}
                <div className="flex flex-col md:flex-row gap-5">
                  
                  {/* Course Selection */}
                  <div className="relative group flex-1">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3F348F] transition-colors" />
                    <select 
                      name="course"
                      className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium appearance-none cursor-pointer"
                      required
                      onChange={handleChange}
                      defaultValue=""
                    >
                      <option value="" disabled>Select Course</option>
                      <option value="performance-marketing">Performance Marketing</option>
                      <option value="google-ads">Google Ads Specialist</option>
                      <option value="meta-ads">Meta Ads Mastery</option>
                      <option value="dtc-strategy">DTC Brand Strategy</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  {/* Batch Selection */}
                  <div className="relative group flex-1">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3F348F] transition-colors" />
                    <select 
                      name="batch"
                      className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium appearance-none cursor-pointer"
                      required
                      onChange={handleChange}
                      defaultValue=""
                    >
                      <option value="" disabled>Preferred Batch</option>
                      <option value="weekday">Weekday (Mon-Fri)</option>
                      <option value="weekend">Weekend (Sat-Sun)</option>
                      <option value="flexible">Flexible timing</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button type="submit" className="w-full py-4 bg-[#3F348F] text-white rounded-xl font-bold text-lg hover:bg-[#322a72] transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2 group mt-8">
                  <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  Book a Free Counselling Call
                </button>
                
                <p className="text-center text-slate-400 text-xs mt-4">
                  By booking, you agree to our Terms & Privacy Policy.
                </p>

              </form>
            </div>
             {/* Decorative element behind form */}
             <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[#FF0065] rounded-3xl z-0 opacity-20 hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}