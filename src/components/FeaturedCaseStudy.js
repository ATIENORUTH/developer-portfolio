import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaBookOpen, FaTimes } from 'react-icons/fa';
import dubaiMallScreenshot from '../Assets/dubai_mall_screenshot.png';

const FeaturedCaseStudy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudyDetails = {
    title: "Dubai Mall Product Experience",
    description: "A premium product experience designed for luxury retail and seamless navigation.",
    stack: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    liveUrl: "https://dubaimallo.netlify.app/",
    githubUrl: "https://github.com/ATIENORUTH/dubaimallo",
    goal: "Design a modern product experience that reflects premium retail and guides users toward confident decisions.",
    challenge: "The existing design felt busy and the mobile path lacked hierarchy, making the product story hard to scan.",
    solution: "Introduced high-contrast grids, micro-animations, and optimized mobile navigation paths to highlight key sections.",
    outcome: "Delivered a portfolio-ready experience that highlights design-to-code execution and mobile responsiveness."
  };

  return (
    <section className="section featured-section" id="case-study">
      <div className="section__inner">
        <div className="projects-header">
          <div className="eyebrow">Showcase Project</div>
          <h2>Featured Case Study</h2>
        </div>

        <div className="glass-card featured-card" style={{ marginTop: '24px' }}>
          <div className="featured-card-grid">
            {/* Left side: Image Mockup */}
            <div className="featured-image">
              <img 
                src={dubaiMallScreenshot} 
                alt="Dubai Mall Project Mockup" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Right side: Text & Badges */}
            <div className="featured-content">
              <div className="featured-badge">Featured</div>
              <h3 className="featured-title">{caseStudyDetails.title}</h3>
              <p className="featured-desc">{caseStudyDetails.description}</p>
              
              <div className="tech-badges">
                {caseStudyDetails.stack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="featured-actions">
                <a 
                  href={caseStudyDetails.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a 
                  href={caseStudyDetails.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-link"
                >
                  <FaGithub /> GitHub
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <FaBookOpen /> View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
            
            <div className="modal-body">
              <div className="modal-header-block">
                <div className="eyebrow" style={{ marginBottom: '4px' }}>Case Study Detail</div>
                <h3 className="modal-header-title">{caseStudyDetails.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{caseStudyDetails.description}</p>
              </div>

              <div className="modal-grid">
                <div className="modal-card">
                  <h4>Goal</h4>
                  <p>{caseStudyDetails.goal}</p>
                </div>
                
                <div className="modal-card">
                  <h4>Challenges</h4>
                  <p>{caseStudyDetails.challenge}</p>
                </div>
                
                <div className="modal-card">
                  <h4>Solution</h4>
                  <p>{caseStudyDetails.solution}</p>
                </div>
                
                <div className="modal-card">
                  <h4>Outcome</h4>
                  <p>{caseStudyDetails.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedCaseStudy;
