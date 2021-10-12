import React from 'react';
import './homestyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
    { id: 'InquireID', label: 'Inquiry ID', minWidth: 70 },
    { id: 'Sales_ID', label: 'Sales ID ', minWidth: 70 },
    { id: 'Customer_inquiry',label: 'Inquiry',minWidth: 170,align: 'right',},
    { id: 'inquiry_date',label: 'Lodged Date',minWidth: 170,align: 'right',},
    { id: 'Product_ID', label: 'Product', minWidth: 170,align: 'right', },
    { id: 'quantity', label: 'Quantity', minWidth: 70 ,align: 'right',},
    { id: 'purc_date',label: 'Purchased date',minWidth: 170,align: 'right',},
    { id: 'name',label: 'Name',minWidth: 170,align: 'right',},
    { id: 'contact',label: 'Contact',minWidth: 170,align: 'right',},
    { id: 'stat',label: 'Status',minWidth: 170,align: 'right',},

  ];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }




      function createData(InquireID, Sales_ID, Customer_inquiry, inquiry_date, Product_ID, quantity, purc_date, name, contact, stat) {
        return { InquireID, Sales_ID, Customer_inquiry, inquiry_date, Product_ID, quantity, purc_date, name, contact, stat};
      }

      const rows = [];



      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 550,
        },
      });

      export default function CustomerHome() {
        const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

<div className='inqtabletitle'> <h3> All Customer Inquiries  </h3></div>

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

      const apiUrl = 'http://localhost:3220/crm/inq';
      const data = await getData(apiUrl);

      for(var i = 0; i < data.length; i++){
        rows[i] = createData(data[i].InquireID, data[i].Sales_ID, data[i].Customer_inquiry, data[i].inquiry_date, data[i].Product_ID, data[i].quantity, data[i].purc_date, data[i].name, data[i].contact, data[i].stat);




      }


      sample_aa();

  }

getData_inq();
  return (
    <div id="inq_tbl" className = 'screen7'>
  </div>

  );
}
