import React from 'react';
import Link from 'next/link';

export default function Footer({ fSettings = {}, sMedia = [] }) {
  // Use fSettings directly for text/socials
  // Since we aren't passing fLinks right now, we can omit them or pass them from layout if needed.
  // Actually, footer.php returns links. Let's assume fSettings has them, or we can just mock the links or let them be empty if not provided.
  
  return (
    <footer className="site-footer-two" id="footer" style={{ backgroundColor: 'var(--bg-light)', paddingTop: '80px' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-5 mb-xl-0">
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__logo" style={{ marginBottom: '20px' }}>
                <Link href="/">
                  <img src="/photo-gallery-webp/logo-footer.png" alt="Kids Planet Logo" style={{ maxWidth: '200px' }} 
                       />
                </Link>
              </div>
              <p className="footer-widget__about-text" style={{ color: 'var(--text-grey)', lineHeight: '1.8' }}>
                {fSettings.footer_about_text || 'Kids Planet is the best play school and day care in Bhubaneswar, offering a safe, nurturing, and fun learning environment for your child.'}
              </p>
              
              <div className="site-footer-two__social" style={{ marginTop: '20px' }}>
                {sMedia.length > 0 ? sMedia.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', marginRight: '10px', transition: 'all 300ms' }}>
                    <i className={link.icon_class || 'fab fa-facebook'}></i>
                  </a>
                )) : (
                  <>
                    <a href="#" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', marginRight: '10px', transition: 'all 300ms' }}><i className="fab fa-facebook"></i></a>
                    <a href="#" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', backgroundColor: 'var(--secondary-color)', color: 'white', borderRadius: '50%', marginRight: '10px', transition: 'all 300ms' }}><i className="fab fa-instagram"></i></a>
                    <a href="#" style={{ display: 'inline-block', width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', backgroundColor: 'var(--purple-color)', color: 'white', borderRadius: '50%', marginRight: '10px', transition: 'all 300ms' }}><i className="fab fa-youtube"></i></a>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-6 col-md-6 mb-5 mb-xl-0">
            <div className="footer-widget__column footer-widget__contact">
              <h3 className="footer-widget__title" style={{ fontFamily: 'var(--font-prata)', fontSize: '1.5rem', marginBottom: '30px', color: 'var(--text-dark)' }}>Contact</h3>
              <ul className="list-unstyled footer-widget__contact-list">
                <li style={{ display: 'flex', marginBottom: '20px' }}>
                  <div className="icon" style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginRight: '15px' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text" style={{ color: 'var(--text-grey)' }}>
                    <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: fSettings.address || 'Plot No-1897, Badhei Banka Chowk, Old Town, BBSR' }} />
                  </div>
                </li>
                <li style={{ display: 'flex', marginBottom: '20px' }}>
                  <div className="icon" style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginRight: '15px' }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="text" style={{ color: 'var(--text-grey)' }}>
                    <p style={{ margin: 0 }}>
                      <a href={`tel:${fSettings.phone_1 || '9337164626'}`} style={{ color: 'inherit' }}>{fSettings.phone_1 || '+91 9337164626'}</a>
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex' }}>
                  <div className="icon" style={{ color: 'var(--purple-color)', fontSize: '1.2rem', marginRight: '15px' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text" style={{ color: 'var(--text-grey)' }}>
                    <p style={{ margin: 0 }}>
                      <a href={`mailto:${fSettings.email || 'info@kidsplanet.com'}`} style={{ color: 'inherit' }}>{fSettings.email || 'info@kidsplanet.com'}</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="site-footer-two__bottom" style={{ padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)', marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <p className="site-footer-two__bottom-text" style={{ margin: 0, color: 'var(--text-grey)' }}>
                {(fSettings.copyright_text
                  ? fSettings.copyright_text.replace(/[\|].*$/i, '').replace(/developed by.*/i, '').trim()
                  : `© ${new Date().getFullYear()} Kids Planet Bhubaneswar. All Rights Reserved.`
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
