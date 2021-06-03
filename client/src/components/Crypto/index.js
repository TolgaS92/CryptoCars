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
                            How much is your car value get today!
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="cryptext">
                            How is Working <i className="fas fa-question fa-4x"></i>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crypto;