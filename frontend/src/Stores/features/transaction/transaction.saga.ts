import { put, call, all, takeEvery } from 'redux-saga/effects'
import * as actions from './transaction.actions'

function* addTransaction(action: ReturnType<typeof actions.addTransactionAsync.request>) {
  try {
    // @ts-ignore
    const response = yield call(api.addTransaction, action.payload)
    yield put(actions.addTransactionAsync.success(response.data))
  } catch (error) {
    console.error(error)
    // @ts-ignore
    yield put(actions.addTransactionAsync.failure(error))
  }
}

function* transactionSaga() {
  yield all([takeEvery(actions.addTransactionAsync.request, addTransaction)])
}

export default transactionSaga
