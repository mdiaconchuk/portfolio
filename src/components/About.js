import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Contact from './Contact'

function About() {
  return (
    <div>
      {/* INTRO */}
      <div class="text-white py-5 w-100 text-dark bg-opacity-100">
        <div id="about" class="bggris w-100 py-5">

          {/* SECCIÓN ABOUT */}
          <p class="fs-2 text-decoration-underline text-info">Sobre mí</p>

          <div class="px-3 py-5">
                  Me apasiona viajar, escuchar música y aprender nuevas herramientas para mejorar mi trabajo. <br/> Actualmente me especializo en HMTL5, CSS3, React, Git y GitHub, pero siempre sigo aprendiendo. <br />
            <span>Aquí te contaré un poco sobre mi persona y mis proyectos. ¡No dudes en contactarme si lo necesitas!</span>
          </div>

          <br/><br/><br/>
          <div class="container text-center m-auto px-5">
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
        <br/><br/><br/>
      </div>
    </div>
  )
}

export default About