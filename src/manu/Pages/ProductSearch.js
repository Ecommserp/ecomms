import React from 'react';
import './pmcss1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import manu from "./assets/manu.png"
import logo from "./assets/cyan.png";
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';


  const columns = [
    { id: 'Product_ID', label: 'Product ID', minWidth: 70 },
    { id: 'name', label: 'Name ', minWidth: 70 },
    { id: 'Details',label: 'Details',minWidth: 170,align: 'right',},
    { id: 'Production_stat',label: 'Status',minWidth: 170,align: 'right',},
    { id: 'Machine_no',label: 'Machine ID',minWidth: 170,align: 'right',},
  ];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }




      function createData(Product_ID, name, Details, Production_stat,Machine_no) {
        return { Product_ID, name, Details, Production_stat,Machine_no};
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

      export default function MachineSearch() {
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

        <div><i><h1 style={{
          position: 'absolute',
          right: 40,
          top:-13,
        }}><br></br>Production </h1></i> </div>

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
            height: 100
          }}
          src={manu} />

           <div className='imagelogo' >
                <img style={{
                     position: 'absolute',
                    left: 300,
                    top: -20,
                    width: 160,
                    height: 160
                  }}src={logo} /></div>
        <div className='subti'> <h3> ALL Products  </h3></div>
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

      </motion.div>, document.getElementById('inq_tbl'));


  }

  async function getData_inq() {
    rows.length = 0;
    //alert('working')

      const apiUrl = 'http://localhost:3220/manu_prod_g/prod';
      const data = await getData(apiUrl);

      for(var i = 0; i < data.length; i++){
        rows[i] = createData(data[i].Product_ID, data[i].name, data[i].Details, data[i].Production_stat,data[i].Machine_no);




      }


      sample_aa();

  }

getData_inq();
  return (
    <div id="inq_tbl" className = 'screen7'>
  </div>

  );
}
