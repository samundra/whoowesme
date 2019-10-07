import React from 'react';
import { SendInvitationForm } from 'Components/form';

export const meta = {
  to: '/send-invitation',
  label: 'Send Invitation',
};

type Props = {};

const SendInvitation: React.FunctionComponent<Props> = () => {
  return <SendInvitationForm />;
};

export default SendInvitation;
