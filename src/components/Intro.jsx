"use client";

import React, { useState, useEffect } from "react";

export default function Intro({ onComplete }) {
  const [stage, setStage] = useState("building"); // building -> reveal -> complete
  const [textIndex, setTextIndex] = useState(0);
  const brandName = "SUBHAM";

  useEffect(() => {
    // 1. Typing Phase: Character by character
    if (textIndex < brandName.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // 2. Hold the complete logo, then trigger reveal
      const revealTimer = setTimeout(() => {
        setStage("reveal");
        // 3. Final completion after animation
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1500);
      }, 1200);
      return () => clearTimeout(revealTimer);
    }
  }, [textIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#fafaf8] overflow-hidden font-sans">
      
      {/* ARCHITECTURAL FRAMEWORK (Subtle Border Lines) */}
      <div className={`absolute inset-10 border border-[#062c22]/5 transition-all duration-1000 ${stage === 'reveal' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`} />

      {/* MAIN TYPOGRAPHIC CENTER */}
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        
        <div className={`flex flex-col items-center transition-all duration-1000 ${stage === 'reveal' ? 'tracking-[2em] opacity-0' : 'tracking-normal opacity-100'}`}>
          {/* Brand Name with Precision Cursor */}
          <h1 className="font-serif text-[#062c22] text-7xl md:text-9xl font-bold uppercase leading-none flex items-baseline">
            {brandName.substring(0, textIndex)}
            <span className={`w-1 h-12 md:h-20 bg-[#e3f988] ml-2 ${textIndex === brandName.length ? 'animate-none opacity-0' : 'animate-pulse'}`} />
          </h1>

          {/* Vertical Separator */}
          <div className={`w-[1px] bg-[#e3f988] transition-all duration-1000 ease-out mt-8 ${textIndex > 3 ? 'h-16 opacity-100' : 'h-0 opacity-0'}`} />

          {/* Project Tagline */}
          <div className={`overflow-hidden transition-all duration-1000 ${textIndex === brandName.length ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-[11px] font-black uppercase tracking-[0.6em] text-[#062c22]/40 mt-6">
              Kishori Heights
            </p>
          </div>
        </div>

        {/* DATA-DRIVEN FOOTNOTE (Legacy) */}
        <div className={`absolute bottom-20 flex flex-col items-center transition-opacity duration-700 ${stage === 'reveal' ? 'opacity-0' : 'opacity-100'}`}>
           <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#062c22]/30 mb-2">
             10+ Years of Expertise
           </p>
           <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#e3f988]" />
              <span className="text-[8px] font-black uppercase tracking-widest text-[#0a4d3c]">Defining Active Living</span>
              <span className="w-8 h-[1px] bg-[#e3f988]" />
           </div>
        </div>
      </div>

      {/* THE "LENS SHUTTER" REVEAL (Clean white curtains) */}
      <div className={`absolute inset-0 z-50 pointer-events-none flex`}>
        <div className={`h-full bg-[#fafaf8] transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] w-1/2 origin-left ${stage === 'reveal' ? 'scale-x-0' : 'scale-x-1'}`} />
        <div className={`h-full bg-[#fafaf8] transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] w-1/2 origin-right ${stage === 'reveal' ? 'scale-x-0' : 'scale-x-1'}`} />
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}