import React from 'react';
import logo from "./assets/cyan.png";
import './invPages.css';
import inventory from "./assets/inventory.png";
import search from "./assets/search.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateForm() {
  return (
    <div className = 'invscreen'>
    <motion.div className = "updateform" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 15,
                top: 10,}}>Inventory<br></br>Management</h1></i>
                <img className="invlogo"
                style={{
                  position: 'absolute',
                  left: 200,
                  top: -20,}}
                src = {logo}/>
                <img className='invimg'
                style={{
                  position: 'absolute',
                right: 250,
                top: 12}}
                  src={inventory} />
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Update Inventory</h3></Card.Header>
                <Card.Body>
                <img style={{ width:'160px',height:'140px' }} src={search} /><br></br><br></br>
                <form>
                  <label style={{marginRight:50}}>Field to Edit :</label>
                  <select type="text">
                  <option value="NULL"></option>
                      <option value="id">Product ID</option>
                      <option value="name">Product Name</option>
                      <option value="type">Product Type</option>
                      <option value="quantity">Quantity</option>
                </select>
                        <br></br><br></br>
                        <label>
                        New Value : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <input className="nbutton" type="submit" value="Submit" />
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default UpdateForm;