import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedCaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
