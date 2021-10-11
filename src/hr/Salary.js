import './Hr.css';
import logo from './images/ecomms_logo.png';
import './salary.css';
import Navbar from "./components/Navbar";
import { useState } from "react";
import ReactDOM from "react-dom";
import moment from 'moment';









function Salary() {

  const [inputs, setInputs] = useState({});
  
const [date, setdate] = useState("");
const [Emp_id, setEmp_id] = useState("");
const [basic_sal, setbasic_sal] = useState("");
const [allowance, setallowance] = useState("");

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
        body: JSON.stringify({ Emp_id: Emp_id, basic_sal: basic_sal ,allowance:allowance, month: moment(date).format('YYYY-MM-DD')})};
    fetch('http://localhost:3220/emp_benefits', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }
  


  return (

    
    <div className="App" className="body" >
    <img src={logo} className="App-logo" alt="logo" />
    
    


    <div>
        <h1 className="hr_tile">Salary and Other Comphensions</h1>
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
      <label>Enter Basic Salary:
        <input 
          type="number" 
          name="basic_sal" 
          onChange={(e) => setbasic_sal(e.target.value)}
        />
        </label>
        <label>Enter Allowance:
        <input 
          type="number" 
          name="allowance"
          onChange={(e) => setallowance(e.target.value)}
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

ReactDOM.render(<Salary />, document.getElementById('root'));





export default Salary;


