import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo1 from '../../images/logo.png'
import { ReactComponent as Menu } from '../../svg/bars-solid.svg'
import { ReactComponent as Wallet } from '../../svg/wallet-solid.svg'
import './Navigation.css'

const Navigation = ({
  page,
  dashpage,
  adminDashPage,
  logOut,
  logAdminOut,
  amount,
}) => {
  const [navOpen, setNavOpen] = useState(false)
  console.log(amount)
  const history = useHistory()

  const openNav = () => {
    if (navOpen) {
      setNavOpen(false)
    } else {
      setNavOpen(true)
    }
  }

  const handleLogout = () => {
    logOut()
    history.push('/login')
  }

  const handleAdminLogout = () => {
    logAdminOut()
    history.push('/admin')
  }

  return (
    <div
      className={`nav ${
        navOpen ? (page === 'Dashboard' ? 'dash-collapse' : 'collapse') : ''
      }`}
    >
      <div className='nav-menu'>
        <div className='top-nav'>
          <div className='logo'>
            <img className='img1' src={logo1} alt='' />
          </div>
          <div className='toggle-icon' onClick={openNav}>
            <div className='menu-icon'>
              <Menu className='drop-icon' />
            </div>
          </div>
        </div>
        <div className='nav-list'>
          {page === 'Dashboard' && (
            <div className='nav-row'>
              <Link className='list' to='/'>
                Home
              </Link>
              <Link
                className={`list ${dashpage === 'Dashboard' ? 'active' : ''}`}
                to='/dashboard'
              >
                Dashboard
              </Link>
              <Link
                className={`list ${
                  dashpage === 'Transactions' ? 'active' : ''
                }`}
                to='/dashboard/transactions'
              >
                Transactions
              </Link>
              <Link
                className={`list ${dashpage === 'Card' ? 'active' : ''}`}
                to='/dashboard/card'
              >
                Active Debit Card
              </Link>
              <Link
                className={`list ${dashpage === 'Withdrawal' ? 'active' : ''}`}
                to='/dashboard/withdrawal'
              >
                Withdrawal
              </Link>
              <Link
                className={`list ${
                  dashpage === 'connect-wallet' ? 'active' : ''
                }`}
                to='/dashboard/connect-wallet'
              >
                Connect-wallet
              </Link>
              <span className='list' onClick={handleLogout}>
                Logout
              </span>
              <Link to='/dashboard/transactions' className='list cash'>
                {' '}
                <Wallet className='img' />
                {`$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
              </Link>
            </div>
          )}
          {page !== 'Dashboard' && page !== 'AdminDashboard' && (
            <div className='nav-row'>
              <Link
                className={`list ${page === 'Home' ? 'active' : ''}`}
                to='/'
              >
                Home
              </Link>
              <Link
                className={`list ${page === 'Login' ? 'active' : ''}`}
                to='/login'
              >
                Login
              </Link>
              <Link
                className={`list ${page === 'Register' ? 'active' : ''}`}
                to='/register'
              >
                Register
              </Link>
            </div>
          )}
          {page === 'AdminDashboard' && (
            <div className='nav-row'>
              <Link className='list' to='/'>
                Home
              </Link>
              <Link
                className={`list ${
                  adminDashPage === 'AdminDashboard' ? 'active' : ''
                }`}
                to='/admin/dashboard'
              >
                Admin Dashboard
              </Link>
              <Link
                className={`list ${
                  adminDashPage === 'Withdrawals' ? 'active' : ''
                }`}
                to='/admin/Withdrawals'
              >
                Users Withdrawal
              </Link>
              <span className='list' onClick={handleAdminLogout}>
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation
