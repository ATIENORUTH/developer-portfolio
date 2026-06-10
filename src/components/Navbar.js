import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="site-brand">
          JOY RUTH <span>PORTFOLIO</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a
          className="navbar__cta"
          href="https://github.com/ATIENORUTH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Navbar;
