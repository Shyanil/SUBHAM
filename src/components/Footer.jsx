"use client";

import React from "react";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  MapPin, 
  Phone, 
  Mail,
  ArrowUpRight,
  Heart
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Brand Colors matching your Header
  const colors = {
    purple: "#3f348f",
    pink: "#ff0065",
    yellow: "#ffc500",
  };

  // Define Links to match Header (Added Mentor)
  const footerLinks = [
    { name: 'Courses', id: 'courses' },
    { name: 'Why Us', id: 'why' },
    { name: 'Mentor', id: 'mentor' }, // <-- ADDED HERE
    { name: 'Learning', id: 'learning' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  // Scroll Handler (Same logic as Header to ensure consistent offset)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#f8f9fc] pt-20 pb-8 overflow-hidden font-sans border-t border-slate-100">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* 1. Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      {/* 2. Soft Brand Glows */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[#3F348F]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#FF0065]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 3. Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3F348F]/20 to-transparent"></div>


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* --- 1. BRAND & SOCIALS --- */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Logo Block */}
            <div className="flex items-center">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md"
                style={{ backgroundColor: colors.pink }}
              >
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold leading-none" style={{ color: colors.purple }}>
                  SquashCode
                </h1>
                <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: colors.yellow }}>
                  Academy
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-[15px] leading-7 max-w-sm font-medium">
              We turn beginners into performance marketers through real campaigns, real budgets, and real execution.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#3F348F] hover:border-[#3F348F] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Icon strokeWidth={1.5} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* --- 2. EXPLORE (UPDATED LINKS) --- */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.purple }}></span> Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-sm font-medium text-slate-500 hover:text-[#3F348F] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#3F348F] transition-colors"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- 3. VISIT US (Styled Address) --- */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.pink }}></span> Visit Us
            </h4>
            <ul className="space-y-6">
              
              {/* Address Card */}
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#3F348F] group-hover:bg-[#3F348F]/5 transition-all duration-300 shadow-sm">
                   <MapPin strokeWidth={1.5} className="w-5 h-5" style={{ color: colors.purple }} />
                </div>
                <div className="flex flex-col">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#1a1a2e] uppercase tracking-wider">Headquarters</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#3F348F] transition-colors" />
                   </div>
                   <span className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-[#3F348F] transition-colors">
                     1006, 10th Floor, Ergo Tower,<br/>
                     Salt Lake, Street No. 18, GP Block,<br/>
                     Bidhannagar, Kolkata - 700091
                   </span>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#3F348F] group-hover:bg-[#3F348F]/5 transition-all duration-300 shadow-sm">
                   <Phone strokeWidth={1.5} className="w-5 h-5" style={{ color: colors.purple }} />
                </div>
                <span className="text-sm font-medium text-slate-500 group-hover:text-[#3F348F] transition-colors">
                  +91 98765 43210
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#3F348F] group-hover:bg-[#3F348F]/5 transition-all duration-300 shadow-sm">
                   <Mail strokeWidth={1.5} className="w-5 h-5" style={{ color: colors.purple }} />
                </div>
                <span className="text-sm font-medium text-slate-500 hover:text-[#3F348F] cursor-pointer transition-colors">
                  hello@squashcode.com
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-semibold text-slate-400">
              © {currentYear} SquashCode Academy.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs font-semibold text-slate-400 hover:text-[#3F348F] transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs font-semibold text-slate-400 hover:text-[#3F348F] transition-colors">Terms of Service</a>
            </div>
          </div>
          
          {/* --- ADDED LINE --- */}
          <div className="mt-8 text-center">
             <p className="text-[11px] font-medium text-slate-400 flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
               Teaches & Designed by 
               <span className="font-bold flex items-center gap-1" style={{ color: colors.purple }}>
                 SquashCode <Heart className="w-3 h-3 text-[#FF0065] fill-[#FF0065]" />
               </span>
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
}