
 import React from 'react';
 import logo from './images/ecomms_logo.png';
 import SearchBar from "./SearchBar";
 import './Hr.css';
 import Navbar from "./components/Navbar";
 import empdata from "./mock-crudops";







 function search() {
     return (
         <div  >
             <img src={logo} className="App-logo" alt="logo" />


             <div>
                 <h1 className="hr_tile">Search</h1>
             </div>

             <div>
            <Navbar />

            </div>

             <br></br> <br></br> <br></br>

             <SearchBar placeholder="Enter the details.." data={empdata}/>








          </div>



     );

 }
export default search;
