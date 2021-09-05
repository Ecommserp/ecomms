import React from 'react';
import logo from "./cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function Additem() {
  return (
    <motion.div className = "additem" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 10,
                top: 72,}}>Manage<br></br>Database</h1></i>
                <img
                style={{
                  position: 'absolute',
                  left: 250,
                  top: 50,
                width: 160
               }}
                src = {logo}/>
                <br></br>
                <br></br><br></br><br></br>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Add Item</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Name of the item : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" />
                        </label><br></br><br></br>
                        <label>
                        Update : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <label>


                        Amount : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="quantity"/>
                        </label><br></br><br></br>
                        <input type="Reset" value="Reset"/> <div className="space"></div>
                        <input type="Submit" value="Submit"/> <div className="space"></div>

                        </form>

                        </Card.Body></Card>
                        </center>

    </motion.div>

  );
}

export default Additem;
