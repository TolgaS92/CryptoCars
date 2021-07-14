import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";


function Saved(props) {
  const [car, setCar] = useState({})
  /* const [userId, setUserId] = useState() */
  /* let logInUser = localStorage.getItem("userId");
  console.log(logInUser); */
  
  useEffect(() => {
    /* let logInUser = localStorage.getItem("userId");
    setUserId(logInUser)
    console.log(logInUser); */
    API.getCars()
      .then(res => {
        setCar(res.data)
      })
      .catch(err => console.log(err));
  }, [])

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