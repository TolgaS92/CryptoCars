import React, { useEffect, useState } from "react";
import API from '../../utils/API';
import './style.css';
import Bitcoin from './image/bitcoin.png';

function CryptoSearch (props) {
    const [crypto, setCrypto]= useState([])
    /* const [calculate, setCalculate] = useState([]) */

    useEffect(() => {
        /* cryptoPriceCalculator(); */
        setTimeout(
        API.getCrypto() 
        .then(res => setCrypto(res.data.rates))
        .catch(err => console.log(err))
        , 960000);
    }, [])
    /* function cryptoPriceCalculator() {
        console.log(crypto.BTC)
        let btc = crypto.BTC;
        let price = 7000;
        let btccalculate = Math.floor(price/btc)
        console.log(btccalculate);
        setCalculate(btccalculate)
    } */
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