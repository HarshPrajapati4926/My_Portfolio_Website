import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="" className="src" />
        </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Certification</h5>
              <smal>5+ certification</smal>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Projects</h5>
              <smal>10+ Completed</smal>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Achievements</h5>
              <smal>7+ achieved</smal>
            </article>
          </div>
          <p>
          Welcome
My Name is Harsh Prajapati.
I am a third-year student pursuing my Bachelor's degree in Computer Science, with a passion for technology and innovation. Currently enrolled in a B.Tech program, my academic journey has equipped me with a strong foundation in various aspects of computer science, including programming, algorithms, and data structures.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About