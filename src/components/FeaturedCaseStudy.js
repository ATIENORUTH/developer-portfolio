import React from 'react';
import { featuredCaseStudy } from '../data/projectsData';

const FeaturedCaseStudy = () => {
  return (
    <section className="section section--case-study" id="case-study">
      <div className="section__inner section__inner--wide">
        <div className="section__header">
          <p className="eyebrow">Featured case study</p>
          <h2>Dubai Mall Product Experience</h2>
          <a href={featuredCaseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="button-outline" style={{ marginTop: '16px', display: 'inline-flex' }}>
            View live experience
          </a>
        </div>

        <div className="case-study-grid">
          <article className="case-study-card">
            <h3>Project goal</h3>
            <p>{featuredCaseStudy.goal}</p>
          </article>

          <article className="case-study-card">
            <h3>Main challenge</h3>
            <p>{featuredCaseStudy.challenge}</p>
          </article>

          <article className="case-study-card case-study-card--wide">
            <h3>Approach</h3>
            <ul>
              {featuredCaseStudy.approach.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="case-study-card">
            <h3>Iteration</h3>
            <p>{featuredCaseStudy.iteration}</p>
          </article>

          <article className="case-study-card">
            <h3>Outcome</h3>
            <p>{featuredCaseStudy.outcome}</p>
          </article>

          <article className="case-study-card case-study-card--wide">
            <h3>What I learned</h3>
            <ul>
              {featuredCaseStudy.learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
