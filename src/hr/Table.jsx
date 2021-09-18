import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'Emp_ID',
    headerName: 'Employee ID',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Employee Name',
    width: 200,
    editable: true,
  },
  {
    field: 'phone_no',
    headerName: 'Phone Number',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'number',
    width: 400,
    editable: true,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 300,
    editable: true,
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 200,
    editable: true,
  },

];

const rows = [
  { id: 1, Emp_ID: '24050', name: 'David Bekham', phone_no: '0768896965', address: 'No.12, Flower Road, Kaduwela'  , department: 'Accounting' , position: 'Executive' },
  { id: 2, Emp_ID: '24051', name: 'Peter Pater', phone_no: '0786687873', address: 'No.18, Main Street, Matale'  , department: 'Sales' , position: 'Assistant Manager' },
  { id: 3, Emp_ID: '24053', name: 'John Cena', phone_no: '0793365658', address: 'No.32, Colombo 12'  , department: 'Purchasing' , position: 'Manager' },
  { id: 4, Emp_ID: '24061', name: 'Selena Gomez', phone_no: '076323284', address: 'No.01, Castle Road, Colombo 10'  , department: 'Customer Relationship' , position: 'Executive' },
 
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}