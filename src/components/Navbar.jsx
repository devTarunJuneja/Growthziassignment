import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          <img src="/assets/Logo.svg" alt="Imperial Grand Hotel" />
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
