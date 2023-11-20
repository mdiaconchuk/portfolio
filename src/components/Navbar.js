import React from 'react'
import About from './About'
import Projects from './Projects'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-body-secondary">
                <div class="container-fluid h-25">
                <a class="navbar-brand" href="/home">
      <img src="./images/md.png" alt="MD" width="50" height="40" class="d-inline-block align-text-top"/>
    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse position-relative px-3 py-3 justify-content-center fs-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/projects">Projects</a>
                            <a class="nav-link" href="/about">About</a>
                            <a class="nav-link" href="/contact">Contact</a>
                        </div>
                        <div>
                        </div>
                    </div>

                    <div class="navbar-collapse justify-content-end text-info">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/in/diaconchukm/"><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.instagram.com/matidiaconchuk/"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar