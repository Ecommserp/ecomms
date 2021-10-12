import React from 'react';
import 'reactjs-popup/dist/index.css';
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import EditIcon from '@material-ui/icons/Edit';
import Card from 'react-bootstrap/Card';
import Popup from './popup';
import {  useState } from "react";
import './pmcss1.css';
import ReactDOM from 'react-dom'






let table_data = [];
let s_id = [];

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


function Manage_suppliers() {

  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [nic, setnic] = useState("");
const [br, setbr] = useState("");

  const [isOpen, setIsOpen] = useState(false);


    const togglePopup = () => {
      setIsOpen(!isOpen);
}
  const [isOpen2, setIsOpen2] = useState(false);
const togglePopup2 = () => {
  setIsOpen2(!isOpen2);

}


const [isOpen3, setIsOpen3] = useState(false);
const togglePopup3 = () => {
setIsOpen3(!isOpen3);

}



async function getData(url) {
const response = await fetch(url);

return response.json();
}


async function getData_rev() {

    const apiUrl = 'http://localhost:3220/suppliers';
    const data = await getData(apiUrl);

    for(var i = 0; i < data.length; i++){


        table_data[i] = data[i];


    }
render_data();

}
function showpopup() {

togglePopup();
}

function insert() {

  const requestOptions = {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, contact: contact, nic: nic, address: address, br: br})
  };
  fetch('http://localhost:3220/suppliers', requestOptions)
      .then(response => response.json());
      alert("Item added")
}


///
const [id, setid] = useState("");





  function deleteSP() {

    const requestOptions = {

        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id})
    };
    fetch('http://localhost:3220/suppliers/'+ id, requestOptions)
        .then(response => response.json());
        console.log(requestOptions)
        alert("successfully removed supplier")
        setid("");
  }
async function render_data() {

  if(document.getElementById("load_data1")) {
    ReactDOM.render(<MaterialTable


     icons={tableIcons}
          title="Suppliers"
          columns={[
            { title: 'Supplier ID', field: 'Supplier_ID' , minWidth: 200  },


            {title: 'Name',field: 'name', minWidth: 200},



                { title: 'Contact', field: 'contact', type: 'name' ,align: 'center' },

{ title: 'NIC', field: 'nic', type: 'name', minWidth: 200  ,align: 'center' },

{ title: 'Business registration', field: 'br', type: 'name' ,align: 'center' },


          ]}
          data={table_data}
          actions={[

            rowData => ({
             icon: EditIcon,
              tooltip: 'Edit User',
          //  onClick: (togglePopup),
            onClick: (event, rowData) => showpopup(s_id[0] = rowData.Supplier_ID) ,

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

////

const [u_name, setu_name] = useState("");
const [u_contact, setu_contact] = useState("");

async function update_product() {
  /* Prevent button click's default behavior */


  const requestOptions = {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: s_id[0], name: u_name, contact: u_contact})
};


fetch('http://localhost:3220/suppliers/'+ s_id[0], requestOptions)
  .then(response => response.json());
  console.log(requestOptions)
alert("You want to Update supplier : " + s_id[0]);
  setu_name("");
  setu_contact("");



}



getData_rev();


  return (

   <div className="screen2">
   <div className="headu2">

 <div className="head_right3">
 <button className="button22"   onClick={togglePopup3}>Remove Supplier</button>

 <button className="button22"    onClick={togglePopup2}>Add New Supplier</button><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div>
  <div className="space"></div>


 </div>
 </div>

<div id="load_data1"> </div>


      <div>


          {isOpen && <Popup
            content={<>


              <center><Card border ='primary' style={{ width: '40rem' }}>
              <Card.Header style ={{backgroundColor: '#1F78B4'}}><h3 style ={{color:'white'}}>Update Suppliers</h3></Card.Header>
              <Card.Body>
              <form>
                  <label>
                      Supplier Name  &nbsp;&nbsp;
                      <input type="text" name="u_name" value={u_name} onChange={(e) => setu_name(e.target.value)} />
                      </label><br></br><br></br>







                      <label>
                      Contact  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" name="u_contact"  value={u_contact} onChange={(e) => setu_contact(e.target.value)}/>
                      </label><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button className="button22" value="Submit" onClick={update_product}>Update</button>

                      </form>
                      </Card.Body></Card>
                      </center>


            </>}
            handleClose={togglePopup}
          />}
        </div>

        <div>


            {isOpen2 && <Popup
              content={<>


                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1F78B4'}}><h3 style ={{color:'white'}}>New Supplier</h3></Card.Header>
                <Card.Body>
                <form>

                        <label>




                        Name  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)}/>
                        </label><br></br><br></br>

                        <label>
                            Contact No  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <input type="text" name="contact" value={contact} onChange={(e) => setcontact(e.target.value)} />
                            </label><br></br><br></br>

                            <label>
                                Address  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                <input type="text" name="address" value={address} onChange={(e) => setaddress(e.target.value)} />
                                </label><br></br><br></br>


                                <label>
                                    NIC  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                    <input type="text" name="nic" value={nic} onChange={(e) => setnic(e.target.value)} />
                                    </label><br></br><br></br>


                                    <label>
                                        Business registration code &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                        <input type="text" name="br" value={br} onChange={(e) => setbr(e.target.value)} />
                                        </label><br></br><br></br>

                        <button className="button22" value="Submit" onClick={insert}>Insert Data</button>

                        </form>
                        </Card.Body></Card>
                        </center>


              </>}
              handleClose={togglePopup2}
            />}
          </div>




          <div>


              {isOpen3 && <Popup
                content={<>


                  <center><Card border ='primary' style={{ width: '40rem' }}>
                  <Card.Header style ={{backgroundColor: '#1F78B4'}}><h3 style ={{color:'white'}}>Remove Suppliers</h3></Card.Header>
                  <Card.Body>
                  <form >








                          <label>
                          Supplier ID  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input type="text" name="id" value={id} onChange={(e) => setid(e.target.value)}/>
                          </label><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className="button22" value="Submit" onClick={deleteSP}>Delete</button>

                          </form>
                          </Card.Body></Card>
                          </center>


                </>}
                handleClose={togglePopup3}
              />}
            </div>














 </div>

 );
}

export default Manage_suppliers;
