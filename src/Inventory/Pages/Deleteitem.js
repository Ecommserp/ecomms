import React, {useState} from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import inventory from "./assets/inventory.png";
import trash from "./assets/delete.jpg";
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

        setcode("");
  }


  return (
    <div className = 'invscreen'>
    <motion.div className = "deleteitem" initial='out'
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Delete Item</h3></Card.Header>
                <Card.Body>
                  <img style={{ width:'160px',height:'140px' }} src={trash} /> <br></br><br></br>
                <form onSubmit={handleSubmit}>
                    <label>
                       Product ID : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={code} onChange={(e) => setcode(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="nbutton" type="button" value="Delete" onClick={deleted}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>
    
  );
}

export default Deleteitem;