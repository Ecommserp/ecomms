import React, {useState} from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import inventory from "./assets/inventory.png";
import add from "./assets/add.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function InvAdditem() {

  
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [quantity, setquantity] = useState("");

  function validateForm() {
    return name.length > 0 && type.length > 0 && quantity.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, type: type, quantity: quantity})
    };
    fetch('http://localhost:3220/inventory/', requestOptions)
        .then(response => response.json());
        alert("Item added")

        
        setname("");
        settype("");
        setquantity("");
  }

  return (
    <div className = 'invscreen'>
    <motion.div className = "invadditem" initial='out'
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Add Product</h3></Card.Header>
                <Card.Body>
                <img style={{ width:'120px',height:'120px' }} src={add} />
                <form onSubmit={handleSubmit}>
                        <label>
                        Product Name :
                        <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} style={{marginLeft:10}}/>
                        </label><br></br><br></br>
                        <label> Product Type : </label>
                <select style = {{width:175, marginLeft:15}} type="text" name="stat" value={type} onChange={(e) => settype(e.target.value)}>
                  <option value="Null"></option>
                      <option value="PURC"> PURC </option>
                      <option value="MANU">MANU</option>
                      <option value="OTHER">OTHER</option>
                </select><br></br><br></br>
                        <label style={{marginLeft:36}}>
                        Quantity :
                        <input type="text" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} style={{marginLeft:10}}/>
                        </label><br></br><br></br>
                        <input className="nbutton" type="button" value="Submit" onClick={insert}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default InvAdditem;
