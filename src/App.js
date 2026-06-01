import { useEffect } from 'react';
import './App.css';

function App() {
  const logoSrc = `${process.env.PUBLIC_URL}/logo.de93ad0d.webp`;
  const headerImageSrc = `${process.env.PUBLIC_URL}/header-img.cd52b6ac.jpg`;

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    let io;

    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('visible'));
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const handleScroll = () => {
      let current = '';

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 70) {
          current = section.id;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${current}`;

        link.classList.toggle('active', isActive);

        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (io) {
        io.disconnect();
      }
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <nav aria-label="Primary navigation">
        <a href="#home" className="brand-link" aria-label="G Consulting home">
          <img src={logoSrc} alt="G Consulting" className="brand-logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta" aria-label="Go to contact section">
          Get in Touch
        </a>
      </nav>

      <main id="main-content">
        <section className="hero" id="home" aria-label="Hero">
          <div className="hero-bg" style={{ backgroundImage: `url(${headerImageSrc})` }} />
          <div className="hero-glow" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">Personal Consulting</span>
          <h1 className="hero-title">
            Experienced,
            <br />
            Personal Consulting
          </h1>
          <p className="hero-sub">Helping you design success.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" aria-label="Contact G Consulting">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Contact Us
            </a>
            <a href="#about" className="btn-secondary" aria-label="Read more about G Consulting">
              Learn More
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        </section>

        <div className="stats-band" aria-label="Company highlights">
        <div className="stats-inner">
          <div className="stat-item reveal">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item reveal reveal-d1">
            <div className="stat-number">500+</div>
            <div className="stat-label">Clients Served</div>
          </div>
          <div className="stat-item reveal reveal-d2">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction Rate</div>
          </div>
        </div>
        </div>

        <section className="section about" id="about" aria-labelledby="about-heading">
        <div className="section-inner">
          <span className="eyebrow reveal">About Us</span>
          <h2 className="section-title reveal" id="about-heading">
            Experience You Can Count On
          </h2>

          <div className="about-text-block about-text-spacing">
            <p className="reveal">
              Our service includes a comprehensive consultation to help identify gaps and
              opportunities. You receive a thorough report with timelines, milestones,
              cost analysis, and a clear schedule. We also offer a suite of quality
              products that help you get there quickly and smoothly.
            </p>
            <p className="reveal">
              We are well established and have earned a strong reputation among our
              clients through proven digital solutions and an in-depth understanding of
              online challenges. Our specialised solutions are known to have a successful
              track record.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card reveal reveal-d1">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Our Experience</h3>
              <p>
                After 10 years in the industry, we decided to alter direction. Now we
                share our passion by helping others. Our training programs are designed
                to empower your team and drive results.
              </p>
            </div>
            <div className="about-card reveal reveal-d2">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Why Us</h3>
              <p>
                Business mentors are key. For client selection, we choose who we want to
                work with. We take the time and care to give each of you the focus and
                attention you deserve.
              </p>
            </div>
            <div className="about-card reveal reveal-d3">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Learn More</h3>
              <p>
                Our ramp-up process empowers your team with the tools they need to
                succeed. Talk to us today about how we can support your growth and put
                you on a solid track to profit.
              </p>
            </div>
          </div>
        </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-heading">
        <div className="section-inner wide">
          <span className="eyebrow reveal services-eyebrow">Our Services</span>
          <h2 className="section-title light reveal" id="services-heading">
            Your life will be much easier
            <br />
            with our Services
          </h2>
          <p className="section-body light reveal section-top-gap">
            From outsourcing to digital strategy, we bring the expertise that moves your
            business forward.
          </p>

          <div className="services-grid reveal">
            <div className="service-item">
              <div className="service-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <span className="service-num">01</span>
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Outsourcing</h3>
              <p>
                Our team has extensive experience in setting up call centres across the
                globe. We can assist you from a blank spot to a fully functional call
                center built for performance.
              </p>
            </div>
            <div className="service-item">
              <div className="service-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <span className="service-num">02</span>
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3>Telecommunication</h3>
              <p>
                Telecommunication services are a lifeline for any business. Our team
                ensures you pay the lowest rates no matter how many services you have.
              </p>
            </div>
            <div className="service-item">
              <div className="service-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <span className="service-num">03</span>
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3>Website Design and Development</h3>
              <p>
                We build robust UX by developing a strong user experience for your
                website and web marketing goals. Our professional designers help you
                achieve your digital business objectives.
              </p>
            </div>
            <div className="service-item">
              <div className="service-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <span className="service-num">04</span>
              <div className="service-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>Search Engine Optimization</h3>
              <p>
                Any business looking to grow exponentially needs a digital marketing
                strategy. We provide a measurable, results-driven approach to SEO for
                your business online.
              </p>
            </div>
          </div>
        </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-heading">
        <div className="section-inner">
          <span className="eyebrow reveal">Contact Us</span>
          <h2 className="section-title reveal" id="contact-heading">
            Get in Touch
          </h2>
          <p className="section-body reveal section-body-top-gap">
            We would love to hear from you. Reach out and let us start a conversation
            about how we can help you succeed.
          </p>

          <div className="contact-grid">
            <div className="contact-card reveal reveal-d1">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Find us at the office</h4>
                <p>
                  800 Connecticut Avenue,
                  <br />
                  Norwalk, Connecticut
                </p>
              </div>
            </div>
            <div className="contact-card reveal reveal-d2">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Give us a ring</h4>
                <p>
                  <a href="tel:+12035550147" className="contact-link">
                    +1 (203) 555-0147
                  </a>
                  <br />
                  Mon - Fri, 9AM to 6PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>

      <footer aria-label="Site footer">
        <div className="footer-inner">
          <a href="#home" className="footer-logo" aria-label="Back to top">
            <img src={logoSrc} alt="G Consulting" className="footer-logo-image" />
          </a>
          <p>Copyright 2026 G Consulting. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
