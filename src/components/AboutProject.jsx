import React from "react";
import { ArrowUpRight, Activity, TreePine, MapPin, Building2 } from "lucide-react";

export default function ActiveLivingHero() {
  return (
    <div id = 'about' className="min-h-screen bg-[#fafaf8] font-sans text-[#062c22] overflow-x-hidden">
      
      {/* --- ADVANCED DYNAMIC MARQUEE (The "Ticker") --- */}
      <div className="w-full bg-[#062c22] py-4 overflow-hidden border-b border-[#e3f988]/20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center text-sm font-bold uppercase tracking-[0.3em] text-[#e3f988] px-4">
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

      {/* --- HERO SECTION --- */}
      {/* Fixed: Added relative positioning and ensured main content is centered without collision */}
      <main className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center">
        
        {/* ADVANCED FLOATING COMPOSITION */}
        {/* Fixed: Changed left/right percentages and added xl: block to prevent overlap on medium screens */}
        <div className="absolute left-0 xl:left-[2%] top-[25%] w-40 h-56 rounded-[3rem] overflow-hidden shadow-2xl hidden xl:block hover:scale-105 transition-transform duration-500 z-0 opacity-80">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" alt="Modern Architecture" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-black">B+G+14 Floors</div>
        </div>
        
        <div className="absolute right-0 xl:right-[2%] top-[20%] w-48 h-48 rounded-full overflow-hidden shadow-2xl hidden xl:block border-8 border-white hover:rotate-3 transition-transform duration-500 z-0 opacity-80">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" alt="Wellness Lifestyle" className="w-full h-full object-cover" />
        </div>

        {/* MAIN LAYOUT */}
        {/* Fixed: Higher z-index ensures text always stays above background elements */}
        <div className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl">
          
          <div className="flex items-center gap-3 text-[#062c22]/50 text-xs font-bold uppercase tracking-[0.4em] mb-8">
            <MapPin className="w-3 h-3 text-[#062c22]" />
            Dibrugarh, Assam
          </div>

          <h1 className="font-serif text-5xl md:text-8xl text-[#062c22] leading-[0.95] mb-10">
            Subham <br />
            <span className="italic font-light text-[#0a4d3c]">Kishori</span> Heights
          </h1>

          {/* GRID OF HIGHLIGHTS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full">
            <div className="bg-[#e3f988]/30 p-6 rounded-[2rem] border border-[#062c22]/5 flex flex-col items-center justify-center">
               <span className="block text-3xl font-serif font-bold italic">78%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Open Space</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-[#062c22]/5 shadow-sm flex flex-col items-center justify-center">
               <span className="block text-3xl font-serif font-bold italic">65</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Exclusive Units</span>
            </div>
            <div className="bg-[#062c22] text-[#e3f988] p-6 rounded-[2rem] flex flex-col items-center justify-center">
               <span className="block text-3xl font-serif font-bold italic">3 & 4</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">BHK / Duplex</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-[#062c22]/5 shadow-sm flex flex-col items-center justify-center">
               <Building2 className="w-6 h-6 mb-1 opacity-40" />
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Vaastu Compliant</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          {/* Grammar Fix: "Designed for families... so that every age group stays active." */}
          <p className="text-[#062c22]/80 text-lg md:text-2xl font-medium leading-relaxed mb-12">
            An icon that stands tall in the spirit of active living. 
            Designed for families, children, and seniors to ensure 
            everyone stays physically and emotionally active, every day.
          </p>

          {/* ACTION AREA */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <button className="inline-flex items-center gap-3 bg-[#062c22] text-[#e3f988] px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 group shadow-2xl">
              Free Planning Consult 
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
               <TreePine className="w-5 h-5" />
               A Unit of Lohia Group
            </div>
          </div>
        </div>

        {/* BOTTOM DECORATIVE ASSET */}
        <div className="w-full h-1 bg-[#062c22]/5 rounded-full mt-20"></div>
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