import React from 'react';
import { FaPalette, FaImage, FaStar } from 'react-icons/fa';
import './Posters.css';

const Posters = () => {
  const posterFeatures = [
    {
      icon: <FaPalette />,
      title: "Custom Designs",
      description: "Tailored poster designs that match your brand and vision"
    },
    {
      icon: <FaImage />,
      title: "High-Quality Prints",
      description: "Professional printing with vibrant colors and crisp details"
    },
    {
      icon: <FaStar />,
      title: "Creative Concepts",
      description: "Unique and eye-catching designs that stand out"
    }
  ];

  return (
    <section className="section posters" id="posters">
      <div className="section__inner">
        <div className="posters-header">
          <div className="eyebrow">Creative Services</div>
          <h2>Poster Design</h2>
          <p className="posters-description">
            Transform your ideas into stunning visual posters. I create custom designs for events, 
            promotions, branding, and personal projects. Each poster is crafted with attention to 
            detail, combining aesthetics with effective communication to deliver impactful visual messages.
          </p>
        </div>

        <div className="posters-grid">
          {posterFeatures.map((feature, index) => (
            <div key={index} className="glass-card poster-card">
              <div className="poster-card__icon">
                {feature.icon}
              </div>
              <h3 className="poster-card__title">{feature.title}</h3>
              <p className="poster-card__desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="posters-cta">
          <a href="#contact" className="btn btn-primary">
            Request a Poster Design
          </a>
        </div>
      </div>
    </section>
  );
};

export default Posters;
