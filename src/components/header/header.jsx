import React from 'react'
import './header.css'
import CT from './button'
import ME from '../../assests/boy.png'
import Socials from './socials'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Soumyadip Das </h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CT/>
        <Socials/>
        <div className = 'me'>
          <img src = {ME} alt="me"/>
        </div>
        <a href = "#contact" className='scroll_down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default header