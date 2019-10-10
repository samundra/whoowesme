import React from 'react';
import { AddFriendForm } from 'Components/form';

export const menu = {
  to: '/add-friend',
  label: 'Add friend',
};

type Props = {};

const ManageFriend: React.FunctionComponent<Props> = () => {
  return <AddFriendForm />;
};

export default ManageFriend;
