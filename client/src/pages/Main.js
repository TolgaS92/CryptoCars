import React from 'react';
import './style.css';
import Crypto from '../components/Crypto'
import About from '../components/About';

function Main () {
    return(
        <div>
        <section className="main-top">
            <div className="container">
                <h1 className="mt-5 text-warning">
                    Get Your Car Value in Crypto!
                </h1>
                <h2 className="text-warning">
                    Only you need your VIN number!
                </h2>
                <a className="btn btn-dark btn-outline-warning px-3" href="/search">
                    Check Value
                </a>
            </div>
        </section>
        <About />
        <Crypto />
        </div>
    )
}

export default Main;