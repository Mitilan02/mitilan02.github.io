import { useEffect } from 'react'
import AOS from 'aos'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Timeline from './Components/Timeline'
import Work from './Components/Work'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 })
  }, [])

  return (
    <>
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
