import React from 'react'
import styled from 'styled-components'
import PageTitle from 'Components/common/PageTitle'
import {Divider} from 'antd'

type Props = {title?: string; icon?: string; titleDivider?: boolean}

const PageContent: React.FunctionComponent<Props> = ({children, ...props}) => {
  const {icon = undefined, titleDivider = false} = props

  if (icon) {
    return (
      <StyledDiv>
        {props.title && <PageTitle title={props.title} icon={icon} />}
        {titleDivider && <Divider type="horizontal" />}
        {children}
      </StyledDiv>
    )
  }

  return (
    <StyledDiv>
      {props.title && <PageTitle title={props.title} />}
      {titleDivider && <Divider type="horizontal" />}
      {children}
    </StyledDiv>
  )
}

const StyledDiv = styled('div')`
  padding: 24px;
  background: #fff;
  minheight: 360px;
`

export default PageContent
