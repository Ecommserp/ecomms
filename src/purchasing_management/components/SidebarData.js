import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Search Stocks',
    path: '/search_stocks',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Stocks',
    path: '/manage_stocks',
    icon: <FaIcons.FaEdit/>,
    cName: 'nav-text'
  },
  {
    title: 'View Stocks',
    path: '/view_stocks',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View Suppliers',
    path: '/view_suppliers',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
,
  {
    title: 'Generate reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }

];
