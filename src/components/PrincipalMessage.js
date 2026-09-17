import React from 'react';

export default function PrincipalMessage() {
  return (
    <section className="principal-message" style={{ padding: '80px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-5 wow fadeInLeft" data-wow-delay="100ms">
            <div className="principal-img-box" style={{ position: 'relative', paddingRight: '20px' }}>
              {/* Replace with actual principal image later */}
              <img src="/photo-gallery-webp/25.webp" alt="Message from Principal" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <div style={{ position: 'absolute', bottom: '-20px', right: '0', backgroundColor: 'var(--primary-color)', color: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <h4 style={{ margin: 0, fontFamily: 'var(--font-prata)' }}>Mrs. Name Here</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Principal, Kids Planet</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 wow fadeInRight" data-wow-delay="200ms">
            <div className="principal-content" style={{ paddingLeft: '40px' }}>
              <div className="section-title text-left sec-title-animation animation-style2" style={{ marginBottom: '30px' }}>
                <div className="section-title__tagline-box justify-content-start">
                  <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>Welcome to Kids Planet</p>
                </div>
                <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }}>
                  Message from the Principal
                </h2>
              </div>
              
              <div className="principal-text" style={{ color: 'var(--text-grey)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '20px' }}>
                  Dear Parents and Guardians, welcome to Kids Planet! As the principal, it brings me immense joy to invite you into our vibrant learning community. 
                  We believe that the early years of a child's life are the most crucial for laying the foundation of their future.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Our goal is to provide a nurturing, safe, and enriching environment where your child can thrive. 
                  We are proud to be recognized as the best Day Care & Play school in Old Town and a leading preschool in Bhubaneswar. 
                  Our dedicated educators use play-based methodologies to spark curiosity, encourage creativity, and instill a lifelong love for learning.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', fontWeight: 'bold' }}>
                  "Every child is a different kind of flower, and all together, they make this world a beautiful garden."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
