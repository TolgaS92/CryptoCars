import React, { useState } from 'react';
import './style.css';
import Userapi from '../../utils/user'

function Signup () {

const [userObject, setUserObject] = useState({})


function handleInputChange(event) {
    const { name, value } = event.target;
    setUserObject({...userObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (userObject.name && userObject.email && userObject.password) {
      Userapi.saveUser({
        name: userObject.name,
        email: userObject.email,
        password: userObject.password
      })
        .then(res => alert("Thanks for signing up!"))
        .catch(err => console.log(err));
    }
  };


    return(
      <div>
        <h1 align="center">Create a new account</h1>
            <form className="col-sm-12 sign-up-form" align="center">
                <label  className="col-sm-12">Name: </label>
                <input  className="col-sm-5" onChange={handleInputChange} name="name"/>
                <label className="col-sm-12">Email: </label>
                <input  className="col-sm-5" onChange={handleInputChange} name="email"/>
                <label className="col-sm-12">Password: </label>
                <input type="password" className="col-sm-5" onChange={handleInputChange} name="password"/>
                <hr className="col-sm-6" />
                <button className="btn btn-warning btn-outline-dark" onClick={handleFormSubmit}>Sign Up</button>
                <br/>
            </form>
          <br/>
            </div>
    )
}


export default Signup;