
 import React from 'react';
 import logo from './images/ecomms_logo.png';
 import SearchBar from "./SearchBar";
 import './Hr.css';
 import Navbar from "./components/Navbar"
 import Pdfgen from './pdf';


 import 'bootstrap/dist/css/bootstrap.min.css';






 function search() {
     return (
         <div  >
             <img src={logo} className="App-logo" alt="logo" />


             <div>
                 <h1 className="hr_tile">Report</h1>
             </div>

             <div>
            <Navbar />

            </div>

             <br></br> <br></br> <br></br>

           
             <Pdfgen />







          </div>



     );

 }
export default search;
