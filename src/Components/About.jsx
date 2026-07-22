import profilePic from '../assets/my.jpg';
import cv from '../assets/MitilanDepak.pdf';

function About() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text" data-aos="fade-right" data-aos-duration="900">
              <p className="hero-greeting">Hello, World!</p>
              <h1 className="hero-name">
                I'm <span>Mitilan Depak</span>
              </h1>
              <p className="hero-role">
                <span>Flutter Developer</span> &amp; Mobile App Specialist
              </p>
              <p className="hero-bio">
                Building production-grade cross-platform mobile applications with
                1.4+ years of hands-on experience across ecommerce, real estate,
                food delivery, and service domains.
              </p>

              <div className="hero-actions">
                <a href={cv} download className="btn-primary">
                  Download Resume
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/Mitilan02"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="GitHub"
                >
                  <i className="bx bxl-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mitilan-depak-063962239/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                >
                  <i className="bx bxl-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/mitil._.n/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="Instagram"
                >
                  <i className="bx bxl-instagram" />
                </a>
                <a
                  href="mailto:mitilan02@gmail.com"
                  className="social-icon"
                  title="Email"
                >
                  <i className="bx bxl-gmail" />
                </a>
              </div>
            </div>

            <div className="hero-image-wrap" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
              <div className="hero-img-ring">
                <div className="hero-img-inner">
                  <img src={profilePic} alt="Mitilan Depak" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT CARD ──────────────────────── */}
      <section id="about">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">About <span>Me</span></h2>
            <div className="section-line" />
          </div>

          <div className="about-card neo-card" data-aos="fade-up" data-aos-delay="100">
            <div className="about-body">
              <h2>
                Flutter Developer — <span>Crafting Mobile Experiences</span>
              </h2>
              <p>
                Motivated Flutter Developer with 1.4+ years of hands-on experience
                building and maintaining production-grade cross-platform mobile
                applications (Android &amp; iOS) across ecommerce, real estate,
                food delivery, and service domains. Proficient in Bloc state
                management, REST API integration, Firebase Cloud Messaging (FCM),
                and payment gateway integration (Razorpay, Stripe). Experienced in
                multi-role workflow systems and end-to-end app deployment on Google
                Play Store and Apple App Store.
              </p>

              <div className="about-stats">
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                  <div className="stat-num">1.4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                  <div className="stat-num">6+</div>
                  <div className="stat-label">Apps Deployed</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                  <div className="stat-num">2</div>
                  <div className="stat-label">Platforms (Android &amp; iOS)</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stat-num">8.25</div>
                  <div className="stat-label">B.E. CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
