import axios from 'axios';

// Create an Axios instance
const API_URL = 'http://localhost:5000/api'; // Make sure your backend is running at this URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register User
export const registerUser = async (email, password, role) => {
  try {
    const response = await api.post('/auth/register', { email, password, role });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Server error';
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data; // This will contain the token and user data
  } catch (error) {
    throw error.response ? error.response.data : 'Server error';
  }
};

// Get User Profile (Requires Auth Token)
export const getUserProfile = async (token) => {
  try {
    const response = await api.get('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Server error';
  }
};
