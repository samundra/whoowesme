import React from 'react';
import AddFriendForm from 'Components/form/AddFriendForm';

export const meta = {
  to: '/manage-friend',
  label: 'Manage Friend',
};

type Props = {};

const ManageFriend: React.FunctionComponent<Props> = () => {
  return <AddFriendForm />;
};

export default ManageFriend;
