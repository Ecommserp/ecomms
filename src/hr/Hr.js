
import './Hr.css';
import logo from './images/ecomms_logo.png';


function Hr() {
  return (
    <div className="hr_bckground_container"> 
    <div className="hr_App" >
      <img src={logo} className="hr_App-logo" alt="logo" />

      <div>
        <h1 className="hr_tile">Human Resource Management</h1>
      </div>



      <br></br>

      <h2 className="hr_dashboard">Dashboard</h2>
      <br></br><br></br><br></br>


      <div className="hr_button_group">
        <a href="http://localhost:3000/HrCrudOps" className="hr_button">Employee Database</a>
        <div className="space"></div>
        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="hr_button_group">

        <a href="http://localhost:3000/Hrsalary" className="hr_button">Salary and Other Comphension</a>
        <div className="hr_space"></div>
        <a href="http://localhost:3000/Hrattendance" className="hr_button">Attendance and Leave</a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="hr_button_group">
        <a href="" className="hr_button">Reports</a>
        <div className="hr_space"></div>
        <a href="" className="hr_button">Logout</a>
      </div>

      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
        <h1 className="hr_footer_tile">ecomms (Enterprise Resource Planning System -ERP System) - Human Resource Management</h1>
      </div>







</div>

    </div>

  );
}

export default Hr;
