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


  const columns = [
    { id: 'NIC', label: 'NIC', minWidth: 170 },
    { id: 'DOB', label: 'DOB ', minWidth: 100 },
    { id: 'Name',label: 'Name',minWidth: 170,align: 'right',},
    { id: 'Email',label: 'Email',minWidth: 170,align: 'right',},
    { id: 'Phone', label: 'Phone', minWidth: 170,align: 'right', },
    { id: 'Item', label: 'Purchased Item', minWidth: 170 ,align: 'right',},
    { id: 'Inquiry',label: 'Inquiry',minWidth: 170,align: 'right',},
    { id: 'Status',label: 'Status',minWidth: 170,align: 'right',},
    
  ];
      
      function createData(NIC, DOB, Name, Email,Phone, Item, Inquiry, Status) {
        return { NIC, DOB, Name, Email,Phone, Item, Inquiry, Status};
      }
      
      const rows = [
        createData('90v', '1987-12-9', 'john', 'john@gmail.com',1001, '1001E', 'refund', 'pending'),
        createData('90v', '1980-09-2', 'nimal', 'nimal@gmail.com',1001, '1001E', 'repair ', 'assigned'),
        createData('90v', '1980-09-2', 'kamal', 'kamal@gmail.com',1001, '1001E', 'refund', 'assigned'),
        createData('90v', '1980-09-2', 'saman', 'saman@gmail.com',1001, '1001E', 'replacement', 'resolved'),
        createData('90v', '1980-09-2', 'dias', 'jdias@gmail.com',1001, '1001E', 'replacement', 'resolved'),
        createData('90v', '1980-09-2', 'sunil', 'jsunil@gmail.com',1001, '1001E', 'repair ','pending'),
      ];

      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
        },
      });
      
      export default function CustomerHome() {
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

        
  return (
    <div className = 'screen7'>
    <motion.div className = "view" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
      
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

    </motion.div></div>
    
  );
}