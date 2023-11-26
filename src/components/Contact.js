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
      submit.className = "btn btn-outline-success px-5 rounded-pill shadow-lg";

    }
    catch (err) {
      alert(err)
    }
  }

  return (
    <div id="contact">
      <div class="w-100 py-5 bgtext h-50 my-5 bggris">
        <p class="fs-2 text-decoration-underline text-info my-5 m-auto">Contacto</p>
        <p class="fs-4 mx-4 "><span class="rounded mx-1 text-light">¡Siéntete libre de contactarme en </span> <span class="bg-danger-subtle rounded-3 text-danger p-1">mdiaconchuk@gmail.com</span><span class="text-white">!</span></p>
        <img class="m-auto my-2" src="./assets/images/Gmail.png" />
        {/*  INTRODUCCIÓN ARRIBA */}

        <form id="formContact" onSubmit={enviarMail}>
          <div class="mb-3">
            <input type="text" class="bg-body-secondary form-control w-75 m-auto d-flex" name="user_name" placeholder="Tu nombre..." required />
          </div>
          <div class="mb-3">
            <input type="email" class="bg-body-secondary form-control w-75 m-auto" name="user_mail" placeholder="Tu mail..." required />
          </div>
          <div class="mb-3">
            <textarea class="form-control w-75 m-auto bg-body-secondary" name="message" rows="3" placeholder='Tu mensaje...' required></textarea>
          </div>
          {/* FORMULARIO */}
          k
          <button type="submit" value="Send" id="submitButton" className={'btn btn-outline-light px-5 rounded-pill shadow shadow-lg'}>{buttonText}</button>

          {/*  SUBMIT BUTTON */}
        </form>
      </div>
    </div>
  )
}

export default Contact