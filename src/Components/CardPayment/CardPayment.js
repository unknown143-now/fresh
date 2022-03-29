import React from 'react';
import { Link } from "react-router-dom";
import "./CardPayment.css";
import qr from "../../images/qrcode.jpg";


const CardPayment = ({setPage})=>{
    return(
        <section className="pay">
            <p
                style ={{cursor: "pointer", textDecoration: "underline", padding: "20px 50px"}}
                onClick = {()=>{
                    setPage("Home")
                }}
            >
                {`< Back`}
            </p>
            <div className="payment">
                <h2 className="text1">SCAN QR CODE OR COPY ADDRESS TO PAY</h2>
                <div className="image"><img src={qr} alt="" className="img"/></div>
                <div className="text2">
                    <div className="design">1B6ttH3E6PArDNijMcmmsvg7tbbk58WgqD</div>
                </div>
                <div className="text3">
                    <p>Note: Send a Proof of payment to the company's Email, to confirm Payment:- 
                        <Link to="mailto:proinvestment.supp@gmail.com" className="mail">
                            proinvestment.supp@gmail.com
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CardPayment;