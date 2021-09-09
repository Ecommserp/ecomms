import React from 'react';
import logo from "./assets/cyan.png";
import './invPages.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function Update() {
  return (
    <div className = 'invscreen'>
    <motion.div className = "additem" initial='out'
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Search Item</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Item Code : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" />
                        </label><br></br><br></br>
                        <input className="button" type="submit" value="Search" />
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>
    
  );
}

export default Update;