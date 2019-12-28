import React from 'react'
import {SiderContext} from 'Components/context'
import {Button} from 'antd'

type Props = {}

const HamburgerMenu: React.FunctionComponent<Props> = () => {
  return (
    <SiderContext.Consumer>
      {({collapsed, toggleSider}): JSX.Element => (
        <Button
          type="link"
          icon={collapsed ? 'menu' : 'menu'}
          onClick={toggleSider}
        />
      )}
    </SiderContext.Consumer>
  )
}

export default HamburgerMenu
