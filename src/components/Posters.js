import React from 'react';
import { FaPalette, FaImage, FaStar } from 'react-icons/fa';
import './Posters.css';
import poster16 from '../Assets/poster 16.jpg';
import poster17 from '../Assets/poster 17.jpg';
import poster19 from '../Assets/poster 19.jpg';

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

  const postersList = [
    {
      title: "Creative Poster Design 16",
      description: "Eye-catching poster design featuring vibrant visuals and modern aesthetics.",
      image: poster16,
      tools: ["Adobe Photoshop", "Canva"]
    },
    {
      title: "Creative Poster Design 17",
      description: "Dynamic poster design with bold typography and engaging visual composition.",
      image: poster17,
      tools: ["Adobe Photoshop", "Creative Design"]
    },
    {
      title: "Creative Poster Design 19",
      description: "Professional poster design showcasing creative layout and attention to detail.",
      image: poster19,
      tools: ["Adobe Photoshop", "Canva"]
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

        <div className="posters-showcase">
          <div className="eyebrow">Featured Work</div>
          <h3>Recent Poster Designs</h3>
          <div className="posters-showcase-grid">
            {postersList.map((poster, index) => (
              <div key={index} className="glass-card poster-showcase-card">
                <div className="poster-showcase-card__image-wrapper">
                  <img src={poster.image} alt={poster.title} />
                </div>
                <h3 className="poster-showcase-card__title">{poster.title}</h3>
                <p className="poster-showcase-card__desc">{poster.description}</p>
                <div className="tech-badges">
                  {poster.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="tech-badge">{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
