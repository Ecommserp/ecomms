import React from 'react'

const ReadOnlyRow =({contact, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
                <td>{contact.empid}</td>
                <td>{contact.fullname}</td>
                <td>{contact.phonenumber}</td>
                <td>{contact.address}</td>
                <td>{contact.department}</td>
                <td>{contact.position}</td>
                <td>
                    <button
                        type="button"
                        onClick={(event) => handleEditClick(event,contact)}>
                            Edit
                        </button>
                        <button type="button" onClick={() => handleDeleteClick(contact.empid)}>
                        Delete
                    </button>
                    
                </td>
            </tr>
    );
};

export default ReadOnlyRow;
