import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { styled } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import UpdateIcon from '@material-ui/icons/Update';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Popup from 'reactjs-popup';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import clsx from 'clsx';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import dp from '../assets/dp.jpg';
import './bi.css';


let data_revy1 = [];
let data_revy2 = [];
let data_revy3 = [];




const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-3',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};


const data1 = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
  datasets: [
    {
      label: '2020',
      data: [400, 354, 893, 483, 702, 294, 498],
      fill: true,
      backgroundColor: 'rgb(39,143,180,  0.7)',
      borderColor: 'rgba(39,143,180, 0.2)',
    },
    {
      label: '2021',
      data: [384, 740, 274, 933, 639, 385, 748],
      fill: true,
      backgroundColor: 'rgb(104,194,180,  0.7)',
      borderColor: 'rgba(104,194,180, 0.2)',
    },

  ],
};

const options1 = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-3',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};


const data3 = {
  labels: ['Procution', 'Purchased'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',

      ],
      borderWidth: 1,
    },
  ],
};

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['GOV', 'CAN', 'product 1', 'N/a', '400', '234334.00'],
  ['PRV', 'JP', 'product 2', 'N/a', '500', '234334.00'],
  ['GOV', 'IN', 'product 3', 'N/a', '800', '234334.00'],
];

function createData(id, segment, country, product, band, units, revenue) {
  return { id, segment,country, product, band, units, revenue };
}

const rows = [];

for (let i = 0; i < 20; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}


//meetings tableRow

const sample_meet = [
  ['GOV', 'CAN', 'product 1', 'N/a', '400', '234334.00'],
  ['PRV', 'JP', 'product 2', 'N/a', '500', '234334.00'],
  ['GOV', 'IN', 'product 3', 'N/a', '800', '234334.00'],
];

async function getData(url) {
const response = await fetch(url);

return response.json();
}

function createData_meet(id, title, Start_time, End_time, Attendees) {
  return { id, title, Start_time, End_time, Attendees };
}

const rows_meet = [];



async function getData_meet() {


    const apiUrl = 'http://localhost:3220/BI/meetings';
    const data = await getData(apiUrl);

    //console.log(data)

    for(var i = 0; i < data.length; i++){

        rows_meet[i] = createData_meet(data[i].Meeting_ID ,data[i].title, data[i].Start_time, data[i].End_time, data[i].Attendees);

        //rows_meet[i] = createData_meet(sample_meet);


    }
    //sample_aa();
    console.log(rows_meet)
    console.log(rows)



}



async function close_meet(){

  ReactDOM.render(  <div> </div>, document.getElementById('meet_dis'));

}


const data4 = {
  labels: ['JAN', 'FEB', 'MAR'],
  datasets: [
    {
      label: 'Client 01',
      data: [3433, 4542, 4523],
      fill: false,
      backgroundColor: 'rgb(130, 219, 109)',
      borderColor: 'rgba(130, 219, 109, 0.2)',
    },

    {
      label: 'Client 02',
      data: [1734, 1234, 1341],
      fill: false,
      backgroundColor: 'rgb(207, 131, 212)',
      borderColor: 'rgba(207, 131, 212, 0.2)',
    },
    {
      label: 'Client 03',
      data: [3410, 5216, 1632],
      fill: false,
      backgroundColor: 'rgb(102, 159, 223)',
      borderColor: 'rgba(102, 159, 223, 0.2)',
    },

  ],
};

const options4 = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-3',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};


