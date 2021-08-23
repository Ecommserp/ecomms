import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/inventory',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Update Inventory',
    path: '/inventory/update',
    icon: <FaIcons.FaEdit/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/inventory/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];