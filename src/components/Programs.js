import Image from "next/image";

export default function Programs() {
  return (
    <section style={{ padding: '80px 5%', backgroundColor: '#fff' }}>
      
      {/* Core Values */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Why Choose Us</h4>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--purple-color)' }}>Our Core Values</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { title: 'Experienced Educators', desc: 'Qualified and caring teachers for your child.', color: 'var(--primary-color)' },
            { title: 'Play-Based Learning', desc: 'Natural way of learning through fun activities.', color: 'var(--secondary-color)' },
            { title: 'Safe Environment', facility: true, desc: 'Child-friendly facilities with CCTV safety.', color: 'var(--accent-color)' },
            { title: 'Parent Engagement', desc: 'Open communication and regular updates.', color: 'var(--blue-color)' },
          ].map((val, i) => (
            <div key={i} style={{ border: '2px dashed #eee', borderRadius: '20px', padding: '40px 20px', transition: 'transform 0.3s' }} className="hover-lift">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: val.color, margin: '0 auto 20px' }}></div>
              <h3 style={{ marginBottom: '15px', color: 'var(--text-dark)' }}>{val.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Classes */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Classes</h4>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--purple-color)' }}>Popular Classes</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { img: '/photo-gallery-webp/5.webp', title: 'Day Boarding Facility', time: '09:00 am - 07:00 pm', color: 'var(--primary-color)' },
            { img: '/photo-gallery-webp/6.webp', title: 'Drawing Classes', time: '08:00 am - 10:00 am', color: 'var(--secondary-color)' },
            { img: '/photo-gallery-webp/7.webp', title: 'Learning Classes', time: '09:30 am - 12:30 pm', color: 'var(--accent-color)' },
          ].map((cls, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg-light)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image src={cls.img} alt={cls.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '15px' }}>{cls.title}</h3>
                <p style={{ color: '#666', marginBottom: '20px', fontSize: '0.9rem' }}>Stimulate imagination and early childhood development.</p>
                <p style={{ color: cls.color, fontWeight: 700, marginBottom: '20px' }}>Time: {cls.time}</p>
                <button className="btn-primary" style={{ backgroundColor: cls.color, width: '100%' }}>Join Class</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Age Groups */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Kids Planet</h4>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--purple-color)' }}>Age Group For Our Class</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {[
            { label: 'Toddler Playgroup', age: '1-2', img: '/photo-gallery-webp/8.webp' },
            { label: 'Playgroup', age: '2-3', img: '/photo-gallery-webp/9.webp' },
            { label: 'Nursery', age: '3-4', img: '/photo-gallery-webp/10.webp' },
            { label: 'Pre School', age: '3-5', img: '/photo-gallery-webp/11.webp' },
          ].map((age, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', marginBottom: '20px', width: '100%' }}>
                {age.label}
              </div>
              <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '5px dashed #eee' }}>
                <Image src={age.img} alt={age.label} fill style={{ objectFit: 'cover' }} />
              </div>
              <p style={{ marginTop: '20px', color: 'var(--primary-color)', fontWeight: 'bold' }}>Age {age.age}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