const data5 = {
  labels: ['HR', 'BI', 'CRM', 'ACC', 'MAN', 'SAL'],
  datasets: [
    {
      label: 'Employee performance',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Productivity',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Employee integrity',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options5 = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const NotificationsSharpIcon1 = styled(NotificationsSharpIcon)({
  color: '#000',
  transition: "background 1s, color 1s",
  '&:hover': {
       color: "#659fdf",
       cursor: 'pointer',
    }
});



async function getData_rev() {

    const apiUrl = 'http://localhost:3220/BI/rev';
    const data = await getData(apiUrl);

    for(var i = 0; i < data.length; i++){

      if(data[i].year == '2019'){
        data_revy1[i] = data[i].total;
      }

      if(data[i].year == '2020'){
        data_revy2[i - 12] = data[i].total;
      }

      if(data[i].year == '2021'){
        data_revy3[i - 24] = data[i].total;
      }


    }
    sample_aa();


}


const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: '2019',
      data: data_revy1,
      fill: false,
      backgroundColor: 'rgb(130, 219, 109)',
      borderColor: 'rgba(130, 219, 109, 0.2)',
    },

    {
      label: '2020',
      data: data_revy2,
      fill: false,
      backgroundColor: 'rgb(207, 131, 212)',
      borderColor: 'rgba(207, 131, 212, 0.2)',
    },
    {
      label: '2021',
      data: data_revy3,
      fill: false,
      backgroundColor: 'rgb(102, 159, 223)',
      borderColor: 'rgba(102, 159, 223, 0.2)',
    },

  ],
};

async function sample_aa() {
  //alert(data_revy1)
  ReactDOM.render(<Line height='140' data={data} options={options} />, document.getElementById('revenue_graph'));
}

/* Declare functional InputField component */
function InputField () {

  /* Define local state hook to store the "user input" data */
  const [upTitle, setUPTitle] = React.useState("");
  const [upDes, setUPDes] = React.useState("");

  const [upID, setUPID] = React.useState("");
  const [ups_time, setUPs_time] = React.useState("");
  const [upe_time, setUPe_time] = React.useState("");
  const [upatt, setUPatt] = React.useState("");

  async function keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here

           e.preventDefault();

           const apiUrl = 'http://localhost:3220/BI/meetings/'+ upID;
           const data = await getData(apiUrl);



           /* Call the state's "setter" method to update "userInput" state */
           setUPTitle(data.title)
           setUPDes(data.description)
           setUPs_time(data.Start_time)
           setUPe_time(data.End_time)
           setUPatt(data.Attendees)
        }
     }



  async function update_meet(e) {
      /* Prevent button click's default behavior */
      e.preventDefault();

      const apiUrl = 'http://localhost:3220/BI/meetings/'+ upID;
      const data = await getData(apiUrl);



      /* Call the state's "setter" method to update "userInput" state */
      setUPTitle(data.title)
      setUPDes(data.description)
      setUPs_time(data.Start_time)
      setUPe_time(data.End_time)
      setUPatt(data.Attendees)
  }

   /* Render both input and button in a <> fragment */
   return (<>

     <label className="tile_text1">ID</label> <br />
     <input className="input" type="text" name="id" value={upID} onKeyDown={keyPress} onChange={(e) => setUPID(e.target.value)}/>
     <br />
     <label className="tile_text1">Title</label> <br />
     <input className="input" type="text" name="title" value={upTitle} onChange={(e) => setUPTitle(e.target.value)}/>
     <br />
     <label className="tile_text1">Description</label> <br />
     <input className="input" type="text" name="description" value={upDes} onChange={(e) => setUPDes(e.target.value)}/>
     <br />
     <label className="tile_text1">Start Time</label> <br />
     <input className="input" type="datetime-local" name="s_time" value={moment(ups_time).format('YYYY-MM-DDTHH:mm')} onChange={(e) => setUPs_time(e.target.value)}/>
     <br />
     <label className="tile_text1">End Time</label> <br />
     <input className="input" type="datetime-local" name="e_time" value={moment(upe_time).format('YYYY-MM-DDTHH:mm')} onChange={(e) => setUPe_time(e.target.value)}/>
     <br />
     <label className="tile_text1">Attendees</label> <br />
     <input className="input" type="text" name="att" value={upatt} onChange={(e) => setUPatt(e.target.value)}/>
     <br />
     <br />

     <button className="button_add" onClick={update_meet}>Update</button>
     <button className="button_delete" onClick={update_meet}>Delete</button>

   </>)
}


