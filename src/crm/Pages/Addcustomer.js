import React, {useState} from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
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
    fetch('http://localhost:3220/crm/', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }

  return (
    <div className = 'screen'>
    <motion.div className = "addcustomer" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 15,
                top: 10,}}>Customer<br></br>Relationship<br></br>Management</h1></i>
                <img
                style={{
                  position: 'absolute',
                  left: 200,
                  top: -20,
                width: 160,
              height: 160}}
                src = {logo}/>
                <img
                style={{
                  position: 'absolute',
                right: 250,
                top: 12,
              width: 120,
            height: 100}}
                  src={crm} />
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Add Item</h3></Card.Header>
                <Card.Body>
                <form onSubmit={handleSubmit}>
                        <label>
                        NIC: &nbsp;&nbsp;&nbsp;
                        <input type="text" name="nic" value={nic} onChange={(e) => setnic(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        DOB  : &nbsp;&nbsp;
                        <input type="date" name="birthdate " value={birthdate} onChange={(e) => setbirthdate(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Customer Name : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="name " value={name} onChange={(e) => setname(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="email " value={email} onChange={(e) => setemail(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                         Phone : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="phone " value={phone} onChange={(e) => setphone(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Purchased Item : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="purchased" value={purchased  } onChange={(e) => setpurchased(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Inquiry  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="inquiry" value={inquiry } onChange={(e) => setinquiry(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Inquiry Status  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="status " value={status} onChange={(e) => setstatus(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="button" type="button" value="Submit" onClick={insert}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default Addcustomer;
