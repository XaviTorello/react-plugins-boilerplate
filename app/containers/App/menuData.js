// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import EuroIcon from '@material-ui/icons/EuroSymbol';
import ProfileIcon from '@material-ui/icons/PermIdentity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MessageIcon from '@material-ui/icons/Message';
import PasswordIcon from '@material-ui/icons/VpnKey';

const menuList = [
  {
    icon: DashboardIcon,
    text: 'Dashboard',
    url: '/dashboard',
    title: 'Go to the Dashboard',
    disabled: true,
  },
  {
    icon: ProfileIcon,
    text: 'Contracts',
    url: '/contracts',
    title: 'View contracts list',
  },
  {
    icon: EuroIcon,
    text: 'Invoices',
    url: '/invoices',
    title: 'View invoices list',
  },
  {
    divider: true,
  },
  {
    icon: MessageIcon,
    text: 'Contact',
    url: '/contact',
    title: 'Send us a message',
    disabled: true,
  },
  {
    divider: true,
  },
  {
    icon: PasswordIcon,
    text: 'Password change',
    url: '/password/change',
    title: 'Change your password',
    disabled: true,
  },
];

export const menu = menuList.map(
  entry =>
    entry.divider ? (
      <Divider />
    ) : (
      <ListItem
        button
        key={entry.url}
        disabled={entry.disabled || false}
        title={entry.title || entry.text}
      >
        <ListItemIcon>
          <entry.icon />
        </ListItemIcon>
        <ListItemText primary={entry.text} />
      </ListItem>
    ),
);
