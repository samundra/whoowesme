import {transactionReducer} from './transaction/reducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  transaction: transactionReducer,
})

export default rootReducer
