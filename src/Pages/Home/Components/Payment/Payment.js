import React, { useEffect, useState } from 'react'
import QRCode from '../../../../images/qrcode.jpg'
import BQRCode from '../../../../images/btcCode.jpg'
import UQRCode from '../../../../images/usdtCode.jpg'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Payment.scss'

const InvestmentPlan = [
  {
    id: 1,
    name: 'Bronze',
    Return: '0.7%',
    Total: '20%',
    amount1: 500,
    amount2: 1000,
    aos: 'fade-up',
  },
  {
    id: 2,
    name: 'Silver',
    Return: '1%',
    Total: '30%',
    amount1: 1100,
    amount2: 2000,
    aos: 'fade-down',
  },
  {
    id: 3,
    name: 'Gold',
    Return: '1.3%',
    Total: '40%',
    amount1: 2100,
    amount2: 3000,
    aos: 'fade-up',
  },
  {
    id: 4,
    name: 'Platinum',
    Return: '1.7%',
    Total: '50%',
    amount1: 3100,
    amount2: 10000,
    aos: 'fade-down',
  },
  {
    id: 5,
    name: 'Sapphire',
    Return: '3%',
    Total: '90%',
    amount1: 11000,
    amount2: 20000,
    aos: 'fade-down',
  },
  {
    id: 6,
    name: 'Ruby',
    Return: '5%',
    Total: '150%',
    amount1: 21000,
    amount2: 40000,
    aos: 'fade-up',
  },
  {
    id: 7,
    name: 'Diamond',
    Return: '6.6%',
    Total: '200%',
    amount1: 41000,
    amount2: 999999,
    aos: 'fade-down',
  },
]
function Payment() {
  const { name } = useParams()
  const [paymentDetails, setPaymentDetails] = useState({})
  useEffect(() => {
    const SelectedDetails = InvestmentPlan.find((item) => item.name === name)
    setPaymentDetails(SelectedDetails)
  }, [])

  return (
    <div className='payment-page'>
      <section className='wrapper primary'>
        <Link to='/#plan'>
          <button className='top-btn'>Back</button>
        </Link>
        <div className='fade'>
          <div className='top'>
            <h1>
              {paymentDetails.name} <span>Plan</span>
            </h1>
            <p>SCAN QR CODE OR COPY ADDRESS TO PAY</p>
          </div>
          <div className='payments-COVER'>
            <div className='left'>
              <div className='address1'>
                <h2>BTC</h2>
                <img src={BQRCode} alt='' />
                <p>
                  Deposit Address: &nbsp;
                  &nbsp;15fqzBPq1yuydMsPAXnVwy7AxcHyjD92UY
                </p>
              </div>
            </div>
            <div className='right'>
              <div className='address1'>
                <h2>USDT</h2>
                <img src={UQRCode} alt='' />
                <p>
                  Deposit Address: &nbsp;
                  &nbsp;0x765a31e50a52b9364b0258e893b4e46558632d98
                </p>
                <p>Network:- USDT - ERC20</p>
              </div>
            </div>
          </div>

          <div className='price'>
            <h2>
              Amount : ${paymentDetails.amount1} - ${paymentDetails.amount2}
            </h2>
            <p>
              NOTE: Send Proof of payment to Admin to activate account. Please
              add your Full Name to the Message.
            </p>
            <a href='mailto:proinvestment.supp@gmail.com'>
              <button>Message Admin</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Payment
