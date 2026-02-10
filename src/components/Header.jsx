"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Download, Layout } from "lucide-react";

export default function SubhamHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const colors = {
    darkGreen: "#062c22",
    lime: "#e3f988",
  };

  // Updated navigation to match your latest structure
  const mainNav = [
    { name: "Home", id: "hero" },
    { name: "About Project", id: "about" },
    { name: "Amenities", id: "amenities" },
    { name: "Location", id: "location" },
    { name: "Gallery", id: "gallery" }
  ];

  const brochureLink = "https://subhamgroup.com/pdf/subham-kishori-heights-brohcure.pdf";

  // --- SMART SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="h-[100px] lg:h-[140px] w-full bg-white" />

      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out px-4 md:px-8 lg:px-12 
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
          ${isScrolled ? "py-3" : "py-8"}`}
      >
        <div 
          className="max-w-7xl mx-auto rounded-full px-6 md:px-10 py-4 flex justify-between items-center shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-md"
          style={{ 
            backgroundColor: isScrolled ? "rgba(6, 44, 34, 0.98)" : colors.darkGreen, 
            color: colors.lime,
            transform: isScrolled ? "scale(0.98)" : "scale(1)" 
          }}
        >
          {/* --- LOGO --- */}
          <div 
            className="font-serif text-xl md:text-2xl tracking-tighter cursor-pointer flex flex-col leading-none" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-bold uppercase tracking-tighter">SUBHAM</span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-light mt-1 opacity-70">Kishori Heights</span>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest">
            {mainNav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)} 
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* DIRECT BROCHURE DOWNLOAD */}
            <a 
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#e3f988]/30 hover:bg-[#e3f988] hover:text-[#062c22] transition-all duration-300"
            >
              <Download className="w-3 h-3" /> Brochure
            </a>
          </nav>

          {/* --- ACTION BUTTON --- */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden sm:flex items-center gap-2 bg-[#e3f988] text-[#062c22] px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:scale-105"
            >
              Contact Now <ArrowUpRight className="w-4 h-4" />
            </button>

            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-[#e3f988]">
              <Layout className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-0 bg-[#062c22] z-[100] transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col h-full p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-12 shrink-0 text-[#e3f988] font-serif">
            <div>
              <p className="text-2xl font-bold leading-none">SUBHAM</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Kishori Heights</p>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full border border-[#e3f988]/20 flex items-center justify-center">
              <span className="text-3xl">×</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {mainNav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="text-4xl font-serif text-[#e3f988] opacity-80">
                {item.name}
              </a>
            ))}
            <a 
              href={brochureLink} 
              target="_blank" 
              className="flex items-center gap-3 text-xl font-bold text-[#e3f988] pt-6 border-t border-[#e3f988]/10"
            >
              <Download className="w-5 h-5" /> Download Brochure
            </a>
          </nav>

          <div className="mt-12 mb-8">
            <button onClick={(e) => scrollToSection(e, 'contact')} className="w-full bg-[#e3f988] text-[#062c22] py-6 rounded-3xl font-bold text-lg">
              Contact / Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}