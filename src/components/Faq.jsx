import React, { useState } from "react";
import { 
  Plus, 
  Minus, 
  HelpCircle
} from "lucide-react";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "Not at all. Our Foundation tracks are designed for absolute beginners. We start from the basics and build up to advanced concepts."
  },
  {
    question: "Is this course pre-recorded or live?",
    answer: "It is a hybrid model. You get high-quality recorded modules for theory, combined with intense, instructor-led offline practical sessions."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes. We have a dedicated placement cell. We help with resume building, mock interviews, and connect you with 500+ hiring partners."
  },
  {
    question: "What happens if I miss a class?",
    answer: "All live sessions are recorded and uploaded to your portal within 24 hours. You can revise anytime."
  },
  {
    question: "Can I pay fees in installments?",
    answer: "Yes, we offer flexible EMI options (3, 6, and 12 months) at 0% interest to make learning accessible."
  },
  {
    question: "How long is the access valid?",
    answer: "You get lifetime access to the Learning Management System (LMS), including all future updates to the course content."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id = "faq" className="relative w-full py-20 bg-[#faeef4] overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'radial-gradient(#e9d5ff 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      {/* Soft Blur Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#3F348F] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <HelpCircle className="w-4 h-4 fill-current" />
             Common Queries
          </div>

          <h2 className="text-4xl md:text-5xl text-[#1a1a2e] leading-[1.15] tracking-tight mb-6 font-sans">
             <span className="font-light text-slate-600">Got Questions?</span> <br/>
             <span className="font-bold text-[#3F348F]">
               We've Got Answers
             </span>
          </h2>
        </div>

        {/* --- TWO COLUMN GRID FAQ --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? "border-[#3F348F] shadow-lg ring-1 ring-[#3F348F]/20" 
                  : "border-purple-50 shadow-sm hover:border-purple-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-300 ${
                  openIndex === index ? "text-[#3F348F]" : "text-[#1a1a2e]"
                }`}>
                  {faq.question}
                </span>
                
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-[#3F348F] text-white rotate-180" 
                    : "bg-purple-50 text-[#3F348F] group-hover:bg-[#3F348F] group-hover:text-white"
                }`}>
                   {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}