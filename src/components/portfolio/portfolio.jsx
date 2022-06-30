import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/Healthcare.png'
import IMG2 from '../../assests/Travel.png'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Healthcare Project',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Travel Site',
    github: 'https://github.com',
    demo: 'https://youtube.com'
  }
]
const portfolio = () => {
  return (
    <section id = "portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='conatiner portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src = {image} alt={title}/>
              </div>
              <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
            </article>
            )
          })
        }
        </div>
        </section>
  )
}

export default portfolio