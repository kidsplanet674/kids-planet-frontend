import React from 'react';

export default function SlidingText() {
  return (
    <section className="sliding-text-two" style={{ backgroundColor: 'var(--primary-color)', padding: '25px 0', borderTop: '2px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
      <div className="sliding-text__inner">
        <ul className="sliding-text__list list-unstyled marquee_mode" style={{ display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap', width: 'max-content', margin: 0, padding: 0 }}>
          {Array(4).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <li style={{ display: 'inline-flex', alignItems: 'center', margin: '0 30px' }}>
                <h2 style={{ color: 'white', fontFamily: 'var(--font-prata)', fontSize: '3rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Play School</h2>
                <i className="fas fa-star" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', margin: '0 30px' }}></i>
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', margin: '0 30px' }}>
                <h2 style={{ color: 'white', fontFamily: 'var(--font-prata)', fontSize: '3rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Day Care</h2>
                <i className="fas fa-star" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', margin: '0 30px' }}></i>
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', margin: '0 30px' }}>
                <h2 style={{ color: 'white', fontFamily: 'var(--font-prata)', fontSize: '3rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Nursery</h2>
                <i className="fas fa-star" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', margin: '0 30px' }}></i>
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', margin: '0 30px' }}>
                <h2 style={{ color: 'white', fontFamily: 'var(--font-prata)', fontSize: '3rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Activities</h2>
                <i className="fas fa-star" style={{ color: 'var(--accent-color)', fontSize: '1.5rem', margin: '0 30px' }}></i>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
