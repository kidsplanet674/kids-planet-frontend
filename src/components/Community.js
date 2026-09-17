import Image from "next/image";

export default function Community() {
  return (
    <section style={{ padding: '80px 5%', backgroundColor: 'var(--bg-light)' }}>
      
      {/* Gallery */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Gallery</h4>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--purple-color)' }}>Our Activities Gallery</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[12, 13, 14, 15, 16, 17].map((num) => (
            <div key={num} style={{ position: 'relative', width: '100%', height: '250px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image src={`/photo-gallery-webp/${num}.webp`} alt={`Gallery Activity ${num}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: '40px' }}>
          <button className="btn-primary">Load More</button>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center', backgroundColor: '#fff', padding: '60px 40px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
        <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Testimonials</h4>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--purple-color)' }}>What Parents Say About Us</h2>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
          "Fantastic school! They care and truly want the best for your child. Sending your children here is a gift that keeps on giving."
        </p>
        <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)' }}>Srinibash Panda</h4>
        <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Parent</p>
      </div>

      {/* Latest News */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>News and Blog</h4>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--purple-color)' }}>Latest News</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { img: '/photo-gallery-webp/18.webp', title: 'Top 10 Play Schools in Bhubaneswar Every Parent Should Know' },
            { img: '/photo-gallery-webp/19.webp', title: 'The Role of Top Play School in Bhubaneswar in Early Childhood Development' },
            { img: '/photo-gallery-webp/20.webp', title: 'Why Kids Planet is the Best Play School in Old Town Bhubaneswar Odisha?' },
          ].map((news, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image src={news.img} alt={news.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '10px' }}>By: <span style={{ color: 'var(--primary-color)' }}>Kids Admin</span> • Date: 09 Sept 2026</p>
                <h3 style={{ marginBottom: '15px', fontSize: '1.2rem', lineHeight: '1.4' }}>{news.title}</h3>
                <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
