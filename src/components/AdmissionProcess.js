import React from 'react';

export default function AdmissionProcess() {
  const steps = [
    {
      id: '01',
      title: 'Visit the School',
      desc: 'Schedule a tour to see our facilities and environment.',
      img: '/photo-gallery-webp/23.webp',
      delay: '100ms'
    },
    {
      id: '02',
      title: 'Meet the Teachers',
      desc: 'Discuss your child\'s needs with our experienced educators.',
      img: '/photo-gallery-webp/24.webp',
      delay: '200ms'
    },
    {
      id: '03',
      title: 'Complete Enrollment',
      desc: 'Fill out the necessary forms and submit the required documents.',
      img: '/photo-gallery-webp/25.webp',
      delay: '300ms'
    },
    {
      id: '04',
      title: 'Welcome to Kids Planet!',
      desc: 'Your child is ready to start their exciting learning journey.',
      img: '/photo-gallery-webp/26.webp',
      delay: '400ms'
    }
  ];

  return (
    <section className="admission-process" style={{ padding: '120px 0', backgroundColor: 'var(--bg-white)', backgroundImage: 'url(/assets-images/shapes/process-one-shape-1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>How to Join</p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }}>
            Our Admission Process
          </h2>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={step.delay} key={step.id}>
              <div className="process-card text-center" style={{ padding: '30px', position: 'relative' }}>
                <div className="process-img" style={{ width: '150px', height: '150px', margin: '0 auto 30px', borderRadius: '50%', overflow: 'hidden', border: '5px solid var(--bg-light)', position: 'relative', zIndex: 1 }}>
                  <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="step-number" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'var(--primary-color)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', zIndex: 2 }}>
                    {step.id}
                  </div>
                </div>
                <h4 style={{ fontFamily: 'var(--font-prata)', color: 'var(--text-dark)', marginBottom: '15px' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>{step.desc}</p>
                
                {/* Arrow connecting steps (hide on last item and mobile) */}
                {index < 3 && (
                  <div className="d-none d-lg-block" style={{ position: 'absolute', top: '75px', right: '-30px', width: '60px', height: '2px', backgroundColor: 'var(--secondary-color)', zIndex: 0 }}>
                     <i className="fas fa-chevron-right" style={{ position: 'absolute', right: '-5px', top: '-6px', color: 'var(--secondary-color)' }}></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
