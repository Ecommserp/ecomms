import Login from '../Login';
import logo from '../assets/cyan.png';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './App.css';

function Home() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /><br /><br />

<div className="button_group">
      <button className="button">Meetings</button>
</div>
    </div>

  );
}

export default Home;
