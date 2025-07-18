import React from 'react';
import '../styles/DiscountBanner.css'; // Assuming you have a CSS file for styles

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="discount-banner__inner">
        {/* Left: headline */}
        <div className="discount-banner__text">
          <p className="discount-banner__line1">
            Get A Luxurious Experience
          </p>
          <p className="discount-banner__line2">
            With 25% Off Now
          </p>
        </div>

        {/* Right: Book Now button */}
        <a href="#" className="discount-banner__cta">
          <span className="discount-banner__cta-text">Book Now</span>
          <span className="discount-banner__cta-arrow">›</span>
        </a>
      </div>
    </section>
  );
}
