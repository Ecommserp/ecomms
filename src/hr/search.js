
 import React from 'react';
 import logo from './images/ecomms_logo.png';
 import SearchBar from "./SearchBar";
 import './Hr.css';
 import Navbar from "./components/Navbar"
 import Pdfdwn from './pdf';
 import './salary.css';


 import 'bootstrap/dist/css/bootstrap.min.css';






 function search() {
     return (
        <div className="hr_bckground_container">
         <div  >
             <img src={logo} className="App-logo" alt="logo" />


             <div>
                 <h1 className="hr_tile">Human Resource Reports</h1>
             </div>

             <div>
            <Navbar />

            </div>

             <br></br> <br></br> <br></br>

           
             <Pdfdwn />







          </div>
          
          </div>



     );

 }
export default search;
