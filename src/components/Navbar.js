// src/Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

