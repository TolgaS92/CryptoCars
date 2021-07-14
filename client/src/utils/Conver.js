import React from 'react';
import API from '../utils/API';


let value = this.props.carSearched.mean;
let bitcoin = res.data.rates.BTC;
let dogecoin = res.data.rates.DOGE;
let etherum = res.data.rates.ETH;
// function to divide price in USD by value of Crypto to get updated value in crypto
const CryptoMath = function(){
    let bitcoinCryptoValue = value / bitcoin;
    let dogecoinCryptoValue = value / dogecoin;
    let etherumValue = value / etherum;
    return currentCryptoValue;
}

export default CryptoMath;