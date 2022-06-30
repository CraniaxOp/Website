import React from 'react'
import './experiance.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experiance = () => {
  return (
    <section id = "experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>

      <div className='container experiance_container'>
        <div className="experiance_frontend">
          <h3>Frontend Developement</h3>
          <div className="experiance_content">
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
            <div>
            <h4>HTML</h4>
              <small className='text-light'>Core</small>
            </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Core</small>
              </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
             <div>
             <h4>React Js</h4>
              <small className='text-light'>Core</small>
             </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Core</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experiance_backend'>
        <h3>Backend Developement</h3>
          <div className="experiance_content">
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
             <div>
             <h4>C</h4>
              <small className='text-light'>Experianced</small>
             </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
             <div>
             <h4>C++</h4>
              <small className='text-light'>Experianced</small>
             </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
             <div>
             <h4>Java</h4>
              <small className='text-light'>Experianced</small>
             </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
              <div>
              <h4>Spring Framework</h4>
              <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
             <div>
             <h4>Java Enterprise Edition</h4>
              <small className='text-light'>Experianced</small>
             </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
            <div>
            <h4>MySql</h4>
              <small className='text-light'>Experianced</small>
            </div>
            </article>
            <article className='experiance_details'>
              <BsFillPatchCheckFill className='experiance_details-icons'/>
             <div>
             <h4>Hibernate</h4>
              <small className='text-light'>Core</small>
             </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default experiance