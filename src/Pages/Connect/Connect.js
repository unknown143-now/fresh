import React, { useState } from 'react'
import './Withdrawal.css'
import BankTransfer from '../../Components/BankTransfer/BankTransfer'
import BtcWithdrawal from '../../Components/BtcWithdrawal/BtcWithdrawal'
import PaypalWithdrawal from '../../Components/PaypalWithdrawal/PaypalWithdrawal'
import Navigation from '../../Components/Navigation/Navigation'
import Notification from '../../Components/Notification/Notification'
import Footer from '../../Components/Footer/Footer'
import TrustWallet from '../../Components/TrustWallet/TrustWallet'
import Coinbase from '../../Components/Coinbase/Coinbase'

const Connect = ({ userDetails, logOut, refreshPage, notific }) => {
  const [page, setPage] = useState('Home')
  const [notify, setNotify] = useState({
    display: false,
    type: '',
    message: '',
  })

  const showNotification = (type, message) => {
    window.scrollTo({ top: 0 })
    setNotify({
      display: true,
      type,
      message,
    })
  }

  const closeNotifiaction = () => {
    setNotify({
      display: false,
      type: '',
      message: '',
    })
  }

  const displayPage = () => {
    switch (page) {
      case 'Home':
        return (
          <section className='withdraw'>
            <button
              className='button'
              onClick={() => {
                setPage('Trust')
              }}
            >
              Trust wallet
            </button>
            <button
              className='button'
              onClick={() => {
                setPage('Coinbase')
              }}
            >
              Coinbase Wallet
            </button>
            {/* <button
              className='button'
              onClick={() => {
                setPage('PAYPAL')
              }}
            >
              Paypal Withdrawal
            </button> */}
          </section>
        )
      case 'Trust':
        return (
          <TrustWallet
            setPage={setPage}
            notific={notific}
            user={userDetails}
            refreshPage={refreshPage}
          />
        )
      case 'Coinbase':
        return (
          <Coinbase
            setPage={setPage}
            notific={notific}
            user={userDetails}
            refreshPage={refreshPage}
          />
        )
      default:
        return <div>No page to display</div>
    }
  }

  return (
    <div>
      {notify.display && (
        <Notification
          type={notify.type}
          message={notify.message}
          closeNotify={closeNotifiaction}
        />
      )}
      <Navigation
        page='Dashboard'
        dashpage='connect-wallet'
        logOut={logOut}
        amount={userDetails.amount}
      />
      {displayPage()}
      <div class='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
      </div>
    </div>
  )
}

export default Connect
