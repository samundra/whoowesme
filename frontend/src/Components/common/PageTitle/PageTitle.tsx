import React from 'react'

type Props = {
  title: string
  icon?: React.ReactNode
}

const PageTitle: React.FunctionComponent<Props> = ({ title, ...props }) => {
  const { icon } = props

  if (icon) {
    return (
      <h3 {...props}>
        {icon} {title}
      </h3>
    )
  }

  return <h3 {...props}>{title}</h3>
}

export default PageTitle
