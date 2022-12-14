import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation'
import Loading from '../../Components/Loading/Loading'
import Notification from '../../Components/Notification/Notification'
import './AdminWithdrawal.css'

const AdminWithdrawal = ({ logOut, notific }) => {
  const [withdrawals, setWithdrawals] = useState([])

  const [loading, setLoading] = useState(true)
  const [formLoading, setFormLoading] = useState(false)
  const [notify, setNotify] = useState({
    display: false,
    type: '',
    message: '',
  })

  const [selectedDetails, setSelectedDetails] = useState({})

  const [page, setPage] = useState('All')

  const history = useHistory()

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

  const processWithdrawal = () => {
    setFormLoading(true)
    fetch(
      `${process.env.REACT_APP_API_URL}/user/withdraw/${selectedDetails.withdrawal_id}`,
      {
        method: 'put',
        headers: { 'content-Type': 'application/json' },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFormLoading(false)
        if (data.success) {
          notific('success', 'Marked As Seen')
          setPage('All')
        } else {
          notific('error', 'An error occured')
        }
      })
      .catch((err) => {
        setFormLoading(false)
        notific('error', 'An error occured')
      })
  }

  const displayPage = () => {
    switch (page) {
      case 'All':
        return (
          <section className='transaction'>
            <div className='overlay'>
              <div className='first'>
                <button
                  className='button'
                  onClick={() => {
                    setPage('All')
                  }}
                  style={{ background: '#333', color: '#fff' }}
                >
                  ALL
                </button>
                <button
                  className='button'
                  onClick={() => {
                    setPage('Seen')
                  }}
                >
                  SEEN
                </button>
                <button
                  className='button'
                  onClick={() => {
                    setPage('NotSeen')
                  }}
                >
                  NOT SEEN
                </button>
              </div>
              <div className='overflow'>
                <table className='table'>
                  <thead>
                    <tr className='tr'>
                      <th className='th1'>Date</th>
                      <th className='th1'>Email</th>
                      <th className='th'>Amount</th>
                      <th className='th'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawals.map((withdrawal, i) => (
                      <tr className='tr' key={i}>
                        <td className='td1'>{`${withdrawal.date.substring(
                          0,
                          withdrawal.date.indexOf('T')
                        )}   ${withdrawal.date.substring(
                          withdrawal.date.indexOf('T') + 1,
                          withdrawal.date.lastIndexOf(':')
                        )}`}</td>
                        <td className='td1'>{withdrawal.email}</td>
                        <td className='td'>{withdrawal.amount}</td>
                        <td className='td'>
                          <button
                            className='button'
                            onClick={() => {
                              setSelectedDetails(withdrawal)
                              setPage('Details')
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )
      case 'Seen':
        return (
          <section className='transaction'>
            <div className='overlay'>
              <div className='first'>
                <button
                  className='button'
                  onClick={() => {
                    setPage('All')
                  }}
                >
                  ALL
                </button>
                <button
                  className='button'
                  onClick={() => {
                    setPage('Seen')
                  }}
                  style={{ background: '#333', color: '#fff' }}
                >
                  SEEN
                </button>
                <button
                  className='button'
                  onClick={() => {
                    setPage('NotSeen')
                  }}
                >
                  NOT SEEN
                </button>
              </div>
              <div className='overflow'>
                <table className='table'>
                  <thead>
                    <tr className='tr'>
                      <th className='th1'>Date</th>
                      <th className='th1'>Email</th>
                      <th className='th'>Amount</th>
                      <th className='th'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawals.map(
                      (withdrawal, i) =>
                        withdrawal.processed && (
                          <tr className='tr' key={i}>
                            <td className='td1'>{`${withdrawal.date.substring(
                              0,
                              withdrawal.date.indexOf('T')
                            )}   ${withdrawal.date.substring(
                              withdrawal.date.indexOf('T') + 1,
                              withdrawal.date.lastIndexOf(':')
                            )}`}</td>
                            <td className='td1'>{withdrawal.email}</td>
                            <td className='td'>{withdrawal.amount}</td>
                            <td className='td'>
                              <button
                                className='button'
                                onClick={() => {
                                  setSelectedDetails(withdrawal)
                                  setPage('Details')
                                }}
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )
      case 'NotSeen':
        return (
          <section className='transaction'>
            <div className='overlay'>
              <div className='first'>
                <button
                  className='button'
                  onClick={() => {
                    setPage('All')
                  }}
                >
                  ALL
                </button>
                <button
                  className='button'
                  onClick={() => {
                    setPage('Seen')
                  }}
                >
                  SEEN
                </button>
                <button
                  className='button'
                  onClick={() => {
                    setPage('NotSeen')
                  }}
                  style={{ background: '#333', color: '#fff' }}
                >
                  NOT SEEN
                </button>
              </div>
              <div className='overflow'>
                <table className='table'>
                  <thead>
                    <tr className='tr'>
                      <th className='th1'>Date</th>
                      <th className='th1'>Email</th>
                      <th className='th'>Amount</th>
                      <th className='th'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawals.map(
                      (withdrawal, i) =>
                        !withdrawal.processed && (
                          <tr className='tr' key={i}>
                            <td className='td1'>{`${withdrawal.date.substring(
                              0,
                              withdrawal.date.indexOf('T')
                            )}   ${withdrawal.date.substring(
                              withdrawal.date.indexOf('T') + 1,
                              withdrawal.date.lastIndexOf(':')
                            )}`}</td>
                            <td className='td1'>{withdrawal.email}</td>
                            <td className='td'>{withdrawal.amount}</td>
                            <td className='td'>
                              <button
                                className='button'
                                onClick={() => {
                                  setSelectedDetails(withdrawal)
                                  setPage('Details')
                                }}
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )
      case 'Details':
        return (
          <div className='UserDetails'>
            <p
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: '20px 50px',
              }}
              onClick={() => {
                setPage('All')
              }}
            >
              {`< Back`}
            </p>
            <section className='description'>
              <h1>Withdrawal Details</h1>
            </section>
            <section className='user'>
              <div className='text'>
                <p className='p-tag'>Email</p>
                <h1 className='h1-tag'>{selectedDetails.email}</h1>
              </div>
              <div className='text'>
                <p className='p-tag'>Type</p>
                <h1 className='h1-tag'>{selectedDetails.type}</h1>
              </div>
              <div className='text'>
                <p className='p-tag'>Amount</p>
                <h1 className='h1-tag'>{selectedDetails.amount}</h1>
              </div>
              {selectedDetails.type === 'BANK' && (
                <>
                  <div className='text'>
                    <p className='p-tag'>Account Name</p>
                    <h1 className='h1-tag'>{selectedDetails.account_name}</h1>
                  </div>
                  <div className='text'>
                    <p className='p-tag'>Account Number</p>
                    <h1 className='h1-tag'>{selectedDetails.account_number}</h1>
                  </div>
                  <div className='text'>
                    <p className='p-tag'>Bank Name</p>
                    <h1 className='h1-tag'>{selectedDetails.bank_name}</h1>
                  </div>
                </>
              )}
              {selectedDetails.type === 'BTC' && (
                <>
                  <div className='text'>
                    <p className='p-tag'>Full Name</p>
                    <h1 className='h1-tag'>{selectedDetails.full_name}</h1>
                  </div>
                  <div className='text'>
                    <p className='p-tag'>BTC Address</p>
                    <h1 className='h1-tag'>{selectedDetails.btc_address}</h1>
                  </div>
                </>
              )}
              {selectedDetails.type === 'PAYPAL' && (
                <>
                  <div className='text'>
                    <p className='p-tag'>Full Name</p>
                    <h1 className='h1-tag'>{selectedDetails.full_name}</h1>
                  </div>
                  <div className='text'>
                    <p className='p-tag'>PayPal Email</p>
                    <h1 className='h1-tag'>{selectedDetails.paypal_email}</h1>
                  </div>
                </>
              )}
              <div className='text'>
                <p className='p-tag'>Processed</p>
                <h1 className='h1-tag'>
                  {selectedDetails.processed ? 'True' : 'False'}
                </h1>
              </div>
              <section className='daily'>
                {!selectedDetails.processed && (
                  <button className='user-button' onClick={processWithdrawal}>
                    {formLoading ? '....' : 'Mark As Seen'}
                  </button>
                )}
              </section>
            </section>
          </div>
        )
      default:
        return <div>No page to display</div>
    }
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/withdraw`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWithdrawals(data.withdrawals)
          setLoading(false)
        } else {
          logOut()
          setLoading(false)
          history.push('/admin')
        }
      })
      .catch((err) => {
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [formLoading])
  return loading ? (
    <Loading />
  ) : (
    <div className='admin-withdrawal'>
      {notify.display && (
        <Notification
          type={notify.type}
          message={notify.message}
          closeNotify={closeNotifiaction}
        />
      )}
      <Navigation
        page='AdminDashboard'
        adminDashPage='Withdrawals'
        logAdminOut={logOut}
      />
      {displayPage()}
    </div>
  )
}

export default AdminWithdrawal
