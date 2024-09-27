import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <div class="container py-4">
        <h1 class="text-center mb-1">CONTACT</h1>
        <p class="text-center"><small>Fan? Drop a note!</small></p>
        <div class="row">
          <div>
            <div class="address-line">
              <i class="icon fa fa-map-marker"></i>
              Chicago, Us
            </div>
            <div class="address-line">
              <i class="icon fa fa-phone"></i>
              Phone: +00 1545665465
            </div>
            <div class="address-line">
              <i class="icon fa fa-envelope"></i>
              Email: mail@gmail.com
            </div>
          </div>
          <div>
            <form action="">
              <div class="d-flex">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="message" placeholder="Message" />
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
