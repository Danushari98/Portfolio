import React from "react";
import Navbar from "./Portfolio/Navbar";
import Hero from "./Portfolio/Hero";
import About from "./Portfolio/About";
import Skills from "./Portfolio/TechnicalSkills";
import Experience from "./Portfolio/Experience";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";


import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}
