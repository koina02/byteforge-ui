import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/api';

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      let result;
      if (type === 'register') {
        result = await registerUser(email, password, role);
      } else if (type === 'login') {
        result = await loginUser(email, password);
        // Optionally store the token in localStorage/sessionStorage
        localStorage.setItem('authToken', result.token);
      }
      setMessage(result.message || 'Success');
    } catch (error) {
      setMessage(error.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h3>{type === 'register' ? 'Register' : 'Login'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {type === 'register' && (
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        )}
        <button type="submit">{type === 'register' ? 'Register' : 'Login'}</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default AuthForm;
