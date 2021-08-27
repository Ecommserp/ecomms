import logo from './assets/cyan.png';
import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { useHistory } from "react-router-dom";
import UserProfile from './UserProfile';



import './login.css';



function Login() {
  let history = useHistory();


  const [e_id, sete_id] = useState("");
  const [password, setPassword] = useState("");

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
    var stat = UserProfile.getStatw();
    console.log(stat)
    const apiUrl = 'http://13.92.27.35/users/'+ e_id;
    const data = await getData(apiUrl);

    if(e_id == data.username && password == data.password){
      console.log("hooray")
      UserProfile.setName(e_id);
      UserProfile.setStat(true);
      history.push("/home");

    } else {
      console.log("you fuckedup")
      UserProfile.setStat(false);
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
