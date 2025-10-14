import React from 'react'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Hero from './Hero'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact />

    </div>
  )
}

export default Home
