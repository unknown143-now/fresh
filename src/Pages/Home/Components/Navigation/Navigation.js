import React, { useState } from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import Logo from '../../../../images/logo.png'

function Navigation() {
  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <nav className='landing-navigation'>
      <div className='logo'>
        <img className='logo1' src={Logo} alt='Logo' />
      </div>
      <div
        onClick={handleToggle}
        className={isActive ? 'hamburger' : 'hamburger toggle'}
      >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <ul className={isActive ? 'nav-links mods' : 'nav-links mods open'}>
        <div className='listing'>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              About Us
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              Plan
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              Transactions
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              FAQ
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              Contact
            </Link>
          </li>
        </div>
        <div className='buttons'>
          <Link to='/login'>
            <button>Log-in</button>
          </Link>
          <Link to='/register'>
            <button className='right-btn'>Sign-Up</button>
          </Link>
        </div>
      </ul>
      <ul className={isActive ? 'nav-links mod' : 'nav-links mod open'}>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          <Link className='link' to='/'>
            About Us
          </Link>
        </li>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          <Link className='link' to='/'>
            Plan
          </Link>
        </li>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          <Link className='link' to='/'>
            Transactions
          </Link>
        </li>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          <Link className='link' to='/'>
            FAQ
          </Link>
        </li>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          <Link className='link' to='/'>
            Contact
          </Link>
        </li>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          {' '}
          <Link to='/login'>
            <button>Log-in</button>
          </Link>
        </li>
        <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
          {' '}
          <Link to='/register'>
            <button className='right-btn'>Sign-Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
