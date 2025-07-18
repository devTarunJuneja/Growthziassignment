import React from 'react';
import '../styles/MapContactSection.css'; // CSS import
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

// ✅ Importing image files
import mapImage from '../assets/Map.png';
import lineImage from '../assets/Line2.png';

const MapContactSection = () => (
  <section className="map-contact-section">
    <div className="map-area">
      <img src={mapImage} alt="Hotel location map" className="map-image" />
    </div>

    <img src={lineImage} alt="" aria-hidden="true" className="divider-line" />

    <div className="contact-info-area">
      <p className="info-subheading">CONTACT INFO</p>
      <h2 className="info-heading">Contact Us</h2>

      <ul className="info-list">
        <li>
          <FiMail className="info-icon gold" />
          <div>
            <span className="info-label">Email Address</span>
            <span className="info-text">info@8pxlstudio</span>
          </div>
        </li>
        <li>
          <FiMapPin className="info-icon" />
          <div>
            <span className="info-label">Hotel Location</span>
            <span className="info-text">
              1250 West 6th Ave, New York, NY 10036, United States
            </span>
          </div>
        </li>
        <li>
          <FiPhone className="info-icon" />
          <div>
            <span className="info-label">Phone Number</span>
            <span className="info-text">+0123456789</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default MapContactSection;
