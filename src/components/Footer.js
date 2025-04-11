import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:email@example.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
