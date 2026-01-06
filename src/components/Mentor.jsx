import React from "react";
import { 
  Briefcase, 
  Award, 
  Globe, 
  Rocket, 
  Users, 
  GraduationCap,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";

// Replace with your actual image path
const mentorImg = "/image.png"; 

const experience = [
  {
    id: 1,
    role: "Founder & CEO",
    company: "SquashCode",
    period: "Mar 2017 – Present",
    location: "India",
    description: "Performance-driven digital marketing agency serving brands across India, UK, & SE Asia.",
    achievements: [
      "Reduced CPL by 30–50% for premium real estate.",
      "Scaled campaigns using proprietary 'Flying Ship Methodology'.",
      "Built end-to-end automation (WhatsApp, IVR, CRM)."
    ],
    icon: <Rocket className="w-5 h-5 text-white" />,
    color: "bg-[#3F348F]" 
  },
  {
    id: 2,
    role: "Mentor of Change",
    company: "Atal Innovation Mission (NITI Aayog)",
    period: "Nov 2022 – Present",
    location: "India",
    description: "Mentoring students across Atal Tinkering Labs under a national innovation initiative.",
    achievements: ["Fostering entrepreneurship & digital skills in youth."],
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    color: "bg-[#FFC500]" 
  },
  {
    id: 3,
    role: "Senior Marketing Consultant",
    company: "UK Remote (P&A, Pluxa, Cash Flow)",
    period: "Feb 2020 – Dec 2024",
    location: "United Kingdom (Remote)",
    description: "Led performance marketing & analytics for UK real estate and hospitality brands.",
    achievements: ["Improved lead quality & operational ROI.", "Managed multi-channel ad budgets."],
    icon: <Globe className="w-5 h-5 text-white" />,
    color: "bg-[#2563EB]" 
  },
  {
    id: 6,
    role: "Kolkata Convenor",
    company: "International Entrepreneurs Club (IEC)",
    period: "Jun 2020 – Present",
    location: "Kolkata",
    description: "Driving community growth, ethical business networking, and referrals.",
    achievements: [],
    icon: <Users className="w-5 h-5 text-white" />,
    color: "bg-[#FFC500]" 
  }
];

// Reusable Card Component
const ExperienceCard = ({ item }) => (
  <div className="relative group pl-0">
    <div className="relative bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 flex gap-5 items-start">
      
      {/* Icon Box */}
      <div className={`shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-md mt-1`}>
        {item.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-1">
          <h4 className="text-lg font-bold text-[#1a1a2e] leading-tight">{item.role}</h4>
          <span className="text-[10px] font-bold text-[#3F348F] bg-purple-50 px-2 py-1 rounded border border-purple-100 uppercase tracking-wide w-fit mt-2 xl:mt-0 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        
        <p className="text-sm font-semibold text-slate-600 mb-2 flex items-center gap-2 flex-wrap">
          {item.company}
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-slate-400 font-normal italic text-xs">{item.location}</span>
        </p>

        <p className="text-slate-500 text-sm leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Achievements List */}
        {item.achievements.length > 0 && (
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
              <ul className="space-y-1">
                {item.achievements.map((ach, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#3F348F] shrink-0"></span>
                    {ach}
                  </li>
                ))}
              </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function MentorSection() {
  return (
    <section id="mentor" className="relative w-full py-20 bg-[#FDFCFE] overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30 z-0">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M1540 200 C 1240 200, 1040 0, 720 450 C 400 900, 200 700, -100 700" stroke="#EADDFF" strokeWidth="80" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <Users className="w-4 h-4 fill-current" />
             Meet The Expert
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
             <span className="font-light text-slate-600">Guided by</span> <br/>
             <span className="font-bold text-[#3F348F]">Industry Leader</span>
          </h2>
        </div>

        {/* --- MAIN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Profile + Contact Info                       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. Main Profile Card */}
            <div className="relative group">
               {/* Offset Border Decoration */}
               <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#3F348F] rounded-[2.5rem] z-0 opacity-20 transition-all duration-500 group-hover:top-2 group-hover:-right-2"></div>
               
               <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-purple-50 z-10">
                 <div className="h-[380px] w-full overflow-hidden relative">
                    <img 
                      src={mentorImg} 
                      alt="Sagar Mondal" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#FFC500] p-2 rounded-lg">
                                <Award className="w-5 h-5 text-[#1a1a2e]" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Specialization</p>
                                <p className="text-sm font-bold text-[#3F348F]">Flying Ship Methodology</p>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                 <div className="p-8 pt-6 bg-white">
                    <h3 className="text-3xl font-bold text-[#1a1a2e]">Sagar Mondal</h3>
                    <p className="text-[#3F348F] font-semibold mb-4">Founder & CEO, SquashCode</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      "I don't just teach theory; I share the exact systems I use to generate qualified leads for clients across India and the UK."
                    </p>
                 </div>
               </div>
            </div>

            {/* 2. Contact / Skills Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-purple-50 z-10">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                    {["Performance Marketing", "Meta Ads", "Google Ads", "Real Estate", "Automation", "Startups"].map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium border border-slate-200">
                            {skill}
                        </span>
                    ))}
                </div>
                
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div className="flex gap-4">
                        <a 
                          href="https://www.linkedin.com/in/thedigitalksguy/?originalSubdomain=in" 
                          target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition">
                            <Linkedin className="w-4 h-4"/>
                        </a>
                        <a 
                          href="mailto:sagar@squashcode.com"
                          className="p-2 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100 transition">
                            <Mail className="w-4 h-4"/>
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <MapPin className="w-3 h-3" /> Kolkata, India
                    </div>
                </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Experience Cards (Clean List)               */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2 px-2">Career Roadmap</h3>
            
            {experience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}