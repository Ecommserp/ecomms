import './Hr.css';
import logo from './images/ecomms_logo.png';
import './attendance.css';
import Navbar from "./components/Navbar";



function attendance() {
    return (
        <div className="hr_App" className="body">
            <img src={logo} className="App-logo" alt="logo" />


            <div>
                <h1 className="hr_tile">Employee Attendance and Leave</h1>
            </div>

            <div>
            <Navbar />

            </div>


            <br></br> <br></br> <br></br>



            <div className="attendance" className="abackgroud">
              <h1 className="h1">Total Daily Employee Attendance</h1>
            <table >
                <tr>
                  <td>Date </td>
                  <td>Department</td>
                  <td>Total Employees </td>
                  <td>Attendance Count</td>
                  <td>Leave</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Human Resource Department</td>
                  <td>6</td>
                  <td>5</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Finance Department</td>
                  <td>3</td>
                  <td>3</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Purchasing Department</td>
                  <td>5</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Manufacturing Department</td>
                  <td>10</td>
                  <td>6</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Customer Service Department</td>
                  <td>4</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Sales Department</td>
                  <td>7</td>
                  <td>5</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>Inventry Department</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>

            </table>

           </div>

            <br></br><br></br><br></br><br></br>
           <div className="attendance" className="abackgroud">
              <h1 className="h1">Total  Attendance and Leave Count</h1>
            <table >
                <tr>
                    <td>Date </td>
                  <td>Total Employees </td>
                  <td>Total Attendance</td>
                  <td>Total Leave</td>

                </tr>
                <tr>
                  <td>20.09.2021</td>
                  <td>37</td>
                  <td>24</td>
                  <td>15</td>

                </tr>

            </table>
            <br></br><br></br><br></br><br></br>

           </div>





         </div>



    );




}

export default attendance;
