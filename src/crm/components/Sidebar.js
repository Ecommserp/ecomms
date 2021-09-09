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
      style={{ display: 'flex', height: '105vh', marginTop: '-20px' ,overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1F78B4">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none2"
            style={{ color: 'inherit' }}
          >
            ecomms
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/crm" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/crm/UpdateCustomer" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="edit">Update Inventory</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/crm/ViewCustomerReport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Reports</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
        
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>


  );
};

export default Sidebar;