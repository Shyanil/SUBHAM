"use client";

import React, { useState } from "react";
import { ArrowUpRight, MoveRight, Sparkles } from "lucide-react";

const TOTAL_SLIDES = 16;

const FloorPlanGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  // The base URL for the interactive gallery
  const galleryUrl = `https://subhamgroup.com/subham-kishori-heights.html#lg=1&slide=${activeSlide}`;

  return (
    <section
      id="plans"
      className="w-full bg-white py-24 lg:py-40 font-sans text-[#062c22]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.5em] text-[#0a4d3c] mb-8">
              <Sparkles className="w-4 h-4 text-[#e3f988]" />
              Architectural Drafting
            </div>

            <h2 className="font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter">
              Thoughtful <br />
              <span className="italic font-light text-[#0a4d3c]">
                Floor Plans.
              </span>
            </h2>
          </div>

          <div className="bg-[#f7f8f2] px-10 py-4 rounded-full border border-gray-100">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">
              Viewing Slide {activeSlide + 1} / {TOTAL_SLIDES}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- FIXED IFRAME CONTAINER --- */}
          <div className="lg:col-span-7 relative group">
            {/* The 'overflow-hidden' and 'h-[500px]' act as a viewport 
                to hide the black header bars of the original site 
            */}
            <div className="relative rounded-[4rem] overflow-hidden aspect-[4/3] shadow-2xl bg-[#fafaf8] border border-gray-100">
              <div className="w-full h-full relative">
                {/* We apply a negative top margin to 'crop' the 
                    unwanted header from the subhamgroup website 
                */}
                <iframe
                  key={activeSlide}
                  src={galleryUrl}
                  className="absolute top-[-15%] left-0 w-full h-[130%] border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* NEXT BUTTON */}
            <button
              onClick={handleNext}
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#e3f988] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 z-10"
            >
              <MoveRight className="w-10 h-10 text-[#062c22]" />
            </button>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] font-black tracking-[0.4em] text-[#0a4d3c] mb-6 uppercase opacity-60">
              Active Living Spaces
            </span>

            <h3 className="font-serif text-5xl md:text-6xl mb-10 italic leading-none">
              Live Large
            </h3>

            <div className="border-l-4 border-[#e3f988] pl-8 mb-12">
              <p className="text-[#062c22]/70 text-xl leading-relaxed">
                Featuring 2 Towers of B+G+14 with 78% Open Space. Explore our Vastu-compliant 3BHK, 4BHK, and Duplex layouts.
              </p>
            </div>

            <div className="space-y-4 mb-10">
                {[
                    "2 Towers of B+G+14",
                    "78% Open Space",
                    "Vastu-compliant Homes",
                    "65 Exclusive Homes"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-80">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e3f988]" />
                        {item}
                    </div>
                ))}
            </div>

            <button className="inline-flex items-center gap-6 text-[#062c22] font-black uppercase text-xs tracking-[0.3em] group">
              View All 16 Layouts
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#e3f988]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanGallery;