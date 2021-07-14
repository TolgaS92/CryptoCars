import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function SavedResults () {
  const [savedCar, setsavedCar] = useState([])
  const loggedIn = JSON.parse(localStorage.getItem('profile'));
  console.log(loggedIn.result._id)
  const loggedUser = loggedIn.result._id
  useEffect(() => {
    loadCars();
  }, []);

  function loadCars() {
    API.getCars()
      .then((res) => {
        console.log(res.data);
        setsavedCar(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteCar (id)   {
    alert("Deleted from the database just need to refresh")
    let userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    console.log(userInfo["0"]._id);
    API.deleteCar(id)
      .then(res => this.loadCars())
      .catch(err => console.log(err));
  };
  return(
    <div className="saved-car container mt-5 mb-5">
      <div className="row">
      {savedCar.filter((car) => car.user_id === loggedUser)
      .map((car) => (
      <div className="card" key={car._id}>
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
          <button className="btn btn-primary" onClick={() =>   handleDeleteCar(car._id)}>Delete</button>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default SavedResults;