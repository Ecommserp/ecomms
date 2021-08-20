import logo from './assets/cyan.png';
import hr from './assets/home/HR.png';
import inventory from './assets/home/inventory.png';
import bi from './assets/home/BI.png';
import pu from './assets/home/purchasing.png';
import ac from './assets/home/account.png';
import sale from './assets/home/sales.png';
import crm from './assets/home/crm.png';
import manu from './assets/home/manu.png';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />




    <div className="container">
    <div className="tile">
    <p className="tile_text">Human <br />Resource</p>
    <img src={hr} className="hr_img" alt="HR" />
    </div>
    <div className="space"></div>
    <div className="tile">
    <p className="tile_text">Inventory <br />Management</p>
    <img src={inventory} className="inv_img" alt="inventory" />
    </div>

    <div className="space"></div>
    <div className="tile">
    <p className="tile_text">Business <br />Intelligence</p>
    <img src={bi} className="bi_img" alt="inventory" />
    </div>
<br /><br /> <br />

    <div className="tile">
    <p className="tile_text">Purchasing <br />Management</p>
    <img src={pu} className="pu_img" alt="purchasing" />
    </div>

    <div className="space"></div>
    <div className="tile">
    <p className="tile_text">Account <br />Management</p>
    <img src={ac} className="ac_img" alt="account" />
    </div>

    <div className="space"></div>
    <div className="tile">
    <p className="tile_text">Sales <br />Management</p>
    <img src={sale} className="sale_img" alt="Sales" />
    </div>
    <br /><br /> <br />

    <div className="tile">
    <p className="tile_text">Customer <br />Management</p>
    <img src={crm} className="crm_img" alt="Customer" />
    </div>

    <div className="space"></div>
    <div className="tile">
    <p className="tile_text">Product <br />Manufacturing</p>
    <img src={manu} className="manu_img" alt="Manufacturing" />
    </div>

    </div>
    </div>
  );
}

export default App;
