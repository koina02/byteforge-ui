// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      navigate('/login'); // Redirect to login if there's no token
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <p>Here you can track your progress, view courses, and more!</p>
      <button onClick={() => navigate('/profile')}>View Profile</button>
    </div>
  );
};

export default Dashboard;

