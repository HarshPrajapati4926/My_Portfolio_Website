import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/harshprajapati4926" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/HARSHPRAJAPATI4926" target='_blank'><FaGithub/></a>
    <a href=''><BsFacebook/></a>
        
    </div>
  )
}

export default HeaderSocial