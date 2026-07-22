import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Returns motion-value style + event handlers that give an element
 * a magnetic "pull toward cursor" feel on hover.
 *
 * @param {number} strength  0–1 pull factor (default 0.35)
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const x   = useMotionValue(0)
  const y   = useMotionValue(0)
  const sx  = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 })
  const sy  = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 })

  const onMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width  / 2) * strength)
    y.set((e.clientY - rect.top  - rect.height / 2) * strength)
  }

  const onMouseLeave = () => { x.set(0); y.set(0) }

  return {
    ref,
    motionStyle: { x: sx, y: sy },
    onMouseMove,
    onMouseLeave,
  }
}
