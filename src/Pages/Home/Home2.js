import React from 'react'
import './Home.scss'
import Hero from './Components/Hero/Hero'
import Navigation from './Components/Navigation/Navigation'
import Counter from './Components/Counter/Counter'
import About from './Components/About/About'
import Investment from './Components/Investment/Investment'
import Why from './Components/Why/Why'
import Calculator from './Components/Calculator/Calculator'
import Works from './Components/Works/Works'
import FAQ from './Components/FAQ/FAQ.js'
import Footer from './Components/Footer/Footer'
import UseScript from '../../Components/UseScript/UseScript'
import { ReactComponent as WhatsappLogo } from '../../svg/whatsapp-brands.svg'

function Home2() {
  UseScript('https://www.cryptohopper.com/widgets/js/script')
  return (
    <div className='home-sec'>
      <Navigation />
      <Hero />
      <Counter />
      <About />
      <Investment />
      <Why />
      <Calculator />
      <Works />
      <FAQ />
      <Footer />
      <div className='cryptolive-wrapper'>
        <div className='cryptolive'>
          <iframe
            src='https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no'
            title='crypto live'
            width='100%'
            height='36px'
            scrolling='auto'
            marginWidth='0'
            marginHeight='0'
            frameBorder='0'
            border='0'
            style={{ border: 0, margin: 0, padding: 0 }}
          />
        </div>
      </div>
      <a href='http://wa.me/79259521077'>
        <div className='whatsapp'>
          <WhatsappLogo className='img' />
        </div>
      </a>
      {/* <div className='hom' style={{ height: '200vh' }}></div> */}
    </div>
  )
}

export default Home2
