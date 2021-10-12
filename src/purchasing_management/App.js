import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Search_purchases from './Pages/search_purchases';
import Manage_purchases from './Pages/manage_purchases';
import Request_page from './Pages/request_page'
import Reports from './Pages/reports';
import Manage_suppliers from './Pages/manage_suppliers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">



     <Router>
        <Sidebar>

       </Sidebar>
       <Switch>
        <Route path="/Purchasing_Management" exact component={Search_purchases}>
           </Route>
        <Route path="/Purchasing_Management/pages/Manage_suppliers" component={Manage_suppliers}>
        </Route>
        <Route path="/Purchasing_Management/pages/Manage_purchases" component={Manage_purchases}>
        </Route>

        <Route path="/Purchasing_Management/pages/Request_page" component={Request_page}>
        </Route>
        <Route path="/Purchasing_Management/pages/Reports" component={Reports}>




        </Route>
       </Switch>
     </Router>

   </div>
  );
}

export default App;
