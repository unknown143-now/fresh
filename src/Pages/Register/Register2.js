import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './Register2.scss'

function Register2({ notify }) {
  const [formLoading, setFormLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  const history = useHistory()
  const password = useRef({})
  password.current = watch('password', '')

  const onRegister = (formData) => {
    window.scrollTo({ top: 0 })
    setFormLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        email: formData.email.toLowerCase(),
        role: 'Client',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          notify('success', data.message)
          setFormLoading(false)
          setTimeout(() => {
            history.push('/login')
          }, 2000)
        } else {
          notify('error', data.message)
          setFormLoading(false)
        }
      })
      .catch((err) => {
        notify('error', 'An error occured')
        setFormLoading(false)
      })
  }

  return (
    <div className='register2'>
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
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onRegister)}>
            <div className='wrapper-reg'>
              <div className='log-card'>
                <p>First Name</p>
                <input
                  type='text'
                  id=''
                  name='firstname'
                  {...register('firstname', {
                    required: 'First Name is required',
                  })}
                />
                {errors.firstname && (
                  <h6 className='vError'>{errors.firstname.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Last Name</p>
                <input
                  type='text'
                  id=''
                  name='lastname'
                  {...register('lastname', {
                    required: 'Last Name is required',
                  })}
                />
                {errors.lastname && (
                  <h6 className='vError'>{errors.lastname.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Email Address</p>
                <input
                  type='email'
                  id=''
                  name='email'
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <h6 className='vError'>{errors.email.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>City</p>
                <input
                  type='text'
                  id=''
                  name='city'
                  {...register('city', { required: 'City is required' })}
                />
                {errors.city && (
                  <h6 className='vError'>{errors.city.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Postal Code</p>
                <input
                  type='text'
                  id=''
                  name='postal'
                  {...register('postal', {
                    required: 'Postal/Zip Code is required',
                  })}
                />
                {errors.postal && (
                  <h6 className='vError'>{errors.postal.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p> State</p>
                <input
                  type='text'
                  id=''
                  name='state'
                  {...register('state', { required: 'State is required' })}
                />
                {errors.state && (
                  <h6 className='vError'>{errors.state.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p> Country</p>
                <input
                  type='text'
                  id=''
                  name='country'
                  {...register('country', { required: 'Country is required' })}
                />
                {errors.country && (
                  <h6 className='vError'>{errors.country.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Phone Number</p>
                <input
                  type='tel'
                  id=''
                  name='phone'
                  {...register('phone', {
                    required: 'Phone Number is required',
                    pattern: {
                      value: /^(?:[+\d].*\d|\d)$/,
                      message: 'Phone Number must be in international format',
                    },
                  })}
                />
                {errors.phone && (
                  <h6 className='vError'>{errors.phone.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Referral Email (optional)</p>
                <input
                  type='email'
                  id=''
                  name='refemail'
                  {...register('refemail')}
                />{' '}
                {errors.refemail && (
                  <h6 className='vError'>{errors.refemail.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Password</p>
                <input
                  type='password'
                  name='password'
                  {...register('password', {
                    required: 'Provide a password',
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                    pattern: {
                      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                      message:
                        'Passwords have to contain at least one uppercase and one lower case character and a number',
                    },
                  })}
                />
                {errors.password && (
                  <h6 className='vError'>{errors.password.message}</h6>
                )}
              </div>
              <div className='log-card'>
                <p>Confirm Password</p>
                <input
                  type='password'
                  name='confirm_password'
                  {...register('confirm_password', {
                    required: 'You must re-enter your password',
                    validate: (value) =>
                      value === password.current ||
                      'The passwords do not match',
                  })}
                />
                {errors.confirm_password && (
                  <h6 className='vError'>{errors.confirm_password.message}</h6>
                )}
              </div>
            </div>
            <div className='df-card'>
              <p className='difgf'>
                Already have an account <Link to='/login'>Login</Link>
              </p>
            </div>
            <button>{formLoading ? '.....' : 'Sign up'}</button>
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

export default Register2
