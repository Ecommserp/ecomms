import React, {useState} from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import './invTypes.css';
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import inventory from "./assets/inventory.png";
import view from './assets/view.jpg';
import generate from './assets/generate.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import ReactDOM from "react-dom";


function Types() {

  let ptypes = [];
  let pqua = [];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }
    const data = {
        labels: ptypes,
        datasets: [
          {
            label: 'Product Types',
            data: pqua,
            fill: false,
            backgroundColor: [
        '#7353BA',
        '#E94973',
        ],
        hoverBackgroundColor: [
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

      const [manu, setmanu] = useState("");
      const [purc, setpurc] = useState("");

      async function getData_rev() {

          const apiUrl = 'http://localhost:3220/bI/pp';
          const data = await getData(apiUrl);

            ptypes[0] = data[0].Product_type;
            pqua[0] = data[0].qua;

            ptypes[1] = data[1].Product_type;
            pqua[1] = data[1].qua;

if(data[0].Product_type == "MANU") {
  setmanu(data[0].qua);
  setpurc(data[1].qua);
}
if(data[0].Product_type == "PURC") {
  setmanu(data[1].qua);
  setpurc(data[0].qua);
}


          sample_aa();


      }

      async function sample_aa() {
        ReactDOM.render(<div><Doughnut  style={{ width: 480, position: 'relative',
        left: -300,
        top: 10 }} data={data}  />
        </div>, document.getElementById('dough_g'));

      }

      getData_rev();

  return (
    <div className = 'invscreen'>
    <motion.div className = "types" initial='out'
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
                  <div>
                  <div id="dough_g"> </div>
                  </div>
                  <div style={{position: 'absolute',
                  right: 200,
                  top: 200}}>
                    <div className="typetile_home">
                      <p className="typetile_text">Number of<br></br>Manufactured Items: {manu}</p>
                      </div><br></br><br></br><br></br>
                      <div className="typetile_home">
                        <p className="typetile_text">Number of<br></br>Purchased Items: {purc}</p>
                        </div>
                        </div>
                  </motion.div></div>

);
}

export default Types;
