import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Managingdb from './Pages/managingdb';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <AnimatePresence>
        <Navbar />
        <Switch>
          <Route path='/Account/managingdb' exact component={Managingdb} />
          <Route path='/inventory/reports' component={Reports} />
          <Route path='/inventory/update' component={Update} />
          <Route path='/inventory/Additem' component={Additem} />
          <Route path= '/inventory/Deleteitem' component={Deleteitem} />
        </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
