import React from 'react'
import './FAQ.scss'
import FaqList from './FaqList'

const FaqLists = [
  {
    id: 1,
    title: 'When can I deposit/withdraw from my Investment account?',
    content: ` Deposit and withdrawal are available for you at any time. Be sure, that your funds are not used in any ongoing trade before the withdrawal. The available amount is shown in your dashboard on the main page.`,
  },
  {
    id: 2,
    title: 'How do I check my account balance?',
    content: ` You can see this anytime on your accounts dashboard. You can see this anytime on your accounts dashboard.`,
  },
  {
    id: 3,
    title: `How will I know that the withdrawal has been successful?`,
    content: `You will get an automatic notification once we send the funds and you can always check your transactions or account balance. Your chosen payment system dictates how long it will take for the funds to reach you.`,
  },
  {
    id: 4,
    title: `How much can I withdraw?`,
    content: `You can withdraw the full amount of your account balance minus the funds that are used currently for supporting opened positions. The amount that can be redrawn depends on the card purchased.`,
  },
  {
    id: 5,
    title: 'Why do i need to pay before gaining access to the dashboard.',
    content:
      'Since we began in 2016 we have had a lot of attacks on our system, and this is mostly done by people who are not investors. To reduce the level of attacks we decided to lock the site and give access to only those that have paid. This is to safeguard both our intrests and that our Investors. Access is granted typically within 4 to 24hrs of payment confirmation.',
  },
]
function FAQ() {
  return (
    <div className='faq'>
      <div className='top'>
        <h1>
          <span>Frequently Asked</span> <b>Questions</b>
        </h1>
        <p>
          We answer some of your Frequently Asked Questions regarding our
          platform. If you have a query that is not answered here, Please
          contact us.
        </p>
      </div>
      <div className='wrap'>
        <div className='cover'>
          {FaqLists.map((item) => (
            <FaqList item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
