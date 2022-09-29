import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Calculator.scss'

const InvestmentPlan = [
  {
    id: 1,
    name: 'Bronze',
    Total: 0.2,
  },
  {
    id: 2,
    name: 'Silver',
    Total: 0.3,
  },
  {
    id: 3,
    name: 'Gold',
    Total: 0.4,
  },
  {
    id: 4,
    name: 'Platinum',
    Total: 0.5,
  },
  {
    id: 5,
    name: 'Sapphire',
    Total: 0.9,
  },
  {
    id: 6,
    name: 'Ruby',
    Total: 1.5,
  },
  {
    id: 7,
    name: 'Diamond',
    Total: 2,
  },
]
function Calculator() {
  useEffect(() => {
    AOS.init()
  }, [])
  const [collectPlan, setCollectPlan] = useState(0)
  const [collectAmount, setCollectAmount] = useState(0)
  return (
    <div className='calculator'>
      <div className='top' data-aos='fade-up' data-aos-duration='2000'>
        <h1>
          <span>Profit</span> <b>Calculator</b>
        </h1>
        <p>
          You must know the calculation before investing in any plan, so you
          never make mistakes. Check the calculation and you will get as our
          calculator says.
        </p>
      </div>
      <div className='wrap' data-aos='fade-left' data-aos-duration='2000'>
        <div className='form'>
          <div className='short'>
            <div className='card'>
              <p>Choose Plan</p>
              <select
                name=''
                id=''
                onChange={(e) => setCollectPlan(e.target.value)}
              >
                <option value=''>Select a plan</option>
                {InvestmentPlan.map((item) => (
                  <option value={item.Total} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='card'>
              <p>Invest Amount</p>
              <input
                type='number'
                placeholder='0.00'
                onChange={(e) => setCollectAmount(e.target.value)}
              />
            </div>
          </div>
          <div className='long'>
            <div className='card'>
              <p>Profit Amount</p>
              <h6>
                $
                {(
                  collectPlan * collectAmount +
                  parseInt(collectAmount)
                ).toLocaleString()}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
