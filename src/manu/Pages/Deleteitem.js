import React, {useState} from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Deleteitem() {

  const [code, setcode] = useState("");

  function validateForm() {
    return code.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function deleted() {

    const requestOptions = {

        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code})
    };
    fetch('http://localhost:3220/inventory/', requestOptions)
        .then(response => response.json());
        alert("Item Deleted")
  }


  return (
    <div className = 'screen'>
    <motion.div className = "deleteitem" initial='out'
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Delete Item</h3></Card.Header>
                <Card.Body>
                <form onSubmit={handleSubmit}>
                    <label>
                        Item Code : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={code} onChange={(e) => setcode(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="button" type="button" value="Delete" onClick={deleted}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>
    
  );
}

export default Deleteitem;