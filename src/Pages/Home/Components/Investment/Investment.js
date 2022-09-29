import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Investment.scss'

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

function Investment() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='investment' id='plan'>
      <div className='top'>
        <h1>
          <span>Investment</span> <b>Plans</b>
        </h1>
        <p>
          To make a solid investment, you have to know where you are investing.
          Find a plan which is best for you.
        </p>
      </div>
      <div className='wrap'>
        {InvestmentPlan.map((item) => (
          <div
            className='card'
            key={item.id}
            data-aos={item.aos}
            data-aos-duration='2000'
          >
            <h1>{item.name}</h1>
            <ul>
              <li>Return {item.Return}</li>
              <li>Every Day</li>
              <li>For 30 days</li>
              <li>Total {item.Total}</li>
            </ul>
            <h2>
              ${item.amount1.toLocaleString()} - $
              {item.amount2.toLocaleString()}{' '}
            </h2>
            <Link to={`/payment/${item.name}`}>
              <button>Invest Now</button>
            </Link>
          </div>
        ))}
        <div className='card' data-aos='fade-up' data-aos-duration='2000'>
          <h1>Life Time</h1>
          <ul>
            <li>Return 10% {'>'}</li>
            <li>Special</li>
            <li>For Life</li>
            <li>Unlimited</li>
          </ul>
          <h2>Above $100,000</h2>
          <a href='mailto:proinvestment.supp@gmail.com'>
            <button>Contact us</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Investment
