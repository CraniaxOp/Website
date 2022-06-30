import React from 'react'
import CV from '../../assests/CV.pdf'
const button = () => {
  return (
    <div className = "cta">
    <a href = {CV} download className='btn'>Download CV</a>
    <a href = " #contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default button