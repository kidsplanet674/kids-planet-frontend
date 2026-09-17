import React from 'react';
import Link from 'next/link';

export default function AboutUs({ content = {} }) {
  const displayContent = Object.keys(content).length > 0 ? content : {
    subtitle: 'Who We Are',
    title: 'Learn About Our Work and <br /> Cultural Activities',
    description1: 'Kids Planet is a premier play school and day boarding center dedicated to nurturing young minds in a safe, stimulating environment. We emphasize play-based learning that fosters creativity, independence, and cognitive growth.',
    description2: '',
    image_url: '/photo-gallery-webp/4.webp',
    image_alt: 'Kids Planet Activity',
    button_text: 'Explore More',
    button_link: '#programs',
    feature_1_title: 'Expert Teachers',
    feature_1_desc: 'Highly trained professionals',
    feature_2_title: 'Play & Learn',
    feature_2_desc: 'Engaging curriculum'
  };

  return (
    <section className="about-three" id="about" style={{ padding: '120px 0', backgroundColor: 'var(--bg-white)', overflow: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-three__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
              <div className="about-three__img-box">
                <div className="about-three__img" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img src={displayContent.image_url || '/photo-gallery-webp/4.webp'} alt={displayContent.image_alt || 'About Kids Planet'} style={{ width: '100%', display: 'block', transition: 'all 500ms ease' }} />
                </div>
                
                <div className="about-three__shape-1 float-bob-y">
                  <img src="/assets-images/shapes/about-three-shape-1.png" alt="" />
                </div>
                <div className="about-three__shape-2 float-bob-x">
                  <img src="/assets-images/shapes/about-three-shape-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-6">
            <div className="about-three__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>{displayContent.subtitle}</p>
                </div>
                <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--text-dark)' }} dangerouslySetInnerHTML={{ __html: displayContent.title || '' }} />
              </div>
              <p className="about-three__text-1" style={{ color: 'var(--text-grey)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                {displayContent.description1}
              </p>
              {displayContent.description2 && (
                <p className="about-three__text-2" style={{ color: 'var(--text-grey)', marginBottom: '30px' }}>
                  {displayContent.description2}
                </p>
              )}
              
              <ul className="list-unstyled about-three__points" style={{ marginBottom: '40px' }}>
                {displayContent.feature_1_title && (
                  <li>
                    <div className="icon" style={{ color: 'var(--primary-color)' }}>
                      <span className="fas fa-check-circle"></span>
                    </div>
                    <div className="text">
                      <p style={{ color: 'var(--text-dark)', fontWeight: 'bold' }}>{displayContent.feature_1_title}</p>
                      {displayContent.feature_1_desc && <span style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>{displayContent.feature_1_desc}</span>}
                    </div>
                  </li>
                )}
                {displayContent.feature_2_title && (
                  <li>
                    <div className="icon" style={{ color: 'var(--secondary-color)' }}>
                      <span className="fas fa-check-circle"></span>
                    </div>
                    <div className="text">
                      <p style={{ color: 'var(--text-dark)', fontWeight: 'bold' }}>{displayContent.feature_2_title}</p>
                      {displayContent.feature_2_desc && <span style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>{displayContent.feature_2_desc}</span>}
                    </div>
                  </li>
                )}
              </ul>
              <Link href={displayContent.button_link || '#programs'} className="thm-btn" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                {displayContent.button_text} <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .about-three__img:hover img { transform: scale(1.05); }
      `}} />
    </section>
  );
}
