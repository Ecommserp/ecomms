import React from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import './invTypes.css';
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import inventory from "./assets/inventory.png";
import view from './assets/view.jpg';
import generate from './assets/generate.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function Types() {

    const data = {
        labels: ['Manufactured', 'Purchased'],
        datasets: [
          {
            label: 'Product Types',
            data: [3, 6],
            fill: false,
            backgroundColor: [
        '#7353BA',
        '#E94973',
        ],
        hoverBackgroundColor: [
        '#a3b5c7e3',
        '#a3b5c7e3',
        ]
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
  return (
    <div className = 'invscreen'>
    <motion.div className = "types" initial='out'
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
                  <div>
                  <Doughnut  style={{ width: 450, height: 450, position: 'relative',
                  left: -400,
                  top: 10 }} data={data}  />
                  </div>
                  <div style={{position: 'absolute',
                  right: 200,
                  top: 200}}>
                    <div className="typetile_home">
                      <p className="typetile_text">No of Sales for<br></br>Manufactured Items:</p>
                      </div><br></br><br></br><br></br>
                      <div className="typetile_home">
                        <p className="typetile_text">No of Sales for<br></br>Purchased Items:</p>
                        </div>
                        </div>
                  </motion.div></div>

);
}

export default Types;