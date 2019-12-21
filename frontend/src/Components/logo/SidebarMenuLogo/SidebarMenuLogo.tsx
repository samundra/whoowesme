import React from 'react';
import styled from 'styled-components';

type LogoProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
};

const SidebarMenuLogo: React.FunctionComponent<LogoProps> = ({
  src = '/img/sidebarmenu-logo-74x45.jpg',
  alt = 'application logo',
  ...props
}) => <StyledMenuLogo {...props} src={src} alt={alt} />;

const StyledMenuLogo = styled('img')`
  height: 32px;
  margin: 16px 0 16px 8px;
  background: #fff;
`;

export default SidebarMenuLogo;
