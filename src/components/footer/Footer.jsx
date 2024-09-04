import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'

import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <li><a href='#' className='footer_logo'>Harsh Prajapati</a></li>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      {/* <li><a href='#services'>Services</a></li> */}
      <li><a href='#portfolio'>Projects</a></li>
      {/* <li><a href='#testonomials'>Testimonials</a></li> */}
      <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
      <a href="https://github.com/HARSHPRAJAPATI4926" target='_blank'><FaGithub/></a>
      <a href=''><AiFillInstagram/></a>
      <a href='https://linkedin.com/in/harshprajapati4926'><BsLinkedin/></a>
      </div>
      <div className='footer_copyright'>
        <small>Harsh Prajapati,All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer