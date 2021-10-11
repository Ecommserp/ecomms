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

    <div className="hr_bckground_container">

    
    <div className="App" className="body" >
    <img src={logo} className="App-logo" alt="logo" />
    
    


    <div>
        <h1 className="hr_tile">Leave Management</h1>
    </div>

    <div>
    <Navbar />

    </div>


    <br></br> <br></br> <br></br>
    
    <div className="hr_sal_app-container" className="hr_salmargin">
      <h1 className="hr_sal_h1cat">Leave Category (Please input leave category code only) </h1>
      <h1 className="hr_sal_h1cat"> * Casual Leave : cl1 </h1>
      <h1 className="hr_sal_h1cat"> * Annual Leave : Al1 </h1>
      <h1 className="hr_sal_h1cat"> * Sick Leave   : Sl1 </h1>
    <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="Number" 
        name="Emp_id" 
        placeholder="Enter Employee ID:"
        onChange={(e) => setEmp_id(e.target.value)}
      />
      </label>
      <label>
        <input 
          type="text" 
          name="type" 
          placeholder="Enter Leave Type:"
          onChange={(e) => settype(e.target.value)}
        />
        </label>
        
        <label>
       
  <label>
    
                                <input  type="date" name="date" onChange={(e) => setdate(e.target.value)}/>

                                </label>


        </label>
        <button className="button" value="Submit" onClick={insert}>Insert Data</button>
    </form>
    </div>
    <br></br><br></br>
    <div>
        <h1 className="hr_footer_tile">ecomms (Enterprise Resource Planning System -ERP System) - Human Resource Management</h1>
      </div>
    </div>
  </div>
  
  )
}

ReactDOM.render(<Attendance />, document.getElementById('root'));





export default Attendance;