"use client";

import React from "react";
import { ArrowUpRight, Activity, MapPin, Building2 } from "lucide-react";

// ✅ Receive onOpenPopup from App.js
export default function ActiveLivingHero({ onOpenPopup }) {

  const colors = {
    blackish: "#041a14",
    brightOrange: "#F2A71D",
    mediumOrange: "#E97323",
    darkOrange: "#D64B27",
    deepOrange: "#D84315", 
  };

  return (
    <div id="about" className="bg-[#fafaf8] font-sans text-[#041a14] overflow-x-hidden relative">
      
      {/* --- TICKER --- */}
      <div className="w-full py-4 overflow-hidden border-b" style={{ backgroundColor: colors.blackish, borderBottomColor: `${colors.brightOrange}20` }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center text-xs font-bold uppercase tracking-[0.3em] px-4" style={{ color: colors.brightOrange }}>
              <span className="mx-8">To be active is to live</span>
              <Activity className="w-4 h-4 opacity-50" />
              <span className="mx-8">Activeness flows seven days a week</span>
              <Activity className="w-4 h-4 opacity-50" />
              <span className="mx-8">Step into a world designed to energize</span>
              <Activity className="w-4 h-4 opacity-50" />
            </div>
          ))}
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col items-center">
        
        {/* --- LEFT IMAGE --- */}
        <div className="absolute left-0 xl:left-[2%] top-[25%] w-40 h-56 rounded-[3rem] overflow-hidden shadow-2xl hidden xl:block hover:scale-105 transition-transform duration-500 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-100" 
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-black">B+G+14 Floors</div>
        </div>
        
        {/* --- RIGHT IMAGE --- */}
        <div className="absolute right-0 xl:right-[2%] top-[20%] w-48 h-48 rounded-full overflow-hidden shadow-2xl hidden xl:block border-8 border-white hover:rotate-3 transition-transform duration-500 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" 
            alt="Wellness Lifestyle" 
            className="w-full h-full object-cover opacity-100" 
          />
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl">
          
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: colors.darkOrange }}>
            <MapPin className="w-3 h-3" />
            Dibrugarh, Assam
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] mb-6" style={{ color: colors.blackish }}>
            Subham <br />
            <span className="italic font-light" style={{ color: colors.deepOrange }}>Kishori</span> Heights
          </h1>

          <div className="max-w-2xl mb-12">
            <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: colors.blackish }}>
              An architectural icon standing tall as Dibrugarh’s first "Active Lifestyle" landmark. 
              Designed specifically for the modern family, our spaces ensure that everyone 
              stays physically vibrant and emotionally connected every single day.
            </p>
          </div>

          {/* --- GRID --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full">
            <div className="p-6 rounded-[2rem] border border-orange-100 flex flex-col items-center justify-center shadow-sm bg-white hover:bg-orange-50 transition-colors">
               <span className="block text-3xl font-serif font-bold italic" style={{ color: colors.deepOrange }}>78%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">Open Space</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
               <span className="block text-3xl font-serif font-bold italic" style={{ color: colors.blackish }}>65</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">Exclusive Units</span>
            </div>
            <div className="p-6 rounded-[2rem] flex flex-col items-center justify-center shadow-xl" style={{ backgroundColor: colors.blackish }}>
               <span className="block text-xl font-serif font-bold italic text-white">3 & 4 BHK</span>
               <span className="text-[9px] uppercase font-bold tracking-widest opacity-60 text-center mt-1 text-white/70">Duplex Available</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
               <Building2 className="w-6 h-6 mb-1 opacity-40" style={{ color: colors.deepOrange }} />
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center leading-tight">Vaastu <br/> Compliant</span>
            </div>
          </div>

          {/* --- ACTION BUTTON --- */}
          <div className="flex flex-col items-center gap-8">
            <button 
              /* ✅ UPDATED: Trigger Popup */
              onClick={onOpenPopup}
              className="group flex items-center gap-3 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_20px_40px_rgba(216,67,21,0.2)] text-white"
              style={{ backgroundColor: colors.deepOrange }}
            >
              Start Your Journey 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-xs h-[1px] bg-black/10 mt-16"></div>
      </main>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}