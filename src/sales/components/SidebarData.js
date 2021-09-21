import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconName } from "react-icons/fa";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Sales',
    path: '/sales',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'AddSales',
    path: '/addsales',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
 
  {
    title: 'ManageClient',
    path: '/manageclient',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaInbox />,
    cName: 'nav-text'
  },
  
{
    title: 'Invoices',
    path: '/invoices',
    icon: <FaIcons.FaFileAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
];

