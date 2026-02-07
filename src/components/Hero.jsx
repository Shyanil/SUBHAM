import React from "react";
import { ArrowUpRight } from "lucide-react"; 

export default function HeroSection() {
  return (
    <section id = 'hero' className="w-full min-h-screen bg-white px-4 py-6 md:px-8 lg:px-12 flex flex-col">
      
      {/* --- MAIN GRID LAYOUT --- */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* --- LEFT CARD: TEXT CONTENT --- */}
        <div className="bg-[#dcfc7d] rounded-[3rem] p-12 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden">
          
          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#102a1e] leading-[1.1]">
            Elevate Your <br />
            Everyday <br />
            Living in <br />
            Dibrugarh
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-[#102a1e]/80 text-lg max-w-md font-medium leading-relaxed">
            Discover Subham Kishori Heights—the city's first-ever "Active Lifestyle" residential project designed for energy, movement, and wellness.
          </p>

          {/* CTA Button */}
          <button className="mt-10 px-8 py-4 border border-[#102a1e] text-[#102a1e] rounded-full text-lg hover:bg-[#102a1e] hover:text-[#dcfc7d] transition-all duration-300 flex items-center gap-2 group">
            Explore Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          {/* Developer Tag */}
          <div className="absolute bottom-8 text-[#102a1e]/60 text-sm font-semibold tracking-widest uppercase">
            A Unit of Lohia Group
          </div>
        </div>

        {/* --- RIGHT CARD: IMAGE --- */}
        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden group">
          <img 
            src="https://subhamgroup.com/img/subham-kishori-glry1.jpg" 
            alt="Subham Kishori Heights Lifestyle" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay with Location Badge */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[#102a1e] font-bold text-sm shadow-sm">
            📍 Dibrugarh, Assam
          </div>
        </div>

      </div>
    </section>
  );
}