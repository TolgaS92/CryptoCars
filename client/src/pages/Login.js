import React, { Component } from 'react';
import Signin from '../components/Signin';

class Login extends Component {
   

  render() {
  return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <Signin />
          </div>
        </div>
      </div>
  )
}
}
export default Login;