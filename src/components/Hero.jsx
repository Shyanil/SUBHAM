"use client";

import React from "react";
import { ChevronDown } from "lucide-react"; 
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Syncing with SubhamHeader Palette
  const colors = {
    blackish: "#041a14",      
    vibrantOrange: "#F36F21", 
    goldenYellow: "#F4B400",  
    deepOrange: "#D84315",    // Used in "Contact Now"
    warmCream: "#FFF4E6",     
  };

  return (
    <section id="hero" className="w-full min-h-screen bg-white px-4 py-6 md:px-8 lg:px-12 flex flex-col font-sans">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* --- LEFT CARD: BLACKISH BACKGROUND --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] p-12 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden"
          style={{ backgroundColor: colors.blackish }}
        >
          {/* Subtle Orange Glow for depth */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F36F21]/10 rounded-full -mr-20 -mt-20 blur-3xl" />

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter relative z-10 text-white">
            Elevate Your <br /> Everyday <span className="italic font-light" style={{ color: colors.vibrantOrange }}>Living.</span>
          </h1>

          <p className="mt-8 text-white/60 text-lg max-w-md font-medium leading-relaxed relative z-10">
            Discover Subham Kishori Heights—Dibrugarh’s first "Active Lifestyle" landmark designed for 65 exclusive families.
          </p>

          {/* --- UPDATED BUTTON: NOW USING CHEVRONDOWN --- */}
          <div className="mt-12 flex flex-col items-center gap-6 relative z-10">
            <button 
              onClick={scrollToAbout}
              className="flex items-center gap-2 px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl text-white group"
              style={{ backgroundColor: colors.deepOrange }}
            >
              Discover the Ascent 
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>
            
            {/* Animated Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="cursor-pointer"
              onClick={scrollToAbout}
              style={{ color: colors.vibrantOrange }}
            >
              <ChevronDown className="w-6 h-6 opacity-50" />
            </motion.div>
          </div>
        </motion.div>

        {/* --- RIGHT CARD --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-full min-h-[300px] sm:min-h-[350px] rounded-[3rem] overflow-hidden group shadow-sm"
        >
          <img 
            src="/night.jpeg" 
            alt="Subham Kishori Heights" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10" />
          
          {/* Location Badge (Remains Unchanged) */}
          <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-2" style={{ color: colors.deepOrange }}>
            <div 
              className="w-1.5 h-1.5 rounded-full animate-pulse" 
              style={{ backgroundColor: colors.vibrantOrange }}
            />
            Dibrugarh, Assam
          </div>

          {/* --- UPDATED: STARBURST PRICE BADGE --- */}
          {/* Changes:
            1. Reduced Mobile Padding (px-4 py-4 -> px-3 py-3) for smaller badge.
            2. Added -rotate-12 for comic-style 'sticker' tilt.
            3. Uses clip-path to create a clean, sharp 20-point starburst shape.
            4. Removed 'backdrop-blur-md' to remove glass effect.
            5. Adjusted text layout/sizes for better mobile fit.
          */}
          <div 
            className="absolute bottom-4 right-4 md:right-10 
              bg-white 
              px-3 py-3 md:px-6 md:py-6 
              font-black
              shadow-lg flex items-center justify-center text-center
              -rotate-12 transition-transform duration-300 hover:scale-105" 
            style={{ 
              color: colors.deepOrange,
              // Creates a precise 20-point starburst shape
              clipPath: "polygon(100% 50%, 95% 61%, 98% 74%, 87% 78%, 85% 91%, 73% 89%, 66% 99%, 54% 92%, 46% 99%, 34% 92%, 27% 99%, 15% 91%, 13% 78%, 2% 74%, 5% 61%, 0% 50%, 5% 39%, 2% 26%, 13% 22%, 15% 9%, 27% 11%, 34% 1%, 46% 8%, 54% 1%, 66% 8%, 73% 1%, 85% 9%, 87% 22%, 98% 26%, 95% 39%)",
            }}
          >
            <div className="flex flex-col items-center leading-none tracking-tight">
              {/* Mobile Only Pulse (optional, for compactness can remove) */}
              <div 
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full animate-pulse mb-0.5 md:mb-1" 
                style={{ backgroundColor: colors.vibrantOrange }}
              />
              <span className="block text-[8px] md:text-[14px] lg:text-[16px] uppercase opacity-90">
                Starting at
              </span>
              {/* Main Price Text: Reduced size slightly on mobile for better fit */}
              <span className="block text-[11px] md:text-[22px] lg:text-[26px]">
                90 Lac
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}