import React from 'react'
import './Intro.css'
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


function Intro() {

  return (
    <div className='main'>

        <div className='main-child-one'>
        <p>HI, MY NAME IS <b>PRATIK</b></p>
        <h1 className='main-title'>I make websites.</h1>
        <p>I am a Front-end Developer. Curious by nature. Passionate about Web3. </p>
        <a href='https://drive.google.com/file/d/1WJgmNSEjWyJSiJieGBIMASUNxzOvvsvT/view' target='_blank' rel="noreferrer"><button className='resume'>Résumé</button></a>
        <div className='icons'>
        <a href='https://www.linkedin.com/in/heypratik/' target='_blank' rel="noreferrer"><FontAwesomeIcon className='iconsfa' icon={faLinkedin} /></a>
        <a href='https://github.com/heypratik' target='_blank' rel="noreferrer"><FontAwesomeIcon className='iconsfa' icon={faGithub} /></a>
        <a href='https://twitter.com/notagrump/' target='_blank' rel="noreferrer"><FontAwesomeIcon className='iconsfa' icon={faTwitter} /></a>
        </div>
        </div>

        <div className='main-child-two'>
        <Spline className='spline' scene="https://prod.spline.design/RnRH4vMboI3AQ1q0/scene.splinecode" />
        </div>

    </div>
  )
}

export default Intro