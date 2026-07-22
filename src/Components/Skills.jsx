import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, flipLeft, flipRight, flipUp, viewport, spotlight } from '../animations'

/* ── Skill data with per-card theme + description ────────── */
const skills = [
  {
    label:       'Flutter & Dart',
    icon:        'bxl-flutter',
    pct:         90,
    color:       '#54c5f8',
    colorDim:    'rgba(84,197,248,0.13)',
    colorGlow:   'rgba(84,197,248,0.28)',
    colorBorder: 'rgba(84,197,248,0.5)',
    gradient:    'linear-gradient(135deg,rgba(84,197,248,0.22) 0%,rgba(13,15,26,0.75) 100%)',
    level:       'Expert',
    desc:        'Building beautiful, natively compiled cross-platform applications for Android & iOS from a single codebase.',
    points: [
      'Custom widget design & complex animations',
      'Platform channel & native integrations',
      'Performance optimisation on both platforms',
    ],
  },
  {
    label:       'Bloc State Mgmt',
    icon:        'bx-layer',
    pct:         85,
    color:       '#a78bfa',
    colorDim:    'rgba(167,139,250,0.13)',
    colorGlow:   'rgba(167,139,250,0.28)',
    colorBorder: 'rgba(167,139,250,0.5)',
    gradient:    'linear-gradient(135deg,rgba(167,139,250,0.22) 0%,rgba(13,15,26,0.75) 100%)',
    level:       'Advanced',
    desc:        'Implementing the Business Logic Component pattern for predictable, testable, and maintainable app state.',
    points: [
      'BlocBuilder, BlocListener & BlocConsumer',
      'Stream-based reactive architecture',
      'Clean separation of UI and business logic',
    ],
  },
  {
    label:       'REST APIs & JSON',
    icon:        'bx-transfer-alt',
    pct:         88,
    color:       '#34d399',
    colorDim:    'rgba(52,211,153,0.13)',
    colorGlow:   'rgba(52,211,153,0.28)',
    colorBorder: 'rgba(52,211,153,0.5)',
    gradient:    'linear-gradient(135deg,rgba(52,211,153,0.22) 0%,rgba(13,15,26,0.75) 100%)',
    level:       'Advanced',
    desc:        'Seamless backend integration — HTTP request handling, JSON serialisation/deserialisation, and robust error management.',
    points: [
      'Dio & http package integration',
      'JSON parsing with model classes',
      'Error handling, retry logic & data optimisation',
    ],
  },
  {
    label:       'Firebase (FCM)',
    icon:        'bxl-firebase',
    pct:         80,
    color:       '#fbbf24',
    colorDim:    'rgba(251,191,36,0.13)',
    colorGlow:   'rgba(251,191,36,0.28)',
    colorBorder: 'rgba(251,191,36,0.5)',
    gradient:    'linear-gradient(135deg,rgba(251,191,36,0.22) 0%,rgba(13,15,26,0.75) 100%)',
    level:       'Proficient',
    desc:        'Real-time push notification delivery across all app lifecycle states with custom notification sounds and actions.',
    points: [
      'Foreground, background & terminated states',
      'Custom notification channels & alert sounds',
      'Real-time data sync & topic subscriptions',
    ],
  },
  {
    label:       'Razorpay / Stripe',
    icon:        'bx-credit-card',
    pct:         75,
    color:       '#f472b6',
    colorDim:    'rgba(244,114,182,0.13)',
    colorGlow:   'rgba(244,114,182,0.28)',
    colorBorder: 'rgba(244,114,182,0.5)',
    gradient:    'linear-gradient(135deg,rgba(244,114,182,0.22) 0%,rgba(13,15,26,0.75) 100%)',
    level:       'Proficient',
    desc:        'Secure payment gateway integration enabling smooth transaction flows with complete lifecycle management.',
    points: [
      'End-to-end payment flow integration',
      'Success, failure & retry handling',
      'Webhook validation & order tracking',
    ],
  },
  {
    label:       'Git',
    icon:        'bxl-git',
    pct:         78,
    color:       '#fb923c',
    colorDim:    'rgba(251,146,60,0.13)',
    colorGlow:   'rgba(251,146,60,0.28)',
    colorBorder: 'rgba(251,146,60,0.5)',
    gradient:    'linear-gradient(135deg,rgba(251,146,60,0.22) 0%,rgba(13,15,26,0.75) 100%)',
    level:       'Proficient',
    desc:        'Version control for collaborative development with clean branching strategies and release management.',
    points: [
      'Feature branching & PR workflows',
      'Conflict resolution & code review',
      'Release tagging & versioning',
    ],
  },
]

