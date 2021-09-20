import logo from '../assets/cyan.png';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";



import './home_acc.css';



function Home() {

  let history = useHistory();

  function Md_click(){
    history.push("/managingdb");




  }
  function f_click(){
    history.push("/financial");

  }

  function c_click(){
    history.push("/cash");

  }
  function ci_click(){
    history.push("/income");

  }

  return (
    <div className="App_acc">
      <img src={logo} className="App-logo" alt="logo" /><br /><br />


    <h1 className="h1">Account Management</h1>
    <br /><br />

     <h1 className="h2">Dashboard</h1>
 <br/>
 <br /><br /><br /><br /><br /><br />



     <div className="button_group">
       <button className="button1"onClick={Md_click}>Managing Database</button>    <div className="space"></div>

       <button className="button1"onClick={f_click}>Financial Report</button>
       </div><br /><br /><br />
       <div className="button_group">

 <button className="button1"onClick={ci_click}>Company Income</button>    <div className="space"></div>

   <button className="button1"onClick={c_click}>Cash Flow</button>
 </div>



         </div>
  );

}

export default Home;
