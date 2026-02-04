"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Brand Colors matching the "Active Lifestyle" aesthetic
  const colors = {
    darkGreen: "#062c22",
    lime: "#e3f988",
  };

  // --- SCROLL TO SECTION LOGIC ---
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Updated Navigation Items for Real Estate
  const navItems = [
    { name: "Amenities", id: "amenities" },
    { name: "Location", id: "location" },
    { name: "Floor Plans", id: "plans" },
    { name: "Gallery", id: "gallery" }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 md:px-8 lg:px-12 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        {/* --- PILL NAVIGATION --- */}
        <div 
          className="max-w-7xl mx-auto rounded-full px-8 py-4 flex justify-between items-center shadow-lg transition-all duration-300 border border-white/10"
          style={{ 
            backgroundColor: colors.darkGreen,
            color: colors.lime,
            transform: isScrolled ? "scale(0.98)" : "scale(1)"
          }}
        >
          {/* LOGO AREA: SUBHAM KISHORI HEIGHTS */}
          <div 
            className="font-serif text-xl md:text-2xl tracking-tight cursor-pointer flex flex-col leading-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-bold">SUBHAM</span>
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-light mt-1 opacity-80">
              Kishori Heights
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-10 text-[13px] font-semibold uppercase tracking-widest">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className="hover:opacity-60 transition-opacity"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden sm:flex items-center gap-2 border px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
              style={{ 
                borderColor: colors.lime,
                color: colors.lime
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.lime;
                e.currentTarget.style.color = colors.darkGreen;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = colors.lime;
              }}
            >
              Enquire Now <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 8H20M4 16H20" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- MOBILE SIDEBAR & OVERLAY --- */}
        <div 
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8 relative">
            <div className="flex items-center justify-between mb-12">
                <div className="flex flex-col leading-none">
                  <span className="font-serif font-bold text-xl" style={{color: colors.darkGreen}}>SUBHAM</span>
                  <span className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Kishori Heights</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center active:scale-90 transition-transform"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                   </svg>
                </button>
            </div>

            <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                    <a 
                        key={item.id} 
                        href={`#${item.id}`}
                        className="text-2xl font-bold transition-all hover:translate-x-2 block py-2 border-b border-gray-50"
                        style={{ color: colors.darkGreen }}
                        onClick={(e) => scrollToSection(e, item.id)}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <div className="mt-auto">
                <button
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="w-full flex justify-center items-center px-6 py-5 rounded-2xl text-white font-bold text-lg shadow-xl"
                    style={{ backgroundColor: colors.darkGreen }}
                >
                    Book a Visit
                </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}