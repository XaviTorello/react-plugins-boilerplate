// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MaterialIcon from 'components/MaterialIcon';

const menuList = [
  {
    icon: 'Dashboard',
    text: 'Dashboard',
    url: '/dashboard',
    title: 'Go to the Dashboard',
    disabled: true,
  },
  {
    icon: 'PermIdentity',
    text: 'Contracts',
    url: '/contracts',
    title: 'View contracts list',
  },
  {
    icon: 'EuroSymbol',
    text: 'Invoices',
    url: '/invoices',
    title: 'View invoices list',
  },
  {
    divider: true,
  },
  {
    icon: 'Message',
    text: 'Contact',
    url: '/contact',
    title: 'Send us a message',
    disabled: true,
  },
  {
    divider: true,
  },
  {
    icon: 'VpnKey',
    text: 'Password change',
    url: '/password/change',
    title: 'Change your password',
    disabled: true,
  },
];

export const menu = menuList.map(entry => {
  const EntryIcon = (entry.icon && MaterialIcon(entry.icon)) || null;

  return entry.divider ? (
    <Divider key={Math.random()} />
  ) : (
    <ListItem
      button
      key={entry.url}
      disabled={entry.disabled || false}
      title={entry.title || entry.text}
    >
      <ListItemIcon>
        <EntryIcon />
      </ListItemIcon>
      <ListItemText primary={entry.text} />
    </ListItem>
  );
});
