import React from 'react';
import PageTitle from './PageTitle';

export default { title: 'PageTitle' };

export const withTitle = (): JSX.Element => (
  <PageTitle title="Sample Page Title" />
);

export const withIcon = (): JSX.Element => (
  <PageTitle title="Sample Page Title" icon="plus" />
);
