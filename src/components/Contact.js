import React, { useRef } from 'react'
import Navbar from './Navbar'
import emailjs from 'emailjs-com'
import { useState } from 'react'

function Contact() {
  const [buttonText, setButtonText] = useState('Submit');

  function enviarMail(e) {
    const form = document.getElementById('formContact')
    let nombre = document.getElementsByName('user_name')
    let mail = document.getElementsByName('user_mail')
    let correo = document.getElementsByName('message')
    let submit = document.getElementById('submitButton')

    try {
      e.preventDefault();
      emailjs.sendForm('service_2wsxgmb', 'template_q4hwmh9', form, 'oZL4atEcfGgQey3n5');
      setButtonText('Done');
      submit.className= "btn btn-success px-5 text-white rounded-pill shadow-lg";

    }
    catch(err) {
      alert(err)
   }
  }

  return (
    <div>
      <Navbar />
      <div class="container border border-1 rounded py-5 my-3 bgtext bgwave shadow-lg h-75">
        <p class="fs-4"><i class="text-danger fa-regular fa-envelope"></i> <span class="bg-body-secondary rounded mx-1">You can contact me freely at </span> <span class="bg-danger-subtle rounded text-danger">mdiaconchuk@gmail.com</span></p>
        <img class="w-25 my-2" src="./assets/images/Gmail.png" />

        {/*  INTRODUCCIÓN ARRIBA */}

        <form id="formContact" onSubmit={enviarMail}>
          <div class="mb-3">
            <input type="text" class="bg-body-secondary form-control w-75 m-auto" name="user_name" placeholder="Your name..." required/>
          </div>
          <div class="mb-3">
            <input type="email" class="bg-body-secondary form-control w-75 m-auto" name="user_mail" placeholder="Your mail..." required/>
          </div>
          <div class="mb-3">
            <textarea class="form-control w-75 m-auto bg-body-secondary" name="message" rows="3" placeholder='Your message...' required></textarea>
          </div>
          {/* FORMULARIO */}

          <button type="submit" value="Send" id="submitButton" className={ 'btn btn-info text-white px-5 rounded-pill shadow shadow-lg'}>{buttonText}</button>

          {/*  SUBMIT BUTTON */}
        </form>
      </div>
    </div>
  )
}

export default Contact