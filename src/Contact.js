import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className='main_contact' id='contact'>
      <div className='main_cont_about'>
        <div className='main_child_one_contact'>
        <h2 className="hr-lines_project">03. Contact</h2>
        </div>
        </div>

        <div className='main_child_two_contact'>
            <p>I would love to connect! If it is for an upcoming project or if you just want to say hello, Feel free to reach out me on my email <span className='link'> hi@pratik.cc</span></p><br></br>
            <a href='mailto:hi@pratik.cc'><button className='email'>Say Hello 👋</button></a><br></br>
            <a href='https://www.linkedin.com/in/heypratik/' target='_blank' rel="noreferrer"><FontAwesomeIcon className='iconsfa_contact' icon={faLinkedin} /></a>
            <a href='https://github.com/heypratik' target='_blank' rel="noreferrer"><FontAwesomeIcon className='iconsfa_contact' icon={faGithub} /></a>
            <a href='https://twitter.com/notagrump/' target='_blank' rel="noreferrer"><FontAwesomeIcon className='iconsfa_contact' icon={faTwitter} /></a>
            <p className='joke'>Knock Knock.</p>
            <p className='joke'>Whois there</p>
            <p className='joke'>Your domain name :)</p>

        </div>
    </div>
  )
}

export default Contact