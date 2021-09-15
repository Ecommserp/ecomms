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
            <NavLink exact to="/crm/Addcustomer" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="plus-square">ADD Inquiries</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/crm/UpdateCustomer" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="edit">Update Inquiries</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/crm/Deletecustomer" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="trash-alt">Delete Inquiries</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/crm/Customeranalytics" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="chart-pie">Inquiry Analytics</CDBSidebarMenuItem>
            </NavLink>
           <NavLink exact to="/crm/GenerateCustomerReport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Inquiry Reports</CDBSidebarMenuItem>
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