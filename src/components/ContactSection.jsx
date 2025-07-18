import React from 'react';
import '../styles/ContactSection.css'; // Your existing CSS
import { FaPen, FaEnvelope, FaSearch } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
      

      {/* vertical accent line */}
      <img
        src="/assets/Line.png"
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
            {/* Optional: custom email subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Contact Request from Website"
            />
            {/* Optional: redirect after success */}
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
