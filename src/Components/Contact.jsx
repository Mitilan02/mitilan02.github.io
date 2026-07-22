import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideLeft, slideRight, flipUp, staggerContainer, staggerItem, viewport, spotlight } from '../animations'
import { useMagnetic } from '../hooks/useMagnetic'

function MagBtn({ children, type = 'button', onClick }) {
  const { ref, motionStyle, onMouseMove, onMouseLeave } = useMagnetic(0.25)
  return (
    <motion.button
      ref={ref}
      type={type}
      className="btn-primary"
      style={{ ...motionStyle, alignSelf: 'flex-end' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

const details = [
  { icon: 'bx-envelope',  text: 'mitilan02@gmail.com',            href: 'mailto:mitilan02@gmail.com'                          },
  { icon: 'bx-phone',     text: '+91 8220617220',                  href: 'tel:+918220617220'                                   },
  { icon: 'bx-map',       text: 'Tamil Nadu, India',               href: null                                                  },
  { icon: 'bxl-github',   text: 'github.com/Mitilan02',           href: 'https://github.com/Mitilan02'                        },
  { icon: 'bxl-linkedin', text: 'linkedin.com/in/mitilan-depak',  href: 'https://www.linkedin.com/in/mitilan-depak-063962239/' },
]

export default function Contact() {
  const [name,    setName]    = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:mitilan02@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact">
      <div className="container">
        <motion.div className="section-header"
          variants={flipUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="contact-inner">
          {/* ── Info ── */}
          <motion.div className="contact-info"
            variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <h3>Let's work together</h3>
            <p>Open to full-time opportunities, freelance projects, and collaborations.</p>

            <motion.div className="contact-detail-list"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
              {details.map((d, i) => (
                <motion.a
                  key={i}
                  className="contact-detail glow-card"
                  href={d.href || undefined}
                  target={d.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{ cursor: d.href ? 'pointer' : 'default' }}
                  onMouseMove={spotlight}
                  variants={flipUp}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <i className={`bx ${d.icon}`} />
                  <span>{d.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
            <form
              className="contact-form neo-card glow-card"
              onMouseMove={spotlight}
              onSubmit={handleSubmit}
            >
              <motion.div className="form-group" variants={flipUp}>
                <label htmlFor="c-name">Your Name</label>
                <input id="c-name" className="form-control" placeholder="John Doe"
                  value={name} onChange={(e) => setName(e.target.value)} required />
              </motion.div>

              <motion.div className="form-group" variants={flipUp}>
                <label htmlFor="c-msg">Message</label>
                <textarea id="c-msg" className="form-control textarea"
                  placeholder="Write your message..."
                  value={message} onChange={(e) => setMessage(e.target.value)} required />
              </motion.div>

              <MagBtn type="submit" onClick={undefined}>Send Message</MagBtn>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
