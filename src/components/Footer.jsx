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
  Building2,
  FileText
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Project Brand Colors
  const colors = {
    darkGreen: "#062c22",
    lime: "#e3f988",
  };

  // Real Estate Navigation Links
  const footerLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Location', id: 'location' },
    { name: 'Floor Plans', id: 'plans' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact Us', id: 'contact' },
  ];

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
    <footer className="relative bg-[#fafaf8] pt-24 pb-12 overflow-hidden font-sans border-t border-slate-100">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#062c22]/10 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#e3f988]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* --- 1. PROJECT IDENTITY --- */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-3xl text-[#062c22]">SUBHAM</span>
              <span className="text-xs uppercase tracking-[0.3em] mt-2 text-[#062c22]/60 font-medium">
                Kishori Heights
              </span>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
              Dibrugarh’s first-ever “Active Lifestyle” residential project. Designed for energy, movement, and wellness.
            </p>
            
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#062c22] hover:bg-[#062c22] hover:text-[#e3f988] transition-all duration-500 shadow-sm"
                >
                  <Icon strokeWidth={1.5} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* --- 2. QUICK LINKS --- */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black text-[#062c22] uppercase tracking-[0.3em] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-sm font-bold text-slate-500 hover:text-[#062c22] transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e3f988] scale-0 group-hover:scale-100 transition-transform"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- 3. SALES GALLERY --- */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black text-[#062c22] uppercase tracking-[0.3em] mb-8">
              Sales Gallery
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#062c22]/5 flex items-center justify-center shrink-0 border border-[#062c22]/10">
                   <MapPin className="w-5 h-5 text-[#062c22]" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-[#062c22] uppercase tracking-wider mb-1">Site Address</span>
                   <span className="text-sm font-medium text-slate-500 leading-relaxed">
                     Subham Kishori Heights, Near Brahmaputra River,<br/>
                     Dibrugarh, Assam
                   </span>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#062c22]/5 flex items-center justify-center shrink-0 border border-[#062c22]/10">
                   <Phone className="w-5 h-5 text-[#062c22]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#062c22] uppercase tracking-wider mb-1">Contact</span>
                  <span className="text-sm font-bold text-slate-500 hover:text-[#062c22] transition-colors">+91 98765 43210</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* --- COMPLIANCE & DEVELOPER --- */}
        <div className="border-t border-slate-200 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Developer
              </p>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#062c22]" />
                <span className="font-bold text-[#062c22]">SUBHAM</span>
                <span className="text-xs text-slate-400 font-medium">(A Unit of Lohia Group)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#062c22] uppercase tracking-widest cursor-pointer hover:opacity-70 transition-opacity">
                <FileText className="w-4 h-4" />
                Download Brochure
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#062c22] uppercase tracking-widest cursor-pointer hover:opacity-70 transition-opacity">
                RERA: ASSAM/RERA/2026/01
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100 pt-8">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              © {currentYear} Subham Group. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#062c22]">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#062c22]">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}