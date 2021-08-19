import transactionReducer from './features/transaction/transaction.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  transaction: transactionReducer,
})

export default rootReducer
