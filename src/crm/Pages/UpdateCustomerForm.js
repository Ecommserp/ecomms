import React from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import crm from "./assets/crm.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateCustomerForm() {
  return (
    <div className = 'screen'>
    <motion.div className = "UpdateCustomerForm" initial='out'
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Update customer</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        NIC &nbsp;
                        <input type="radio" Value="nic" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        DOB &nbsp;
                        <input type="radio" Value="birthdate" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        Customer Name &nbsp;
                        <input type="radio" Value="name" name="group"/>
                        </label>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Email  &nbsp;
                        <input type="radio" Value="email" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br><br></br>
                        <label>
                         Phone : &nbsp;&nbsp;
                        <input type="text" name="phone" />
                        </label><br></br><br></br>
                        <label>
                        Email  &nbsp;
                        <input type="radio" Value="email" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br><br></br>
                        <label>
                        Purchased Item &nbsp;
                        <input type="radio" Value="purchased" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        Inquiry &nbsp;
                        <input type="radio" Value="inquiry" name="group"/>
                        </label>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Inquiry Status  &nbsp;
                        <input type="radio" Value="status" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br><br></br>
                       <input className="button" type="submit" value="Submit" />
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default UpdateCustomerForm;