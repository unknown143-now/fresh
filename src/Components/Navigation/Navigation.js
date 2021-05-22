import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../images/logo (1).png';
import { ReactComponent as Menu } from '../../svg/bars-solid.svg';
import './Navigation.css'



const Navigation = ({page})=>{
    const [navOpen, setNavOpen] = useState(false);

    const openNav = ()=>{
        if(navOpen){
            setNavOpen(false)
        }else{
            setNavOpen(true)
        }
    }

    return(
        <div className={`nav ${navOpen? 'collapse': ''}`}>
            <div className="nav-menu">
                <div className="logo">
                    <img className="img1" src={logo1} alt=""/>
                </div>
                <div 
                    className="toggle-icon"
                    onClick={openNav}
                >
                    <div className="menu-icon">
                        <Menu className="drop-icon"/>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-row">
                        <Link className={`list ${page === 'Home'? 'active': ''}`} to="/">Home</Link>
                        <Link className={`list ${page === 'Login'? 'active': ''}`} to="/login">Login</Link>
                        <Link className={`list ${page === 'Register'? 'active': ''}`} to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;