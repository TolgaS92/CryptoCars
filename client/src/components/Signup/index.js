import React, { useState } from 'react';
import './style.css';
import API from '../../utils/API'

function Signup () {

const [userObject, setUserObject] = useState({})


function handleInputChange(event) {
    const { name, value } = event.target;
    setUserObject({...userObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (userObject.name && userObject.email && userObject.password) {
      API.saveUser({
        name: userObject.name,
        email: userObject.email,
        password: userObject.password
      })
      .then(() => alert("Thanks for signing up!"))
      .catch(err => console.log(err));
    }
  };


    return(
            <form className="col-sm-5 sign-up-form">
                <label  className="col-sm-12">Name: </label>
                <input  className="col-sm-5" onChange={handleInputChange} name="name"/>
                <label className="col-sm-12">Email: </label>
                <input  className="col-sm-5" onChange={handleInputChange} name="email"/>
                <label className="col-sm-12">Password: </label>
                <input type="password" className="col-sm-5" onChange={handleInputChange} name="password"/>
                <hr className="col-sm-6" />
                <button className="btn btn-warning btn-outline-dark" onClick={handleFormSubmit}>Create an Account</button>
            </form>
    )
}


export default Signup;