import React from 'react';
import styled from 'styled-components';

type Props = { title?: string };

const PageContent: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledDiv>
      {props.title && <h2>{props.title}</h2>}
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
