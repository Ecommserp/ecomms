import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Inventory from './Inventory/App';
import Insert from './components/addUser';
import Account from './Account/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render(

  <React.StrictMode>


<Router>
    <Switch>

              <Route path='/Home' component={App} />
              <Route path='/Login' component={Login} />
              <Route path='/Inventory' component={Inventory} />
              <Route path='/Insert' component={Insert} />
              <Route path='/Account' component={Account} />
    </Switch>
</Router>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
