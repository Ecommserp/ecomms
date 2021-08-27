import logo from './assets/cyan.png';
import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';


import './login.css';



function Login() {



  let history = useHistory();


  const [e_id, sete_id] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(['user']);

  function validateForm() {
    return e_id.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
}

  async function componentDidMount() {
    const apiUrl = 'http://13.92.27.35/users/'+ e_id;
    const data = await getData(apiUrl);

    if(e_id == data.username && password == data.password){
      console.log("hooray")
      setCookie('username', e_id, { path: '/' });
      setCookie('logged', true, { path: '/' });
      history.push("/home");

    } else {
      console.log("you fuckedup")
      setCookie('logged', false, { path: '/' });
      ReactDOM.render(<p>Invalid Login Details</p>, document.getElementById('inv'));
    }

  }

  return (
    <div className="main">
    <div className="Appa">
      <img src={logo} className="App-logo" alt="logo" />

      <form onSubmit={handleSubmit}><br /><br />
      <label className="label">
    Please Login <br />
    to your account</label><br /><br /><br />
      <label className="label">
  Employee ID:</label> <br />
  <input className="input" type="text" name="e_id"
  value={e_id}
  onChange={(e) => sete_id(e.target.value)}
            /><br /><br />

  <label className="label">
Password:</label><br />
<input className="input" type="password" name="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
            />  <div id="inv" className="invalid"></div>
<br /><br /><br /><br />
<input className="button_login" type="button" onClick={componentDidMount} value="Let Me In" />
            </form>


    </div>
    </div>
  );
}

export default Login;
