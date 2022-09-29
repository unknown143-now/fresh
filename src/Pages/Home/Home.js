import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import Navigation from '../../Components/Navigation/Navigation'
import UseScript from '../../Components/UseScript/UseScript'
import Footer from '../../Components/Footer/Footer'
import qr from '../../images/qrcode.jpg'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  UseScript('https://www.cryptohopper.com/widgets/js/script')
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='Home'>
      <Navigation page='Home' />
      <section className='banner'>
        <div className='banner-sub'>
          <h3 className='h3'>HOME OF INVESTMENT</h3>
          <div className='p'>
            <p>
              You can instantly receive and send money to almost anyone anywhere
              in the world, anytime.
            </p>
          </div>
          <h1 className='h1'>Pro Investment</h1>
          <div className='buttons'>
            <Link to='/register'>
              <button className='btn one'>Get Started</button>
            </Link>
            <Link to='/login'>
              <button className='btn two'>Login</button>
            </Link>
          </div>
        </div>
      </section>
      <section className='second-section'>
        <div className='overlay'>
          <h1 className='h1'>WHY CHOOSE US</h1>
          <div className='line'>
            <div className='line2'></div>
          </div>
          <p className='p'>
            We always ensure Trustful services which include minimum and very
            impressive Exchange rates, reliable Payment Solutions, a Highly
            secure, Safe and Transparent Experience along with the Fair Pricing.
            Moreover, we are linked with many other platforms such as paypal,
            bitcoin, western Union, Alipay etc. This aids the user to with
            respect to their funds using their any desired platform. Also, Free
            wallet to wallet transaction makes a better experience to send the
            funds.
          </p>
        </div>
      </section>
      <section className='pay'>
        <div className='payment'>
          <h2 className='text1'>SCAN QR CODE OR COPY ADDRESS TO PAY</h2>
          <div className='image'>
            <img src={qr} alt='' className='img' />
          </div>
          <div className='text2'>
            <div className='design'>1B6ttH3E6PArDNijMcmmsvg7tbbk58WgqD</div>
          </div>
          <div className='text3'>
            <p>
              Note: After Registration, Login won't be possible until an Admin
              grants access. To gain access, Send a Proof of payment to the
              company's Email, to confirm Payment:-
              <a href='mailto:proinvestment.supp@gmail.com' className='mail'>
                proinvestment.supp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className='fourth-section'>
        <div className='overlay'>
          <div className='sub-div'>
            <h1 className='h1'> OUR INVESTMENT PLANS</h1>
            <div className='line'>
              <div className='line2'></div>
            </div>
          </div>
          <p style={{ paddingBottom: '10px' }}>
            <strong>ROI:-</strong>Investors Recieves a certain daily return
            which sums up to the Monthly payment (capital + ROI) at the end of
            The 30 days.{' '}
          </p>
          <p style={{ paddingBottom: '10px' }}>
            <strong>Duration:-</strong> 30 Days, Withdrawal can be done
            everyday. Daily Returns is Delivered after every Successful Login.
          </p>
          <p style={{ paddingBottom: '10px' }}>
            <strong>Referral:-</strong> For Every Successful Referral, Investors
            get $50 bonus{' '}
          </p>

          <div className='second-sub-div'>
            <div className='small-box'>
              <p className='p1'>01.</p>
              <h1 className='h1'>
                <span className='span'>- </span> Level 1
              </h1>
              <p className='p2'>
                Minimum Investment of <strong>$500 - $1000</strong>, Investors
                will Earn an ROI of 30% at the end of the month.{' '}
              </p>
            </div>
            <div className='small-box'>
              <p className='p1'>02.</p>
              <h1 className='h1'>
                <span className='span'>- </span> Level 2
              </h1>
              <p className='p2'>
                Minimum Investment of <strong>$1100 - $2000</strong>, Investors
                will Earn an ROI of 40% at the end of the month.{' '}
              </p>
            </div>
            <div className='small-box'>
              <p className='p1'>03.</p>
              <h1 className='h1'>
                <span className='span'>- </span> Level 3
              </h1>
              <p className='p2'>
                Minimum Investment of <strong>$2100 - $3000</strong>, Investors
                will Earn an ROI of 60% at the end of the month.{' '}
              </p>
            </div>
            <div className='small-box'>
              <p className='p1'>04.</p>
              <h1 className='h1'>
                <span className='span'>- </span> Level 4
              </h1>
              <p className='p2'>
                Minimum Investment of <strong>$3100 - unlimited</strong>,
                Investors will Earn an ROI of 80% at the end of the month.{' '}
              </p>
            </div>
            <div className='big-box'>
              <p className='p1'>05.</p>
              <h1 className='h1'>
                <span className='span'>- </span> Our Aim
              </h1>
              <p className='p2'>
                We have clearcut goal to provide top notch Payment services with
                low interexchange fees, fair pricing, speedy transfer of payment
                and very secure data encryption to our customers. Thus , we have
                always aimed to make our customers ” financially Successful”
              </p>
            </div>
            <div className='big-box'>
              <p className='p1'>06.</p>
              <h1 className='h1'>
                <span className='span'>- </span> Our Mission
              </h1>
              <p className='p2'>
                We always have a clear agenda to provide a ‘Reliable, Smoother,
                Secure and Speedy’ Payment solutions worldwide to our precious
                customers .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='third-section'>
        <h1 className='h1'>OUR PARTNERS</h1>
        <div className='line'>
          <div className='line2'></div>
        </div>
        <div className='partner-img'>
          <div className='div'>
            <img className='img' src={one} alt='' />
          </div>
          <div className='div'>
            <img className='img' src={two} alt='' />
          </div>
          <div className='div'>
            <img className='img' src={three} alt='' />
          </div>
          <div className='div'>
            <img className='img' src={four} alt='' />
          </div>
          <div className='div'>
            <img className='img' src={five} alt='' />
          </div>
        </div>
      </section>
      <div className='cryptohopper-web-widget' data-id='4'></div>
      <Footer />
    </div>
  )
}

export default Home
