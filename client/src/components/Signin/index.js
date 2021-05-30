import React from 'react';
import './style.css';

function Login () {
    return (
            <form className="col-sm-5 sign-in-form mr-1">
                <label className="col-sm-12">E-mail: </label>
                <input  className="col-sm-6" />
                <label className="col-sm-12">Password: </label>
                <input className="col-sm-6" />
                <hr className="col-sm-6" />
                <p>If you don't have an account! <span>Sign Up</span></p>
                <button className="btn btn-warning btn-outline-dark">Login</button>
            </form>
    )
}

export default Login;