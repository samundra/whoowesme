import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Footer } = Layout

type Props = {}

const AppFooter: React.FunctionComponent<Props> = () => {
  return <StyledFooter>Whoowesme ©{new Date().getFullYear()}</StyledFooter>
}

const StyledFooter = styled(Footer)`
  text-align: center;
`

export default AppFooter
