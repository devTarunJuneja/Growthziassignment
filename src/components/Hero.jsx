// src/components/HeroSection.jsx
import React, { useState } from 'react';
import '../styles/Hero.css';
import useModal from '../hooks/useModal';
import AddButtonModal from './AddButtonModal';
import HoverEdit from './HoverEdit';

const HeroSection = () => {
  const { isOpen, open, close } = useModal();
// After: start with no buttons so "+ Add Button" always shows until you add one
const [buttons, setButtons] = useState([]);


  const handleAdd = (btn) => {
    setButtons((prev) => [...prev, btn]);
  };

  const handleDelete = (index) => {
    setButtons((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        {/* LEFT SIDE */}
        <div className="hero__content">
          <img src="/assets/Line.png" alt="" className="hero__accent-line-img" aria-hidden="true" />

          <HoverEdit component="HeroSection" field="subheading" value="BEST PLACE TO RELAX & ENJOY">
            {(value) => <p className="hero__subheading">{value}</p>}
          </HoverEdit>

          <HoverEdit component="HeroSection" field="title" value={"Perfect Place to Enjoy\nYour Life"}>
            {(value) => (
              <h1 className="hero__title">
                {value.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
            )}
          </HoverEdit>

          {/* RATING */}
          <div className="hero__rating">
            <div className="hero__circles">
              {[...Array(3)].map((_, i) => (
                <img key={i} src="/assets/herocircle.png" alt="" className="hero__circle-img" aria-hidden="true" />
              ))}
            </div>
            <span className="hero__rating-text">4.8 Rated Around The World</span>
            <img src="/assets/star.svg" alt="star" className="hero__star-img" />
          </div>

          {/* ARROWS */}
          <div className="hero__arrows">
            <button className="hero__arrow-btn">
              <img src="/assets/chevron-left.svg" alt="Previous" className="hero__arrow-img" />
            </button>
            <button className="hero__arrow-btn">
              <img src="/assets/chevron-right.svg" alt="Next" className="hero__arrow-img" />
            </button>
          </div>

     {/* Top‑right single‑slot add/edit button */}
          <div className="hero__top-buttons">
            {buttons.length === 0 ? (
              // No button yet → dashed placeholder
              <button className="hero__add-btn" onClick={open}>
                + Add Button
              </button>
            ) : (
              // One configured button → styled link + delete “×”
              <div className="hero-top-btn-wrapper">
                <a
                  href={buttons[0].url}
                  className={`hero-top-btn hero-top-btn--${buttons[0].style} hero-top-btn--${buttons[0].size}`}
                  style={{
                    backgroundColor: buttons[0].style === 'fill' ? buttons[0].color : 'transparent',
                    color: buttons[0].style === 'fill' ? '#ffffff' : buttons[0].color,
                    borderColor: buttons[0].style === 'outline' ? buttons[0].color : 'transparent',
                  }}
                >
                  {buttons[0].text}
                </a>
                <button
                  className="hero-top-btn__delete"
                  onClick={() => setButtons([])}
                  aria-label="Delete button"
                >
                  ×
                </button>
              </div>
            )}
          </div>
</div>

        {/* RIGHT SIDE FORM */}
        <div className="hero__form" id="booking-form">
          <form className="booking-form">
            <div className="booking-form__field">
              <label htmlFor="checkin" className="booking-form__label">Check In</label>
              <div className="booking-form__input-wrapper">
                <input type="date" id="checkin" defaultValue="2023-12-24" className="booking-form__input" />
                <img src="/assets/calendar.svg" alt="" className="booking-form__icon" aria-hidden="true" />
              </div>
            </div>

            <div className="booking-form__field">
              <label htmlFor="checkout" className="booking-form__label">Check Out</label>
              <div className="booking-form__input-wrapper">
                <input type="date" id="checkout" defaultValue="2023-12-28" className="booking-form__input" />
                <img src="/assets/calendar.svg" alt="" className="booking-form__icon" aria-hidden="true" />
              </div>
            </div>

            <div className="booking-form__row">
              <div className="booking-form__field booking-form__field--small">
                <label htmlFor="room" className="booking-form__label">Room</label>
                <select id="room" className="booking-form__select">
                  {[1, 2, 3].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="booking-form__field booking-form__field--small">
                <label htmlFor="guest" className="booking-form__label">Guest</label>
                <select id="guest" className="booking-form__select">
                  {[1, 2, 3].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="booking-form__btn">Check Availability</button>
          </form>
        </div>
      </div>

      <AddButtonModal isOpen={isOpen} close={close} onAdd={handleAdd} />
    </section>
  );
};

export default HeroSection;
