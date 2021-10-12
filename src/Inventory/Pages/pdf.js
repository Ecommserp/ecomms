import React, {Component, PropTypes, useState} from 'react';
import { jsPDF } from "jspdf";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './invReports.css';
import ReactDOM from 'react-dom';
import * as _html2canvas from "html2canvas";
import logo from "./assets/logo.png";
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import './invPages.css';
import './invReports.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import generate from './assets/generate.jpg';


// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


let from = '';
let to = '';

  function setFrom(det){
    from = det;
  }

  function setTo(det){
    to = det;
  }

let repo_type;
let repo_time;
let repo_format;
let currentDate = '10/12/2021';
const html2canvas: any = _html2canvas;

let data_revy1 = [];
let data_revy2 = [];
let data_revy3 = [];

let year_rev = [];
let month_rev = [];
let total_rev = [];
let date_rev = [];

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        fontSize: 5,
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        fontSize: 5,
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-3',
        fontSize: 5,
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const data1 = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
  datasets: [
    {
      label: '2020',
      data: [400, 354, 893, 483, 702, 294, 498],
      fill: true,
      backgroundColor: 'rgb(39,143,180,  0.7)',
      borderColor: 'rgba(39,143,180, 0.2)',
    },
    {
      label: '2021',
      data: [384, 740, 274, 933, 639, 385, 748],
      fill: true,
      backgroundColor: 'rgb(104,194,180,  0.7)',
      borderColor: 'rgba(104,194,180, 0.2)',
    },

  ],
};

const options1 = {
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
async function getData(url) {
const response = await fetch(url);

return response.json();
}

async function getCurrentDate(separator=''){

let myCurrentDate = new Date()
let date = myCurrentDate.getDate();
let month = myCurrentDate.getMonth() + 1;
let year = myCurrentDate.getFullYear();

return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

async function sample_aa() {
  //alert(data_revy1)
    ReactDOM.render(
      <div className='pdfTable'>
      <div style={{'marginTop':'-500'}}>
      <label className="tile_text_bi"> Inventory Status Report</label><br></br>
      <label className="tile_text_bi"> {currentDate}</label>
      <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '15px', 'width': '200px'}}>
    <th>Product ID</th>
    <th>Product Name</th>
    <th>Product Type</th>
    <th>Quantity</th>
  </tr>
{
year_rev.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{value}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{month_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{total_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{date_rev[index]}</td></tr>
})
}
</tbody>
</table></div></div>, document.getElementById('divToPrint'));

}

async function sample_aaa() {
  //alert(data_revy1)
    ReactDOM.render(
      <div className='pdfTable'>
      <div style={{'marginTop':'-500'}}>
      <label className="tile_text_bi"> Inventory Monthly Incomings Report</label><br></br>
      <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '15px', 'width': '200px'}}>
    <th>Product ID</th>
    <th>Quantity</th>
    <th>Date</th>
  </tr>
{
year_rev.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{value}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{month_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{total_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{date_rev[index]}</td></tr>
})
}
</tbody>
</table></div></div>, document.getElementById('divToPrint'));

}

async function sample_aaaa() {
  //alert(data_revy1)
    ReactDOM.render(
      <div className='pdfTable'>
      <div style={{'marginTop':'-500'}}>
      <label className="tile_text_bi"> Inventory Weekly Incomings Report</label><br></br>
      <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '15px', 'width': '200px'}}>
    <th>Product ID</th>
    <th>Quantity</th>
    <th>Date</th>
  </tr>
{
year_rev.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{value}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{month_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{total_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{date_rev[index]}</td></tr>
})
}
</tbody>
</table></div></div>, document.getElementById('divToPrint'));

}


  async function getData_rev7() {

      const apiUrl = 'http://localhost:3220/inventory';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        year_rev[i] = data[i].Product_ID;
        month_rev[i] = data[i].Product_name;
        total_rev[i] = data[i].Product_type;
        date_rev[i] = data[i].quantity;

      }
      sample_aa();
  }

  async function getData_rev30() {

      const apiUrl = 'http://localhost:3220/purchases';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        year_rev[i] = data[i].Product_id;
        month_rev[i] = data[i].quantity;
        total_rev[i] = data[i].Date;

      }
      sample_aaa();
  }

  async function getData_rev365() {

      const apiUrl = 'http://localhost:3220/crm/inq30';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        year_rev[i] = data[i].Product_id;
        month_rev[i] = data[i].quantity;
        total_rev[i] = data[i].Date;

      }
      sample_aaaa();
  }

//weekly report
function printDocument7() {

  getData_rev7();

    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  function printDocument30() {

    getData_rev30();

      const input = document.getElementById('divToPrint');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'JPEG', 0, 0);
          // pdf.output('dataurlnewwindow');
          pdf.save("download.pdf");
        })
      ;
    }

    function printDocument365() {

      getData_rev365();

        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }



export default class Export extends Component {


  constructor(props) {
    super(props);
  }


  

  render() {
    return (<div>

<div className = 'invscreen'>
    <motion.div className = "reportsgen" initial='out'
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
                  <div className="invtile_gen" style = {{marginTop:50}}>
                  <img src={generate} className="invgenerate_img" alt="Generate Reports" />
                  <table style={{width:700}}>
                  <tr><th>
                  <button className='invbutton' style={{marginTop: 30, marginBottom:30}} onClick={printDocument7}>Generate Status Report</button>
                  </th></tr>
                  <tr><th>
                    <p>Incomings Reports</p>
                    <button className='invbutton' style={{marginTop: 30, marginBottom:50}} onClick={printDocument365}>Generate Weekly Report</button><br></br>
                  <button className='invbutton' style={{marginTop: 30, marginBottom:50}} onClick={printDocument30}>Generate Monthly Report</button>
                  </th></tr>
                  </table>
                      </div>
                  </motion.div></div>

      <div id="divToPrint" className="pdf_temp">
        <div>Note: Here the dimensions of div are same as A4</div>
        <div>You Can add any component here</div>
      </div>
    </div> );
  }
}
