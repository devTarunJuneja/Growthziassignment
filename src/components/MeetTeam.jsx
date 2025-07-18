import React from 'react';
import '../styles/MeetTeam.css';

const images = [
  '/assets/meetimg.png',          // 1st: grey placeholder
  '/assets/joshmullinsimg.png',   // 2nd: Josh’s portrait
  '/assets/meetimg.png',          // 3rd: grey placeholder
  '/assets/meetimg.png'           // 4th: grey placeholder
];

export default function MeetTeam() {
  return (
    <section className="meet-team">
      <div className="meet-team__inner">
        {/* Vertical line */}
        <div className="meet-team__line" />

        {/* Heading */}
        <p className="meet-team__sub">MEET OUR TEAM</p>
        <h2 className="meet-team__title">Expert Team Persons</h2>

        {/* Four connected image boxes */}
        <div className="meet-team__row">
          {images.map((src, idx) => (
            <div key={idx} className="meet-team__box">
              <img src={src} alt="" className="meet-team__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
