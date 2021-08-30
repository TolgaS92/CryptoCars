import React, { useState, useEffect } from 'react'
import API from '../../utils/API';
import './style.css';

function CarResult (props) {
    const [savedCars, setSavedCars]= useState([])
    const [bcryptoPrice, setBcryptoPrice]= useState([])
    const [ecryptoPrice, setEcryptoPrice]= useState([])
    const [dcryptoPrice, setDcryptoPrice]= useState([])
    
    useEffect(() => {
        setTimeout(
        API.getCrypto()
        .then(res =>{
            setBcryptoPrice(res.data.rates.BTC)
            setEcryptoPrice(res.data.rates.ETH)
            setDcryptoPrice(res.data.rates.DOGE)})
        .catch(err => console.log(err))
        , 960000);
    }, [])

    const createCar = (car) => {
        return {
            carModel: car.vehicle,
            vin: car.vin,
            price: car.mean,
            mileage: car.mileage
        }
    }
    

    const handleSave = (car, crypto) => {
            alert("Saved!")
            console.log(car);
            console.log(crypto);
            let userInfo = localStorage.getItem("profile");
            userInfo = JSON.parse(userInfo);
            API.saveCar({
                user_id: userInfo.result._id,
                id: car.id,
                carModel: car.vehicle,
                vin: car.vin,
                price: car.mean,
                mileage: car.mileage,
            })
                .then(savedCar => console.log(savedCar))
                .then(savedCar => setSavedCars(savedCar))
                .catch(err => console.error(err));
    }

    const createPriceBtc = () => {
        let carPrice = (props.carSearched.mean);
        console.log(carPrice)
        let carValue = Math.floor(carPrice/bcryptoPrice)
        console.log(carValue)
    }
    const createPriceEth = () => {
        let carPrice = (props.carSearched.mean);
        console.log(carPrice)
        let carValue = Math.floor(carPrice/ecryptoPrice)
        console.log(carValue)
    }
    const createPriceDoge = () => {
        let carPrice = (props.carSearched.mean);
        console.log(carPrice)
        let carValue = Math.floor(carPrice/dcryptoPrice)
        console.log(carValue)
    }
    return(
        <div className="car-value-card">
            <div className="card">
                <img className="car-img" src="https://cdn1.iconfinder.com/data/icons/classic-cars-by-cemagraphics/512/camaro_512.png" alt="car" />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {/* {this.props.carSearched.vehicle} */}
                    </h5>
                    <hr />
                    <p className="card-text text-center">Vin Number: {props.carSearched.vin}</p>
                    <p className="card-text text-center">MileAge: {props.carSearched.mileage}miles</p>
                    <p className="card-text text-center">Average Price: {props.carSearched.mean}$</p>
                    <p className="card-text text-center">Bitcoin Price: {createPriceBtc()} Bitcoin</p>
                    <p className="card-text text-center">Etherium Price: {createPriceEth()} Etherium</p>
                    <p className="card-text text-center">Etherium Price: {createPriceDoge()} DOGE coin</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary d-flex" onClick={() => handleSave(props.carSearched)}>Save!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarResult;