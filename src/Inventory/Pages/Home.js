import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import inventory from "./assets/inventory.png"
import logo from "./assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './invPages.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

function Home() {

  const [activeSlide, setActiveSlide] = useState(0);

  const data = {
    labels: ['Cement', 'Wires', 'Bulbs', 'Banners', 'Wrenches'],
    datasets: [{
        label: 'Quantity of Highest Selling Products',
        data: [1000,400,500,390,600],
        fill: false,
        borderWidth: 2,
        backgroundColor: '#1F78B4',
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
                  <table>
                  <tr><th><td><Bar style={{ marginTop:50 ,width: 900}} data={data} options={options} /></td></th></tr>
                  <tr><th><td><button className='nbutton' style={{marginTop: 40, marginLeft:370}} onClick={event =>  window.location.href='/inventory/request'}>Request Purchase</button></td></th></tr>
            </table>
    </motion.div></div>
  );
                
}

export default Home;