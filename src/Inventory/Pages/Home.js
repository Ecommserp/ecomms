import React from 'react';
import { Line } from 'react-chartjs-2';
import inventory from "./assets/inventory.png"
import logo from "./assets/cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './invPages.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Home() {
  const data = {
    labels: ['Hammers', 'Wrenches', 'Tapes', 'Cement', 'Wires', 'Screwdriver'],
    datasets: [
      {
        label: 'Quantity of Items',
        data: [12, 19, 7, 5, 12, 3],
        fill: false,
        backgroundColor: 'rgba(34, 167, 240)',
        borderColor: 'rgba(44, 62, 80, 1)',
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
    <motion.div className='home' initial='out'
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
                  <table>
                    <tr>
                      <th>
                <Line style= {{width:700, height:200}} data={data} options={options} /></th></tr>
                
                <tr><th><button className='button1' style={{marginTop: 50}} onClick={event =>  window.location.href='/inventory/Additem'}>Add Item</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='button1' onClick={event =>  window.location.href='/inventory/Deleteitem'}>Delete Item</button>
                </th></tr>
                </table>
    </motion.div></div>
  );
}

export default Home;