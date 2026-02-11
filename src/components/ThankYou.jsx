"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin, ExternalLink, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSubham() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          
          {/* Main Story Card with Integrated Logo */}
          <motion.div 
            className="md:col-span-8 p-10 lg:p-16 rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[500px]"
            style={{ backgroundColor: colors.blackish }}
            {...fadeInUp}
          >
            {/* Logo placement at the top of the card */}
            <div className="relative z-10 mb-12">
               <img 
                 src="https://subhamgroup.com/img/subham-logo.png" 
                 alt="Subham Group" 
                 className="h-10 md:h-14 w-auto object-contain" 
               />
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                Since 2007, Subham Group has defined excellence in Guwahati. Known for innovations and 
                time-bound delivery, we treat every project as a promise of quality.
              </p>
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                    <Award className="w-7 h-7" style={{ color: colors.brightOrange }} />
                 </div>
                 <p className="text-sm font-bold uppercase tracking-widest text-white/50">
                    Guwahati's Benchmark in Residential Quality
                 </p>
              </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2A71D]/5 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:bg-[#F2A71D]/10 transition-all duration-1000" />
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            className="md:col-span-4 p-12 rounded-[3.5rem] border-2 bg-white flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group"
            style={{ borderColor: `${colors.blackish}08` }}
            {...fadeInUp}
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: colors.darkOrange }}>Reach Us</h4>
            <div className="space-y-6">
              <a href="tel:+919854043000" className="block text-3xl font-bold tracking-tighter hover:scale-105 transition-transform origin-left" style={{ color: colors.blackish }}>
                +91 9854043000
              </a>
              <a href="mailto:marketing@subhamgroup.com" className="block text-sm font-bold border-b-2 w-fit transition-all hover:opacity-70" style={{ borderBottomColor: colors.brightOrange }}>
                marketing@subhamgroup.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-40">
               <MapPin className="w-4 h-4" /> GS ROAD, GUWAHATI
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
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12">
               <p className="text-white font-serif text-3xl italic">Visionary Architecture</p>
            </div>
          </motion.div>

          {/* Milestones Card */}
          <motion.div 
            className="md:col-span-7 p-10 lg:p-14 bg-white rounded-[3.5rem] border border-gray-100 shadow-xl flex flex-col justify-between"
            {...fadeInUp}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-30">Completed Milestones</p>
            <div className="flex flex-wrap gap-2">
              {completedProjects.map((project, idx) => (
                <span 
                  key={idx} 
                  className="px-5 py-2 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-default"
                  style={{ backgroundColor: "#fafafa", borderColor: `${colors.blackish}10`, color: colors.blackish }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = colors.blackish; e.target.style.color = "white"; }}
                  onMouseLeave={(e) => { e.target.style.backgroundColor = "#fafafa"; e.target.style.color = colors.blackish; }}
                >
                  {project}
                </span>
              ))}
              <span className="px-5 py-2 rounded-full text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg animate-pulse" style={{ backgroundColor: colors.mediumOrange }}>
                Subham Solitaire (Agartala) <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: COPYRIGHT BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t gap-8" style={{ borderTopColor: `${colors.blackish}10` }}>
          <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
            <span>© 2026 Subham Group</span>
            <span className="hidden lg:block">Trust · Innovation · Relationships</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 px-10 py-5 rounded-full text-white shadow-2xl transition-all duration-300 group hover:scale-105 active:scale-95"
            style={{ backgroundColor: colors.blackish }}
          >
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: colors.brightOrange }}>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-2 transition-transform" />
          </button>
        </div>
        
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}