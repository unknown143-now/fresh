import React from 'react'
import './Footer.scss'
import Logo from '../../../../images/logo.png'



function Footer() {
  return (
    <div className='new-footer'>
      <div className='top'>
        <img src={Logo} alt='' />
        <p>Copyright © Proinvestmentintl</p>
      </div>
      <div class='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
      </div>
    </div>
  )
}

export default Footer