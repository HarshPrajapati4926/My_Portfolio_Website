import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In contact</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container"> 
      <div className="contact_options">
        <article className="contact_option">
        <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>harshprajpati4926@gmail.com</h5>
          <a href="mailto:harshprajapati4926@gmail.com">Send a Mail</a>
        </article>
        <article className="contact_option">
        <RiMessengerLine className='contact_option-icon'/>
          <h4>Message</h4>
          <h5>harsh prajapati</h5>
          <a href="">Send a Message</a>
        </article>
        <article className="contact_option">
        <FaWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>9336764126</h5>
          <a href="https://api.whatsapp.com/send?phone+919336764126">Send a Message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact