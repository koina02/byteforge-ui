// src/Courses.js
import React from 'react';
import './Courses.css'; // We'll add styles later

const Courses = () => {
    return (
        <div className="courses-container">
            <h2>Available Courses</h2>
            <div className="courses-list">
                <div className="course-card">
                    <h3>Course Title 1</h3>
                    <p>Course description goes here.</p>
                    <button>Enroll Now</button>
                </div>
                <div className="course-card">
                    <h3>Course Title 2</h3>
                    <p>Course description goes here.</p>
                    <button>Enroll Now</button>
                </div>
                {/* Add more courses as needed */}
            </div>
        </div>
    );
};

export default Courses;
