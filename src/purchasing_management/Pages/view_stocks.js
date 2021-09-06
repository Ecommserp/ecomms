import React from 'react';
import { Line } from 'react-chartjs-2';


import 'bootstrap/dist/css/bootstrap.min.css';

import {motion} from 'framer-motion';


function view_stocks() {
  const data = {
    labels: ['Hammers', 'Wrenches', 'Tapes', 'Cement', 'Wires', 'Screwdriver'],
    datasets: [
      {
        label: 'Quantity of Items',
        data: [12, 19, 7, 5, 12, 3],
        fill: false,
        backgroundColor: 'rgba(34, 167, 240)',
        borderColor: 'rgba(17, 159, 237)',
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
    <div className = 'screen'>
    <motion.div className='home'
  >


                  <table>
                    <tr>
                      <th>
                <Line style= {{width:700, height:200}} data={data} options={options} /></th></tr>


                </table>
    </motion.div></div>
  );
}

export default view_stocks;
