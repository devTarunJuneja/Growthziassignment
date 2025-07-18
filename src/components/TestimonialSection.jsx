import React from 'react';
import '../styles/TestimonialSection.css';

// Image imports
import star from '../assets/star.svg';
import image1 from '../assets/Image1.png';
import slider from '../assets/Slider.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      {/* Decorative vertical line */}
      <div className="ts-line" />

      {/* Section label */}
      <p className="ts-label">OUR CUSTOMER REVIEW</p>

      {/* Main heading */}
      <h2 className="ts-heading">What Our Client Says</h2>

      {/* 5‑star rating */}
      <div className="ts-stars">
        {Array.from({ length: 1 }).map((_, i) => (
          <img
            key={i}
            src={star}
            alt="star"
            className="ts-star"
          />
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="ts-quote">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.”
      </blockquote>

      {/* Client avatar + name/role */}
      <div className="ts-client">
        <img
          src={image1}
          alt="Client avatar"
          className="ts-avatar"
        />
        <div className="ts-client-text">
          <h3 className="ts-client-name">Jackson Dean</h3>
          <p className="ts-client-role">Guest</p>
        </div>
      </div>

      {/* Slider arrows + pagination dots */}
      <div className="ts-slider">
        <img
          src={slider}
          alt="testimonial slider controls"
          className="ts-slider-img"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
