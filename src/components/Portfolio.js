import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Navbar from './Navbar'

function Portfolio() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Portfolio