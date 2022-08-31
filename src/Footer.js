import React from 'react'
import './Footer.css'

function Footer() {

    const year = new Date().getFullYear();

  return (
    <div className='main_footer'>
    <p> Copyright © {year} | Pratik Ravariya</p>
    </div>
  )
}

export default Footer