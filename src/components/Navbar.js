import React from 'react'
import About from './About'
import Projects from './Projects'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-body-secondary">
                <div class="container-fluid">
                    <i class="navbar-brand m-auto ps-5 d-lg-none float-center fa-solid fa-code"></i>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                    <div class="collapse navbar-collapse px-5 py-3 fs-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav container">      
                            <a href="#about" class="nav-link" aria-current="page">Sobre mí</a>
                            <a href="#projects" class="nav-link" aria-current="page">Proyectos</a>
                            <a href="#contact" class="nav-link" aria-current="page">Contáctame</a>

                            <div class="h5 d-lg-none" id="redes">
                                <ul class="navbar-collapse nav justify-content-center">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/diaconchukm/" target='blank'><i class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://www.instagram.com/matidiaconchuk/" target='blank'><i class="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact"><i class="fa-solid fa-envelope"></i></a>
                                    </li>
                                </ul>
                                <div></div>
                            </div>

                                
                            <div class="h5 collapse navbar-collapse" id="redes2">
                                <ul class="navbar-collapse nav justify-content-end">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/diaconchukm/" target='blank'><i class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://www.instagram.com/matidiaconchuk/" target='blank'><i class="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#contact" class="nav-link"><i class="fa-solid fa-envelope"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar