import React from 'react';
import PageContent from './PageContent';

export default {
  title: 'PageContent',
};

export const withNoTitle = () => (
  <PageContent>
    <div>No page title. Page body only.</div>
  </PageContent>
);

export const withTitle = () => (
  <PageContent title="Add new Page">Page title with page body.</PageContent>
);
withTitle.story = {
  name: 'With Title',
  parameters: {
    notes: 'Page Title',
  },
};

export const withTitleAndIcon = () => (
  <PageContent title="Add new Page" icon="plus">
    Page title with icon and page body.
  </PageContent>
);
withTitleAndIcon.story = {
  name: 'With Title And Icon',
  parameters: {
    notes: 'This contains title and icon',
  },
};

export const withHorizontalDivider = () => (
  <PageContent title="Add new Page" icon="plus" titleDivider>
    Horizontal bar separator between page title and page body.
  </PageContent>
);
