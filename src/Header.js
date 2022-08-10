import React from "react";
import logo from "./react-logo.png";

export default function Header() {
    return(
        <header>
            <nav className='nav'>
                <img className='logo' src={logo} alt=""/>
                <ul className='list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}