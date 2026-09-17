"use client";

import React, { useState, useEffect } from 'react';


export default function StatsCounter({ facts = [], settings = null }) {

  useEffect(() => {
    // Initialize odometer after facts are loaded and rendered
    if (facts.length > 0) {
      const initOdometer = () => {
        if (window.Odometer) {
          const odometers = document.querySelectorAll('.odometer');
          odometers.forEach(el => {
            const count = el.getAttribute('data-count');
            const o = new window.Odometer({
              el: el,
              value: 0,
              format: '(,ddd)',
              theme: 'default'
            });
            
            // Use IntersectionObserver to trigger when visible
            const observer = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting) {
                o.update(count);
                observer.disconnect();
              }
            });
            observer.observe(el);
          });
        } else {
          setTimeout(initOdometer, 500);
        }
      };
      
      // Delay slightly to ensure DOM is ready
      setTimeout(initOdometer, 100);
    }
  }, [facts]);

  const defaultFacts = [
    { id: 'f1', number: 250, label: 'Students', color: 'var(--primary-color)' },
    { id: 'f2', number: 10, label: 'Teachers', color: 'var(--secondary-color)' },
    { id: 'f3', number: 6, label: 'Classrooms', color: 'var(--purple-color)' },
    { id: 'f4', number: 1, label: 'School Van', color: 'var(--primary-color)' }
  ];

  const displayFacts = facts.length > 0 ? facts : defaultFacts;
  const bgImage = settings?.background_image_url ? `url(${settings.background_image_url})` : 'none';
  const bgColor = 'var(--wave-purple)';

  return (
    <section className="stats-counter" style={{ padding: '80px 0', backgroundColor: bgColor, backgroundImage: bgImage, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', zIndex: 1 }}>
      {/* Background overlay or wave shape can be added here if needed */}
      <div className="container">
        <div className="row">
          
          {displayFacts.map((fact, index) => {
            const delay = `${index * 200}ms`;
            return (
              <div key={fact.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={delay}>
                <div className="stat-card" style={{ backgroundColor: fact.color || 'var(--primary-color)', borderRadius: '15px', padding: '40px 20px', textAlign: 'center', color: 'white', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <div className="stat-count" style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'var(--font-prata)' }}>
                    <span className="odometer" data-count={fact.number}>0</span>
                    <span className="plus">+</span>
                  </div>
                  <p style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, fontWeight: '600' }}>{fact.label}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
