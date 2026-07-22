import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import profilePic from '../assets/my.jpg'
import cv from '../assets/MitilanDepak.pdf'
import { staggerContainer, staggerItem, scaleIn, flipUp, viewport, spotlight } from '../animations'
import { useMagnetic } from '../hooks/useMagnetic'

/* ── Typewriter ─────────────────────────────────────────── */
const roles = ['Flutter Developer', 'Mobile App Specialist', 'Cross-Platform Expert', 'Bloc Architecture Pro']
function useTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx,   setWordIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)
  useEffect(() => {
    const word = roles[wordIdx]
    let t
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75)
    else if (!deleting && displayed.length === word.length)
      t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    else { setDeleting(false); setWordIdx((i) => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, wordIdx])
  return displayed
}

/* ── Count-up ────────────────────────────────────────────── */
function CountUp({ to, decimals = 0, suffix = '', inView }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1400, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setVal(parseFloat((e * to).toFixed(decimals)))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, decimals])
  return <>{val}{suffix}</>
}

/* ── Magnetic social icon ────────────────────────────────── */
function MagSocial({ href, icon, title }) {
  const { ref, motionStyle, onMouseMove, onMouseLeave } = useMagnetic(0.45)
  return (
    <motion.a
      ref={ref}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="social-icon"
      title={title}
      style={motionStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className={`bx ${icon}`} />
    </motion.a>
  )
}

const socials = [
  { href: 'https://github.com/Mitilan02',                          icon: 'bxl-github',    title: 'GitHub'    },
  { href: 'https://www.linkedin.com/in/mitilan-depak-063962239/', icon: 'bxl-linkedin',  title: 'LinkedIn'  },
  { href: 'https://www.instagram.com/mitil._.n/',                 icon: 'bxl-instagram', title: 'Instagram' },
  { href: 'mailto:mitilan02@gmail.com',                            icon: 'bxl-gmail',     title: 'Email'     },
]

const stats = [
  { num: 1.4, decimals: 1, suffix: '+', label: 'Years Experience' },
  { num: 6,   decimals: 0, suffix: '+', label: 'Apps Deployed'    },
  { num: 2,   decimals: 0, suffix: '',  label: 'Platforms'        },
  { num: 8.25,decimals: 2, suffix: '',  label: 'B.E. CGPA'        },
]

/* ── Magnetic CTA button ─────────────────────────────────── */
function MagBtn({ href, children }) {
  const { ref, motionStyle, onMouseMove, onMouseLeave } = useMagnetic(0.25)
  return (
    <motion.a
      ref={ref}
      href={href}
      download
      className="btn-primary"
      style={motionStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

export default function About() {
  const typed    = useTypewriter()
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })

  /* ── Mouse parallax for hero ─────────────────────────── */
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const imgX  = useSpring(useTransform(mouseX, [0, 1], [-18, 18]), { stiffness: 90, damping: 22 })
  const imgY  = useSpring(useTransform(mouseY, [0, 1], [-12, 12]), { stiffness: 90, damping: 22 })
  const txtX  = useSpring(useTransform(mouseX, [0, 1], [8, -8]),   { stiffness: 80, damping: 22 })

  const handleHeroMouse = useCallback((e) => {
    mouseX.set(e.clientX / window.innerWidth)
    mouseY.set(e.clientY / window.innerHeight)
  }, [mouseX, mouseY])

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="hero" id="home" onMouseMove={handleHeroMouse}>
        <div className="container">
          <div className="hero-inner">

            {/* Text */}
            <motion.div
              className="hero-text"
              style={{ x: txtX }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p className="hero-greeting" variants={staggerItem}>Hello, World!</motion.p>

              <motion.h1 className="hero-name" variants={staggerItem}>
                I'm <span className="gradient-text">Mitilan Depak</span>
              </motion.h1>

              <motion.p className="hero-role" variants={staggerItem}>
                <span className="typed">{typed}</span>
                <span className="cursor" />
              </motion.p>

              <motion.p className="hero-bio" variants={staggerItem}>
                Building production-grade cross-platform mobile apps with 1.4+ years of
                experience across ecommerce, real estate, food delivery, and service domains.
              </motion.p>

              <motion.div className="hero-actions" variants={staggerItem}>
                <MagBtn href={cv}>Download Resume</MagBtn>
              </motion.div>

              <motion.div className="hero-socials" variants={staggerContainer} initial="hidden" animate="visible">
                {socials.map((s) => (
                  <motion.div key={s.title} variants={staggerItem}>
                    <MagSocial {...s} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo with parallax */}
            <motion.div
              className="hero-image-wrap"
              style={{ x: imgX, y: imgY }}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="hero-img-ring">
                <div className="hero-img-inner">
                  <img src={profilePic} alt="Mitilan Depak" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════ */}
      <section id="about">
        <div className="container">
          <motion.div className="section-header"
            variants={flipUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <h2 className="section-title">About <span>Me</span></h2>
            <div className="section-line" />
          </motion.div>

          <motion.div
            className="about-card neo-card glow-card"
            onMouseMove={spotlight}
            variants={flipUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="about-body">
              <h2>Flutter Developer — <span>Crafting Mobile Experiences</span></h2>
              <p>
                Motivated Flutter Developer with 1.4+ years of hands-on experience building and
                maintaining production-grade cross-platform mobile applications (Android &amp; iOS)
                across ecommerce, real estate, food delivery, and service domains. Proficient in Bloc
                state management, REST API integration, Firebase Cloud Messaging, and payment gateway
                integration (Razorpay, Stripe).
              </p>

              <motion.div
                className="about-stats"
                ref={statsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {stats.map((s) => (
                  <motion.div
                    className="stat-card glow-card"
                    key={s.label}
                    variants={flipUp}
                    onMouseMove={spotlight}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="stat-num">
                      <CountUp to={s.num} decimals={s.decimals} suffix={s.suffix} inView={statsInView} />
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
