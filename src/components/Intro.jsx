"use client";

import React, { useState, useEffect } from "react";

export default function Intro({ onComplete }) {
  const [stage, setStage] = useState("logo"); // logo -> loading -> exit
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Initial Brand Identity (1 second)
    const logoTimeout = setTimeout(() => {
      setStage("loading");
    }, 1000);

    return () => clearTimeout(logoTimeout);
  }, []);

  useEffect(() => {
    if (stage !== "loading") return;

    // Stage 2: 2-Second Precise Loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("exit"), 400);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1400);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [stage, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#fafaf8] font-sans">
      
      {/* --- STAGE 1: MINIMAL BRANDING --- */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 
        ${stage === "logo" ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center text-[#062c22]">
          <h1 className="font-serif text-6xl md:text-7xl font-bold tracking-tighter uppercase">Subham</h1>
          <p className="text-[10px] tracking-[0.6em] uppercase opacity-40 mt-2">Kishori Heights</p>
        </div>
      </div>

      {/* --- STAGE 2: ARCHITECTURAL REVEAL --- */}
      <div className={`absolute inset-0 bg-[#062c22] transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] 
        ${stage === "logo" ? "translate-y-full" : "translate-y-0"}
        ${stage === "exit" ? "-translate-y-full" : ""}`}>
        
        {/* Background Image: No Text Overlap */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/intro_image.png" 
            alt="Subham Project View" 
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out 
              ${stage === "loading" ? "scale-105" : "scale-100"}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062c22]/80 via-transparent to-transparent" />
        </div>

        {/* --- CORNER LOADING SYSTEM --- */}
        <div className={`absolute bottom-12 right-12 md:bottom-20 md:right-20 transition-opacity duration-500 
          ${stage === "loading" ? "opacity-100" : "opacity-0"}`}>
          
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#e3f988]/60">Technical Loading</span>
              <span className="font-serif italic text-6xl text-[#e3f988] tabular-nums leading-none">
                {progress.toString().padStart(2, '0')}
              </span>
            </div>
            
            {/* Minimalist Linear Bar */}
            <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 h-full bg-[#e3f988] transition-all duration-150 shadow-[0_0_15px_rgba(227,249,136,0.5)]" 
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40 mb-1">
                Subham Group Legacy
              </p>
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#e3f988]/30">
                Defining Active Living &middot; Dibrugarh
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}