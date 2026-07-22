import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../animations'

const projects = [
  {
    icon: 'bx bx-wrench',
    category: 'Multi-Role Workflow',
    title: 'Service Center Management App',
    excerpt: 'Complex role-based Flutter app supporting Technicians, Sub-Technicians, Delivery Partners, Pickup Personnel, and Telecallers in one platform.',
    description: 'Architected a comprehensive service center management system with a complete end-to-end service lifecycle: Pickup → Assignment → Repair → Delivery.',
    features: [
      'Multi-role architecture: Technician, Sub-Technician, Delivery Partner, Pickup Personnel, Telecaller',
      'Complete service lifecycle — Pickup → Assignment → Repair → Delivery',
      'Dynamic role-based landing UI with permission-controlled feature access',
      'Status-driven workflow management (Cancelled, In Progress, Completed)',
      'Firebase FCM push notifications with custom alert sounds',
      'Date-based filtering (daily, monthly, yearly) for service history',
      'Real-time data synchronization across all roles',
    ],
    tags: ['Flutter', 'Bloc', 'FCM', 'Role-Based', 'Workflow'],
  },
  {
    icon: 'bx bx-store-alt',
    category: 'Ecommerce + Home Service',
    title: 'Hybrid Commerce & Service App',
    excerpt: 'Dual-platform combining product purchasing and home service booking with Razorpay & Stripe payment gateways.',
    description: 'Built a dual-purpose platform that allows users to both purchase products and book home services with a complete cart and checkout flow.',
    features: [
      'Hybrid platform: product purchasing + home service booking',
      'Complete cart, checkout, and payment flow',
      'Razorpay and Stripe integration with success, failure, and retry states',
      'REST API integration for dynamic product/service listings',
      'Real-time inventory updates',
      'Cross-platform (Android & iOS)',
    ],
    tags: ['Flutter', 'Razorpay', 'Stripe', 'REST API', 'Bloc'],
  },
  {
    icon: 'bx bx-building-house',
    category: 'Real Estate',
    title: 'Real Estate Customer App',
    excerpt: 'Customer-facing app enabling maintenance booking, modification requests, and payment history tracking.',
    description: 'Developed a property management companion app for real estate customers with structured maintenance booking workflows.',
    features: [
      'Maintenance booking and modification request workflows',
      'Structured customer interaction flows',
      'Payment history tracking for financial transparency',
      'Workflow-driven UX for property management operations',
    ],
    tags: ['Flutter', 'Bloc', 'REST API', 'Android', 'iOS'],
  },
  {
    icon: 'bx bx-food-menu',
    category: 'Food Delivery',
    title: 'Food Delivery Applications',
    excerpt: 'Multiple food ordering apps covering the complete order lifecycle with real-time push notifications.',
    description: 'Developed multiple food ordering applications covering the full order lifecycle from placement to delivery.',
    features: [
      'Complete order lifecycle: placement → preparation → delivery',
      'Firebase FCM for real-time order status push notifications',
      'Optimized UI performance on Android and iOS',
      'Smooth and responsive cross-platform experience',
    ],
    tags: ['Flutter', 'FCM', 'Firebase', 'Android', 'iOS'],
  },
  {
    icon: 'bx bx-purchase-tag-alt',
    category: 'Deals & Services',
    title: 'Deals & Service Platform',
    excerpt: 'Deal discovery and service workflow apps with advanced filtering, dynamic listings, and search.',
    description: 'Built feature-rich applications focused on deal discovery and service management.',
    features: [
      'Deal discovery with advanced filtering and search',
      'Dynamic service listing with real-time updates',
      'User interaction: search, filter, and browse',
      'Service workflow management',
      'Improved discoverability through UX design',
    ],
    tags: ['Flutter', 'Bloc', 'REST API', 'Android', 'iOS'],
  },
]

// ── 3-D Tilt Card ──────────────────────────────────
function TiltCard({ children, onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]),  { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]),  { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width  - 0.5)
    y.set((e.clientY - rect.top)  / rect.height - 0.5)
  }

  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <div className="tilt-wrap" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={onClick}>
      <motion.div
        className="project-card"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function Work() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="section-title">Key <span>Projects</span></h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((p, i) => (
            <motion.div key={i} variants={staggerItem}>
              <TiltCard onClick={() => setActive(i)}>
                <div className="project-icon"><i className={p.icon} /></div>
                <div className="project-category">{p.category}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-excerpt">{p.excerpt}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="project-hint"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Click any card for full project details
        </motion.p>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setActive(null) }}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{ opacity: 0, scale: 0.92,   y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            >
              <button className="modal-close" onClick={() => setActive(null)}>
                <i className="bx bx-x" />
              </button>
              <div className="modal-icon"><i className={projects[active].icon} /></div>
              <div className="modal-category">{projects[active].category}</div>
              <h2 className="modal-title">{projects[active].title}</h2>
              <p className="modal-desc">{projects[active].description}</p>
              <ul className="modal-features">
                {projects[active].features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="modal-tags">
                {projects[active].tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
