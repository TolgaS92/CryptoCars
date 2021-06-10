import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import './style.css';
import { AuthContext } from "../../context/AuthContext";
const Signin = () => {

    const authContext = useContext(AuthContext);
    const [signInSuccess, setSignInSuccess] = useState();
    const [signInError, setSignInError] = useState();
    const [redirectOnSignIn, setRedirectOnSignIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line no-unused-vars
    const submitCredentials = async (credentials) => {
        console.log(credentials);
        try {
          const url = "http://localhost:3001/auth";
          const fetchResponse = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            allowedHeaders: {
              'Content-Type': 'Authorization',
              /* "Content-Type": "application/json", */
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(credentials), // body data type must match "Content-Type" header
          });
          const data = await fetchResponse.json();
          authContext.setAuthState(data);
          setSignInSuccess(data.message);
          setSignInError(null);
    
          setTimeout(() => {
            setRedirectOnSignIn(true);
          }, 700);
        } catch (error) {
          setSignInError(error.message);
          setSignInSuccess(null);
        }
      };
      const handleSubmit = (event) => {
        event.preventDefault();

        submitCredentials({ email, password });
    };
    return (
        <>
            {redirectOnSignIn && <Redirect to="/" />}
            {signInSuccess && <h1>success</h1>}
            {signInError && <h1>Error: {signInError} </h1>}
            <form className="col-sm-5 sign-in-form mr-1" onSubmit={handleSubmit}>
                <label className="col-sm-12">E-mail: </label>
                <input  
                className="col-sm-6"
                required
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value.trim())}
                autoComplete="email"
                autoFocus
                />
                <label className="col-sm-12">Password: </label>
                <input 
                className="col-sm-6"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value.trim())}
                autoComplete="current-password"
                />
                <hr className="col-sm-6" />
                <p>If you don't have an account! <a href="/signup">Signup!</a></p>
                <button 
                className="btn btn-warning btn-outline-dark" 
                type="submit" 
                variant="contained" 
                >Login</button>
            </form>
        </>
    )
}

export default Signin;