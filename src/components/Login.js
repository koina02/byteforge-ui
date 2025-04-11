// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login - in production, replace this with an actual API call
    if (email === 'student@example.com' && password === 'password123') {
      // Save token in localStorage for this demo (in reality, it would come from the backend)
      localStorage.setItem('userToken', 'sampleToken');
      navigate('/dashboard'); // Redirect to dashboard after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

