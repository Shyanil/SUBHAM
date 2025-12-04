import React from "react";
import { 
  Briefcase, 
  Target, 
  MapPin, 
  DollarSign, 
  FolderOpen, 
  Zap,
  TrendingUp,
  Trophy
} from "lucide-react";

// Using the working Unsplash URL
const mentorshipImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";

const features = [
  {
    id: 1,
    icon: <Briefcase strokeWidth={1.5} />,
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-200",
    accent: "bg-purple-500",
    title: "Industry Veterans Only",
    desc: "No academic trainers. Learn directly from experts with 10+ years in the field."
  },
  {
    id: 2,
    icon: <Target strokeWidth={1.5} />,
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-200",
    accent: "bg-pink-500",
    title: "Active Campaign Specialists",
    desc: "Our mentors are currently running profitable campaigns, not just teaching theory."
  },
  {
    id: 3,
    icon: <MapPin strokeWidth={1.5} />,
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-200",
    accent: "bg-purple-500",
    title: "Immersive Offline Hub",
    desc: "High-energy physical workspace designed for collaboration and deep work."
  },
  {
    id: 4,
    icon: <DollarSign strokeWidth={1.5} />,
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-200",
    accent: "bg-pink-500",
    title: "Real Budgets & Accounts",
    desc: "Don't just simulate. Gain access to live ad accounts and manage real spend."
  },
  {
    id: 5,
    icon: <FolderOpen strokeWidth={1.5} />,
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-200",
    accent: "bg-purple-500",
    title: "Portfolio-Based Learning",
    desc: "Graduate with a tangible portfolio of live projects to show employers."
  },
  {
    id: 6,
    icon: <Zap strokeWidth={1.5} />,
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-200",
    accent: "bg-pink-500",
    title: "Action Over Theory",
    desc: "We prioritize execution. 80% of your time is spent doing, not just listening."
  },
];

export default function WhyChooseUs() {
  return (
    <section id = "why" className="py-24 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: CONTENT & CARDS --- */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            {/* Header Section */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#3F348F] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                  <Trophy className="w-4 h-4" />
                  The SquashCode Edge
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
                <span className="font-light text-slate-600">Why Choose Us?</span> <br/>
                <span className="font-bold text-[#3F348F]">
                Real Skills. Real World.
                </span>
                </h2>

              <p className="text-lg text-slate-500 max-w-xl font-normal leading-relaxed">
                The gap between online courses and industry demands is huge. We built SquashCode Academy to bridge that gap with an uncompromising practical approach.
              </p>
            </div>

            {/* --- PREMIUM CARDS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="group relative bg-[#FAF9FF] p-6 rounded-[20px] border border-white hover:border-purple-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(63,52,143,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  
                  {/* Left Accent Bar */}
                  <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full ${feature.accent} opacity-30 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-5 mb-4">
                    {/* Big Premium Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {/* Scaled up Icon */}
                      <div className="w-7 h-7">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#1a1a2e] leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed pl-1">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: STICKY IMAGE --- */}
          {/* UPDATED: Added lg:top-32 (more stick offset) and lg:mt-16 (margin top) to push image down */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 lg:mt-[200px]">
            <div className="relative group">
              {/* Back Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden border-[8px] border-white shadow-2xl z-10">
                <img 
                  src={mentorshipImage} 
                  alt="SquashCode Mentors" 
                  className="w-full h-[600px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Floating Below/Overlapping the Image */}
              <div className="absolute -bottom-10 -left-6 z-20 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-50 flex items-center gap-4 animate-bounce-slow max-w-[280px]">
                 <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <TrendingUp className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Career Growth</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-800">120%</span>
                      <span className="text-xs font-bold text-green-600">Avg. Hike</span>
                    </div>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}