// src/Dashboard.js
import React from 'react';
import './Dashboard.css'; // We'll add styles later

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/assignments">Assignments</a></li>
                    <li><a href="/messages">Messages</a></li>
                </ul>
            </div>
            <div className="dashboard-content">
                <h2>Welcome Back, Student!</h2>
                <div className="overview">
                    <h3>Your Progress</h3>
                    <p>Overview of courses, assignments, and messages.</p>
                    {/* Placeholder for future dynamic data */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
