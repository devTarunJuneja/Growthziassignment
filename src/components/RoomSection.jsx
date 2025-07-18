import React from 'react';
import '../styles/RoomSection.css';

const RoomsSection = () => (
  <section className="rooms-section">
    <div className="rooms-section__inner">
      {/* Top Accent Line */}
      <img src="/assets/Line.png" alt="" aria-hidden="true" className="rooms-section__line" />

      {/* Pre‑Heading */}
      <p className="rooms-section__preheading">OUR ROOM CHOICES</p>

      {/* Title */}
      <h2 className="rooms-section__title">Luxury Rooms &amp; Suites</h2>

      {/* Carousel */}
      <div className="rooms-section__carousel">
        {/* Left Arrow */}
        <button className="rooms-section__arrow rooms-section__arrow--left">‹</button>

        {/* Slide Frame */}
        <div className="rooms-section__slide">
          {/* White Info Card (exact image) */}
          <img
            src="/assets/Room Info.png"
            alt="Room Info"
            className="rooms-section__card-img"
          />

          {/* Grey Background Panel */}
          <img
            src="/assets/Imageroom.png"
            alt=""
            aria-hidden="true"
            className="rooms-section__panel-img"
          />
        </div>

        {/* Right Arrow */}
        <button className="rooms-section__arrow rooms-section__arrow--right">›</button>
      </div>

     </div>

          {/* Slider controls (arrows + dots) */}
      <div className="ts-slider">
        <img
         src="/assets/Slider.png"
          alt="room slider controls"
          className="ts-slider-img"
        />
      </div>
    
  
  </section>
);

export default RoomsSection;
