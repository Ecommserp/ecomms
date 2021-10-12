import React, {useState} from 'react';
import logo from "./cyan.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import FilterList from '@material-ui/icons/FilterList';
import Search from '@material-ui/icons/Search';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Remove from '@material-ui/icons/Remove';
import ViewColumn from '@material-ui/icons/ViewColumn';
import ReactDOM from 'react-dom'
import MaterialTable from "material-table";
import EditIcon from '@material-ui/icons/Edit';








function Additem() {

  let table_data = [];
  let s_id = [];


  const [accid, setaccID] = useState("");
  const [accname, setaccname] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [accupid, setupaccID] = useState("");
  const [accupname, setupaccname] = useState("");
  const [upamount, setupAmount] = useState("");
  const [udate, setuDate] = useState("");



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

    async function render_data() {

      if(document.getElementById("load_data1")) {
        ReactDOM.render(<MaterialTable


         icons={tableIcons}
              title="Suppliers"
              columns={[
                { title: 'Supplier ID', field: 'Supplier_ID' , minWidth: 200  },


                {title: 'Name',field: 'name', minWidth: 200},

                    { title: 'Contact', field: 'contact', type: 'name', minWidth: 200  ,align: 'center' },
              ]}
              data={table_data}
              actions={[

                rowData => ({
                 icon: EditIcon,
                  tooltip: 'Edit User',
              //  onClick: (togglePopup),
              //  onClick: (event, rowData) => showpopup(s_id[0] = rowData.Supplier_ID) ,

              //  onClick: (event, rowData) => alert("You want to Edit " + rowData.name),
                //  disabled: rowData.birthYear < 2000
                })
              ]}
              options={{

                actionsColumnIndex: -1
              }}

            />, document.getElementById("load_data1"));
      }





    }
    function insert() {

      const requestOptions = {

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Account_ID: accid, Account_name: accname, Total: amount,date: date})
      };
      fetch('http://localhost:3220/acc/cash', requestOptions)
          .then(response => response.json());
          alert("Item added")
    }

    function update() {

      const requestOptions = {

          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Account_ID: accupid, Account_name: accupname, Total: upamount,date: udate})
      };
      fetch('http://localhost:3220/acc/cash/' + accupid, requestOptions)
          .then(response => response.json());
          alert("Item added")
    }


  return (
    <motion.div className = "additem" initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}>
        <i><h1 style={{
                position: 'absolute',
                right: 50,
                top: 72,}}>Cash<br></br>Flow</h1></i>
                <img
                style={{
                  position: 'absolute',
                  left: 250,
                  top: 50,
                width: 160
               }}
                src = {logo}/>
                <br></br>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
                <div id="load_data1"> </div>
                <br></br><br></br><br></br>
                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Cash Account</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Account ID : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={accid} onChange={(e) => setaccID(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>

                        Account Name : &nbsp;&nbsp;&nbsp;
                        <input type="text" name="code" value={accname} onChange={(e) => setaccname(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>



                        Amount : &nbsp;&nbsp;
                        <input type="text" name="name" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                        </label><br></br><br></br>
                        <label>



                        Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" name="quantity" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </label><br></br><br></br>
                        <input type="Reset" value="Reset"/> <div className="space"></div>
                        <input type="Submit" onClick={insert} value="Send cash"/> <div className="space"></div>

                        </form>

                        </Card.Body></Card>
                        </center>
                        <br></br><br></br><br></br>
                        <center><Card border ='primary' style={{ width: '40rem' }}>
                        <Card.Header style ={{backgroundColor: '#000428'}}><h3 style ={{color:'white'}}>Cash Correction</h3></Card.Header>
                        <Card.Body>
                        <form>
                            <label>
                                Account ID : &nbsp;&nbsp;&nbsp;
                                <input type="text" name="code" value={accupid} onChange={(e) => setupaccID(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>

                                Account name : &nbsp;&nbsp;&nbsp;
                                <input type="text" name="code" value={accupname} onChange={(e) => setupaccname(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>

                                Amount : &nbsp;&nbsp;
                                <input type="text" name="name" value={upamount} onChange={(e) => setupAmount(e.target.value)}/>
                                </label><br></br><br></br>
                                <label>



                                Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="date" name="quantity" value={udate} onChange={(e) => setuDate(e.target.value)}/>
                                </label><br></br><br></br>
                                <input type="Reset" value="Reset"/> <div className="space"></div>
                                <input type="Button" onClick={update} value="Change"/> <div className="space"></div>

                                </form>

                                </Card.Body></Card>
                                </center>
                                <br></br><br></br><br></br>


    </motion.div>

  );
}


export default Additem;
