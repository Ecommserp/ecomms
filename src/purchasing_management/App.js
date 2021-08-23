import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Search_stocks from './Pages/search_stocks';
import Manage_stocks from './Pages/manage_stocks';
import View_stocks from './Pages/view_stocks';
import View_sippliers from './Pages/view_sippliers';
import Reports from './Pages/Reports';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <AnimatePresence>
        <Navbar />
        <Switch>
          <Route path='/search_stocks' exact component={Search_stocks} />
          <Route path='/manage_stocks' component={Manage_stocks} />
          <Route path='/view_stocks' component={View_stocks} />
          <Route path='/view_sippliers' component={View_sippliers} />
          <Route path= '/reports' component={Reports} />
        </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
