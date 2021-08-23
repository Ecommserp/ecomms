import React from 'react';
import logo from "./cyan.png";
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Deleteitem() {
  return (
    <motion.div className = "deleteitem" initial='out'
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
                <Card.Header style ={{backgroundColor: '#060b26'}}><h3 style ={{color:'white'}}>Delete Item</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Item Code : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" />
                        </label><br></br><br></br>
                        <input type="submit" value="Search"/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div>
    
  );
}

export default Deleteitem;