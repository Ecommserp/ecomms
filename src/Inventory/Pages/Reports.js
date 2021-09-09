import React from 'react';
import logo from "./assets/cyan.png";
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
    <div className = 'screen'>
    <motion.div className = "reports" initial='out'
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
                    <div className="tile_home" onClick={event =>  window.location.href='/inventory/viewreports'}>
                      <p className="tile_text">View<br />Reports</p>
                      <img src={view} className="view_img" alt="View Reports" />
                      </div>
                      <div className="space"></div>
                      <div className="space"></div>
                      <div className="space"></div>
                      <div className="tile_home" onClick={event =>  window.location.href='/inventory/generatereports'}>
                        <p className="tile_text">Generate<br />Reports</p>
                        <img src={generate} className="generate_img" alt="Generate Reports" />
                        </div>
                  </motion.div></div>

);
}

export default Reports;