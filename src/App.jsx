import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/CoursesSection";
import Why from "./components/Why";
import Who from "./components/Who";
import Footer from "./components/Footer";
import Learning from "./components/Learning";
import Faq from "../src/components/Faq";
import Testimonial from "../src/components/Testimonial";
import Contact from "../src/components/Contact";

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
          <>
            <Header />
            <Hero />
            <Courses />
            <Why />
            <Who />
            <Learning />
            <Faq />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* --------------------------------------- */}
      {/* INFO COURSES PAGES */}
      {/* --------------------------------------- */}

      <Route 
        path="/courses/performance" 
        element={<Performance />} 
      />

      <Route 
        path="/courses/meta" 
        element={<Meta />} 
      />

      <Route 
        path="/courses/google" 
        element={<Google />} 
      />

    </Routes>
  );
}
