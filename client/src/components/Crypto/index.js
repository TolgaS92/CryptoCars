import React from 'react';
import './style.css';

function Crypto () {
    return (
        <section className="crypto-box">
            <div className="container">
                <div className="row mt-5 pt-3">
                    <div className="col-sm-6">
                        <h3 className="cryptext">
                        <i className="fab fa-bitcoin fa-4x"></i>
                            Get your car's value in crypto cryptocurrency today!
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="cryptext">
                            What is the crypto Market like today? <i className="fas fa-question fa-4x"></i>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crypto;