import React, { Component } from 'react';
import './style.css';

class CarResult extends Component {
    state= {
        searchedCar: []
    }

    
    render(){
    return(
        <div className="container">
        <div className="car-value-card">
            {this.state.searchedCar.map(results => (
            <div className="card" key={results.id}>
                <img src="#" alt="car" />
                <div className="card-body">
                    <h5 className="card-title">
                        {results.vehicle}
                    </h5>
                    <p className="card-text">Vin Number: {results.vin}</p>
                    <p className="card-text">Mileage: {results.mileage} miles</p>
                    <p className="card-text">Average Price: {results.prices.average} $</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
}
export default CarResult;
