import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo2 from '../../images/logo (2).png';


const BtcWithdrawal = ({ setPage, onNotify, user, refreshPage })=>{
    const [formLoading, setFormLoading] = useState(false)

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const onSubmitRequest = (formData)=>{
        setFormLoading(true);
        if(Number(formData.amount) > Number(user.amount)){
            setFormLoading(false);
            onNotify("error", "Insufficent balance. Amount requested is more than your wallet balance")
        }else{
            fetch(`${process.env.REACT_APP_API_URL}/user/withdraw`, {
                method: 'post',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify({formData, email: user.email, type: "BTC"})
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.success){
                    onNotify("success", data.message)
                    setFormLoading(false)
                    setTimeout(()=>{
                        refreshPage()
                    }, 3000)
                }else{
                    onNotify("error", data.message)
                    setFormLoading(false)
                }
            })
            .catch(err=>{
                console.log(err);
                onNotify("error", "An error occured")
                setFormLoading(false);
            })
        }
    }

    return(
        <div>
            <section className="login">
                <p
                    style ={{cursor: "pointer", color: "white", textDecoration: "underline", padding: "20px 50px", width: "100%"}}
                    onClick = {()=>{
                        setPage("Home")
                    }}
                >
                    {`< Back`}
                </p>
                <div className="overlay">
                    <div className="logo">
                        <div className="over">
                            <img className="img" src={logo2} alt=""/>
                        </div>
                    </div>
                    <form className="form" onSubmit={handleSubmit(onSubmitRequest)}>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Full Name" 
                                name="fullName"
                                {...register('fullName', { required: 'Full Name is required' })}
                            /><br/>
                            {errors.fullName && <h6 className = 'vError'>{errors.fullName.message}</h6>}
                        </div>
                        <div className="input-wrapper">
                            <input 
                                className="input" 
                                type="number" 
                                placeholder="Amount" 
                                name="amount"
                                {...register('amount', { required: 'Amount is required' })}
                            /><br/>
                            {errors.amount && <h6 className = 'vError'>{errors.amount.message}</h6>}
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
                                placeholder="Btc Wallet Address" 
                                name="btcWalletAddress"
                                {...register('btcWalletAddress', { required: 'Btc Wallet Address Code is required' })}
                            /><br/>
                            {errors.btcWalletAddress && <h6 className = 'vError'>{errors.btcWalletAddress.message}</h6>}
                        </div>
                        <div className="button-wrapper">
                            <input className="button" type="submit" value={formLoading?".....": "Withdraw"}/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default BtcWithdrawal;