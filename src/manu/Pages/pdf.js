import React, {Component, PropTypes} from 'react';
import { jsPDF } from "jspdf";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import * as _html2canvas from "html2canvas";
import logo from "./assets/cyan.png";
import './manfReports.css';
import './MPages.css';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


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

let year_rev = [];
let month_rev = [];
let total_rev = [];
let date_rev = [];

let year_rev1 = [];
let month_rev1 = [];
let total_rev1 = [];


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
    ReactDOM.render(
      <div style={{'marginTop':'-500', marginLeft:100}}>
      <label className="tile_text_bi"> production Satus Record</label>
      <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '20px', 'width': '180px'}}>
    <th>ID</th>
    <th>Name</th>
    <th>Details</th>
    <th>Status</th>
  </tr>
{
year_rev.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{value}</td>
                <td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{month_rev[index]}</td>
                <td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{total_rev[index]}</td>
                <td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{date_rev[index]}</td>
                
            </tr>
})
}
</tbody>
</table></div>, document.getElementById('divToPrint'));

}

async function sample_aa1() {
  //alert(data_revy1)
    ReactDOM.render(
      <div style={{'marginTop':'-700', marginLeft:100}}>
      <label className="tile_text_bi">  Machines Status Records</label>
      <table>
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '20px', 'width': '180px'}}>
    <th>ID</th>
    <th>Name</th>
    <th>Status</th>
    
  </tr>
{
year_rev1.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{value}</td>
                <td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{total_rev1[index]}</td>
                <td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '10px', 'width': '180px'}} key={index}>{month_rev1[index]}</td>
               
                
            </tr>
})
}
</tbody>
</table></div>, document.getElementById('divToPrint'));

}

  async function getData_rev7() {

      const apiUrl = 'http://localhost:3220/manu_prod_g/rep7';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        year_rev[i] = data[i].Product_ID;
        month_rev[i] = data[i].name;
        total_rev[i] = data[i].Details;
        date_rev[i] = data[i].Production_stat;

      }
      sample_aa();
  }

  async function getData_rev30() {

      const apiUrl = 'http://localhost:3220/manu_prod_g/c_machine';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        year_rev1[i] = data[i].Machine_no;
        total_rev1[i] = data[i].name;
        month_rev1[i] = data[i].Machine_stat;
        

      }
      sample_aa1();
  }

  async function getData_rev365() {

      const apiUrl = 'http://localhost:3220/crm/inq30';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        year_rev[i] = data[i].InquireID;
        month_rev[i] = data[i].Sales_ID;
        total_rev[i] = data[i].Customer_inquiry;
        date_rev[i] = data[i].inquiry_date;

      }
      sample_aa();
  }


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
<br/><br/>
<br/>
<br/>
<br/>

      <button className='button2'  style={{marginTop: 50,marginRight:10,width:300, marginLeft:200}} onClick={printDocument7}>Product Report</button>

      <button className='button2' style={{marginTop: 50,marginRight:10,width:300}} onClick={printDocument30}>Machine Report</button>

      <button className='button2' style={{marginTop: 50,marginRight:10,width:300}} onClick={printDocument365}>Generate Annual Report</button>

      <div id="divToPrint" className="pdf_temp">
        <div>Note: Here the dimensions of div are same as A4</div>
        <div>You Can add any component here</div>
      </div>
    </div> );
  }
}
