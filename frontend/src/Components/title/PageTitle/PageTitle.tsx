import React from 'react'
import styled from 'styled-components'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FunctionComponent<PageTitleProps> = ({ title }) => {
  return <StyledPageTitle>{title}</StyledPageTitle>
}

const StyledPageTitle = styled('h3')``

export default PageTitle
