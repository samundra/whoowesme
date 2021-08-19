import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const middlewares = []

const composeEnhancer = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreator and other options if needed
})

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const storeEnhancer = composeEnhancer(
  applyMiddleware(...middlewares),
  // other enhancer if any
)

const store = createStore(rootReducer, storeEnhancer)
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
