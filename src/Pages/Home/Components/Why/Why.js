import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Why.scss'
import { GoLaw, GoLock } from 'react-icons/go'
import { GiLightningTrio, GiRosaShield } from 'react-icons/gi'
import { BiSupport, BiServer } from 'react-icons/bi'
import { BsFileEarmarkLock } from 'react-icons/bs'
import { RiShieldUserLine } from 'react-icons/ri'
import { MdGroups } from 'react-icons/md'

const WhyData = [
  {
    id: 1,
    icon: GoLaw,
    title: 'Legal Company',
    content:
      'Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe.',
  },
  {
    id: 2,
    icon: GoLock,
    title: 'High reliability',
    content:
      'We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.',
  },
  {
    id: 3,
    icon: RiShieldUserLine,
    title: 'Anonymity',
    content:
      'Anonymity and using cryptocurrency as a payment instrument. In the era of electronic money – this is one of the most convenient ways of cooperation.',
  },
  {
    id: 4,
    icon: GiLightningTrio,
    title: 'Quick Withdrawal',
    content:
      'Our all retreats are treated spontaneously once requested. There are high maximum limits. The minimum withdrawal amount is only $10.',
  },
  {
    id: 5,
    icon: MdGroups,
    title: 'Referral Program',
    content:
      'We are offering a certain level of referral income through our referral program. you can increase your income by simply refer a few people.',
  },
  {
    id: 6,
    icon: BiSupport,
    title: '24/7 Support',
    content:
      'We provide 24/7 customer support through e-mail and whatsapp. Our support representatives are periodically available to elucidate any difficulty..',
  },
  {
    id: 7,
    icon: BiServer,
    title: 'Dedicated Server',
    content:
      'We are using a dedicated server for the website which allows us exclusive use of the resources of the entire server.',
  },
  {
    id: 8,
    icon: BsFileEarmarkLock,
    title: 'SSL Secured',
    content:
      'Comodo Essential-SSL Security encryption confirms that the presented content is genuine and legitimate.',
  },
  {
    id: 9,
    icon: GiRosaShield,
    title: 'DDOS Protection',
    content:
      'We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider.',
  },
]
function Why() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='why'>
      <div className='top' data-aos='fade-up' data-aos-duration='2000'>
        <h1>
          <span>Why Choose</span> <b>Pro Investment</b>
        </h1>
        <p>
          Our goal is to provide our investors with a reliable source of high
          income, while minimizing any possible risks and offering a
          high-quality service.
        </p>
      </div>

      <div className='wrap'>
        {WhyData.map((item) => (
          <div
            className='card'
            key={item.id}
            data-aos='flip-up'
            data-aos-duration='2000'
          >
            <div className='head'>
              {<item.icon />} <h1> {item.title}</h1>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Why
