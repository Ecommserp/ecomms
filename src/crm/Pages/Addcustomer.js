import React, {useState} from 'react';
import './CRMPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Addcustomer() {

  const [nic, setnic] = useState("");  //nic= Sales ID
  const [birthdate, setbirthdate] = useState("");
  const [name, setname] = useState("");
  const [sales_id, setsales_id] = useState("");
  const [client_id, setclient_id] = useState("");
  const [phone, setphone] = useState("");
  const [purchased , setpurchased] = useState("");
  const [inquiry, setinquiry] = useState("");
  const [status , setstatus] = useState("");



  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

  function validateForm() {
    return nic.length > 0 && birthdate.length > 0 && name.length > 0 && phone.length > 0 && purchased.length > 0 && inquiry.length > 0 && status.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Sales_ID: sales_id, Customer_inquiry: inquiry, client_ID: client_id, stat: 'pending'}) //stringify-converts a JavaScript object or value to a JSON string
    };
    fetch('http://localhost:3220/crm/crm', requestOptions)
        .then(response => response.json());
        alert("inquiry added")
  }

  async function keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/crm/inq_join/'+ nic;
           const data = await getData(apiUrl);

           console.log(data)



           /* Call the state's "setter" method to update "userInput" state */
           setname(data.name)
           setphone(data.contact)
           setpurchased(data.Product_ID)
           setinquiry(data.inquiry)
           setsales_id(data.Sales_ID)
           setclient_id(data.Client_ID)

        }
     }


  return (
    <div className = 'screen7'>
    <motion.div className = "addcustomer" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>




                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Add Inquiry</h3></Card.Header>
                <Card.Body>
                <form onSubmit={handleSubmit}>
                        <label className='label1'>
                        Sales ID: &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="nic" value={nic} onKeyDown={keyPress} onChange={(e) => setnic(e.target.value)}required/>
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
                      <option value="Pending"> Pending </option>
                      <option value="Assigned">Assigned</option>
                      <option value="Resolved">Resolved</option>

                        </select>
                        <br></br><br></br>
                        <input className="button1" type="button" value="Submit" onClick={insert}/>
                        </form>
                        </Card.Body></Card>
                        </center>

    </motion.div></div>


  );
}

export default Addcustomer;
