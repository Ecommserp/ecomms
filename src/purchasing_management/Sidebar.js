import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh',marginTop: '0px' ,overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1F78B4">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none2"
            style={{ color: 'inherit' }}
          >
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Purchasing_Management/pages/Search_stocks" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="search">Search Stocks</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Purchasing_Management/pages/Manage_stocks" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="columns">Manage Suppliers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Purchasing_Management/pages/View_stocks" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View Stocks</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Purchasing_Management/pages/View_suppliers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View Purchases</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Purchasing_Management/pages/Reports" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Generate reports</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          Dinith
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>


  );
};

export default Sidebar;
