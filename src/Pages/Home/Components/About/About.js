import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.scss'

function About() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='about' id='about'>
      <div className='wrap'>
        <h1 data-aos='fade-up' data-aos-duration='2000'>
          <span>About</span> <b>Us</b>
        </h1>
        <p data-aos='fade-left' data-aos-duration='2000'>
          We are an international financial company engaged in investment
          activities, which are related to trading on financial markets and
          cryptocurrency exchanges performed by qualified professional traders.
        </p>
        <p data-aos='fade-right' data-aos-duration='2000'>
          Our goal is to provide our investors with a reliable source of high
          income, while minimizing any possible risks and offering a
          high-quality service, allowing us to automate and simplify the
          relations between the investors and the trustees. We work towards
          increasing your profit margin by profitable investment. We look
          forward to you being part of our community.
        </p>
        <button data-aos='flip-up' data-aos-duration='2000'>
          How it works
        </button>
      </div>
    </div>
  )
}

export default About
