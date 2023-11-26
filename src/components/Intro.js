import React from 'react'

function Intro() {
    return (
        <div id="intro">
            <div class="text-white py-5 w-100 text-dark bg-opacity-100 fw-bold">
                <p class="fs-1 my-5">¡Hola! <span class="text-decoration-underline">soy Matías Diaconchuk.</span></p><br /><br /><br />

                <p class="fs-3">Un desarrollador Front-End de <span class="text-info">Argentina</span>,<br /> que disfruta crear aplicaciones web simples y fáciles de usar.</p>

                <div class="container text-center"> <br /><br /><br />
                    <div class="row p-auto py-5">
                        <div class="col">
                            <a href="#projects" class="nav-link"><button type="button" class="btn btn-outline-light p-auto m-auto">Proyectos</button></a>
                        </div>
                        <div class="col fs-5">
                            o...
                        </div>
                        <div class="col">
                            <a href="#contact" class="nav-link"><button type="button" class="btn btn-outline-light p-auto m-auto">Contáctame</button></a>
                            <br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro