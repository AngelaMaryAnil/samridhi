import React, { useState, useContext } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data);
      // Notify login successful
      alert('Login successful');
      // Store user information in local storage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      // Update user context
      setUser(response.data.user);
      // Redirect to home page
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
      } else {
        console.error(error.message);
      }
      // Handle login error
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            name="identifier"
            placeholder="Email or phone number"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;