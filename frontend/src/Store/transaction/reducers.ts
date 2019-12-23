import {
  Transaction,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TransactionState,
  TransactionActionTypes,
} from './types';

const initialState = {} as TransactionState;

export function transactionReducer(
  state = initialState,
  action: TransactionActionTypes
): TransactionState {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        transactions: [...state.transactions, action.payload],
      };
    case DELETE_TRANSACTION:
      return {
        transactions: state.transactions.filter(
          (transaction: Transaction) =>
            transaction.timestamp !== action.meta.timestamp
        ),
      };

    default:
      return state;
  }
}
