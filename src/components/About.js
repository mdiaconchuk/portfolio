import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <Navbar />
      <p class="fs-1 my-5">¡Hello!, im Matías Diaconchuk.</p>

      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <img src="./assets/images/react.png"></img>
          </div>
          <div class="col">
            <img src="./assets/images/git.png"></img>
          </div>
          <div class="col">
            <img src="./assets/images/bootstrap.png"></img>
          </div>
          <div class="col">
            <img src="./assets/images/github.png"></img>
          </div>
          <div class="col">
            <img src="./assets/images/js.png"></img>
          </div>
          <div class="col">
            <img src="./assets/images/html.png"></img>
          </div>
          <div class="col">
            <img src="./assets/images/css.png"></img>
          </div>
        </div>
      </div>

      <p class="px-3">
        I am a front-end developer from Argentina, and I enjoy creating simple and easy-to-use web applications. <br></br>
        I also like to travel, listening to music and constantly learn about new tools to improve my work! I currently specialize in HTML5, CSS3 and React.</p>

      <div class="container text-center">
        <div class="row px-4">
          <div class="col">
            <Link to="/portfolio" class="nav-link"><button type="button" class="btn btn-dark shadow-lg">See my projects</button></Link>
          </div>
          <div class="col">
            <Link to="/portfolio/contact" class="nav-link"><button type="button" class="btn btn-dark mx-2 shadow-lg">Contact me</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About