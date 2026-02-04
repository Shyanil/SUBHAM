import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, Ruler, BedDouble, Bath } from 'lucide-react';

const FloorPlanGallery = () => {
  const [activeTab, setActiveTab] = useState('3bhk');

  const plans = {
    '3bhk': {
      title: "The Signature 3 BHK",
      tag: "SPACIOUS & VAASTU COMPLIANT",
      desc: "Designed with clean vertical lines and space efficiency, ensuring natural light flows into every corner of your home.",
      sqft: "1850 - 2100 Sq. Ft.",
      features: ["3 Bedrooms", "3 Bathrooms", "2 Balconies", "Pooja Room"],
      image: "https://www.genesisstudios.com/wp-content/uploads/2018/12/616116-Architectural_Resources-St_Claire-Floor_Plan_3.jpg"
    },
    '4bhk': {
      title: "The Elite 4 BHK",
      tag: "PREMIUM CORNER UNITS",
      desc: "An icon of active living, featuring expansive balconies and well-lit façades for panoramic urban views.",
      sqft: "2450 - 2800 Sq. Ft.",
      features: ["4 Bedrooms", "4 Bathrooms", "3 Balconies", "Staff Quarter"],
      image: "https://www.genesisstudios.com/wp-content/uploads/2023/01/921499-Fairbrook-Communities-Flamingo-Bay-1.jpg"
    },
    'duplex': {
      title: "The Grand Duplex",
      tag: "BEYOND THE ORDINARY",
      desc: "The pinnacle of Subham Kishori Heights. Double-height ceilings and exclusive layouts for a truly active lifestyle.",
      sqft: "3500+ Sq. Ft.",
      features: ["5 Bedrooms", "Double Height Living", "Private Terrace", "Home Theatre Room"],
      image: "https://www.genesisstudios.com/wp-content/uploads/2018/12/616116-Architectural_Resources-St_Claire-Floor_Plan_3.jpg"
    }
  };

  return (
    <section id="plans" className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans text-[#062c22]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0a4d3c] mb-4 block">Architectural Excellence</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              Thoughtful Spaces <br/> 
              <span className="italic font-light text-[#0a4d3c]">Designed for Life.</span>
            </h2>
          </div>
          
          {/* TABS */}
          <div className="flex bg-[#f7f8f2] p-2 rounded-full border border-gray-100">
            {Object.keys(plans).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                  activeTab === key ? 'bg-[#062c22] text-[#e3f988] shadow-lg' : 'text-[#062c22]/40 hover:text-[#062c22]'
                }`}
              >
                {key === '3bhk' ? '3 BHK' : key === '4bhk' ? '4 BHK' : 'Duplex'}
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN CONTENT DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE SIDE (Editorial Style) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-[4rem] overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src={plans[activeTab].image} 
                alt={plans[activeTab].title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/20">
                <Maximize2 className="w-5 h-5 text-[#0a4d3c]" />
                <span className="text-sm font-bold">{plans[activeTab].sqft}</span>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e3f988] rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-5 flex flex-col justify-center py-8">
            <span className="text-[10px] font-black tracking-widest text-[#0a4d3c] mb-4 uppercase opacity-60">
              {plans[activeTab].tag}
            </span>
            <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              {plans[activeTab].title}
            </h3>
            <p className="text-[#062c22]/70 text-lg leading-relaxed mb-10 border-l-2 border-[#e3f988] pl-6">
              {plans[activeTab].desc}
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-12">
              {plans[activeTab].features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f0f2e8] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0a4d3c]"></div>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-tight opacity-80">{feature}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-4 text-[#062c22] font-black uppercase text-xs tracking-[0.2em] group hover:text-[#0a4d3c] transition-colors">
              Request Full Layout <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanGallery;