"use client";

import React, { useState, useRef } from "react";
// Added ArrowUpRight to the imports below
import { 
  Play, Pause, X, Volume2, VolumeX, 
  ArrowUpRight, ArrowRight, Sparkles, Building2, 
  Trees, ShieldCheck 
} from "lucide-react";

export default function Walkthrough() {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const colors = {
    blackish: "#041a14",
    brightOrange: "#F2A71D",
    mediumOrange: "#E97323",
    darkOrange: "#D64B27",
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsMuted(false);
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleExit = () => {
    setIsActive(false);
    setIsPlaying(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0; 
  };

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="walkthrough" className="relative w-full h-screen min-h-[750px] overflow-hidden font-sans" style={{ backgroundColor: colors.blackish }}>
      {/* STAGE 1: CINEMATIC MASK */}
      <div 
        className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-1000 ease-in-out
          ${isActive ? "opacity-0 pointer-events-none scale-110" : "opacity-100"}`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        <div className="relative z-30 text-center flex flex-col items-center">
          <button 
            onClick={handleStart}
            className="group relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center mb-10"
          >
            <div className="absolute inset-0 rounded-full border animate-ping" style={{ borderColor: `${colors.brightOrange}30` }} />
            <div className="absolute inset-2 rounded-full border animate-pulse" style={{ borderColor: `${colors.brightOrange}50` }} />
            
            <div className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-2xl" style={{ backgroundColor: colors.brightOrange, color: colors.blackish }}>
              <Play className="w-12 h-12 fill-current ml-2" />
            </div>
          </button>
          
          <h2 className="font-serif text-5xl md:text-8xl text-white italic leading-none mb-6">
            Witness the <br /> <span className="not-italic font-bold uppercase tracking-tighter" style={{ color: colors.brightOrange }}>Ascent.</span>
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/50">
            Click to start the immersive walkthrough
          </p>
        </div>
      </div>

      {/* STAGE 2: THE SPLIT THEATER */}
      <div className="flex h-full w-full">
        <div className={`relative h-full transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] 
          ${isActive ? "w-full lg:w-[70%]" : "w-full"}`}>
          
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://subhamgroup.com/video/SubhamKishoriHeights.mp4" type="video/mp4" />
          </video>

          <div className={`absolute bottom-10 left-10 flex gap-4 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}>
            <button 
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </button>

            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <button 
              onClick={handleExit}
              className="px-8 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              <X className="w-4 h-4" /> Exit Theater
            </button>
          </div>
        </div>

        <div className={`relative h-full bg-[#fafaf8] transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] flex flex-col
          ${isActive ? "w-0 lg:w-[30%] opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>
          
          <div className="p-12 lg:p-16 flex flex-col h-full justify-between text-[#041a14]">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] mb-12" style={{ color: colors.darkOrange }}>
                <Sparkles className="w-4 h-4" style={{ color: colors.brightOrange }} />
                Visual Tour
              </div>
              
              <h3 className="font-serif text-4xl mb-12 italic leading-tight">
                Architectural <br /> Verticality.
              </h3>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <Building2 className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.brightOrange }} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Scale</p>
                    <p className="text-sm font-bold">B+G+14 Modern Towers</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Trees className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.brightOrange }} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Landscape</p>
                    <p className="text-sm font-bold">78% Open Space Living</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <ShieldCheck className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.brightOrange }} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Safety</p>
                    <p className="text-sm font-bold">Earthquake Resistant Structure</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="group w-full py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-lg"
              style={{ backgroundColor: colors.blackish, color: colors.brightOrange }}
            >
              Book Site Visit <ArrowUpRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}