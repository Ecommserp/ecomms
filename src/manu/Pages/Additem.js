import React, { useState } from 'react';
import logo from "./assets/cyan.png";
import './MPages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function Additem() {

  const [name, setname] = useState("");
  const [details, setdetails] = useState("");
  const [stat, setstat] = useState("");
  const [m_num, setm_num] = useState(0);

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
    
      <motion.div className="additem" initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <i><h1 style={{
          position: 'absolute',
          right: 40,
          top:-13,
        }}><br></br>Production</h1></i>
        <div><i><h1 style={{
          position: 'absolute',
          right: 40,
          top:70,
        }}>Manufacturing Management</h1></i> </div>

        <img
          style={{
            position: 'absolute',
            right: 250,
            top:-1,
            width: 120,
            height: 100
          }}
          src={manu} />

          <div className='imagelogo' >
        <img
          style={{
            position: 'absolute',
            left: 300,
            top: -20,
            width: 160,
            height: 160
          }}
          src={logo} /></div>

        <div className='cardCon'>
           <div className='subti'> <h2>Products Mangement </h2></div>
        <center><Card border='primary' style={{ width: '40rem' }}>
          <Card.Header style={{ backgroundColor: '#1f78b4' }}><h3 style={{ color: 'white' }}>Add Item</h3></Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <label className='lab'>  Product Name : </label>

                <input className='lab1' type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} required />
              <br></br><br></br>
              <label className='lab'> Product Details :</label>
                <input className='lab2' type="text" name="details" value={details} onChange={(e) => setdetails(e.target.value)} required/>
              <br></br><br></br>
              <label className='lab'> Production Status : </label>
                <select className='lab3' type="text" name="stat" value={stat} onChange={(e) => setstat(e.target.value)} required>
                  <option value="Null"></option>
                      <option value="Start"> Start </option>
                      <option value="Paused">Pause</option>
                      <option value="completed">Complete</option>
                      <option value="Malfuntiond"> Malfuntioned </option>
                </select>
              <br></br><br></br>
              <label className='lab'> Machine Number : </label>
                <input className='lab4' type="number" name="m_num" value={m_num} onChange={(e) => setm_num(e.target.value)} />
              <br></br><br></br>
              <input className="button2" type="button" value="Submit" onClick={insert} />
            </form>
          </Card.Body></Card>
        </center>
        </div>
      </motion.div>

  );
}

export default Additem;
