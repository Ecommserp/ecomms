import React, { useState } from "react";
import logo from './ecomms_logo.png';
import './sal_cli.css';
import './sal_cli2.css';
//import { NavigateNextOutlined } from '@material-ui/icons';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import clsx from 'clsx';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';





function ManageClient() {



  const styles = (theme) => ({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    table: {
      // temporary right-to-left patch, waiting for
      // https://github.com/bvaughn/react-virtualized/issues/454
      '& .ReactVirtualized__Table__headerRow': {
        ...(theme.direction === 'rtl' && {
          paddingLeft: '0 !important',
        }),
        ...(theme.direction !== 'rtl' && {
          paddingRight: undefined,
        }),
      },
    },
    tableRow: {
      cursor: 'pointer',
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    noClick: {
      cursor: 'initial',
    },
  });

  class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
      headerHeight: 48,
      rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
      const { classes, onRowClick } = this.props;

      return clsx(classes.tableRow, classes.flexContainer, {
        [classes.tableRowHover]: index !== -1 && onRowClick != null,
      });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
      const { columns, classes, rowHeight, onRowClick } = this.props;
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, {
            [classes.noClick]: onRowClick == null,
          })}
          variant="body"
          style={{ height: rowHeight }}
          align={
            (columnIndex != null && columns[columnIndex].numeric) || false
              ? 'right'
              : 'left'
          }
        >
          {cellData}
        </TableCell>
      );
    };

    headerRenderer = ({ label, columnIndex }) => {
      const { headerHeight, columns, classes } = this.props;

      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
          variant="head"
          style={{ height: headerHeight }}
          align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        >
          <span>{label}</span>
        </TableCell>
      );
    };

    render() {
      const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
      return (
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              width={width}
              rowHeight={rowHeight}
              gridStyle={{
                direction: 'inherit',
              }}
              headerHeight={headerHeight}
              className={classes.table}
              {...tableProps}
              rowClassName={this.getRowClassName}
            >
              {columns.map(({ dataKey, ...other }, index) => {
                return (
                  <Column
                    key={dataKey}
                    headerRenderer={(headerProps) =>
                      this.headerRenderer({
                        ...headerProps,
                        columnIndex: index,
                      })
                    }
                    className={classes.flexContainer}
                    cellRenderer={this.cellRenderer}
                    dataKey={dataKey}
                    {...other}
                  />
                );
              })}
            </Table>
          )}
        </AutoSizer>
      );
    }
  }

  MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        dataKey: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        numeric: PropTypes.bool,
        width: PropTypes.number.isRequired,
      }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
  };

  const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);



  const sample = [
    ['GOV', 'CAN', 'product 1', 'N/a', '400', '234334.00'],
    ['PRV', 'JP', 'product 2', 'N/a', '500', '234334.00'],
    ['GOV', 'IN', 'product 3', 'N/a', '800', '234334.00'],
];

function createData(Client_ID, name, contact) {
  return { Client_ID, name, contact };
}

async function getData(url) {
const response = await fetch(url);

return response.json();
}

const rows = [];

async function getData_emp() {


    const apiUrl = 'http://localhost:3220/sales/cli';
    const data = await getData(apiUrl);

    //console.log(data)

    for(var i = 0; i < data.length; i++){

        rows[i] = createData(data[i].Client_ID ,data[i].name, data[i].contact);

        //rows_meet[i] = createData_meet(sample_meet);


    }

    ReactDOM.render(   <Paper style={{ height: 300, width: '60%',margin:'auto' }}>
         <VirtualizedTable
           rowCount={rows.length}
           rowGetter={({ index }) => rows[index]}
           columns={[
             {
               width: 150,
               label: 'Client ID',
               dataKey: 'Client_ID',
             },
             {
               width: 420,
               label: 'Name',
               dataKey: 'name',
             },
             {
               width: 420,
               label: 'Contact',
               dataKey: 'contact',
             },
           ]}
         />
       </Paper>, document.getElementById('dis_emp'));

    //sample_aa();
    console.log(rows)



}

let fullname = '';
let phonenumber = '';
let address = '';
let department = '';
let position = '';

function setName(det){
  fullname = det;
}
function setPhone(det){
  phonenumber = det;
}
function setAddress(det){
  address = det;
}
function setDepartment(det){
  department = det;
}
function setPosition(det){
  position = det;
}


