import React from 'react';

export default function EventsNotices({ notices = [] }) {

  const defaultNoticeText = "🎉 Admissions Open for Session 2026-27! Book a visit today. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎨 Upcoming Event: Drawing Competition on 15th Sept. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🏫 New Day Boarding Facilities Available!";

  // Create marquee content combining all enabled notices
  const marqueeContent = notices.length > 0 
    ? notices.map(n => n.notice_text).join(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ")
    : defaultNoticeText; // Don't show skeleton to prevent layout shift

  return (
    <section className="events-notices" style={{ padding: '40px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="notices-card" style={{ backgroundColor: 'var(--bg-white)', padding: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', marginRight: '20px', whiteSpace: 'nowrap' }}>
                Latest Update
              </div>
              <div className="marquee_mode" style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
                <span 
                  style={{ fontSize: '1.1rem', color: 'var(--text-dark)', display: 'inline-block', paddingRight: '50px' }}
                  dangerouslySetInnerHTML={{ __html: marqueeContent || '' }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
             <div className="call-us-box" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'var(--secondary-color)', color: 'white', padding: '15px 25px', borderRadius: '10px' }}>
                <i className="flaticon-phone-call" style={{ fontSize: '2rem', marginRight: '15px' }}></i>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ margin: 0, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Call us for inquiry</p>
                  <a href="tel:9337164626" style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none' }}>(+91) 9337164626</a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

