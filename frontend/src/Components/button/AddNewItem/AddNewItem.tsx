import React from 'react';
import { Button, Icon } from 'antd';

type Props = {
  onClick(): void;
};

const AddNewItem: React.FunctionComponent<Props> = props => {
  const { onClick } = props;

  return (
    <Button onClick={onClick}>
      <Icon type="plus" /> Add new Item
    </Button>
  );
};

export default AddNewItem;
