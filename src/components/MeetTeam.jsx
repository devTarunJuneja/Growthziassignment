import React from 'react';
import '../styles/MeetTeam.css';

// Importing images with proper paths
import meetImg from '../assets/meetimg.png';
import joshImg from '../assets/joshmullinsimg.png';

const images = [
  meetImg,      // 1st: grey placeholder
  joshImg,      // 2nd: Josh’s portrait
  meetImg,      // 3rd: grey placeholder again
  meetImg       // 4th: grey placeholder again
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
              <img src={src} alt={`Team member ${idx + 1}`} className="meet-team__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
