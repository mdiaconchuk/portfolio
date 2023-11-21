import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="container border border-2 rounded border-success py-5 my-5">
        <p class="fs-4"><i class="text-danger fa-regular fa-envelope"></i> You can contact me freely at <span class="bg-danger-subtle rounded text-danger">mdiaconchuk@gmail.com</span>.</p>
        <img src="./images/Gmail.png" class="my-3 h-25 w-25" />
      </div>
    </div>
  )
}

export default Contact