import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import normalCard from '../../images/normal.png'
import classicCard from '../../images/classic.png'
import merchantCard from '../../images/merchant.png'
import eliteCard from '../../images/elite.png'
import './UserDetails.css'

const UserDetails = ({ selectedUser, notific, setPage }) => {
  const [userStatus, setUserStatus] = useState(selectedUser.status)
  const [loading, setLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [card, setCard] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm()

  const onActivateAccount = (formData) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/auth/activate`, {
      method: 'put',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        email: selectedUser.email,
        status: selectedUser.status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data.success) {
          notific('success', data.message)
          setUserStatus('ACTIVATED')
        } else {
          notific('error', 'Unable to activate Account')
        }
      })
      .catch((err) => {
        console.log(err)
        notific('error', 'An error occured')
        setLoading(false)
      })
  }

  const onDeactivateAccount = () => {
    setLoading(true)
    let deactivate = window.confirm(
      'Are you sure you want to deactivate this account'
    )
    if (deactivate) {
      fetch(`${process.env.REACT_APP_API_URL}/auth/profile`, {
        method: 'delete',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({
          email: selectedUser.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          if (data.success) {
            notific('success', data.message)
            setUserStatus('DEACTIVATED')
          } else {
            notific('error', 'Unable to deactivate Account')
          }
        })
        .catch((err) => {
          console.log(err)
          notific('error', 'An error occured')
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  const addBonus = (formData) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/user/bonus`, {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        email: selectedUser.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data.success) {
          notific('success', data.message)
        } else {
          notific('error', 'Unable to add Bonus')
        }
      })
      .catch((err) => {
        console.log(err)
        notific('error', 'An error occured')
        setLoading(false)
      })
  }

  const issueCard = (formData) => {
    setLoading(true)

    const cardList = ['NORMAL', 'CLASSIC', 'MERCHANT', 'ELITE']
    if (cardList.indexOf(card.type) !== -1) {
      setLoading(false)
      notific('error', 'This user already has an active card.')
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/user/card`, {
        method: 'post',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({
          type: formData.card,
          email: selectedUser.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          if (data.success) {
            notific('success', data.message)
          } else {
            notific('error', 'Unable to Issue Card')
          }
        })
        .catch((err) => {
          console.log(err)
          notific('error', 'An error occured')
          setLoading(false)
        })
    }
  }

  const deleteCard = () => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/user/card/${selectedUser.email}`, {
      method: 'delete',
      headers: { 'content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data.success) {
          notific('success', data.message)
          setPage('Dashboard')
        } else {
          notific('error', data.message)
        }
      })
      .catch((err) => {
        console.log(err)
        notific('error', 'An error occured')
        setLoading(false)
      })
  }

  const displayActiveCard = () => {
    switch (card.type) {
      case 'NORMAL':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={normalCard} alt='' />
            <section className='deactive'>
              <button className='user-button' onClick={deleteCard}>
                {loading ? '....' : 'Delete Card'}
              </button>
            </section>
          </div>
        )
      case 'CLASSIC':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={classicCard} alt='' />
            <section className='deactive'>
              <button className='user-button' onClick={deleteCard}>
                {loading ? '....' : 'Delete Card'}
              </button>
            </section>
          </div>
        )
      case 'MERCHANT':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={merchantCard} alt='' />
            <section className='deactive'>
              <button className='user-button' onClick={deleteCard}>
                {loading ? '....' : 'Delete Card'}
              </button>
            </section>
          </div>
        )
      case 'ELITE':
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>
            <img className='activecard' src={eliteCard} alt='' />
            <section className='deactive'>
              <button className='user-button' onClick={deleteCard}>
                {loading ? '....' : 'Delete Card'}
              </button>
            </section>
          </div>
        )
      default:
        return (
          <div className='activecard-wrapper'>
            <span>CARD: </span>No Actice Card
          </div>
        )
    }
  }

  useEffect(() => {
    Promise.all([
      fetch(
        `${process.env.REACT_APP_API_URL}/user/transactions/${selectedUser.email}`
      ),
      fetch(`${process.env.REACT_APP_API_URL}/user/card/${selectedUser.email}`),
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
  }, [loading])

  return (
    <div className='UserDetails'>
      <p
        style={{
          cursor: 'pointer',
          textDecoration: 'underline',
          padding: '20px 50px',
          color: '#cca354',
        }}
        onClick={() => {
          setPage('Dashboard')
        }}
      >
        {`< Back`}
      </p>
      <section className='description'>
        <h1>User Details</h1>
      </section>
      <section className='user'>
        <div className='text'>
          <p className='p-tag'>Firstname</p>
          <h1 className='h1-tag'>{selectedUser.firstname}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Lastname</p>
          <h1 className='h1-tag'>{selectedUser.lastname}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Email</p>
          <h1 className='h1-tag'>{selectedUser.email}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>City</p>
          <h1 className='h1-tag'>{selectedUser.city}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Postal Code</p>
          <h1 className='h1-tag'>{selectedUser.postal_code}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>State</p>
          <h1 className='h1-tag'>{selectedUser.state}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Country</p>
          <h1 className='h1-tag'>{selectedUser.country}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Phone number</p>
          <h1 className='h1-tag'>{selectedUser.phone}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Refree</p>
          <h1 className='h1-tag'>{selectedUser.referral_email}</h1>
        </div>
        <div className='text'>
          <p className='p-tag'>Referrals</p>
          <h1 className='h1-tag'>{selectedUser.referrals}</h1>
        </div>
      </section>
      <section className='board'>
        {userStatus === 'ACTIVATED' ? (
          <>
            <section className='user-activecard'>{displayActiveCard()}</section>
            <section
              className='transaction'
              style={{ height: '100%', minHeight: '0' }}
            >
              <div className='overlay'>
                <div className='first'>
                  <h1>User's Transactions</h1>
                </div>
                <div className='overflow'>
                  <table className='table'>
                    <thead>
                      <tr className='tr'>
                        <th className='th1'>Date</th>
                        <th className='th'>Type</th>
                        <th className='th1'>Details</th>
                        <th className='th'>Balance Before</th>
                        <th className='th'>Amount</th>
                        <th className='th'>Balance After</th>
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
                          <td className='td'>{transaction.balance_before}</td>
                          <td className='td'>{transaction.amount}</td>
                          <td className='td'>{transaction.balance_after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section className='bonus'>
              <p className='p-tag'>Enter Bonus</p>
              <form className='amount' onSubmit={handleSubmit(addBonus)}>
                <input
                  className='input'
                  type='number'
                  placeholder='Amount'
                  name='bonus'
                  {...register('bonus', { required: 'Enter bonus' })}
                />
                <br />
                {errors.bonus && (
                  <h6 className='vError'>{errors.bonus.message}</h6>
                )}
                <input
                  className='input'
                  type='text'
                  placeholder='details'
                  name='details'
                  {...register('details', { required: 'Enter details' })}
                />
                <br />
                {errors.details && (
                  <h6 className='vError'>{errors.details.message}</h6>
                )}
                <input
                  className='user-button'
                  type='submit'
                  value={loading ? '....' : 'Add Bonus'}
                />
              </form>
            </section>
            <section className='bonus'>
              <p className='p-tag'>Issue Card</p>
              <form className='amount' onSubmit={handleSubmit2(issueCard)}>
                <select
                  className='input'
                  name='card'
                  {...register2('card', { required: 'Select card' })}
                >
                  <option value=''>Select Card</option>
                  <option value='NORMAL'>NORMAL CARD</option>
                  <option value='CLASSIC'>CLASSIC CARD</option>
                  <option value='MERCHANT'>MERCHANT CARD</option>
                  <option value='ELITE'>ELITE CARD</option>
                </select>
                <br />
                {errors2.card && (
                  <h6 className='vError'>{errors2.card.message}</h6>
                )}
                <input
                  className='user-button'
                  type='submit'
                  value={loading ? '....' : 'Issue card'}
                />
              </form>
            </section>
            <section className='deactive'>
              <p className='p-tag'>Deactivate Account</p>
              <button className='user-button' onClick={onDeactivateAccount}>
                {loading ? '....' : 'Deactive Account'}
              </button>
            </section>
          </>
        ) : (
          <section className='daily'>
            <p className='p-tag'>Set daily returns</p>
            <form
              className='daily-input'
              onSubmit={handleSubmit(onActivateAccount)}
            >
              <input
                type='number'
                className='input'
                name='daily_returns'
                placeholder='Amount'
                {...register('daily_returns', {
                  required: 'Enter daily returns',
                })}
              />
              <br />
              {errors.daily_returns && (
                <h6 className='vError'>{errors.daily_returns.message}</h6>
              )}
              <input
                className='user-button'
                type='submit'
                value={loading ? '....' : 'Activate Account'}
              />
            </form>
          </section>
        )}
      </section>
    </div>
  )
}

export default UserDetails
