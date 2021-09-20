import React,{useState, Fragment} from 'react';
import {nanoid} from 'nanoid';
import logo from './images/ecomms_logo.png';
import './Hr.css';
import './crudops.css';
import data from "./mock-crudops";
//import { NavigateNextOutlined } from '@material-ui/icons';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from './components/EditableRow';
import Navbar from "./components/Navbar";
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import clsx from 'clsx';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';





function CrudOps() {

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

function createData(empid, fullname, phonenumber, address, department, position) {
  return { empid, fullname, phonenumber, address, department, position };
}

async function getData(url) {
const response = await fetch(url);

return response.json();
}

const rows = [];

async function getData_emp() {


    const apiUrl = 'http://localhost:3220/hr/emp';
    const data = await getData(apiUrl);

    //console.log(data)

    for(var i = 0; i < data.length; i++){

        rows[i] = createData(data[i].empid ,data[i].fullname, data[i].phonenumber, data[i].address, data[i].department, data[i].position);

        //rows_meet[i] = createData_meet(sample_meet);


    }

    ReactDOM.render(   <Paper style={{ height: 300, width: '100%' }}>
         <VirtualizedTable
           rowCount={rows.length}
           rowGetter={({ index }) => rows[index]}
           columns={[
             {
               width: 50,
               label: 'Employee ID',
               dataKey: 'empid',
             },
             {
               width: 220,
               label: 'Full name',
               dataKey: 'fullname',
             },
             {
               width: 220,
               label: 'Phone',
               dataKey: 'phonenumber',
             },
             {
               width: 220,
               label: 'Address',
               dataKey: 'address',
             },
             {
               width: 220,
               label: 'Department',
               dataKey: 'department',
             },
             {
               width: 220,
               label: 'Position',
               dataKey: 'position',
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

getData_emp();




    return (
<div >
    <div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>


    <div>
        <h1 className="hr_tile">Compnay Employee Database</h1>
    </div>

    <div>
            <Navbar />

    </div>

    <br></br><br></br><br></br><br></br><br></br>
    <div className="hr_app-container">

    <div id="dis_emp">

    </div>


        <h2 className="H2">Add New Employee Details</h2>

        <form >

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

            <button type="button" onClick={insert_emp}>Submit</button>

        </form>

    </div>



</div>

);

}

export default CrudOps;
