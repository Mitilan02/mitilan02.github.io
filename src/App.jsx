import { useEffect } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useSpring } from 'framer-motion'
import Background from './Components/Background'
import About    from './Components/About'
import Contact  from './Components/Contact'
import Footer   from './Components/Footer'
import Navbar   from './Components/Navbar'
import Skills   from './Components/Skills'
import Timeline from './Components/Timeline'
import Work     from './Components/Work'

function App() {
  // ── Lenis smooth scroll ──────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // ── Scroll progress bar ──────────────────
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      {/* thin progress bar pinned to top */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Background />
      <Navbar />
      <About />
      <Skills />
      <Timeline />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
