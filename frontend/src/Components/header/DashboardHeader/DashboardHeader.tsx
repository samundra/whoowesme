import React from 'react'
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Divider, Badge, Avatar, Dropdown } from 'antd'
import styled from 'styled-components'
import { ProfileMenu } from 'Components/menu/ProfileMenu'
import HamburgerMenu from 'Components/menu/HamburgerMenu/HamburgerMenu'
import { useHistory } from 'react-router-dom'
import AddNewItem from 'Components/button/AddNewItem'

const { Header } = Layout

type Props = {}
const DashboardHeader: React.FunctionComponent<Props> = () => {
  const history = useHistory()

  return (
    <StyledHeader>
      <HamburgerMenu />
      <AddNewItem onClick={(): void => history.push('/add-new-item')} />
      <StyledUserActions>
        <StyledSettingsMenu>
          <Badge count={10} dot={true}>
            <BellOutlined style={{ fontSize: 18 }} />
          </Badge>
        </StyledSettingsMenu>
        <Divider type="vertical" />
        <Dropdown overlay={<ProfileMenu />} trigger={['click', 'hover']}>
          <StyledProfileMenu>
            <Avatar shape="circle" icon={<UserOutlined />} style={{ marginRight: 5 }} />
            {'   '}
            <StyledUserFullname>Sam Shrestha</StyledUserFullname>
            <DownOutlined style={{ marginLeft: 15 }} />
          </StyledProfileMenu>
        </Dropdown>
      </StyledUserActions>
    </StyledHeader>
  )
}

const StyledMenu = styled('span')`
  user-select: none;
  cursor: pointer;
`

const StyledSettingsMenu = styled(StyledMenu)``

const StyledProfileMenu = styled(StyledMenu)`
  background: #fff;
  height: 100%;
  display: inline-block;
  padding: 0 5px;
`

const StyledUserFullname = styled('span')`
  margin-right: 5px;
`

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
  paddingleft: 10px;
  min-width: 470px;
  max-width: 100%;

  @media only screen and (max-width: 470px) {
    display: none;
  }
`

const StyledUserActions = styled('div')`
  background: #fff;
  margin-right: 10px;
  float: right;

  @media only screen and (max-width: 320px) {
    background: #000;
    color: #fff;
  }

  @media only screen and (max-width: 780px) {
    display: none;
  }
`

export default DashboardHeader
