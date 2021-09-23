import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom";
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import inventory from "./assets/inventory.png"
import logo from "./assets/logo.png";
import add from "./assets/add.jpg";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invPages.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Home() {

  const [name, setname] = useState("");
  const [type,settype] = useState("");
  const [quantity, setquantity] = useState("");

  function validateForm() {
    return name.length > 0 && quantity.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();


  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, quantity: quantity})
    };
    fetch('http://localhost:3220/request', requestOptions)
        .then(response => response.json());
        alert("Item added")

        
        setname("");
        settype("");
        setquantity("");
  }

  const [activeSlide, setActiveSlide] = useState(0);

  const data = {
    labels: ['Cement', 'Wires', 'Bulbs', 'Banners', 'Wrenches'],
    datasets: [{
        label: 'Quantity of Highest Selling Products',
        data: [1000,400,500,390,600],
        fill: false,
        borderWidth: 2,
        backgroundColor: '#1F78B4',
        borderColor: 'rgba(44, 62, 80, 1)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  


  return (
    <div className = 'invscreen'>
    <motion.div className='home' initial='out'
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
                  <table>
                  <tr><th><td><Bar style={{ marginTop:50 ,width: 900}} data={data} options={options} /></td></th></tr>
                  <tr><th><td><Popup trigger={<button className='nbutton' style={{marginTop: 40, marginLeft:370}}>Request Product</button>}modal>
                  <center><Card border ='primary' style={{height: '490px'}}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Request Product</h3></Card.Header>
                <Card.Body>
                <img style={{ width:'120px',height:'120px' }} src={add} />
                <form onSubmit={handleSubmit}>
                        <label>
                        Product Name :
                        <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} style={{marginLeft:10}}/>
                        </label><br></br><br></br>
                        <label> Product Type : </label>
                <select style = {{width:175, marginLeft:15}} type="text" name="stat" value={type} onChange={(e) => settype(e.target.value)}>
                  <option value="Null"></option>
                      <option value="PURC"> PURC </option>
                      <option value="MANU">MANU</option>
                      <option value="OTHER">OTHER</option>
                </select><br></br><br></br>
                        <label style={{marginLeft:36}}>
                        Quantity :
                        <input type="text" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} style={{marginLeft:10}}/>
                        </label><br></br><br></br>
                        <input className="nbutton" type="button" value="Submit" onClick={insert}/>
                        </form>
                        </Card.Body></Card>
                        </center></Popup></td></th></tr>
            </table>
    </motion.div></div>
  );
                
}

export default Home;