import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import apiReducer from 'modules/api/reducer'
import createSagaMiddleware from 'redux-saga'
import apiSaga from 'modules/api/saga'

const reducers = combineReducers({
  api: apiReducer
})

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(apiSaga)

export default store