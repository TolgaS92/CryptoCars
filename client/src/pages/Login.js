import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

function Login () {
    return (
        <div className="container login-form">
            <div className="row">
            <Signin />
            <Signup />
            </div>
        </div>
    )
}

export default Login;