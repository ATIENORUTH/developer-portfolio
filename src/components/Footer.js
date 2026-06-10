import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Joy Ruth. Developer Portfolio.</p>
        <div className="footer-links">
          <a href="https://github.com/ATIENORUTH" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ruth-joy-526a32332" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
