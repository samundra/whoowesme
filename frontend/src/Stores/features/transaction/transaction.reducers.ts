import * as actions from './transaction.actions'
import { ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'
import { parseErrorMessage } from 'Stores/helper'
import { AxiosError } from 'axios'

type API_STATE = 'pending' | 'complete' | 'error'

const initialState = {
  items: [] as Transaction[],
  error: '',
  loading: '' as API_STATE,
}

export type CompanyState = typeof initialState
type Action = ActionType<typeof actions>

const transactionReducer = createReducer<CompanyState, Action>(initialState)
  .handleAction(actions.addTransactionAsync.request, state =>
    produce(state, draft => {
      draft.error = ''
      draft.loading = 'pending'
    }),
  )
  .handleAction(actions.addTransactionAsync.success, (state, action) =>
    produce(state, draft => {
      draft.error = ''
      // draft.items = action.payload
      draft.loading = 'complete'
    }),
  )
  .handleAction(actions.addTransactionAsync.failure, (state, action) =>
    produce(state, draft => {
      const errorMessage = parseErrorMessage(action.payload as AxiosError)
      draft.error = errorMessage // extract actual error message from payload
      draft.loading = 'error'
    }),
  )

export default transactionReducer
