import React from 'react'
import { Button } from 'antd'
import { SiderContext } from 'Components/context'
import { MenuOutlined } from '@ant-design/icons'

type Props = {}

const HamburgerMenu: React.FunctionComponent<Props> = () => {
  return (
    <SiderContext.Consumer>
      {({ toggleSider }): JSX.Element => {
        return <Button icon={<MenuOutlined />} type="link" onClick={toggleSider} />
      }}
    </SiderContext.Consumer>
  )
}

export default HamburgerMenu
