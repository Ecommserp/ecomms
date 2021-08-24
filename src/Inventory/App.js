import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Update from './Pages/Update';
import Additem from './Pages/Additem';
import Deleteitem from './Pages/Deleteitem';
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
          <Route path='/inventory/update' component={Update} />
          <Route path='/inventory/Additem' component={Additem} />
          <Route path= '/inventory/Deleteitem' component={Deleteitem} />
        </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
