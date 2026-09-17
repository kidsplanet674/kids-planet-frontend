import React from 'react';

export default function AgeGroups() {
  const groups = [
    {
      id: 1,
      title: 'Toddler Playgroup',
      age: 'Age 1-2',
      img: '/photo-gallery-webp/18.webp',
      color: 'var(--primary-color)',
      delay: '100ms'
    },
    {
      id: 2,
      title: 'Playgroup',
      age: 'Age 2-3',
      img: '/photo-gallery-webp/19.webp',
      color: 'var(--primary-color)', // Matching live site design
      delay: '200ms'
    },
    {
      id: 3,
      title: 'Nursery',
      age: 'Age 3-4',
      img: '/photo-gallery-webp/20.webp',
      color: 'var(--primary-color)',
      delay: '300ms'
    },
    {
      id: 4,
      title: 'Pre School',
      age: 'Age 3-6',
      img: '/photo-gallery-webp/21.webp',
      color: 'var(--primary-color)',
      delay: '400ms'
    }
  ];

  return (
    <section className="age-groups" style={{ padding: '120px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }}>
            Age Group For Our Class
          </h2>
        </div>

        <div className="row">
          {groups.map((group) => (
            <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={group.delay} key={group.id}>
              <div className="age-group-card text-center" style={{ backgroundColor: 'white', borderRadius: '15px', padding: '0 0 30px 0', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                <div className="pill-label" style={{ backgroundColor: group.color, color: 'white', padding: '15px', fontWeight: 'bold', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', marginBottom: '30px', fontSize: '1.1rem' }}>
                  {group.title}
                </div>
                
                {/* Organic shape border for image */}
                <div className="img-wrapper" style={{ margin: '0 auto', width: '200px', height: '200px', padding: '10px', border: '2px dashed var(--primary-color)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', overflow: 'hidden', marginBottom: '20px', transition: 'all 0.5s ease' }}>
                  <img src={group.img} alt={group.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
                </div>
                
                <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', margin: 0 }}>{group.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .age-group-card:hover .img-wrapper {
          border-radius: 50% !important;
          transform: rotate(5deg);
        }
        .age-group-card:hover .img-wrapper img {
          border-radius: 50% !important;
        }
      `}} />
    </section>
  );
}

