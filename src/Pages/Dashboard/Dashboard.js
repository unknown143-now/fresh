import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation'
import UseScript from '../../Components/UseScript/UseScript'
import Footer from '../../Components/Footer/Footer'
import normalCard from '../../images/normal.png'
import classicCard from '../../images/classic.png'
import merchantCard from '../../images/merchant.png'
import eliteCard from '../../images/elite.png'
import './Dashboard.css'

const Dashboard = ({ userDetails, logOut }) => {
  UseScript('https://widget.coinlore.com/widgets/coinlore-list-widget.js')

  const [transactions, setTransactions] = useState([])
  const [card, setCard] = useState({})

  const displayActiveCard = () => {
    switch (card.type) {
      case 'NORMAL':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={normalCard} alt='' />
          </div>
        )
      case 'CLASSIC':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={classicCard} alt='' />
          </div>
        )
      case 'MERCHANT':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={merchantCard} alt='' />
          </div>
        )
      case 'ELITE':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={eliteCard} alt='' />
          </div>
        )
      default:
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>No Active Card
          </div>
        )
    }
  }

  useEffect(() => {
    Promise.all([
      fetch(
        `${process.env.REACT_APP_API_URL}/user/transactions/${userDetails.email}`
      ),
      fetch(`${process.env.REACT_APP_API_URL}/user/card/${userDetails.email}`),
    ])
      .then(async (result) => {
        const transaction = await result[0].json()
        const card = await result[1].json()
        if (transaction.success) {
          setTransactions(transaction.transactions)
        }
        if (card.success) {
          setCard(card.card)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line
  }, [])

  return (
    <div className='Dashboard'>
      <Navigation
        page='Dashboard'
        dashpage='Dashboard'
        logOut={logOut}
        amount={userDetails.amount}
      />
      <section className='name'>
        <h1>Hello There! {userDetails.firstname}</h1>
        <p className='p-tag'>
          Each member have a unique email address to share with friends and
          family and receive a bonus, the bonus will be added on sucessful
          purchase of an active card. If any one sign-up with your email as a
          referer, $50 will be added to your wallet.
        </p>
      </section>
      <section className='user-activecard'>{displayActiveCard()}</section>
      <section className='dashboard-one'>
        <div className='left'>
          <div className='first'>
            <h1 className='h1'>Transactions</h1>
            <p className='p-tag'>
              Referers : <span>{userDetails.referrals}</span>
            </p>
            <Link className='a-tag' to='/dashboard/transactions'>
              VIEW ALL
            </Link>
          </div>
          <table className='table'>
            <thead>
              <tr className='tr'>
                <th className='th1'>Date</th>
                <th className='th'>Type</th>
                <th className='th1'>Details</th>
                <th className='th'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, i) => (
                <tr className='tr' key={i}>
                  <td className='td1'>{`${transaction.date.substring(
                    0,
                    transaction.date.indexOf('T')
                  )}   ${transaction.date.substring(
                    transaction.date.indexOf('T') + 1,
                    transaction.date.lastIndexOf(':')
                  )}`}</td>
                  <td className='td'>{transaction.type}</td>
                  <td className='td1'>{transaction.details}</td>
                  <td className='td'>{`$${transaction.amount}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='right'>
          <div
            className='coinlore-list-widget'
            data-mcurrency='usd'
            data-top='10'
            data-cwidth='100%'
            data-bcolor='#fff'
            data-coincolor='#428bca'
            data-pricecolor='#4c4c4c'
          ></div>
        </div>
      </section>
      <section className='btc'>
        <div className='cryptochart-wrapper'>
          <div className='cryptochart'>
            <iframe
              src='https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505'
              title='crypto chart'
              width='100%'
              height='536px'
              scrolling='auto'
              marginWidth='0'
              marginHeight='0'
              frameBorder='0'
              border='0'
              style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
      <div class='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
      </div>
    </div>
  )
}

export default Dashboard
