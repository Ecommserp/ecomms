import React from 'react';
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import manu from "./assets/manu.png"
import logo from "./assets/cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MPages.css';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function MHome() {
  const data = {
    labels: ['On working ', 'Paused', 'Repaired', 'Malfuntioned'],
    datasets: [
      {
        label: 'Quality of Production Process',
        data: [3, 6, 10, 5],
        fill: false,
        backgroundColor: [
    '#7353BA',
    '#E94973',
    '#B7C0EE',
    '#F3998E'
    ],
    hoverBackgroundColor: [
    '#a3b5c7e3',
    '#a3b5c7e3',
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
   

      <motion.div className='home' initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <div><i><h1 style={{
          position: 'absolute',
          right: 40,
          top:-13,
        }}><br></br>Production </h1></i> </div>

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
            height: 100
          }}
          src={manu} />

           <div className='imagelogo' >
                <img style={{
                     position: 'absolute',
                    left: 300,
                    top: -20,
                    width: 160,
                    height: 160
                  }}src={logo} /></div>
     <div className="container">

          <div className='row'>


              <div className='col1'>
                <div className='subti'> <h3>Machines Management </h3></div>
                 <table>
                    <tr>
                       <th>
                           <Doughnut  style={{ width: 500, height: 800 }} data={data}  />
                        </th>
                    </tr>

                     <tr>
                        <th>
                          
                          <button className='button2' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/MAdditem'}>Add Item</button>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className='button2' onClick={event => window.location.href = '/manu/MDeleteitem'}>Delete Item</button>
                       </th>
                     </tr>
            
                  </table>
               </div>
          </div>

        </div>
      </motion.div>

     
  );
}

export default MHome;
