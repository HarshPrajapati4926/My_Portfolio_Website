import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='portfolio portfolio_container'>
      <article className='portfolio_item'>
        {/* <h1>Weather App</h1> */}
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='IMG1'></img>
          </div>
          {/* <h3>Using weather API</h3> */}
          <div className="portfolio_item-cta">
          <a href='https://github.com/HarshPrajapati4926/Weather_App' className='btn'target='_blank'>GitHub</a>
          <a href='https://harshprajapati4926.github.io/Weather_App/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          {/* <h1>Currency Convertor</h1> */}
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='IMG1'></img>
          </div>
          {/* <h3>This is a Currencey Convertor</h3> */}
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'target='_blank'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          {/* <h1>Ecommerce Website</h1> */}
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='IMG1'></img>
          </div>
          <h3>E-commerce </h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/HarshPrajapati4926/Ecommerce_Website' className='btn'target='_blank'>GitHub</a>
          <a href='https://harshprajapati4926.github.io/Ecommerce_Website/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='IMG1'></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'target='_blank'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt='IMG1'></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'target='_blank'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt='IMG1'></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'target='_blank'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

       
      </div>
      
    </section>
  )
}

export default Portfolio