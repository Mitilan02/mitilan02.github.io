import { motion } from 'framer-motion'
import { slideLeft, slideRight, staggerContainer, staggerItem, viewport } from '../animations'

const skills = [
  { label: 'Flutter & Dart',    icon: 'bxl-flutter',     pct: 90 },
  { label: 'Bloc State Mgmt',   icon: 'bx-layer',        pct: 85 },
  { label: 'REST APIs & JSON',  icon: 'bx-transfer-alt', pct: 88 },
  { label: 'Firebase (FCM)',    icon: 'bxl-firebase',    pct: 80 },
  { label: 'Razorpay / Stripe', icon: 'bx-credit-card',  pct: 75 },
  { label: 'Git',               icon: 'bxl-git',         pct: 78 },
]

const techStack = [
  { label: 'Flutter',    icon: 'bxl-flutter'      },
  { label: 'Dart',       icon: 'bx-code-alt'      },
  { label: 'Firebase',   icon: 'bxl-firebase'     },
  { label: 'Android',    icon: 'bxl-android'      },
  { label: 'iOS',        icon: 'bxl-apple'        },
  { label: 'Git',        icon: 'bxl-git'          },
  { label: 'REST API',   icon: 'bx-transfer-alt'  },
  { label: 'Bloc',       icon: 'bx-layer'         },
  { label: 'Play Store', icon: 'bxl-play-store'   },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="skills-grid">
          {/* ── Skill bars ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="skills-intro">
              <h3>"Without sharpening your weapon; standing on the battlefield
              would not increase your chance of winning."</h3>
            </div>

            {skills.map((s, i) => (
              <div className="skill-item" key={s.label}>
                <div className="skill-meta">
                  <div className="skill-label">
                    <i className={`bx ${s.icon}`} />
                    {s.label}
                  </div>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar-track neo-inset">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Tech chips ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="tech-stack">
              {techStack.map((t) => (
                <motion.div
                  className="tech-chip"
                  key={t.label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className={`bx ${t.icon}`} />
                  {t.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
