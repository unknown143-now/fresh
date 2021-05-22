import React from 'react';
import { Link } from 'react-router-dom';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';
import { ReactComponent as WhatsappLogo } from '../../svg/whatsapp-brands.svg';
import Navigation from '../../Components/Navigation/Navigation';
import UseScript from '../../Components/UseScript/UseScript';
import './Home.css';




const Home = ()=>{
    UseScript('https://www.cryptohopper.com/widgets/js/script');

    return(
        <div className="Home">
            <Navigation page='Home'/>
            <section className="banner">
            <div className="banner-sub">
                <h3 className="h3">HOME OF INVESTMENT</h3>
                <div className="p"><p >You can instantly receive and send money to almost anyone anywhere in the world, anytime.</p></div>
                <h1 className="h1">SWIFT BUSINESS PAY PRO</h1>
                <div className="buttons">
                    <Link to="/register"><button className="btn one">Get Started</button></Link>
                    <Link to="/login"><button className="btn two">Login</button></Link>
                </div>
            </div>
            </section>
            <section className="second-section">
                <div className="overlay">
                    <h1 className="h1">WHY CHOOSE US</h1>
                    <div className="line"><div className="line2"></div></div>
                    <p className="p">We always ensure Trustful services which include minimum and very impressive Exchange rates, reliable Payment Solutions, a Highly secure, Safe and Transparent Experience along with the Fair Pricing. Moreover, we are linked with many other platforms such as paypal, bitcoin, western Union, Alipay etc. This aids the user to with respect to their funds using their any desired platform. Also, Free wallet to wallet transaction makes a better experience to send the funds.</p>
                </div>
            </section>
            <section className="third-section">
                <h1 className="h1">OUR PARTNERS</h1>
                <div className="line"><div className="line2"></div></div>
                <div className="partner-img">
                    <div className="div">
                        <img className="img" src={one} alt=""/>
                    </div>
                    <div className="div">
                        <img className="img" src={two} alt=""/>
                    </div>
                    <div className="div">
                        <img className="img" src={three} alt=""/>
                    </div>
                    <div className="div">
                        <img className="img" src={four} alt=""/>
                    </div>
                    <div className="div">
                        <img className="img" src={five} alt=""/>
                    </div>
                </div>

            </section>
            <section className="fourth-section">
                <div className="overlay">
                    <div className="sub-div">
                        <h1 className="h1"> WHAT WE DO</h1>
                        <div className="line"><div className="line2"></div></div>
                    </div>
                    <div className="second-sub-div">
                        <div className="small-box">
                            <p className="p1">01.</p>
                            <h1 className="h1"><span className="span">- </span> Approval</h1>
                            <p className="p2">Get your  SBP account  approved instantly and use it up-to $5000000 Monthly . Wallet to Wallet Transfer.</p>
                        </div>
                        <div className="small-box">
                            <p className="p1">02.</p>
                            <h1 className="h1"><span className="span">- </span> Make a Payment</h1>
                            <p className="p2">Stay in manage with simple, impervious and rapid payment methods, which include saved playing cards and your account balance.</p>
                        </div>
                        <div className="small-box">
                            <p className="p1">03.</p>
                            <h1 className="h1"><span className="span">- </span> Apply Online</h1>
                            <p className="p2">It will take a little bit of time to make Swift Business Pay Wallet and it will take all your payment details in one place. You can choose 30 currencies.</p>
                        </div>
                        <div className="big-box">
                            <p className="p1">04.</p>
                            <h1 className="h1"><span className="span">- </span> Our Aim</h1>
                            <p className="p2">We have clearcut goal to provide top notch Payment services with low interexchange fees, fair pricing, speedy transfer of payment and very secure data encryption to our customers. Thus , we have always aimed to make our customers ” financially Successful”</p>
                        </div>
                        <div className="big-box">
                            <p className="p1">05.</p>
                            <h1 className="h1"><span className="span">- </span> Our Mission</h1>
                            <p className="p2">We always have a clear agenda to provide a ‘Reliable, Smoother, Secure and Speedy’ Payment solutions worldwide to our precious customers .</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cryptohopper-web-widget" data-id="4"></div>
            <div className="cryptolive-wrapper">
                <div className="cryptolive">
                    <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no" title="crypto live" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border:0, margin:0, padding:0 }}/>
                </div>
            </div>
            <footer className="footer">Copyright &copy; Swift Business Pay Pro</footer>
            <a href="http://wa.me/79058423055">
                <div className="whatsapp">
                    <WhatsappLogo className="img"/>
                </div>
            </a>
        </div>
    )
}

export default Home;