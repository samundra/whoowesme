import React from 'react'

type Props = {
  record: Transaction
}

const TransactionForm: React.FunctionComponent<Props> = props => {
  return <h1>TransactionForm {JSON.stringify(props.record)}</h1>
}

export default TransactionForm
