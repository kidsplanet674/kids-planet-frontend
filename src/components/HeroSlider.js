"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function HeroSlider({ slides = [] }) {

  useEffect(() => {
    // Initialize Swiper after slides are loaded and rendered
    if (slides.length > 0) {
      let swiperInstance = null;
      const initSwiper = () => {
        if (window.Swiper) {
          swiperInstance = new window.Swiper('.thm-swiper__slider', {
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            pagination: { 
              el: "#main-slider-pagination", 
              type: "bullets", 
              clickable: true 
            },
            navigation: {
              nextEl: "#main-slider__swiper-button-next",
              prevEl: "#main-slider__swiper-button-prev"
            },
            autoplay: {
              delay: 6000
            },
            observer: true,
            observeParents: true,
          });
        } else {
          setTimeout(initSwiper, 500); // Retry if script hasn't loaded yet
        }
      };
      // Add a small timeout to ensure DOM nodes are fully painted
      setTimeout(initSwiper, 100);
      
      return () => {
        if (swiperInstance && swiperInstance.destroy) {
          swiperInstance.destroy(true, true);
        }
      };
    }
  }, [slides]);

  // Fallback if no slides exist
  const displaySlides = slides.length > 0 ? slides : [
    {
      id: 'fallback1',
      title: 'Welcome to Kids Planet',
      description: 'Please add banner slides from the Admin Panel',
      image_url: '/assets-images/backgrounds/main-slider-1-1.jpg',
      button_text: 'Contact Us',
      button_link: '/contact'
    }
  ];

  return (
    <section className="main-slider main-slider-two">
      <div className="swiper-container thm-swiper__slider">
        <div className="swiper-wrapper">
          
          {displaySlides.map((slide) => (
            <div className="swiper-slide" key={slide.id}>
              <div className="image-layer" style={{ backgroundImage: `url(${slide.image_url})` }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-two__content">
                      <h2 className="main-slider-two__title" dangerouslySetInnerHTML={{ __html: slide.title || '' }} />
                      <p className="main-slider-two__text" style={{ color: 'var(--bg-light)', fontSize: '1.2rem', marginBottom: '30px', fontWeight: '500' }}>
                        {slide.description}
                      </p>
                      <div className="main-slider-two__btn-box">
                        <Link href={slide.button_link || '#contact'} className="thm-btn">
                          {slide.button_text || 'Schedule a Visit'}
                          <span className="fas fa-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Navigation / Pagination */}
        <div className="main-slider-two__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-next">
            <i className="icon-left-arrow"></i>
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-prev">
            <i className="icon-right-arrow"></i>
          </div>
        </div>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </div>
      
      {/* Custom styles for the Ken Burns effect */}
      <style dangerouslySetInnerHTML={{__html: `
        .image-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: -1;
          transform: scale(1);
          transition: transform 6s ease-in-out;
        }
        
        .swiper-slide-active .image-layer {
          transform: scale(1.1);
        }
        
        /* Dark overlay to make text readable */
        .swiper-slide::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          z-index: 0;
        }
        
        .main-slider-two__content {
          position: relative;
          z-index: 1;
          padding: 150px 0;
        }
        
        .main-slider-two__title {
          color: white;
          font-family: var(--font-prata);
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .main-slider-two__sub-title {
          color: var(--primary-color);
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
          display: inline-block;
          background: white;
          padding: 5px 15px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .main-slider-two__title {
            font-size: 3rem;
          }
          .main-slider-two__content {
            padding: 100px 0;
            text-align: center;
          }
        }
      `}} />
    </section>
  );
}
