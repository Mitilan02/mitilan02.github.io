// Shared Framer Motion animation variants + utilities
const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const slideLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const slideRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

// ── Flip variants (3-D entrance animations) ──────────────
// Flip up around X-axis (like pages of a book falling open)
export const flipUp = {
  hidden:  { opacity: 0, rotateX: -80, y: 30 },
  visible: { opacity: 1, rotateX:   0, y:  0,
    transition: { duration: 0.7, ease } },
}

// Flip in from left (rotateY: 90 → 0)
export const flipLeft = {
  hidden:  { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY:  0,
    transition: { duration: 0.65, ease } },
}

// Flip in from right (rotateY: -90 → 0)
export const flipRight = {
  hidden:  { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY:   0,
    transition: { duration: 0.65, ease } },
}

// Container that staggers its children
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

// Generic child item for stagger containers
export const staggerItem = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

// Viewport settings reused everywhere
export const viewport = { once: true, amount: 0.15 }

// ── Spotlight card — zero-render-cost handler ─────────────
// Call onMouseMove={spotlight} on any .glow-card element.
// CSS ::before reads --sx / --sy to paint the radial gradient.
export const spotlight = (e) => {
  const el   = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--sx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--sy', `${e.clientY - rect.top}px`)
}
