import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancer = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreator and other options if needed
})

const storeEnhancer = composeEnhancer(
  applyMiddleware(),
  // other enhancer if any
)

export default createStore(rootReducer, storeEnhancer)
