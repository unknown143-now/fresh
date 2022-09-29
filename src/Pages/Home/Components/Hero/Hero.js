import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Hero.scss'

function Hero() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='hero-sec'>
      <div className='wrap' data-aos='fade-up' data-aos-duration='3000'>
        <h1>
          <span>Invest for Future in Stable Platform </span>
          <b class='base--color'>and Make Fast Money</b>
        </h1>
        <p>
          Invest in an Industry Leader, Professional, and Reliable Company. We
          provide you with the most necessary features that will make your
          experience better. Not only we guarantee the fastest and the most
          exciting returns on your investments, but we also guarantee the
          security of your investment.
        </p>
        <button>SIGN UP</button>
      </div>
    </div>
  )
}

export default Hero
