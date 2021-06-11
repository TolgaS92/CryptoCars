import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
function Login (){
   
  return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <Signup />
          <Signin />
          </div>
        </div>
      </div>
  )
}
export default Login;