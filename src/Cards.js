import React, { useState } from 'react'
import './Cards.css'
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faWordpress, faElementor } from '@fortawesome/free-brands-svg-icons'
import { faCode, faUpRightFromSquare, faSquareXmark  } from '@fortawesome/free-solid-svg-icons'

function Cards(props) {

  const [modal, setModal] = useState(false)

    function handleClick() {
        setModal(!modal)
    }

    const reactIcon = props.ReactIcon && <Chip className='chip' sx={{padding: '4px', color:'white', backgroundColor:'#4b1dd025'}} variant="outlined" color="primary" icon={<FontAwesomeIcon className='iconsfa_cards' icon={faReact} />} label="ReactJS" />

    const jsIcon = props.JsIcon && <Chip className='chip' sx={{padding: '4px', color:'white', backgroundColor:'#4b1dd025'}} variant="outlined" color="primary" icon={<FontAwesomeIcon className='iconsfa_cards' icon={faSquareJs} />} label="Javascript" />

    const ApiIcon = props.ApiIcon && <Chip className='chip' sx={{padding: '4px', color:'white', backgroundColor:'#4b1dd025'}} variant="outlined" color="primary" icon={<FontAwesomeIcon className='iconsfa_cards' icon={faCode} />} label="API" />

    const WordpressIcon = props.WordpressIcon && <Chip className='chip' sx={{padding: '4px', color:'white', backgroundColor:'#4b1dd025'}} variant="outlined" color="primary" icon={<FontAwesomeIcon className='iconsfa_cards' icon={faWordpress} />} label="WordPress" />

    const ElementorIcon = props.ElementorIcon && <Chip className='chip' sx={{padding: '4px', color:'white', backgroundColor:'#4b1dd025'}} variant="outlined" color="primary"   icon={<FontAwesomeIcon className='iconsfa_cards' icon={faElementor} />} label="Elementor" />


  return (
    <div className='card'>
        <img src={props.coverImg} width='100%' alt={props.title} />
        <br/>
        <p className='featured'>Featured Project</p>
        <h2>{props.title}</h2>
        <div className='chips'>
        {reactIcon}
        {jsIcon}
        {ApiIcon}
        {WordpressIcon}
        {ElementorIcon}
        </div>
        <button onClick={handleClick} className='btn_card'>LEARN MORE <FontAwesomeIcon className='iconsfa_cards' icon={faUpRightFromSquare} /> </button>

        {modal && <div className='modal'>
          <div className='overlay'>

            <div className='modal-content'>
              <br></br>
            <img src={props.coverImg} alt='project-cover'/>
              <h2>{props.title}</h2>
              <p className='propsDescription'>{props.description}</p>
              <div className='modal_icons'>
              {reactIcon}
              {jsIcon}
              {ApiIcon}
              {WordpressIcon}
              {ElementorIcon}
              </div>
              <a href={props.liveUrl} target='_blank' rel="noreferrer"><button className='modal_btn'>SEE LIVE <FontAwesomeIcon className='iconsfa_cards' icon={faUpRightFromSquare} /> </button></a>
              <button className="close-modal" onClick={handleClick}> <FontAwesomeIcon className='iconsfa_close' icon={faSquareXmark} /> </button>
            </div>

          </div>
        </div>}

    </div>
  )
}

export default Cards