import React from 'react'
import '../menu.css';

function Navbar() {
    return (
        <div className="hr_Navbar">
            <div className="hr_leftSide">
            <div className="hr_lLinks">
            <a href="http://localhost:3000/Hr">Home</a>
            <a href="http://localhost:3000/HrCrudOps">Employee Database</a>
            <a href="http://localhost:3000/Hrsalary">Salary and Other Comphension</a>
            <a href="http://localhost:3000/Hrattendance">Attendance and Leave</a>
            <a href=""> Reports</a>
            </div>
            </div>

            <div className="hr_rightSide">
            <div className="hr_rLinks">
            <a href=""> Logout</a>
            </div>
            </div>


            <a href=""></a>

        </div>
    );
}

export default Navbar;
