export interface Transaction {
  id: number;
  date: string;
  category: string[];
  amount: string | number;
  description: string;
  timestamp: number;
}

export interface TransactionState {
  transactions: Transaction[];
}

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: Transaction;
}

export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  meta: {
    timestamp: number;
  };
}

export type TransactionActionTypes =
  | AddTransactionAction
  | DeleteTransactionAction;
