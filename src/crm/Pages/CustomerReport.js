import React from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import './Report.css';
import crm from "./assets/crm.png";
import view from './assets/view.jpg';
import generate from './assets/generate.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function CustomerReports() {


  return (
<<<<<<< Updated upstream
    <div className = 'screen'>
    <motion.div className = "CustomerReports" initial='out'
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
                    <div className="tile_home" onClick={event =>  window.location.href='/crm/ViewCustomerReports'}>
                      <p className="tile_text">View<br />ViewCustomerReports</p>
                      <img src={view} className="view_img" alt="View Reports" />
                      </div>
                      <div className="space"></div>
                      <div className="space"></div>
                      <div className="space"></div>
                      <div className="tile_home" onClick={event =>  window.location.href='/inventory/GenerateCustomerReport'}>
                        <p className="tile_text">Generate<br />GenerateCustomerReport</p>
                        <img src={generate} className="generate_img" alt="Generate Reports" />
                        </div>
                  </motion.div></div>

);
}

export default CustomerReports;
=======

    <table style={{width:10000  ,height:500 , marginTop:100}}>
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

  );
}


export default CustomerReports;
>>>>>>> Stashed changes