const techStack = [
  { label: 'Flutter',    icon: 'bxl-flutter'     },
  { label: 'Dart',       icon: 'bx-code-alt'     },
  { label: 'Firebase',   icon: 'bxl-firebase'    },
  { label: 'Android',    icon: 'bxl-android'     },
  { label: 'iOS',        icon: 'bxl-apple'       },
  { label: 'Git',        icon: 'bxl-git'         },
  { label: 'REST API',   icon: 'bx-transfer-alt' },
  { label: 'Bloc',       icon: 'bx-layer'        },
  { label: 'Play Store', icon: 'bxl-play-store'  },
]

/* ── Proficiency level badge colour ─────────────────────── */
const levelColor = {
  Expert:     '#34d399',
  Advanced:   '#818cf8',
  Proficient: '#fb923c',
}

/* ── Single skill flip card ──────────────────────────────── */
function SkillCard({ skill, index }) {
  const [flipped, setFlipped] = useState(false)

  const cssVars = {
    '--c':     skill.color,
    '--c-dim': skill.colorDim,
    '--c-glow':skill.colorGlow,
    '--c-bdr': skill.colorBorder,
    '--c-grad':skill.gradient,
  }

  /* alternate flip direction per row for variety */
  const entryVariant = index % 2 === 0 ? flipLeft : flipRight

  return (
    <motion.div
      variants={entryVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.08 }}
      /* expand + float above neighbours on hover */
      whileHover={{ scale: 1.06, zIndex: 10 }}
      style={{ position: 'relative', zIndex: 1, ...cssVars }}
      className={`s-flip${flipped ? ' is-flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="s-flip-inner">

          {/* ── FRONT ── */}
          <div className="s-face s-front" onMouseMove={spotlight}>
            {/* ghost percentage watermark */}
            <span className="s-ghost-pct">{skill.pct}</span>
            <span className="s-hint" aria-hidden="true">
              <i className="bx bx-rotate-right" /> hover
            </span>

            {/* TOP GROUP: icon + name */}
            <div className="s-top">
              <div className="s-icon">
                <i className={`bx ${skill.icon}`} />
              </div>
              <div className="s-name">{skill.label}</div>
            </div>

            {/* BOTTOM GROUP: bar + percentage */}
            <div className="s-bottom">
              <div className="s-bar-track">
                <motion.div
                  className="s-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="s-pct-row">
                <span className="s-pct-label">Proficiency</span>
                <span className="s-pct-val">{skill.pct}%</span>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="s-face s-back">
            {/* top colour line */}
            <div className="s-back-line" />

            {/* header row */}
            <div className="s-back-header">
              <div className="s-icon s-icon-sm">
                <i className={`bx ${skill.icon}`} />
              </div>
              <div>
                <div className="s-level-badge"
                  style={{ color: levelColor[skill.level], borderColor: levelColor[skill.level],
                           background: `${levelColor[skill.level]}18` }}>
                  {skill.level}
                </div>
                <div className="s-name s-name-back">{skill.label}</div>
              </div>
            </div>

            {/* description */}
            <p className="s-desc">{skill.desc}</p>

            {/* key points */}
            <ul className="s-points">
              {skill.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>

            {/* percentage pill at bottom */}
            <div className="s-back-pct">{skill.pct}%</div>
          </div>
        </div>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={flipUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-line" />
          <p className="section-sub">
            "Without sharpening your weapon; standing on the battlefield would not increase
            your chance of winning." — hover each card to learn more.
          </p>
        </motion.div>

        {/* ── Skill flip-card grid ── */}
        <motion.div
          className="skill-cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skills.map((s, i) => (
            <SkillCard key={s.label} skill={s} index={i} />
          ))}
        </motion.div>

        {/* ── Tech stack chips ── */}
        <motion.div
          className="tech-stack-wrap"
          variants={flipUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="tech-stack-label">Also worked with</p>
          <div className="tech-stack">
            {techStack.map((t, i) => (
              <motion.div
                className="tech-chip glow-card"
                key={t.label}
                onMouseMove={spotlight}
                variants={i % 2 === 0 ? flipLeft : flipRight}
                whileHover={{ scale: 1.08, y: -4,
                  boxShadow: '0 8px 24px rgba(129,140,248,0.25)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`bx ${t.icon}`} />
                {t.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
