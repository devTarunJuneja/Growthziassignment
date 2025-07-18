// src/components/ExperienceSection.jsx
import React from 'react';
import '../styles/Experience.css';

const ExperienceSection = () => {
  return (
    <section className="experience">
      <div className="experience__inner">
        {/* Left image + overlays */}
        <div className="experience__media">
          <img
            src="/assets/experienceimg.png"
            alt="Enjoy a luxury experience"
            className="experience__image"
          />
          <img
            src="/assets/Video Button.png"
            alt="Play video"
            className="experience__play-btn"
          />
          <img
            src="/assets/Line2.png"
            alt=""
            aria-hidden="true"
            className="experience__line"
          />
        </div>

        {/* Right text block */}
        <div className="experience__content">
          <p className="experience__preheading">DISCOVER OUR HOTEL</p>
          <h2 className="experience__title">Enjoy A Luxury Experience</h2>
          <p className="experience__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="/discover" className="experience__link">
            Discover More <span className="experience__link-arrow">›</span>
            <span className="experience__link-underline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
