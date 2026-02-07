"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Shield, Zap, Flame, Award, Play, Pause, History } from "lucide-react";

export default function Specifications() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Brand Colors matching "Active Living" aesthetic
  const colors = {
    darkGreen: "#062c22",
    lime: "#e3f988",
  };

  const themeImages = [
    { src: "/theme_1.png", title: "Structural Integrity", tag: "Earthquake Resistant" },
    { src: "/theme_2.png", title: "Active Lifestyle", tag: "78% Open Space" },
    { src: "/theme_3.png", title: "Premium Finishes", tag: "Vitrified Interiors" },
  ];

  const technicalData = [
    { category: "Structure", icon: <Shield />, info: "RCC Frame with Earthquake Resistant Structure" },
    { category: "Flooring", icon: <History />, info: "Vitrified tiles for all rooms, drawing, and dining" },
    { category: "Power", icon: <Zap />, info: "24x7 Generator & 2KVA dedicated flat backup" },
    { category: "Safety", icon: <Flame />, info: "Equipped with fire alarms & fighting devices" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % themeImages.length);
  }, [themeImages.length]);

  // AUTO-PLAY LOGIC: 5 Seconds Interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section id="specifications" className="w-full bg-[#fafaf8] py-24 lg:py-40 overflow-hidden font-sans text-[#062c22]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-[#0a4d3c] mb-10">
              <Award className="w-5 h-5 text-[#e3f988]" />
              Legacy Since 2007
            </div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[110px] leading-[0.8] text-[#062c22] tracking-tighter">
              The <span className="italic font-light text-[#0a4d3c]">Standard</span> <br />
              of Living.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-20">
            <p className="text-[#062c22]/70 text-xl font-medium leading-relaxed border-l-4 border-[#e3f988] pl-8">
              Since 2007, Subham Group has merged timely delivery with thoughtful innovation to redefine residential spaces.
            </p>
          </div>
        </div>

        {/* --- AUTO-PLAYING SLIDER --- */}
        <div 
          className="relative w-full aspect-video lg:aspect-[21/9] bg-[#062c22] rounded-[4rem] overflow-hidden shadow-2xl mb-32 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {themeImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-[1000ms] ease-in-out ${
                idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#062c22]/80 via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-12 lg:p-20 flex flex-col justify-end pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#e3f988] mb-4 block">
                  {img.tag}
                </span>
                <h3 className="font-serif text-4xl md:text-6xl text-white italic">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}

          {/* AUTO-PLAY PROGRESS BAR */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20">
            <div 
              key={currentSlide}
              className="h-full bg-[#e3f988]"
              style={{ 
                animation: isPaused ? 'none' : 'progressAnimation 5s linear forwards'
              }}
            />
          </div>

          {/* MANUAL CONTROLS */}
          <div className="absolute bottom-12 right-12 flex items-center gap-6 z-20">
             <button 
                onClick={() => setIsPaused(!isPaused)} 
                className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#e3f988] hover:text-[#062c22] transition-all"
              >
                {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
             </button>
             <div className="flex gap-2">
                {themeImages.map((_, i) => (
                   <div 
                    key={i} 
                    className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? "w-8 bg-[#e3f988]" : "w-2 bg-white/30"}`} 
                   />
                ))}
             </div>
          </div>
        </div>

        {/* --- TECHNICAL DATA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {technicalData.map((spec, idx) => (
            <div key={idx} className="group relative pt-12 border-t border-gray-200 hover:border-[#e3f988] transition-all duration-500">
              <div className="absolute -top-6 left-0 w-12 h-12 rounded-2xl bg-[#062c22] text-[#e3f988] flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform">
                {React.cloneElement(spec.icon, { className: "w-5 h-5" })}
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0a4d3c] mb-6">
                {spec.category}
              </h4>
              <p className="text-lg font-medium leading-relaxed text-[#062c22]/80 group-hover:text-[#062c22] transition-colors">
                {spec.info}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progressAnimation {
          from { width: 0%; }
          to { width: 100%; }
        }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}