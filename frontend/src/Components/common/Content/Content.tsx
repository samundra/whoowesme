import React from 'react'
import {Layout} from 'antd'
import styled from 'styled-components'

const {Content} = Layout

type Props = {
  children: React.ReactNode
}

const AppContent: React.FunctionComponent<Props> = ({children}) => {
  return <StyledContent>{children}</StyledContent>
}

const StyledContent = styled(Content)`
  margin: 0 16px;
`

export default AppContent
