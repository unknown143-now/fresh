import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Loading from "./Components/Loading/Loading";



const ProtectedRoute = ({path, exact, auth, Comp, redirectUrl, ...props})=>{
  if(auth){
      return(
          <Route
              path = {path}
              exact = {exact}
              render = {(otherProps)=>(
                  <Comp
                      {...otherProps}
                      {...props}
                  />
              )}
          />
      )
  }
  return(<Redirect to = {redirectUrl || '/'}/>)
}

function App (){
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)
    const [userObj, setUserObj] = useState()

    
    const logUserIn = (user)=>{
        if(user.remember_me){
            localStorage.setItem('userId', user.id)
        }
        sessionStorage.setItem('userId', user.id)
        setUserObj(user)
        setLoggedIn(true)
    }

    const logOut = ()=>{
        localStorage.removeItem('userId')
        sessionStorage.removeItem('userId')
        setLoggedIn(false)
        setUserObj("")
    }

    const logAdminIn = ()=>{
        setAdminLoggedIn(true)
    }

    const logAdminOut = ()=>{
        // history.push('/admin')
        setAdminLoggedIn(false)
    }

    useEffect(()=>{
        const getUserProfile = (userId)=>{
            fetch(`${process.env.REACT_APP_API_URL}/user/profile/${userId}`)
            .then(res=> res.json())
            .then(data=> {
                if(data.user){
                    logUserIn(data.user)
                    setLoading(false)
                }else{
                    logOut()
                    console.log('not found')
                    setLoading(false)
                }
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
            })
        }


        const userId = sessionStorage.getItem('userId')

        if(userId){
            getUserProfile(userId)
        }else{
            setLoading(false)
        }

        // eslint-disable-next-line
    }, [])

    return(
        loading?
        <Loading/>
        :
        <Router>
            <Switch>
                <Route
                    path = '/'
                    exact
                    render = {(props)=>(
                        <Home
                            {...props}
                        />
                    )}
                />
                <Route
                    path = "/login"
                    exact
                    render = {(props)=>(
                        <Login
                            {...props}
                            logUserIn = {logUserIn}
                            logOut = {logOut}
                        />
                    )}
                />
                <Route
                    path = '/register'
                    exact
                    render = {(props)=>(
                        <Register
                            {...props}
                        />
                    )}
                />
                <ProtectedRoute
                    path = '/dashboard'
                    exact
                    auth = {loggedIn}
                    Comp = {Dashboard}
                    redirectUrl = '/login'
                    userDetails = {userObj}
                    setUserDetails = {setUserObj}
                    logOut = {logOut}
                />
                <ProtectedRoute
                    path = '/dashboard/transaction'
                    exact
                    auth = {loggedIn}
                    Comp = {Dashboard}
                    redirectUrl = '/login'
                    userDetails = {userObj}
                    setUserDetails = {setUserObj}
                    logOut = {logOut}
                />
                <ProtectedRoute
                    path = '/dashboard/card'
                    exact
                    auth = {loggedIn}
                    Comp = {Dashboard}
                    redirectUrl = '/login'
                    userDetails = {userObj}
                    setUserDetails = {setUserObj}
                    logOut = {logOut}
                />
                <ProtectedRoute
                    path = '/dashboard/withdrawal'
                    exact
                    auth = {loggedIn}
                    Comp = {Dashboard}
                    redirectUrl = '/login'
                    userDetails = {userObj}
                    setUserDetails = {setUserObj}
                    logOut = {logOut}
                />
                {/* <Route
                    path = '/admin'
                    exact
                    render = {(props)=>(
                        <AdminLogin
                            {...props}
                            logAdminIn = {logAdminIn}
                        />
                    )}
                />
                <ProtectedRoute
                    path = '/admin/dashboard'
                    exact
                    auth = {adminLoggedIn}
                    Comp = {AdminDashboard}
                    logOut = {logAdminOut}
                /> */}
                <Redirect to='/'></Redirect>
            </Switch>
        </Router>
    ) 
}


export default App;