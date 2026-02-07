"use client";

import React from "react";
import { ArrowUp, Heart, Instagram, Facebook, Linkedin } from "lucide-react";

export default function ThankYou() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#062c22] font-sans text-white">
      
      {/* --- FULLSCREEN FINAL ASSET --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/final.png" 
          alt="Subham Kishori Heights Final View" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Deep Forest Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062c22] via-[#062c22]/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-between py-20">
        
        {/* --- TOP: BRANDING --- */}
        <div className="flex justify-between items-start">
          <div className="group cursor-pointer" onClick={scrollToTop}>
            <p className="font-serif text-3xl italic tracking-tighter mb-1">Subham</p>
            <div className="h-0.5 w-0 group-hover:w-full bg-[#e3f988] transition-all duration-500" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mt-2">Kishori Heights</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e3f988] hover:text-[#062c22] transition-all duration-500 group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* --- CENTER: THE MESSAGE --- */}
        <div className="text-center">
          <h2 className="font-serif text-7xl md:text-9xl lg:text-[150px] leading-none mb-8">
            Thank <span className="italic font-light text-[#e3f988]">You.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-80 max-w-2xl mx-auto leading-relaxed">
            We look forward to welcoming you to the new benchmark of luxury in Dibrugarh.
          </p>
        </div>

        {/* --- BOTTOM: FOOTER DATA --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end border-t border-white/10 pt-12">
          
          {/* Copyright & Unit */}
          <div className="order-3 md:order-1">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">A Unit of Lohia Group</p>
            <p className="text-xs opacity-60">© 2026 Subham Group. All Rights Reserved.</p>
          </div>

          {/* Core Values */}
          <div className="flex justify-center gap-8 order-1 md:order-2">
            {['Trust', 'Innovation', 'Relationships'].map((item) => (
              <span key={item} className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e3f988]">
                {item}
              </span>
            ))}
          </div>

          {/* Social Connect */}
          <div className="flex justify-end gap-6 order-2 md:order-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#062c22] transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}