import React from 'react';
import App from './App';
import database from './database';
import search from './search';
import CrudOps from './CrudOps';
import Salary from './Salary';
import attendance from './attendance';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>


    <Router>
      <Switch>

        <Route path='/Hrdatabase' component={database} />
        <Route path='/Hrsearch' component={search} />
        <Route path='/HrCrudOps' component={CrudOps} />
        <Route path='/HrSalary' component={Salary} />
        <Route path='/Hrattendance' component={attendance} />


      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
