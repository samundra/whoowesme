import React from 'react';
import { SendInvitationForm } from 'Components/form';

export const menu = {
  to: '/send-invitation',
  label: 'Send Invitation',
};

type Props = {};

const SendInvitation: React.FunctionComponent<Props> = () => {
  return <SendInvitationForm />;
};

export default SendInvitation;
