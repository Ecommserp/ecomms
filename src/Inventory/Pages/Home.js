import React from 'react';
import barchart from "./barchart.jpg";
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
      <h1 style={{
                position: 'absolute',
                right: 10,
                top: 80,}}>Inventory Management</h1>
                <img
                width = "10%" height = "20%"
                style={{
                  position: 'absolute',
                  left: 250,
                  top: 30,}}
                src = {logo}/>
                <table>
                  <tr>
                <th><img width = '80%' height = "80%" src= {barchart}/></th>
                </tr>
                <tr>
                  <th><Button style={{ marginTop: '2rem' }} onClick={event =>  window.location.href='/Additem'} variant = 'success' size= 'lg'>Add Item</Button>
                  <Button style={{ marginLeft: '15rem', marginTop: '2rem' }} onClick={event =>  window.location.href='/Deleteitem'} variant = 'danger' size = 'lg'>Delete Item</Button></th>
                  </tr>
                  </table>
    </motion.div>
  );
}

export default Home;