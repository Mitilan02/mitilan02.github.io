const experience = [
  {
    date: 'Dec 2024 – Present',
    title: 'Flutter Developer',
    company: 'Smarther Technologies',
    points: [
      'Developed and maintained 6+ production Flutter apps across ecommerce, real estate, food delivery, and service platforms.',
      'Implemented Bloc state management for scalable, testable app architecture.',
      'Integrated Firebase Cloud Messaging (FCM) for foreground, background, and terminated notification states.',
      'Integrated Razorpay and Stripe payment gateways with full success, failure, and retry coverage.',
      'Managed end-to-end app deployment on Google Play Store and Apple App Store.',
      'Collaborated with backend teams to optimize API performance on Android and iOS.',
    ],
  },
  {
    date: 'Jul 2024 – Aug 2024',
    title: 'Web Development Intern',
    company: 'Codsoft',
    points: [
      'Completed a web development internship building front-end projects.',
      'Gained hands-on experience with HTML, CSS, and JavaScript.',
    ],
  },
];

const education = [
  {
    date: '2020 – 2024',
    title: 'B.E. Computer Science & Engineering',
    institution: 'Dr. Sivanthi Aditanar College of Engineering',
    desc: 'Anna University | CGPA: 8.25 / 10.0',
  },
  {
    date: '2019 – 2020',
    title: 'HSC (Higher Secondary)',
    institution: 'STAR Matric Hr. Sec. School',
    desc: 'Scored 73.17%',
  },
  {
    date: '2017 – 2018',
    title: 'SSLC (Secondary School)',
    institution: 'STAR Matric Hr. Sec. School',
    desc: 'Scored 84.2%',
  },
];

function Timeline() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Experience &amp; <span>Education</span></h2>
          <div className="section-line" />
        </div>

        <div className="timeline-grid">
          {/* ── Experience ─────────────────── */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h3>
              <i className="bx bxs-briefcase" /> Work Experience
            </h3>

            {experience.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-date">{item.date}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-sub">{item.company}</div>
                  <div className="tl-desc">
                    <ul>
                      {item.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Education ──────────────────── */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h3>
              <i className="bx bxs-graduation" /> Education
            </h3>

            {education.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-date">{item.date}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-sub">{item.institution}</div>
                  <div className="tl-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
