import React from 'react';
import './CRMPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdfgen from './pdf';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function GenerateCustomerReport() {
  return (
    <div className = 'screen7'>
    <motion.div className = "function GenerateCustomerReport() {" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>

    <Pdfgen />

                  </motion.div></div>

);
}

export default GenerateCustomerReport;
