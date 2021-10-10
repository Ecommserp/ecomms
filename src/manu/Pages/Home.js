import React from 'react';
import ReactDOM from 'react-dom';
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

    let data_pp = [];

    async function getData(url) {
    const response = await fetch(url);

    return response.json();
    }

  const data = {
    labels: ['UPcomming ', 'In Process', 'Completed', 'Malfuntioned'],
    datasets: [
      {
        label: 'Quality of Production Process',
        data: data_pp,
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

  async function getData_rev() {

      const apiUrl_1 = 'http://localhost:3220/manu_prod_g/graph';
      const data_1 = await getData(apiUrl_1);

      data_pp[0] = data_1[0].cnt;
      data_pp[1] = data_1[1].cnt;
      data_pp[2] = data_1[2].cnt;
      data_pp[3] = data_1[3].cnt;
      sample_aa();


  }

  async function sample_aa() {
    ReactDOM.render(<Bar style={{ width: 700, height: 800 }} data={data} options={options} />, document.getElementById('graph_cont'));

  }

  getData_rev();


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
                       <div id="graph_cont">
                       </div>
                      </th>
                    </tr>

                    <tr>
                      <th>

                        <button className='button2' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/Additem'}> Add Item</button>
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
