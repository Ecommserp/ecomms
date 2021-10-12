import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Inventory from './Inventory/App';
import Crm from './crm/App';
import Manu from './manu/App';
import Insert from './components/addUser';
import Account from './Account/Home';
import crm from './crm/App';
import Managingdb from './Account/Pages/managingdb';
import Cash from './Account/Pages/cash';
import Income from './Account/Pages/income';
import Financial from './Account/Pages/financial';
import Purchasing_management from './purchasing_management/App';
import BI from './BI/Dash';
import HR from './hr/Hr';
import HRDatabase from './hr/database';
import HRSearch from './hr/search';
import HRCrudOps from './hr/CrudOps';
import HRSalary from './hr/Salary';
import HRAttendance from './hr/attendance';

import Salesmanagement from './sales/Sales';
//import HRReportWebVitals from './hr/reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";



ReactDOM.render(
<CookiesProvider>
  <React.StrictMode>


<Router>
    <Switch>

              <Route path='/Home' component={App} />
              <Route path='/Login' component={Login} />
              <Route path='/Inventory' component={Inventory} />
              <Route path='/crm' component={crm} />
              <Route path='/Manu' component={Manu} />
              <Route path='/CRM' component={Crm} />
              <Route path='/Insert' component={Insert} />
              <Route path='/Account' component={Account} />
              <Route path='/Financial' component={Financial} />
              <Route path='/managingdb' component={Managingdb} />
              <Route path='/cash' component={Cash} />
              <Route path='/Hr' component={HR} />
              <Route path='/income' component={Income} />
              <Route path='/financial' component={Financial} />
              <Route path='/purchasing_management' component={Purchasing_management} />
                <Route path='/BI' component={BI} />

                <Route path='/Hrdatabase' component={HRDatabase} />
                <Route path='/Hrsearch' component={HRSearch} />
                <Route path='/HrCrudOps' component={HRCrudOps} />
                <Route path='/HrSalary' component={HRSalary} />
                <Route path='/Hrattendance' component={HRAttendance} />

                <Route path='/sales' component={Salesmanagement} />

    </Switch>
</Router>
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
