import React from 'react';
import logo from "./assets/cyan.png";
import './Pages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';


function Update() {
  return (
    <div className='screen'>
      <motion.div className="additem" initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
        <i><h1 style={{
          position: 'absolute',
          right: 40,
          top: -13,
        }}><br></br>Production</h1></i>
        <div><i><h1 style={{
          position: 'absolute',
          right: 40,
          top: 70,
        }}>Manufacturing Management</h1></i> </div>

        <img
          style={{
            position: 'absolute',
            right: 250,
            top: -1,
            width: 120,
            height: 100
          }}
          src={manu} />

        <div className='imagelogo' >
          <img
            style={{
              position: 'absolute',
              left: 300,
              top: -20,
              width: 160,
              height: 160
            }}
            src={logo} /></div>
        <center><Card border='primary' style={{ width: '40rem' }}>
          <Card.Header style={{ backgroundColor: '#1f78b4' }}><h3 style={{ color: 'white' }}>Search Item</h3></Card.Header>
          <Card.Body>
            <form>
              <label>
                Item Code : &nbsp;&nbsp;&nbsp;
                <input type="text" name="codep" />
              </label><br></br><br></br>
              <input className="button1" type="submit" value="Search" />
            </form>
          </Card.Body></Card>
        </center>
      </motion.div></div>

  );
}

export default Update;
