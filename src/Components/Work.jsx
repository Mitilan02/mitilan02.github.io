import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../animations'

/* ── Per-project theme palette ─────────────────────────── */
const projects = [
  {
    id: 1,
    color:       '#818cf8',
    colorDim:    'rgba(129,140,248,0.13)',
    colorGlow:   'rgba(129,140,248,0.25)',
    colorBorder: 'rgba(129,140,248,0.5)',
    gradient:    'linear-gradient(135deg,rgba(129,140,248,0.22) 0%,rgba(13,15,26,0.7) 100%)',
    icon:        'bx bx-wrench',
    category:    'Multi-Role Workflow',
    title:       'Service Center Management',
    excerpt:     'Role-based platform for Technicians, Sub-Technicians, Delivery Partners, Pickup Personnel & Telecallers.',
    backPoints:  [
      'End-to-end lifecycle: Pickup → Assignment → Repair → Delivery',
      'Dynamic role-based UI with permission-controlled access',
      'Firebase FCM notifications with custom alert sounds',
      'Date-based reporting (daily, monthly, yearly)',
      'Real-time data sync across all user roles',
    ],
    description: 'Architected a comprehensive service center management system supporting a complete end-to-end service lifecycle. Features dynamic role-based landing UI with controlled feature access, status-driven workflow management (Cancelled, In Progress, Completed), and real-time data synchronization across multiple roles.',
    features: [
      'Supports 5 distinct roles: Technician, Sub-Technician, Delivery Partner, Pickup Personnel, Telecaller',
      'Full service lifecycle — Pickup → Assignment → Repair → Delivery',
      'Dynamic role-based landing UI with permission-controlled feature access',
      'Status-driven workflow management (Cancelled, In Progress, Completed)',
      'Technicians can self-assign or delegate tasks to sub-technicians',
      'Firebase FCM push notifications with custom alert sounds',
      'Date-based filtering (daily, monthly, yearly) for service history & reporting',
      'Real-time data synchronization across all roles',
    ],
    tags: ['Flutter', 'Bloc', 'FCM', 'Role-Based', 'Workflow'],
  },
  {
    id: 2,
    color:       '#f472b6',
    colorDim:    'rgba(244,114,182,0.13)',
    colorGlow:   'rgba(244,114,182,0.25)',
    colorBorder: 'rgba(244,114,182,0.5)',
    gradient:    'linear-gradient(135deg,rgba(244,114,182,0.22) 0%,rgba(13,15,26,0.7) 100%)',
    icon:        'bx bx-store-alt',
    category:    'Ecommerce + Home Service',
    title:       'Hybrid Commerce & Service',
    excerpt:     'Dual-platform combining product purchasing and home service booking with Razorpay & Stripe.',
    backPoints:  [
      'Unified product purchasing + home service booking',
      'Complete cart, checkout & payment flow',
      'Razorpay & Stripe with success, failure, retry states',
      'REST API — real-time inventory & listings',
    ],
    description: 'Built a dual-purpose platform that lets users purchase products and book home services in a single app. Features a complete cart and checkout flow with Razorpay and Stripe integration, real-time inventory updates via REST APIs, and a seamless cross-platform UX.',
    features: [
      'Hybrid platform: product purchasing + home service booking in one app',
      'Complete cart, checkout, and secure payment flow',
      'Razorpay and Stripe with success, failure, and retry coverage',
      'REST API integration for dynamic product/service listings',
      'Real-time inventory updates and stock management',
      'Cross-platform delivery on Android & iOS',
    ],
    tags: ['Flutter', 'Razorpay', 'Stripe', 'REST API', 'Bloc'],
  },
  {
    id: 3,
    color:       '#34d399',
    colorDim:    'rgba(52,211,153,0.13)',
    colorGlow:   'rgba(52,211,153,0.25)',
    colorBorder: 'rgba(52,211,153,0.5)',
    gradient:    'linear-gradient(135deg,rgba(52,211,153,0.22) 0%,rgba(13,15,26,0.7) 100%)',
    icon:        'bx bx-building-house',
    category:    'Real Estate',
    title:       'Real Estate Customer App',
    excerpt:     'Property management app enabling maintenance booking, modification requests & payment history.',
    backPoints:  [
      'Maintenance booking & modification request workflows',
      'Structured customer-to-management interaction flows',
      'Full payment history tracking for transparency',
      'Workflow-driven UX for property operations',
    ],
    description: 'Developed a property management companion app enabling customers to book maintenance, raise modification requests, and track payment history. Designed workflow-driven UX to streamline customer service and property management operations.',
    features: [
      'Maintenance booking with structured request workflows',
      'Modification request handling with approval flow',
      'Payment history tracking for financial transparency',
      'Customer-to-management interaction workflows',
      'Workflow-driven UX for property management operations',
    ],
    tags: ['Flutter', 'Bloc', 'REST API', 'Android', 'iOS'],
  },
  {
    id: 4,
    color:       '#fb923c',
    colorDim:    'rgba(251,146,60,0.13)',
    colorGlow:   'rgba(251,146,60,0.25)',
    colorBorder: 'rgba(251,146,60,0.5)',
    gradient:    'linear-gradient(135deg,rgba(251,146,60,0.22) 0%,rgba(13,15,26,0.7) 100%)',
    icon:        'bx bx-food-menu',
    category:    'Food Delivery',
    title:       'Food Delivery Applications',
    excerpt:     'Multiple food ordering apps handling full order lifecycle with real-time FCM push notifications.',
    backPoints:  [
      'Full lifecycle: order placement → preparation → delivery',
      'Firebase FCM for real-time order status updates',
      'Optimized UI performance on Android & iOS',
      'Smooth, responsive cross-platform experience',
    ],
    description: 'Developed multiple food ordering applications covering the full order lifecycle from placement to delivery. Integrated Firebase FCM for real-time status updates, optimized UI performance, and ensured reliable data flow between customer, restaurant, and delivery partner.',
    features: [
      'Complete order lifecycle: placement → preparation → delivery',
      'Firebase FCM push notifications for real-time order status',
      'Optimized rendering and scroll performance on Android & iOS',
      'Smooth and responsive cross-platform user experience',
      'Order tracking and status management flows',
    ],
    tags: ['Flutter', 'FCM', 'Firebase', 'Android', 'iOS'],
  },
  {
    id: 5,
    color:       '#38bdf8',
    colorDim:    'rgba(56,189,248,0.13)',
    colorGlow:   'rgba(56,189,248,0.25)',
    colorBorder: 'rgba(56,189,248,0.5)',
    gradient:    'linear-gradient(135deg,rgba(56,189,248,0.22) 0%,rgba(13,15,26,0.7) 100%)',
    icon:        'bx bx-purchase-tag-alt',
    category:    'Deals & Services',
    title:       'Deals & Service Platform',
    excerpt:     'Deal discovery & service workflow apps with advanced filtering, dynamic listings & search.',
    backPoints:  [
      'Deal discovery with advanced filters & live search',
      'Dynamic service listing with real-time updates',
      'User interactions: search, filter, browse & book',
      'Service workflow management & tracking',
    ],
    description: 'Built feature-rich applications focused on deal discovery and service management. Implemented advanced filtering, search, and dynamic listing features to improve discoverability. Designed user interaction patterns that reduce friction in finding and booking deals and services.',
    features: [
      'Deal discovery with advanced filtering and live search',
      'Dynamic service listings with real-time updates',
      'User interactions: search, filter, browse, and book',
      'Service workflow management and status tracking',
      'Improved discoverability through UX-focused design',
    ],
    tags: ['Flutter', 'Bloc', 'REST API', 'Android', 'iOS'],
  },
]

