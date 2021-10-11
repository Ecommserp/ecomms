import React from 'react';
import logo from "./assets/cyan.png";
import './MPages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';


function MUpdate() {

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }
  const [ID, setID] = React.useState("");
  const [name, setName] = React.useState("");
  //const [details, setDetails] = React.useState("");
  const [Mcstat, setStat] = React.useState("");
  //const [machine, setMachine] = React.useState("");

  async function keyPress(e){
        if(e.keyCode == 13){
           //console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/manf/'+ ID;
           const data = await getData(apiUrl);



           /* Call the state's "setter" method to update "userInput" state */
           setName(data.name)
           //setDetails(data.Details)
           setStat(data.Machine_stat)
           //setMachine(data.Machine_no)
        }
     }

     async function update(e) {
         /* Prevent button click's default behavior */
         e.preventDefault();

         const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name: name, Machine_stat: Mcstat})
     };
     fetch('http://localhost:3220/macnin_prod/'+ ID, requestOptions)
         .then(response => response.json());
         console.log(requestOptions)
         alert("Item Updated")

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
            <div className='cardCon'>
                  <div className='subti'> <h2>Machine Mangement </h2></div>
        <center><Card border='primary' style={{ width: '40rem' }}>
          <Card.Header style={{ backgroundColor: '#1f78b4' }}><h3 style={{ color: 'white' }}>Search Item</h3></Card.Header>
          <Card.Body>

               <label className='lab'>  Machine ID : </label>
                <input className='lab1'  type="text" name="codep" value={ID} onKeyDown={keyPress} onChange={(e) => setID(e.target.value)}/><br></br>
                 <br></br>
              <label className='lab'>   Machine Name  : </label>
                <input className='lab2' type="text" name="codep" value={name} onChange={(e) => setName(e.target.value)}/><br></br>
               <br></br>
              
              <label className='lab'> Machine Status : </label>
                <select  className='lab3' type="text" name="codep" value={Mcstat} onChange={(e) => setStat(e.target.value)}>
                  <option value="Null"></option>
                      <option value="Start"> On working </option>
                      <option value="Released">Released</option>
                      <option value="Repaired">Repaired</option>
                      <option value="Malfuntiond"> Malfuntioned </option>
                </select>
                  <br></br>
               <br></br>
              
              <input className="button2" type="button" value="Update" onClick={update}/>
          </Card.Body></Card>
        </center>
        </div>
      </motion.div>

  );
}

export default MUpdate;
