import React from 'react';
import { Line } from 'react-chartjs-2';
import inventory from "./assets/inventory.png"
import logo from "./cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
    <motion.div className='home' initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
      <i><h1 style={{
                position: 'absolute',
                right: 10,
                top: 72,}}>Inventory<br></br>Management</h1></i>
                <img
                style={{
                  position: 'absolute',
                  left: 250,
                  top: 50,
                width: 160,
              height: 160}}
                src = {logo}/>
                <img 
                style={{
                  position: 'absolute',
                right: 240,
                top: 76,
              width: 120,
            height: 100}}
                  src={inventory} />
                <table>
                  <tr>
                <th><Line data={data} options={options} /></th>
                </tr>
                <tr>
                  <th><Button style={{ marginTop: '5rem' }} onClick={event =>  window.location.href='/inventory/Additem'} variant = 'primary' size= 'lg'>Add Item</Button>
                  <Button style={{ marginLeft: '15rem', marginTop: '5rem' }} onClick={event =>  window.location.href='/inventory/Deleteitem'} variant = 'danger' size = 'lg'>Delete Item</Button></th>
                  </tr>
                  </table>
    </motion.div>
  );
}

export default Home;