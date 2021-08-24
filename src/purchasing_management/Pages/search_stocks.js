import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import  { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './pmcss1.css';


const columns = [
  { id: 'name', label: 'Product ID', minWidth: 170 },
  { id: 'code', label: 'Product Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(name, code, population) {
  const density = population;
  return { name, code, population};
}

const rows = [
  createData('00001', 'sample data', 132417),
  createData('00002', 'sample data', 140350),
  createData('00003', 'sample data', 132417),
  createData('00004', 'sample data', 140350),
  createData('00005', 'sample data', 132417),
  createData('00006', 'sample data', 140350),
  createData('00007', 'sample data', 132417),
  createData('00008', 'sample data', 140350),
  createData('00009', 'sample data', 140350),
  createData('00010', 'sample data', 132417),
  createData('00020', 'sample data', 140350),
  createData('00030', 'sample data', 132417),
  createData('00040', 'sample data', 140350),
  createData('00050', 'sample data', 132417),
  createData('00060', 'sample data', 140350),
  createData('00070', 'sample data', 132417),
  createData('00080', 'sample data', 140350),
  createData('00090', 'sample data', 140350),
];

const useStyles = makeStyles({
  root: {
    width: '50%',
    height:'50%',
    margin: 'auto',


  },
  container: {
    maxHeight: 440,
marginTop: '60px'
  },
});



function Search_stocks() {

  const [myOptions, setMyOptions] = useState([])

  const getDataFromAPI = () => {
    console.log("Options Fetched from API")

    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }





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

 return (


   <Paper className={classes.root}>
   <div style={{ marginLeft: '25%', marginTop: '60px', marginEnd: '60px' }}>

       <Autocomplete
         style={{ width: 500 }}
         freeSolo
         autoComplete
         autoHighlight
         options={myOptions}
         renderInput={(params) => (
           <TextField {...params}
             onChange={getDataFromAPI}
             variant="outlined"
             label="Enter Product ID"
           />
         )}
       />
     </div>
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
       rowsPerPageOptions={[10, 25, 50]}
       component="div"
       count={rows.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
   </Paper>

 );
}

export default Search_stocks;
