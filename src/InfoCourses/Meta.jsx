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
  ArrowRight,
  Layout
} from "lucide-react";

// Import your actual Header and Footer components
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- META ADS CURRICULUM DATA ---
const curriculum = [
  {
    title: "Module 1: The Meta Business Ecosystem",
    duration: "Week 1",
    lessons: [
      "Business Manager vs Ad Account vs Page Structure",
      "Domain Verification & Aggregated Event Measurement",
      "Navigating the Ads Manager Interface like a Pro",
      "Workshop: Account Security & Asset Sharing"
    ]
  },
  {
    title: "Module 2: Campaign Architecture & Strategy",
    duration: "Week 2",
    lessons: [
      "The Full Funnel: Awareness, Consideration, Conversion",
      "CBO (Advantage+ Budget) vs ABO Logic",
      "Bid Strategies: Lowest Cost vs Cost Cap vs Bid Cap",
      "Live Lab: Structuring a ₹50k/month Campaign"
    ]
  },
  {
    title: "Module 3: Audience Intelligence & The Pixel",
    duration: "Week 3",
    lessons: [
      "Installing the Pixel & CAPI (Conversions API)",
      "Standard Events vs Custom Conversions",
      "Custom Audiences (LALs, Video Viewers, Website Visitors)",
      "Broad Targeting vs Interest Stacking in 2024"
    ]
  },
  {
    title: "Module 4: Creative Strategy (The 3:2:2 Method)",
    duration: "Week 4",
    lessons: [
      "Why Creative is the New Targeting",
      "Designing Static, Carousel & Reel Ads",
      "Writing Ad Copy: Primary Text, Headlines & CTAs",
      "Dynamic Creative Testing (DCT) Setup"
    ]
  },
  {
    title: "Module 5: Optimization, Scaling & Reporting",
    duration: "Week 5-6",
    lessons: [
      "Reading the Data: CPM, CTR, CPC, ROAS",
      "Horizontal vs Vertical Scaling Tactics",
      "Automated Rules to Prevent Loss",
      "Final Exam & Live Campaign Audit"
    ]
  }
];

export default function MetaAdsCoursePage() {
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
          
          {/* Ambient Glows (Blue tint for Meta context) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b5998] rounded-full blur-[180px] opacity-20 pointer-events-none"></div>
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
                <span className="text-white">Meta Ads Operator</span>
              </div>

              {/* Title Area */}
              <div className="space-y-5">
                {/* Offline Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#3F348F] text-white text-xs font-bold uppercase tracking-wide border border-white/10 shadow-lg shadow-purple-900/20">
                  <School className="w-3.5 h-3.5" />
                  Offline Classroom Program
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  Meta Ads Advanced Operator: <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                    Master the Algorithm
                  </span>
                </h1>
                
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                  Stop "Boosting Posts." Learn the science behind <strong>Campaign Structures, CBO/ABO logic, and Pixel Strategy</strong> to run profitable ads for any business.
                </p>
              </div>

              {/* Ratings & Metadata */}
              <div className="flex flex-wrap items-center gap-6 text-sm border-t border-white/10 pt-6 mt-4">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="font-bold text-[#FFC500] text-lg">4.8</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#FFC500] text-[#FFC500]" />)}
                  </div>
                  <span className="text-slate-400 text-xs ml-1">(89 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Layout className="w-4 h-4 text-slate-400" />
                  <span>Intermediate Level</span>
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
              
              {/* "What you'll learn" Box */}
              <div className="border border-gray-200 p-8 rounded-3xl bg-white shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0072FF]"></div>
                
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#3F348F]" />
                  What you'll learn
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
                  {[
                    "Master CBO (Advantage+) vs ABO Campaign Budgets",
                    "Advanced Pixel Setup, Events API & Domain Verification",
                    "The 3:2:2 Method for Creative Testing",
                    "Retargeting funnels that convert warm traffic",
                    "Writing Ad Copy that stops the scroll",
                    "Custom Audiences & Lookalike (LAL) Strategies",
                    "Analyzing ROAS, CTR, and CPM metrics",
                    "Scaling campaigns without resetting learning phase"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                         <Check className="w-3 h-3 text-blue-600" />
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
                   <span className="text-[#3F348F] bg-purple-50 px-2 py-0.5 rounded">6 Weeks</span> 
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
                               {/* Icon Logic */}
                               {lesson.includes("Workshop") || lesson.includes("Lab") ? (
                                  <Users className="w-4 h-4 text-[#FF0065] mt-0.5 flex-shrink-0" />
                               ) : (
                                  <FileText className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                               )}
                               <span className={lesson.includes("Lab") ? "font-semibold text-[#1a1a2e]" : ""}>{lesson}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-100">
                <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-2">
                   <Zap className="w-5 h-5 text-[#3F348F]" />
                   Prerequisites
                </h2>
                <ul className="space-y-3">
                  {[
                    "A personal Facebook Profile.",
                    "Basic understanding of digital marketing terms.",
                    "Bring your own laptop to the center.",
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
                    <strong className="text-[#3F348F]">Facebook Ads have changed. The old tricks of "Interest Targeting" don't work like they used to.</strong>
                  </p>
                  <p>
                    Today, success on Meta depends on Account Structure, Consolidated Data, and Creative Strategy. This 6-week intensive specialist course is designed for marketers who want to move beyond the basics and master the technical depths of the Meta Ads Manager.
                  </p>
                  <p>
                    You will learn how to set up robust tracking with CAPI, how to test creatives scientifically using the 3:2:2 method, and how to scale winning campaigns without destroying your ROI.
                  </p>
                </div>
              </div>

            </div>


            {/* --- RIGHT COLUMN (Sticky Sidebar Card) --- */}
            <div className="lg:col-span-4 relative">
               <div className="sticky top-28">
                  
                  {/* The Enrollment Card */}
                  <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden lg:-mt-[320px] z-30 relative">
                     
                     {/* Decorative Top Bar (Blue Gradient for Meta) */}
                     <div className="h-1.5 w-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"></div>

                     {/* Card Header */}
                     <div className="p-8 border-b border-gray-100 bg-[#faf9fc]">
                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-2">Total Program Fee</p>
                        <div className="flex items-end gap-3">
                           <span className="text-4xl font-extrabold text-[#1a1a2e]">₹15,000</span>
                           <span className="text-lg text-slate-400 line-through decoration-slate-400 mb-1 font-medium">₹25,000</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#0072FF] text-xs font-bold bg-blue-50 px-3 py-1.5 rounded-full w-fit">
                           <Clock className="w-3.5 h-3.5" />
                           <span className="animate-pulse">Batch starts next Monday</span>
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
                             Download Syllabus
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
                                 <span className="font-medium">In-Center Training</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <BookOpen className="w-4 h-4 text-[#3F348F]" />
                                 <span>Live Budget Practice</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <Award className="w-4 h-4 text-[#3F348F]" />
                                 <span>Specialist Certificate</span>
                              </li>
                              <li className="flex items-center gap-3">
                                 <ShieldCheck className="w-4 h-4 text-[#3F348F]" />
                                 <span>Internship Opportunity</span>
                              </li>
                           </ul>
                        </div>

                        {/* Corporate Link */}
                        <div className="pt-6 border-t border-gray-100 text-center">
                           <a href="/contact" className="text-sm font-bold text-[#3F348F] hover:underline">
                             Have questions?
                           </a>
                           <p className="text-xs text-slate-400 mt-1">Chat with a counselor now.</p>
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