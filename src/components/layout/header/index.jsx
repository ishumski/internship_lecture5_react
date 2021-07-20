import React from 'react'

import './index.scss'

function Header() {
  return (
    <header className='header'>
      <div className="header__box">
        <div className="header__box-logo">Logo</div>
        <div className="header__box-title">Logo Title</div>
      </div>
      <div className="header__registration">
        <span>Login</span>
      </div>
    </header>
  )
}

export default Header
