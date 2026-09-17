import React from 'react';
import Link from 'next/link';

export default function LatestNews({ posts = [] }) {
  const formatDate = (dateString) => {
    if (!dateString) return { date: '', month: '' };
    const d = new Date(dateString);
    const date = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'short' });
    return { date, month };
  };

  return (
    <section className="latest-news" id="blog" style={{ padding: '120px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box justify-content-center">
            <p className="section-title__tagline" style={{ color: 'var(--primary-color)' }}>News and Blog</p>
          </div>
          <h2 className="section-title__title title-animation" style={{ fontFamily: 'var(--font-prata)', color: 'var(--purple-color)' }}>
            Latest News
          </h2>
        </div>

        <div className="row">
          {posts.length > 0 ? (
            posts.map((item, index) => {
              const { date, month } = formatDate(item.published_at || item.created_at);
              const delay = `${(index + 1) * 100}ms`;
              return (
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={delay} key={item.id}>
                  <div className="blog-card" style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginBottom: '30px', transition: 'all 0.3s ease' }}>
                    <div className="blog-img" style={{ position: 'relative', overflow: 'hidden' }}>
                      <Link href={`/blog/${item.slug}`}>
                        <img src={item.image_url || '/photo-gallery-webp/27.webp'} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'all 0.5s ease' }} />
                      </Link>
                      <div className="blog-date" style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 15px', borderRadius: '10px', textAlign: 'center', lineHeight: '1.2' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'block' }}>{date}</span>
                        <span style={{ textTransform: 'uppercase', fontSize: '0.8rem' }}>{month}</span>
                      </div>
                    </div>
                    <div className="blog-content" style={{ padding: '30px' }}>
                      <ul className="blog-meta list-unstyled" style={{ display: 'flex', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                        <li style={{ marginRight: '15px', fontSize: '0.9rem', color: 'var(--text-grey)' }}>
                          <i className="far fa-user-circle" style={{ color: 'var(--secondary-color)', marginRight: '5px' }}></i> By {item.author || 'Admin'}
                        </li>
                        <li style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>
                          <Link href={`/blog/${item.slug}#comments`} style={{color: 'inherit'}}>
                            <i className="far fa-comments" style={{ color: 'var(--secondary-color)', marginRight: '5px' }}></i> {item.comments_count || 0} Comments
                          </Link>
                        </li>
                      </ul>
                      <h4 style={{ fontFamily: 'var(--font-prata)', marginBottom: '15px' }}>
                        <Link href={`/blog/${item.slug}`} style={{ color: 'var(--text-dark)' }}>{item.title}</Link>
                      </h4>
                      <p style={{ color: 'var(--text-grey)', marginBottom: '20px', fontSize: '0.95rem' }}>
                        {item.excerpt || item.full_content?.substring(0, 100) + '...'}
                      </p>
                      <Link href={`/blog/${item.slug}`} className="read-more-btn" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>
                        Read More <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.8rem' }}></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center"><p>No news available at the moment.</p></div>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .blog-card:hover .blog-img img {
          transform: scale(1.1);
        }
        .blog-card:hover .read-more-btn {
          color: var(--secondary-color) !important;
        }
      `}} />
    </section>
  );
}
