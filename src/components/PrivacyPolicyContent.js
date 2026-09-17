import React from 'react';

export default function PrivacyPolicyContent({ sections = [], settings = null }) {

  return (
    <section className="privacy-policy" style={{ padding: '100px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            
            {/* Header / Intro */}
            <div className="policy-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)', fontSize: '2.5rem', marginBottom: '20px' }}>
                {settings?.header_title || 'Privacy Policy'}
              </h2>
              {settings?.last_updated && (
                <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '20px' }}>
                  Last Updated: {new Date(settings.last_updated).toLocaleDateString()}
                </p>
              )}
              {settings?.intro_text && (
                <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {settings.intro_text}
                </p>
              )}
            </div>

            {/* Sections */}
            <div className="policy-sections" style={{ backgroundColor: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <div key={section.id} className="policy-section" style={{ marginBottom: index === sections.length - 1 ? '0' : '40px' }}>
                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '20px' }}>
                      {index + 1}. {section.title}
                    </h3>
                    <div className="policy-content" style={{ color: '#666', lineHeight: '1.8' }}>
                      {Array.isArray(section.content) ? (
                        section.content.map((paragraph, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph || '' }} />
                        ))
                      ) : (
                        <p dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <p>Privacy policy content is currently being updated.</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {settings?.footer_note && (
              <div className="policy-footer" style={{ marginTop: '50px', textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <p style={{ color: '#666', margin: 0, fontWeight: '500' }}>
                  {settings.footer_note}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
