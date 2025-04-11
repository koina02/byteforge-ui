import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // 🔐 Save token if provided
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        // 👇 Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    box: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#1D2955',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '1rem',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
