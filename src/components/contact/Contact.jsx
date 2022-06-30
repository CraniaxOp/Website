import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fzjb73m', 'template_fl7zr7g', form.current, 'NVXUKKwDLXruOhOlh')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get Touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>portfolioreact45@gmail.com</h5>
          <a href="mailto:portfolioreact45@gmail.com" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>       
          <article className='contact_option'>
          <AiOutlineWhatsApp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 8888888888</h5>
          <a href="https://api.whatsapp.com/send?phone=+8888222211" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>       
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      </section>
  )
}

export default Contact
