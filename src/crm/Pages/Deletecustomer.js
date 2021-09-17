import React, {useState} from 'react';

import './CRMPages.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Deletecustomer() {

  const [nic, setnic] = useState("");


  async function delete_citem(e) {
    /* Prevent button click's default behavior */
    e.preventDefault();

    const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nic: nic})
};
    fetch('http://localhost:3220/crmI/'+ nic, requestOptions)
        .then(response => response.json());
        console.log(requestOptions)
        alert("customer Deleted")
  }


  return (
    <div className = 'screen7'>
    <motion.div className = "deletecustomer" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>


                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Delete customer inquiries</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        NIC : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="nic" value={nic} onChange={(e) => setnic(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="button1" type="button" value="Delete" onClick={delete_citem}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default Deletecustomer;
