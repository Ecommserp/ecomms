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


async function getData(url) {
const response = await fetch(url);

return response.json();
}



getData_rev();

function showpopup() {

alert("You want to Remove Request : " + s_id[0]);

  const requestOptions = {
method: 'DELETE',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ id: s_id[0]})
};
fetch('http://localhost:3220/purchases/requests/'+ s_id[0], requestOptions)
.then(response => response.json());
console.log(requestOptions)
alert("successfully removed Request")


}

async function getData_rev() {

    const apiUrl = 'http://localhost:3220/purchases/requests';
    const data = await getData(apiUrl);

    for(var i = 0; i < data.length; i++){


        table_data[i] = data[i];


    }
render_data();

}

async function render_data() {

  if(document.getElementById("load_data13")) {
    ReactDOM.render(<MaterialTable


     icons={tableIcons}
          title="Requests"
          columns={[
            { title: 'ID', field: 'id' , minWidth: 200  },


            {title: 'Name',field: 'name', minWidth: 200},



                { title: 'Type', field: 'type', type: 'name' ,align: 'center' },

{ title: 'Quantity', field: 'quantity', type: 'name', minWidth: 200  ,align: 'center' },




          ]}
          data={table_data}
          actions={[

            rowData => ({
             icon: EditIcon,
              tooltip: 'Edit User',
          //  onClick: (togglePopup),
         onClick: (event, rowData) => showpopup(s_id[0] = rowData.id) ,

          //  onClick: (event, rowData) => alert("You want to Edit " + rowData.name),
            //  disabled: rowData.birthYear < 2000
            })
          ]}
          options={{

            actionsColumnIndex: -1
          }}

        />, document.getElementById("load_data13"));
  }



}



function Request_page() {
const [id, setid] = useState("");

return (

<div>
   <div className="screen33">
<div id="load_data13"> </div>
</div>
</div>

 );
}

export default Request_page;
