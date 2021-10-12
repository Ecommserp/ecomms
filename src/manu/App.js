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
import Request_page from './Pages/request_page'
import Update from './Pages/Update';
import MUpdate from './Pages/MUpdate';
import Additem from './Pages/Additem';
import MAdditem from './Pages/MAdditem';
import ALLMachins from './Pages/ALLMachins';
import ProductSearch from './Pages/ProductSearch';
import MachineSearch from './Pages/MachineSearch';
import Deleteitem from './Pages/Deleteitem';
import MDeleteitem from './Pages/MDeleteitem';
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
          <Route path='/manu/MUpdate' component={MUpdate} />
          <Route path='/manu/Additem' component={Additem} />
          <Route path='/manu/MAdditem' component={MAdditem} />
          <Route path='/manu/ALLMachins' component={ALLMachins} />
          <Route path='/manu/ProductSearch' component={ProductSearch} />
          <Route path='/manu/MachineSearch' component={MachineSearch} />
          <Route path= '/manu/Deleteitem' component={Deleteitem} />
          <Route path= '/manu/MDeleteitem' component={MDeleteitem} />
          <Route path= '/manu/updateform' component={UpdateForm} />
          <Route path= '/manu/generatereports' component={GenerateReports} />
          <Route path="/manu/Request_page" component={Request_page}/>

          <Route path= '/manu/viewreports' component={ViewReports} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
