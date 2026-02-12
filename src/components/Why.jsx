"use client";

import React from 'react';
import { Building2, Activity, Users, Heart, Sparkles } from 'lucide-react';

const ActiveLivingShowcase = () => {
  
  // Color Palette
  const colors = {
    blackish: "#041a14",
    brightOrange: "#F2A71D",
    mediumOrange: "#E97323",
    darkOrange: "#D64B27",
  };

  return (
    <section id="highlights" className="w-full bg-[#fafaf8] pt-0 pb-10 px-4 md:px-12 lg:px-24 font-sans text-[#041a14]">
      
      {/* --- MULTI-GENERATIONAL FOCUS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {[
          { 
            title: "For Children", 
            tag: "ENERGY & PLAY",
            desc: "Designed to spark movement and physical growth through active, purposeful play environments.",
            icon: <Sparkles className="w-6 h-6" style={{ color: colors.darkOrange }} />,
            bg: "bg-white border border-gray-100",
            customBg: null
          },
          { 
            title: "For Families", 
            tag: "COMMUNITY BONDING",
            desc: "Space efficiency and open panoramic views to nurture modern community living and relationships.",
            icon: <Users className="w-6 h-6" style={{ color: colors.brightOrange }} />,
            // ✅ FIXED: removed scale-105 on mobile, added md:scale-105
            bg: "text-white shadow-2xl scale-100 md:scale-105 z-10",
            customBg: colors.blackish
          },
          { 
            title: "For Seniors", 
            tag: "WELLNESS & CALM",
            desc: "Emotional grounding and calm aesthetics curated for a healthy, dignified, and energetic lifestyle.",
            icon: <Heart className="w-6 h-6" style={{ color: colors.blackish }} />,
            bg: "text-white",
            customBg: colors.brightOrange
          }
        ].map((item, idx) => (
          <div 
            key={idx} 
            // ✅ FIXED: Adjusted padding (p-8 mobile, p-12 desktop) and radius
            className={`${item.bg} rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 flex flex-col min-h-[360px] md:h-[420px] justify-between group transition-all duration-500`}
            style={item.customBg ? { backgroundColor: item.customBg } : {}}
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-3xl flex items-center justify-center border shadow-inner ${idx === 1 ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/5'}`}>
              {item.icon}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-3 block">{item.tag}</span>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 md:mb-6">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-70 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- ARCHITECTURAL VISION --- */}
      {/* ✅ FIXED: Reduced height on mobile (h-[550px]) vs desktop (h-[700px]) */}
      <div className="relative rounded-[2.5rem] md:rounded-[5rem] overflow-hidden h-[600px] md:h-[700px] group shadow-2xl" style={{ backgroundColor: colors.blackish }}>
        <img 
          src="/outside_view_2.png" 
          alt="Subham Kishori Heights Architecture" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t" style={{ backgroundImage: `linear-gradient(to top, ${colors.blackish}, transparent)` }}></div>
        
        {/* ✅ FIXED: Reduced padding on mobile (p-8) */}
        <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-end">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-12">
            
            <div className="max-w-2xl w-full">
              <div className="w-16 md:w-20 h-1 mb-6 md:mb-8" style={{ backgroundColor: colors.brightOrange }}></div>
              {/* ✅ FIXED: Smaller text on mobile */}
              <h3 className="font-serif text-4xl md:text-6xl text-white mb-6 md:mb-8 leading-tight">
                Architecture <br/> <span className="italic font-light" style={{ color: colors.brightOrange }}>in Harmony</span>
              </h3>
              <p className="text-white/70 text-base md:text-xl leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                Modern high-rise towers with clean vertical lines and well-lit façades. 
                Thoughtful space planning ensures natural light and open views for all 
                65 exclusive residences.
              </p>
            </div>
            
            {/* ✅ FIXED: Flex row on mobile for boxes so they sit side-by-side if space allows */}
            <div className="flex flex-row w-full lg:w-auto gap-4 md:gap-6">
               <div className="flex-1 lg:flex-none bg-white/10 backdrop-blur-2xl p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/20 text-white text-center min-w-[120px] md:min-w-[160px]">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-4" style={{ color: colors.brightOrange }} />
                  <p className="text-[9px] md:text-[10px] font-black tracking-widest uppercase opacity-60 mb-1">Structure</p>
                  <p className="text-lg md:text-xl font-serif">2 Towers</p>
               </div>
               <div className="flex-1 lg:flex-none bg-white/10 backdrop-blur-2xl p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/20 text-white text-center min-w-[120px] md:min-w-[160px]">
                  <Activity className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-4" style={{ color: colors.brightOrange }} />
                  <p className="text-[9px] md:text-[10px] font-black tracking-widest uppercase opacity-60 mb-1">Elevation</p>
                  <p className="text-lg md:text-xl font-serif">B+G+14</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveLivingShowcase;