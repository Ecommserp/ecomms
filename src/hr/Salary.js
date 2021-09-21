
import './Hr.css';
import logo from './images/ecomms_logo.png';
import './salary.css';
import Navbar from "./components/Navbar";



function Salary() {
    return (

        <div className="App" className="body">
            <img src={logo} className="App-logo" alt="logo" />


            <div>
                <h1 className="hr_tile">Salary and Other Comphension</h1>
            </div>

            <div>
            <Navbar />

            </div>


            <br></br> <br></br> <br></br>



            <div className="salary" >
              <h1 className="h1">Payroll 2021 (Amounts in LKR)</h1>
            <table >
                <tr>
                  <td>Month</td>
                  <td>Total Payments Received from Finance</td>
                  <td>Total Basic Salary Payments</td>
                  <td>Total Overtime Payments</td>
                  <td>Total Other Compehensions</td>
                </tr>
                <tr>
                  <td>January</td>
                  <td>1000000</td>
                  <td>800000</td>
                  <td>150000</td>
                  <td>50000</td>
                </tr>
                <tr>
                  <td>February</td>
                  <td>1100000</td>
                  <td>900000</td>
                  <td>150000</td>
                  <td>50000</td>
                </tr>
                <tr>
                  <td>March</td>
                  <td>1050000</td>
                  <td>850000</td>
                  <td>180000</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>April</td>
                  <td>9000000</td>
                  <td>700000</td>
                  <td>100000</td>
                  <td>100000</td>
                </tr>
                <tr>
                  <td>May</td>
                  <td>1150000</td>
                  <td>1000000</td>
                  <td>1000000</td>
                  <td>15000</td>
                </tr>
                <tr>
                  <td>June</td>
                  <td>1100000</td>
                  <td>800000</td>
                  <td>160000</td>
                  <td>50000</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>950000</td>
                  <td>800000</td>
                  <td>100000</td>
                  <td>50000</td>
                </tr>
                <tr>
                  <td>August</td>
                  <td>1200000</td>
                  <td>1100000</td>
                  <td>50000</td>
                  <td>50000</td>
                </tr>

            </table>

           </div>





         </div>



    );




}

export default Salary;
