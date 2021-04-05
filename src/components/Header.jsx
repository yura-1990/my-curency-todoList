import React from 'react'
import { Link, useLocation } from "react-router-dom"
import logo from '../images/logo192.png'
import './scss/header.scss'

function Header() {
    const location = useLocation().pathname
    return (
        <header className="header">
            <div className="header__content">
                <nav className="header__nav container">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="logo type of site" className="header__logo-img" />
                    </Link>
                    <ul className="header__list">
                        <li>
                            <Link to="/" className={location !== '/todo' && location !== '/about' ? "header__link active" : "header__link"}>Home</Link>
                        </li>
                        <li>
                            <Link to="/todo" className={location === '/todo' ? "header__link active" : "header__link"}>Todo</Link>
                        </li>
                        <li>
                            <Link to="/about" className={location === '/about' ? "header__link active" : "header__link"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
