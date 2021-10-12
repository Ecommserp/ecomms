import React, {Component, PropTypes} from 'react';
import { jsPDF } from "jspdf";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';

import * as _html2canvas from "html2canvas";

import './bi.css';


// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

let repo_type;
let repo_time;
let repo_format;

const html2canvas: any = _html2canvas;

let data_revy1 = [];
let data_revy2 = [];
let data_revy3 = [];
let date_rev = [];

let year_rev = [];
let month_rev = [];
let total_rev = [];

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

async function sample_aa() {
  //alert(data_revy1)
  if(repo_type == 20){
    ReactDOM.render(
      <div>
      <label className="tile_text_bi">Revenue Growth</label>
      <Line height='140' data={data} options={options} />
      <label className="tile_text_bi">Profit Margin</label>
<Line height='130' data={data1} options={options1} />
</div>
, document.getElementById('divToPrint'));
  }

  if(repo_type == 10){
    ReactDOM.render(<Line height='140' data={data} options={options} />, document.getElementById('divToPrint'));
  }

  if(repo_type == 40){
    ReactDOM.render(
      <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '180px'}}>
    <th>Year</th>
    <th>Month</th>
    <th>Total</th>
  </tr>
{
year_rev.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '180px'}} key={index}>{value}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '180px'}} key={index}>{month_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '180px'}} key={index}>{total_rev[index]}</td></tr>
})
}
</tbody>
</table>, document.getElementById('divToPrint'));
  }

}

async function sample_emp() {


  ReactDOM.render(
    <div>
    <label className="tile_text_bi"> Employee Leave Report</label>

    <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '18px', 'width': '180px'}}>
  <th>Employee ID</th>
  <th>Month</th>
  <th>Type</th>
  <th>Name</th>
</tr>
{
year_rev.map((value, index) => {
  return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '80px'}} key={index}>{value}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '80px'}} key={index}>{month_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '80px'}} key={index}>{total_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '8px', 'width': '80px'}} key={index}>{date_rev[index]}</td></tr>
})
}
</tbody>
</table></div>, document.getElementById('divToPrint'));

}


  async function getData_rev(range) {
    //alert('working')

      const apiUrl = 'http://localhost:3220/BI/rev/' + range;
      const data = await getData(apiUrl);

      for(var i = 0; i < data.length; i++){

        year_rev[i] = data[i].year;
        month_rev[i] = data[i].month;
        total_rev[i] = data[i].total;

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

  getData_rev(730);

  async function getData_emp(){

    var date = new Date();
date.setDate(date.getDate() - 13);

console.log(date);


    year_rev = [];
    month_rev = [];
    total_rev = [];
    date_rev = [];
    const apiUrl = 'http://localhost:3220/hr_attendance';
    const data = await getData(apiUrl);


    for(var i = 0; i < data.length; i++){

      year_rev[i] = data[i].Emp_id;
      month_rev[i] = data[i].month;
      total_rev[i] = data[i].type;
      date_rev[i] = data[i].name;

    }
    sample_emp();

  }

export default class Export extends Component {
  constructor(props) {
    super(props);
  }





  printDocument() {
    if(repo_type == 10){
      getData_emp();
    }
    if(repo_type == 20){
      getData_rev(repo_time);
    }
    if(repo_type == 40){
      getData_rev(repo_time);
    }

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

report_type(e){
    repo_type = e.target.value;
  }

  report_time(e){
      repo_time = e.target.value;
    }

    report_format(e){
        repo_format = e.target.value;
      }

  render() {
    return (<div>
<div>
      <label className="tile_text_bi1">Type</label><br />
      <Select style={{minWidth: 220}}
      value={repo_type}
        onChange={this.report_type} >
        <MenuItem value={10}>Employee Report</MenuItem>
        <MenuItem value={20}>Cashflow Report</MenuItem>
        <MenuItem value={40}>Invoice Report</MenuItem>
      </Select><br /><br />

      <label className="tile_text_bi1">Time Period</label><br />
      <Select style={{minWidth: 220}}
      value={repo_time}
        onChange={this.report_time}>
        <MenuItem value={1}>Todays</MenuItem>
        <MenuItem value={3}>Last 3 Days</MenuItem>
        <MenuItem value={7}>Last Week</MenuItem>
        <MenuItem value={21}>Last 3 Weeks</MenuItem>
        <MenuItem value={30}>Last Month</MenuItem>
        <MenuItem value={60}>Last 2 Months</MenuItem>
        <MenuItem value={180}>Last 6 Months</MenuItem>
        <MenuItem value={365}>Last Year</MenuItem>
        <MenuItem value={730}>Last 2 Years</MenuItem>
      </Select><br /><br />


      <label className="tile_text_bi1">Format</label><br />
      <Select style={{minWidth: 220}}
      value={repo_format}
        onChange={this.report_format}>
        <MenuItem value={10}>PDF</MenuItem>
      </Select><br /><br /><br />

      <button className="button_add" onClick={this.printDocument}>Generate My Report</button>
 </div>
      <div id="divToPrint" className="pdf_temp">
        <div>Note: Here the dimensions of div are same as A4</div>
        <div>You Can add any component here</div>
      </div>
    </div>);
  }
}
