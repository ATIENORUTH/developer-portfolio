import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <div className="section__inner hero-grid">
        <div className="hero-text">
          <div className="eyebrow">Developer Dashboard</div>
          <h1 className="hero-headline">
            Frontend Developer building modern web applications
          </h1>
          <p className="hero-subline">
            Specializing in clean user interfaces, component-driven design, and workflow automation.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight style={{ marginLeft: '6px' }} />
            </a>
            <a 
              href="https://github.com/ATIENORUTH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <FaGithub style={{ marginRight: '6px' }} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="dashboard-mock">
            <div className="mock-header">
              <div className="mock-dots">
                <div className="mock-dot"></div>
                <div className="mock-dot"></div>
                <div className="mock-dot"></div>
              </div>
              <div className="mock-title">developer_profile.json</div>
            </div>
            
            <div className="mock-body">
              <div className="mock-grid">
                <div className="mock-card">
                  <div className="mock-label">ACTIVE STATUS</div>
                  <div className="mock-value mock-value-accent">READY TO SHIP</div>
                </div>
                
                <div className="mock-card">
                  <div className="mock-label">PROJECTS COMPLETED</div>
                  <div className="mock-value">12+</div>
                </div>
                
                <div className="mock-card mock-card-wide">
                  <div className="mock-label">COMMIT ACTIVITY (7 DAYS)</div>
                  <div className="mock-chart">
                    <div className="mock-chart-bar" style={{ height: '30%' }}></div>
                    <div className="mock-chart-bar" style={{ height: '55%' }}></div>
                    <div className="mock-chart-bar" style={{ height: '40%' }}></div>
                    <div className="mock-chart-bar" style={{ height: '80%' }}></div>
                    <div className="mock-chart-bar filled" style={{ height: '95%' }}></div>
                    <div className="mock-chart-bar filled" style={{ height: '85%' }}></div>
                    <div className="mock-chart-bar filled" style={{ height: '90%' }}></div>
                  </div>
                </div>

                <div className="mock-card mock-card-wide">
                  <div className="mock-label">TECH STACK SUMMARY</div>
                  <pre className="mock-code">
{`{
  "frontend": ["React", "JavaScript", "HTML/CSS"],
  "integrations": ["APIs", "Supabase"],
  "workflows": ["n8n", "GitHub Actions"]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
