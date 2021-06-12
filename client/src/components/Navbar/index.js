import React from 'react';

function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <a className="navbar-brand text-warning" href="/">CryptoCars</a>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link text-white" href="/signup">Sign Up</a>
                </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/signin">Sign In</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/search">Search</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/saved">Saved</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="/about">About the MERNers</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;