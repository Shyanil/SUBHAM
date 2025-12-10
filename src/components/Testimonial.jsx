import React, { useState, useEffect } from "react";
import { Quote, Zap, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Performance Marketer",
    headline: "Failed by 5 Points with traditional ads. Passed by 32 Points with this course.",
    quote: "I passed the certification with a 98% score! Been out of school for 3 years. Used other courses before and failed. This course was a GAME CHANGER for my agency career.",
    image: "https://i.pinimg.com/736x/5a/ab/f8/5aabf84d67477f77d3bb8f0fe4cfcd17.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Freelance Media Buyer",
    headline: "From Zero to first $1k Client in just 4 weeks.",
    quote: "The practical assignments are what make the difference. I didn't just watch videos; I built a real portfolio. The mentors helped me fix my mistakes in real-time.",
    image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMF9waG90b19vZl95b3VuZ19zb3V0aF9hc2lhbl9naXJsX2hvbGRpbmdfc3R1ZF8xOTQyYTRkYi01YjA5LTQ2NDItYjc0YS04YjU4MjdiYjhjMjhfMi5qcGc.jpg",
  },
  {
    id: 3,
    name: "Aditya Mehta",
    role: "DTC Brand Owner",
    headline: "Landed a job at a top tech firm thanks to the placement cell.",
    quote: "The interview prep was intense but worth it. They knew exactly what questions would be asked regarding ROAS and Attribution. I felt over-prepared.",
    image: "https://thumbs.dreamstime.com/b/cheerful-male-indian-student-eyeglasses-standing-vertical-portrait-cheerful-handsome-male-indian-student-eyeglasses-367581110.jpg",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    role: "Google Ads Specialist",
    headline: "Scaled my business using the ad strategies taught here.",
    quote: "We were burning cash on Facebook ads. After the Performance Marketing module, we cut our CPA by half and doubled our ROAS. Highly recommended.",
    image: "https://img.freepik.com/premium-photo/young-smiling-indian-female-student_878783-4771.jpg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Digital Strategist",
    headline: "The best investment I made for my career.",
    quote: "College taught me theory. This academy taught me how to actually do the job. The tools, the templates, and the community are invaluable.",
    image: "https://thumbs.dreamstime.com/b/indian-college-student-portrait-phone-studio-backpack-university-education-connection-blue-background-285210824.jpg",
  }
];

export default function TestimonialSection() {
  const [activeId, setActiveId] = useState(1);
  
  // --- NEW CODE: Auto Rotation Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((currentId) => {
        // Find current index
        const currentIndex = testimonials.findIndex(t => t.id === currentId);
        // Calculate next index (loop back to 0 if at end)
        const nextIndex = (currentIndex + 1) % testimonials.length;
        // Return new ID
        return testimonials[nextIndex].id;
      });
    }, 5000); // Change every 5000ms (5 seconds)

    // Cleanup interval on unmount or when user clicks (activeId changes)
    return () => clearInterval(interval);
  }, [activeId]); 
  // -------------------------------------

  // Find the currently active testimonial data
  const activeTestimonial = testimonials.find(t => t.id === activeId);

  return (
    <section id="testimonials" className="relative w-full py-20 bg-[#FDFCFE] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          
          {/* --- LEFT SIDE: HEADING, THUMBNAILS, CTA --- */}
          <div className="lg:w-1/2 text-center lg:text-left">
            
            {/* 1. Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#3F348F] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
               <Zap className="w-4 h-4 fill-current" />
               Student Success Stories
            </div>

            {/* 2. Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
               <span className="font-light text-slate-600">Real Stories.</span> <br/>
               <span className="font-bold text-[#3F348F]">
                 Real Results.
               </span>
            </h2>

            {/* 3. Paragraph */}
            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-10">
              A small sample of the results our students get. We don't just teach performance marketing; we build careers.
            </p>

            {/* 4. Thumbnails Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveId(testimonial.id)}
                  className={`relative w-14 h-14 rounded-full overflow-hidden transition-all duration-300 ${
                    activeId === testimonial.id 
                      ? "ring-4 ring-[#FF0065] ring-offset-2 scale-110" 
                      : "ring-2 ring-transparent opacity-70 hover:opacity-100 hover:ring-purple-200 grayscale hover:grayscale-0"
                  }`}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Progress Indicator for Active Item (Optional visual cue) */}
                  {activeId === testimonial.id && (
                    <div className="absolute inset-0 bg-[#FF0065] opacity-10 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* 5. Contact CTA Button */}
            <button className="px-8 py-4 bg-[#3F348F] text-white rounded-full font-bold hover:bg-[#322a72] transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2 mx-auto lg:mx-0 hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
                Talk to our Team
            </button>

          </div>

          {/* --- RIGHT SIDE: ACTIVE TESTIMONIAL DISPLAY --- */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-start">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              
              {/* Portrait Image Container */}
              <div className="relative w-48 h-72 flex-shrink-0">
                <div className="w-full h-full rounded-[100px] overflow-hidden shadow-2xl border-[5px] border-white bg-white relative z-10">
                  <img 
                    key={activeTestimonial.image} 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-full h-full object-cover animate-fade-in"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-5 animate-fade-in text-center md:text-left max-w-md" key={activeTestimonial.id}>
                <Quote className="w-12 h-12 text-[#FF0065] opacity-20 fill-current mx-auto md:mx-0" />
                
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] leading-tight">
                  {activeTestimonial.headline}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-light text-lg italic">
                  "{activeTestimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-gray-100 inline-block md:block w-full">
                  <p className="font-bold text-[#3F348F] text-lg">{activeTestimonial.name}</p>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{activeTestimonial.role}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Simple fade animation style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}