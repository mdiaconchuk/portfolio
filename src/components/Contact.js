import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="container border border-1 rounded py-5 my-3 bgtext bgwave shadow-lg h-75">
        <p class="fs-4"><i class="text-danger fa-regular fa-envelope"></i> <span class="bg-body-secondary rounded mx-1">You can contact me freely at </span> <span class="bg-danger-subtle rounded text-danger">mdiaconchuk@gmail.com</span></p>
        <img class="w-25 my-2" src="./assets/images/Gmail.png" />

        {/*  INTRODUCCIÓN ARRIBA */}

        <div class="mb-3">
          <input type="email" class="bg-body-secondary form-control w-75 m-auto" id="exampleFormControlInput1" placeholder="Your name..." />
        </div>
        <div class="mb-3">
          <input type="email" class="bg-body-secondary form-control w-75 m-auto" id="exampleFormControlInput1" placeholder="Your mail..." />
        </div>
        <div class="mb-3">
          <textarea class="form-control w-75 m-auto bg-body-secondary" id="exampleFormControlTextarea1" rows="3" placeholder='Your message...'></textarea>
        </div>
        {/* FORMULARIO */}

        <button type="button" class="btn btn-success px-5 rounded-pill">Submit</button>
        {/*  SUBMIT BUTTON */}
      </div>
    </div>
  )
}

export default Contact