import React,{useState, Fragment} from 'react';
import {nanoid} from 'nanoid';
import logo from './images/ecomms_logo.png';
import './Hr.css';
import './crudops.css';
import data from "./mock-crudops";
//import { NavigateNextOutlined } from '@material-ui/icons';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from './components/EditableRow';
import Navbar from "./components/Navbar";




function CrudOps() {

  console.log("all")
  let data1 = [];

  async function getData(url) {
  const response = await fetch(url);

  return response.json();
  }





    const [contacts, setContacts] = useState(data1);
    const [addFormData, setAddFormData] = useState({
        empid:'',
        fullname:'',
        phonenumber:'',
        address:'',
        department:'',
        position:''
    });




    const [editFormData, setEditFormData] = useState({
        empid:'',
        fullname:'',
        phonenumber:'',
        address:'',
        department:'',
        position:''
      });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('empid');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData [fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("empid");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
      };

    const handleAddFormSubmit = (event) =>{
        event.preventDefault();

    const newContact ={
        id : nanoid(),
        empid: addFormData.empid,
        fullname : addFormData.fullname,
        phonenumber: addFormData.phonenumber,
        address: addFormData.address,
        department: addFormData.department,
        position: addFormData.position,
    };

        const newContacts =[...contacts, newContact];
        setContacts(newContacts);

     };

        const handleEditFormSubmit =(event) =>{
                event.preventDefault();

        const editedContact = {

            id : editContactId,
            empid: editFormData.empid,
            fullname : editFormData.fullname,
            phonenumber: editFormData.phonenumber,
            address: editFormData.address,
            department: editFormData.department,
            position: editFormData.position,

        }

        const newContacts = [...contacts];

        const index = contacts.findIndex ((contact)=> contact.empid ===editContactId);

        newContacts [index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null)

        }

     const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.empid);

        const formValues ={
            empid:contact.empid,
            fullname:contact.fullname,
            phonenumber:contact.phonenumber,
            address:contact.address,
            department:contact.department,
            position:contact.position,
        }

            setEditFormData(formValues);

     };

        const handleCancelClick =() => {
            setEditContactId(null);
        };

        const handleDeleteClick =(contactId)=>{
            const newContacts = [...contacts];

            const index = contacts.findIndex((contact)=> contact.empid === contactId);

            newContacts.splice(index,1);

            setContacts (newContacts);

        }

        async function emp_data() {
          const apiUrl = 'http://localhost:3220/hr/emp';
          data1 = await getData(apiUrl);
          setContacts(data1);
          console.log('ww')

        }
        emp_data();

    return (
<div >
    <div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>


    <div>
        <h1 className="hr_tile">Compnay Employee Database</h1>
    </div>

    <div>
            <Navbar />

    </div>

    <br></br><br></br><br></br><br></br><br></br>
    <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
    <table>
        <thead>
            <tr>
                <th>Employee_ID</th>
                <th>Employee_Name</th>
                <th>Phone_Number</th>
                <th>Address</th>
                <th>Department</th>
                <th>Position</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact)=> (
            <Fragment>
                {editContactId === contact.empid ? (
                <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick = {handleCancelClick}
                />
                ) :(
                <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}/>
                 )}
            </Fragment>

            ))}
        </tbody>

    </table>
        </form>

        <h2 className="H2">Add New Employee Details</h2>

        <form onSubmit = {handleAddFormSubmit}>
            <input
                type="number"
                name="empid"
                required="required"
                placeholder="Enter an employee ID"
                onChange={handleAddFormChange}
            />
            <input
                type="text"
                name="fullname"
                required="required"
                placeholder="Enter the name"
                onChange={handleAddFormChange}
            />
            <input
                type="number"
                name="phonenumber"
                required="required"
                placeholder="Enter the phone number"
                onChange={handleAddFormChange}
            />
            <input
                type="text"
                name="address"
                required="required"
                placeholder="Enter the address"
                onChange={handleAddFormChange}
            />
            <input
                type="text"
                name="department"
                required="required"
                placeholder="Enter the department"
                onChange={handleAddFormChange}
            />
            <input
                type="text"
                name="position"
                required="required"
                placeholder="Enter the position"
                onChange={handleAddFormChange}
            />

            <button type="submit">Submit</button>

        </form>

    </div>



</div>

);

};

export default CrudOps;
