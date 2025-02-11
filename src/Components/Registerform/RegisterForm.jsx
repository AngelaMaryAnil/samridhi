import React, { useState } from 'react';
import './Registerform.css'; // Reuse the same CSS for styling
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const statesAndDistricts = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna"],
  "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
  // Add more states and districts as needed
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    farmer: '',
    state: '',
    district: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.district) newErrors.district = 'District is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const { confirmPassword, ...dataToSend } = formData; // Exclude confirmPassword
        const response = await axios.post("http://127.0.0.1:5000/register", dataToSend);
        console.log(response.data.message); // Success message
        alert("Registration successful!");

        // Redirect to the login page
        navigate("/");
      } catch (error) {
        console.error("Error registering user:", error);
        alert(error.response?.data?.error || "Registration failed!");
      }
    }
  };

  return (
    <div className="wrapper2">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="ip-box">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="ip-box">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <div className="ip-box">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="farmer">
          <label>Farmer</label>
          <label>
            <input
              type="radio"
              name="farmer"
              value="yes"
              checked={formData.farmer === 'yes'}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="farmer"
              value="no"
              checked={formData.farmer === 'no'}
              onChange={handleChange}
              required
            />
            No
          </label>
          {errors.farmer && <span>{errors.farmer}</span>}
        </div>
        <div className="ip-box ">
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {Object.keys(statesAndDistricts).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <span>{errors.state}</span>}
        </div>
        <div className="ip-box">
          <label>District</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select District</option>
            {formData.state && statesAndDistricts[formData.state].map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
          {errors.district && <span>{errors.district}</span>}
        </div>
        <div className="ip-box">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="ip-box">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;