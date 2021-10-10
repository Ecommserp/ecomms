import React from 'react';
import { Line } from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import manu from "./assets/manu.png"
import logo from "./assets/cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MPages.css';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function MHome() {

  let data_pp = [];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

  const data = {
    labels: ['Start ', 'Paused', 'Repaired', 'Malfuntioned'],
    datasets: [
      {
        label: 'Quality of Production Process',
        data: data_pp,
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
  async function getData_rev() {

      const apiUrl_1 = 'http://localhost:3220/manu_prod_g/dough';
      const data_1 = await getData(apiUrl_1);

      data_pp[0] = data_1[0].count;
      data_pp[1] = data_1[1].count;
      data_pp[2] = data_1[2].count;
      data_pp[3] = data_1[3].count;
      sample_aa();


  }

  async function sample_aa() {
    ReactDOM.render(<Doughnut  style={{ width: 500, height: 800 }} data={data}  />, document.getElementById('chart'));

  }

  getData_rev();
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
                       <div id="chart">
                       </div>
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
