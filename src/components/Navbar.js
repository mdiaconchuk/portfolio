import React from 'react'
import About from './About'
import Projects from './Projects'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-body-secondary">
                <div class="container-fluid h-25">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse position-relative px-5 py-3 fs-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" aria-current="page" href="/projects">Projects</a>
                            <a class="nav-link" href="/about">About</a>
                            <a class="nav-link" href="/contact">Contact</a>
                        </div>
                        <div>
                        </div>
                    </div>

                    <div class="h5 navbar-collapse justify-content-end px-5">
                        <ul class="navbar-collapse nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/diaconchukm/"><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.instagram.com/matidiaconchuk/"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact"><i class="fa-solid fa-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar