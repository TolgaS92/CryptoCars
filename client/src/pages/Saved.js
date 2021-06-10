import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";

function Saved(props) {
  const [car, setCar] = useState({})

  useEffect(() => {
    API.getCars()
      .then(res => setCar(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
        <div>
            <h1 className="text-center">My Cars</h1>
            <SavedResults
            car={car}
            />
        </div>
    );
  }


export default Saved;