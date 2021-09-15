import React from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import crm from "./assets/crm.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateCustomer() {
  return (
    <div className = 'screen'>
    <motion.div className = "addcustomer" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Search Inquiry</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                         NIC : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="nic" />
                        </label><br></br><br></br>
                        <input className="button1" type="submit" value="Search" />
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>
    
  );
}

export default UpdateCustomer;