"use client";

import React, { useState, useRef } from "react";
import { 
  Play, X, Volume2, VolumeX, 
  ArrowRight, Sparkles, Building2, 
  Trees, ShieldCheck 
} from "lucide-react";

export default function Walkthrough() {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsMuted(false);
  };

  return (
    <section id="walkthrough" className="relative w-full h-screen min-h-[750px] bg-[#062c22] overflow-hidden font-sans">
      
      {/* --- STAGE 1: CINEMATIC MASK (Before Click) --- */}
      <div 
        className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-1000 ease-in-out
          ${isActive ? "opacity-0 pointer-events-none scale-110" : "opacity-100"}`}
      >
        {/* The "Curtain" Overlay */}
        <div className="absolute inset-0 bg-[#062c22]/40 backdrop-blur-[2px]" />
        
        <div className="relative z-30 text-center flex flex-col items-center">
          <button 
            onClick={handleStart}
            className="group relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center mb-10"
          >
            {/* Pulsing Rings */}
            <div className="absolute inset-0 rounded-full border border-[#e3f988]/30 animate-ping" />
            <div className="absolute inset-2 rounded-full border border-[#e3f988]/50 animate-pulse" />
            
            <div className="w-full h-full rounded-full bg-[#e3f988] flex items-center justify-center text-[#062c22] transition-transform duration-500 group-hover:scale-110 shadow-[0_0_50px_rgba(227,249,136,0.3)]">
              <Play className="w-12 h-12 fill-current ml-2" />
            </div>
          </button>
          
          <h2 className="font-serif text-5xl md:text-8xl text-white italic leading-none mb-6">
            Witness the <br /> <span className="text-[#e3f988] not-italic font-bold uppercase tracking-tighter">Ascent.</span>
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/50">
            Click to start the immersive walkthrough
          </p>
        </div>
      </div>

      {/* --- STAGE 2: THE SPLIT THEATER (After Click) --- */}
      <div className="flex h-full w-full">
        
        {/* Left: Dynamic Video Window */}
        <div className={`relative h-full transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] 
          ${isActive ? "w-full lg:w-[70%]" : "w-full"}`}>
          
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://subhamgroup.com/video/SubhamKishoriHeights.mp4" type="video/mp4" />
          </video>

          {/* Video Controls Overlay */}
          <div className={`absolute bottom-10 left-10 flex gap-4 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e3f988] hover:text-[#062c22] transition-all"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsActive(false)}
              className="px-8 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#062c22] transition-all"
            >
              Exit Theater
            </button>
          </div>
        </div>

        {/* Right: Project Highlights Sidebar */}
        <div className={`relative h-full bg-[#fafaf8] transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] flex flex-col
          ${isActive ? "w-0 lg:w-[30%] opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>
          
          <div className="p-12 lg:p-16 flex flex-col h-full justify-between text-[#062c22]">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#0a4d3c] mb-12">
                <Sparkles className="w-4 h-4 text-[#e3f988]" />
                Visual Tour
              </div>
              
              <h3 className="font-serif text-4xl mb-12 italic leading-tight">
                Architectural <br /> Verticality.
              </h3>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <Building2 className="w-6 h-6 text-[#e3f988] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Scale</p>
                    <p className="text-sm font-bold">B+G+14 Modern Towers</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Trees className="w-6 h-6 text-[#e3f988] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Landscape</p>
                    <p className="text-sm font-bold">78% Open Green Space</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <ShieldCheck className="w-6 h-6 text-[#e3f988] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Safety</p>
                    <p className="text-sm font-bold">Earthquake Resistant Structure</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="group w-full bg-[#062c22] text-[#e3f988] py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
              Book Site Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}