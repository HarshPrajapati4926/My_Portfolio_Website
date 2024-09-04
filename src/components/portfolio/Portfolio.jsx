import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='portfolio portfolio_container'>



      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <h1>Weather &nbsp;&nbsp;&nbsp;&nbsp; App</h1>
          </div>
          <p className='top_margin'>This App help to check the wheather conditions.</p>
          <p className='bottom_margin'><span class="highlighted-text">Technology used :</span> Javascript, css, html and API  </p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/HarshPrajapati4926/Weather_App" className='btn' target='_blank'>GitHub</a>
            <a href="https://harshprajapati4926.github.io/Weather_App/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <h1>Currency &nbsp;&nbsp;&nbsp;&nbsp; Convertor</h1>
          </div>
          <p className='top_margin'>Used for converting currency values.</p>
          <p className='bottom_margin'><span class="highlighted-text">Technology used :</span> Javascript, css, html and API  </p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/HarshPrajapati4926/Weather_App" className='btn' target='_blank'>GitHub</a>
            <a href="https://harshprajapati4926.github.io/Weather_App/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <h1>E-Commerce &nbsp;&nbsp;&nbsp;&nbsp; Website</h1>
          </div>
          <p className='top_margin'>Used for converting currency values.</p>
          <p className='bottom_margin'><span class="highlighted-text">Technology used :</span> Javascript, css, html and API  </p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/HarshPrajapati4926/Ecommerce_Website" className='btn' target='_blank'>GitHub</a>
            <a href="https://harshprajapati4926.github.io/Ecommerce_Website/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>



      

        

{/* 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt='IMG1'></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'target='_blank'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a> */}
          {/* </div>
        </article> */}

       
      </div>
      
    </section>
  )
}

export default Portfolio