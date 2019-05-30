import {createStore, applyMiddleware} from 'redux';
import reducer from './reduser';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import history from '../history';
import rootSaga from './saga'

const sagaMiddlaware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddlaware, routerMiddleware(history), thunk, logger);

const store = createStore(reducer(history), enhancer);
window.store = store;

sagaMiddlaware.run(rootSaga);

export default store;