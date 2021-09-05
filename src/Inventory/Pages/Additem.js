import React, {useState} from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Additem() {

  const [code, setcode] = useState("");
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [quantity, setquantity] = useState("");

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code, name: name, type: type, quantity: quantity})
    };
    fetch('http://localhost:3220/inventory/', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }

  return (
    <div className = 'screen'>
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Add Item</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Item Code : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={code} onChange={(e) => setcode(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Item Name : &nbsp;&nbsp;
                        <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Item Type : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="type" value={type} onChange={(e) => settype(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>
                        Quantity : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="button" type="button" value="Submit" onClick={insert}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default Additem;
