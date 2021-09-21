import React from 'react';
import logo from "./cyan.png";
import { Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import ReactDOM from 'react-dom'



let data_revy1 = [];
let data_revy2 = [];
let data_revy3 = [];



const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-3',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};


async function getData(url) {
const response = await fetch(url);

return response.json();
}

async function getData_rev() {


    const apiUrl = 'http://localhost:3220/BI/rev';
    const data = await getData(apiUrl);

    for(var i = 0; i < data.length; i++){

      if(data[i].year == '2019'){
        data_revy1[i] = data[i].total;
      }

      if(data[i].year == '2020'){
        data_revy2[i - 12] = data[i].total;
      }

      if(data[i].year == '2021'){
        data_revy3[i - 24] = data[i].total;
      }


    }
    sample_aa();


}

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: '2019',
      data: data_revy1,
      fill: false,
      backgroundColor: 'rgb(130, 219, 109)',
      borderColor: 'rgba(130, 219, 109, 0.2)',
    },

    {
      label: '2020',
      data: data_revy2,
      fill: false,
      backgroundColor: 'rgb(207, 131, 212)',
      borderColor: 'rgba(207, 131, 212, 0.2)',
    },
    {
      label: '2021',
      data: data_revy3,
      fill: false,
      backgroundColor: 'rgb(102, 159, 223)',
      borderColor: 'rgba(102, 159, 223, 0.2)',
    },

  ],
};

async function sample_aa() {
  //alert(data_revy1)
  ReactDOM.render(<Line height='140' data={data} options={options} />, document.getElementById('revenue_graph'));
}

function financial() {

  getData_rev();

  return (
    <div className="App_bi">
    <i><h1 style={{
            position: 'absolute',
            right: 50,
            top: 72,}}>Financial<br></br>Report</h1></i>
            <img
            style={{
              position: 'absolute',
              left: 250,
              top: 50,
            width: 160
          }} />

    <div className="revenue" id="revenue">
    <label className="tile_text">Revenue Growth</label><br /><br /><br />
    <br />
    <div id="revenue_graph"> </div>
    </div>
    <div className="space"></div>
    <div className="p_margin">
    <label className="tile_text">Profit Margin</label>
    <div className="drop_down">
    <FormControl>
      <Select>
        <MenuItem value={10}>Last 3 Months</MenuItem>
        <MenuItem value={20}>Last 6 Months</MenuItem>
        <MenuItem value={30}>Last Year</MenuItem>
      </Select>
    </FormControl>
    </div>
    </div>
    </div>


  );
}
export default financial;
