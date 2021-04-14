import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'modules/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
function ConfigureStore(initialState) {
  const middleware = [reduxThunk]
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return store
}

export default ConfigureStore
