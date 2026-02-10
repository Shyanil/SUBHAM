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

  return (
    <section id="hero" className="w-full min-h-screen bg-white px-4 py-6 md:px-8 lg:px-12 flex flex-col font-sans">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* --- LEFT CARD --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#e3f988] rounded-[3rem] p-12 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#062c22] leading-[1.1] tracking-tighter">
            Elevate Your <br /> Everyday <span className="italic font-light">Living.</span>
          </h1>

          <p className="mt-8 text-[#062c22]/80 text-lg max-w-md font-medium leading-relaxed">
            Discover Subham Kishori Heights—Dibrugarh’s first "Active Lifestyle" landmark designed for 65 exclusive families.
          </p>

          {/* --- MINIMALIST TRANSPARENT BUTTON --- */}
          <button 
            onClick={scrollToAbout}
            className="mt-12 group flex flex-col items-center gap-3 transition-all duration-300"
          >
            {/* Outline/Transparent Style */}
            <div className="px-8 py-3 border border-[#062c22]/30 rounded-full flex items-center gap-3 group-hover:bg-[#062c22] group-hover:text-[#e3f988] transition-all duration-500">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Discover the Ascent
              </span>
            </div>
            
            {/* Animated Small Icon */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-[#062c22]/40 group-hover:text-[#062c22] transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
          
          <div className="absolute bottom-8 text-[#062c22]/40 text-[10px] font-black uppercase tracking-[0.4em]">
            A Unit of Lohia Group
          </div>
        </motion.div>

        {/* --- RIGHT CARD --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden group"
        >
          <img 
            src="/hero.png" 
            alt="Subham Kishori Heights" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5" />
          
          <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full text-[#062c22] font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#e3f988] rounded-full animate-pulse" />
            Dibrugarh, Assam
          </div>
        </motion.div>

      </div>
    </section>
  );
}