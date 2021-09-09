import React, { useState } from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function Additem() {

  const [name, setname] = useState("");
  const [details, setdetails] = useState("");
  const [stat, setstat] = useState("");
  const [m_num, setm_num] = useState("");

  function validateForm() {
    return name.length > 0 && details.length > 0 && stat.length > 0 && m_num.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, Details: details, Production_stat: stat, Machine_no: m_num })
    };
    fetch('http://localhost:3220/manu/prod', requestOptions)
      .then(response => response.json());
    alert("Item added")
  }

  return (
    <div className='screen'>
      <motion.div className="additem" initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <i><h1 style={{
          position: 'absolute',
          right: 15,
          top: 10,
        }}>Inventory<br></br>Management</h1></i>
        <img
          style={{
            position: 'absolute',
            left: 200,
            top: -20,
            width: 160,
            height: 160
          }}
          src={logo} />
        <img
          style={{
            position: 'absolute',
            right: 250,
            top: 12,
            width: 120,
            height: 100
          }}
          src={inventory} />

        <center><Card border='primary' style={{ width: '40rem' }}>
          <Card.Header style={{ backgroundColor: '#1f78b4' }}><h3 style={{ color: 'white' }}>Add Item</h3></Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <label>
                Product Name : &nbsp;&nbsp;&nbsp;
                <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} />
              </label><br></br><br></br>
              <label>
                Product Details : &nbsp;&nbsp;
                <input type="text" name="details" value={details} onChange={(e) => setdetails(e.target.value)} />
              </label><br></br><br></br>
              <label>
                Production Status : &nbsp;&nbsp;&nbsp;
                <input type="text" name="stat" value={stat} onChange={(e) => setstat(e.target.value)} />
              </label><br></br><br></br>
              <label>
                Machine Number : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="m_num" value={m_num} onChange={(e) => setm_num(e.target.value)} />
              </label><br></br><br></br>
              <input className="button" type="button" value="Submit" onClick={insert} />
            </form>
          </Card.Body></Card>
        </center>
      </motion.div></div>

  );
}

export default Additem;
