import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faNodeJs, faGitAlt, faFigma, faWordpress  } from '@fortawesome/free-brands-svg-icons'


function About() {
  return (
    <div className='main_about' id='about'>
    <div className='main_cont_about'>
        
    <div className='main-child-one_about'>
    <h2 className="hr-lines">01. About</h2>
    </div>
    </div>
    
    <div className='main-child-two_about'>
      <p>Hello! I am a self-taught front-end developer. I started working on my first WordPress website back in 2019. I didn't even realize that it could become my profession.  I have always loved building things and soon discovered Javascript and React and slowly started making more complex web applications.</p><br></br>
      <p>I worked as a freelance WordPress developer since 2020, making beautiful websites for clients. I also recently created <b className='link'>TransferKit.io</b> which helps you store and access unlimited amounts of data for free. When I'm not fiddling around with code, I'm either at the gym or playing badminton with friends.</p>
    </div>

    <div className='tech-stack'>
    <div className='title'><h2>Tech Stack</h2></div>
    <div className='icons_about'>
    <FontAwesomeIcon className='iconsfa_about' icon={faReact} />
    <FontAwesomeIcon className='iconsfa_about' icon={faJs} />
    <FontAwesomeIcon className='iconsfa_about' icon={faNodeJs} />
    <FontAwesomeIcon className='iconsfa_about' icon={faGitAlt} />
    <FontAwesomeIcon className='iconsfa_about' icon={faFigma} />
    <FontAwesomeIcon className='iconsfa_about' icon={faWordpress} />
    </div>
    </div>

    </div>
  )
}

export default About