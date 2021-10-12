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
import BuildIcon from '@material-ui/icons/Build';


const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '105vh', marginTop: '-20px', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1F78B4">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none2"
            style={{ color: 'inherit' }} >
            ecomms
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/manu" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="home"> Product Management</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/manu/ProductSearch" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="clipboard-list">Check All Products</CDBSidebarMenuItem>
            </NavLink>

           <NavLink exact to="/manu/update" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="edit">Update Products</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/manu/manf" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="cogs"> Machine Management</CDBSidebarMenuItem>
            </NavLink>

             <NavLink exact to="/manu/MachineSearch" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="clipboard">Check All Machines</CDBSidebarMenuItem>
            </NavLink>

             <NavLink exact to="/manu/Mupdate" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="edit">Update Machines</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/manu/Request_page" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="columns">Requests</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/manu/reports" activeClassName="activeClicked">
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
