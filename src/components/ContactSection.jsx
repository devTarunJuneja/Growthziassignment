import React from 'react';
import '../styles/ContactSection.css';
import { FaPen, FaEnvelope, FaSearch } from 'react-icons/fa';

// ✅ Import the image using ES Module
import lineImg from '../assets/Line.png'; // adjust the path if needed

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* vertical accent line */}
      <img
        src={lineImg}
        alt=""
        className="contact-line"
        aria-hidden="true"
      />

      <div className="contact-content">
        {/* Text block */}
        <div className="contact-text">
          <p className="contact-subheading">CONTACT US</p>
          <h1 className="contact-heading">
            Get In Touch<br />
            With Us
          </h1>
        </div>

        {/* Form card */}
        <div className="contact-card">
          <form
            className="contact-form"
            action="https://formspree.io/f/xrbqpboz"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact Request from Website"
            />
            <input
              type="hidden"
              name="_next"
              value="https://your-domain.com/thank-you"
            />

            <div className="input-group">
              <label htmlFor="name">Name</label>
              <div className="input-icon-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name Here"
                  required
                />
                <FaPen className="icon" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Here"
                  required
                />
                <FaEnvelope className="icon" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <div className="input-icon-wrapper">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message Here"
                  required
                ></textarea>
                <FaSearch className="icon" />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
