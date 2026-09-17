import React from 'react';
import Link from 'next/link';

export default function Gallery({ photos = [], settings = null }) {

  const defaultPhotos = [
    { id: 1, image_url: '/photo-gallery-webp/12.webp', image_alt: 'Gallery Image 1' },
    { id: 2, image_url: '/photo-gallery-webp/13.webp', image_alt: 'Gallery Image 2' },
    { id: 3, image_url: '/photo-gallery-webp/14.webp', image_alt: 'Gallery Image 3' },
    { id: 4, image_url: '/photo-gallery-webp/15.webp', image_alt: 'Gallery Image 4' },
    { id: 5, image_url: '/photo-gallery-webp/16.webp', image_alt: 'Gallery Image 5' },
    { id: 6, image_url: '/photo-gallery-webp/17.webp', image_alt: 'Gallery Image 6' }
  ];

  const displayPhotos = photos.length > 0 ? photos : defaultPhotos;
  const content = settings || {
    subtitle: 'Portfolio',
    title: 'Our Activities Gallery'
  };

  return (
    <section className="gallery" id="gallery" style={{ padding: '120px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>{content.subtitle}</p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }} dangerouslySetInnerHTML={{ __html: content.title || '' }} />
        </div>

        <div className="row">
          {displayPhotos.map((photo, idx) => {
            const delay = `${(idx + 1) * 100}ms`;
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay} key={photo.id}>
                <div className="gallery-item" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <img src={photo.image_url} alt={photo.image_alt || `Kids Planet Gallery ${photo.id}`} style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', transition: 'all 500ms ease' }} />
                  <div className="gallery-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 107, 44, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'all 500ms ease', transform: 'scale(0.8)' }}>
                    <a href={photo.image_url} className="img-popup" style={{ color: 'white', fontSize: '2rem', display: 'inline-block', transform: 'translateY(20px)', transition: 'all 500ms ease' }} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
          transform: scale(1);
        }
        .gallery-item:hover .img-popup {
          transform: translateY(0);
        }
      `}} />
    </section>
  );
}

