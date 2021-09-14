import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import './manfReports.css';
import manu from "./assets/manu.png";
import view from './assets/rportM.jpg';
import generate from './assets/genratep.jpg';
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
               right: 40,
               top:-13,
               }}><br></br>Production</h1></i>

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

                    <div className="tile_home" onClick={event =>  window.location.href='/manu/viewreports'}>
                      <p className="tile_text">View<br />Reports</p>
                      <img src={view} className="view_img" alt="View Reports" />
                      </div>
                      <div className="space"></div>
                      <div className="space"></div>
                      <div className="space"></div>
                      <div className="tile_home" onClick={event =>  window.location.href='/manu/generatereports'}>
                        <p className="tile_text">Generate<br />Reports</p>
                        <img src={generate} className="generate_img" alt="Generate Reports" />
                        </div>
                  </motion.div></div>

);
}

export default Reports;
