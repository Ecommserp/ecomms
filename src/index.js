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
import Managingdb from './Account/Pages/managingdb';
import Financial from './Account/Pages/financial';
import Purchasing_management from './purchasing_management/App';
import BI from './BI/Dash';
import reportWebVitals from './reportWebVitals';
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
              <Route path='/Manu' component={Manu} />
              <Route path='/CRM' component={Crm} />
              <Route path='/Insert' component={Insert} />
              <Route path='/Account' component={Account} />
              <Route path='/Financial' component={Financial} />
              <Route path='/managingdb' component={Managingdb} />
              <Route path='/purchasing_management' component={Purchasing_management} />
                <Route path='/BI' component={BI} />
    </Switch>
</Router>
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
