import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import studentDashboardScreenshot from '../Assets/student_dashboard_screenshot.png';
import busBookingScreenshot from '../Assets/bus_booking_screenshot.png';
import todoAppScreenshot from '../Assets/todo_app_screenshot.png';
import clientPortfolioScreenshot from '../Assets/client_portfolio_screenshot.png';

const projectsList = [
  {
    title: "Student Dashboard",
    description: "Next.js and Supabase dashboard built for clear student progress tracking and data-driven decisions.",
    stack: ["Next.js", "Supabase", "Framer Motion", "React"],
    image: studentDashboardScreenshot,
    liveUrl: "https://student-dashboard-beryl-gamma.vercel.app/",
    githubUrl: "https://github.com/ATIENORUTH/student-dashboard"
  },
  {
    title: "Bus Booking System",
    description: "A travel booking experience designed around step-by-step reservation flow and user confidence.",
    stack: ["HTML", "CSS", "JavaScript", "UX Design"],
    image: busBookingScreenshot,
    liveUrl: "https://atienoruth.github.io/Bus-Booking/",
    githubUrl: "https://github.com/ATIENORUTH/Bus-Booking"
  },
  {
    title: "To-Do App",
    description: "A focused CRUD application that demonstrates core frontend state management and polished interaction.",
    stack: ["React", "CRUD", "Local Storage", "Responsive UI"],
    image: todoAppScreenshot,
    liveUrl: "https://atienoruth.github.io/to-do-app/",
    githubUrl: "https://github.com/ATIENORUTH/to-do-app"
  },
  {
    title: "Client Portfolio Website",
    description: "Delivered a polished portfolio solution for a client seeking a modern online presence.",
    stack: ["React", "Responsive Design", "UI/UX", "Client Delivery"],
    image: clientPortfolioScreenshot,
    liveUrl: "https://superlative-pudding-9dcdae.netlify.app/",
    githubUrl: "https://github.com/ATIENORUTH/my-portfolio"
  }
];

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <div className="projects-header">
          <div className="eyebrow">Projects Grid</div>
          <h2>Selected Work</h2>
        </div>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <div className="project-card__image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              
              <div className="tech-badges">
                {project.stack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-card__actions">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-link"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
