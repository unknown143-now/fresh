import React, { useEffect } from 'react'
import './Counter.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Counter() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='counter-sec'>
      <div className='wrap'>
        <div data-aos='fade-up' data-aos-duration='2000'>
          <p>Bitcoin Distributed</p>
          <h1>45.45 BTC</h1>
        </div>
        <div data-aos='fade-down' data-aos-duration='2000'>
          <p>Amount Distributed</p>
          <h1>67,000,000 USD</h1>
        </div>
        <div data-aos='fade-up' data-aos-duration='2000'>
          <p>24 Volume</p>
          <h1>2,547.35 BTC</h1>
        </div>
        <div data-aos='fade-down' data-aos-duration='2000'>
          <p>ACTIVE TRADES</p>
          <h1>2,545,875</h1>
        </div>
      </div>
    </div>
  )
}

export default Counter
