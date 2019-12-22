import {
  Transaction,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TransactionActionTypes,
} from './types';

export function addTransaction(
  newTransaction: Transaction
): TransactionActionTypes {
  return {
    type: ADD_TRANSACTION,
    payload: newTransaction,
  };
}

export function deleteTransaction(timestamp: number): TransactionActionTypes {
  return {
    type: DELETE_TRANSACTION,
    meta: {
      timestamp,
    },
  };
}
