"use client";

import React from "react";
import { ArrowUp, MapPin, Navigation } from "lucide-react";

export default function Location() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Official Brand Palette
  const colors = {
    blackish: "#041a14",      // Deeper, darker Forest Green for a blackish feel
    brightOrange: "#F2A71D", // Accent Highlight
    mediumOrange: "#E97323", // Primary Action
    darkOrange: "#D64B27",   // Red-Orange Accent
  };

  return (
    <footer id="location" className="w-full py-24 px-6 md:px-12 lg:px-24 font-sans" style={{ backgroundColor: colors.blackish }}>
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 1: PROJECT IDENTITY --- */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4" style={{ color: colors.brightOrange }}>
            Strategically Positioned
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none text-white">
            Project <br />
            <span className="italic font-light" style={{ color: colors.darkOrange }}>Location</span>
          </h2>
        </div>

        {/* --- PART 2 & 3: ADDRESS & MAP --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* ADDRESS & SPECS COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4" style={{ color: colors.brightOrange }} />
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 text-white">The Address</p>
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-white">
                Subham Kishori Heights, <br />
                Seujpur, Dibrugarh, <br />
                Assam - 786001
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 text-white">Home Types</p>
              <div className="flex gap-6 text-xl font-serif italic" style={{ color: colors.brightOrange }}>
                <span>3 BHK</span>
                <span>4 BHK</span>
                <span>Duplex</span>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] opacity-30 text-white">
                B+G+14 · 65 Exclusive Homes
              </p>
            </div>
          </div>

          {/* GOOGLE MAPS COLUMN - Increased Height */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 group grayscale transition-all duration-700 hover:grayscale-0 shadow-2xl">
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
            </div>
          </div>
        </div>

        {/* --- FOOTER ACTION - Text Removed --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <div className="flex flex-col gap-1">
            {/* Footer Text Removed as per request */}
          </div>
        </div>
        
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}