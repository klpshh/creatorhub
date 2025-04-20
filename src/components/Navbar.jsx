import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">CreatorHub</div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={handleToggle}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
