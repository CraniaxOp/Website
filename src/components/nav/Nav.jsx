import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaBook} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react'
import './nav.css'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href = "#" onClick = {() => setActiveNav('#')} className ={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href = "#about" onClick = {() => setActiveNav("#about")} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href = "#experiance" onClick = {() => setActiveNav('#experiance')} className ={activeNav === '#experiance' ? 'active' : ''}><FaBook/></a>
      <a href = "#portfolio" onClick = {() => setActiveNav("#portfolio")} className= {activeNav === '#portfolio' ? 'active' : ''}><AiFillGithub/></a>
      <a href = "#contact" onClick = {() => setActiveNav("#contact")} className= {activeNav === '#contact' ? 'active' : ''}><IoIosContact/></a>
      </nav>
  )
}

export default Nav