import React from 'react';
import './searchBar.css';
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({placeholder, data}) {
    return ( 
        <div className="search">
            <div className="searchInputs">
                 <input type="number" placeholder={placeholder}/>
                 <div className="searchIcon"><SearchIcon/></div>
                </div>
             <div className="dataResult">
                {data.map((value, key) =>{
                        return (
                        <a className="dataItem" target="_blank">
                            <p>{value.empid}</p>
                        </a> 
                        );
                })}
            </div>


            
        </div>
    );
}

export default SearchBar;