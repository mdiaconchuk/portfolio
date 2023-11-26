import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Navbar from './Navbar'
import ToStart from './ToStart'
import Intro from './Intro'
import Watermark from './Watermark'

function Portfolio() {
  return (
    <div>
        <Navbar/>
        
        <ToStart/>
        <Intro/>
        <div class="bggris">
        <About/>
        <Projects/>
        <Contact/>
        <Watermark/>
        </div> 
    </div>
  )
}

export default Portfolio