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
                <div className='subti'> <h3>products </h3></div>
              <table>
                 <tr>
                   <th>
                       <Line style={{ width: 500, height: 800 }} data={data} options={options} /></th></tr>

                    <tr>
                      <th>
                        <button className='button1' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/Additem'}> 1Add Item</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='button1' onClick={event => window.location.href = '/manu/Deleteitem'}>Delete Item</button>
                      </th>
                    </tr>
              </table>
            </div>

              <div className='col1'>
                <div className='subti'> <h3>Machines </h3></div>
                 <table>
                    <tr>
                       <th>
                           <Line style={{ width: 500, height: 800 }} data={data} options={options} />
                        </th>
                    </tr>

                     <tr>
                        <th>
                          <button className='button1' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/Additem'}>Add Item</button>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className='button1' onClick={event => window.location.href = '/manu/Deleteitem'}>Delete Item</button>
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

export default Home;
