import React, {useState} from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import crm from "./assets/crm.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Addcustomer() {

  const [nic, setnic] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [purchased , setpurchased] = useState("");
  const [inquiry, setinquiry] = useState("");
  const [status , setstatus] = useState("");


  function validateForm() {
    return nic.length > 0 && birthdate.length > 0 && name.length > 0 && email.length > 0 && phone.length > 0 && purchased.length > 0 && inquiry.length > 0 && status.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nic: nic, birthdate: birthdate, name: name, email: email,phone: phone, purchased: purchased, inquiry: inquiry, status: status})
    };
    fetch('http://localhost:3220/crm/crm', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }

  return (
    <div className = 'screen7'>
    <motion.div className = "addcustomer" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
       
               
                
                  <div className='Farea'>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Add Inquiry</h3></Card.Header>
                <Card.Body>
                <form onSubmit={handleSubmit}>
                        <label className='label1'> 
                        Customer NIC: &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="nic" value={nic} onChange={(e) => setnic(e.target.value)}/>
                        </label><br></br><br></br>
<<<<<<< Updated upstream
                        <label>
                        DOB  : &nbsp;&nbsp;
                        <input type="date" name="birthdate " value={birthdate} onChange={(e) => setbirthdate(e.target.value)}/>
=======
                        <label className='label1'> 
                        Customer DOB  : 
                        <input className='label2' type="date" name="birthdate " value={birthdate} onChange={(e) => setbirthdate(e.target.value)}/>
>>>>>>> Stashed changes
                        </label><br></br><br></br>
                        <label className='label1'> 
                        Customer Name : &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="name " value={name} onChange={(e) => setname(e.target.value)}/>
                        </label><br></br><br></br>
                        <label className='label1'> 
                        Customer Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="email " value={email} onChange={(e) => setemail(e.target.value)}/>
                        </label><br></br><br></br>
                        <label className='label1'> 
                        Phone Number : &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="phone " value={phone} onChange={(e) => setphone(e.target.value)}/>
                        </label><br></br><br></br>
                        <label className='label1'> 
                        Purchased Item : &nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="purchased" value={purchased} onChange={(e) => setpurchased(e.target.value)}/>
                        </label><br></br><br></br>
                        <label className='label1'> 
                        Inquiry  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className='label2' type="text" name="inquiry" value={inquiry} onChange={(e) => setinquiry(e.target.value)}/>
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
                        </div>
    </motion.div></div>
    

  );
}

export default Addcustomer;
