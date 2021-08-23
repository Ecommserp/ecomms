import logo from '../assets/cyan.png';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './App.css';

function Home() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /><br /><br />


    <h1 className="h1">Account Management</h1>

     <h1 className="h2">Dashboard</h1>
 <br/>

     <div className="button_group">
       <button className="button1">Company Income</button>    <div className="space"></div>

       <button className="button1">Financial Report</button>
       </div><br /><br /><br />
       <div className="button_group">

 <button className="button1">Manage Database</button>    <div className="space"></div>

   <button className="button1">Cash Flow</button>
 </div>



         </div>
  );

}

export default Home;