/* ── Individual flip card ──────────────────────────────── */
function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false)

  const cssVars = {
    '--c':       project.color,
    '--c-dim':   project.colorDim,
    '--c-glow':  project.colorGlow,
    '--c-grad':  project.gradient,
    '--c-bdr':   project.colorBorder,
  }

  return (
    <motion.div
      variants={staggerItem}
      className={`flip-card${flipped ? ' is-flipped' : ''}`}
      style={cssVars}
      /* desktop: hover flips; mobile: click toggles */
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">

        {/* ── FRONT ── */}
        <div className="flip-face flip-front">
          {/* rotate hint */}
          <span className="flip-hint" aria-hidden="true">
            <i className="bx bx-rotate-right" />
          </span>

          {/* numbered badge */}
          <span className="flip-num">0{project.id}</span>

          <div className="flip-icon">
            <i className={project.icon} />
          </div>
          <div className="flip-category">{project.category}</div>
          <div className="flip-title">{project.title}</div>
          <p className="flip-excerpt">{project.excerpt}</p>

          <div className="flip-tags">
            {project.tags.slice(0, 3).map((t) => (
              <span
                className="tag"
                key={t}
                style={{ background: project.colorDim, borderColor: project.colorBorder, color: project.color }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="flip-face flip-back">
          {/* top gradient band */}
          <div className="flip-back-band" />

          <div className="flip-back-header">
            <div className="flip-icon flip-icon-sm">
              <i className={project.icon} />
            </div>
            <div>
              <div className="flip-category">{project.category}</div>
              <div className="flip-title">{project.title}</div>
            </div>
          </div>

          <ul className="flip-points">
            {project.backPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <div className="flip-tags">
            {project.tags.map((t) => (
              <span
                className="tag"
                key={t}
                style={{ background: project.colorDim, borderColor: project.colorBorder, color: project.color }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Modal ─────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        className="modal-box"
        style={{
          '--c':    project.color,
          '--c-dim': project.colorDim,
          '--c-bdr': project.colorBorder,
          '--c-grad': project.gradient,
        }}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.9,  y: 20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        {/* colour band across top */}
        <div className="modal-band" style={{ background: project.gradient }} />

        <button className="modal-close" onClick={onClose}><i className="bx bx-x" /></button>

        <div className="modal-icon"
          style={{ background: project.colorDim, borderColor: project.colorBorder, color: project.color }}>
          <i className={project.icon} />
        </div>

        <div className="modal-category" style={{ color: project.color }}>{project.category}</div>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-desc">{project.description}</p>

        <ul className="modal-features">
          {project.features.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.07 }}
              style={{ '--c': project.color }}
            >
              {f}
            </motion.li>
          ))}
        </ul>

        <div className="modal-tags">
          {project.tags.map((t) => (
            <span
              className="tag"
              key={t}
              style={{ background: project.colorDim, borderColor: project.colorBorder, color: project.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Section ────────────────────────────────────────────── */
function Work() {
  const [modal, setModal] = useState(null)

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
          {projects.map((p) => (
            <FlipCard key={p.id} project={p} />
          ))}
        </motion.div>

        <motion.div
          className="project-actions-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="project-hint">Hover to flip &nbsp;•&nbsp; Click a project for full details</p>
          <div className="project-detail-btns">
            {projects.map((p) => (
              <motion.button
                key={p.id}
                className="detail-pill"
                style={{ '--c': p.color, '--c-dim': p.colorDim, '--c-bdr': p.colorBorder }}
                onClick={() => setModal(p)}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <i className={p.icon} />
                <span>{p.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Work
