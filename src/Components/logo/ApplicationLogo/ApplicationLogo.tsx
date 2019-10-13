import React from 'react';

type Props = {};

const ApplicationLogo: React.FunctionComponent<Props> = () => {
  return (
    <img
      src="/logo-48x48.jpg"
      width="48"
      height="48"
      alt="application logo"
      style={{
        width: '48px',
        height: '48px',
        display: 'block',
        float: 'left',
        padding: '16px',
        boxSizing: 'content-box',
      }}
    />
  );
};

export default ApplicationLogo;
