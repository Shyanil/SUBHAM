"use client";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Components
import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Why from "./components/Why";
import Location from "./components/Location";
// Ensure you have this if needed
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import StickyContact from "./components/StickyContact";

// This is likely your old ThankYou section (keep or remove if not needed)
import ThankYouSection from "./components/ThankYou"; 

// ✅ This is your NEW separate Thank You Page
import ThankyouPage from './Info/Thankyou';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  const heroRef = useRef(null);
  const walkthroughRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Safety check: ensure refs exist (they won't exist on the Thank You page)
      if (!heroRef.current || !walkthroughRef.current) return;

      if (window.innerWidth >= 1024) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const walkthroughRect = walkthroughRef.current.getBoundingClientRect();

        // 1. Show only AFTER the Hero section has started leaving the view
        const hasPassedHero = heroRect.bottom < 100;
        
        // 2. Hide when the Walkthrough section enters the view
        const hasReachedWalkthrough = walkthroughRect.top <= window.innerHeight;

        // Sticky is visible ONLY between Hero and Walkthrough
        setIsStickyVisible(hasPassedHero && !hasReachedWalkthrough);
      } else {
        setIsStickyVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
            
            {/* --- ROUTE 1: MAIN LANDING PAGE --- */}
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
                  
                  {/* Optional: Your old footer/thankyou section */}
                  <ThankYouSection /> 

                  {/* STICKY CONTACT */}
                  {isStickyVisible && <StickyContact />}
                </div>
              }
            />

            {/* --- ROUTE 2: SEPARATE THANK YOU PAGE --- */}
            {/* ✅ This must be a sibling, not nested inside the element above */}
            <Route path="/Info/Thankyou" element={<ThankyouPage />} />

          </Routes>
        </div>
      )}
    </>
  );
}