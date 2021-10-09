import React, { useState, useEffect } from 'react';
import { signInToGoogle, initClient,getSignedInUserEmail, signOutFromGoogle , publishTheCalenderEvent } from './GoogleService';
import moment from 'moment';
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
            'attendees': [
              {'email': 'dinithkaushalya55@gmail.com'},
              {'email': 'pulasthi.perera94@gmail.com'}
            ],
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
        </div>
    )
}
