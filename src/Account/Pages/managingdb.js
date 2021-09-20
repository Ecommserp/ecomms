import React, {useState} from 'react';
import logo from "./cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


function Additem() {

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }

  const [id, setID] = useState("");
  const [s_id, setSID] = useState("");
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [date, setDate] = useState("");

  const [upid, setupID] = useState("");
  const [ups_id, setupSID] = useState("");
  const [up_amount, setupAmount] = useState("");
  const [up_discount, setupDiscount] = useState("");
  const [up_date, setupDate] = useState("");

  async function keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/acc/managingdb/'+ upid;
           const data = await getData(apiUrl);

           console.log(data)

           /* Call the state's "setter" method to update "userInput" state */
           setupSID(data.Supplier_ID)
           setupAmount(data.Total)
           setupDiscount(data.Discount)
           setupDate(moment(data.date).format('YYYY-MM-DD'))
        }
     }


  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Invoice_ID: id, Supplier_ID: s_id, Total: amount, Discount: discount,date: date})
    };
    fetch('http://localhost:3220/acc/managingdb', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }
  async function update(e) {
      /* Prevent button click's default behavior */
      e.preventDefault();

      const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Invoice_ID: upid, Supplier_ID: ups_id, Total: up_amount, Discount: up_discount, date: up_date })
  };
  fetch('http://localhost:3220/acc/managingdb/'+ upid, requestOptions)
      .then(response => response.json());
      console.log(requestOptions)
      alert("Item Updated")

  }

  async function deleted(e) {
        /* Prevent button click's default behavior */
        e.preventDefault();

        const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Invoice_ID: upid})
    };
    fetch('http://localhost:3220/acc/managingdb/'+ upid, requestOptions)
        .then(response => response.json());
        console.log(requestOptions)
        alert("Item Deleted")

    }



  return (
    <motion.div className = "additem" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 50,
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
                <br></br><br></br><br></br>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Add Invoice</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Invoice ID : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={id} onChange={(e) => setID(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>

                        Supplier ID : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={s_id} onChange={(e) => setSID(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>

                        Amount : &nbsp;&nbsp;
                        <input type="text" name="name" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>

                        Discount : &nbsp;&nbsp;
                        <input type="text" name="name" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>


                        Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" name="quantity" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </label><br></br><br></br>
                        <input type="Reset" value="Reset"/> <div className="space"></div>
                        <input type="button" value="Add Invoice" onClick={insert}/> <div className="space"></div>

                        </form>

                        </Card.Body></Card>
                        </center>
                        <br></br><br></br><br></br>
                        <center><Card border ='primary' style={{ width: '40rem' }}>
                        <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Update / Delete Invoice</h3></Card.Header>
                        <Card.Body>
                        <form>
                            <label>
                                Invoice ID : &nbsp;&nbsp;&nbsp;
                                <input type="text" name="code" value={upid} onKeyDown={keyPress} onChange={(e) => setupID(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>

                                Supplier ID : &nbsp;&nbsp;&nbsp;
                                <input type="text" name="code" value={ups_id} onChange={(e) => setupSID(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>

                                Amount : &nbsp;&nbsp;
                                <input type="text" name="name" value={up_amount} onChange={(e) => setupAmount(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>
                                Discount : &nbsp;&nbsp;
                                <input type="text" name="name" value={up_discount} onChange={(e) => setupDiscount(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>


                                Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="date" name="quantity" value={up_date} onChange={(e) => setupDate(e.target.value)}/>
                                </label><br></br><br></br>
                                <input type="Reset" value="Reset"/> <div className="space"></div>
                                <input type="Button" value="Update" onClick={update}/> <div className="space"></div>
                                <input type="Button" value="Delete" onClick={deleted}/> <div className="space"></div>

                                </form>

                                </Card.Body></Card>
                                </center>
                                <br></br><br></br><br></br>


    </motion.div>

  );
}

export default Additem;
