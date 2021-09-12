import React from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import inventory from "./assets/inventory.png";
import search from "./assets/search.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateForm() {

  const [pid, setpid] = React.useState("");
  const [field, setfield] = React.useState("");
  const [nvalue, setnvalue] = React.useState("");

  async function update_product(e) {
    /* Prevent button click's default behavior */
    e.preventDefault();

    const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pid: pid, field: field, nvalue: nvalue})
};

  if({field}=="code"){
  fetch('http://localhost:3220/inventory/id/'+ pid, requestOptions)
    .then(response => response.json());
    console.log(requestOptions)
    alert("Item Updated")}

    else if({field}=="name"){
      fetch('http://localhost:3220/inventory/name/'+ pid, requestOptions)
        .then(response => response.json());
        console.log(requestOptions)
        alert("Item Updated")}

        else if({field}=="type"){
          fetch('http://localhost:3220/inventory/type/'+ pid, requestOptions)
            .then(response => response.json());
            console.log(requestOptions)
            alert("Item Updated")}

            else {
              fetch('http://localhost:3220/inventory/quantity/'+ pid, requestOptions)
                .then(response => response.json());
                console.log(requestOptions)
                alert("Item Updated")}

                setpid("");
                setfield("");
                setnvalue("");
}

  return (
    <div className = 'invscreen'>
    <motion.div className = "updateform" initial='out'
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
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Update Inventory</h3></Card.Header>
                <Card.Body>
                <img style={{ width:'160px',height:'140px' }} src={search} /><br></br><br></br>
                <form>
                  <label style={{marginRight:10}}>
                        Product ID :</label>
                        <input type="text" name="id" value={pid} onChange={(e) => setpid(e.target.value)}/>
                        <br></br><br></br>
                  <label style={{marginRight:10}}>Field to Edit :</label>
                  <select type="text" value={field} style={{width :'176px', marginRight: 8}} onChange={(e) => setfield(e.target.value)}>
                  <option value="NULL"></option>
                      <option value="code">Product ID</option>
                      <option value="name">Product Name</option>
                      <option value="type">Product Type</option>
                      <option value="quantity">Quantity</option>
                </select>
                        <br></br><br></br>
                        <label>
                        New Value : &nbsp;&nbsp;
                        <input type="text" value={nvalue} name="nvalue" onChange={(e) => setnvalue(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="nbutton" type="submit" value="Submit" onClick={update_product}/>
                        </form>
                        </Card.Body></Card>
                        </center>
    </motion.div></div>

  );
}

export default UpdateForm;