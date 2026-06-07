import React from 'react';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section__inner about__grid">
        <div className="about__headline">
          <p className="eyebrow">About</p>
          <h2>Professional developer with a focus on reliable frontend delivery.</h2>
          <p className="about__copy">
            I build modern interfaces that help product teams communicate clearly and ship with confidence. My portfolio is focused on real-world problem solving, thoughtful layout, and clean visual hierarchy.
          </p>
          <p className="about__copy">
            I enjoy turning design direction into accessible experiences, refining interactions, and writing maintainable code that stays production-ready.
          </p>
        </div>

        <div className="card about__pillars">
          <div>
            <h3>Core skills</h3>
            <ul className="skill-list">
              <li>React + component design</li>
              <li>Responsive layouts with Flexbox & Grid</li>
              <li>Modern UI/UX patterns</li>
              <li>API integration & data-driven interfaces</li>
            </ul>
          </div>

          <div>
            <h3>Tools I use</h3>
            <ul className="tool-list">
              <li>VS Code</li>
              <li>GitHub</li>
              <li>Chrome DevTools</li>
              <li>Figma / design reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
