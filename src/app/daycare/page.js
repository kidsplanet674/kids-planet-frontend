import React from 'react';
import PageHeader from '../../components/PageHeader';
import CoreValues from '../../components/CoreValues';

export const metadata = {
  title: "Kids Day Care Facility | Kids Planet Bhubaneswar",
  description: "Discover our premium Kids Day Care Facility at Kids Planet Bhubaneswar. A safe, nurturing, and engaging environment for your children.",
  keywords: ["Kids Day Care Facility", "Day Care Bhubaneswar", "Best Day Care Old Town"],
};

export default function DayCarePage() {
  return (
    <>
      <PageHeader title="Kids Day Care Facility" breadcrumbTitle="Day Care" bgImage="/photo-gallery-webp/12.webp" />
      
      <section className="daycare-content" style={{ padding: '80px 0', backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style2" style={{ marginBottom: '40px' }}>
            <div className="section-title__tagline-box justify-content-center">
              <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>Our Programs</p>
            </div>
            <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }}>
              Premium Day Care Facility
            </h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p style={{ color: 'var(--text-grey)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '40px' }}>
                Welcome to our dedicated Kids Day Care Facility. We provide a safe, engaging, and loving environment for your child while you are at work. Our facility is equipped with child-friendly amenities, professional caretakers, and play-based learning tools to keep your little ones active and happy throughout the day.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--text-grey)' }}>
                (Detailed content, daily schedules, and facility highlights will be updated here shortly.)
              </p>
            </div>
          </div>
        </div>
      </section>

      <CoreValues />
    </>
  );
}
