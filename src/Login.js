import logo from './assets/cyan.png';
import React, { useState } from "react";




import './login.css';

function Login() {
  return (
    <div className="main">
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <form><br /><br />
      <label className="label">
    Please Login <br />
    to your account</label><br /><br /><br />
      <label className="label">
  Employee ID:</label> <br />
  <input className="input" type="text" name="name" /><br /><br />

  <label className="label">
Password:</label><br />
<input className="input" type="text" name="name" /><br /><br /><br /><br />
<input className="button" type="submit" value="Submit" />
            </form>

    </div>
    </div>
  );
}

export default Login;
