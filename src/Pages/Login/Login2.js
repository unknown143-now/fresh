import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Loading from '../../Components/Loading/Loading'
import './Login2.scss'

function Login2({ role, logUserIn, logOut, logAdminIn, notify }) {
  const [loading, setLoading] = useState(true)
  const [formLoading, setFormLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const getUserProfile = (userId) => {
      fetch(`${process.env.REACT_APP_API_URL}/user/profile/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            logUserIn(data.user)
            history.push('/dashboard')
            setLoading(false)
          } else {
            logOut()
            history.push('/login')
            setLoading(false)
          }
        })
        .catch((err) => {
          setLoading(false)
        })
    }

    const userId = localStorage.getItem('userId')

    if (userId && role === 'Client') {
      getUserProfile(userId)
    } else {
      setLoading(false)
    }

    // eslint-disable-next-line
  }, [])
  const onLogin = (formData) => {
    setFormLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        // email: formData.email.toLowerCase(),
        email: 'unknow@gmail.com',
        role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user && role === 'Client') {
          setFormLoading(false)
          logUserIn({ ...data.user, remember_me: formData.remember_me })
          history.push('/dashboard')
        } else if (data.success && role === 'Admin') {
          setFormLoading(false)
          logAdminIn()
          history.push('/admin/dashboard')
        } else {
          notify('error', 'Redis erorr')
          setFormLoading(false)
        }
      })
      .catch((err) => {
        // notify('error', 'An error occured')
        setFormLoading(false)
      })
  }
  return loading ? (
    <Loading />
  ) : (
    <div className='login2'>
      <div className='wap'>
        <div className='log-head'>
          <h1>
            <span>Welcome To</span> <br /> <b>Pro Investment</b>
          </h1>
          <p>
            We always have a clear agenda to provide a ‘Reliable, Smoother,
            Secure and Speedy’ Payment solutions worldwide to our precious
            customers .
          </p>
        </div>
        <div className='log-top'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onLogin)}>
            <div className='log-card'>
              <p>Email Address</p>
              <input
                type='email'
                id=''
                name='email'
                required
                {...register('email')}
              />
            </div>
            <div className='log-card'>
              <p>Password</p>
              <input
                type='password'
                name='password'
                id=''
                required
                {...register('password')}
              />
            </div>
            <div className='log-card'>
              <p className='difgf'>
                Don't have an account <Link to='/register'>Register</Link>
              </p>
            </div>
            <button>{formLoading ? '.....' : 'Sign In'}</button>
          </form>
        </div>
      </div>
      <div class='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
      </div>
    </div>
  )
}

export default Login2