function Dash() {
  let title = '';
  let description = '';
  let s_time = '';
  let e_time = '';
  let att = '';

  function setTitle(det){
    title = det;
  }
  function setDescription(det){
    description = det;
  }
  function sets_time(det){
    s_time = det;
  }
  function sete_time(det){
    e_time = det;
  }
  function setatt(det){
    att = det;
  }



  function insert_meet() {

    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title, description: description, s_time: s_time, e_time: e_time, att: att})
};
fetch('http://localhost:3220/BI/meetings', requestOptions)
    .then(response => response.json());
    alert("Item added")
  }


const Display_meet = () => {

//  alert(rows_meet)


ReactDOM.render(  <div className="noti_win" id="noti_win">
<div className="meeting_add">

<CancelIcon style={{fill: "red"}} onClick={close_meet}></CancelIcon>
</div>
<label className="tile_text1">Meetings</label> <br />

<div className="meeting_add">


<Popup trigger={ <UpdateIcon className="add_new" fontSize="large"></UpdateIcon> } modal>
<div className="add_new_win">
<label className="tile_text1">Update Meeting</label> <br />

<InputField />


 </div>

</Popup>


<Popup trigger={ <AddCircleIcon className="add_new" fontSize="large"></AddCircleIcon> } modal>
<div className="add_new_win">
<label className="tile_text1">New Meeting</label> <br /> <br />
<br />
<label className="tile_text1">Title</label> <br />
<input className="input" type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
<br />
<label className="tile_text1">Description</label> <br />
<input className="input" type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
<br />
<label className="tile_text1">Start Time</label> <br />
<input className="input" type="datetime-local" name="s_time" onChange={(e) => sets_time(e.target.value)}/>
<br />
<label className="tile_text1">End Time</label> <br />
<input className="input" type="datetime-local" name="e_time" onChange={(e) => sete_time(e.target.value)}/>
<br />
<label className="tile_text1">Attendees</label> <br />
<input className="input" type="text" name="att" onChange={(e) => setatt(e.target.value)}/>
<br />
<br />

<button className="button_add" onClick={insert_meet}>Add New</button>

 </div>

</Popup>


</div> <br /> <br />
<Paper id="table_meet" style={{ height: '100%', width: '100%' }}>
<VirtualizedTable
  rowCount={rows_meet.length}
  rowGetter={({ index }) => rows_meet[index]}
  columns={[
    {
      width: 60,
      label: 'ID',
      dataKey: 'id',
    },
    {
      width: 120,
      label: 'title',
      dataKey: 'title',
    },
    {
      width: 120,
      label: 'Start Time',
      dataKey: 'Start_time',
    },
    {
      width: 120,
      label: 'End Time',
      dataKey: 'End_time',
    },
    {
      width: 120,
      label: 'Attendees',
      dataKey: 'Attendees',
    },
  ]}
/>
</Paper>


  </div>, document.getElementById('meet_dis'));



}

