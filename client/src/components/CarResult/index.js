import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';


class CarResult extends Component {
    state = {
        savedCars: []
    }
    createCar = (car) => {
        return {
            carModel: car.vehicle,
            vin: car.vin,
            price: car.mean,
            mileage: car.mileage
        }
    }
    handleSave = car => {  

        if (this.state.savedCars.map(car => car._id).includes(car._id)) {
            API.deletecar(car._id)
                .then(deletedCar => this.setState({ savedCars: this.state.savedCars.filter(car => car._id !== deletedCar._id) }))
                .catch(err => console.error(err));
        } else {
            alert("Saved!")
            API.saveCar(car)
                .then(cars => cars.map(car => this.createCar(car)))
                .then(console.log(car))
                .then(savedCar => this.setState({ savedCars: this.state.savedCars.concat([savedCar]) }))
                .catch(err => console.error(err));
        }
    }

    render(){
    return(
        <div className="car-value-card">
            <div className="card">
                <img className="car-img" src="https://cdn1.iconfinder.com/data/icons/classic-cars-by-cemagraphics/512/camaro_512.png" alt="car" />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {this.props.result.vehicle}
                    </h5>
                    <hr />
                    <p className="card-text text-center">Vin Number: {this.props.result.vin}</p>
                    <p className="card-text text-center">MileAge: {this.props.result.mileage} miles</p>
                    <p className="card-text text-center">Average Price: {this.props.result.mean} $</p>
                    <button className="btn btn-primary d-flex" onClick={() => this.handleSave(this.props.result)}>Save!</button>
                </div>
            </div>
        </div>
    )
}
}
export default CarResult;