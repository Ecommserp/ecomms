import logo from '../assets/cyan.png';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './home_acc.css';

function Home() {
  return (
    <div className="App_acc">
      <img src={logo} className="App-logo" alt="logo" /><br /><br />


    <h1 className="h1">Account Management</h1>

     <h1 className="h2">Dashboard</h1>
 <br/>


     <div className="button_group">
       <button className="button1"onClick={event =>  window.location.href='/account/managingdb'}>Managing Database</button>    <div className="space"></div>

       <button className="button1">Financial Report</button>
       </div><br /><br /><br />
       <div className="button_group">

 <button className="button1">Company Income</button>    <div className="space"></div>

   <button className="button1">Cash Flow</button>
 </div>



         </div>
  );

}

export default Home;
