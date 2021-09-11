import React from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import './invReports.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function ReportsGen() {
  return (
    <div className = 'invscreen'>
    <motion.div className = "reportsgen" initial='out'
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
                  <div className="invtile_gen">
                  <table style={{width:700}}>
                  <tr><th>
                  <button className='invbutton' style={{marginTop: 50}}>Generate Weekly Report</button>
                  </th></tr>
                  <tr><th>
                  <button className='invbutton' style={{marginTop: 50}}>Generate Monthly Report</button>
                  </th></tr>
                  <tr><th>
                  <button className='invbutton' style={{marginTop: 50, marginBottom:50}}>Generate Annual Report</button>
                  </th></tr>
                  </table>
                      </div>
                  </motion.div></div>

);
}

export default ReportsGen;