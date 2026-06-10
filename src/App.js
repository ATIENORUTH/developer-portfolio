import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCaseStudy />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
