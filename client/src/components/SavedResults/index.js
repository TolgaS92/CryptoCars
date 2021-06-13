import React, { Component } from "react";
import API from "../../utils/API";

class SavedResults extends Component {
  state = {
    savedCars: [],
  };

  loadCars () {
    API.getCars()
    .then((err) => console.log(err))
  }
  // load saved cars when Saved page renders
  componentDidMount() {
    API.getCars()
      .then((savedCars) => this.setState({ savedCars: savedCars }))
      .catch((err) => console.error(err));
  }

  // Function to handle deletion of cars
  handleDeleteCar = (id, user) =>  {
    alert("Deleted from the database just need to refresh")
    let userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    console.log(userInfo["0"]._id);
    API.deleteCar(id, user)
      .then(res => this.loadCars(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            {this.props.car.length ? (
                    <div>
                      {this.props.car.map((cars) => (
                        <div className="card mt-3 mb-3" key={cars._id}>
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                {cars.carModel}
                            </h5>
                            <hr />
                            <p className="card-text text-center">Vin Number: {cars.vin}</p>
                            <p className="card-text text-center">MileAge: {cars.mileage} miles</p>
                            <p className="card-text text-center">Average Price: {cars.price} $</p>
                            <div className="text-center">
                            <button className="btn btn-primary" onClick={() =>   this.handleDeleteCar(cars._id)}>Delete</button>
                            </div>
                            </div>
                        </div>
                        ))}
                        </div>
                    ) : (
                        <h3 className="text-center">No Results to Display</h3>
                )}
        </div>
    );
    }
}

export default SavedResults;