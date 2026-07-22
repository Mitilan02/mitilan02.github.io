const skills = [
  { label: 'Flutter & Dart',   icon: 'bxl-flutter',     pct: 90 },
  { label: 'Bloc State Mgmt',  icon: 'bx-layer',        pct: 85 },
  { label: 'REST APIs & JSON', icon: 'bx-transfer-alt', pct: 88 },
  { label: 'Firebase (FCM)',   icon: 'bxl-firebase',    pct: 80 },
  { label: 'Razorpay / Stripe',icon: 'bx-credit-card',  pct: 75 },
  { label: 'Git',              icon: 'bxl-git',         pct: 78 },
];

const techStack = [
  { label: 'Flutter',   icon: 'bxl-flutter' },
  { label: 'Dart',      icon: 'bx-code-alt' },
  { label: 'Firebase',  icon: 'bxl-firebase' },
  { label: 'Android',   icon: 'bxl-android' },
  { label: 'iOS',       icon: 'bxl-apple' },
  { label: 'Git',       icon: 'bxl-git' },
  { label: 'REST API',  icon: 'bx-transfer-alt' },
  { label: 'Bloc',      icon: 'bx-layer' },
  { label: 'Play Store',icon: 'bxl-play-store' },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {/* ── Skill bars ────────────────── */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="skills-intro">
              <h3>
                "Without sharpening your weapon; standing on the battlefield
                would not increase your chance of winning."
              </h3>
            </div>

            {skills.map((s) => (
              <div className="skill-item" key={s.label}>
                <div className="skill-meta">
                  <div className="skill-label">
                    <i className={`bx ${s.icon}`} />
                    {s.label}
                  </div>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar-track neo-inset">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── Tech stack grid ───────────── */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div className="tech-stack">
              {techStack.map((t) => (
                <div className="tech-chip" key={t.label}>
                  <i className={`bx ${t.icon}`} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
