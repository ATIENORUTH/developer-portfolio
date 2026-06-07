import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'mailto:joyruth904@gmail.com?subject=Frontend%20Opportunity&body=Hello%2C%20I%20would%20like%20to%20connect%20about%20a%20frontend%20role.';
  };

  return (
    <section className="section contact" id="contact">
      <div className="section__inner contact__inner">
        <div className="contact__info">
          <p className="eyebrow">Contact</p>
          <h2>Ready to collaborate on your next frontend product.</h2>
          <p>
            Send a quick email, review my code on GitHub, or connect on LinkedIn. I’m available for junior-to-mid frontend roles and contract work.
          </p>
        </div>

        <div className="contact__card">
          <form className="contact__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Brief message" rows="5" required />
            <button type="submit">Email me</button>
          </form>

          <div className="contact__item">
            <div className="contact__item-icon">
              <FaEnvelope />
            </div>
            <div className="contact__item-content">
              <strong>Email</strong>
              <a href="mailto:joyruth904@gmail.com">joyruth904@gmail.com</a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__item-icon">
              <FaGithub />
            </div>
            <div className="contact__item-content">
              <strong>GitHub</strong>
              <a href="https://github.com/ATIENORUTH" target="_blank" rel="noopener noreferrer">
                github.com/ATIENORUTH
              </a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__item-icon">
              <FaLinkedin />
            </div>
            <div className="contact__item-content">
              <strong>LinkedIn</strong>
              <a href="https://linkedin.com/in/ruth-joy-526a32332" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ruth-joy-526a32332
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
