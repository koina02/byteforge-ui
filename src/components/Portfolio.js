import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Project description goes here.</p>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Project description goes here.</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
}

export default Portfolio;
