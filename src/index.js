// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';  // Import your global CSS here
import App from './App';

ReactDOM.render(
  <App />, 
  document.getElementById('root') // Rendering the App component into the root div of your HTML
);
