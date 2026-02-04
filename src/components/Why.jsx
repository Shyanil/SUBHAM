import React from 'react';
import { ArrowUpRight, Building2, Activity, Users, Heart, Sparkles, MapPin } from 'lucide-react';

const ActiveLivingShowcase = () => {
  return (
    <section className="w-full bg-[#fafaf8] py-24 px-6 md:px-12 lg:px-24 font-sans text-[#062c22]">
      
      {/* --- HERO PHILOSOPHY SECTION --- */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#062c22]/5 text-[#062c22] text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-[#062c22]/10">
            <MapPin className="w-3 h-3" /> Dibrugarh, Assam
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] mb-8">
            Subham <br />
            <span className="italic font-light text-[#0a4d3c]">Kishori</span> Heights
          </h1>
          
          <p className="text-xl md:text-2xl text-[#062c22]/60 italic font-medium max-w-2xl">
            "An icon that stands tall in the spirit of active living."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between border-t border-[#062c22]/10 pt-16">
          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Step into a world designed to <span className="text-[#0a4d3c] italic">energize</span> every moment.
            </h2>
          </div>
          <div className="lg:w-1/3 flex lg:justify-end">
            <button className="group flex items-center gap-4 bg-[#062c22] text-[#e3f988] px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300">
              Free Planning Consult <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MULTI-GENERATIONAL FOCUS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
          { 
            title: "For Children", 
            tag: "ENERGY & PLAY",
            desc: "Designed to spark movement and physical growth through active, purposeful play environments.",
            icon: <Sparkles className="w-6 h-6" />,
            bg: "bg-white border border-gray-100" 
          },
          { 
            title: "For Families", 
            tag: "COMMUNITY BONDING",
            desc: "Space efficiency and open panoramic views to nurture modern community living and relationships.",
            icon: <Users className="w-6 h-6" />,
            bg: "bg-[#062c22] text-white shadow-2xl scale-105 z-10" 
          },
          { 
            title: "For Seniors", 
            tag: "WELLNESS & CALM",
            desc: "Emotional grounding and calm aesthetics curated for a healthy, dignified, and energetic lifestyle.",
            icon: <Heart className="w-6 h-6" />,
            bg: "bg-[#e3f988]" 
          }
        ].map((item, idx) => (
          <div key={idx} className={`${item.bg} rounded-[4rem] p-12 flex flex-col h-[420px] justify-between group transition-all duration-500`}>
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
              {item.icon}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-3 block">{item.tag}</span>
              <h3 className="font-serif text-4xl mb-6">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-70 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- ARCHITECTURAL VISION --- */}
      <div className="relative rounded-[5rem] overflow-hidden h-[700px] group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Subham Kishori Heights Architecture" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062c22] via-[#062c22]/20 to-transparent opacity-80"></div>
        
        <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <div className="w-20 h-1 bg-[#e3f988] mb-8"></div>
              <h3 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">Architecture <br/> <span className="italic font-light text-[#e3f988]">in Harmony</span></h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Modern high-rise towers with clean vertical lines and well-lit façades. 
                Thoughtful space planning ensures natural light and open views for all 
                exclusive residences.
              </p>
            </div>
            
            <div className="flex gap-6 w-full lg:w-auto">
               <div className="flex-1 lg:flex-none bg-white/10 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/20 text-white text-center min-w-[160px]">
                  <Building2 className="w-8 h-8 mx-auto mb-4 text-[#e3f988]" />
                  <p className="text-[10px] font-black tracking-widest uppercase opacity-60 mb-1">Structure</p>
                  <p className="text-xl font-serif">2 Towers</p>
               </div>
               <div className="flex-1 lg:flex-none bg-white/10 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/20 text-white text-center min-w-[160px]">
                  <Activity className="w-8 h-8 mx-auto mb-4 text-[#e3f988]" />
                  <p className="text-[10px] font-black tracking-widest uppercase opacity-60 mb-1">Density</p>
                  <p className="text-xl font-serif">Exclusive</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveLivingShowcase;