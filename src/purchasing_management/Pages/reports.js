import React from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';




function reports() {


  return (

    <table style={{width:10000  ,height:500 , marginTop:100}}>
    <tr><th>
    <button className='button1' style={{marginTop: 50}}>Generate Weekly Report</button>
    </th></tr>
    <tr><th>
    <button className='button1' style={{marginTop: 50}}>Generate Monthly Report</button>
    </th></tr>
    <tr><th>
    <button className='button1' style={{marginTop: 50}}>Generate Annual Report</button>
    </th></tr>
    </table>

  );
}

export default reports;
