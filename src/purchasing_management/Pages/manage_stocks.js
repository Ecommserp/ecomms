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


function Manage_stocks() {

  const [isOpen, setIsOpen] = useState(false);


    const togglePopup = () => {
      setIsOpen(!isOpen);




}
  const [isOpen2, setIsOpen2] = useState(false);
const togglePopup2 = () => {
  setIsOpen2(!isOpen2);

}



 return (


   <div className="screen">
   <div className="headu2">

 <div className="head_right">
     <button className="button22">Supplier Stocks</button> <div className="space"></div>
     <button className="button22">Vendor Stocks</button>
     <button className="button22"    onClick={togglePopup2}>Add New</button>
  <div className="space"></div>


 </div>
 </div>


    <MaterialTable


   icons={tableIcons}
        title="Stocks"
        columns={[
          { title: 'Product ID', field: 'name' , minWidth: 200  },


          {title: 'Name',field: 'birthCity', minWidth: 200},

              { title: 'Quntity', field: 'birthYear', type: 'numeric', minWidth: 200  ,align: 'center' },
        ]}
        data={[
          { name: '00001',   birthCity: 'Sample data',birthYear: 1987 },
          { name: '00002', birthCity: 'Sample data',birthYear: 2017 },
        ]}
        actions={[

          rowData => ({
           icon: EditIcon,
            tooltip: 'Delete User',
          onClick: (togglePopup),

          //  onClick: (event, rowData) => alert("You want to Edit " + rowData.name),
          //  disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}

      />

      <div>


          {isOpen && <Popup
            content={<>


              <center><Card border ='primary' style={{ width: '40rem' }}>
              <Card.Header style ={{backgroundColor: '#1F78B4'}}><h3 style ={{color:'white'}}>Manage Stocks</h3></Card.Header>
              <Card.Body>
              <form>
                  <label>
                      Product Name  &nbsp;&nbsp;
                      <input type="text" name="p_name" />
                      </label><br></br><br></br>







                      <label>
                      Quantity  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="number" name="quantity"/>
                      </label><br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button className="button22">Update</button>

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
                <Card.Header style ={{backgroundColor: '#1F78B4'}}><h3 style ={{color:'white'}}>Manage Stocks</h3></Card.Header>
                <Card.Body>
                <form>
                    <label>
                        Product Name  &nbsp;&nbsp;
                        <input type="text" name="p_name" />
                        </label><br></br><br></br>
                        <label>




                        Quantity  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="number" name="quantity"/>
                        </label><br></br><br></br>

                        <label>
                            Supplier ID  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <input type="text" name="s_id" />
                            </label><br></br><br></br>

                        <button className="button22">Insert Data</button>

                        </form>
                        </Card.Body></Card>
                        </center>


              </>}
              handleClose={togglePopup2}
            />}
          </div>

 </div>

 );
}

export default Manage_stocks;
