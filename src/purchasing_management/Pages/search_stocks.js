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




import './pmcss1.css';
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
  let table_data = [];







async function getData(url) {
const response = await fetch(url);

return response.json();
}

async function getData_rev() {

    const apiUrl = 'http://localhost:3220/purchases';
    const data = await getData(apiUrl);

    for(var i = 0; i < data.length; i++){


        table_data[i] = data[i];


    }


}


getData_rev();

function Search_stocks() {


getData_rev();




 return (

   <div className="screen3">
   <div className="headu2">
   <MaterialTable


  icons={tableIcons}
       title="purchases"
       columns={[
         { title: 'Supplier ID', field: 'Purchase_id' , minWidth: 200  },




             { title: 'Product ID', field: 'Product_id', type: 'name', minWidth: 200  ,align: 'center' },
              { title: 'Date', field: 'Date', type: 'name', minWidth: 200  ,align: 'center' },
              { title: 'Quantity', field: 'quantity', type: 'name', minWidth: 200  ,align: 'center' },
                  { title: 'purchase price', field: 'P_price', type: 'name', minWidth: 200  ,align: 'center' },
                      { title: 'Selling price', field: 'S_price', type: 'name', minWidth: 200  ,align: 'center' },
       ]}
       data={table_data}

       options={{
         actionsColumnIndex: -1
       }}

     />

     </div>
          </div>

 );
}

export default Search_stocks;
