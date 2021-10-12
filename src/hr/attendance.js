import React from 'react';
import './Hr.css';
import logo from './images/ecomms_logo.png';
import './salary.css';
import Navbar from "./components/Navbar";
import { useState } from "react";
import ReactDOM from "react-dom";
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from './animations';
import { withStyles, makeStyles } from '@material-ui/core/styles';








function Attendance() {

  const [inputs, setInputs] = useState({});

const [date, setdate] = useState("");
const [Emp_id, setEmp_id] = useState("");
const [type, settype] = useState("");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  function insert() {

    const requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Emp_id: Emp_id, type: type, month: moment(date).format('YYYY-MM-DD')})};
    fetch('http://localhost:3220/hr_attendance', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }


  const columns = [
    { id: 'Emp_id', label: 'Employee ID', minWidth: 70 },
    { id: 'month', label: 'Month', minWidth: 70 },
    { id: 'type',label: 'Type',minWidth: 170,align: 'right',},
  ];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }




      function createData(Emp_id, month, type) {
        return { Emp_id, month, type};
      }

      const rows = [];



      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
        },
      });

        const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function sample_aa() {
    ReactDOM.render(
      <motion.div className = "view" initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}>

  <div className='subti5'> <h3> All Customer Inquiries  </h3></div>

                    <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[6, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      </motion.div>, document.getElementById('g_dis'));


  }

  async function getData_inq() {
    rows.length = 0;
    //alert('working')

      const apiUrl = 'http://localhost:3220/hr/attl';
      const data = await getData(apiUrl);

      for(var i = 0; i < data.length; i++){
        rows[i] = createData(data[i].Emp_id, data[i].month, data[i].type);

      }


      sample_aa();

  }

  getData_inq();





  return (

    <div className="hr_bckground_container">


    <div className="App" className="body" >
    <img src={logo} className="App-logo" alt="logo" />




    <div>
        <h1 className="hr_tile">Leave Management</h1>
    </div>

    <div>
    <Navbar />

    </div>


    <br></br> <br></br> <br></br>


        <div id="g_dis">
        </div>
        <br></br>
        <h1 className="hr_sal_addtitle">Add Salary Details</h1>
      <br></br><br></br>
      
    <div className="hr_sal_app-container" className="hr_salmargin">
      <h1 className="hr_sal_h1cat">Leave Category (Please input leave category code only) </h1>
      <h1 className="hr_sal_h1cat"> * Casual Leave : cl1 </h1>
      <h1 className="hr_sal_h1cat"> * Annual Leave : Al1 </h1>
      <h1 className="hr_sal_h1cat"> * Sick Leave   : Sl1 </h1>
    <form onSubmit={handleSubmit}>
      <label>
      <input
        type="Number"
        name="Emp_id"
        placeholder="Enter Employee ID:"
        onChange={(e) => setEmp_id(e.target.value)}
      />
      </label>
      <label>
        <input
          type="text"
          name="type"
          placeholder="Enter Leave Type:"
          onChange={(e) => settype(e.target.value)}
        />
        </label>

        <label>

  <label>

                                <input  type="date" name="date" onChange={(e) => setdate(e.target.value)}/>

                                </label>


        </label>
        <button className="button" value="Submit" onClick={insert}>Insert Data</button>
    </form>
    </div>
    
    <br></br><br></br>
    <div>
        <h1 className="hr_footer_tile">ecomms (Enterprise Resource Planning System -ERP System) - Human Resource Management</h1>
      </div>
    </div>
  </div>

  )
}

ReactDOM.render(<Attendance />, document.getElementById('root'));





export default Attendance;
