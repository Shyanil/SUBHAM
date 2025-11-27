import React from "react";
import { ArrowRight, CheckCircle, Award, Users, MonitorPlay } from "lucide-react"; 
// Ensure these paths match your actual folder structure
import studentMale from "../assets/hero_section_boy.jpg"; 
import studentFemale from "../assets/hero_section_girl.jpg";

export default function HeroSection() {
  return (
    // 1. UPDATED: Background color reverted to #faeef4
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#faeef4] px-6 md:px-12 lg:px-24 py-24">
      
      {/* --- REFINED BACKGROUND ELEMENTS --- */}
      {/* 2. UPDATED: Grid lines changed to soft purple (visible on light bg) */}
      <div className="absolute inset-0 opacity-[0.3]" 
           style={{ 
             backgroundImage: 'linear-gradient(#e9d5ff 1px, transparent 1px), linear-gradient(90deg, #e9d5ff 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>
      
      {/* 3. UPDATED: Orbs changed to soft pinks/whites to blend with #faeef4 */}
      <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-[#fce7f3] rounded-full blur-[100px] opacity-60"></div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-[90rem] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* --- LEFT IMAGE (The Outcome) --- */}
        <div className="hidden lg:block lg:col-span-3 relative group">
          <div className="relative mt-4 transform transition-transform duration-500 hover:-translate-y-2">
            {/* Elegant thin border offset - PURPLE */}
            <div className="absolute top-3 -left-3 w-full h-full border border-[#3F348F] rounded-2xl z-0 opacity-20"></div>
            
            <img 
              src={studentFemale} 
              alt="Professional Student" 
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-sm z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Badge: Left Side */}
            <div className="absolute -bottom-5 -right-5 bg-white px-5 py-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-purple-50 flex items-center gap-3 z-20">
               <div className="bg-purple-50 p-2 rounded-full text-[#3F348F]">
                 <Award className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Certified</p>
                 <p className="text-sm font-bold text-slate-800">Industry Ready</p>
               </div>
            </div>
          </div>
        </div>

        {/* --- CENTER TEXT CONTENT --- */}
        <div className="col-span-1 lg:col-span-6 text-center">
          
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm text-xs font-bold text-[#3F348F]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0065] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0065]"></span>
            </span>
            New Offline Batches Starting Soon
          </div>

          {/* Typography - Dark text for light background */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
            <span className="font-light text-slate-600">Shape Your</span> <br/>
            <span className="font-bold text-[#3F348F]">
               Professional Career
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed font-light mb-10">
            Master the skills that matter. Our specialized offline tracks are designed to take you from beginner to industry-expert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="min-w-[160px] px-8 py-4 bg-[#3F348F] text-white font-medium text-base rounded-full hover:bg-[#322a72] transition-all transform hover:scale-105 shadow-lg shadow-purple-900/10 flex items-center justify-center gap-2">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="min-w-[160px] px-8 py-4 bg-white text-slate-600 border border-slate-200 font-medium text-base rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              Talk to Expert
            </button>
          </div>

          {/* ======================================================= */}
          {/* STATS CARDS */}
          {/* ======================================================= */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Card 1 */}
            <div className="bg-white/60 backdrop-blur-md border border-white p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
              <div className="text-[#3F348F] mb-3 p-3 bg-purple-50 rounded-full group-hover:scale-110 transition-transform">
                 <MonitorPlay className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">3 Specialized</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Mastery Tracks</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 backdrop-blur-md border border-white p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
               <div className="text-[#FF0065] mb-3 p-3 bg-pink-50 rounded-full group-hover:scale-110 transition-transform">
                 <CheckCircle className="w-6 h-6" />
               </div>
              <h4 className="text-lg font-bold text-slate-800">100% Practical</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Project Learning</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 backdrop-blur-md border border-white p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
               <div className="text-[#3F348F] mb-3 p-3 bg-purple-50 rounded-full group-hover:scale-110 transition-transform">
                 <Users className="w-6 h-6" />
               </div>
              <h4 className="text-lg font-bold text-slate-800">1-on-1</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Expert Mentorship</p>
            </div>

          </div>
        </div>

        {/* --- RIGHT IMAGE (The Process) --- */}
        <div className="hidden lg:block lg:col-span-3 relative mt-12 lg:mt-0 group">
           <div className="relative mt-4 transform transition-transform duration-500 hover:-translate-y-2">
            {/* Elegant thin border offset - PINK */}
            <div className="absolute top-3 -right-3 w-full h-full border border-[#FF0065] rounded-2xl z-0 opacity-20"></div>
            
            <img 
              src={studentMale} 
              alt="Lab Work" 
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-sm z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Small card on the Right Image */}
            <div className="absolute -bottom-5 -left-5 bg-white px-5 py-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-blue-50 flex items-center gap-3 z-20">
               <div className="bg-blue-50 p-2 rounded-full text-blue-600">
                 <Users className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Community</p>
                 <div className="flex items-center gap-1">
                    <p className="text-sm font-bold text-slate-800">500+ Students</p>
                 </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}