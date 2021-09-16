import React, { useState } from 'react';
import logo from "./assets/cyan.png";
import './MPages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function MAdditem() {

  const [Mname, setname] = useState("");
  //const [details, setdetails] = useState("");
  const [Mstat, setstat] = useState("");
  //const [m_num, setm_num] = useState(0);

  function validateForm() {
    return Mname.length > 0 && Mstat.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: Mname,Machine_stat: Mstat})
    };
    fetch('http://localhost:3220/manu/manf', requestOptions)
      .then(response => response.json());
    alert("Machine Item added")
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
           <div className='subti'> <h2>Machine Managment </h2></div>
        <center><Card border='primary' style={{ width: '40rem' }}>
          <Card.Header style={{ backgroundColor: '#1f78b4' }}><h3 style={{ color: 'white' }}>Add Item</h3></Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <label className='lab'>  Machine Name : </label>

                <input className='lab1' type="text" name="name" value={Mname} onChange={(e) => setname(e.target.value)} />
              <br></br><br></br>
  
              <label className='lab'> Machine Status : </label>
                <select className='lab3' type="text" name="stat" value={Mstat} onChange={(e) => setstat(e.target.value)}>
                  <option value="Null"></option>
                      <option value="Start"> On working  </option>
                      <option value="Paused">Paused</option>
                      <option value="Repaired">Repaired </option>
                      <option value="Malfuntiond"> Malfuntioned </option>
                </select>
              <br></br><br></br>
              <input className="button2" type="button" value="Submit" onClick={insert} />
            </form>
          </Card.Body></Card>
        </center>
        </div>
      </motion.div>

  );
}

export default MAdditem;
