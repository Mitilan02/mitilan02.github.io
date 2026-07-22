import { motion } from 'framer-motion'

const blobs = [
  {
    className: 'blob blob-1',
    animate: {
      x: ['0%', '4%', '-3%',  '2%',  '0%'],
      y: ['0%', '-5%', '3%', '-2%',  '0%'],
      scale: [1, 1.08, 0.96, 1.04, 1],
    },
    transition: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    className: 'blob blob-2',
    animate: {
      x: ['0%', '-5%', '3%', '-1%', '0%'],
      y: ['0%',  '4%', '-3%', '2%', '0%'],
      scale: [1, 0.95, 1.06, 0.98, 1],
    },
    transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    className: 'blob blob-3',
    animate: {
      x: ['0%', '3%', '-4%', '1%',  '0%'],
      y: ['0%', '-3%', '5%', '-2%', '0%'],
      scale: [1, 1.04, 0.93, 1.07, 1],
    },
    transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
  },
]

function Background() {
  return (
    <div className="bg-scene" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={b.className}
          animate={b.animate}
          transition={b.transition}
        />
      ))}
      <div className="bg-grid" />
    </div>
  )
}

export default Background
