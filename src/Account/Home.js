import Login from '../Login';
import logo from '../assets/cyan.png';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './App.css';

function Home() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

    <h1 className="h1">Account Management</h1>

    <h1 className="h2">Dashboard</h1>
<br/>

    <div className="button_group">
      <div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><button className="button">Company Income</button><div className="space"></div>
      <button className="button">Financial Report</button>
</div>
<br/>

<div className="button_group">
  <div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><button className="button">Manage Database</button><div className="space"></div>
  <button className="button">Cash Flow</button>
</div>



        </div>



  );

}

export default Home;
