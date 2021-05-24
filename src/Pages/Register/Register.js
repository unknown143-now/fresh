import React, { useState, useRef }from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navigation from '../../Components/Navigation/Navigation';
import logo2 from '../../images/logo (2).png';
import './Register.css';

const Register = ()=>{
    const [formLoading, setFormLoading] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const history = useHistory();
    const password = useRef({});
    password.current = watch('password', '');

    const onRegister = (formData)=>{
        window.scrollTo({top: 0})
        setFormLoading(true)
        setRegisterError('')
        setRegisterSuccess('')
        fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
			method: 'post',
			headers: {'content-Type': 'application/json'},
			body: JSON.stringify(formData)
		})
		.then(res=> res.json())
		.then(data=> {
			if(data.success){
                setRegisterSuccess(data.message)
                setFormLoading(false)
                setTimeout(()=>{
                    history.push("/login")
                }, 2000)
			}else{
            	setRegisterError(data.message)
                setFormLoading(false)
			}
		})
        .catch(err=>{
            console.log(err);
            setRegisterError("An error occured")
            setFormLoading(false);
        })  
    }


    return(
        <div className="Register">
            <Navigation page='Register'/>
            <section className="login">
                <div className="overlay">
                    <div className="logo">
                        <div className="over">
                            <img className="img" src={logo2} alt=""/>
                        </div>
                    </div>
                    <div className="authError">{registerError}</div>
                    <div className="authSuccess">{registerSuccess}</div>
                    <form className="form" onSubmit={handleSubmit(onRegister)}>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="First Name" 
                                name="firstname"
                                {...register('firstname', { required: 'First Name is required' })}
                            /><br/>
                            {errors.firstname && <h6 className = 'vError'>{errors.firstname.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastname"
                                {...register('lastname', { required: 'Last Name is required' })}
                            /><br/>
                            {errors.lastname && <h6 className = 'vError'>{errors.lastname.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="email" 
                                placeholder="Email-address" 
                                name="email"
                                {...register('email', { required: 'Email is required' })}
                            /><br/>
                            {errors.email && <h6 className = 'vError'>{errors.email.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="City" 
                                name="city"
                                {...register('city', { required: 'City is required' })}
                            /><br/>
                            {errors.city && <h6 className = 'vError'>{errors.city.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Postal/Zip Code" 
                                name="postal"
                                {...register('postal', { required: 'Postal/Zip Code is required' })}
                            /><br/>
                            {errors.postal && <h6 className = 'vError'>{errors.postal.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="State" 
                                name="state"
                                {...register('state', { required: 'State is required' })}
                            /><br/>
                            {errors.state && <h6 className = 'vError'>{errors.state.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Country" 
                                name="country"
                                {...register('country', { required: 'Country is required' })}
                            /><br/>
                            {errors.country && <h6 className = 'vError'>{errors.country.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="tel" 
                                placeholder="Phone Number" 
                                name="phone"
                                {...register('phone', { required: 'Phone Number is required' })}
                            /><br/>
                            {errors.phone && <h6 className = 'vError'>{errors.phone.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="email" 
                                placeholder="Referral Email" 
                                name="refemail"
                                {...register('refemail')}
                            /><br/>
                            {errors.refemail && <h6 className = 'vError'>{errors.refemail.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input
                                className="input" 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                {...register("password", { required: 'Provide a password' })}
                            /><br/>
                            {errors.password && <h6 className = 'vError'>{errors.password.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="password" 
                                placeholder="Confirm Password" 
                                name="confirm_password"
                                {...register("confirm_password", {
                                    required: 'You must re-enter your password',
                                    validate: (value) =>
                                        value === password.current || 'The passwords do not match',
                                })}
                            /><br/>
                            {errors.confirm_password && <h6 className = 'vError'>{errors.confirm_password.message}</h6>}
                        </div>
                        <div className="button-wrapper">
                            <input className="button" type="submit" value={formLoading?".....": "Sign up"}/>
                        </div>
                        
                        <div className="switch2">
                            <p className="p-tag">Already have an account?</p>
                            <Link className="a-tag" to="/login" >Sign In</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register;