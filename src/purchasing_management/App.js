import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Search_stocks from './pages/Search_stocks';
import Manage_stocks from './pages/Manage_stocks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">



     <Router>
        <Sidebar>

       </Sidebar>
       <Switch>
        <Route path="/Purchasing_Management/pages/Search_stocks" component={Search_stocks}>
           </Route>
        <Route path="/Purchasing_Management/pages/Manage_stocks" component={Manage_stocks}>

        </Route>
       </Switch>
     </Router>

   </div>
  );
}

export default App;
