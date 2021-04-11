import React from 'react'

type Props = {}

const CheckApi: React.FunctionComponent<Props> = () => {
  return (
    <>
      <ul>
        <li>API Base url: {process.env.REACT_APP_API_BASEURL}</li>
      </ul>
    </>
  )
}

export default CheckApi
