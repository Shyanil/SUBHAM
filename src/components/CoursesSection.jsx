import React, { useRef } from "react";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  BarChart, 
  Star,
  Zap
} from "lucide-react";

const courses = [
  {
    id: 1,
    category: "Flagship",
    title: "Performance Marketing Mastery",
    level: "Advanced",
    difficulty: 85, // percentage for the bar
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-600 to-indigo-600",
    desc: "The complete roadmap to running ₹5L+ budgets on Meta & Google."
  },
  {
    id: 2,
    category: "Ads Specialist",
    title: "Meta Ads Advanced Operator",
    level: "Intermediate",
    difficulty: 65,
    duration: "6 Weeks",
    image: "https://static.xx.fbcdn.net/mci_ab/public/cms/?ab_b=e&ab_page=CMS&ab_entry=489057099063563&version=1753437665&transcode_extension=webp",
    color: "from-indigo-600 to-purple-600",
    desc: "Master campaign structures, A/B testing, and scaling logic."
  },
  {
    id: 3,
    category: "Search & Display",
    title: "Google Ads Pro Certification",
    level: "Hard",
    difficulty: 90,
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=800",
    color: "from-red-500 to-orange-500",
    desc: "Dominate Search, Display, and YouTube with advanced bidding."
  },
  {
    id: 4,
    category: "Strategy",
    title: "Funnel Building & Conversion",
    level: "Intermediate",
    difficulty: 60,
    duration: "5 Weeks",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-500 to-yellow-500",
    desc: "Psychology-backed funnel mapping and offer creation."
  },
  {
    id: 5,
    category: "Future Tech",
    title: "Automation + AI Systems",
    level: "All Levels",
    difficulty: 40,
    duration: "4 Weeks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    color: "from-fuchsia-600 to-pink-600",
    desc: "Automate boring tasks using Zapier, Make & ChatGPT."
  },
  {
    id: 6,
    category: "Creative",
    title: "Creative Strategy for Ads",
    level: "Creative",
    difficulty: 50,
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-500 to-rose-500",
    desc: "Write hooks, storyboard ads, and master ad psychology."
  },
  {
    id: 7,
    category: "Design",
    title: "Landing Page Design & CRO",
    level: "Intermediate",
    difficulty: 70,
    duration: "5 Weeks",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    color: "from-teal-500 to-emerald-500",
    desc: "Design high-converting layouts with copywriting frameworks."
  },
  {
    id: 8,
    category: "Analytics",
    title: "Data & Attribution (GA4)",
    level: "Expert",
    difficulty: 95,
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    color: "from-cyan-600 to-blue-500",
    desc: "Tracking, CAPI, server-side events, and attribution models."
  },
  {
    id: 9,
    category: "Business",
    title: "Freelancing & Agency",
    level: "Business",
    difficulty: 50,
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-600 to-green-500",
    desc: "Client acquisition, pricing, sales closing, and delivery."
  },
  {
    id: 10,
    category: "Foundations",
    title: "Digital Foundations",
    level: "Beginner",
    difficulty: 20,
    duration: "4 Weeks",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    color: "from-slate-600 to-gray-600",
    desc: "The perfect start. SEO, Social Media, and Ads overview."
  }
];

export default function CoursesSection() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-[#FAEEF4] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#FF0065]"></span>
                <span className="text-[#FF0065] font-bold tracking-widest text-xs uppercase">Premium Curriculum</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#3F348F] leading-[1.1]">
              Explore Our <br/>
              <span className="relative inline-block">
                Programs
                {/* Underline Scribble */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFC500]" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#3F348F]/20 flex items-center justify-center text-[#3F348F] hover:bg-[#3F348F] hover:text-white transition-all duration-300 active:scale-95 bg-white/50 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#3F348F] flex items-center justify-center text-white shadow-lg hover:bg-[#2a2266] transition-all duration-300 active:scale-95 shadow-purple-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar pt-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="group relative min-w-[300px] md:min-w-[340px] h-[520px] rounded-[2.5rem] overflow-hidden snap-center cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* --- IMAGE LAYER (Background) --- */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1638] via-[#1a1638]/60 to-transparent opacity-90"></div>
                {/* Color Tint on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay`}></div>
              </div>

              {/* --- CONTENT LAYER --- */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                
                {/* Top Tags */}
                <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                        {course.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#3F348F] transition-colors duration-300 text-white">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                </div>

                {/* Bottom Info Glass Card */}
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {course.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {course.desc}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-400 uppercase font-bold">Duration</span>
                            <div className="flex items-center gap-1 text-white text-sm font-semibold">
                                <Clock className="w-3 h-3" /> {course.duration}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-400 uppercase font-bold">Difficulty</span>
                            <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1.5 overflow-hidden">
                                <div 
                                    className={`h-full rounded-full bg-gradient-to-r ${course.color}`} 
                                    style={{ width: `${course.difficulty}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Button (Hidden by default, slides up) */}
                    <div className="h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <button className="w-full py-3 rounded-xl bg-white text-[#3F348F] font-bold text-sm hover:bg-[#FFC500] hover:text-[#3F348F] transition-colors flex items-center justify-center gap-2">
                            View Curriculum
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
              </div>

            </div>
          ))}
          
          {/* Spacer */}
          <div className="min-w-[20px]"></div>
        </div>
      </div>
    </section>
  );
}