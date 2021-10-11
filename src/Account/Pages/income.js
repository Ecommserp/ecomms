import React from 'react';
import Pdfgen from './pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ReactDOM from 'react-dom';








async function getData(url) {
const response = await fetch(url);

return response.json();
}






function financial() {



  return (
    <div className="App_bi">
    <i><h1 style={{
            position: 'absolute',
            right: 50,
            top: 72,}}>Generate<br></br>Report</h1></i>
            <img
            style={{
              position: 'absolute',
              left: 250,
              top: 50,
            width: 160
          }} />

          <div className="App_acc">
            <img src={logo} className="App-logo" alt="logo" /><br /><br />

          <Pdfgen />
</div>
</div>

  );
}
export default financial;
