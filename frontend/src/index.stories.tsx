import React from 'react';
import { Button } from 'antd';

export default { title: 'Button', component: Button };

export const dangerButton = () => <Button type="danger">Danger</Button>;
export const ghostButton = () => <Button type="ghost">Ghost</Button>;
export const linkButton = () => <Button type="link">Link</Button>;
export const dashedButton = () => <Button type="dashed">Dashed</Button>;
export const primaryButton = () => <Button type="primary">Primary</Button>;
