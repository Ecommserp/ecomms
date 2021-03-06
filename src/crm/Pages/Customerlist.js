import React from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import crm from "./assets/crm.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';



function Customerlist() {
  return (
    <div className = 'screen'>
    <motion.div className = "function GenerateCustomerReport() {" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 15,
                top: 10,}}>Customer<br></br>Relationship<br></br>Management</h1></i>
                <img
                style={{
                  position: 'absolute',
                  left: 200,
                  top: -20,
                width: 160,
              height: 160}}
                src = {logo}/>
                <img 
                style={{
                  position: 'absolute',
                right: 250,
                top: 12,
              width: 120,
            height: 100}}
                  src={crm} />
                  <table style={{width:1000}}>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>Generate Weekly Report</button>
                  </th></tr>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>Generate Monthly Report</button>
                  </th></tr>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>Generate Annual Report</button>
                  </th></tr>
                  </table>
                  </motion.div></div>

);
}

export default Customerlist;
