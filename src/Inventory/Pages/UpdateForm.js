import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateForm() {
  return (
    <div className = 'screen'>
    <motion.div className = "updateform" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 15,
                top: 10,}}>Inventory<br></br>Management</h1></i>
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
                  src={inventory} />
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Update Inventory</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Item Code &nbsp;
                        <input type="radio" Value="itemcode" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        Item Name &nbsp;
                        <input type="radio" Value="itemname" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        Item Type &nbsp;
                        <input type="radio" Value="supplierid" name="group"/>
                        </label>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Quantity &nbsp;
                        <input type="radio" Value="quantity" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br><br></br>
                        <label>
                        New Value : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <input className="button" type="submit" value="Submit" />
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default UpdateForm;