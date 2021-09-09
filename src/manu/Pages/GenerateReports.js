import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import manu from "./assets/manu.png"
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
