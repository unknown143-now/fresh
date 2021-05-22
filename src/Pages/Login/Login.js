import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from "../../Components/Loading/Loading";
import Navigation from "../../Components/Navigation/Navigation";
import logo2 from "../../images/logo (2).png";
import "./Login.css";

const Login = ({ logUserIn, logOut })=>{
    const [loading, setLoading] = useState(true);
    
    const {
        register,
        handleSubmit,
        errors
    } = useForm();

    useEffect(()=>{
        const getUserProfile = (userId)=>{
            fetch(`${process.env.REACT_APP_API_URL}/user/profile/${userId}`)
            .then(res=> res.json())
            .then(data=> {
                if(data.id){
                    logUserIn(data)
                    setLoading(false)
                }else{
                    logOut()
                    console.log('not found')
                    setLoading(false)
                }
            })
            .catch(err=>{
                console.log(err)
                console.log('unable to access server')
                setLoading(false)
            })
        }


        const userId = localStorage.getItem('userId')

        if(userId){
            getUserProfile(userId)
        }else{
            setLoading(false)
        }

        // eslint-disable-next-line
    }, [])

    const onLogin = (userData)=>{
        console.log(userData)
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
                <form className="form" onSubmit={handleSubmit(onLogin)}>
                    <div>
                        <input 
                            className="input" 
                            type="email" 
                            placeholder="Email-address" 
                            name="email"
                            {...register('email', { required: 'Email is required' })}
                        /><br/>
                        {/* {errors.email && <h6 className = 'vError'>{errors.email.message}</h6>} */}
                    </div>
                    <div>
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            {...register('passwrod', { required: 'Enter a password' })}
                        /><br/>
                        {/* {errors.password && <h6 className = 'vError'>{errors.password.message}</h6>} */}
                    </div>
                    <div className="switch">
                        <div className="switch2">
                            <input
                                className="box"
                                type="checkbox" 
                                name="check"
                                {...register('check')}
                            /> 
                            <p>Remember Me</p>
                        </div>
                        <Link to="" className="side"> Forgot password?</Link>
                    </div>
                    <div>
                        <input className="button" type="submit" value="Sign In"/>
                    </div>
                    <div className="switch2">
                        <p className="p-tag">Don't have an account?</p>
                        <Link className="a-tag" to="/register">Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
      </div>
  )
}

export default Login;