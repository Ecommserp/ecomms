import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Home from './Pages/Home';
import MHome from './Pages/MHome';
import Reports from './Pages/Reports';
import Update from './Pages/Update';
import Additem from './Pages/Additem';
import MAdditem from './Pages/MAdditem';
import ALLMachins from './Pages/ALLMachins';
import machinSearch from './Pages/MachinSearch';
import Deleteitem from './Pages/Deleteitem';
import UpdateForm from './Pages/UpdateForm';
import GenerateReports from './Pages/GenerateReports';
import ViewReports from './Pages/ViewReports';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <AnimatePresence>
        <Sidebar />
        <Switch>
          <Route path='/manu' exact component={Home} />
          <Route path='/manu/manf' exact component={MHome} />
          <Route path='/manu/reports' component={Reports} />
          <Route path='/manu/update' component={Update} />
          <Route path='/manu/Additem' component={Additem} />
           <Route path='/manu/MAdditem' component={MAdditem} />
           <Route path='/manu/ALLMachins' component={ALLMachins} />
           <Route path='/manu/machinSearch' component={machinSearch} />
          <Route path= '/manu/Deleteitem' component={Deleteitem} />
          <Route path= '/manu/updateform' component={UpdateForm} />
          <Route path= '/manu/generatereports' component={GenerateReports} />
          <Route path= '/manu/viewreports' component={ViewReports} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
