import React from 'react';

export default function MissionVision() {
  return (
    <section className="mission-vision" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
            <div className="mission-box" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', height: '100%', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: 'rgba(78,205,196,0.1)', zIndex: 0 }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-prata)', color: 'var(--primary-color)', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Our Mission</h3>
              <p style={{ color: 'var(--text-grey)', lineHeight: '1.8', position: 'relative', zIndex: 1 }}>
                To provide a nurturing, safe, and stimulating environment where young minds can explore, learn, and grow. 
                We are dedicated to fostering holistic development through play-based learning, ensuring every child builds a strong foundation for lifelong success and a love for continuous learning.
              </p>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
            <div className="vision-box" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', height: '100%', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: 'rgba(255,180,0,0.1)', zIndex: 0 }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-prata)', color: 'var(--accent-color)', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Our Vision</h3>
              <p style={{ color: 'var(--text-grey)', lineHeight: '1.8', position: 'relative', zIndex: 1 }}>
                To be recognized as the best play school and creche in Old Town, Bhubaneswar, 
                where children are empowered to become confident, compassionate, and creative individuals. 
                We envision a community where parents and educators work hand-in-hand to shape the leaders of tomorrow.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
