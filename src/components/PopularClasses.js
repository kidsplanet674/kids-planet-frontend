import React from 'react';
import Link from 'next/link';

export default function PopularClasses({ classes = [], settings = null }) {

  const defaultClasses = [
    { id: 1, title: 'Day Boarding Facility', time: '09:00 am - 07:00 pm', image_url: '/photo-gallery-webp/9.webp', image_alt: 'Day Boarding' },
    { id: 2, title: 'Drawing Classes', time: '10:00 am - 12:00 pm', image_url: '/photo-gallery-webp/10.webp', image_alt: 'Drawing Classes' },
    { id: 3, title: 'Learning Classes', time: '09:00 am - 12:30 pm', image_url: '/photo-gallery-webp/11.webp', image_alt: 'Learning Classes' }
  ];

  const displayClasses = classes.length > 0 ? classes : defaultClasses;
  const content = settings || {
    subtitle: 'Our Programs',
    title: 'Popular Classes',
    button_text: 'Join Class',
    button_link: '/contact'
  };

  return (
    <section className="popular-classes" style={{ padding: '120px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }} dangerouslySetInnerHTML={{ __html: content.title || '' }} />
        </div>

        <div className="row">
          {displayClasses.map((cls, idx) => {
            const delay = `${(idx + 1) * 100}ms`;
            return (
              <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={delay} key={cls.id}>
                <div className="features-two__single" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', marginBottom: '30px' }}>
                  <div className="features-two__single-img" style={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
                    <img src={cls.image_url || cls.img || `/photo-gallery-webp/${8 + idx}.webp`} alt={cls.image_alt || cls.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'all 500ms ease' }} />
                    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', transition: 'all 500ms ease', opacity: 0 }}></div>
                  </div>
                  <div className="features-two__single-content" style={{ position: 'absolute', bottom: '-80px', left: 0, width: '100%', padding: '40px 30px 30px', background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)', transition: 'all 500ms ease' }}>
                    <h3 style={{ color: 'white', fontFamily: 'var(--font-prata)', marginBottom: '5px', fontSize: '1.6rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} dangerouslySetInnerHTML={{ __html: cls.title || '' }} />
                    <p style={{ color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 'bold' }}>
                      <i className="far fa-clock" style={{ marginRight: '5px' }}></i> {cls.time || cls.class_time || '09:00 am - 12:30 pm'}
                    </p>
                    <div className="btn-box" style={{ opacity: 0, visibility: 'hidden', transition: 'all 500ms ease', transform: 'translateY(20px)' }}>
                      <Link href={content.button_link || '#contact'} className="thm-btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        {content.button_text || 'Join Class'} <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Add some scoped CSS for hover effects that assets might expect but we need to ensure works with our structure */}
      <style dangerouslySetInnerHTML={{__html: `
        .features-two__single:hover .overlay {
          opacity: 1 !important;
        }
        .features-two__single:hover .features-two__single-img img {
          transform: scale(1.1);
        }
        .features-two__single:hover .features-two__single-content {
          bottom: 0 !important;
        }
        .features-two__single:hover .features-two__single-content .btn-box {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }
      `}} />
    </section>
  );
}

