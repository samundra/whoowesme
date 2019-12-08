import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import 'antd/dist/antd.css';

configure(require.context('../src', true, /\.stories\.tsx$/), module);

// Global decorators
const styles = { padding: '10px' };
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(PaddingDecorator);
