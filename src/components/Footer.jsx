import React from 'react';
import { Twitter, Facebook, Instagram, Globe2 } from 'lucide-react';
import '../styles/Footer.css';

// ✅ Import the logo properly
import logo from '../assets/Logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top columns */}
      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <img
            src={logo}
            alt="Imperial Grand Hotel"
            className="footer__logo"
          />
          <p className="footer__brand-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer__links">
          <h4 className="footer__heading">USEFUL LINKS</h4>
          <ul className="footer__link-list">
            {['Home','About','Service','Room'].map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer__subscribe">
          <h4 className="footer__heading">SUBSCRIBE</h4>
          <p className="footer__subscribe-text">
            Don’t miss to subscribe our news, kindly fill the form below
          </p>
          <form className="footer__form">
            <input
              type="email"
              placeholder="Your Email Here"
              className="footer__input"
            />
            <button type="submit" className="footer__btn">
              <span className="footer__btn-arrow">›</span>
            </button>
          </form>
        </div>
      </div>

      {/* Middle: one line, icons, one line */}
      <div className="footer__middle">
        <div className="footer__sep" /> {/* left line */}
        <div className="footer__social"> {/* icons centered */}
          {[Twitter, Facebook, Instagram, Globe2].map((Icon, i) => (
            <a key={i} href="#" className="footer__social-link">
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="footer__sep" /> {/* right line */}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © 2025 Imperial Grand Hotel. All Rights Reserved.
        </p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <span className="footer__dot" />
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
