import { all, fork } from 'redux-saga/effects'
import transactionSaga from './features/transaction/transaction.saga'

function* rootSaga() {
  yield all([fork(transactionSaga)])
}

export default rootSaga
