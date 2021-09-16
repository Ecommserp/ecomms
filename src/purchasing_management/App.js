import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Search_stocks from './Pages/search_stocks';
import View_stocks from './Pages/view_stocks';
import Reports from './Pages/reports';
import Manage_stocks from './Pages/manage_stocks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">



     <Router>
        <Sidebar>

       </Sidebar>
       <Switch>
        <Route path="/Purchasing_Management" exact component={Search_stocks}>
           </Route>
        <Route path="/Purchasing_Management/pages/Manage_stocks" component={Manage_stocks}>
        </Route>
        <Route path="/Purchasing_Management/pages/View_stocks" component={View_stocks}>
        </Route>

        <Route path="/Purchasing_Management/pages/Reports" component={Reports}>
        </Route>
       </Switch>
     </Router>

   </div>
  );
}

export default App;
