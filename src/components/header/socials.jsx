import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'
const socials = () => {
  return (
    <div className='header_socials'>
        <a href = "https://linkedin.com/" target="_blank rel ='noopener noreferrer'"><BsLinkedin/></a>
        <a href = "https://Github.com/" target="_blank rel='noopener noreferrer'"><ImGithub/></a>
        <a href = "https://Facebook.com/" target="_blank rel ='noopener noreferre'"><BsFacebook/></a>
    </div>
  )
}

export default socials