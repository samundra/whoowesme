import React from 'react';

export const SiderContext = React.createContext({
  collapsed: false,
  toggleSider: () => {},
});

SiderContext.displayName = 'SiderContext';
