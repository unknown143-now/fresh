import React from 'react';
import { ReactComponent as WhatsappLogo } from '../../svg/whatsapp-brands.svg';
import './Footer.css';


const Footer = ()=>{
    return(
        <div className="Footer">
            <div className="cryptolive-wrapper">
                <div className="cryptolive">
                    <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no" title="crypto live" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border:0, margin:0, padding:0 }}/>
                </div>
            </div>
            <footer className="foot">Copyright &copy; Swift Business Pay Pro</footer>
            <a href="http://wa.me/79058423055">
                <div className="whatsapp">
                    <WhatsappLogo className="img"/>
                </div>
            </a>
        </div>
    )
}

export default Footer;