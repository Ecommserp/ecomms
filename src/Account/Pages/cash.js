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
                right: 50,
                top: 72,}}>Cash<br></br>Flow</h1></i>
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
                <br></br><br></br><br></br>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Cash Account</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Account ID : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" />
                        </label><br></br><br></br>
                        <label>

                        Account Name : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" />
                        </label><br></br><br></br>
                        <label>



                        Amount : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <label>

                        Discount : &nbsp;&nbsp;
                        <input type="text" name="name" />
                        </label><br></br><br></br>
                        <label>


                        Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" name="quantity"/>
                        </label><br></br><br></br>
                        <input type="Reset" value="Reset"/> <div className="space"></div>
                        <input type="Submit" value="Send cash"/> <div className="space"></div>

                        </form>

                        </Card.Body></Card>
                        </center>
                        <br></br><br></br><br></br>
                        <center><Card border ='primary' style={{ width: '40rem' }}>
                        <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Cash Correction</h3></Card.Header>
                        <Card.Body>
                        <form>
                            <label>
                                Account ID : &nbsp;&nbsp;&nbsp;
                                <input type="text" name="code" />
                                </label><br></br><br></br>
                                <label>

                                Account name : &nbsp;&nbsp;&nbsp;
                                <input type="text" name="code" />
                                </label><br></br><br></br>
                                <label>

                                Amount : &nbsp;&nbsp;
                                <input type="text" name="name" />
                                </label><br></br><br></br>
                                <label>
                                Discount : &nbsp;&nbsp;
                                <input type="text" name="name" />
                                </label><br></br><br></br>
                                <label>


                                Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="date" name="quantity"/>
                                </label><br></br><br></br>
                                <input type="Reset" value="Reset"/> <div className="space"></div>
                                <input type="Button" value="Change"/> <div className="space"></div>

                                </form>

                                </Card.Body></Card>
                                </center>
                                <br></br><br></br><br></br>


    </motion.div>

  );
}


export default Additem;
