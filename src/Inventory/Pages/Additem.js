import React from 'react';
import logo from "./cyan.png";
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function Additem() {
  return (
    <motion.div className = "additem" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: '1%',
                top: '10%',}}>Inventory<br></br>Management</h1></i>
                <img
                width = "10%" height = "20%"
                style={{
                  position: 'absolute',
                  left: '17%',
                  top: '5%',}}
                src = {logo}/>
                <img 
                width = "8%" height = "14%"
                style={{
                  position: 'absolute',
                right: '16%',
                top: '10%',}}
                  src={inventory} /><br></br>
                <br></br><br></br><br></br>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Add Item</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Item Code : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" />
                        </label><br></br><br></br>
                        <label>
                        Item Name : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <label>
                        Supplier : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="supplier" />
                        </label><br></br><br></br>
                        <label>
                        Quantity : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="quantity"/>
                        </label><br></br><br></br>
                        <input type="submit" value="Submit"/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div>
    
  );
}

export default Additem;