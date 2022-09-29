import React, { useState, useEffect } from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import CardPayment from "../../Components/CardPayment/CardPayment";
import Notification from "../../Components/Notification/Notification";
import Footer from "../../Components/Footer/Footer";
import normalCard from "../../images/normal.png";
import classicCard from "../../images/classic.png";
import merchantCard from "../../images/merchant.png";
import eliteCard from "../../images/elite.png";
import "./Card.css";

const Card = ({userDetails, logOut})=>{
    const [card, setCard] = useState({})

    const [page, setPage] = useState("Home");

    const [notify, setNotify] = useState({
        display: false,
        type: '',
        message: ''
    });

    const showNotification = (type, message)=>{
        window.scrollTo({top: 0})
        setNotify({
            display: true,
            type,
            message
        })
    }

    const closeNotifiaction = ()=>{
        setNotify({
            display: false,
            type: '',
            message: ''
        })
    }

    const onActivateCard = (type)=>{
        const cardList = ["NORMAL", "CLASSIC", "MERCHANT", "ELITE"]
        if(cardList.indexOf(card.type) !== -1){
            showNotification("error", "You have an active card. Use it before purchasing a new one")
        }else{
            setPage("Payment")
        }
    }

    const displayCardPage = ()=>{
        switch(page){
            case "Home":
                return(
                    <section className="debit-card">
                        <div className="card">
                            <div className="text1">NORMAL CARD</div>
                            <div className="image"><img className="img" src={normalCard} alt=""/></div>
                            <div className="text2"><h1>$150 USD</h1></div>
                            <div className="text3"><p>*$150 USD IN BITCOIN VALUE</p></div>
                            <div className="p-tag"><p>Withdrawal Limit $1,300</p></div>
                            <div className="p-tag"><p>To Get the Normal Card You Have to pay $150 USD In Bitcoin Value . The card purchase will be confirmed  Within 12 Hours, after which withdrawal can be made.</p></div>
                            <div>
                                <p onClick={()=>{onActivateCard("NORMAL")}}>
                                    <button  className="button">
                                        ACTIVATE
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text1">CLASSIC CARD</div>
                            <div className="image"><img className="img" src={classicCard} alt=""/></div>
                            <div className="text2"><h1>$250 USD</h1></div>
                            <div className="text3"><p>*$250 USD IN BITCOIN VALUE</p></div>
                            <div className="p-tag"><p>Withdrawal Limit $2,800</p></div>
                            <div className="p-tag"><p>To Get the Classic Card You Have to pay $250 USD In Bitcoin Value . The card purchase will be confirmed  Within 12 Hours, after which withdrawal can be made.</p></div>
                            <div>
                                <p onClick={()=>{onActivateCard("CLASSIC")}}>
                                    <button  className="button">
                                        ACTIVATE
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text1">MERCHANT CARD</div>
                            <div className="image"><img className="img" src={merchantCard} alt=""/></div>
                            <div className="text2"><h1>$500 USD</h1></div>
                            <div className="text3"><p>*$500 USD IN BITCOIN VALUE</p></div>
                            <div className="p-tag"><p>Withdrawal Limit $4,800</p></div>
                            <div className="p-tag"><p>To Get the Merchant Card You Have to pay $500 USD In Bitcoin Value . The card purchase will be confirmed  Within 12 Hours, after which withdrawal can be made.</p></div>
                            <div>
                                <p onClick={()=>{onActivateCard("MERCHANT")}}>
                                    <button  className="button">
                                        ACTIVATE
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text1">ELITE CARD</div>
                            <div className="image"><img className="img" src={eliteCard} alt=""/></div>
                            <div className="text2"><h1>$1000 USD</h1></div>
                            <div className="text3"><p>*$1000 USD IN BITCOIN VALUE</p></div>
                            <div className="p-tag"><p>Withdrawal Limit $6,000</p></div>
                            <div className="p-tag"><p>To Get the Elite Card You Have to pay $1000 USD In Bitcoin Value . The card purchase will be confirmed  Within 12 Hours, after which withdrawal can be made.</p></div>
                            <div>
                                <p onClick={()=>{onActivateCard("ELITE")}}>
                                    <button  className="button">
                                        ACTIVATE
                                    </button>
                                </p>
                            </div>
                        </div>
                    </section>
                )
            case "Payment":
                return(
                    <CardPayment setPage = {setPage}/>
                )
            default:
                return<div>no Page to display</div>
        }
    }
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/user/card/${userDetails.email}`)
        .then(async (result) => {
            const card = await result.json()
            
            if(card.success){
                setCard(card.card)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    // eslint-disable-next-line
    }, [page])
    

    return (
      <div className='Dashboard'>
        {notify.display && (
          <Notification
            type={notify.type}
            message={notify.message}
            closeNotify={closeNotifiaction}
          />
        )}
        <Navigation
          page='Dashboard'
          dashpage='Card'
          logOut={logOut}
          amount={userDetails.amount}
        />
        {displayCardPage()}
        <Footer />
        <div class='bg-animation'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div id='stars4'></div>
        </div>
      </div>
    )
}

export default Card;