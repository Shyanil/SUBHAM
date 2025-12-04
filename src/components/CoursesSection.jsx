import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import { 
  ArrowRight, 
  Clock, 
  BarChart, 
  Zap,
  Layout,
  Target
} from "lucide-react";

const courses = [
  {
    id: 1,
    category: "Flagship Program",
    title: "Performance Marketing Mastery",
    icon: <Target className="w-5 h-5" />,
    level: "Advanced",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    gradient: "from-blue-600 to-indigo-900",
    accent: "bg-blue-500",
    desc: "The complete roadmap to running ₹5L+ budgets. Master the full stack of digital acquisition.",
    topics: ["Budget Scaling", "Cross-Platform Strategy", "Data Analytics"],
    link: "/courses/performance" // 2. Added Link
  },
  {
    id: 2,
    category: "Social Specialist",
    title: "Meta Ads Advanced Operator",
    icon: <Zap className="w-5 h-5" />,
    level: "Intermediate",
    duration: "6 Weeks",
    image: "https://www.searchenginejournal.com/wp-content/uploads/2024/09/img_2024-09-09-195224-837.jpeg",
    gradient: "from-purple-600 to-pink-900",
    accent: "bg-purple-500",
    desc: "Stop boosting posts. Master campaign structures, CBO/ABO logic, and creative testing.",
    topics: ["Campaign Structure", "Creative Strategy", "Pixel Setup"],
    link: "/courses/meta" // 2. Added Link
  },
  {
    id: 3,
    category: "Search & Display",
    title: "Google Ads Pro Certification",
    icon: <Layout className="w-5 h-5" />,
    level: "Hard",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    gradient: "from-orange-500 to-red-900",
    accent: "bg-orange-500",
    desc: "Dominate Search, Display, and YouTube with advanced bidding and keyword psychology.",
    topics: ["Quality Score", "Keyword Research", "YouTube Ads"],
    link: "/courses/google" // 2. Added Link
  }
];

export default function CoursesSection() {
  return (
    <section id = "courses" className="relative py-20 md:py-32 bg-[#F8F7FF] overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-[#3F348F] text-xs font-bold uppercase tracking-wider mb-4">
             <span className="w-2 h-2 rounded-full bg-[#3F348F] animate-pulse"></span>
             Expert Curriculum
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
            <span className="font-light text-slate-600">Specialized Tracks for</span> <br/>
            <span className="font-bold text-[#3F348F]">
              Serious Marketers
            </span>
          </h2>

          <p className="text-lg text-slate-500 font-light">
            We don't teach basics. Choose a specialization designed to take you from practitioner to expert.
          </p>
        </div>

        {/* --- 3-COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="group relative h-[580px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white"
            >
              
              {/* --- IMAGE BACKGROUND --- */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-90 mix-blend-multiply transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
              </div>

              {/* --- CONTENT CONTAINER --- */}
              <div className="relative z-10 h-full flex flex-col p-8">
                
                {/* Top Badge */}
                <div className="flex justify-between items-start">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide uppercase">
                      {course.icon}
                      {course.category}
                   </div>
                </div>

                {/* Middle Content (Pushed down by margin-top auto) */}
                <div className="mt-auto">
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light border-l-2 border-white/30 pl-3">
                    {course.desc}
                  </p>

                  {/* Skills / Topics Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {course.topics.map((topic, i) => (
                      <span key={i} className="text-[10px] font-medium text-white/90 bg-white/10 px-2 py-1 rounded border border-white/10">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/20 mb-6"></div>

                  {/* Footer Info (Stats + Button) */}
                  <div className="flex items-end justify-between">
                    
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-white/90">
                         <Clock className="w-4 h-4 text-white/60" />
                         <span className="text-sm font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                         <BarChart className="w-4 h-4 text-white/60" />
                         <span className="text-sm font-semibold">{course.level}</span>
                      </div>
                    </div>

                    {/* 3. UPDATED: Circular Button wrapped in LINK */}
                    <Link 
                      to={course.link}
                      className="w-12 h-12 rounded-full bg-white text-[#3F348F] flex items-center justify-center hover:bg-[#FFC500] hover:scale-110 transition-all duration-300 shadow-lg group-hover:w-auto group-hover:px-6 group-hover:gap-2"
                    >
                       <ArrowRight className="w-5 h-5" />
                       <span className="hidden group-hover:inline-block font-bold text-sm whitespace-nowrap">View Details</span>
                    </Link>

                  </div>
                </div>

              </div>
              
              {/* Decorative Accent Line at Bottom */}
              <div className={`absolute bottom-0 left-0 h-1.5 w-full ${course.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}