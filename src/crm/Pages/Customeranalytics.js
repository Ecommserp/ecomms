import React from 'react';
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CRMPages.css';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function Customeranalytics() {
  const data = {
    labels: ['Pending ', 'Assigned', 'Resolved'],
    datasets: [
      {
        label: 'Quality of Production Process',
        data: [3, 6, 10],
        fill: false,
        backgroundColor: [
    '#7353BA',
    '#E94973',
    '#B7C0EE',
    
    ],
    hoverBackgroundColor: [
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
    <div className='screen7'>

      <motion.div className='home' initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <div className="container">

          <div className='row'>


              <div className='col1'>
                <div className='subti'> <h3>Inquiry Management </h3></div>
                 <table>
                    <tr>
                       <th>
                           <Doughnut  style={{ width: 500, height: 800 }} data={data}  />
                        </th>
                    </tr>

                    
                  </table>
               </div>
          </div>

        </div>
      </motion.div>

      </div>
  );
}

export default Customeranalytics;