function insert_emp() {

  const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ fullname: fullname, phonenumber: phonenumber, address: address, department: department, position: position})
};
fetch('http://localhost:3220/hr/emp', requestOptions)
  .then(response => response.json());

  getData_emp();
  alert("Employee added")




}

/*const [upempid, setUpEmpid] = React.useState("");
const [upfullname, setUpFullname] = React.useState("");
const [upphonenumber, setUpPhone] = React.useState("");
const [upaddress, setUpAddress] = React.useState("");
const [updepartment, setUpDepartment] = React.useState("");
const [upposition, setUpPosition] = React.useState("");*/

/*let upempid = '';
let upfullname = '';
let upphonenumber = '';
let upaddress = '';
let updepartment = '';
let upposition = '';

function setUpEmpid(det){
  upempid = det;
}
function setUpFullname(det){
  upfullname = det;
}
function setUpPhone(det){
  upphonenumber = det;
}
function setUpAddress(det){
  upaddress = det;
}
function setUpDepartment(det){
  updepartment = det;
}
function setUpPosition(det){
  upposition = det;
}

*/


function InputField () {

    const [upempid, setUpCliid] = React.useState("");
    const [upfullname, setUpName] = React.useState("");
    const [upphonenumber, setUpCon] = React.useState("");



  async function keyPress(e){

        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/sales/cli/'+ upempid;
           const data = await getData(apiUrl);

           console.log(data.name)



           
           setUpName(data.name)
           setUpCon(data.contact)


           console.log('name '+ upfullname)
        }
     }

     async function update_emp(e) {
       /* Prevent button click's default behavior */
       e.preventDefault();

       const requestOptions = {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ Client_ID: upempid, name: upfullname, contact: upphonenumber})
     };
     fetch('http://localhost:3220/sales/cli/'+ upempid, requestOptions)
       .then(response => response.json());
       console.log(requestOptions)
       alert("Item Updated")

     }


  return(
    <div className="sal_edit_win">
    <div className="sal_emp_close">
    <CancelIcon style={{fill: "red"}} onClick={close_emp}></CancelIcon>

    </div>


    <label className="tile_text_bi1">Edit/ Delete Client</label> <br /> <br />
    <br />
    <label className="tile_text_bi1">Client ID</label> <br />
    <input className="input" type="text" name="title" onKeyDown={keyPress} onChange={(e) => setUpCliid(e.target.value)}/>
    <br />
    <label className="tile_text_bi1">Name</label> <br />
    <input className="input" type="text" value={upfullname} onChange={(e) => setUpName(e.target.value)}/>
    <br />
    <label className="tile_text_bi1">Contact</label> <br />
    <input className="input" type="text" value={upphonenumber} onChange={(e) => setUpCon(e.target.value)}/>
    <br />
    <br />

    <button className="button_add" onClick={update_emp}>Update</button>

    </div>
  )
}

function Edit_emp() {

  ReactDOM.render(<InputField />
, document.getElementById('main_win'));

}

async function close_emp(){

  ReactDOM.render(  <div> </div>, document.getElementById('main_win'));

}

getData_emp();




    return (
<div>
    <div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>


    <div>
        <h1 className="sal_tile"> Client Management</h1>
    </div>

    <div>

    </div>

    <div id="main_win">
    </div>

    <br></br><br></br><br></br><br></br><br></br>
    <button type="button" className="sal_button1" onClick={Edit_emp}>Edit/Delete</button>

    <div className="sal_app-container">


    <div id="dis_emp">

    </div>


        <h2 className="H2">Add New Client Details</h2>

        <form className="mc">

            <input
                type="text"
                name="fullname"
                required="required"
                placeholder="Enter the name"
                onChange={(e) => setName(e.target.value)}

            />
            <input
                type="number"
                name="phonenumber"
                required="required"
                placeholder="Enter the phone number"
                onChange={(e) => setPhone(e.target.value)}

            />
            <input
                type="text"
                name="address"
                required="required"
                placeholder="Enter the address"
                onChange={(e) => setAddress(e.target.value)}

            />
            <input
                type="text"
                name="department"
                required="required"
                placeholder="Enter the department"
                onChange={(e) => setDepartment(e.target.value)}

            />
            <input
                type="text"
                name="position"
                required="required"
                placeholder="Enter the position"
                onChange={(e) => setPosition(e.target.value)}
            />

            <button type="button" classNAme="mabutton" onClick={insert_emp}>Submit</button>

        </form>

    </div>



</div>

);

}

export default ManageClient;
