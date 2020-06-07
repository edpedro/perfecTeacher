import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReduce from './mdules/rootReducer'
import {rootSaga} from './mdules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReduce, enhancer)

sagaMiddleware.run(rootSaga)

export default store