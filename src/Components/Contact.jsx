import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideLeft, slideRight, staggerContainer, staggerItem, viewport } from '../animations'

function Contact() {
  const [name,    setName]    = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const link = `mailto:mitilan02@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
    window.location.href = link
  }

  const details = [
    { icon: 'bx-envelope',  text: 'mitilan02@gmail.com',                                        href: 'mailto:mitilan02@gmail.com'                          },
    { icon: 'bx-phone',     text: '+91 8220617220',                                             href: 'tel:+918220617220'                                   },
    { icon: 'bx-map',       text: 'Tamil Nadu, India',                                          href: null                                                  },
    { icon: 'bxl-github',   text: 'github.com/Mitilan02',                                       href: 'https://github.com/Mitilan02'                        },
    { icon: 'bxl-linkedin', text: 'linkedin.com/in/mitilan-depak',                              href: 'https://www.linkedin.com/in/mitilan-depak-063962239/' },
  ]

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="contact-inner">
          {/* Info */}
          <motion.div
            className="contact-info"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3>Let's work together</h3>
            <p>
              I'm open to full-time opportunities, freelance projects, and
              collaborations. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <motion.div
              className="contact-detail-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {details.map((d, i) => (
                <motion.a
                  key={i}
                  className="contact-detail"
                  href={d.href || undefined}
                  target={d.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  variants={staggerItem}
                  whileHover={{ x: 6 }}
                  style={{ cursor: d.href ? 'pointer' : 'default' }}
                >
                  <i className={`bx ${d.icon}`} />
                  <span>{d.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <form className="contact-form neo-card" onSubmit={handleSubmit}>
              <motion.div className="form-group" variants={staggerItem}>
                <label htmlFor="c-name">Your Name</label>
                <input
                  id="c-name"
                  className="form-control"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div className="form-group" variants={staggerItem}>
                <label htmlFor="c-msg">Message</label>
                <textarea
                  id="c-msg"
                  className="form-control textarea"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: 'flex-end' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
