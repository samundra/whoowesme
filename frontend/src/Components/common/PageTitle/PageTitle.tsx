import React from 'react';
import { Icon } from 'antd';

type Props = {
  title: string;
  icon?: string;
};

const PageTitle: React.FunctionComponent<Props> = ({ title, ...props }) => {
  const { icon } = props;

  if (icon) {
    return (
      <h3 {...props}>
        <Icon type={icon} /> {title}
      </h3>
    );
  }

  return <h3 {...props}>{title}</h3>;
};

export default PageTitle;
