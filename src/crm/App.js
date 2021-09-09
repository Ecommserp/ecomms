import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import CustomerHome from './Pages/CustomerHome';
import CustomerReport from './Pages/CustomerReport';
import UpdateCustomer from './Pages/UpdateCustomer';
import Addcustomer from './Pages/Addcustomer';
import Deletecustomer from './Pages/Deletecustomer';
import UpdateCustomerForm from './Pages/UpdateCustomerForm';
import GenerateCustomerReports from './Pages/GenerateCustomerReport';
import ViewCustomerReports from './Pages/ViewCustomerReports';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <AnimatePresence>
        <Sidebar />
        <Switch>
          <Route path='/crm' exact component={CustomerHome} />
          <Route path='/crm/CustomerReport' component={CustomerReport} />
          <Route path='/crm/UpdateCustomer' component={UpdateCustomer} />
          <Route path='/crm/Addcustomer' component={Addcustomer} />
          <Route path= '/crm/Deletecustomer' component={Deletecustomer} />
          <Route path= '/crm/UpdateCustomerForm' component={UpdateCustomerForm} />
          <Route path= '/crm/GenerateCustomerReports' component={GenerateCustomerReports} />
          <Route path= '/crm/ViewCustomerReports' component={ViewCustomerReports} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;