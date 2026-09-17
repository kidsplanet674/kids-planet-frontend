"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ menuItems = [], footerSettings = {} }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <>
      <header className="main-header-two">
        <div className="main-header-two__top" style={{ backgroundColor: 'var(--primary-color)', padding: '10px 0' }}>
          <div className="container">
            <div className="main-header-two__top-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ul className="list-unstyled main-header-two__contact-list" style={{ display: 'flex', gap: '20px', margin: 0 }}>
                <li>
                  <div className="icon"><i className="fas fa-map-marker-alt" style={{ color: 'white', marginRight: '8px' }}></i></div>
                  <div className="text">
                    <p style={{ margin: 0, color: 'white', fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: footerSettings.address || 'Plot No-1897, Badhei Banka Chowk, Old Town, BBSR' }} />
                  </div>
                </li>
                <li>
                  <div className="icon"><i className="fas fa-envelope" style={{ color: 'white', marginRight: '8px' }}></i></div>
                  <div className="text">
                    <p style={{ margin: 0, color: 'white', fontSize: '0.9rem' }}>
                      <a href={`mailto:${footerSettings.email || 'info@kidsplanet.com'}`} style={{ color: 'inherit' }}>{footerSettings.email || 'info@kidsplanet.com'}</a>
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="main-header-two__top-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <nav className={`main-menu main-menu-two ${isSticky ? 'stricky-header stricked-menu stricky-fixed' : ''}`} style={{ backgroundColor: 'white', boxShadow: isSticky ? '0 5px 20px rgba(0,0,0,0.1)' : 'none' }}>
          <div className="main-menu-two__wrapper">
            <div className="container">
              <div className="main-menu-two__wrapper-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link href="/">
                      <img src="/photo-gallery-webp/logo.png" alt="Kids Planet Logo" style={{ maxHeight: '70px' }} 
                           onError={(e) => { e.target.src = '/assets-images/resources/logo-1.png' }} />
                    </Link>
                  </div>
                </div>
                
                <div className="main-menu-two__main-menu-box" style={{ display: 'flex', alignItems: 'center' }}>
                  <ul className="main-menu__list d-none d-lg-flex" style={{ display: 'flex', margin: 0, padding: 0, listStyle: 'none', gap: '30px' }}>
                    {menuItems.map((item) => (
                      <li key={item.id} className={pathname === item.path ? 'current' : ''}>
                        <Link href={item.path} style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    {menuItems.length === 0 && (
                      <>
                        <li><Link href="/" style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Home</Link></li>
                        <li><Link href="/about" style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-dark)' }}>About</Link></li>
                        <li><Link href="/gallery" style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Gallery</Link></li>
                        <li><Link href="/contact" style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-dark)' }}>Contact</Link></li>
                      </>
                    )}
                  </ul>
                </div>
                
                <div className="main-menu-two__right" style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="main-menu-two__btn-box d-none d-md-block">
                    <Link href="/contact" className="thm-btn" style={{ padding: '12px 30px' }}>Admissions Open</Link>
                  </div>
                  <div className="mobile-nav__toggler d-lg-none" onClick={toggleMobileNav} style={{ cursor: 'pointer', fontSize: '24px', marginLeft: '20px' }}>
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav__wrapper ${mobileNavOpen ? 'expanded' : ''}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={closeMobileNav}></div>
        <div className="mobile-nav__content" style={{ backgroundColor: 'white', padding: '30px', height: '100%', overflowY: 'auto' }}>
          <span className="mobile-nav__close mobile-nav__toggler" onClick={closeMobileNav} style={{ cursor: 'pointer', fontSize: '24px', position: 'absolute', top: '20px', right: '20px' }}><i className="fas fa-times"></i></span>
          <div className="logo-box" style={{ marginBottom: '40px' }}>
            <Link href="/" onClick={closeMobileNav}>
              <img src="/photo-gallery-webp/logo.png" width="150" alt="" onError={(e) => { e.target.src = '/assets-images/resources/logo-1.png' }} />
            </Link>
          </div>
          
          <div className="mobile-nav__container">
            <ul className="main-menu__list" style={{ display: 'block' }}>
              {menuItems.map((item) => (
                <li key={item.id} className={pathname === item.path ? 'current' : ''} style={{ borderBottom: '1px solid #eee' }}>
                  <Link href={item.path} onClick={closeMobileNav} style={{ display: 'block', padding: '15px 0', fontSize: '1.2rem', color: 'var(--text-dark)' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
              {menuItems.length === 0 && (
                <>
                  <li style={{ borderBottom: '1px solid #eee' }}><Link href="/" onClick={closeMobileNav} style={{ display: 'block', padding: '15px 0', fontSize: '1.2rem', color: 'var(--text-dark)' }}>Home</Link></li>
                  <li style={{ borderBottom: '1px solid #eee' }}><Link href="/about" onClick={closeMobileNav} style={{ display: 'block', padding: '15px 0', fontSize: '1.2rem', color: 'var(--text-dark)' }}>About Us</Link></li>
                  <li style={{ borderBottom: '1px solid #eee' }}><Link href="/gallery" onClick={closeMobileNav} style={{ display: 'block', padding: '15px 0', fontSize: '1.2rem', color: 'var(--text-dark)' }}>Gallery</Link></li>
                  <li style={{ borderBottom: '1px solid #eee' }}><Link href="/contact" onClick={closeMobileNav} style={{ display: 'block', padding: '15px 0', fontSize: '1.2rem', color: 'var(--text-dark)' }}>Contact</Link></li>
                </>
              )}
            </ul>
          </div>
          
          <ul className="mobile-nav__contact list-unstyled" style={{ marginTop: '40px' }}>
            <li><i className="fas fa-envelope"></i> <a href={`mailto:${footerSettings.email || 'info@kidsplanet.com'}`}>{footerSettings.email || 'info@kidsplanet.com'}</a></li>
            <li><i className="fas fa-phone-alt"></i> <a href={`tel:${footerSettings.phone_1 || '9337164626'}`}>{footerSettings.phone_1 || '+91 9337164626'}</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
