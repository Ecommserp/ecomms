import React, {Component, PropTypes} from 'react';
import { jsPDF } from "jspdf";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import * as _html2canvas from "html2canvas";
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';



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
let s_price = [];
let p_price = [];


async function getData(url) {
const response = await fetch(url);

return response.json();
}

async function sample_aa() {
  //alert(data_revy1)
    ReactDOM.render(
      <div>
      <table style={{width:790 ,marginTop:-5000}}  >
<tbody>
<tr style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '18px'}}>
    <th>Purchase Id</th>
    <th>Supplier ID</th>
    <th>Quantity</th>
    <th>Date</th>
    <th>Purchased price</th>
    <th>Selling price</th>
  </tr>
{
year_rev.map((value, index) => {
    return <tr><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '14px'}} key={index}>{value}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '14px'}} key={index}>{month_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '14px'}} key={index}>{total_rev[index]}</td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '14px'}} key={index}>{date_rev[index]} </td><td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '14px'}} key={index}>{p_price[index]} </td> <td style={{"borderWidth":"1px", 'borderColor':"#000", 'borderStyle':'solid', 'fontSize': '14px'}} key={index}>{s_price[index]} </td> </tr>
})
}
</tbody>
</table></div>, document.getElementById('divToPrint'));

}

  getData_rev7();

  async function getData_rev7() {

      const apiUrl = 'http://localhost:3220/purchases/inq7';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){
        s_price[i]= data[i].S_price;
        p_price[i]= data[i].P_price;
        year_rev[i] = data[i].Purchase_id;
        month_rev[i] = data[i].Supplier_id;
        total_rev[i] = data[i].quantity;
        date_rev[i] = data[i].Date;

      }
      sample_aa();
  }

  async function getData_rev30() {

      const apiUrl = 'http://localhost:3220/purchases/inq30';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        s_price[i]= data[i].S_price;
        p_price[i]= data[i].P_price;
        year_rev[i] = data[i].Purchase_id;
        month_rev[i] = data[i].Supplier_id;
        total_rev[i] = data[i].quantity;
        date_rev[i] = data[i].Date;
      }
      sample_aa();
  }

  async function getData_rev365() {

      const apiUrl = 'http://localhost:3220/purchases/inq365';
      const data = await getData(apiUrl);


      for(var i = 0; i < data.length; i++){

        s_price[i]= data[i].S_price;
        p_price[i]= data[i].P_price;
        year_rev[i] = data[i].Purchase_id;
        month_rev[i] = data[i].Supplier_id;
        total_rev[i] = data[i].quantity;
        date_rev[i] = data[i].Date;

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

      <div className="center">



    <table style={{width:1000  ,height:500 , marginTop:100,marginStart: 500}}>
      <tr><th>
      <button className='invbutton' style={{marginTop: 50}} onClick={printDocument7}> View Weekly Reports</button>
      </th></tr>
      <tr><th>
      <button className='invbutton' style={{marginTop: 50}} onClick={printDocument30}>View Monthly Reports</button>
      </th></tr>
      <tr><th>
      <button className='invbutton' style={{marginTop: 50, marginBottom: 50}}onClick={printDocument365}>View Annual Reports</button>
      </th></tr>
      </table>

      <div id="divToPrint">


    </div> </div></div>);
  }
}
