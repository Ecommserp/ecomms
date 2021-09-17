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
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [purchased , setpurchased] = useState("");
  const [inquiry, setinquiry] = useState("");
  const [status , setstatus] = useState("");

  async function keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/crm/crm/'+ nic;
           const data = await getData(apiUrl);

           console.log(data)



           /* Call the state's "setter" method to update "userInput" state */
           setname(data.Customer_name)
           setbirthdate(data.Birth_Date)
           setemail(data.Email)
           setphone(data.Phone)
           setpurchased(data.Purchased_item)
           setinquiry(data.inquiry)
           setstatus(data.inquiry_status)
        }
     }

     async function update(e) {
         /* Prevent button click's default behavior */
         e.preventDefault();

         const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ Customer_NIC: nic, Birth_Date: birthdate, Customer_name: name, Email: email, Phone: phone, Purchased_item: purchased, inquiry: inquiry, inquiry_status: status})
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
                Customer NIC: &nbsp;&nbsp;&nbsp;
                <input className='label2' type="text" name="nic" value={nic} onKeyDown={keyPress} onChange={(e) => setnic(e.target.value)}/>
                </label><br></br><br></br>

                <label className='label1'>
                Customer DOB  :
                <input className='label2' type="date" name="birthdate " value={birthdate} onChange={(e) => setbirthdate(e.target.value)}/>
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
                <input className="button1" type="button" value="Submit" onClick={update}/>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default UpdateCustomer;
