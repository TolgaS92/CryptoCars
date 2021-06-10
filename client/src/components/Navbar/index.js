import React from 'react';

function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <a className="navbar-brand text-warning" href="/">CryptoCars</a>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link text-white" href="/login">Login</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/search">Search</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/saved">Saved Cars</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/about">About the MERNers</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;