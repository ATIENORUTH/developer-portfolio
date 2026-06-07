import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <div className="section__inner hero__content">
        <p className="eyebrow">Frontend developer</p>
        <h1 className="hero__title">
          I build clean, responsive UI experiences for product-focused teams.
        </h1>
        <p className="hero__text">
          I help startups and teams translate complex concepts into polished interfaces with React, modern CSS, and thoughtful user flows.
        </p>

        <div className="hero__actions">
          <a className="button" href="#projects">
            View Projects <FaArrowRight style={{ marginLeft: '10px' }} />
          </a>
          <a className="button-outline" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero__feature-list">
          <div className="hero__feature-item">React & component architecture</div>
          <div className="hero__feature-item">Responsive, mobile-first layouts</div>
          <div className="hero__feature-item">UX-focused problem solving</div>
          <div className="hero__feature-item">Clean, recruiter-ready presentation</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
