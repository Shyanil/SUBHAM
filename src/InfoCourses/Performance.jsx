import React, { useState } from "react";
import { 
  Star, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Award, 
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  BookOpen,
  Zap,
  FileText,
  School,
  ArrowRight
} from "lucide-react";

// Import your actual Header and Footer components
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- CURRICULUM DATA ---
const curriculum = [
  {
    title: "Module 1: Foundations of Performance & Funnels",
    duration: "Week 1-2",
    lessons: [
      "Understanding the Digital Marketing Ecosystem",
      "Consumer Psychology & Buying Behavior",
      "Designing High-Converting Funnels (TOFU, MOFU, BOFU)",
      "Workshop: Setting up Business Managers"
    ]
  },
  {
    title: "Module 2: Meta Ads Mastery (Facebook & Instagram)",
    duration: "Week 3-5",
    lessons: [
      "Campaign Structures: CBO vs ABO",
      "The Creative Strategy: Hooks, Angles, and Scripts",
      "Audience Targeting & Retargeting Strategies",
      "Live Lab: Creating your first Ad Campaign"
    ]
  },
  {
    title: "Module 3: Google Ads & Search Intent",
    duration: "Week 6-8",
    lessons: [
      "Keyword Research & Match Types",
      "Search Campaign Setup & Bidding Strategies",
      "YouTube Ads: Skippable vs Non-Skippable",
      "Deep Dive: Performance Max (PMax)"
    ]
  },
  {
    title: "Module 4: Analytics, Attribution & Automation",
    duration: "Week 9-10",
    lessons: [
      "GA4 (Google Analytics 4) Mastery",
      "Server-Side Tracking & CAPI Setup",
      "Attribution Models: First click vs Data-driven",
      "Lab: Building Reports in Looker Studio"
    ]
  },
  {
    title: "Module 5: Capstone Project & Live Budget",
    duration: "Week 11-12",
    lessons: [
      "Live Project: Spend ₹5,000 (Provided by us)",
      "Analyzing Real-Time Data",
      "Optimization & Killing Bad Ads",
      "Final Presentation & Certification Ceremony"
    ]
  }
];

