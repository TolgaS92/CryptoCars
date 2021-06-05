import React from 'react';
import './style.css';

function Signup () {
    return(
            <form className="col-sm-5 sign-up-form">
                <label className="col-sm-12">First Name: </label>
                <input  className="col-sm-5" />
                <label className="col-sm-12">Last Name: </label>
                <input  className="col-sm-5" />
                <label className="col-sm-12">E-mail: </label>
                <input  className="col-sm-5" />
                <label className="col-sm-12">Password: </label>
                <input type="password" className="col-sm-5  " />
                <hr className="col-sm-6" />
                <p>If you have an account! <span>Login</span></p>
                <button className="btn btn-warning btn-outline-dark">Create an Account</button>
            </form>
    )
}

export default Signup;