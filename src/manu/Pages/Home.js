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

function Home() {
  const data = {
    labels: ['UPcomming ', 'In Process', 'Completed', 'Malfuntioned'],
    datasets: [
      {
        label: 'Quality of Production Process',
        data: [3, 6, 10, 5],
        fill: false,
        borderWidth: 2,
        backgroundColor: '#364fc7',
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
                <div className='subti'> <h3>products Management </h3></div>
              <table>
                 <tr>
                   <th>
                       <Bar style={{ width: 700, height: 800 }} data={data} options={options} />
                      </th>
                    </tr>

                    <tr>
                      <th>
                        
                        <button className='button2' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/Additem'}> 1Add Item</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='button2' onClick={event => window.location.href = '/manu/Deleteitem'}>Delete Item</button>
                      </th>
                    </tr>
              </table>
            </div>
          </div>

        </div>
      </motion.div>

     
  );
}

export default Home;
