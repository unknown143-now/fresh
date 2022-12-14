import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Home2 from './Pages/Home/Home2'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Transaction from './Pages/Transactions/Transactions'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import Card from './Pages/Card/Card'
import Withdrawal from './Pages/Withdrawal/Withdrawal'
import Connect from './Pages/Connect/Connect'
import AdminWithdrawal from './Pages/AdminWithdrawal/AdminWithdrawal'
import Loading from './Components/Loading/Loading'
import Login2 from './Pages/Login/Login2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register2 from './Pages/Register/Register2'
import Payment from './Pages/Home/Components/Payment/Payment'

const ProtectedRoute = ({ path, exact, auth, Comp, redirectUrl, ...props }) => {
  if (auth) {
    return (
      <Route
        path={path}
        exact={exact}
        render={(otherProps) => <Comp {...otherProps} {...props} />}
      />
    )
  }
  return <Redirect to={redirectUrl || '/'} />
}

function App() {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState({})

  const notify = (type, message) => {
    if (type === 'info') {
      toast.info(message)
    }
    if (type === 'success') {
      toast.success(message)
    }
    if (type === 'warn') {
      toast.warn(message)
    }
    if (type === 'error') {
      toast.error(message)
    }
  }
  const logUserIn = (user) => {
    if (user.remember_me) {
      localStorage.setItem('userId', user.id)
    }
    sessionStorage.setItem('userId', user.id)
    setUserObj(user)
    setLoggedIn(true)
  }

  const logOut = () => {
    localStorage.removeItem('userId')
    sessionStorage.removeItem('userId')
    setLoggedIn(false)
    setUserObj('')
  }

  const logAdminIn = () => {
    setAdminLoggedIn(true)
  }

  const logAdminOut = () => {
    setAdminLoggedIn(false)
  }

  const refreshPage = () => {
    window.location.reload(true)
  }

  useEffect(() => {
    const getUserProfile = (userId) => {
      fetch(`${process.env.REACT_APP_API_URL}/user/profile/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            logUserIn(data.user)
            setLoading(false)
          } else {
            logOut()
            setLoading(false)
          }
        })
        .catch((err) => {
          setLoading(false)
        })
    }

    const userId = sessionStorage.getItem('userId')

    if (userId) {
      getUserProfile(userId)
    } else {
      setLoading(false)
    }

    // eslint-disable-next-line
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <Router>
      <ToastContainer
        position='top-right'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route path='/old' exact render={(props) => <Home {...props} />} />
        <Route path='/' exact>
          <Home2 />
        </Route>
        <Route path='/payment/:name' exact>
          <Payment />
        </Route>
        <Route
          path='/login'
          exact
          render={(props) => (
            <Login2
              {...props}
              role='Client'
              logUserIn={logUserIn}
              logOut={logOut}
              notify={notify}
            />
          )}
        />
        <Route
          path='/old-login'
          exact
          render={(props) => (
            <Login
              {...props}
              role='Client'
              logUserIn={logUserIn}
              logOut={logOut}
            />
          )}
        />
        <Route
          path='/old-register'
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path='/register'
          exact
          render={(props) => <Register2 {...props} notify={notify} />}
        />
        <ProtectedRoute
          path='/dashboard'
          exact
          auth={loggedIn}
          Comp={Dashboard}
          redirectUrl='/login'
          userDetails={userObj}
          setUserDetails={setUserObj}
          logOut={logOut}
          refreshPage={refreshPage}
        />
        <ProtectedRoute
          path='/dashboard/transactions'
          exact
          auth={loggedIn}
          Comp={Transaction}
          redirectUrl='/login'
          userDetails={userObj}
          setUserDetails={setUserObj}
          logOut={logOut}
          refreshPage={refreshPage}
        />
        <ProtectedRoute
          path='/dashboard/card'
          exact
          auth={loggedIn}
          Comp={Card}
          redirectUrl='/login'
          userDetails={userObj}
          setUserDetails={setUserObj}
          logOut={logOut}
          refreshPage={refreshPage}
        />
        <ProtectedRoute
          path='/dashboard/withdrawal'
          exact
          auth={loggedIn}
          Comp={Withdrawal}
          redirectUrl='/login'
          userDetails={userObj}
          setUserDetails={setUserObj}
          logOut={logOut}
          refreshPage={refreshPage}
          notific={notify}
        />
        <ProtectedRoute
          path='/dashboard/connect-wallet'
          exact
          auth={loggedIn}
          Comp={Connect}
          redirectUrl='/login'
          userDetails={userObj}
          setUserDetails={setUserObj}
          logOut={logOut}
          refreshPage={refreshPage}
          notific={notify}
        />
        <Route
          path='/admin'
          exact
          render={(props) => (
            <Login2 {...props} role='Admin' logAdminIn={logAdminIn} />
          )}
        />
        <ProtectedRoute
          path='/admin/dashboard'
          exact
          auth={adminLoggedIn}
          Comp={AdminDashboard}
          logOut={logAdminOut}
          notific={notify}
        />
        <ProtectedRoute
          path='/admin/withdrawals'
          exact
          auth={adminLoggedIn}
          Comp={AdminWithdrawal}
          logOut={logAdminOut}
          notific={notify}
        />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default App
