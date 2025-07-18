import React from 'react';
import '../styles/DiscountBanner.css';
import discountImg from '../assets/discount-bg.png'; // ✅ proper image import

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="discount-banner__inner">
        <div className="discount-banner__text">
          <p className="discount-banner__line1">
            Get A Luxurious Experience
          </p>
          <p className="discount-banner__line2">
            With 25% Off Now
          </p>
        </div>

        <a href="#" className="discount-banner__cta">
          <span className="discount-banner__cta-text">Book Now</span>
          <span className="discount-banner__cta-arrow">›</span>
        </a>

        {/* Optional: Add a decorative image */}
        <img
          src={discountImg}
          alt="Luxury background"
          className="discount-banner__img"
        />
      </div>
    </section>
  );
}
