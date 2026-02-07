"use client";

import React, { useState, useEffect } from "react";
import { Camera, ArrowUpRight, X, Sparkles } from "lucide-react";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    { title: "Community Hub", tag: "Indoor Spaces", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
    { title: "Modern Architecture", tag: "Exterior Vision", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
    { title: "Master Plan", tag: "Aerial View", src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800" },
    { title: "Lush Landscapes", tag: "78% Open Space", src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800" },
    { title: "Grand Lobby", tag: "Premium Entrance", src: "https://media.istockphoto.com/id/1369030854/photo/3d-render-of-luxury-hotel-lobby-and-reception.jpg?s=612x612&w=0&k=20&c=obw_JfMCUfb26jO0JkYSiXOkc8Tli9vPsGmw3fLgjIc=" },
    { title: "Active Living", tag: "Lifestyle Promise", src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800" }
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <section id="gallery" className="relative w-full bg-[#fafaf8] py-24 lg:py-40 font-sans text-[#062c22]">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.5em] text-[#0a4d3c] mb-8">
              <Sparkles className="w-4 h-4 text-[#e3f988]" />
              The Visual Journey
            </div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.85] text-[#062c22] mb-2">
              The <span className="italic font-light text-[#0a4d3c]">Library.</span>
            </h2>
          </div>
          <p className="text-[#062c22]/60 max-w-sm text-lg font-medium border-l-4 border-[#e3f988] pl-8 py-2">
            A curated look at the architectural vertical lines and well-lit façades of Kishori Heights.
          </p>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-[2.5rem] overflow-hidden bg-white aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => { setActiveImage(idx); setIsOpen(true); }}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062c22] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e3f988] mb-2">{image.tag}</span>
                <h3 className="text-white font-serif text-3xl italic">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 border-2 border-[#062c22] px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#062c22] hover:text-[#e3f988] transition-all duration-300"
          >
            Open Full Gallery <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>

      {/* --- BUG FIXED SIDEBAR OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[100] ${isOpen ? "visible" : "invisible"}`}
        style={{ transition: 'visibility 0s linear 0s' }} // Instant visibility toggle
      >
        {/* Backdrop - Faster Fade */}
        <div 
          className={`absolute inset-0 bg-[#062c22]/90 backdrop-blur-md transition-opacity duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Container - Snappier Motion */}
        <div className={`absolute right-0 top-0 h-full w-full lg:w-[450px] bg-white shadow-2xl transform transition-transform duration-400 cubic-bezier(0.2, 0, 0, 1) flex flex-col z-[110] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          <div className="p-8 flex justify-between items-center border-b border-gray-100 shrink-0">
            <div className="font-serif text-[#062c22]">
              <p className="font-bold text-xl uppercase tracking-tighter">Library View</p>
              <p className="text-[10px] tracking-widest opacity-60">Kishori Heights</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e3f988] transition-colors active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
            {galleryImages.map((image, idx) => (
              <div 
                key={idx}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border-4 transition-all duration-200 ${activeImage === idx ? "border-[#e3f988]" : "border-transparent opacity-60 hover:opacity-100"}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={image.src} alt="" className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-[#062c22]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white font-bold text-[10px] uppercase tracking-widest">View Details</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#062c22] text-[#e3f988] shrink-0">
            <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">Currently Exploring</p>
            <h4 className="font-serif text-3xl italic mb-6 leading-none">{galleryImages[activeImage].title}</h4>
            <button className="w-full bg-[#e3f988] text-[#062c22] py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Center Preview - Only shows on desktop */}
        <div className={`hidden lg:flex absolute left-0 top-0 h-full w-[calc(100%-450px)] items-center justify-center p-20 pointer-events-none transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
           <div className="relative w-full max-w-5xl shadow-2xl rounded-[4rem] overflow-hidden">
              <img 
                src={galleryImages[activeImage].src} 
                alt="Selected View" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-12 left-12 text-white drop-shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#e3f988] mb-2">{galleryImages[activeImage].tag}</p>
                <h3 className="text-5xl font-serif italic leading-none">{galleryImages[activeImage].title}</h3>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
        .cubic-bezier { transition-timing-function: cubic-bezier(0.2, 0, 0, 1); }
      `}</style>
    </section>
  );
}