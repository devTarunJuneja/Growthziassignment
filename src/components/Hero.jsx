import React, { useState } from 'react';
import '../styles/Hero.css';
import useModal from '../hooks/useModal';
import AddButtonModal from './AddButtonModal';
import EditSection from './EditSection';

// ✅ Proper image imports
import lineImg from '../assets/Line.png';
import heroCircle from '../assets/herocircle.png';
import starImg from '../assets/star.svg';
import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';
import calendarIcon from '../assets/calendar.svg';

const HeroSection = () => {
  const { isOpen, open, close } = useModal();
  const [buttons, setButtons] = useState([
    { text: 'Check Availability', url: '#booking-form' },
  ]);

  function handleAdd(btn) {
    setButtons(prev => [...prev, btn]);
  }

  return (
    <section className="hero">
      <div className="hero__inner">
        {/* LEFT SIDE CONTENT */}
        <div className="hero__content">
          {/* Vertical Accent Line */}
          <img
            src={lineImg}
            alt=""
            aria-hidden="true"
            className="hero__accent-line-img"
          />

          {/* Editable Subheading */}
          <EditSection
            component="HeroSection"
            field="subheading"
            value="BEST PLACE TO RELAX & ENJOY"
          >
            {value => <p className="hero__subheading">{value}</p>}
          </EditSection>

          {/* Editable Main Title */}
          <EditSection
            component="HeroSection"
            field="title"
            value={"Perfect Place to Enjoy\nYour Life"}
          >
            {value => (
              <h1 className="hero__title">
                {value.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
            )}
          </EditSection>

          {/* Rating Circles & Text */}
          <div className="hero__rating">
            <div className="hero__circles">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  src={heroCircle}
                  alt=""
                  aria-hidden="true"
                  className="hero__circle-img"
                />
              ))}
            </div>
            <span className="hero__rating-text">
              4.8 Rated Around The World
            </span>
            <img
              src={starImg}
              alt="star"
              className="hero__star-img"
            />
          </div>

          {/* Carousel Arrows */}
          <div className="hero__arrows">
            <button className="hero__arrow-btn">
              <img
                src={chevronLeft}
                alt="Previous"
                className="hero__arrow-img"
              />
            </button>
            <button className="hero__arrow-btn">
              <img
                src={chevronRight}
                alt="Next"
                className="hero__arrow-img"
              />
            </button>
          </div>

          {/* Floating + Add Button */}
          <button className="hero__add-btn" onClick={open}>
            +
          </button>
        </div>

        {/* RIGHT SIDE BOOKING FORM */}
        <div className="hero__form" id="booking-form">
          <form className="booking-form">
            <div className="booking-form__field">
              <label htmlFor="checkin" className="booking-form__label">
                Check In
              </label>
              <div className="booking-form__input-wrapper">
                <input
                  type="date"
                  id="checkin"
                  defaultValue="2023-12-24"
                  className="booking-form__input"
                />
                <img
                  src={calendarIcon}
                  alt=""
                  aria-hidden="true"
                  className="booking-form__icon"
                />
              </div>
            </div>

            <div className="booking-form__field">
              <label htmlFor="checkout" className="booking-form__label">
                Check Out
              </label>
              <div className="booking-form__input-wrapper">
                <input
                  type="date"
                  id="checkout"
                  defaultValue="2023-12-28"
                  className="booking-form__input"
                />
                <img
                  src={calendarIcon}
                  alt=""
                  aria-hidden="true"
                  className="booking-form__icon"
                />
              </div>
            </div>

            <div className="booking-form__row">
              <div className="booking-form__field booking-form__field--small">
                <label htmlFor="room" className="booking-form__label">
                  Room
                </label>
                <select id="room" className="booking-form__select">
                  {[1, 2, 3].map(n => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div className="booking-form__field booking-form__field--small">
                <label htmlFor="guest" className="booking-form__label">
                  Guest
                </label>
                <select id="guest" className="booking-form__select">
                  {[1, 2, 3].map(n => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="booking-form__btn">
              Check Availability
            </button>
          </form>
        </div>
      </div>

      {/* Add‑Button Modal */}
      <AddButtonModal isOpen={isOpen} close={close} onAdd={handleAdd} />
    </section>
  );
};

export default HeroSection;
