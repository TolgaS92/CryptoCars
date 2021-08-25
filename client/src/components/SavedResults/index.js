import React, { Component } from "react";
import API from "../../utils/API";

class SavedResults extends Component {

  handleDeleteCar = (id) => {
    alert("Deleted from the database just need to refresh")
    
    API.deleteCar(id)
      .then(res => this.loadCars())
      .catch(err => console.log(err));
  };
  render () {
  return(
    <div className="saved-car container mb-5">
      {!this.props.car.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                  <div className="row">
                  {this.props.car?.map((car) => (
                  <div className="card mt-3" key={car._id}>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Car Model: {car.carModel}
                    </h5>
                    <p className="card-text text-center">
                      Vin Number: {car.vin}
                    </p>
                    <p className="card-text text-center">
                      Car Milage:  {car.mileage} Miles
                    </p>
                    <p className="card-text text-center">
                      Car Price: $ {car.price}
                    </p>
                    <div className="text-center">
                    <button className="btn btn-primary" onClick={() => (car._id)}>Delete</button>
                    </div>
                  </div>
                </div>
                ))}
                  </div>
                    )}
    </div>
  )
}
}

export default SavedResults;