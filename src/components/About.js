import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Contact from './Contact'

function About() {
  return (
    <div>
      <Navbar />
      {/* INTRO */}
      <div class="text-white py-5 w-100 text-dark bg-opacity-100 fw-bold">
        <p class="fs-1 my-5">¡Hello! <span class="text-decoration-underline">i'm Matías Diaconchuk.</span></p><br /><br /><br />

        <p class="fs-3">I am a front-end developer from <span class="text-info">Argentina</span>,<br /> and I enjoy creating simple and easy-to-use web applications.</p>

        <div class="container text-center"> <br /><br /><br />
          <div class="row p-auto py-5">
            <div class="col">
              <Link to="/portfolio" class="nav-link"><button type="button" class="btn btn-light p-2">See my projects</button></Link>
            </div>
            <div class="col fs-5">
              or...
            </div>
            <div class="col">
              <Link to="/portfolio/contact" class="nav-link"><button type="button" class="btn btn-light mx-2 p-2">Contact me</button></Link>
            </div>
          </div>
          {/* FIN INTRO */}

        </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div id="backgroundGris" class="bggris w-100 py-5">

          {/* SECCIÓN ABOUT */}
          <p class="fs-2 text-decoration-underline text-info">About</p>

          <div class="px-3 py-5">
            I also like to travel, listening to music and constantly learn about new tools to improve my work! I currently specialize in HTML5, CSS3, React, Git and GitHub. <br />
            <span class="fw-bold">Here I will show you information about me, about my projects and how to contact me. Don't hesitate to contact me if you need it! Let's start.</span>
          </div>

          <div class="container text-center px-5">
            <div class="row gy-3 img-fluid">
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
        </div>
        {/* FIN SECCION ABOUT */}
      </div>
    </div>
  )
}

export default About