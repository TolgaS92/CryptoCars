import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function SavedResults () {
  const [savedCar, setSavedCar] = useState([])
  const loggedIn = JSON.parse(localStorage.getItem('profile'));
  const loggedUser = loggedIn.result._id
  
  useEffect(() => {
    API.getCars()
      .then((res) => {
        setSavedCar(res.data.filter((car) => car.user_id === loggedUser));
      })
      .catch((err) => console.log(err));
  }, [loggedUser]);

  function handleDeleteCar (id)   {
    alert("Deleted from the database just need to refresh")
    console.log(loggedIn.result._id);
    API.deleteCar(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return(
    <div className="saved-car container mb-5">
      <div className="row">
      {savedCar?.map((car) => (
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