import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'

const links = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

function MagNavLink({ label, href, onClick }) {
  const { ref, motionStyle, onMouseMove, onMouseLeave } = useMagnetic(0.3)
  return (
    <motion.li>
      <motion.a
        ref={ref}
        href={href}
        onClick={onClick}
        style={motionStyle}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ color: 'var(--accent)', backgroundColor: 'var(--accent-dim)' }}
        className="nav-link-item"
      >
        {label}
      </motion.a>
    </motion.li>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.span
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mitilan<span>.</span>
        </motion.span>

        <motion.ul
          className="nav-links"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
        >
          {links.map((l) => (
            <MagNavLink key={l.label} {...l} />
          ))}
        </motion.ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="mobile-menu open"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1,  y: 0  }}
            exit={{    opacity: 0,  y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
