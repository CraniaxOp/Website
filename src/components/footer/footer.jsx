import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href ="#" className='footer_logo'>Soumyadip Das</a>
      <ul className='permalinks'>
        <li><a href ="#">Home</a></li>
        <li><a href ="#about">About</a></li>
        <li><a href ="#experiance">Experiance</a></li>
        <li><a href ="#portfolio">Portfolio</a></li>
        <li><a href ="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href = "https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
      <a href = "https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
      <a href = "https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; SOUMYADIP DAS. All right are reserved</small>
      </div>
    </footer>
  )
}

export default footer