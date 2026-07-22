import { motion } from 'framer-motion'
import { flipLeft, flipRight, flipUp, viewport, spotlight } from '../animations'

const experience = [
  {
    date: 'Dec 2024 – Present',
    title: 'Flutter Developer',
    company: 'Smarther Technologies',
    points: [
      'Developed and maintained 6+ production Flutter apps across ecommerce, real estate, food delivery, and service platforms.',
      'Implemented Bloc state management for scalable, testable architecture.',
      'Integrated Firebase FCM for foreground, background, and terminated notification states.',
      'Integrated Razorpay & Stripe with full success, failure, and retry coverage.',
      'Managed end-to-end deployment on Google Play Store and Apple App Store.',
    ],
  },
  {
    date: 'Jul 2024 – Aug 2024',
    title: 'Web Development Intern',
    company: 'Codsoft',
    points: [
      'Built front-end projects with HTML, CSS, and JavaScript.',
    ],
  },
]

const education = [
  {
    date: '2020 – 2024',
    title: 'B.E. Computer Science & Engineering',
    institution: 'Dr. Sivanthi Aditanar College of Engineering',
    desc: 'Anna University | CGPA: 8.25 / 10.0',
  },
  { date: '2019 – 2020', title: 'HSC', institution: 'STAR Matric Hr. Sec. School', desc: 'Scored 73.17%' },
  { date: '2017 – 2018', title: 'SSLC', institution: 'STAR Matric Hr. Sec. School', desc: 'Scored 84.2%' },
]

function TlItem({ item, side, index }) {
  const variant = side === 'left' ? flipLeft : flipRight
  return (
    <motion.div
      className="tl-item"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.12 }}
    >
      <div className="tl-dot" />
      <motion.div
        className="tl-card glow-card"
        onMouseMove={spotlight}
        whileHover={{ x: side === 'left' ? 6 : -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="tl-date">{item.date}</div>
        <div className="tl-title">{item.title}</div>
        <div className="tl-sub">{item.company || item.institution}</div>
        <div className="tl-desc">
          {item.points
            ? <ul>{item.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
            : item.desc}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div className="section-header"
          variants={flipUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <h2 className="section-title">Experience &amp; <span>Education</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="timeline-grid">
          <div className="timeline-col">
            <motion.h3 variants={flipLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <i className="bx bxs-briefcase" /> Work Experience
            </motion.h3>
            {experience.map((item, i) => <TlItem key={i} item={item} side="left"  index={i} />)}
          </div>

          <div className="timeline-col">
            <motion.h3 variants={flipRight} initial="hidden" whileInView="visible" viewport={viewport}>
              <i className="bx bxs-graduation" /> Education
            </motion.h3>
            {education.map((item, i) => <TlItem key={i} item={item} side="right" index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
