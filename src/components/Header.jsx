"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Download, Layout } from "lucide-react";

export default function SubhamHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // UPDATED PALETTE: Blackish background with Orange highlights
  const colors = {
    blackish: "#041a14",      // Deeper, darker Forest Green for a blackish feel
    brightOrange: "#F2A71D", // Accent Highlight
    mediumOrange: "#E97323", // Primary Button
    darkOrange: "#D64B27",   // Red-Orange Accent
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
          className="max-w-7xl mx-auto rounded-full px-6 md:px-10 py-4 flex justify-between items-center shadow-2xl transition-all duration-300 border border-white/5 backdrop-blur-xl"
          style={{ 
            backgroundColor: isScrolled ? "rgba(4, 26, 20, 0.98)" : colors.blackish, 
            color: "white",
            transform: isScrolled ? "scale(0.98)" : "scale(1)" 
          }}
        >
          {/* --- LOGO: SUBHAM in White, Heights in Bright Orange --- */}
          <div 
            className="font-serif text-xl md:text-2xl tracking-tighter cursor-pointer flex flex-col leading-none" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-bold uppercase tracking-tighter text-white">SUBHAM</span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-light mt-1" style={{ color: colors.brightOrange }}>
              Kishori Heights
            </span>
          </div>

          {/* --- DESKTOP NAVIGATION: Orange Hover Effects --- */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest">
            {mainNav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)} 
                className="transition-colors opacity-70 hover:opacity-100"
                style={{ color: "white" }}
                onMouseEnter={(e) => (e.target.style.color = colors.brightOrange)}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {item.name}
              </a>
            ))}

            <a 
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300"
              style={{ borderColor: `${colors.brightOrange}44`, color: colors.brightOrange }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.brightOrange;
                e.target.style.color = colors.blackish;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = colors.brightOrange;
              }}
            >
              <Download className="w-3 h-3" /> Brochure
            </a>
          </nav>

          {/* --- ACTION BUTTON: Medium Orange --- */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden sm:flex items-center gap-2 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_10px_20px_rgba(233,115,35,0.2)]"
              style={{ 
                backgroundColor: colors.mediumOrange,
                color: "white"
              }}
            >
              Contact Now <ArrowUpRight className="w-4 h-4" />
            </button>

            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2" style={{ color: colors.brightOrange }}>
              <Layout className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU: Blackish Background with Orange Accents --- */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`} style={{ backgroundColor: colors.blackish }}>
        <div className="flex flex-col h-full p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-12 shrink-0 font-serif">
            <div>
              <p className="text-2xl font-bold leading-none text-white">SUBHAM</p>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: colors.brightOrange }}>Kishori Heights</p>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
              <span className="text-3xl text-white">×</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {mainNav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="text-4xl font-serif text-white opacity-80 hover:opacity-100 transition-opacity">
                {item.name}
              </a>
            ))}
            <a 
              href={brochureLink} 
              target="_blank" 
              className="flex items-center gap-3 text-xl font-bold pt-6 border-t border-white/10"
              style={{ color: colors.brightOrange }}
            >
              <Download className="w-5 h-5" /> Download Brochure
            </a>
          </nav>

          <div className="mt-12 mb-8">
            <button onClick={(e) => scrollToSection(e, 'contact')} className="w-full py-6 rounded-3xl font-bold text-lg text-white" style={{ backgroundColor: colors.mediumOrange }}>
              Contact / Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}