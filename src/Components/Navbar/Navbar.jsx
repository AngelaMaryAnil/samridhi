import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Ensure the correct path
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to close the menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-logo">
        {/* Clicking logo takes the user to Home */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Website Logo" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`menu-list ${menuOpen ? 'menu-open' : ''}`}>
        <li><Link to="/" className="menu-item" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className="menu-item" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/contact" className="menu-item" onClick={closeMenu}>Contact Us</Link></li>
        <li><Link to="/login" className="menu-item" onClick={closeMenu}>Login</Link></li>
        {/*<li>
          <button 
            className="menu-item login-btn"
            onClick={() => {
              navigate('/login');
              closeMenu();
            }}
          >
            Login
          </button>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
