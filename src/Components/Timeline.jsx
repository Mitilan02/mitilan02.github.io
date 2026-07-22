import { motion } from 'framer-motion'
import { slideLeft, slideRight, staggerContainer, staggerItem, viewport } from '../animations'

const experience = [
  {
    date: 'Dec 2024 – Present',
    title: 'Flutter Developer',
    company: 'Smarther Technologies',
    points: [
      'Developed and maintained 6+ production Flutter apps across ecommerce, real estate, food delivery, and service platforms.',
      'Implemented Bloc state management for scalable, testable app architecture.',
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
      'Completed a web development internship building front-end projects.',
      'Gained hands-on experience with HTML, CSS, and JavaScript.',
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
]

function TlItem({ item, direction, index }) {
  const variants = direction === 'left' ? slideLeft : slideRight
  return (
    <motion.div
      className="tl-item"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.1 }}
    >
      <div className="tl-dot" />
      <div className="tl-card">
        <div className="tl-date">{item.date}</div>
        <div className="tl-title">{item.title}</div>
        <div className="tl-sub">{item.company || item.institution}</div>
        <div className="tl-desc">
          {item.points ? (
            <ul>{item.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
          ) : (
            item.desc
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Timeline() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="section-title">Experience &amp; <span>Education</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="timeline-grid">
          <div className="timeline-col">
            <motion.h3 variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <i className="bx bxs-briefcase" /> Work Experience
            </motion.h3>
            {experience.map((item, i) => (
              <TlItem key={i} item={item} direction="left" index={i} />
            ))}
          </div>

          <div className="timeline-col">
            <motion.h3 variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
              <i className="bx bxs-graduation" /> Education
            </motion.h3>
            {education.map((item, i) => (
              <TlItem key={i} item={item} direction="right" index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
