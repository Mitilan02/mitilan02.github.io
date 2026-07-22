import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mitilan02@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-line" />
        </div>

        <div className="contact-inner">
          {/* ── Info ──────────────────────── */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h3>Let's work together</h3>
            <p>
              I'm open to full-time opportunities, freelance projects, and
              collaborations. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="contact-detail-list">
              <div className="contact-detail">
                <i className="bx bx-envelope" />
                <span>mitilan02@gmail.com</span>
              </div>
              <div className="contact-detail">
                <i className="bx bx-phone" />
                <span>+91 8220617220</span>
              </div>
              <div className="contact-detail">
                <i className="bx bx-map" />
                <span>Tamil Nadu, India</span>
              </div>
              <a
                href="https://github.com/Mitilan02"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
                style={{ cursor: 'pointer' }}
              >
                <i className="bx bxl-github" />
                <span>github.com/Mitilan02</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mitilan-depak-063962239/"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
                style={{ cursor: 'pointer' }}
              >
                <i className="bx bxl-linkedin" />
                <span>linkedin.com/in/mitilan-depak</span>
              </a>
            </div>
          </div>

          {/* ── Form ──────────────────────── */}
          <div data-aos="fade-left" data-aos-delay="200">
            <form className="contact-form neo-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  className="form-control"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control textarea"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-end' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
