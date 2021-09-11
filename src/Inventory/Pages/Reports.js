import React from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import './invReports.css';
import inventory from "./assets/inventory.png";
import view from './assets/view.jpg';
import generate from './assets/generate.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function Reports() {
  return (
    <div className = 'invscreen'>
    <motion.div className = "reports" initial='out'
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
                    <div className="invtile_home" onClick={event =>  window.location.href='/inventory/viewreports'} style={{marginRight: 50}}>
                      <p className="invtile_text">View<br />Reports</p>
                      <img src={view} className="invview_img" alt="View Reports" />
                      </div>
                      <div className="invtile_home" onClick={event =>  window.location.href='/inventory/generatereports'}>
                        <p className="invtile_text">Generate<br />Reports</p>
                        <img src={generate} className="invgenerate_img" alt="Generate Reports" />
                        </div>
                  </motion.div></div>

);
}

export default Reports;