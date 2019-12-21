import React from 'react';

export const SiderContext = React.createContext<SiderContextValue>({
  collapsed: false,
  toggleSider: () => {},
});

SiderContext.displayName = 'SiderContext';

export default SiderContext;
