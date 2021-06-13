import React from 'react';
import Signin from '../components/Signin';
import Signuppage from './Signuppage';
function Login (){
   
  return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
          <Signin />
          </div>
          <div className="col-sm-6">
          <Signuppage />
          </div>
        </div>
      </div>
  )
}
export default Login;