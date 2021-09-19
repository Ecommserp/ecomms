import React from 'react';
import './Sales.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Sales from './components/pages/Sales';
import Products from './components/pages/Products';
import Invoices from './components/pages/Invoices';
import AddSales from './components/pages/AddSales';
import EditRows from './components/pages/EditRows';
import ReadRow from './components/pages/ReadRow';
import ManageClient from './components/pages/ManageClient';

function Salesmanagement() {
  return (
    <>
      <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/sales' component={Sales} />
          <Route path='/manageclient' component={ManageClient} />
          <Route path='/products' component={Products} />
          <Route path='/invoices' component={Invoices} />
          <Route path='/addsales' component={AddSales}/>
        </Switch>
      </Router>
      
     <div>
     
     </div>
    
      </div>
      </> 
  );
}

export default Salesmanagement;
