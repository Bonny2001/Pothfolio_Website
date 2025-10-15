import React from 'react'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact />
      <Footer/>

    </div>
  )
}

export default Home
