import './Hr.css';
import logo from './images/ecomms_logo.png';
import './salary.css';
import Navbar from "./components/Navbar";
import { useState } from "react";
import ReactDOM from "react-dom";
import moment from 'moment';









function Attendance() {

  const [inputs, setInputs] = useState({});
  
const [date, setdate] = useState("");
const [Emp_id, setEmp_id] = useState("");
const [type, settype] = useState("");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  function insert() {

    const requestOptions = {
  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Emp_id: Emp_id, type: type, month: moment(date).format('YYYY-MM-DD')})};
    fetch('http://localhost:3220/hr_attendance', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }
  


  return (

    
    <div className="App" className="body" >
    <img src={logo} className="App-logo" alt="logo" />
    
    


    <div>
        <h1 className="hr_tile">Leave Management</h1>
    </div>

    <div>
    <Navbar />

    </div>


    <br></br> <br></br> <br></br>
    
    <div className="hr_sal_app-container">
    <form onSubmit={handleSubmit}>
      <label>Enter Employee ID:
      <input 
        type="Number" 
        name="Emp_id" 
        onChange={(e) => setEmp_id(e.target.value)}
      />
      </label>
      <label>Enter Leave Type:
        <input 
          type="text" 
          name="type" 
          onChange={(e) => settype(e.target.value)}
        />
        </label>
        
        <label>
       
  <label>
   Date 
                                <input  type="date" name="date" onChange={(e) => setdate(e.target.value)}/>

                                </label>


        </label>
        <button className="button" value="Submit" onClick={insert}>Insert Data</button>
    </form>
    </div>

  </div>
  
  )
}

ReactDOM.render(<Attendance />, document.getElementById('root'));





export default Attendance;