import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Why from "./components/Why";
import Who from "./components/Who";
import Footer from "./components/Footer";
import Learning from "./components/Learning";
import Faq from "../src/components/Faq";
import Testimonial from "../src/components/Testimonial";
import Contact from "../src/components/Contact";
import MentorSection from "./components/Mentor";  

// InfoCourse Pages
import Performance from "./InfoCourses/Performance";
import Meta from "./InfoCourses/Meta";
import Google from "./InfoCourses/Google";

export default function App() {
  return (
    <Routes>

      {/* --------------------------------------- */}
      {/* HOME PAGE ROUTE */}
      {/* --------------------------------------- */}
      <Route
        path="/"
        element={
          // FIXED: Added this wrapper div
          <div className="w-full overflow-x-hidden relative">
            <Header />
            <Hero />
            <AboutProject />
            <Why />
            <Amenities/>
            <Who />
            <Contact/>
            <Footer />
          </div>
        }
      />

      {/* --------------------------------------- */}
      {/* INFO COURSES PAGES */}
      {/* --------------------------------------- */}
      {/* It is good practice to wrap these too if they have similar issues */}

      <Route 
        path="/courses/performance" 
        element={
          <div className="w-full overflow-x-hidden relative">
            <Performance />
          </div>
        } 
      />

      <Route 
        path="/courses/meta" 
        element={
          <div className="w-full overflow-x-hidden relative">
            <Meta />
          </div>
        } 
      />

      <Route 
        path="/courses/google" 
        element={
          <div className="w-full overflow-x-hidden relative">
            <Google />
          </div>
        } 
      />

    </Routes>
  );
}