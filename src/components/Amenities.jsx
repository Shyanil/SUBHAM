"use client";

import React from "react";
import { 
  Train, Plane, Hospital, School, 
  ShoppingBag, GraduationCap, Compass, 
  ArrowUpRight, Sparkles, Target, Zap
} from "lucide-react";

const Amenities = () => {
  const connectivityData = [
    {
      category: "Transport",
      icon: <Train className="w-6 h-6" />,
      items: [
        { name: "Dibrugarh Railway Station", dist: "3.4 km" },
        { name: "ASTC Bus Stand", dist: "4.4 km" },
        { name: "Dibrugarh Airport", dist: "13 km" },
      ],
    },
    {
      category: "Healthcare",
      icon: <Hospital className="w-6 h-6" />,
      items: [
        { name: "Srishti Hospital", dist: "1.5 km" },
        { name: "Assam Medical College", dist: "3.5 km" },
        { name: "Dibrugarh Cancer Centre", dist: "3.8 km" },
      ],
    },
    {
      category: "Schools",
      icon: <School className="w-6 h-6" />,
      items: [
        { name: "Little Flower High School", dist: "1.1 km" },
        { name: "St. Mary’s High School", dist: "1.2 km" },
        { name: "DPS Dibrugarh", dist: "9.7 km" },
      ],
    },
    {
      category: "University",
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        { name: "DHSK College", dist: "850 m" },
        { name: "St. Fernando Nursing", dist: "3.1 km" },
        { name: "Dibrugarh University", dist: "7.2 km" },
      ],
    },
    {
      category: "Leisure",
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        { name: "Smart Shopping Mall", dist: "01 km" },
        { name: "Zudio", dist: "2.3 km" },
        { name: "Junction Mall", dist: "03 km" },
      ],
    },
    {
      category: "Attractions",
      icon: <Compass className="w-6 h-6" />,
      items: [
        { name: "Sri Jagannath Temple", dist: "Nearby" },
        { name: "Brahmaputra Point", dist: "Walking" },
        { name: "Tea Garden", dist: "Scenic" },
      ],
    },
  ];

  return (
    <section id="amenities" className="relative w-full bg-[#fafaf8] py-24 lg:py-40 overflow-hidden font-sans text-[#062c22]">
      
      {/* --- REAL COLOR ASSET: TOP RIGHT --- */}
      <div className="absolute -right-10 -top-10 w-[280px] md:w-[380px] pointer-events-none z-20 select-none">
        <img src="/profile_2.png" alt="Architecture" className="w-full h-auto object-contain drop-shadow-2xl" />
      </div>

      {/* --- SMALL VECTOR DECOR --- */}
      <div className="absolute right-[15%] top-[20%] opacity-20 animate-pulse">
        <Target className="w-8 h-8 text-[#0a4d3c]" />
      </div>
      <div className="absolute left-[10%] bottom-[30%] opacity-20 animate-bounce">
        <Zap className="w-6 h-6 text-[#e3f988]" />
      </div>

      {/* --- REAL COLOR ASSET: BOTTOM LEFT --- */}
      {/* Positioned to avoid text overlap while remaining vibrant */}
      <div className="absolute -left-12 -bottom-12 w-[250px] md:w-[350px] pointer-events-none z-0 select-none rotate-6">
        <img src="/profile_1.png" alt="Design Element" className="w-full h-auto drop-shadow-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="relative mb-32">
          <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.5em] text-[#0a4d3c] mb-8">
            <Sparkles className="w-4 h-4 text-[#e3f988] animate-spin-slow" />
            Strategic Connectivity
          </div>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.85] text-[#062c22] mb-12">
            In the Heart of <br />
            <span className="italic font-light text-[#0a4d3c]">Everything.</span>
          </h2>
          <div className="max-w-xl border-l-4 border-[#e3f988] pl-8">
              <p className="text-[#062c22]/70 text-lg md:text-xl font-medium leading-relaxed">
                  Subham Kishori Heights is strategically located in Dibrugarh, offering 
                  effortless access to premier education, healthcare, and transport hubs.
              </p>
          </div>
        </div>

        {/* --- CONNECTIVITY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {connectivityData.map((section, idx) => (
            <div key={idx} className="group relative">
              {/* Decorative Number Watermark */}
              <span className="absolute -left-6 -top-10 text-9xl font-serif italic text-[#062c22]/5 select-none transition-all duration-700 group-hover:text-[#e3f988]/30 group-hover:-translate-y-2">
                0{idx + 1}
              </span>

              <div className="relative bg-white/40 backdrop-blur-sm p-8 rounded-[3rem] border border-transparent hover:border-[#e3f988]/50 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-[#062c22]/10 pb-6">
                  <div className="w-14 h-14 rounded-full bg-[#062c22] text-[#e3f988] flex items-center justify-center shadow-xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                    {section.icon}
                  </div>
                  <h3 className="font-serif text-3xl italic">{section.category}</h3>
                </div>

                <ul className="space-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex flex-col gap-2 group/item">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold tracking-tight text-[#062c22]/80 group-hover/item:text-[#062c22] transition-colors">
                            {item.name}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0a4d3c] bg-[#e3f988] px-3 py-1 rounded-md shadow-sm">
                          {item.dist}
                        </span>
                      </div>
                      <div className="w-full h-[1px] bg-[#062c22]/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-0 bg-[#e3f988] transition-all duration-1000 ease-out group-hover:w-full" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Amenities;