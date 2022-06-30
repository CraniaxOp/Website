import React from 'react'
import './about.css'
import ME from '../..//assests/boy.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdSchool} from'react-icons/md'
import Vector1 from '../../assests/Vector1.png'
import Vector2 from '../../assests/Vector2.png'
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src ={Vector1} alt="Vector1-image"/>
            <img src ={Vector2} alt="Vector2-image"/>
            <img src ={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsFillAwardFill className='about_icon'/>
              <h5>Experiance</h5>
              <small>Currently in 5th Sem</small>
            </article>
            <article className='about_card'>
              <AiOutlineFundProjectionScreen className='about_icon'/>
              <h5>Projects</h5>
              <small>4 Web Developement Project </small>
            </article>
            <article className='about_card'>
              <MdSchool className='about_icon'/>
              <h5>Specialisation</h5>
              <small>Full Stack</small>
            </article>
          </div>
          <p>
          An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.
          </p>
          <a href = "#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
      </section>
  )
}

export default about