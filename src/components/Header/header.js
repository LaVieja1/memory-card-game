import React from "react";
import logo from '../../assets/logo.png';

import './header.css';

const Header = () => {
    return (
        <>
            <header className="header-wrapper">
                <img className="logo" src={logo} alt="logo"></img>
            </header>
            <div className="line"></div>
        </>
    )
}

export default Header;