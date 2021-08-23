import React from 'react';
import barchart from "./barchart.jpg";
import inventory from "./assets/inventory.png"
import logo from "./cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Home() {
  return (
    <motion.div className='home' initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
      <i><h1 style={{
                position: 'absolute',
                right: '1%',
                top: '10%',}}>Inventory<br></br>Management</h1></i>
                <img
                width = "10%" height = "20%"
                style={{
                  position: 'absolute',
                  left: '17%',
                  top: '5%',}}
                src = {logo}/>
                <img 
                width = "8%" height = "14%"
                style={{
                  position: 'absolute',
                right: '16%',
                top: '10%',}}
                  src={inventory} />
                <table>
                  <tr>
                <th><img width = '80%' height = "80%" src= {barchart}/></th>
                </tr>
                <tr>
                  <th><Button style={{ marginTop: '2rem' }} onClick={event =>  window.location.href='/inventory/Additem'} variant = 'primary' size= 'lg'>Add Item</Button>
                  <Button style={{ marginLeft: '15rem', marginTop: '2rem' }} onClick={event =>  window.location.href='/inventory/Deleteitem'} variant = 'danger' size = 'lg'>Delete Item</Button></th>
                  </tr>
                  </table>
    </motion.div>
  );
}

export default Home;