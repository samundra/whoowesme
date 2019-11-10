import React from 'react';
import styled from 'styled-components';

type LogoTypeSmall = 'small';
type LogoTypeDefault = 'default';

type LogoProps = {
  type?: LogoTypeSmall | LogoTypeDefault;
  width?: number;
  height?: number;
};

const SidebarMenuLogo: React.FunctionComponent<LogoProps> = props => {
  const { type } = props;
  const localProps = Object.assign({}, props);
  delete localProps['type'];

  if (type === 'small') {
    return (
      <StyledMenuLogo
        {...localProps}
        src="/img/sidebarmenu-logo-74x45.jpg"
        alt="collapsed application logo"
      />
    );
  }

  return (
    <StyledMenuLogo
      {...props}
      src="/img/sidebarmenu-logo-192x45.jpg"
      alt="expanded application logo"
    />
  );
};

const StyledMenuLogo = styled('img')`
  height: 32px;
  margin: 16px 0 16px 8px;
  background: #fff;
`;

export default SidebarMenuLogo;
