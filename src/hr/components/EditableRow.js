import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input  type="number"
                        required="required"
                        placeholder="Enter an employee ID"
                        name="empid"
                        value={editFormData.empid}
                        onChange={handleEditFormChange}
                        ></input>                
            </td>
            <td>
                <input  type="text"
                        required="required"
                        placeholder="Enter the name"
                        name="fullname"
                        value={editFormData.fullname}
                        onChange={handleEditFormChange}
                        ></input>    
            </td>
            <td>
                <input  type="number"
                        required="required"
                        placeholder="Enter the phone number"
                        name="phonenumber"
                        value={editFormData.phonenumber}
                        onChange={handleEditFormChange}
                        ></input>    
            </td>
            <td>
                <input  type="text"
                        required="required"
                        placeholder="Enter the address"
                        name="address"
                        value={editFormData.address}
                        onChange={handleEditFormChange}
                        ></input>    
            </td>
            <td>
            <input  type="text"
                        required="required"
                        placeholder="Enter the department"
                        name="department"
                        value={editFormData.department}
                        onChange={handleEditFormChange}
                        ></input>    
            </td>
            <td>
            <input  type="text"
                        required="required"
                        placeholder="Enter the position"
                        name="position"
                        value={editFormData.position}
                        onChange={handleEditFormChange}
                        ></input>    
            </td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
        </tr>
    )
}

export default EditableRow;
