import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function ReportsView() {
  return (
    <div className = 'screen'>
    <motion.div className = "reportsview" initial='out'
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

           <div className='Rcont'>    

                  <button className='button1' style={{position: 'absolute',
                  left: 500,
                  top: 150,
                  width: 300}}>View Purchasing Reports</button>
                  <button className='button1' style={{position: 'absolute',
                  right: 100,
                  top: 150,
                  width: 300}}>View Sales Report</button>
                  <table style={{width:1000}}>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>View Status Report</button>
                  </th></tr>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>View Weekly Reports</button>
                  </th></tr>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>View Monthly Reports</button>
                  </th></tr>
                  <tr><th>
                  <button className='button1' style={{marginTop: 50}}>View Annual Reports</button>
                  </th></tr>
                  </table>
                  </div> 
                  </motion.div></div>

);
}

export default ReportsView;
