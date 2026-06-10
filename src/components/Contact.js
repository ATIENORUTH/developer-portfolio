import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__inner">
        <div className="glass-card contact-card">
          <div className="eyebrow">Connect</div>
          <h2 className="contact-headline">Start a Conversation</h2>
          <p className="contact-desc">
            I'm currently looking for junior-to-mid level frontend opportunities. Let's build something together.
          </p>
          
          <a 
            href="mailto:joyruth904@gmail.com" 
            className="btn btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem', marginTop: '12px' }}
          >
            <FaEnvelope style={{ marginRight: '8px' }} /> Email Me
          </a>

          <div className="contact-links">
            <a 
              href="https://github.com/ATIENORUTH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-icon-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/ruth-joy-526a32332" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-icon-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
