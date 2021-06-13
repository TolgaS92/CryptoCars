import React, { useState, useEffect } from "react";
import CarResult from '../components/CarResult';
import VinSearch from '../components/Vinsearch';
import API from '../utils/API';
import CryptoSearch from "../components/CryptoSearch";

function Search() {
    const [carSearched, setCarSearched] = useState([])
    const [formObject, setFormObject] = useState("")
    /* const [loggedIn, setLoggedIn] = useState() */

    /* const { id } = params.id */

    useEffect(() => {
        loadCars();
        }, [])

    function loadCars() {
            API.getCarInfo()
              .then(res => 
                setCarSearched(res.data/* .map(carData => createCar(carData)) */)
              )
              .catch(err => console.log(err));
          };

    function handleInputChange (event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        const search = formObject.search;
        API.getCarInfo(search).then(res => {
            setCarSearched((res.data))
        }).catch(err => console.log(err));
      };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                <VinSearch
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                />
                </div>
                <div className="col-sm-4">
                <CarResult
                carSearched={carSearched}
                />
                </div>
                <div className="col-sm-3">
                <CryptoSearch />
                </div>
            </div>
        </div>
    )
}
export default Search;