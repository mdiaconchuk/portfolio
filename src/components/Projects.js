import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div id="projects" class="bggris">
      {/* titulo */}
      <br />
      <p class="fs-2 text-decoration-underline text-info m-auto">Mis proyectos</p>

      <a href="./assets/docs/Matias Diaconchuk - CV.pdf" download="Matias Diaconchuk - CV.pdf">
        <button type="button" class="btn btn-outline-light px-5 my-5 rounded-pill shadow shadow-lg">Descargar CV</button>
      </a>

      {/* CARROUSEL */}
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner m-auto w-75 rounded">
          <div class="carousel-item active img-fluid">
            <img src="./assets/images/Perretes.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block rounded bg-dark rounded-5">
              <h5>Perretes Ecommerce</h5>
              <p>Demostración simple de un Ecommerce básico, segundo proyecto entregable.</p>
            </div>
          </div>

          <div class="carousel-item img-fluid rounded">
            <img src="./assets/images/WeatherChannel.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block rounded bg-dark">
              <h5>Weather Channel</h5>
              <p>Proyecto básico, se hace consumo de una API para demostrar el clima de la zona a elección.</p>
            </div>
          </div>

          <div class="carousel-item img-fluid rounded">
            <img src="./assets/images/samplework.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block rounded bg-dark">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* CARROUSEL */}
    </div>
  )
}

export default Home