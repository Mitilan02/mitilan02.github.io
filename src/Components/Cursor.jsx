import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* Cursor label text shown while hovering certain targets */
const LABEL_MAP = [
  { sel: 'a[href]',        label: 'Go'    },
  { sel: 'button',         label: 'Click' },
  { sel: '.flip-card',     label: 'Flip'  },
  { sel: '.detail-pill',   label: 'View'  },
  { sel: 'input,textarea', label: 'Type'  },
]

function getLabel(el) {
  for (const { sel, label } of LABEL_MAP) {
    if (el.closest(sel)) return label
  }
  return null
}

export default function Cursor() {
  const [state, setState] = useState({ hovered: false, clicking: false, label: null })

  // Raw cursor position (instant)
  const dotX = useMotionValue(-200)
  const dotY = useMotionValue(-200)

  // Ring lags behind with spring
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22 })
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22 })

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const over = (e) => {
      const label = getLabel(e.target)
      setState({ hovered: !!label, clicking: false, label })
    }

    const down = () => setState((s) => ({ ...s, clicking: true  }))
    const up   = () => setState((s) => ({ ...s, clicking: false }))

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup',   up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup',   up)
    }
  }, [dotX, dotY])

  const { hovered, clicking, label } = state

  return (
    <>
      {/* ── Outer ring ── */}
      <motion.div
        className="cur-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale:  clicking ? 0.65 : hovered ? 1.7 : 1,
          opacity: hovered ? 0.9 : 0.55,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {label && (
          <motion.span
            className="cur-label"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* ── Inner dot ── */}
      <motion.div
        className="cur-dot"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: clicking ? 0.4 : hovered ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}
