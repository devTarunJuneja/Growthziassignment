import React from 'react';
import '../styles/Experience.css';

// ✅ Import images properly
import experienceImg from '../assets/experienceimg.png';
import videoButton from '../assets/Video Button.png';
import line2 from '../assets/Line2.png';

const ExperienceSection = () => {
  return (
    <section className="experience">
      <div className="experience__inner">
        {/* Left image + overlays */}
        <div className="experience__media">
          <img
            src={experienceImg}
            alt="Enjoy a luxury experience"
            className="experience__image"
          />
          <img
            src={videoButton}
            alt="Play video"
            className="experience__play-btn"
          />
          <img
            src={line2}
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
