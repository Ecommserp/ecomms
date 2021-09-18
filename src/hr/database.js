
import './Hr.css';
import logo from './images/ecomms_logo.png';
import Table from "./Table";
import Navbar from "./components/Navbar";






function database() {
    return (
        <div className="App" className="body">
            <img src={logo} className="App-logo" alt="logo" />


            <div>
                <h1 className="tile">Employee Database</h1>
            </div>
            <div>
            <Navbar />

            </div>


            <br></br> <br></br> <br></br>

            <Table />




         </div>



    );




}

export default database;
