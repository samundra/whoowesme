import React from 'react';
import { SiderContext } from 'Components/context/SiderContext';
import { Button } from 'antd';

type Props = {};

const HamburgerMenu: React.FunctionComponent<Props> = () => {
  return (
    <SiderContext.Consumer>
      {({ collapsed, toggleSider }) => (
        <span>
          <Button
            type="link"
            icon={collapsed ? 'menu' : 'menu'}
            onClick={toggleSider}
          />
        </span>
      )}
    </SiderContext.Consumer>
  );
};

export default HamburgerMenu;
