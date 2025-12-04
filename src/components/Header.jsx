"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define Brand Colors
  const colors = {
    purple: "#3f348f",
    pink: "#ff0065",
    yellow: "#ffc500",
    lightPink: "#faeef4",
    lightPurple: "#a5a1c7",
  };

  // --- SCROLL TO SECTION LOGIC ---
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation to prevent Header from covering the section title
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Simplified NavLink Component
  const NavLink = ({ children, targetId }) => (
    <a
      href={`#${targetId}`}
      onClick={(e) => scrollToSection(e, targetId)}
      className="group relative flex items-center text-[15px] font-medium transition-colors duration-300 cursor-pointer"
      style={{ color: colors.purple }}
    >
      <span className="relative z-10 group-hover:text-[#ff0065] transition-colors">
        {children}
      </span>
      <span 
        className="absolute bottom-[-4px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: colors.yellow }}
      ></span>
    </a>
  );

  return (
    <>
      {/* --- TOP ANNOUNCEMENT BAR --- */}
      <div className="relative z-[60] w-full py-1 text-center text-xs font-medium text-white" style={{ backgroundColor: colors.purple }}>
        New Performance Marketing Masterclass! <span onClick={(e) => scrollToSection(e, 'courses')} className="underline cursor-pointer ml-1 text-yellow-300">Check it out</span>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-white py-5 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative z-50">
            
            {/* --- LOGO (Scrolls to Top) --- */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md transform hover:rotate-12 transition-transform"
                style={{ backgroundColor: colors.pink }}
              >
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="heading-font text-2xl font-bold leading-none" style={{ color: colors.purple }}>
                  SquashCode
                </h1>
                <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: colors.yellow }}>
                  Academy
                </p>
              </div>
            </div>

            {/* --- DESKTOP NAV --- */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink targetId="courses">Courses</NavLink>
              <NavLink targetId="why">Why Us</NavLink>
              <NavLink targetId="learning">Learning</NavLink> {/* ADDED HERE */}
              <NavLink targetId="faq">FAQ</NavLink>
              <NavLink targetId="testimonials">Testimonials</NavLink>
            </nav>

            {/* --- DESKTOP ACTIONS --- */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex items-center px-6 py-2.5 rounded-full text-white font-semibold text-sm shadow-[0_4px_14px_0_rgba(255,0,101,0.39)] hover:shadow-[0_6px_20px_rgba(255,0,101,0.23)] hover:-translate-y-0.5 transition-all duration-300" 
                style={{ backgroundColor: colors.pink }}
              >
                <span targetId="contact">Contact Us</span>
              </button>
            </div>

            {/* --- MOBILE HAMBURGER --- */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative focus:outline-none transition-transform duration-300 active:scale-95"
              >
                <div className="w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-50">
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{ color: colors.pink }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 8H17" stroke={colors.lightPurple} strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12H20" stroke={colors.purple} strokeWidth="3" strokeLinecap="round" />
                          <path d="M7 16H17" stroke={colors.lightPurple} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div 
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* --- MOBILE SIDEBAR --- */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative Blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ backgroundColor: colors.pink }}></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ backgroundColor: colors.yellow }}></div>

          <div className="flex flex-col h-full p-8 relative">
            <div className="flex items-center justify-between mb-10 mt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</span>
            </div>

            <div className="flex flex-col space-y-6">
                {[
                  { name: 'Courses', id: 'courses' },
                  { name: 'Why Us', id: 'why' },
                  { name: 'Learning', id: 'learning' }, // ADDED HERE
                  { name: 'FAQ', id: 'faq' },
                  { name: 'Testimonials', id: 'testimonials' },
                ].map((item) => (
                    <a 
                        key={item.name} 
                        href={`#${item.id}`}
                        className="text-2xl font-bold transition-colors duration-200 hover:translate-x-2 transform inline-block"
                        style={{ color: colors.purple }}
                        onClick={(e) => scrollToSection(e, item.id)}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
                <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Ready to start?</p>
                    <button
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="w-full flex justify-center items-center px-6 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                        style={{ backgroundColor: colors.pink }}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}