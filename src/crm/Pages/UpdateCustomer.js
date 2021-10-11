import React, {useState} from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import crm from "./assets/crm.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateCustomer() {

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

  const [nic, setnic] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [name, setname] = useState("");
  const [sales_id, setsales_id] = useState("");
  const [client_id, setclient_id] = useState("");
  const [phone, setphone] = useState("");
  const [purchased , setpurchased] = useState("");
  const [inquiry, setinquiry] = useState("");
  const [status , setstatus] = useState("");
  const [lodged_date , setlod_date] = useState("");

  async function keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/crm/crm/'+ nic;
           const data = await getData(apiUrl);

           console.log(data)



           /* Call the state's "setter" method to update "userInput" state */
           setname(data.name)
           setphone(data.contact)
           setlod_date(data.inquiry_date)
           setpurchased(data.Product_ID)
           setinquiry(data.Customer_inquiry)
           setsales_id(data.Sales_ID)
           setclient_id(data.Client_ID)
           setstatus(data.stat)
        }
     }

     async function update(e) {
         /* Prevent button click's default behavior */
         e.preventDefault();

         const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({Customer_inquiry: inquiry, stat: status})
     };
     fetch('http://localhost:3220/crm/crm/'+ nic, requestOptions)
         .then(response => response.json());
         console.log(requestOptions)
         alert("Item Updated")

     }

  return (
    <div className = 'screen7'>
    <motion.div className = "addcustomer" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>

                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Update inquiries</h3></Card.Header>
                <Card.Body>
                        <label className='label1'>
                        Inquiry ID: &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="nic" value={nic} onKeyDown={keyPress} onChange={(e) => setnic(e.target.value)}/>
                        </label><br></br><br></br>

                        <label className='label1'>
                        Lodged Date: &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="nic" value={lodged_date} onChange={(e) => setlod_date(e.target.value)} readonly/>
                        </label><br></br><br></br>

                        <label className='label1'>
                        Customer Name : &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="name " value={name} onChange={(e) => setname(e.target.value)}disabled/>
                        </label><br></br><br></br>
                        <label className='label1'>
                        Phone Number : &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="phone " value={phone} onChange={(e) => setphone(e.target.value)}disabled/>
                        </label><br></br><br></br>
                        <label className='label1'>
                        Purchased Item : &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="purchased" value={purchased} onChange={(e) => setpurchased(e.target.value)}disabled/>
                        </label><br></br><br></br>
                        <label className='label1'>
                        Inquiry  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="inquiry" value={inquiry} onChange={(e) => setinquiry(e.target.value)}required/>
                        </label><br></br><br></br>
                        <label className='label1'>
                        Inquiry Status  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <select className='label2'type="text" name="status " value={status} onChange={(e) => setstatus(e.target.value)}>
                      <option value="Null"></option>
                      <option value="pending"> Pending </option>
                      <option value="assigned">Assigned</option>
                      <option value="resolved">Resolved</option>

                        </select>
                        <br></br><br></br>
                        <input className="button1" type="button" value="Submit" onClick={update}/>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default UpdateCustomer;
