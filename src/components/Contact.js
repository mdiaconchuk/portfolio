import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="container border border-1 rounded py-5 my-3 bgtext bgwave shadow-lg h-75">
        <p class="fs-4"><i class="text-danger fa-regular fa-envelope"></i> <span class="fw-bold bg-body-secondary rounded mx-1">You can contact me freely at </span> <span class="bg-danger-subtle rounded text-danger">mdiaconchuk@gmail.com</span></p>
        <img src="../images/Gmail.png" class="my-3 h-25 w-25" />

        {/*  INTRODUCCIÓN ARRIBA */}

        <div class="mb-3">
          <input type="email" class="bg-body-tertiary form-control w-75 m-auto" id="exampleFormControlInput1" placeholder="Your name..."/>
        </div>
        <div class="mb-3">
          <input type="email" class="bg-body-tertiary form-control w-75 m-auto" id="exampleFormControlInput1" placeholder="Your mail..."/>
        </div>
        <div class="mb-3">
          <textarea class="form-control w-75 m-auto bg-body-tertiary" id="exampleFormControlTextarea1" rows="3" placeholder='Your message...'></textarea>
        </div>
        <button type="button" class="btn btn-success px-5 rounded-pill">Submit</button>
      </div>
    </div>
  )
}

export default Contact