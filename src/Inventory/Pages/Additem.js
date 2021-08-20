import React from 'react';
import logo from "./cyan.png";
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
        <h1 style={{
                position: 'absolute',
                right: 10,
                top: 80,
                }}>Inventory Management</h1>
                <img
                width = "10%" height = "20%"
                style={{
                  position: 'absolute',
                  left: 250,
                  top: 30,}}
                src = {logo}/><br></br>
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