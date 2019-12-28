import React from 'react'
import {Button} from 'antd'

export default {title: 'Button', component: Button}

export const dangerButton = (): JSX.Element => (
  <Button type="danger">Danger</Button>
)
export const ghostButton = (): JSX.Element => (
  <Button type="ghost">Ghost</Button>
)
export const linkButton = (): JSX.Element => <Button type="link">Link</Button>
export const dashedButton = (): JSX.Element => (
  <Button type="dashed">Dashed</Button>
)
export const primaryButton = (): JSX.Element => (
  <Button type="primary">Primary</Button>
)
