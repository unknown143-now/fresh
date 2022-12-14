import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import logo2 from '../../images/logo (2).png'

const BankTransfer = ({ setPage, user, refreshPage, notific }) => {
  const [formLoading, setFormLoading] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmitRequest = (formData) => {
    setFormLoading(true)
    if (Number(formData.amount) > Number(user.amount)) {
      setFormLoading(false)
      notific(
        'error',
        'Insufficent balance. Amount requested is more than your wallet balance'
      )
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/user/withdraw`, {
        method: 'post',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ formData, email: user.email, type: 'BANK' }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            notific('success', data.message)
            setFormLoading(false)
            setTimeout(() => {
              refreshPage()
            }, 3000)
          } else {
            notific('error', data.message)
            setFormLoading(false)
          }
        })
        .catch((err) => {
          notific('error', 'An error occured')
          setFormLoading(false)
        })
    }
  }

  return (
    <div>
      <section className='withdraw-transfer'>
        <div className='overlay'>
          <button
          className='home-btn'
            onClick={() => {
              setPage('Home')
            }}
          >
           {' <-'} Back
          </button>
          <form className='form' onSubmit={handleSubmit(onSubmitRequest)}>
            <div className='with-wrap'>
              <div className='input-wrapper'>
                <p>Amount</p>
                <input
                  className='input'
                  type='number'
                  placeholder='Amount'
                  name='amount'
                  {...register('amount', { required: 'Amount is required' })}
                />
                <br />
                {errors.amount && (
                  <h6 className='vError'>{errors.amount.message}</h6>
                )}
              </div>
              <div className='input-wrapper'>
                <p>Email Adress</p>

                <input
                  className='input'
                  type='email'
                  placeholder='Email-address'
                  name='email'
                  {...register('email', { required: 'Email is required' })}
                />
                <br />
                {errors.email && (
                  <h6 className='vError'>{errors.email.message}</h6>
                )}
              </div>
              <div className='input-wrapper'>
                <p>Bank Name</p>

                <input
                  className='input'
                  type='text'
                  placeholder='Bank Name'
                  name='bankName'
                  {...register('bankName', {
                    required: 'Bank Name is required',
                  })}
                />
                <br />
                {errors.bankName && (
                  <h6 className='vError'>{errors.bankName.message}</h6>
                )}
              </div>
              <div className='input-wrapper'>
                <p>Account Name</p>

                <input
                  className='input'
                  type='text'
                  placeholder='Account Name'
                  name='accountName'
                  {...register('accountName', {
                    required: 'Account Name Code is required',
                  })}
                />
                <br />
                {errors.accountName && (
                  <h6 className='vError'>{errors.accountName.message}</h6>
                )}
              </div>
              <div className='input-wrapper'>
                <p>Account Number</p>

                <input
                  className='input'
                  type='text'
                  placeholder='Account Number'
                  name='accountNumber'
                  {...register('accountNumber', {
                    required: 'Account Number is required',
                  })}
                />
                <br />
                {errors.accountNumber && (
                  <h6 className='vError'>{errors.accountNumber.message}</h6>
                )}
              </div>
            </div>
            <div className='button-wrapper'>
              <input
                className='button'
                type='submit'
                value={formLoading ? '.....' : 'Withdraw'}
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BankTransfer
