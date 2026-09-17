import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section style={{ padding: '80px 5%', backgroundColor: 'var(--bg-light)' }}>
      {/* Events & Notices */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 600px', backgroundColor: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Events & Notices</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '15px 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)' }}>🎉 New classes starting next month!</li>
            <li style={{ padding: '15px 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)' }}>👨‍👩‍👧‍👦 Parent-Teacher meeting scheduled for next week</li>
            <li style={{ padding: '15px 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)' }}>☀️ Summer camp registration now open</li>
          </ul>
        </div>
        
        {/* Who We Are Content */}
        <div style={{ flex: '1 1 500px' }}>
          <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Who We Are</h4>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--purple-color)' }}>Learn About Our Work and Cultural Activities</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
            We welcome you to one of the best play schools in Bhubaneswar. At Kids Planet Preschool, we strive to create a joyous and enriching early learning experience for your child.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
              <span style={{ fontWeight: 600 }}>Think Creatively</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
              <span style={{ fontWeight: 600 }}>Feel Fine</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
              <span style={{ fontWeight: 600 }}>Be Independent</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--blue-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
              <span style={{ fontWeight: 600 }}>Apply Knowledge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {[
          { num: '250', label: 'Students', color: 'var(--secondary-color)' },
          { num: '10', label: 'Teachers', color: 'var(--accent-color)' },
          { num: '6', label: 'Classroom', color: 'var(--purple-color)' },
          { num: '1', label: 'School Van', color: 'var(--primary-color)' },
        ].map((stat, i) => (
          <div key={i} style={{ backgroundColor: stat.color, color: '#fff', padding: '40px 20px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '3rem', marginBottom: '10px' }}>{stat.num}</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
