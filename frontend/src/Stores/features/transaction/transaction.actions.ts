import { createAsyncAction } from 'typesafe-actions'

export const addTransactionAsync = createAsyncAction(
  'ADD_TRANSACTION_REQUEST',
  'ADD_TRANSACTION_SUCCESS',
  'ADD_TRANSACTION_FAILURE',
)<Transaction, Transaction, Error>()
