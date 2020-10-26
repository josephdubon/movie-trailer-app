import React, { useEffect, useState } from 'react'

import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='https://image.flaticon.com/icons/png/512/870/870910.png'
        alt='Netflix Logo'
      />

      <img
        className='nav_avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png'
        alt='Netflix User Avatar'
      />
    </div>
  )
}

export default Nav
