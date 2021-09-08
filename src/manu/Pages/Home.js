import React from 'react';
import { Line } from 'react-chartjs-2';
import manu from "./assets/manu.png"
import logo from "./assets/cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages.css';
import { motion } from 'framer-motion';
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
    <div className='screen'>

      <img
        style={{
          position: 'absolute',
          left: 800,
          top: -20,
          width: 160,
          height: 160
        }}
        src={logo} />

      <motion.div className='home' initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <div><i><h1 style={{
          position: 'absolute',
          left: 820,
          top: 60,
        }}><br></br>Manufacturing</h1></i> </div>

        <div><i><h1 style={{
          position: 'absolute',
          left: 750,
          top: 150,
        }}>Management</h1></i> </div>

        <img
          style={{
            position: 'absolute',
            left: 700,
            top: 75,
            width: 120,
            height: 100
          }}
          src={manu} />
        <div>
          <table>
            <tr>
              <th>
                <Line style={{ width: 700, height: 200 }} data={data} options={options} /></th></tr>

            <tr><th><button className='button1' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/Additem'}>Add Item</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='button1' onClick={event => window.location.href = '/inventory/Deleteitem'}>Delete Item</button>
            </th></tr>
          </table>
        </div>
      </motion.div></div>
  );
}

export default Home;