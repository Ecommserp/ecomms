import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function ReportsGen() {
  return (
    <div className = 'screen'>
    <motion.div className = "reportsgen" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 15,
                top: 10,}}>Inventory<br></br>Management</h1></i>
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
                  src={inventory} />
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

export default ReportsGen;