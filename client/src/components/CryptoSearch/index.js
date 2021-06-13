import React, { useEffect, useState } from "react";
import API from '../../utils/API';
import './style.css';
import Bitcoin from './image/bitcoin.png';

function CryptoSearch () {
    const [crypto, setCrypto]= useState([])

    useEffect(() => {
        setTimeout(
        API.getCrypto() 
        .then(res => setCrypto(res.data.rates))
        .catch(err => console.log(err))
        , 960000);
    }, [])

    return(
        <div className="crypto-card">
            <div className="card">
            <img className="btc-img" src={Bitcoin} alt="btc" />
                <div className="card-body">
                    <h5 className="card-title">
                       Live Crypto Prices
                    </h5>
                    <hr />
                    <p className="card-text">1 Bitcoin: $ {crypto.BTC}</p>
                    <p className="card-text">1 Etherium: $ {crypto.ETH}</p>
                    <p className="card-text">1 Doge: $ {crypto.DOGE}</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoSearch;