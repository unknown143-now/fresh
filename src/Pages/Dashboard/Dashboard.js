import React from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import UseScript from "../../Components/UseScript/UseScript";
import Footer from "../../Components/Footer/Footer";
import "./Dashboard.css";

const Dashboard = ({userDetails, logOut})=>{
    UseScript("https://widget.coinlore.com/widgets/coinlore-list-widget.js")
    return(
        <div className="Dashboard">
            <Navigation 
                page='Dashboard' 
                dashpage='Dashboard' 
                logOut={logOut}
            />
            <section className="name">
                <h1>Hello There! {userDetails.firstname}</h1>
                <p className="p-tag">Each member have a unique email address to share 
                    with friends and family and receive a bonus, the bonus will be 
                    added on sucessful purchase of an active card. If any one sign-up 
                    with your email as a referer, $50 will be added to your wallet.
                </p>
            </section>
            <section className="dashboard-one">
                <div className="left">
                    <div className="first">
                        <h1 className="h1">Transactions</h1>
                        <p className="p-tag">Referers : <span>3</span></p>
                        <a className="a-tag" href="transaction.html">VIEW ALL</a>
                    </div>
                <table className="table">
                    <tr className="tr">
                        <th className="th">Date</th>
                        <th className="th">Type</th>
                        <th className="th">Details</th>
                        <th className="th">Amount</th>
                    </tr>
                    <tr className="tr">
                        <td className="td">2018-08-24 10:20 PM</td>
                        <td className="td">Credit</td>
                        <td className="td">Daily Returns</td>
                        <td className="td">$70.00</td>
                    </tr>
                    <tr className="tr">
                            <td className="td">2018-08-24 10:20 PM</td>
                            <td className="td">Credit</td>
                            <td className="td">Debit Card Purchase</td>
                            <td className="td">$1,000.00</td>
                        </tr>
                        <tr className="tr">
                            <td className="td">2018-08-24 10:20 PM</td>
                            <td className="td">Debit</td>
                            <td className="td">Withdraw</td>
                            <td className="td">$1,070.00</td>
                        </tr>
                        <tr className="tr">
                            <td className="td">2018-08-24 10:20 PM</td>
                            <td className="td">Credit</td>
                            <td className="td">Daily Returns</td>
                            <td className="td">$70.00</td>
                        </tr>
                        <tr className="tr">
                            <td className="td">2018-08-24 10:20 PM</td>
                            <td className="td">Credit</td>
                            <td className="td">Daily Returns</td>
                            <td className="td">$70.00</td>
                        </tr>
                    </table>
                </div>
                <div className="right">
                    <div 
                        className="coinlore-list-widget" 
                        data-mcurrency="usd" 
                        data-top="10" 
                        data-cwidth="100%" 
                        data-bcolor="#fff" 
                        data-coincolor="#428bca" 
                        data-pricecolor="#4c4c4c"
                    >
                    </div>
                </div>
            </section>
            <section className="btc">
                <div className="cryptochart-wrapper">
                    <div className="cryptochart">
                        <iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" title="crypto chart" width="100%" height="536px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border:0, margin:0, padding:0, lineHeight: 14 }}></iframe>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Dashboard;