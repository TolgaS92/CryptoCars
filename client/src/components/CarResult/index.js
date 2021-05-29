import React from 'react';

function CarResult (props) {
    console.log(props);
    return(
            <div className="card">
                <img src="#" alt="car" />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.result.id}
                    </h5>
                    <p className="card-text">Vin Number: {props.result.vin}</p>
                    <p className="card-text">MileAge: {props.result.mileage}</p>
                    {/* <p className="card-text">Average Price: {props.result.prices}</p> */}
                </div>
            </div>
    )
}

export default CarResult;