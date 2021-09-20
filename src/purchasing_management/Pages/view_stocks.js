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
import moment from 'moment';
import ReactDOM from 'react-dom'





let table_data = [];


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


function View_stocks() {

  const [date, setdate] = useState("");
  const [product_id, setproduct_id] = useState("");
  const [supplier_id, setsupplier_id] = useState("");
  const [quantity, setquantity] = useState("");
  const [p_price, setp_price] = useState("");
  const [s_price, sets_price] = useState("");



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

    const apiUrl = 'http://localhost:3220/purchases';
    table_data = await getData(apiUrl);
render_data();



}
function showpopup() {

togglePopup();
}

function insert() {

  const requestOptions = {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Supplier_id: supplier_id, Product_id: product_id , Date: moment(date).format('YYYY-MM-DD') , quantity: quantity , P_price: p_price , S_price: s_price})
  };
  fetch('http://localhost:3220/purchases', requestOptions)
      .then(response => response.json());
      alert("Item added")
}




const loaddata = document.getElementById("load_data");



const [u_name, setu_name] = useState("");
const [u_contact, setu_contact] = useState("");

async function render_data() {

  if(document.getElementById("load_data")) {
    ReactDOM.render(
  <MaterialTable


 icons={tableIcons}
      title="Purchase History"
      columns={[
        { title: 'Purchase ID', field: 'Purchase_id' , minWidth: 200  },


        {title: 'Product ID',field: 'Product_id', minWidth: 200},


            { title: 'Quantity', field: 'quantity', type: 'name', minWidth: 200  ,align: 'center' },
              {title: 'Purchased Price',field: 'P_price', minWidth: 200},
                {title: 'Selling Price',field: 'S_price', minWidth: 200},
      ]}
      data={table_data}

      options={{
        search: false,
        actionsColumnIndex: -1
      }}

    />, document.getElementById("load_data"));
}
}






getData_rev();

 return (


   <div className="screen2">
   <div className="headu2">

 <div className="head_right3">


 <button className="button22"    onClick={togglePopup2}>Make New Purchase</button><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div>
  <div className="space"></div>   <div className="space"></div>   <div className="space"></div>   <div className="space"></div>   <div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div><div className="space"></div>


 </div>
 </div>


<div id="load_data"> </div>


        <div>


            {isOpen2 && <Popup
              content={<>


                <center><Card border ='primary' style={{ width: '40rem' }}>
                <Card.Header style ={{backgroundColor: '#1F78B4'}}><h3 style ={{color:'white'}}>New Purchase</h3></Card.Header>
                <Card.Body>
                <form>



                        <label>
                        Supplier ID &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" value={supplier_id} onChange={(e) => setsupplier_id(e.target.value)}/>
                        </label><br></br><br></br>

                        <label>
                            Product ID &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <input type="text" name="contact" value={product_id} onChange={(e) => setproduct_id(e.target.value)} />
                            </label><br></br><br></br>

                            <label>
                                Date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                <input  type="date" name="date" onChange={(e) => setdate(e.target.value)}/>

                                </label><br></br><br></br>


                                <label>
                                    Quantity  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                                    <input type="text" name="contact" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                                    </label><br></br><br></br>


                                    <label>
                                        purchased price &nbsp;
                                        <input type="text" name="contact" value={p_price} onChange={(e) => setp_price(e.target.value)} />
                                        </label><br></br><br></br>

                                        <label>
                                            Selling Price  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                            <input type="text" name="contact" value={s_price} onChange={(e) => sets_price(e.target.value)} />
                                            </label><br></br><br></br>

                        <button className="button22" value="Submit" onClick={insert}>Insert Data</button>

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

export default View_stocks;
