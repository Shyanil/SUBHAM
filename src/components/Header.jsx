"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Download, Layout } from "lucide-react";

export default function SubhamHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // New High-Energy Palette
  const colors = {
    blackish: "#041a14",      
    vibrantOrange: "#F36F21", // 🟠
    goldenYellow: "#F4B400",  // 🟡
    deepOrange: "#D84315",    // 🔴
    warmCream: "#FFF4E6",     // 🌤 Soft Warm Background
  };

  const mainNav = [
    { name: "Home", id: "hero" },
    { name: "About Project", id: "about" },
    { name: "Amenities", id: "amenities" },
    { name: "Location", id: "location" },
    { name: "Gallery", id: "gallery" }
  ];

  const brochureLink = "https://subhamgroup.com/pdf/subham-kishori-heights-brohcure.pdf";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
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
          className="max-w-7xl mx-auto rounded-full px-6 md:px-10 py-3 flex justify-between items-center shadow-[0_15px_40px_rgba(243,111,33,0.15)] transition-all duration-300 border border-[#F36F21]/10 backdrop-blur-md"
          style={{ 
            backgroundColor: isScrolled ? "rgba(255, 244, 230, 0.96)" : colors.warmCream, 
            transform: isScrolled ? "scale(0.98)" : "scale(1)" 
          }}
        >
          {/* --- BRAND LOGO: Visible on Warm Cream --- */}
          <div 
            className="cursor-pointer group py-1" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src="/Logo.png" 
              alt="Subham Logo" 
              className="h-10 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest">
            {mainNav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)} 
                className="transition-colors opacity-70 hover:opacity-100"
                style={{ color: colors.blackish }}
                onMouseEnter={(e) => (e.target.style.color = colors.vibrantOrange)}
                onMouseLeave={(e) => (e.target.style.color = colors.blackish)}
              >
                {item.name}
              </a>
            ))}

            <a 
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300"
              style={{ borderColor: `${colors.vibrantOrange}30`, color: colors.vibrantOrange }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.vibrantOrange;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = colors.vibrantOrange;
              }}
            >
              <Download className="w-3 h-3" /> Brochure
            </a>
          </nav>

          {/* --- ACTION BUTTON --- */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden sm:flex items-center gap-2 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl text-white"
              style={{ backgroundColor: colors.deepOrange }}
            >
              Contact Now <ArrowUpRight className="w-4 h-4" />
            </button>

            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2" style={{ color: colors.vibrantOrange }}>
              <Layout className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`} style={{ backgroundColor: colors.warmCream }}>
        <div className="flex flex-col h-full p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-12 shrink-0">
            <img src="/Logo.png" alt="Subham Logo" className="h-12 w-auto object-contain" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center">
              <span className="text-3xl" style={{ color: colors.deepOrange }}>×</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {mainNav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)} 
                className="text-4xl font-serif opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: colors.blackish }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href={brochureLink} 
              target="_blank" 
              className="flex items-center gap-3 text-xl font-bold pt-6 border-t border-orange-100"
              style={{ color: colors.vibrantOrange }}
            >
              <Download className="w-5 h-5" /> Download Brochure
            </a>
          </nav>

          <div className="mt-12 mb-8">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="w-full py-6 rounded-3xl font-bold text-lg text-white" 
              style={{ backgroundColor: colors.deepOrange }}
            >
              Contact / Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}