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
// NEW: Import the StickyContact component
import StickyContact from "./components/StickyContact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hideStickyOnDesktop, setHideStickyOnDesktop] = useState(false);
  const walkthroughRef = useRef(null);

  // LOGIC: Handle visibility based on scroll for larger screens
  useEffect(() => {
    const handleScroll = () => {
      if (walkthroughRef.current && window.innerWidth >= 1024) {
        const rect = walkthroughRef.current.getBoundingClientRect();
        // If the top of Walkthrough is visible or above the viewport, hide the sticky footer
        const isIntersecting = rect.top <= window.innerHeight;
        setHideStickyOnDesktop(isIntersecting);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
                  <Hero />
                  <AboutProject />
                  <Why />
                  <Amenities />
                  <Location />
                  <Highlights />
                  <Gallery />
                  
                  {/* Anchor for scroll detection */}
                  <div ref={walkthroughRef}>
                    <Walkthrough />
                  </div>
                  
                  <Contact />
                  <ThankYou />

                  {/* STICKY CONTACT: 
                    - Opens after 5s (handled inside StickyContact.jsx)
                    - Hidden on desktop when reaching Walkthrough section
                  */}
                  {!hideStickyOnDesktop && <StickyContact />}
                </div>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}