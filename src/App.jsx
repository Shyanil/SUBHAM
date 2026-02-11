"use client";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Why from "./components/Why";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import ThankYou from "./components/ThankYou";
import Contact from "./components/Contact";
import StickyContact from "./components/StickyContact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  // Controls visibility based on specific section scroll boundaries
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  const heroRef = useRef(null);
  const walkthroughRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const heroRect = heroRef.current?.getBoundingClientRect();
        const walkthroughRect = walkthroughRef.current?.getBoundingClientRect();

        // 1. Show only AFTER the Hero section has started leaving the view
        const hasPassedHero = heroRect ? heroRect.bottom < 100 : false;
        
        // 2. Hide when the Walkthrough section enters the view
        const hasReachedWalkthrough = walkthroughRect ? walkthroughRect.top <= window.innerHeight : false;

        // Sticky is visible ONLY between Hero and Walkthrough
        setIsStickyVisible(hasPassedHero && !hasReachedWalkthrough);
      } else {
        // Always allow the mobile FAB to manage its own 5s timer logic
        setIsStickyVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page is refreshed mid-scroll
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000 ease-in-out">
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full overflow-x-hidden relative">
                  <Header />
                  
                  {/* Boundary 1: Show Sticky only after this */}
                  <div ref={heroRef}>
                    <Hero />
                  </div>

                  <AboutProject />
                  <Why />
                  <Amenities />
                  <Location />
                  <Highlights />
                  <Gallery />
                  
                  {/* Boundary 2: Hide Sticky once this is reached */}
                  <div ref={walkthroughRef}>
                    <Walkthrough />
                  </div>
                  
                  <Contact />
                  <ThankYou />
                  <Footer />

                  {/* STICKY CONTACT: 
                    - Desktop: Visible only between Hero bottom and Walkthrough top
                    - Mobile: Managed by internal 5s popup logic
                  */}
                  {isStickyVisible && <StickyContact />}
                </div>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}