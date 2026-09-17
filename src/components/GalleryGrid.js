import React from 'react';
import Link from 'next/link';

export default function GalleryGrid({ images = [], settings = null }) {

  return (
    <section className="gallery-grid" style={{ padding: '100px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2" style={{ marginBottom: '60px' }}>
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>GALLERY</p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }}>
            {settings?.title || 'Our Activities Gallery'}
          </h2>
        </div>

        <div className="row">
          {images.length > 0 ? (
            images.map((photo, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(index % 6) * 100 + 100}ms`} key={photo.id}>
                <div className="gallery-item" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <img src={photo.image_url} alt={photo.image_alt || `Gallery Image ${photo.id}`} style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', transition: 'all 500ms ease' }} />
                  <div className="gallery-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 107, 44, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'all 500ms ease', transform: 'scale(0.8)' }}>
                    <a href={photo.image_url} target="_blank" rel="noopener noreferrer" className="img-popup" style={{ color: 'white', fontSize: '2rem', display: 'inline-block', transform: 'translateY(20px)', transition: 'all 500ms ease' }}>
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No images found in the gallery.</p>
            </div>
          )}
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
