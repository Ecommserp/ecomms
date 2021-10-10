import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CRMPages.css';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function Customeranalytics() {

  let data_pp = [];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

  const data = {
    labels: ['Assigned ', 'Pending', 'Resolved'],
    datasets: [
      {
        label: 'Quality of Production Process',
        data: data_pp,
        fill: false,
        backgroundColor: [
    '##ff3030',
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

  async function getData_rev() {

      const apiUrl_1 = 'http://localhost:3220/crm/dough';
      const data_1 = await getData(apiUrl_1);

      data_pp[0] = data_1[0].count;
      data_pp[1] = data_1[1].count;
      data_pp[2] = data_1[2].count;
      sample_aa();


  }

  async function sample_aa() {
    ReactDOM.render(<Doughnut  style={{ width: 500, height: 800 }} data={data}  />, document.getElementById('chart'));

  }

  getData_rev();
  return (
    <div className='screen5'>

      <motion.div className='home' initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <div className="container5">
<div className='row'>


              <div className='col5'>
                <div className='subti5'> <h3> Customer Inquiry Management </h3></div>
                 <table>
                    <tr>
                       <th>
                           <div id="chart">
                           </div>
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
