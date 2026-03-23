"use client";

import React from "react";
import { ArrowUp, MapPin, ExternalLink, Award, Zap, Compass, Sparkles, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSubham() {
  const [selectedLocation, setSelectedLocation] = React.useState("GS ROAD, GUWAHATI");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    { name: "Subham Enclave", location: "Hatigaon, Residential" },
    { name: "Subham Park View", location: "Fatasil, Residential" },
    { name: "Subham Heights", location: "Kahilipara, Residential" },
    { name: "Subham Classic", location: "Ambikagiri Nagar, Residential" },
    { name: "Subham Residency", location: "Kharguli, Residential" },
    { name: "Subham Regency", location: "Hengrabari, Residential" },
    { name: "Subham Elite", location: "Gandhibasti, Residential" },
    { name: "Subham Manjushree", location: "Datalpara, Residential" },
    { name: "Subham Sapphire", location: "Nalapara, Residential" },
    { name: "Subham Garden", location: "Kalapahar, Residential cum Commercial" },
    { name: "Subham Greens", location: "Lokhra, Residential cum Commercial" },
    { name: "Subham Buildwell", location: "Zoo Road,Residential cum Commercial" },
    { name: "Subham Velocity", location: "G.S Road, Commercial" },
    { name: "Subham Redstone", location: "Downtown, Commercial" },
    { name: "Subham Square", location: "Lokhra, Commercial" },
    { name: "Bijay Crescent", location: "Pibco, Commercial" }
  ];

  const ongoingProjects = [
    { name: "Subham Garden", location: "Jorhat, Residential" },
    { name: "Subham Solitaire", location: "Agartala, Residential cum Commercial" },
    { name: "Subham Ashray", location: "Near Airport, Guwahati; Residential" },
    { name: "Subham Park", location: "Bongaigaon, Residential" },
    { name: "Subham Park", location: "Jorhat, Residential" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer id="aboutus"className="w-full bg-[#fafaf8] pt-12 pb-4 lg:pt-16 lg:pb-6 font-sans text-[#041a14]">
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
              Time-Bound Projects and Timeless <span className="italic font-light" style={{ color: colors.darkOrange }}>Relationships</span>
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
                 src="/logo4.png" 
                 alt="Subham Group" 
                 className="h-16 md:h-24 w-auto object-contain brightness-150" 
               />
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-tight">
                "We don't just build structures; <br/> we curate lifestyles."
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                Since 2007, Subham Group has been the silent force behind Assam’s skyline, 
                blending architectural bravery with the warmth of a home.
              </p>
            </div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2A71D]/5 rounded-full blur-[120px] -mr-32 -mt-32 group-hover:bg-[#F2A71D]/10 transition-all duration-1000" />
          </motion.div>

          {/* PREMIUM "EXPERIENCE" CARD (ORANGE CARD) */}
          <motion.div 
            className="md:col-span-4 p-10 rounded-[3.5rem] flex flex-col justify-between relative overflow-hidden group shadow-xl"
            style={{ backgroundColor: colors.darkOrange }}
            {...fadeInUp}
          >
            <div className="relative z-10">
               <Compass className="w-10 h-10 text-white/30 mb-6 group-hover:rotate-45 transition-transform duration-700" />
               <h4 className="text-white font-serif text-3xl leading-tight mb-10">Awarded 'Most Trusted Developer'- Northeast India</h4>
               
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-serif italic font-bold text-white">10+</span>
                    <span className="text-lg font-medium text-white/90">Years of Expertise</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-serif italic font-bold text-white">5</span>
                    <span className="text-lg font-medium text-white/90">Ongoing Projects</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-serif italic font-bold text-white">16+</span>
                    <span className="text-lg font-medium text-white/90">Completed Projects</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Milestones Card */}
          <motion.div 
            className="md:col-span-12 p-10 lg:p-14 bg-white rounded-[3.5rem] border border-gray-100 shadow-xl flex flex-col justify-between"
            {...fadeInUp}
          >
            <div>
               <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">The Subham Portfolio</p>
               
               <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40">Completed</p>
               <div className="flex flex-wrap gap-2 mb-6">
                {completedProjects.map((project, idx) => (
                  <span
                    key={idx}
                    onClick={() => setSelectedLocation(project.location)}
                    className="px-5 py-2.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                    style={{ backgroundColor: "#ffffff", borderColor: `${colors.blackish}10`, color: colors.blackish }}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = colors.blackish; e.target.style.color = "white"; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = "#ffffff"; e.target.style.color = colors.blackish; }}
                  >
                    {project.name}
                  </span>
                ))}
               </div>

                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40">Ongoing</p>
                <div className="flex flex-wrap gap-2">
                {ongoingProjects.map((project, idx) => (
                  <span
                    key={idx}
                    onClick={() => setSelectedLocation(project.location)}
                    className="px-5 py-2.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                    style={{ backgroundColor: "#ffffff", borderColor: `${colors.blackish}10`, color: colors.blackish }}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = colors.blackish; e.target.style.color = "white"; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = "#ffffff"; e.target.style.color = colors.blackish; }}
                  >
                    {project.name}
                  </span>
                ))}
                </div>
            </div>
            
            <div className="mt-12 flex items-center justify-between opacity-40">
               <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest">
                  <MapPin className="w-4 h-4" /> {selectedLocation}
               </div>
               <div className="w-12 h-[1px] bg-black/20" />
            </div>
          </motion.div>
        </div>

        {/* --- UPDATED FOOTER SECTION (Ref: image_58fa63.png) --- */}
        <div className="mt-20 flex flex-col items-center text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <img 
              src="/Subham_Logo (1).png" 
              alt="Subham Group" 
              className="h-16 md:h-20 w-auto object-contain mx-auto mb-2" 
            />
            <p className="text-[9px] font-black uppercase tracking-[0.5em] opacity-40">Building Lifestyles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl pb-16">
            {/* Site Address */}
            <motion.div {...fadeInUp} className="flex flex-col items-center space-y-3">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Site Address</h5>
              <p className="text-[12px] font-bold leading-relaxed uppercase tracking-wider opacity-70">
                Seujpur<br/>
                Dibrugarh, Assam<br/>
                Pin — 786001
              </p>
            </motion.div>

            {/* Corporate Office */}
            <motion.div {...fadeInUp} className="flex flex-col items-center space-y-3">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Corporate Address</h5>
              <p className="text-[12px] font-bold leading-relaxed uppercase tracking-wider opacity-70">
                Subham Infra, Subham Velocity<br/>
                5th Floor, Honuram Boro Path<br/>
                GS Road, Guwahati<br/>
                Pin — 781005
              </p>
            </motion.div>

            {/* RERA Number */}
            <motion.div {...fadeInUp} className="flex flex-col items-center space-y-3">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">RERA Number</h5>
              <p className="text-[12px] font-bold leading-relaxed uppercase tracking-wider opacity-70">
                RERAA DI 102 of 2025-2026<br/>
                
              </p>
            </motion.div>
          </div>

          
          {/* <div className="w-full pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-[9px] font-black uppercase tracking-[0.3em]" style={{ borderTopColor: `${colors.blackish}10` }}>
            <span>© 2026 Subham Group</span>
            <span>Trust · Innovation · Relationships</span>
          </div> */}
        </div>
        
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}