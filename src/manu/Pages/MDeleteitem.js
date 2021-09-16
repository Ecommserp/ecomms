import React, {useState} from 'react';
import logo from "./assets/cyan.png";
import './MPages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function MDeleteitem() {

  const [code, setcode] = useState("");

  async function delete_Macitem(e) {
      /* Prevent button click's default behavior */
      e.preventDefault();

      const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code})
  };
  fetch('http://localhost:3220/macnin_prod/'+ code, requestOptions)
      .then(response => response.json());
      console.log(requestOptions)
      alert("Item Deleted")

  }




  return (
    
    <motion.div className = "deleteitem" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                 right: 40,
                top:-13,}}><br></br>Production</h1></i>

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
            height: 100}}
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
                <div className='subti'> <h2>Machines Mangement </h2></div>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Delete Item</h3></Card.Header>
                <Card.Body>
                <form >
                    <label>
                        Item Code : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={code} onChange={(e) => setcode(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="button2" type="button" value="Delete" onClick={delete_Macitem}/>
                        </form>
                        </Card.Body></Card>
                        </center>
                         </div>
    </motion.div>

  );
}

export default MDeleteitem;
