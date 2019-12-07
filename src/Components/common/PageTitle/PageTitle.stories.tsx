import React from 'react';
import PageTitle from './PageTitle';

export default { title: 'PageTitle' };

export const withTitle = () => <PageTitle title="Sample Page Title" />;

export const withIcon = () => (
  <PageTitle title="Sample Page Title" icon="plus" />
);
