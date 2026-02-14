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
          
          <div className="absolute bottom-8 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
            A Unit of Lohia Group
          </div>
        </motion.div>

        {/* --- RIGHT CARD --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden group shadow-sm"
        >
          <img 
            src="/hero.png" 
            alt="Subham Kishori Heights" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Badge using the vibrant orange accent */}
          <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-2" style={{ color: colors.deepOrange }}>
            <div 
              className="w-1.5 h-1.5 rounded-full animate-pulse" 
              style={{ backgroundColor: colors.vibrantOrange }}
            />
            Dibrugarh, Assam
          </div>
        </motion.div>

      </div>
    </section>
  );
}