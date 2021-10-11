import React, { useState, useEffect } from 'react';
import { signInToGoogle, initClient,getSignedInUserEmail, signOutFromGoogle , publishTheCalenderEvent } from './GoogleService';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../crm/animations';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';
import './bi.css';

export default function GoogleEventComponent() {


    const [signedin,setSignedIn] = useState(false);
    const [googleAuthedEmail,setgoogleAuthedEmail] = useState();
    const [mdescription,setmDescription] =useState('');
    const [startTime,setStartTime] = useState('');
    const [endTime,setEndTime] = useState('');

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

    const columns = [
      { id: 'empid', label: 'Employee ID', minWidth: 70 },
      { id: 'fullname', label: 'Name', minWidth: 70 },
      { id: 'email',label: 'Email',minWidth: 170,align: 'right',},

    ];

    async function getData(url) {
    const response = await fetch(url);

    return response.json();
    }




        function createData(empid, fullname, email) {
          return { empid, fullname, email};
        }

        const rows = [];



        const useStyles = makeStyles({
          root: {
            width: '100%',
          },
          container: {
            maxHeight: 440,
          },
        });

        const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    async function sample_aa() {
      ReactDOM.render(
        <motion.div className = "view" initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
                      <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[6, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        </motion.div>, document.getElementById('inq_tbl'));


    }

    async function getData_inq() {
      rows.length = 0;
      //alert('working')

        const apiUrl = 'http://localhost:3220/hr/emp';
        const data = await getData(apiUrl);

        for(var i = 0; i < data.length; i++){
          rows[i] = createData(data[i].empid, data[i].fullname, data[i].email);




        }


        sample_aa();

    }

    getData_inq();


    //for google

    useEffect(()=>{
        initClient((success)=>{
            if (success){
                getGoogleAuthorizedEmail();
            }
        });
    },[]);

    function insert_meet() {



    }

    const getGoogleAuthorizedEmail =async ()=>{
      let email = await getSignedInUserEmail();
      if (email){
          setSignedIn(true)
          setgoogleAuthedEmail(email)
      }
  };
  const getAuthToGoogle =async ()=>{
      let successfull =await signInToGoogle();
      if (successfull){
          getGoogleAuthorizedEmail();
      }
    };
  const _signOutFromGoogle = () => {
      let status = signOutFromGoogle();
      if (status){
          setSignedIn(false);
          setgoogleAuthedEmail(null);
      }
  };
  const submit = (e) =>{

    var names = att;
    var nameArr = names.split(',');
    setatt("{'email': 'dinithkaushalya55@gmail.com'},{'email': 'pulasthi.perera94@gmail.com'}")

      e.preventDefault();
      var event = {
        'summary': title,
        'description': description + ' sent through Ecomms ERP',
        'conferenceData': {
        'createRequest': {
            'requestId': "sample123",
            'conferenceSolutionKey': { type: "hangoutsMeet" },
          },
      },
          'start': {
              'dateTime':moment(s_time),
              'timeZone': 'America/Los_Angeles'
            },
            'end': {
              'dateTime': moment(e_time),
              'timeZone': 'America/Los_Angeles'
            },
            'attendees': [att],
      }
      publishTheCalenderEvent(event);

      const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, description: description, s_time: s_time, e_time: e_time, att: att})
  };
  fetch('http://localhost:3220/BI/meetings', requestOptions)
      .then(response => response.json());
      alert("Item added")




  }


    ////////////

    return (
         <div className='ga_calenderEvent-wrapper'>



            {!signedin? <div className='ga_google-login'>
                <p>Login in to Google</p>
                <button className="button" onClick={()=>getAuthToGoogle()}>Sign In</button>
            </div>:
            <div className='ga_body'>

            <div className="meeting_add">

            <p>Email: {googleAuthedEmail}</p>
            <button className="button" onClick={()=>_signOutFromGoogle()}>Sign Out</button>
            </div>

                <form>

                <br />
                <label className="tile_text_bi1">Title</label> <br />
                <input className="input" type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
                <br />
                <label className="tile_text_bi1">Description</label> <br />
                <input className="input" type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
                <br />
                <label className="tile_text_bi1">Start Time</label> <br />
                <input className="input" type="datetime-local" name="s_time" onChange={(e) => sets_time(e.target.value)}/>
                <br />
                <label className="tile_text_bi1">End Time</label> <br />
                <input className="input" type="datetime-local" name="e_time" onChange={(e) => sete_time(e.target.value)}/>
                <br />
                <label className="tile_text_bi1">Attendees</label> <br />
                <input className="input" type="text" name="att" onChange={(e) => setatt(e.target.value)}/>
                <br />
                <br />
                <button className="button_add" onClick={(e)=>submit(e)}>Add New</button>
                </form>
            </div>}

            <div id="inq_tbl">
</div>
        </div>
    )
}
