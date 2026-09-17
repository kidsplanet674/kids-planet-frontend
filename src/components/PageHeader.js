import React from 'react';
import Link from 'next/link';

export default function PageHeader({ title, breadcrumbTitle, bgImage = '/photo-gallery-webp/1.webp' }) {
  return (
    <section className="page-header" style={{ overflow: 'hidden', position: 'relative' }}>
      <div 
        className="page-header__bg" 
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      </div>
      <div className="shape1 float-bob-y">
        <img src="/assets-images/shapes/page-header-shape1.png" alt="shape" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/assets-images/shapes/page-header-shape2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h2 style={{ textTransform: 'uppercase' }}>{title}</h2>
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><span>&gt;</span></li>
              <li>{breadcrumbTitle || title}</li>
            </ul>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .page-header__bg {
          animation: kenBurns 20s ease-out infinite alternate;
        }
      `}} />
    </section>
  );
}
