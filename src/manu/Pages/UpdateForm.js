import React from 'react';
import logo from "./assets/cyan.png";
import './MPages.css';
import manu from "./assets/manu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function UpdateForm() {
  return (
    
    <motion.div className = "updateform" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 40,
          top:-13,}}><br></br>Production</h1></i>

           <div><i><h1 style={{
          position: 'absolute',
          right: 40,
          top:70,
        }}>Manufacturing Management</h1></i> </div>

                <img
                style={{
                  position: 'absolute',
                right: 250,
                top:-1,
                width: 120,
               height: 100}}
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
                <div className='cardCon'>
                  <div className='subti'> <h2>Products Mangement </h2></div>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Update Inventory</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Item Code &nbsp;
                        <input type="radio" Value="itemcode" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        Item Name &nbsp;
                        <input type="radio" Value="itemname" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>
                        Item Type &nbsp;
                        <input type="radio" Value="supplierid" name="group"/>
                        </label>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Quantity &nbsp;
                        <input type="radio" Value="quantity" name="group"/>
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br><br></br>
                        <label>
                        New Value : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <input className="button2" type="submit" value="Submit" />
                        </form>
                        </Card.Body></Card>
                        </center>
                        </div>
    </motion.div>

  );
}

export default UpdateForm;
