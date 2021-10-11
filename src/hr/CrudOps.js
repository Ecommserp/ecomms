  import React, { useState } from "react";
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
  import CancelIcon from '@material-ui/icons/Cancel';






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

  function createData(empid, fullname, phonenumber, address,email,department, position) {
    return { empid, fullname, phonenumber, address,email,department, position };
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

          rows[i] = createData(data[i].empid ,data[i].fullname, data[i].phonenumber, data[i].address, data[i].email, data[i].department, data[i].position);

          //rows_meet[i] = createData_meet(sample_meet);


      }

      ReactDOM.render(   <Paper style={{ height: 300, width: '60%',margin:'auto'}}>
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
                width:220,
                lable: 'Email',
                datakey: 'email',
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
  let email = '';
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
  function setEmail(det){
    email = det;
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
    body: JSON.stringify({ fullname: fullname, phonenumber: phonenumber, address: address, email:email, department: department, position: position})
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

      const [upempid, setUpEmpid] = React.useState("");
      const [upfullname, setUpFullname] = React.useState("");
      const [upphonenumber, setUpPhone] = React.useState("");
      const [upaddress, setUpAddress] = React.useState("");
      const [upemail, setUpEmail] = React.useState("");
      const [updepartment, setUpDepartment] = React.useState("");
      const [upposition, setUpPosition] = React.useState("");


    async function keyPress(e){

          if(e.keyCode == 13){
            console.log('value', e.target.value);
            // put the login here

            e.preventDefault();

            const apiUrl = 'http://localhost:3220/hr/emp/'+ upempid;
            const data = await getData(apiUrl);

            console.log(data.fullname)



            /* Call the state's "setter" method to update "userInput" state */
            setUpFullname(data.fullname)
            setUpPhone(data.phonenumber)
            setUpAddress(data.address)
            setUpEmail(data.email)
            setUpDepartment(data.department)
            setUpPosition(data.position)

            console.log('name '+ upfullname)
          }
      }

      async function update_emp(e) {
        /* Prevent button click's default behavior */
        e.preventDefault();

        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullname: upfullname, phonenumber: upphonenumber, address: upaddress, email:upemail, department: updepartment, position: upposition})
      };
      fetch('http://localhost:3220/hr/emp/'+ upempid, requestOptions)
        .then(response => response.json());
        console.log(requestOptions)
        alert("Item Updated")

      }


    return(
      <div className="hr_edit_win">
      <div className="hr_emp_close">
      <CancelIcon style={{fill: "red"}} onClick={close_emp}></CancelIcon>

      </div>


      <label className="tile_text_bi1">Edit Employee Details</label> <br /> <br />
      <br /> <br></br><br></br>
      <label className="tile_text_bi1">Employee ID</label> <br />
      <input className="input" type="text" name="title" onKeyDown={keyPress} onChange={(e) => setUpEmpid(e.target.value)}/>
      <br />
      <label className="tile_text_bi1">Full Name</label> <br />
      <input className="input" type="text" value={upfullname} onChange={(e) => setUpFullname(e.target.value)}/>
      <br />
      <label className="tile_text_bi1">Phone</label> <br />
      <input className="input" type="text" value={upphonenumber} onChange={(e) => setUpPhone(e.target.value)}/>
      <br />
      <label className="tile_text_bi1">Address</label> <br />
      <input className="input" type="text" value={upaddress} onChange={(e) => setUpAddress(e.target.value)}/>
      <br />
      <label className="tile_text_bi1">Email</label> <br />
      <input className="input" type="text" value={upemail} onChange={(e) => setUpEmail(e.target.value)}/>
      <br />
      <label className="tile_text_bi1">Department</label> <br />
      <input className="input" type="text" value={updepartment} onChange={(e) => setUpDepartment(e.target.value)}/>
    <br />
      <label className="tile_text_bi1">Position</label> <br />
      <input className="input" type="text" value={upposition} onChange={(e) => setUpPosition(e.target.value)}/>
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
        <div className="hr_bckground_container"> 
  <div>
      <div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>


      <div>
          <h1 className="hr_tile">Company Employee Database</h1>
      </div>

      <div>
              <Navbar />

      </div>
      

      <div id="main_win">
      </div>

      <br></br><br></br><br></br><br></br>
      <button type="button" className="hr_button1" onClick={Edit_emp}>Modify Employee Details</button>

      <div className="hr_crud_app-container">


      <div id="dis_emp">

      </div>


          <h2 className="hr_crud_H2" >Add New Employee Details</h2>

          <form className="hr_crud_form">

              <input
                  type="text"
                  name="fullname"
                  required="required"
                  placeholder="Enter the Name"
                  onChange={(e) => setName(e.target.value)}

              />
              <input
                  type="number"
                  name="phonenumber"
                  required="required"
                  placeholder="Enter the Contact"
                  onChange={(e) => setPhone(e.target.value)}

              />
              <input
                  type="text"
                  name="address"
                  required="required"
                  placeholder="Enter the Address"
                  onChange={(e) => setAddress(e.target.value)}

              />
              <input
                  type="text"
                  name="email"
                  required="required"
                  placeholder="Enter the E-Mail"
                  onChange={(e) => setEmail(e.target.value)}

              />
              <input
                  type="text"
                  name="department"
                  required="required"
                  placeholder="Enter the Department"
                  onChange={(e) => setDepartment(e.target.value)}

              />
              <input
                  type="text"
                  name="position"
                  required="required"
                  placeholder="Enter the Position"
                  onChange={(e) => setPosition(e.target.value)}
              />

              <button type="button" onClick={insert_emp}>Submit</button>

          </form>
          
          <div>
        <h1 className="hr_footer_tile">ecomms (Enterprise Resource Planning System -ERP System) - Human Resource Management</h1>
      </div>

      </div>

</div>

  </div>

  );

  }

  export default CrudOps;
