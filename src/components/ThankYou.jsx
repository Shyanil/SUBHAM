"use client";

import React from "react";
import { ArrowUp, MapPin, ExternalLink, Award, Zap, Compass, Sparkles, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSubham() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // HANDLER FOR SITE VISIT BUTTON
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const colors = {
    blackish: "#041a14",      
    brightOrange: "#F2A71D", 
    mediumOrange: "#E97323", 
    darkOrange: "#D64B27",   
  };

  const completedProjects = [
    "Subham Enclave", "Subham Classic", "Subham Residency", "Subham Park View", 
    "Subham Heights", "Subham Regency", "Subham Elite", "Subham Garden", 
    "Subham Greens", "Subham Buildwell", "Subham Velocity", "Subham Redstone", "Bijay Crescent"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="w-full bg-[#fafaf8] py-12 lg:py-24 font-sans text-[#041a14]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div {...fadeInUp} className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
               <Zap className="w-5 h-5" style={{ color: colors.brightOrange }} />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: colors.darkOrange }}>
                 The Legacy
               </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter" style={{ color: colors.blackish }}>
              Timeless <span className="italic font-light" style={{ color: colors.darkOrange }}>Relationships.</span>
            </h2>
          </motion.div>
        </div>

        {/* --- SECTION 2: BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          
          {/* Main Story Card */}
          <motion.div 
            className="md:col-span-8 p-10 lg:p-16 rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[520px]"
            style={{ backgroundColor: colors.blackish }}
            {...fadeInUp}
          >
            <div className="relative z-10 mb-12">
               <img 
                 src="https://subhamgroup.com/img/subham-logo.png" 
                 alt="Subham Group" 
                 className="h-10 md:h-14 w-auto object-contain" 
               />
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-tight">
                "We don't just build structures; <br/> we curate lifestyles."
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                Since 2007, Subham Group has been the silent force behind Guwahati’s skyline, 
                blending architectural bravery with the warmth of a home.
              </p>
              <div className="flex items-center gap-4">
                 <Award className="w-6 h-6" style={{ color: colors.brightOrange }} />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Awarded 'Most Trusted Developer' — Northeast India
                 </span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2A71D]/5 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:bg-[#F2A71D]/10 transition-all duration-1000" />
          </motion.div>

          {/* PREMIUM "EXPERIENCE" CARD */}
          <motion.div 
            className="md:col-span-4 p-10 rounded-[3.5rem] flex flex-col justify-between relative overflow-hidden group shadow-xl"
            style={{ backgroundColor: colors.darkOrange }}
            {...fadeInUp}
          >
            <div className="relative z-10">
               <Compass className="w-10 h-10 text-white/30 mb-6 group-hover:rotate-45 transition-transform duration-700" />
               <h4 className="text-white font-serif text-3xl leading-tight mb-4">See the Ascent <br/> for Yourself</h4>
               <p className="text-white/70 text-sm font-medium leading-relaxed">
                 Walk through the corridors of Kishori Heights and feel the spirit of active living.
               </p>
            </div>

            {/* UPDATED BUTTON WITH ONCLICK */}
            <button 
              onClick={scrollToContact}
              className="relative z-10 w-full py-5 rounded-2xl bg-white text-[11px] font-black uppercase tracking-widest transition-all hover:bg-[#fafafa] hover:scale-[1.02] shadow-xl active:scale-95"
              style={{ color: colors.blackish }}
            >
              Book a Site Visit
            </button>

            <div className="absolute -bottom-10 -right-10 opacity-10">
               <Building className="w-48 h-48 text-white" />
            </div>
          </motion.div>

          {/* Feature Image Card */}
          <motion.div 
            className="md:col-span-5 h-[450px] rounded-[3.5rem] overflow-hidden relative group shadow-xl"
            {...fadeInUp}
          >
            <img 
              src="/final.png" 
              alt="Architecture" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-10 left-10 flex items-center gap-4">
               <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <Sparkles className="w-5 h-5 text-white" />
               </div>
               <p className="text-white font-serif text-2xl italic">Masterpiece <br/> Landmark</p>
            </div>
          </motion.div>

          {/* Milestones Card */}
          <motion.div 
            className="md:col-span-7 p-10 lg:p-14 bg-white rounded-[3.5rem] border border-gray-100 shadow-xl flex flex-col justify-between"
            {...fadeInUp}
          >
            <div>
               <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">The Subham Portfolio</p>
               <div className="flex flex-wrap gap-2">
                 {completedProjects.map((project, idx) => (
                   <span 
                     key={idx} 
                     className="px-5 py-2.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-default"
                     style={{ backgroundColor: "#ffffff", borderColor: `${colors.blackish}10`, color: colors.blackish }}
                     onMouseEnter={(e) => { e.target.style.backgroundColor = colors.blackish; e.target.style.color = "white"; }}
                     onMouseLeave={(e) => { e.target.style.backgroundColor = "#ffffff"; e.target.style.color = colors.blackish; }}
                   >
                     {project}
                   </span>
                 ))}
                 <span className="px-5 py-2.5 rounded-full text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg" style={{ backgroundColor: colors.mediumOrange }}>
                   Solitaire <ExternalLink className="w-3 h-3" />
                 </span>
               </div>
            </div>
            
            <div className="mt-12 flex items-center justify-between opacity-40">
               <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest">
                  <MapPin className="w-4 h-4" /> GS ROAD, GUWAHATI
               </div>
               <div className="w-12 h-[1px] bg-black/20" />
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: COPYRIGHT BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t gap-8" style={{ borderTopColor: `${colors.blackish}10` }}>
          <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
            <span>© 2026 Subham Group</span>
            <span>Trust · Innovation · Relationships</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 px-10 py-5 rounded-full text-white shadow-2xl transition-all duration-300 group hover:scale-105"
            style={{ backgroundColor: colors.blackish }}
          >
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: colors.brightOrange }}>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}