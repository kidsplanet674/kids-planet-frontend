import React from 'react';

export default function Testimonials({ testimonials = [], settings = null }) {

  const defaultTestimonials = [
    {
      id: 1,
      name: "SNEHALATA PATI",
      role: "Verified Parent",
      rating: 5,
      content: `"All staffs are very mixing and well mannered. I recommend to all pls go for this school if you have small child.this is the best school for kiddos"`,
      image_url: "https://lh3.googleusercontent.com/a/ACg8ocI4pHGRjpuyFo6JzmLXwfvXBBQaFu4R5nlEqYmPr7hBy35OAg=s64-c-rp-mo-br100"
    },
    {
      id: 2,
      name: "Sriya Sriya",
      role: "Verified Parent",
      rating: 5,
      content: `"The best play school in old Town and also the best daycare ever I seen."`,
      image_url: "https://lh3.googleusercontent.com/a/ACg8ocJdiRsHb3pI6AxWG1FnTys_pMIpkRRGTl-42k9oWScC0Xe04A=s64-c-rp-mo-br100"
    },
    {
      id: 3,
      name: "MAMA ROUT",
      role: "Verified Parent",
      rating: 5,
      content: `"Teachers are very guiding and caring for the students.all are good."`,
      image_url: "https://lh3.googleusercontent.com/a/ACg8ocLunpxqjfKvxa1Sq0P6Rvsp5SfeyCgB6gHfx6t7K7Fa0wu3uA=s64-c-rp-mo-br100"
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const content = settings || {
    subtitle: 'Our Google Reviews',
    title: 'Verified Parent Feedback'
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <section className="testimonial-two" id="testimonials" style={{ padding: '120px 0', backgroundColor: 'var(--bg-white)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="100ms">
          
          <h2 className="section-title__title" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }} dangerouslySetInnerHTML={{ __html: content.title || '' }} />
        </div>
        
        <div className="row">
          {displayTestimonials.map((t, idx) => {
            const delay = `${((idx % 3) + 1) * 100}ms`;
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={delay} key={t.id}>
                <div className="testimonial-two__single h-100" style={{ backgroundColor: 'var(--bg-light)', padding: '30px', borderRadius: '15px', position: 'relative', borderTop: '4px solid var(--primary-color)', display: 'flex', flexDirection: 'column' }}>
                  <div className="quote-icon" style={{ color: 'var(--secondary-color)', fontSize: '2rem', opacity: 0.1, position: 'absolute', top: '20px', right: '20px' }}>
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <div className="rating" style={{ color: '#FFC107', marginBottom: '15px', fontSize: '0.9rem' }}>
                    {renderStars(t.rating)}
                  </div>
                  <p style={{ color: 'var(--text-grey)', fontStyle: 'italic', marginBottom: '20px', fontSize: '0.95rem', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: t.content || '' }} />
                  <div className="client-info" style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                    <div className="client-img" style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '15px', backgroundColor: '#e0e0e0' }}>
                      <img src={t.image_url || '/photo-gallery-webp/default-avatar.webp'} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h5 style={{ color: 'var(--text-dark)', margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>{t.name}</h5>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-grey)' }}>{t.role || 'Verified Parent'}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

