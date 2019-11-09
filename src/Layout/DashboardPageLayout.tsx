import React from 'react';
import { Row, Col } from 'antd';
import MainNavigation from '../Components/navigation/MainNavigation';
import SidebarNavigation from '../Components/navigation/SidebarNavigation';

const contentStyle = {
  paddingLeft: '10px',
  textAlign: 'left',
  overflow: 'auto',
  height: 'auto',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as React.CSSProperties;

const navigationStyle = {
  width: '1024px',
  margin: '0 auto',
} as React.CSSProperties;

type CommonLayoutProps = {
  children: any;
};

const DashboardPageLayout: React.FunctionComponent<CommonLayoutProps> = ({
  children,
}) => {
  return (
    <Row className="App">
      <Row
        style={{
          textAlign: 'center',
          display: 'block',
        }}
      >
        <MainNavigation />
        <Row style={navigationStyle}>
          <SidebarNavigation />
          <Col style={contentStyle}>
            <Row>{children}</Row>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default DashboardPageLayout;
