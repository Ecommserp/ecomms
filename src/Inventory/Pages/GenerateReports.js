import React from 'react';
import logo from "./assets/logo.png";
import './invPages.css';
import './invReports.css';
import inventory from "./assets/inventory.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import generate from './assets/generate.jpg';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import Pdfgen from './pdf';


function ReportsGen() {
  return (
    <div className = 'invscreen'>
      <Pdfgen />
    </div>

);
}

export default ReportsGen;