import React, { useEffect, useState } from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./Transactions.css";

const Transactions = ({userDetails, logOut})=>{

    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/user/transactions/${userDetails.email}`)
            .then(res=> res.json())
            .then(data=> {
                if(data.success){
                    setTransactions(data.transactions)
                }
            })
            .catch(err=>{
                console.log(err)
            })
    // eslint-disable-next-line
    }, [])
    
    return(
        <div className="Dashboard">
            <Navigation 
                page='Dashboard' 
                dashpage='Transactions' 
                logOut={logOut}
                amount={userDetails.amount}
            />
            <section className="transaction">
                <div className="overlay">
                    <div className="first">
                        <h1>User's Transactions</h1>
                    </div>
                    <div className="overflow">
                        <table className="table">
                            <thead>
                                <tr className="tr">
                                    <th className="th1">Date</th>
                                    <th className="th">Type</th>
                                    <th className="th1">Details</th>
                                    <th className="th">Balance Before</th>
                                    <th className="th">Amount</th>
                                    <th className="th">Balance After</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, i)=>(
                                    <tr className="tr" key = {i}>
                                        <td className="td1">{`${transaction.date.substring(0, transaction.date.indexOf("T"))}   ${transaction.date.substring(transaction.date.indexOf("T")+1, transaction.date.lastIndexOf(":"))}`}</td>
                                        <td className="td">{transaction.type}</td>
                                        <td className="td1">{transaction.details}</td>
                                        <td className="td">{`$${transaction.balance_before}`}</td>
                                        <td className="td">{`$${transaction.amount}`}</td>
                                        <td className="td">{`$${transaction.balance_after}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Transactions;