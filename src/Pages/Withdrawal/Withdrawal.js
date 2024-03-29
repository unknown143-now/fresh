import React, { useState } from 'react'
import './Withdrawal.css'
import BankTransfer from '../../Components/BankTransfer/BankTransfer'
import BtcWithdrawal from '../../Components/BtcWithdrawal/BtcWithdrawal'
import PaypalWithdrawal from '../../Components/PaypalWithdrawal/PaypalWithdrawal'
import Navigation from '../../Components/Navigation/Navigation'
import Notification from '../../Components/Notification/Notification'
import Footer from '../../Components/Footer/Footer'

const Withdrawal = ({ userDetails, logOut, refreshPage, notific }) => {
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
                setPage('BANK')
              }}
            >
              Bank Transfer
            </button>
            <button
              className='button'
              onClick={() => {
                setPage('BTC')
              }}
            >
              BTC Withdrawal
            </button>
            <button
              className='button'
              onClick={() => {
                setPage('PAYPAL')
              }}
            >
              Paypal Withdrawal
            </button>
          </section>
        )
      case 'BANK':
        return (
          <BankTransfer
            setPage={setPage}
            notific={notific}
            user={userDetails}
            refreshPage={refreshPage}
          />
        )
      case 'BTC':
        return (
          <BtcWithdrawal
            setPage={setPage}
            notific={notific}
            user={userDetails}
            refreshPage={refreshPage}
          />
        )
      case 'PAYPAL':
        return (
          <PaypalWithdrawal
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
        dashpage='Withdrawal'
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

export default Withdrawal
