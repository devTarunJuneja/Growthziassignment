import React from 'react';
import '../styles/NewsUpdate.css'; // Assuming you have a CSS file for styles

const smallItems = [
  {
    title: 'Retro Lighting Design …',
    date: '20 December 2023',
    category: 'Interior',
  },
  {
    title: 'Classy Rooms That Will …',
    date: '22 December 2023',
    category: 'Design',
  },
  {
    title: 'Explore Interior Design …',
    date: '20 December 2023',
    category: 'Interior',
  },
  {
    title: 'A Nice & Clean Rooms …',
    date: '22 December 2023',
    category: 'Design',
  },
];

const largeItem = {
  title: 'Luxury Bathroom Interior Styles For You',
  date: '22 December 2023',
  category: 'Interior',
};

export default function NewsUpdate() {
  return (
    <section className="news-update">
      {/* vertical line + header */}
      <div className="news-update__preline" />
      <p className="news-update__sub">LOCAL NEWS & ACTIVITIES</p>
      <h2 className="news-update__title">Latest News Update</h2>
      <a href="#" className="news-update__more">
        Discover More <span className="news-update__more-arrow">›</span>
      </a>

      <div className="news-update__grid">
        {/* Left: 4 small items */}
        <div className="news-update__small-grid">
          {smallItems.map((item, i) => (
            <div className="news-update__small-card" key={i}>
              <img
                src="/assets/newsimgsmall.png"
                alt=""
                className="small-card__img"
              />
              <img
                src="/assets/Inactive.png"
                alt=""
                className="small-card__arrow"
              />
              <p className="small-card__title">{item.title}</p>
              <div className="small-card__meta">
                <span className="small-card__date">{item.date}</span>
                <img
                  src="/assets/Line2.png"
                  alt=""
                  className="small-card__line"
                />
                <span className="small-card__category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: 1 large item */}
        <div className="news-update__large-card">
          <img
            src="/assets/newsimglarge.png"
            alt=""
            className="large-card__img"
          />
          <img
            src="/assets/Active.png"
            alt=""
            className="large-card__arrow"
          />
          <p className="large-card__title">{largeItem.title}</p>
          <div className="large-card__meta">
            <span className="large-card__date">{largeItem.date}</span>
            <img
              src="/assets/Line2.png"
              alt=""
              className="large-card__line"
            />
            <span className="large-card__category">{largeItem.category}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