export default function CourseDetailsPage() {
  const [openModule, setOpenModule] = useState(0);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? -1 : index);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#FDFCFE]">
      
      <Header />

      <main className="flex-grow">
        
        {/* ========================================= */}
        {/* HERO SECTION - Modern Dark Theme */}
        {/* ========================================= */}
        <div className="bg-[#0f0f1a] text-white pt-12 pb-24 lg:pb-36 px-6 relative overflow-hidden">
          
          {/* Modern Grid Background Pattern */}
          <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(#3F348F 1px, transparent 1px), linear-gradient(90deg, #3F348F 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
          </div>
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3F348F] rounded-full blur-[180px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF0065] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span className="text-slate-600">/</span>
                <span className="hover:text-white cursor-pointer transition-colors">Courses</span>
                <span className="text-slate-600">/</span>
                <span className="text-white">Performance Marketing</span>
              </div>

              {/* Title Area */}
              <div className="space-y-5">
                {/* Offline Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#3F348F] text-white text-xs font-bold uppercase tracking-wide border border-white/10 shadow-lg shadow-purple-900/20">
                  <School className="w-3.5 h-3.5" />
                  Offline Classroom Program
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  Performance Marketing Mastery: <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC500] to-[#FF0065]">
                    0 to ₹5L+ Budgets
                  </span>
                </h1>
                
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                  The complete roadmap. Master Meta Ads, Google Ads, GA4, and Media Buying strategies with <strong>live budget execution</strong> in our New Delhi center.
                </p>
              </div>

              {/* Ratings & Metadata */}
              <div className="flex flex-wrap items-center gap-6 text-sm border-t border-white/10 pt-6 mt-4">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="font-bold text-[#FFC500] text-lg">4.9</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#FFC500] text-[#FFC500]" />)}
                  </div>
                  <span className="text-slate-400 text-xs ml-1">(124 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>English + Hindi</span>
                </div>
              </div>

            </div>
            
            {/* Right Column Spacer (Sticky card placement) */}
            <div className="lg:col-span-4 hidden lg:block"></div>
          </div>
        </div>


        {/* ========================================= */}
        {/* MAIN CONTENT & STICKY SIDEBAR */}
        {/* ========================================= */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* --- LEFT COLUMN (Course Details) --- */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* "What you'll learn" Box - Modern Card */}
              <div className="border border-gray-200 p-8 rounded-3xl bg-white shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#3F348F]"></div>
                
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#3F348F]" />
                  What you'll learn
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
                  {[
                    "Scale budgets from ₹500 to ₹5 Lakhs/month profitably",
                    "Master Meta Ads Manager (CBO, ABO, Retargeting)",
                    "Google Search, Display & YouTube Ad Strategies",
                    "Server-Side Tracking & Pixel Attribution (GA4)",
                    "Design high-converting Landing Pages & Funnels",
                    "Create Ad Creatives that stop the scroll",
                    "Media Buying Psychology & Consumer Behavior",
                    "Automate reporting using Looker Studio"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                         <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content (Accordion) */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Curriculum Syllabus</h2>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6 font-medium">
                   <span className="text-[#3F348F] bg-purple-50 px-2 py-0.5 rounded">12 Weeks</span> 
                   <span>•</span>
                   <span>5 Modules</span>
                   <span>•</span>
                   <span>Classroom Training</span>
                </div>
                
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  {curriculum.map((module, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 group">
                      <button 
                        onClick={() => toggleModule(index)}
                        className={`w-full flex items-center justify-between p-6 transition-all text-left ${
                          openModule === index ? "bg-[#faf9fc]" : "bg-white hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-5">
                          {/* Animated Icon */}
                          <div className={`transition-transform duration-300 ${openModule === index ? "rotate-180" : ""}`}>
                             <ChevronDown className={`w-5 h-5 ${openModule === index ? "text-[#3F348F]" : "text-slate-400"}`} />
                          </div>
                          
                          <div>
                            <h4 className={`font-bold text-lg ${openModule === index ? "text-[#3F348F]" : "text-[#1a1a2e]"}`}>
                              {module.title}
                            </h4>
                            <span className="text-xs text-slate-500 font-medium bg-white px-2 py-0.5 rounded border border-gray-200 mt-1.5 inline-block">
                              {module.duration}
                            </span>
                          </div>
                        </div>
                      </button>
                      
                      {openModule === index && (
                        <div className="px-6 pb-6 pt-0 bg-[#faf9fc] space-y-3">
                          <div className="h-px w-full bg-gray-200 mb-4"></div>
                          {module.lessons.map((lesson, lIndex) => (
                            <div key={lIndex} className="flex items-start gap-4 text-sm text-slate-600 pl-2">
                               {/* Modern Icon Logic: Use specific icon for workshops */}
                               {lesson.includes("Workshop") || lesson.includes("Lab") || lesson.includes("Live") ? (
                                  <Users className="w-4 h-4 text-[#FF0065] mt-0.5 flex-shrink-0" />
                               ) : (
                                  <FileText className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                               )}
                               <span className={lesson.includes("Live") ? "font-semibold text-[#1a1a2e]" : ""}>{lesson}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Description Split */}
              <div className="grid grid-cols-1 gap-8">
                 
                 {/* Prerequisites */}
                 <div className="bg-purple-50/50 p-8 rounded-3xl border border-purple-100">
                    <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-2">
                       <Zap className="w-5 h-5 text-[#3F348F]" />
                       Prerequisites
                    </h2>
                    <ul className="space-y-3">
                      {[
                        "No prior marketing experience needed.",
                        "Bring your own laptop (Windows/Mac).",
                        "Dedication to attend 3 offline classes per week."
                      ].map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3F348F] mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Description */}
                 <div>
                    <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">About this Program</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-7">
                      <p>
                        <strong className="text-[#3F348F]">Performance marketing is about Math, Psychology, and Strategy.</strong>
                      </p>
                      <p>
                        Most online courses teach you "which button to click." At SquashCode Academy, we teach you "why to click it." This 12-week offline bootcamp transforms you into a full-stack media buyer capable of handling high-ticket clients and large ad spends.
                      </p>
                      <p>
                        You won't just learn theory. You will sit in our office, work on live ad accounts, analyze real data, and optimize campaigns under the guidance of mentors who manage ₹1Cr+ monthly budgets.
                      </p>
                    </div>
                 </div>

              </div>

            </div>


            {/* --- RIGHT COLUMN (Sticky Sidebar Card) --- */}
            <div className="lg:col-span-4 relative">
               <div className="sticky top-28">
                  
                  {/* The Enrollment Card */}
                  {/* Negative Margin to pull it up over the hero section */}
                  <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden lg:-mt-[320px] z-30 relative">
                     
                     {/* Decorative Top Bar */}
                     <div className="h-1.5 w-full bg-gradient-to-r from-[#3F348F] to-[#FF0065]"></div>

                     {/* Card Header */}
                     <div className="p-8 border-b border-gray-100 bg-[#faf9fc]">
                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-2">Total Program Fee</p>
                        <div className="flex items-end gap-3">
                           <span className="text-4xl font-extrabold text-[#1a1a2e]">₹25,000</span>
                           <span className="text-lg text-slate-400 line-through decoration-slate-400 mb-1 font-medium">₹50,000</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#FF0065] text-xs font-bold bg-red-50 px-3 py-1.5 rounded-full w-fit">
                           <Clock className="w-3.5 h-3.5" />
                           <span className="animate-pulse">Early Bird Offer ends in 2 days</span>
                        </div>
                     </div>

                     {/* Card Body */}
                     <div className="p-8 space-y-6">
                        
                        {/* CTA Buttons */}
                        <div className="space-y-3">
                          <button className="w-full py-4 bg-[#3F348F] text-white font-bold rounded-xl hover:bg-[#322a72] transition-all shadow-lg shadow-purple-200 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                             Book Your Seat
                             <ArrowRight className="w-4 h-4" />
                          </button>
                          <button className="w-full py-4 bg-white text-[#3F348F] border-2 border-[#3F348F] font-bold rounded-xl hover:bg-purple-50 transition-colors">
                             Download Brochure
                          </button>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4 pt-2">
                           <h4 className="font-bold text-[#1a1a2e] text-sm flex items-center gap-2">
                             This Course includes:
                           </h4>
                           <ul className="space-y-3 text-sm text-slate-600">
                              <li className="flex items-center gap-3">
                                 <MapPin className="w-4 h-4 text-[#FF0065]" />
                                 <span className="font-medium">In-Center Training (New Delhi)</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <BookOpen className="w-4 h-4 text-[#3F348F]" />
                                 <span>Hardcopy Study Material</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <Users className="w-4 h-4 text-[#3F348F]" />
                                 <span>1-on-1 Mentorship</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <Award className="w-4 h-4 text-[#3F348F]" />
                                 <span>SquashCode Certification</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <ShieldCheck className="w-4 h-4 text-[#3F348F]" />
                                 <span>100% Placement Support</span>
                              </li>
                           </ul>
                        </div>

                        {/* Corporate Link */}
                        <div className="pt-6 border-t border-gray-100 text-center">
                           <a href="/corporate" className="text-sm font-bold text-[#3F348F] hover:underline">
                             Training 5 or more people?
                           </a>
                           <p className="text-xs text-slate-400 mt-1">Get a corporate discount for your team.</p>
                        </div>

                     </div>
                  </div>

               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}