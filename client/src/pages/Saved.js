import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";


function Saved() {
  const [car, setCar] = useState([])
  /* const [userId, setUserId] = useState() */
  const loggedIn = JSON.parse(localStorage.getItem('profile'));
  const loggedUser = loggedIn.result._id
  useEffect(() => {
    /* let logInUser = localStorage.getItem("userId");
    setUserId(logInUser)
    console.log(logInUser); */
    API.getCars()
      .then(res => {
        console.log(res.data.filter((car) => car.user_id === loggedUser))
        setCar(res.data.filter((car) => car.user_id === loggedUser));
      })
      .catch(err => console.log(err));
  }, [loggedUser])

  return (
        <div>
            <h1 className="text-center">My Cars</h1>
            <div className="col-sm-12">
            <SavedResults
            car={car}
            />
            </div>
        </div>
    );
  }


export default Saved;