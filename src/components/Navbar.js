import React from 'react'
import About from './About'
import Projects from './Projects'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-body-secondary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src="./images/md1.png" height="50" width="100" alt="Nombre" class="position-absolute translate-middle top-50 start-50 d-lg-none float-center"/>
                    <div class="collapse navbar-collapse px-5 py-3 fs-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav container">
                            <NavLink to="/projects" activeClassName="active" className="nav-link" aria-current="page">Projects</NavLink>
                            <NavLink to="/about" activeClassName="active" className="nav-link" aria-current="page">About me</NavLink>
                            <NavLink to="/contact" activeClassName="active" className="nav-link" aria-current="page">Contact</NavLink>

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
                                        <a class="nav-link" href="/contact"><i class="fa-solid fa-envelope"></i></a>
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