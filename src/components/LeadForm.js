"use client";

import React from 'react';

export default function LeadForm() {
  return (
    <section className="contact-one" id="contact" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="contact-one__form-box" style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderTop: '5px solid var(--primary-color)' }}>
              <div className="section-title text-center">
                <h2 className="section-title__title" style={{ fontFamily: 'var(--font-prata)', marginBottom: '15px', fontSize: '2.5rem', color: 'var(--text-dark)' }}>Give Your Child the Best Start!</h2>
                <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '40px' }}>Limited seats available for the upcoming academic year. Fill out the form below and our admissions team will contact you within 24 hours.</p>
              </div>
              <form className="contact-one__form contact-form-validated" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-one__input-box" style={{ marginBottom: '20px' }}>
                      <input type="text" placeholder="Parent's Name" name="name" style={{ width: '100%', padding: '15px 25px', backgroundColor: 'var(--bg-light)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '30px', outline: 'none' }} required />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-one__input-box" style={{ marginBottom: '20px' }}>
                      <input type="tel" placeholder="Phone Number" name="phone" style={{ width: '100%', padding: '15px 25px', backgroundColor: 'var(--bg-light)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '30px', outline: 'none' }} required />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-one__input-box" style={{ marginBottom: '20px' }}>
                      <input type="text" placeholder="Child's Age" name="age" style={{ width: '100%', padding: '15px 25px', backgroundColor: 'var(--bg-light)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '30px', outline: 'none' }} required />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-one__input-box" style={{ marginBottom: '20px' }}>
                      <select name="program" style={{ width: '100%', padding: '15px 25px', backgroundColor: 'var(--bg-light)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '30px', outline: 'none', color: 'var(--text-grey)', appearance: 'none' }} required>
                        <option value="">Select Program of Interest</option>
                        <option value="play-school">Play School</option>
                        <option value="day-care">Day Care</option>
                        <option value="nursery">Nursery</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-one__btn-box text-center" style={{ marginTop: '10px' }}>
                      <button type="submit" className="thm-btn" style={{ padding: '15px 40px', width: '100%', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold' }}>Schedule a Visit <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
