import React from 'react';
import styled from 'styled-components';
import PageTitle from '../PageTitle';

type Props = { title?: string };

const PageContent: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledDiv>
      {props.title && <PageTitle title={props.title} />}
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled('div')`
  padding: 24px;
  background: #fff;
  minheight: 360px;
`;

export default PageContent;
