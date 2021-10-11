import React from 'react';
import {  useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from "./assets/logo.png";
import './invPages.css';
import inventory from "./assets/inventory.png";
import trash from "./assets/delete.jpg";
import add from "./assets/add.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import MaterialTable from "material-table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';

let table_data = [];


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),

    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


function View() {

  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [quantity, setquantity] = useState("");
  const [code, setcode] = useState("");


  const [isOpen, setIsOpen] = useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
}
const [isOpen2, setIsOpen2] = useState(false);
const togglePopup2 = () => {
setIsOpen2(!isOpen2);

}

function showpopup() {

  togglePopup();
  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, type: type, quantity: quantity})
    };
    fetch('http://localhost:3220/inventory/', requestOptions)
        .then(response => response.json());
        alert("Item added")

        
        setname("");
        settype("");
        setquantity("");
  }

  function handleSubmit(event) {
    event.preventDefault();

  }

  async function delete_product(e) {
    /* Prevent button click's default behavior */
    e.preventDefault();

    const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: code})
};
fetch('http://localhost:3220/inventory/'+ code, requestOptions)
    .then(response => response.json());
    console.log(requestOptions)
    alert("Product Deleted")

    setcode("");
}

async function getData(url) {
const response = await fetch(url);

return response.json();
}

async function getData_rev() {

    const apiUrl = 'http://localhost:3220/inventory';
    table_data = await getData(apiUrl);
render_data();



}




const loaddata = document.getElementById("load_data");

async function render_data() {

  if(document.getElementById("load_data")) {
    ReactDOM.render(
  <MaterialTable


 icons={tableIcons}
      title="View Inventory"
      columns={[
        { title: 'Product ID', field: 'Product_ID' , minWidth: 200  },


        {title: 'Product Name',field: 'Product_name', minWidth: 200},


            { title: 'Type', field: 'Product_type', minWidth: 200  },
              {title: 'Quantity',field: 'quantity', minWidth: 200, align: 'center' },
      ]}
      data={table_data}

      options={{
        search: true,
        actionsColumnIndex: -1
      }}

    />, document.getElementById("load_data"));
}
}






getData_rev();

        
  return (
    <div className = 'invscreen'>
    <motion.div className = "view" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 15,
                top: 10,}}>Inventory<br></br>Management</h1></i>
                <img className="invlogo"
                style={{
                  position: 'absolute',
                  left: 200,
                  top: -20,}}
                src = {logo}/>
                <img className='invimg'
                style={{
                  position: 'absolute',
                right: 250,
                top: 12}}
                  src={inventory} />
                  <div id="load_data" style={{marginTop: 50}}> </div>
                  <Popup trigger={<button className='nbutton' style={{marginTop: 30, marginRight: 260}}>Add Product</button>}modal>
    <div><center><Card style={{height: '490px'}}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Add Product</h3></Card.Header>
                <Card.Body>
                <img style={{ width:'120px',height:'120px' }} src={add} />
                <form onSubmit={handleSubmit}>
                        <label>
                        Product Name :
                        <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} style={{marginLeft:10}}/>
                        </label><br></br><br></br>
                        <label> Product Type : </label>
                <select style = {{width:175, marginLeft:15}} type="text" name="stat" value={type} onChange={(e) => settype(e.target.value)}>
                  <option value="Null"></option>
                      <option value="PURC"> PURC </option>
                      <option value="MANU">MANU</option>
                </select><br></br><br></br>
                        <label style={{marginLeft:36}}>
                        Quantity :
                        <input type="text" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} style={{marginLeft:10}}/>
                        </label><br></br><br></br>
                        <input className="nbutton" type="button" value="Submit" onClick={insert}/>
                        </form>
                        </Card.Body></Card>
                        </center></div>
  </Popup>
  <Popup trigger={<button className='nbutton'>Delete Product</button>}modal>
  <center><Card style={{height: '490px'}}>
                <Card.Header style ={{backgroundColor: '#1f78b4'}}><h3 style ={{color:'white'}}>Delete Item</h3></Card.Header>
                <Card.Body>
                  <img style={{ width:'160px',height:'140px' }} src={trash} /> <br></br><br></br>
                <form onSubmit={handleSubmit}>
                    <label>
                       Product ID : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={code} onChange={(e) => setcode(e.target.value)}/>
                        </label><br></br><br></br>
                        <input className="nbutton" type="button" value="Delete" onClick={delete_product}/>
                        </form>
                        </Card.Body></Card>
                        </center>
  </Popup>

    </motion.div></div>
    
  );
}

export default View;