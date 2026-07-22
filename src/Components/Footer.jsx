import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../animations'

function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} <span>Mitilan Depak</span>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
