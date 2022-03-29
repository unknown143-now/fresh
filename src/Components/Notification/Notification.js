import React from "react";
import { ReactComponent as Close } from "../../svg/close.svg"
import "./Notification.css"

const Notification = ({type, message, closeNotify})=>{
    return(
        <div className="Notification">
            {
                type === "error"?
                <p className="Notify-error">{message}</p>
                :<p className="Notify-success">{message}</p>
        
            }
            <Close className="close-icon" onClick={()=>{closeNotify()}}/>
        </div>
    )
}

export default Notification;