"use client";

import React from "react";
import { ArrowUp, MapPin, Navigation } from "lucide-react";

export default function Location() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="location" className="w-full bg-[#062c22] py-24 px-6 md:px-12 lg:px-24 text-[#e3f988] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 1: PROJECT IDENTITY --- */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">
            Strategically Positioned
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none text-white">
            Project <br />
            <span className="italic font-light text-[#e3f988]">Location.</span>
          </h2>
        </div>

        {/* --- PART 2 & 3: ADDRESS & MAP --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* ADDRESS & SPECS COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-[#e3f988]" />
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">The Address</p>
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-white">
                Subham Kishori Heights, <br />
                Seujpur, Dibrugarh, <br />
                Assam - 786001
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Home Types</p>
              <div className="flex gap-6 text-xl font-serif italic text-[#e3f988]">
                <span>3 BHK</span>
                <span>4 BHK</span>
                <span>Duplex</span>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                B+G+14 · 65 Exclusive Homes
              </p>
            </div>
          </div>

          {/* GOOGLE MAPS COLUMN (YOUR SPECIFIC IFRAME) */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden border border-white/10 group grayscale transition-all duration-700 hover:grayscale-0 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7079.215212334554!2d94.931217!3d27.481473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099001efa57bd%3A0x663a1239c1e15167!2sSUBHAM%20KISHORI%20HEIGHTS!5e0!3m2!1sen!2sin!4v1770731429352!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Subham Kishori Heights Location"
              />
              
              {/* Directions Button Overlay */}
              <a 
                href="https://maps.google.com/?q=Subham+Kishori+Heights+Dibrugarh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-8 right-8 bg-[#e3f988] text-[#062c22] px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <Navigation className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
          </div>
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-30">
              A Unit of Subham Group · Legacy Since 2007
            </p>
            <p className="text-[9px] font-black uppercase tracking-widest opacity-30">
              78% Open Space · Vastu Compliant
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 bg-white/5 hover:bg-[#e3f988] hover:text-[#062c22] px-8 py-4 rounded-full transition-all duration-500 border border-white/10"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-[#062c22]">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}