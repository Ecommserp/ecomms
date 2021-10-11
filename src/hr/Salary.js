import React from 'react';
import './Hr.css';
import logo from './images/ecomms_logo.png';
import background from './images/backgrnd.jpg';
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







function Salary() {

  const [inputs, setInputs] = useState({});

const [date, setdate] = useState("");
const [Emp_id, setEmp_id] = useState("");
const [basic_sal, setbasic_sal] = useState("");
const [allowance, setallowance] = useState("");

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
        body: JSON.stringify({ Emp_id: Emp_id, basic_sal: basic_sal ,allowance:allowance, month: moment(date).format('YYYY-MM-DD')})};
    fetch('http://localhost:3220/emp_benefits', requestOptions)
        .then(response => response.json());
        alert("Item added")
  }


  const columns = [
    { id: 'Emp_id', label: 'Employee ID', minWidth: 70 },
    { id: 'basic_sal', label: 'Basic Salary ID', minWidth: 70 },
    { id: 'allowance',label: 'Allowance',minWidth: 170,align: 'right',},
    { id: 'month',label: 'Month',minWidth: 170,align: 'right',},
  ];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }




      function createData(Emp_id, basic_sal, allowance, month) {
        return { Emp_id, basic_sal, allowance, month};
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

      const apiUrl = 'http://localhost:3220/hr/sal';
      const data = await getData(apiUrl);

      for(var i = 0; i < data.length; i++){
        rows[i] = createData(data[i].Emp_id, data[i].basic_sal, data[i].allowance, data[i].month);

      }


      sample_aa();

  }

  getData_inq();



  return (

    <div className="hr_bckground_container">
    <div className="App" className="body" >
    <img src={logo} className="App-logo" alt="logo" />




    <div>
        <h1 className="hr_tile">Salary and Other Comphension Management</h1>
    </div>

    <div>
    <Navbar />

    </div>

<div id="g_dis">
</div>
    <br></br> <br></br> <br></br>

    <div className="hr_sal_app-container" className="hr_salmargin">
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
          type="number"
          name="basic_sal"
          placeholder="Enter Basic Salary:"
          onChange={(e) => setbasic_sal(e.target.value)}
        />
        </label>
        <label>
        <input
          type="number"
          name="allowance"
          placeholder="Enter Allowance:"
          onChange={(e) => setallowance(e.target.value)}
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

ReactDOM.render(<Salary />, document.getElementById('root'));





export default Salary;
