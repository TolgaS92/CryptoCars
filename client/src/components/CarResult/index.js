import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';


class CarResult extends Component {
    state = {
        savedCars: [],
    }
    componentDidMount() {
        let userInfo = localStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo);
        console.log(userInfo);
      }
    createCar = (car) => {
        return {
            carModel: car.vehicle,
            vin: car.vin,
            price: car.mean,
            mileage: car.mileage
        }
    }
    

    handleSave = (car, user) => {
            alert("Saved!")
            console.log(car);
            /* console.log(user); */
            let userInfo = localStorage.getItem("userInfo");
            userInfo = JSON.parse(userInfo);
            /* console.log(userInfo["0"]._id); */
            API.saveCar({
                user_id: userInfo["0"]._id,
                id: car.id,
                carModel: car.vehicle,
                vin: car.vin,
                price: car.mean,
                mileage: car.mileage
            })
                .then(savedCar => console.log(savedCar))
                .then(savedCar => this.setState({ savedCars: this.state.savedCars.concat([savedCar]) }))
                .catch(err => console.error(err));
    }

    render(){
    return(
        <div className="car-value-card">
            <div className="card" key={this.props.carSearched.id}>
                <img className="car-img" src="https://cdn1.iconfinder.com/data/icons/classic-cars-by-cemagraphics/512/camaro_512.png" alt="car" />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {this.props.carSearched.vehicle}
                    </h5>
                    <hr />
                    <p className="card-text text-center">Vin Number: {this.props.carSearched.vin}</p>
                    <p className="card-text text-center">MileAge: {this.props.carSearched.mileage} miles</p>
                    <p className="card-text text-center">Average Price: {this.props.carSearched.mean} $</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary d-flex" onClick={() => this.handleSave(this.props.carSearched)}>Save!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default CarResult;