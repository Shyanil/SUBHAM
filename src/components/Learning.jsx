import React from "react";
import { 
  Users, 
  Coins, 
  LineChart, 
  Laptop, 
  FileCheck, 
  HeartHandshake,
  Zap 
} from "lucide-react";
// Ensure this path matches your file structure
import featureStudent from "../assets/smiling-student-with-laptop.jpg"; 

const features = [
  {
    id: 1,
    title: "Offline & Instructor-Led",
    text: "Learn directly from experts in a physical classroom environment.",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-[#3F348F]", // Purple
    position: "left"
  },
  {
    id: 2,
    title: "Live Ad Budgets",
    text: "Don't just simulate. Run real ads with real money provided by us.",
    icon: <Coins className="w-6 h-6 text-white" />,
    color: "bg-[#2563EB]", // Royal Blue
    position: "left"
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    text: "Analyze live data to understand attribution and ROI deeply.",
    icon: <LineChart className="w-6 h-6 text-white" />,
    color: "bg-[#FFC500]", // Yellow
    position: "left"
  },
  {
    id: 4,
    title: "Hands-on Exercises",
    text: "80% practical work. Build funnels and campaigns in class.",
    icon: <Laptop className="w-6 h-6 text-white" />,
    color: "bg-[#3F348F]", // Purple
    position: "right"
  },
  {
    id: 5,
    title: "Assignments & Feedback",
    text: "Get your campaign structures reviewed personally by mentors.",
    icon: <FileCheck className="w-6 h-6 text-white" />,
    color: "bg-[#2563EB]", // Royal Blue
    position: "right"
  },
  {
    id: 6,
    title: "Community & Support",
    text: "Lifetime access to our alumni network and placement support.",
    icon: <HeartHandshake className="w-6 h-6 text-white" />,
    color: "bg-[#FFC500]", // Yellow
    position: "right"
  }
];

export default function LearningExperience() {
  return (
    <section id = 'learning' className="relative w-full py-20 bg-[#FDFCFE] overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      {/* 1. The Wavy S-Curve Line */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M-100 200 C 200 200, 400 0, 720 450 C 1040 900, 1240 700, 1540 700" stroke="#EADDFF" strokeWidth="80" strokeLinecap="round" />
      </svg>
      
      {/* 2. Plus Sign Pattern */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#3F348F 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADING (Updated Style) --- */}
        <div className="text-center mb-16 md:mb-24">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#3F348F] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <Zap className="w-4 h-4 fill-current" />
             The Learning Methodology
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
             <span className="font-light text-slate-600">Experience the</span> <br/>
             <span className="font-bold text-[#3F348F]">
               Difference
             </span>
          </h2>

          {/* Paragraph */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
            We moved beyond theory. The gap between online courses and industry demands is huge—here is how we bridge it.
          </p>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* LEFT COLUMN (Points 1-3) */}
          <div className="flex flex-col gap-10 order-2 lg:order-1">
            {features.filter(f => f.position === 'left').map((feature) => (
              <div key={feature.id} className="relative group">
                <div className="relative bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-purple-50 hover:-translate-y-1 transition-transform duration-300 text-center lg:text-right flex flex-col items-center lg:items-end z-10">
                  
                  {/* Floating Icon Badge */}
                  <div className={`absolute -top-6 left-1/2 lg:left-auto lg:-right-4 transform -translate-x-1/2 lg:translate-x-0 w-12 h-12 rounded-full ${feature.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#3F348F] mt-4 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ======================================================= */}
          {/* CENTER COLUMN (Image with HeroSection Design Applied) */}
          {/* ======================================================= */}
          <div className="relative order-1 lg:order-2 py-8 lg:py-0 z-20">
            {/* Container to constrain width on large screens and provide group hover */}
            <div className="relative w-full max-w-md mx-auto group transform transition-transform duration-500 hover:-translate-y-2">
               
               {/* Offset Border Decoration (Purple to match theme) */}
               <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#3F348F] rounded-[2.5rem] z-0 opacity-20"></div>
               
               {/* Main Image - Taller, deeply curved, object-cover */}
               <img 
                 src={featureStudent} 
                 alt="Happy Student" 
                 className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-xl grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
               />

            </div>
          </div>
          {/* ======================================================= */}

          {/* RIGHT COLUMN (Points 4-6) */}
          <div className="flex flex-col gap-10 order-3">
             {features.filter(f => f.position === 'right').map((feature) => (
              <div key={feature.id} className="relative group">
                <div className="relative bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-purple-50 hover:-translate-y-1 transition-transform duration-300 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
                  
                  {/* Floating Icon Badge */}
                  <div className={`absolute -top-6 left-1/2 lg:left-auto lg:-left-4 transform -translate-x-1/2 lg:translate-x-0 w-12 h-12 rounded-full ${feature.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#3F348F] mt-4 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}