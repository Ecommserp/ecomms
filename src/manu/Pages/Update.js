import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';


function Update() {

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }
  const [ID, setID] = React.useState("");
  const [name, setName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [stat, setStat] = React.useState("");
  const [machine, setMachine] = React.useState("");

  async function keyPress(e){
        if(e.keyCode == 13){
           //console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/manu/'+ ID;
           const data = await getData(apiUrl);



           /* Call the state's "setter" method to update "userInput" state */
           setName(data.name)
           setDetails(data.Details)
           setStat(data.Production_stat)
           setMachine(data.Machine_no)
        }
     }

     async function update(e) {
         /* Prevent button click's default behavior */
         e.preventDefault();

         const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name: name, Details: details, Production_stat: stat, Machine_no: machine})
     };
     fetch('http://localhost:3220/manu_prod/'+ ID, requestOptions)
         .then(response => response.json());
         console.log(requestOptions)
         alert("Item Updated")

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
          right: 40,
          top: -13,
        }}><br></br>Production</h1></i>
        <div><i><h1 style={{
          position: 'absolute',
          right: 40,
          top: 70,
        }}>Manufacturing Management</h1></i> </div>

        <img
          style={{
            position: 'absolute',
            right: 250,
            top: -1,
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
        <center><Card border='primary' style={{ width: '40rem' }}>
          <Card.Header style={{ backgroundColor: '#1f78b4' }}><h3 style={{ color: 'white' }}>Search Item</h3></Card.Header>
          <Card.Body>

              <label>
                Item Code : &nbsp;&nbsp;&nbsp;</label>
                <input type="text" name="codep" value={ID} onKeyDown={keyPress} onChange={(e) => setID(e.target.value)}/><br></br>
                <label>
                  Item name : &nbsp;&nbsp;&nbsp;</label>
                  <input type="text" name="codep" value={name} onChange={(e) => setName(e.target.value)}/><br></br>
                  <label>
                    Item details : &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="codep" value={details} onChange={(e) => setDetails(e.target.value)}/><br></br>
                    <label>
                      Item stat : &nbsp;&nbsp;&nbsp;</label>
                      <input type="text" name="codep" value={stat} onChange={(e) => setStat(e.target.value)}/><br></br>
                      <label>
                        Machine No : &nbsp;&nbsp;&nbsp;</label>
                        <input type="text" name="codep" value={machine} onChange={(e) => setMachine(e.target.value)}/><br></br>
              <br></br><br></br>
              <input className="button1" type="button" value="Search" onClick={update}/>
          </Card.Body></Card>
        </center>
      </motion.div></div>

  );
}

export default Update;
