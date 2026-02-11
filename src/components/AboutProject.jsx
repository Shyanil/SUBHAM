"use client";

import React from "react";
import { ArrowUpRight, Activity, TreePine, MapPin, Building2 } from "lucide-react";

export default function ActiveLivingHero() {
  // SMOOTH SCROLL HANDLER
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Color Palette
  const colors = {
    blackish: "#041a14",
    brightOrange: "#F2A71D",
    mediumOrange: "#E97323",
    darkOrange: "#D64B27",
  };

  return (
    <div id="about" className="min-h-screen bg-[#fafaf8] font-sans text-[#041a14] overflow-x-hidden">
      
      {/* --- TICKER: Blackish background with Bright Orange text --- */}
      <div className="w-full py-4 overflow-hidden border-b" style={{ backgroundColor: colors.blackish, borderBottomColor: `${colors.brightOrange}20` }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center text-sm font-bold uppercase tracking-[0.3em] px-4" style={{ color: colors.brightOrange }}>
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

      <main className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center">
        
        {/* --- FLOATING ARCHITECTURAL ELEMENTS --- */}
        <div className="absolute left-0 xl:left-[2%] top-[25%] w-40 h-56 rounded-[3rem] overflow-hidden shadow-2xl hidden xl:block hover:scale-105 transition-transform duration-500 z-0 opacity-80">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" alt="Modern Architecture" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-black">B+G+14 Floors</div>
        </div>
        
        <div className="absolute right-0 xl:right-[2%] top-[20%] w-48 h-48 rounded-full overflow-hidden shadow-2xl hidden xl:block border-8 border-white hover:rotate-3 transition-transform duration-500 z-0 opacity-80">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" alt="Wellness Lifestyle" className="w-full h-full object-cover" />
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl">
          
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] mb-8" style={{ color: `${colors.darkOrange}80` }}>
            <MapPin className="w-3 h-3" style={{ color: colors.darkOrange }} />
            Dibrugarh, Assam
          </div>

          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] mb-10" style={{ color: colors.blackish }}>
            Subham <br />
            <span className="italic font-light" style={{ color: colors.darkOrange }}>Kishori</span> Heights
          </h1>

          {/* GRID OF HIGHLIGHTS: Using Orange gradients and Blackish backgrounds --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full">
            <div className="p-6 rounded-[2rem] border border-gray-100 flex flex-col items-center justify-center shadow-sm" style={{ backgroundColor: `${colors.brightOrange}15` }}>
               <span className="block text-3xl font-serif font-bold italic" style={{ color: colors.darkOrange }}>78%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">Open Space</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
               <span className="block text-3xl font-serif font-bold italic" style={{ color: colors.blackish }}>65</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">Exclusive Units</span>
            </div>
            <div className="p-6 rounded-[2rem] flex flex-col items-center justify-center shadow-xl" style={{ backgroundColor: colors.blackish }}>
               <span className="block text-xl font-serif font-bold italic leading-tight" style={{ color: colors.brightOrange }}>3 & 4 BHK</span>
               <span className="text-[9px] uppercase font-bold tracking-widest opacity-60 text-center mt-1 text-white/70">Duplex</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
               <Building2 className="w-6 h-6 mb-1 opacity-40" style={{ color: colors.darkOrange }} />
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center leading-tight">Vaastu <br/> Compliant</span>
            </div>
          </div>

          <p className="text-lg md:text-2xl font-medium leading-relaxed mb-12" style={{ color: `${colors.blackish}CC` }}>
            An icon that stands tall in the spirit of active living. 
            Designed for families, children, and seniors to ensure 
            everyone stays physically and emotionally active, every day.
          </p>

          {/* ACTION AREA: Orange button with Blackish accents --- */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 group shadow-2xl"
              style={{ backgroundColor: colors.mediumOrange, color: "white" }}
            >
              Free Planning Consult 
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
               <TreePine className="w-5 h-5" style={{ color: colors.darkOrange }} />
               A Unit of Lohia Group
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-100 rounded-full mt-20"></div>
      </main>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}