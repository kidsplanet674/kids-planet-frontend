"use client";
import React, { useState } from 'react';

export default function ContactSection({ contactSettings = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost/backend-cms/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <section className="contact-page" style={{ padding: '120px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2" style={{ marginBottom: '60px' }}>
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>Contact Us</p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)', fontSize: '2.5rem' }}>
            Feel Free to Write Us
          </h2>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="contact-page__left">
              <div className="contact-page__details" style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '15px' }}>
                <ul className="list-unstyled contact-page__details-list" style={{ margin: 0 }}>
                  <li style={{ display: 'flex', marginBottom: '30px' }}>
                    <div className="icon" style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginRight: '20px', flexShrink: 0 }}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-dark)' }}>Our Location</h4>
                      <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: contactSettings.address || 'Plot No-1897, Badhei Banka Chowk, Old Town, BBSR' }} />
                    </div>
                  </li>
                  <li style={{ display: 'flex', marginBottom: '30px' }}>
                    <div className="icon" style={{ width: '60px', height: '60px', backgroundColor: 'var(--secondary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginRight: '20px', flexShrink: 0 }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-dark)' }}>Call Us</h4>
                      <p style={{ margin: 0, color: '#666' }}>
                        <a href={`tel:${contactSettings.phone_1 || '9337164626'}`} style={{ color: 'inherit' }}>{contactSettings.phone_1 || '+91 9337164626'}</a>
                        {contactSettings.phone_2 && (
                          <><br /><a href={`tel:${contactSettings.phone_2}`} style={{ color: 'inherit' }}>{contactSettings.phone_2}</a></>
                        )}
                      </p>
                    </div>
                  </li>
                  <li style={{ display: 'flex' }}>
                    <div className="icon" style={{ width: '60px', height: '60px', backgroundColor: 'var(--purple-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginRight: '20px', flexShrink: 0 }}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="content">
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-dark)' }}>Email Us</h4>
                      <p style={{ margin: 0, color: '#666' }}>
                        <a href={`mailto:${contactSettings.email || 'info@kidsplanet.com'}`} style={{ color: 'inherit' }}>{contactSettings.email || 'info@kidsplanet.com'}</a>
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="contact-page__social" style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #ddd' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Follow Us</h4>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)', boxShadow: '0 5px 10px rgba(0,0,0,0.05)', transition: 'all 300ms' }}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)', boxShadow: '0 5px 10px rgba(0,0,0,0.05)', transition: 'all 300ms' }}><i className="fab fa-twitter"></i></a>
                    <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)', boxShadow: '0 5px 10px rgba(0,0,0,0.05)', transition: 'all 300ms' }}><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-8 col-lg-7 mt-5 mt-lg-0">
            <div className="contact-page__right">
              <form onSubmit={handleSubmit} className="contact-page__form" style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                {status.success && (
                  <div className="alert alert-success" role="alert" style={{ borderRadius: '10px', marginBottom: '30px' }}>
                    <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </div>
                )}
                {status.error && (
                  <div className="alert alert-danger" role="alert" style={{ borderRadius: '10px', marginBottom: '30px' }}>
                    <i className="fas fa-exclamation-circle" style={{ marginRight: '10px' }}></i>
                    {status.error}
                  </div>
                )}

                <div className="row">
                  <div className="col-xl-6 col-md-6 mb-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required
                      style={{ width: '100%', height: '60px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '30px', padding: '0 30px', outline: 'none' }}
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 mb-4">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required
                      style={{ width: '100%', height: '60px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '30px', padding: '0 30px', outline: 'none' }}
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 mb-4">
                    <input 
                      type="text" 
                      placeholder="Phone Number" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      style={{ width: '100%', height: '60px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '30px', padding: '0 30px', outline: 'none' }}
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 mb-4">
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required
                      style={{ width: '100%', height: '60px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '30px', padding: '0 30px', outline: 'none' }}
                    />
                  </div>
                  <div className="col-xl-12 mb-4">
                    <textarea 
                      name="message" 
                      placeholder="Write a Message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                      style={{ width: '100%', height: '180px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '30px', padding: '30px', outline: 'none', resize: 'none' }}
                    ></textarea>
                  </div>
                  <div className="col-xl-12">
                    <button type="submit" className="thm-btn" disabled={status.submitting} style={{ border: 'none', width: '100%' }}>
                      {status.submitting ? 'Sending...' : 'Send a Message'} <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {contactSettings.map_embed && (
        <div className="contact-page__map" style={{ marginTop: '100px', height: '500px' }}>
          <iframe 
            src={contactSettings.map_embed}
            className="contact-page-google-map__one" 
            allowFullScreen 
            style={{ width: '100%', height: '100%', border: 0 }}
          ></iframe>
        </div>
      )}
    </section>
  );
}
