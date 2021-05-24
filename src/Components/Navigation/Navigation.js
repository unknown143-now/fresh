import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo1 from '../../images/logo (1).png';
import { ReactComponent as Menu } from '../../svg/bars-solid.svg';
import { ReactComponent as Wallet } from '../../svg/wallet-solid.svg';
import './Navigation.css'


const Navigation = ({ page, dashpage, logOut })=>{
    const [navOpen, setNavOpen] = useState(false);

    const history = useHistory();

    const openNav = ()=>{
        if(navOpen){
            setNavOpen(false)
        }else{
            setNavOpen(true)
        }
    }

    const handleLogout =()=>{
        logOut()
        history.push('/login')
    }

    return(
        <div className={`nav ${navOpen? (page === "Dashboard"? 'dash-collapse': 'collapse'): ''}`}>
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
                    {
                        page === "Dashboard"?
                        <div className="nav-row">
                            <Link className="list" to="/">Home</Link>
                            <Link className={`list ${dashpage === 'Dashboard'? 'active': ''}`} to="/dashboard">Dashboard</Link>
                            <Link className={`list ${dashpage === 'Transaction'? 'active': ''}`} to="/dashboard/transaction">Transaction</Link>
                            <Link className={`list ${dashpage === 'Card'? 'active': ''}`} to="/dashboard/card">Active Debit Card</Link>
                            <Link className={`list ${dashpage === 'Withdrawal'? 'active': ''}`} to="/dashboard/withdrawal">Withdrawal</Link>
                            <span
                                className="list" 
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                            <Link to="/dashboard/transaction" className="list cash"> <Wallet className="img"/> $0,000.00</Link>
                        </div>
                        :
                        <div className="nav-row">
                            <Link className={`list ${page === 'Home'? 'active': ''}`} to="/">Home</Link>
                            <Link className={`list ${page === 'Login'? 'active': ''}`} to="/login">Login</Link>
                            <Link className={`list ${page === 'Register'? 'active': ''}`} to="/register">Register</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation;