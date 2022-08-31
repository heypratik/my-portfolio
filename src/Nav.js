import React, { useState } from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons'

function Nav() {

  const [menuModal, setMenuModal] = useState(false)

  function handleClickMenu() {
    setMenuModal(!menuModal)
  }


  return (
    <div className='nav'>
    <div className='logo'>
    <p>hi@pratik.cc</p>
    </div>
        
    <div className='nav-items'>
        <a href='#about'><p className='num'>01. About</p></a>
        <a href='#projects'><p className='num'>02. Projects</p></a>
        <a href='#contact'><p className='num'>03. Contact</p></a>
    </div>

    <div className='nav-items_bar'>
    <FontAwesomeIcon onClick={handleClickMenu} className='iconsfa_nav' icon={faBars} />
    </div>

    {menuModal && <div className='modal_nav'>
      <div className='overlay_nav'>
        <div className='modal-content_nav'>
          <br></br>
          <ul>
            <a href='#about' onClick={handleClickMenu}><li>About</li></a>
            <a href='#projects' onClick={handleClickMenu}><li>Projects</li></a>
            <a href='#contact' onClick={handleClickMenu}><li>Contact</li></a>
          </ul>
          <button className="close-modal_nav" onClick={handleClickMenu}> <FontAwesomeIcon className='iconsfa_nav' icon={faSquareXmark} /> </button>
        </div> </div>
        </div> }

    </div>
  )
}

export default Nav