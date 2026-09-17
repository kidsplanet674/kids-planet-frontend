"use client";
import React from 'react';

export default function CoreValues({ features = [], settings = null }) {

  const defaultValues = [
    { id: 1, icon: 'fas fa-chalkboard-teacher', title: 'Experienced Educators', description: 'Qualified and caring educators fostering a nurturing atmosphere.' },
    { id: 2, icon: 'fas fa-shapes', title: 'Play-Based Learning', description: 'Integrating play-based activities for maximum cognitive development.' },
    { id: 3, icon: 'fas fa-shield-alt', title: 'Safe Environment', description: 'Child-friendly facilities ensuring a secure and stimulating space.' },
    { id: 4, icon: 'fas fa-users', title: 'Parent Engagement', description: 'Open communication and regular updates for family involvement.' }
  ];

  const displayValues = features.length > 0 ? features : defaultValues;
  const content = settings || {
    subtitle: 'Why Choose Us',
    title: 'Our Core Values',
    main_image_url: '/photo-gallery-webp/14.webp',
    main_image_alt: 'Kids Planet Core Values'
  };

  return (
    <section className="core-values" style={{ padding: '80px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>{content.subtitle}</p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }} dangerouslySetInnerHTML={{ __html: content.title || '' }} />
        </div>

        <div className="row align-items-center">
          {/* Left Side: 4 Cards in 2x2 Grid */}
          <div className="col-lg-6">
            <div className="row g-4">
              {displayValues.map((val, idx) => (
                <div className="col-md-6 wow fadeInUp" data-wow-delay={`${(idx + 1) * 100}ms`} key={val.id}>
                  <div className="value-card text-center" style={{ padding: '40px 20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '10px', backgroundColor: 'white', height: '100%', transition: 'all 0.6s ease', borderBottom: '3px solid transparent' }} 
                       onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderBottom = '3px solid var(--primary-color)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'; }}
                       onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderBottom = '3px solid transparent'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'; }}>
                    
                    <h4 style={{ fontFamily: 'var(--font-prata)', marginBottom: '10px', color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: val.title || '' }} />
                    <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem', margin: 0 }} dangerouslySetInnerHTML={{ __html: val.description || val.text }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Large Image */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
            <div className="core-values__image-box" style={{ position: 'relative', paddingLeft: '30px' }}>
              <img src={content.main_image_url || '/photo-gallery-webp/14.webp'} alt={content.main_image_alt} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', position: 'relative', zIndex: 2 }} />
              {/* Decorative shapes to match screenshot */}
              <div style={{ position: 'absolute', top: '-20px', left: '10px', fontSize: '2rem', color: '#ffb400', zIndex: 1 }}>+</div>
              <div style={{ position: 'absolute', bottom: '-30px', right: '30px', fontSize: '2rem', color: 'var(--primary-color)', zIndex: 1 }}>+</div>
              <div style={{ position: 'absolute', top: '40%', left: '0', width: '40px', height: '80px', borderRight: '2px dotted #4ecdc4', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', bottom: '10%', right: '-20px', width: '80px', height: '80px', border: '2px dotted #ffb400', borderRadius: '50%', zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

