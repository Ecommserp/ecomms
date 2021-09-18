import React from 'react'
import '../menu.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="leftSide">
            <div className="lLinks">
            <a href="http://localhost:3000/Hr">Home</a>
            <a href="http://localhost:3000/HrCrudOps">Employee Database</a>
            <a href="http://localhost:3000/Hrsearch">Search</a>
            <a href="http://localhost:3000/Hrsalary">Salary and Other Comphension</a>
            <a href="http://localhost:3000/Hrattendance">Attendance and Leave</a>
            <a href=""> Reports</a>
            </div>
            </div>

            <div className="rightSide">
            <div className="rLinks">
            <a href=""> Logout</a>
            </div>
            </div>


            <a href=""></a>

        </div>
    );
}

export default Navbar;
