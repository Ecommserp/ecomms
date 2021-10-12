import React from 'react'
import '../menu.css';

function Navbar() {
    return (
        <div className="hr_Navbar">
            <div className="hr_leftSide">
            <div className="hr_lLinks">
            <a href="http://localhost:3000/Hr">Home</a>
            <a href="http://localhost:3000/HrCrudOps">Employee Database Management</a>
            <a href="http://localhost:3000/Hrsalary">Employee Salary and Other  Comprehension Management</a>
            <a href="http://localhost:3000/Hrattendance">Employee Leave Management</a>
            <a href="http://localhost:3000/Hrsearch"> Reports</a>
            </div>
            </div>

            <div className="hr_rightSide">
            <div className="hr_rLinks">
            <a href="http://localhost:3000/Home"> Logout</a>
            </div>
            </div>


            <a href=""></a>

        </div>
    );
}

export default Navbar;
