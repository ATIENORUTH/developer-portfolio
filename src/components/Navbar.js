import React from 'react';
import { FaGithub } from 'react-icons/fa';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="site-brand">Joy Ruth</div>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="navbar__cta"
          href="https://github.com/ATIENORUTH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ marginRight: '8px' }} /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Navbar;
