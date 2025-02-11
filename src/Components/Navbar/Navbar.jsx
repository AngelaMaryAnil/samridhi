import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Correct path to the image
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Website Logo" />
      </div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`menu-list ${menuOpen ? 'menu-open' : ''}`}>
        <li><Link to="/" className="menu-item">Home</Link></li>
        <li><Link to="/about" className="menu-item">About Us</Link></li>
        <li>
          <button 
            className="menu-item login-btn"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </li>
        <li><Link to="/contact" className="menu-item">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
