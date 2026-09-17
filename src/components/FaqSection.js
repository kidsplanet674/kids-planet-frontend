"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function FaqSection({ items = [], settings = null, ctaSettings = null }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-page" style={{ padding: '120px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2" style={{ marginBottom: '60px' }}>
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>
              {settings?.subtitle || 'FAQ'}
            </p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)', fontSize: '2.5rem' }}>
            {settings?.title || 'Frequently Asked Questions'}
          </h2>
          {settings?.description && (
            <p style={{ marginTop: '20px', color: '#666', maxWidth: '700px', margin: '20px auto 0' }}>
              {settings.description}
            </p>
          )}
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="faq-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {items.length > 0 ? (
                items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div 
                      key={item.id} 
                      className={`faq-accordion__item ${isActive ? 'active' : ''}`}
                      style={{ 
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 20px rgba(0,0,0,0.05)', 
                        overflow: 'hidden',
                        border: isActive ? '1px solid var(--primary-color)' : '1px solid transparent',
                        transition: 'all 300ms ease'
                      }}
                    >
                      <div 
                        className="faq-accordion__header" 
                        onClick={() => toggleAccordion(index)}
                        style={{ 
                          padding: '20px 30px', 
                          cursor: 'pointer', 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          backgroundColor: isActive ? 'var(--primary-color)' : 'white',
                          color: isActive ? 'white' : 'var(--text-dark)'
                        }}
                      >
                        <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>
                          {item.question}
                        </h4>
                        <div style={{ fontSize: '1.2rem', transition: 'transform 300ms ease', transform: isActive ? 'rotate(180deg)' : 'rotate(0)' }}>
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                      
                      <div 
                        className="faq-accordion__content"
                        style={{ 
                          maxHeight: isActive ? '1000px' : '0', 
                          opacity: isActive ? 1 : 0,
                          overflow: 'hidden',
                          transition: 'all 300ms ease',
                          padding: isActive ? '20px 30px' : '0 30px'
                        }}
                      >
                        <div 
                          className="faq-accordion__content-inner"
                          style={{ color: '#666', lineHeight: '1.8' }}
                          dangerouslySetInnerHTML={{ __html: item.answer || '' }}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center">
                  <p>No FAQs available at the moment.</p>
                </div>
              )}
            </div>
            
            {ctaSettings?.enabled !== false && (
              <div className="faq-cta text-center" style={{ marginTop: '60px', padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <h3 style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)', marginBottom: '15px' }}>
                  {ctaSettings?.title || 'Still Have Questions?'}
                </h3>
                <p style={{ color: '#666', marginBottom: '25px' }}>
                  {ctaSettings?.description || 'Our team is here to help you with any additional inquiries.'}
                </p>
                <Link href={ctaSettings?.button_link || '/contact'} className="thm-btn">
                  {ctaSettings?.button_text || 'Contact Us'} <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
