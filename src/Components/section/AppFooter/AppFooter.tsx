import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

type Props = {};

const AppFooter: React.FunctionComponent<Props> = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Whoowesme ©2019 Created by Love
    </Footer>
  );
};

export default AppFooter;
