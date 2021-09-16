import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import  { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Line } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import manu from "./assets/manu.png"
import logo from "./assets/cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MPages.css';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const columns = [
  { id: 'name', label: 'Product ID', minWidth: 170 },
  { id: 'code', label: 'Product Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(name, code, population) {
  const density = population;
  return { name, code, population};
}

const rows = [
  createData('00001', 'sample data', 132417),
  createData('00002', 'sample data', 140350),
  createData('00003', 'sample data', 132417),
  createData('00004', 'sample data', 140350),
  createData('00005', 'sample data', 132417),
  createData('00006', 'sample data', 140350),
  createData('00007', 'sample data', 132417),
  createData('00008', 'sample data', 140350),
  createData('00009', 'sample data', 140350),
  createData('00010', 'sample data', 132417),
  createData('00020', 'sample data', 140350),
  createData('00030', 'sample data', 132417),
  createData('00040', 'sample data', 140350),
  createData('00050', 'sample data', 132417),
  createData('00060', 'sample data', 140350),
  createData('00070', 'sample data', 132417),
  createData('00080', 'sample data', 140350),
  createData('00090', 'sample data', 140350),
];

function ALLMachins() {
  // const data = {
  //   labels: ['UPcomming ', 'In Process', 'Completed', 'Malfuntioned'],
  //   datasets: [
  //     {
  //       label: 'Quality of Production Process',
  //       data: [3, 6, 10, 5],
  //       fill: false,
  //       backgroundColor: [
  //   '#7353BA',
  //   '#E94973',
  //   '#B7C0EE',
  //   '#F3998E'
  //   ],
  //   hoverBackgroundColor: [
  //   '#a3b5c7e3',
  //   '#a3b5c7e3',
  //   '#a3b5c7e3',
  //   '#a3b5c7e3',
  //   ]
  //     },
  //   ],
  // };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };


  const columns = [
  { id: 'name', label: 'Product ID', minWidth: 170 },
  { id: 'code', label: 'Product Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(name, code, population) {
  const density = population;
  return { name, code, population};
}

const rows = [
  createData('00001', 'sample data', 132417),
  createData('00002', 'sample data', 140350),
  createData('00003', 'sample data', 132417),
  createData('00004', 'sample data', 140350),
  createData('00005', 'sample data', 132417),
  createData('00006', 'sample data', 140350),
  createData('00007', 'sample data', 132417),
  createData('00008', 'sample data', 140350),
  createData('00009', 'sample data', 140350),
  createData('00010', 'sample data', 132417),
  createData('00020', 'sample data', 140350),
  createData('00030', 'sample data', 132417),
  createData('00040', 'sample data', 140350),
  createData('00050', 'sample data', 132417),
  createData('00060', 'sample data', 140350),
  createData('00070', 'sample data', 132417),
  createData('00080', 'sample data', 140350),
  createData('00090', 'sample data', 140350),
];
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
                <div className='subti'> <h3> ALL Machines  </h3></div>
                 <table>
                    <tr>
                       <th>
                          
                        </th>
                    </tr>

                     <tr>
                        <th>
                          <button className='button2' style={{ marginTop: 50 }} onClick={event => window.location.href = '/manu/MAdditem'}>Add Item</button>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className='button2' onClick={event => window.location.href = '/manu/Deleteitem'}>Delete Item</button>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='button2' onClick={event => window.location.href = '/manu/ALLMAdditem'}> All Items</button>

                       </th>
                     </tr>
                  </table>
               </div>
          </div>

        </div>
      </motion.div>

     
  );
}

export default ALLMachins;
