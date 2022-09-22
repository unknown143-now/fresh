import React from 'react'
import './Works.scss'
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { GiPayMoney, GiCash } from 'react-icons/gi'
function Works() {
  return (
    <div className='works'>
      <div className='top'>
        <h1>
          <span>How</span> <b>Pro Investment</b> <span>Works</span>
        </h1>
        <p>
          Get involved in our tremendous platform and Invest. We will utilize
          your money and give you profit in your wallet automatically.
        </p>
      </div>
      <div className='wrap'>
        <div className='card'>
          <div className='round'>
            <AiOutlineUser />
            <span>01</span>
          </div>
          <p>Create Account</p>
        </div>
        <div className='card'>
          <div className='round'>
            <GiPayMoney />
            <span>02</span>
          </div>
          <p>Invest and Have your account activated</p>
        </div>
        <div className='card'>
          <div className='round'>
            <AiOutlineLogin />
            <span>03</span>
          </div>
          <p>Log in Daily to get daily returns</p>
        </div>
        <div className='card'>
          <div className='round'>
            <GiCash />
            <span>04</span>
          </div>
          <p>Relax and watch your investment grow</p>
        </div>
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

export default Works
