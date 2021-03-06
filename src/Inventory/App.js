import React from 'react';
import './inv.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Home from './Pages/Home';
import Reports from './Pages/GenerateReports';
import UpdateForm from './Pages/UpdateForm';
import ViewReports from './Pages/ViewReports';
import View from './Pages/View';
import Types from './Pages/types';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <AnimatePresence>
        <Sidebar />
        <Switch>
          <Route path='/inventory' exact component={Home} />
          <Route path='/inventory/reports' component={Reports} />
          <Route path='/inventory/update' component={UpdateForm} />
          <Route path= '/inventory/viewreports' component={ViewReports} />
          <Route path= '/inventory/view' component={View} />
          <Route path= '/inventory/types' component={Types} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
