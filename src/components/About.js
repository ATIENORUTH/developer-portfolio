import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import cutePhoto from '../Assets/cute.jpg';

const About = () => {
  const bulletPoints = [
    "Frontend Developer",
    "UI-focused builder",
    "Dashboard & API experience",
    "Automation (n8n)"
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive UI", "UI/UX Layouts"]
    },
    {
      title: "Data/Logic Understanding",
      skills: ["APIs Integration", "Supabase", "JSON Data", "State Management", "Git/GitHub"]
    },
    {
      title: "Automation (n8n)",
      skills: ["n8n Workflows", "Webhooks", "API Orchestration", "Automation"]
    }
  ];

  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <div className="eyebrow">Profile & Capabilities</div>
        <h2>Overview</h2>
        
        <div className="about-grid" style={{ marginTop: '32px' }}>
          {/* About bullets (Left Card) */}
          <div className="glass-card about-bullet-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img 
                src={cutePhoto} 
                alt="Joy Ruth" 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  border: '2px solid var(--primary)',
                  boxShadow: '0 0 10px rgba(167, 139, 250, 0.3)' 
                }} 
              />
              <div>
                <h3 style={{ margin: 0 }}>System Profile</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Joy Ruth</p>
              </div>
            </div>
            <div className="about-bullets">
              {bulletPoints.map((point, index) => (
                <div key={index} className="about-bullet">
                  <div className="about-bullet-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="about-bullet-text">{point}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix (Right Card) */}
          <div className="glass-card skills-card">
            <h3>Skills Matrix</h3>
            {skillCategories.map((category, index) => (
              <div key={index} className="skills-category">
                <h4>{category.title}</h4>
                <div className="skills-tags">
                  {category.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skills-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
