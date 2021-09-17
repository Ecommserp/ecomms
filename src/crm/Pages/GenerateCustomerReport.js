import React from 'react';
import './CRMPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function GenerateCustomerReport() {
  return (
    <div className = 'screen7'>
    <motion.div className = "function GenerateCustomerReport() {" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        
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

export default GenerateCustomerReport;