import React, {useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from "../../Components/Loading/Loading";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import logo2 from "../../images/logo (2).png";
import "./Login.css";

const Login = ({ role, logUserIn, logOut, logAdminIn })=>{
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const history = useHistory();
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    useEffect(()=>{
        const getUserProfile = (userId)=>{
            fetch(`${process.env.REACT_APP_API_URL}/user/profile/${userId}`)
            .then(res=> res.json())
            .then(data=> {
                if(data.user){
                    logUserIn(data.user)
                    history.push("/dashboard")
                    setLoading(false)
                }else{
                    logOut()
                    history.push("/login")
                    console.log('not found')
                    setLoading(false)
                }
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
            })
        }


        const userId = localStorage.getItem('userId')

        if(userId && role === 'Client'){
            getUserProfile(userId)
        }else{
            setLoading(false)
        }

        // eslint-disable-next-line
    }, [])

    const onLogin = (formData)=>{
        setFormLoading(true)
        setLoginError('')
        fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
			method: 'post',
			headers: {'content-Type': 'application/json'},
			body: JSON.stringify({...formData, email: formData.email.toLowerCase(), role})
		})
		.then(res=> res.json())
		.then(data=> {
			if(data.user && role === "Client"){
                setFormLoading(false)
                logUserIn({...data.user, remember_me: formData.remember_me})
                history.push("/dashboard")
			}else if(data.success && role === "Admin"){
                setFormLoading(false)
                logAdminIn()
                history.push("/admin/dashboard")
            }else{
            	setLoginError(data.message)
                setFormLoading(false)
			}
		})
        .catch(err=>{
            console.log(err);
            setLoginError("An error occured")
            setFormLoading(false);
        })  
    }

  return(
      loading?
      <Loading/>
      :
      <div className="Login">
        <Navigation page='Login'/>
        <section className="login">
            <div className="overlay">
                <div className="logo">
                    <div className="over">
                        <img className="img" src={logo2} alt=""/>
                    </div>
                </div>
                { loginError && <div className="authError">{loginError}</div> }
                <form className="form" onSubmit={handleSubmit(onLogin)}>
                    <div className="input-wrapper">
                        <input 
                            className="input" 
                            type="email" 
                            placeholder="Email-address" 
                            name="email"
                            {...register('email', { required: 'Enter Email' })}
                        /><br/>
                        {errors.email && <h6 className = 'vError'>{errors.email.message}</h6>}
                    </div>
                    <div className="input-wrapper">
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            {...register('password', { required: 'Enter password' })}
                        /><br/>
                        {errors.password && <h6 className = 'vError'>{errors.password.message}</h6>}
                    </div>
                    <div className="switch">
                        <div className="switch2">
                            <input
                                className="box"
                                type="checkbox" 
                                name="remember_me"
                                {...register('remember_me')}
                            /> 
                            <p>Remember Me</p>
                        </div>
                        <Link to="" className="side"> Forgot password?</Link>
                    </div>
                    <div className="button-wrapper">
                        <input className="button" type="submit" value={formLoading?".....": "Sign In"}/>
                    </div>
                    <div className="switch2">
                        <p className="p-tag">Don't have an account?</p>
                        <Link className="a-tag" to="/register">Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Login;