getData_rev();
getData_meet();

  return (
    <div className="App_bi">

    <div id="meet_dis"></div>



    <div className="headu">
      <label className="tile_text">Good Morning Mr.Sample </label>

<div className="head_right">
<button className="button" onClick={Display_meet}>Meetings</button>

    <div className="space"></div>
  <NotificationsSharpIcon1 tooltip="Description here"> </NotificationsSharpIcon1>

      <div className="space"></div>
      <img src={dp} className="App-dp" alt="dp" /><div className="space"></div>

</div>
</div>


<div className="body_3">
<div className="space"></div>
<div className="revenue" id="revenue">
<label className="tile_text">Revenue Growth</label><br /><br />
<div id="revenue_graph"> </div>
</div>
<div className="space"></div>
<div className="p_margin">
<label className="tile_text">Profit Margin</label>
<div className="drop_down">
<FormControl>
  <Select>
    <MenuItem value={10}>Last 3 Months</MenuItem>
    <MenuItem value={20}>Last 6 Months</MenuItem>
    <MenuItem value={30}>Last Year</MenuItem>
  </Select>
</FormControl>
</div>
<br /><br />
<TrendingUpIcon className="TrendingUpIcon"></TrendingUpIcon> <label className="p_title">20% increase compared to last 6 months</label>
<Line height='130' data={data1} options={options1} />
</div>

</div>
<div className="body_3"><div className="space"></div>
<div className="items">
<label className="tile_text">Production : Purchased</label>
<div className="drop_down">
<FormControl>
  <Select>
    <MenuItem value={10}>Last 3 Months</MenuItem>
    <MenuItem value={20}>Last 6 Months</MenuItem>
    <MenuItem value={30}>Last Year</MenuItem>
  </Select>
</FormControl>
</div>
<br /><br />
<Pie data={data3} />
</div>
<div className="space"></div>

<div className="clients">
<label className="tile_text">Clients</label>
<div className="drop_down">
<FormControl>
  <Select>
    <MenuItem value={10}>Last 3 Months</MenuItem>
    <MenuItem value={20}>Last 6 Months</MenuItem>
    <MenuItem value={30}>Last Y9ar</MenuItem>
  </Select>
</FormControl>
</div>
<br /><br />
<TrendingUpIcon className="TrendingUpIcon"></TrendingUpIcon> <label className="p_title">30 New clients in Last 6 months</label>

<Paper style={{ height: 390, width: '100%' }}>
     <VirtualizedTable
       rowCount={rows.length}
       rowGetter={({ index }) => rows[index]}
       columns={[
         {
           width: 120,
           label: 'Segment',
           dataKey: 'segment',
         },
         {
           width: 120,
           label: 'Country',
           dataKey: 'country',
         },
         {
           width: 120,
           label: 'Product',
           dataKey: 'product',
         },
         {
           width: 120,
           label: 'Discount Band',
           dataKey: 'band',
         },
         {
           width: 120,
           label: 'Sold Units',
           dataKey: 'units',
        },
        {

          label: 'Revenue',
          dataKey: 'revenue',
       },
       ]}
     />
   </Paper>
   </div></div>

   <div className="body_3"><div className="space"></div>
   <div className="retention">
   <label className="tile_text">Retention Clients</label>
   <div className="drop_down">
   <FormControl>
     <Select>
       <MenuItem value={10}>Last 3 Months</MenuItem>
       <MenuItem value={20}>Last 6 Months</MenuItem>
       <MenuItem value={30}>Last Year</MenuItem>
     </Select>
   </FormControl>
   </div>
   <br /><br />
   <Line data={data4} height='180px' options={options4} />
   </div>
<div className="space"></div>
   <div className="per">
   <label className="tile_text">Department Performance</label>
   <div className="drop_down">
   <FormControl>
     <Select>
       <MenuItem value={10}>Last 3 Months</MenuItem>
       <MenuItem value={20}>Last 6 Months</MenuItem>
       <MenuItem value={30}>Last Year</MenuItem>
     </Select>
   </FormControl>
   </div>
   <br /><br />
   <Bar height='120' data={data5} options={options5} />
   </div>


</div>

<div className="body_3"><div className="space"></div>
<div className="emp">
<label className="tile_text">Retention Clients</label>
<br /><br />


<Paper style={{ height: 390, width: '100%' }}>
     <VirtualizedTable
       rowCount={rows.length}
       rowGetter={({ index }) => rows[index]}
       columns={[
         {
           width: 230,
           label: 'Segment',
           dataKey: 'segment',
         },
         {
           width: 230,
           label: 'Country',
           dataKey: 'country',
         },
         {
           width: 230,
           label: 'Product',
           dataKey: 'product',
         },
         {
           width: 230,
           label: 'Discount Band',
           dataKey: 'band',
         },
         {
           width: 230,
           label: 'Sold Units',
           dataKey: 'units',
        },
        {

          label: 'Revenue',
          dataKey: 'revenue',
       },
       ]}
     />
   </Paper>
</div>
</div>
</div>

  );

}

export default Dash;
