import React from 'react';
import logo from "./assets/cyan.png";
import './CRMPages.css';
import './Report.css';
import crm from "./assets/crm.png";
import view from './assets/view.jpg';
import generate from './assets/generate.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdfgen from './pdf';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function CustomerReports() {


  return (



    <table style={{width:10000  ,height:500 , marginTop:100}}>
    <tr><th>
    <button className='button1' style={{marginTop: 50}}>Generate Weekly Report</button>
    </th></tr>
    <tr><th>
    <button className='button1' style={{marginTop: 50}}>Generate Monthly Report</button>
    </th></tr>
    <tr><th>
    <button className='button1' style={{marginTop: 50}}>Generate Annual Report</button>
    </th></tr>
    </table>

  );
}


export default CustomerReports;
