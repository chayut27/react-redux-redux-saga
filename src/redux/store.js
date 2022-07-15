import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension';
import rootSaga from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
)

const store = createStore(rootReducer, composedEnhancer)


// then run the saga
sagaMiddleware.run(rootSaga)

export default store