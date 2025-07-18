import React from 'react';
import '../styles/navbar.css';

// ✅ Import logo properly
import logo from '../assets/Logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          <img src={logo} alt="Imperial Grand Hotel" />
        </a>
        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Service</a></li>
          <li><a href="/pages">Pages</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
