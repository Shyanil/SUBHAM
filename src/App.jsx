import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Why from "./components/Why";
import Who from "./components/Who";
import Footer from "./components/Footer";
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import ThankYou from "./components/ThankYou";
import Contact from "./components/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        /* FIXED: Changed onFinish to onComplete to match the Intro component prop */
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000 ease-in-out">
          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <div className="w-full overflow-x-hidden relative">
                  <Header />
                  <Hero />
                  <AboutProject />
                  <Why />
                  <Amenities />
                  <Who />
                  <Highlights />
                  <Gallery />
                  <Walkthrough/>
                  <Contact />
                  <ThankYou />
                </div>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}