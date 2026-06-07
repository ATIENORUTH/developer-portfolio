import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  coreProjects,
  practiceProjects,
  clientProjects,
  automationExperience
} from '../data/projectsData';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>

      <div className="project-card__section">
        <div className="meta">Problem</div>
        <p>{project.problem}</p>
      </div>

      <div className="project-card__section">
        <div className="meta">Solution</div>
        <p>{project.solution}</p>
      </div>

      <div className="project-card__section">
        <div className="meta">Key features</div>
        <ul className="project-features">
          {project.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="tech-badges">
        {project.stack.map((tech) => (
          <span className="tech-badge" key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-card__actions">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live demo <FaExternalLinkAlt style={{ marginLeft: '8px' }} />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub <FaGithub style={{ marginLeft: '8px' }} />
          </a>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="section section--work" id="projects">
      <div className="section__inner">
        <div className="section__header">
          <p className="eyebrow">Projects</p>
          <h2>Selected work.</h2>
        </div>

        <div className="project-category">
          <div className="project-category__header">
            <div>
              <p className="eyebrow">Core applications</p>
              <h3>Projects built for product-level interaction and data-driven interfaces.</h3>
            </div>
          </div>

          <div className="project-group project-group--core">
            {coreProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="project-category">
          <div className="project-category__header">
            <div>
              <p className="eyebrow">Practice project</p>
              <h3>Fundamental frontend work that shows strong control of state and UI behavior.</h3>
            </div>
          </div>

          <div className="project-group project-group--single">
            {practiceProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="project-category">
          <div className="project-category__header">
            <div>
              <p className="eyebrow">Client work</p>
              <h3>Real-world delivery.</h3>
            </div>
          </div>

          <div className="project-group project-group--single">
            {clientProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="automation-panel">
          <p className="eyebrow">Automation & AI workflows</p>
          <h3>{automationExperience.title}</h3>
          <p>{automationExperience.summary}</p>
          <ul>
            {automationExperience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
